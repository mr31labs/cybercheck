import styles from '@/styles/Assessment.module.css';

export default function ProgressBar({ current, total }) {
    const percentage = Math.min(100, Math.max(0, ((current + 1) / total) * 100));

    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBarFill}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
