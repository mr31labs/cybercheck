import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import styles from '@/styles/Assessment.module.css';

export default function Assessment({ questions, type, title }) {
    const router = useRouter();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { questionId: score }
    const [isSubmitting, setIsSubmitting] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;

    const handleSelect = (optionIndex) => {
        const score = currentQuestion.options[optionIndex].score;

        setAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: {
                score,
                answerText: currentQuestion.options[optionIndex].text,
                suggestion: score < 5 ? currentQuestion.suggestion : null
            }
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        let totalScore = 0;
        let maxScore = 0;

        questions.forEach(q => {
            // Calculate max possible score for this question (assuming max is always positive)
            const maxQScore = Math.max(...q.options.map(o => o.score));
            maxScore += maxQScore;

            if (answers[q.id]) {
                totalScore += answers[q.id].score;
            }
        });

        const payload = {
            type,
            score: totalScore,
            maxScore,
            answers,
            timestamp: new Date().toISOString()
        };

        try {
            const res = await fetch('/api/save-result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                // Navigate to results
                router.push({
                    pathname: '/results',
                    query: {
                        score: totalScore,
                        max: maxScore,
                        type: type,
                        data: JSON.stringify(answers)
                    }
                });
            } else {
                alert('Failed to save results. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('An unexpected error happened:', error);
            setIsSubmitting(false);
        }
    };

    const currentAnswer = answers[currentQuestion.id];

    return (
        <Layout title={title}>
            <div className={styles.assessmentContainer}>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarFill} style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}></div>
                </div>

                <div className={styles.header}>
                    <h1 className="fade-in">{title}</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Question {currentQuestionIndex + 1} of {totalQuestions}</p>
                </div>

                <div className="fade-in" key={currentQuestion.id}>
                    <QuestionCard
                        question={currentQuestion}
                        selectedOption={currentAnswer ? currentQuestion.options.findIndex(o => o.text === currentAnswer.answerText) : -1}
                        onSelect={handleSelect}
                    />
                </div>

                <div className={styles.navigation}>
                    <button
                        className={styles.navButton}
                        onClick={() => setCurrentQuestionIndex(p => Math.max(0, p - 1))}
                        disabled={currentQuestionIndex === 0}
                        style={{ opacity: currentQuestionIndex === 0 ? 0.5 : 1 }}
                    >
                        Previous
                    </button>

                    <button
                        className={`${styles.navButton} ${styles.navButtonPrimary}`}
                        onClick={handleNext}
                        disabled={!currentAnswer || isSubmitting}
                        style={{ opacity: (!currentAnswer || isSubmitting) ? 0.5 : 1 }}
                    >
                        {isSubmitting ? 'Submitting...' : (currentQuestionIndex === totalQuestions - 1 ? 'Finish Assessment' : 'Next Question')}
                    </button>
                </div>
            </div>
        </Layout>
    );
}
