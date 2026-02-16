import styles from '@/styles/Assessment.module.css';

export default function QuestionCard({ question, selectedOption, onSelect }) {
    if (!question) return null;

    return (
        <div className={`${styles.questionCard} glass-panel`}>
            <h3 className={styles.categoryLabel} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                {question.category}
            </h3>
            <h2 className={styles.questionText}>
                {question.text}
            </h2>

            <div className={styles.choicesGrid}>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`${styles.choiceButton} ${selectedOption === index ? styles.selected : ''}`}
                        onClick={() => onSelect(index)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
