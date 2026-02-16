import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { scoring } from '@/data/questions';
import styles from '@/styles/Assessment.module.css';

export default function Results() {
    const router = useRouter();
    const { score, max, type, data } = router.query;

    // Wait for hydration
    if (!router.isReady) return <Layout><div style={{ textAlign: 'center', marginTop: '20vh' }}>Loading results...</div></Layout>;

    const finalScore = parseInt(score || 0);
    const maxScore = parseInt(max || 100);
    const percentage = Math.round((finalScore / maxScore) * 100);
    const userAnswers = data ? JSON.parse(decodeURIComponent(data)) : {};

    const grade = scoring.getGrade(percentage);

    // Extract suggestions from low-scoring answers
    const suggestions = Object.keys(userAnswers).map(key => {
        const ans = userAnswers[key];
        // Handle both string suggestions and object suggestions (with icons)
        return ans.suggestion;
    }).filter(Boolean).map(s => typeof s === 'string' ? { text: s } : s);

    return (
        <Layout title="Assessment Results">
            <div className={`${styles.assessmentContainer} fade-in`}>
                <div className={styles.header}>
                    <h1>Assessment Complete</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Here is your security profile based on your responses.
                    </p>
                </div>

                <div className={styles.resultsContainer}>
                    <div className={styles.scoreCircle} style={{ borderColor: grade.color, color: grade.color, boxShadow: `0 0 30px ${grade.color}40` }}>
                        {percentage}%
                    </div>

                    <h2 style={{ color: grade.color, fontSize: '2rem', marginBottom: '1rem' }}>
                        {grade.label}
                    </h2>

                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        You scored {finalScore} out of {maxScore} points.
                        {percentage >= 90 ? " Exceptional security posture." :
                            percentage >= 70 ? " Good alignment, but room for improvement." :
                                " Immediate action is recommended to mitigate risks."}
                    </p>
                </div>

                {suggestions.length > 0 && (
                    <div className={styles.suggestionList}>
                        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            {type === 'kids' ? 'Safety Tips' : 'Priority Actions'}
                        </h2>
                        {suggestions.map((item, idx) => (
                            <div key={idx} className={styles.suggestionItem}>
                                <h3>
                                    {item.icon && <span style={{ marginRight: '8px', fontSize: '1.5rem' }}>{item.icon}</span>}
                                    {type === 'kids' ? `Tip #${idx + 1}` : `Recommendation #${idx + 1}`}
                                </h3>
                                <p>{item.text || item}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className={styles.navigation} style={{ justifyContent: 'center', marginTop: '3rem' }}>
                    <Link href="/" className={`${styles.navButton} ${styles.navButtonPrimary}`} style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Return to Home
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
