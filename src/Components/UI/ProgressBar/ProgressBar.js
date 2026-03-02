import styles from './ProgressBar.module.scss';

function ProgressBar(props)
{
    let maxVal = props.valueMax ? props.valueMax : 100;

    let fillBar = 
    {
        width: `${props.completed}%`
    }

    return (
        <div className={styles.container}>
            <div className={styles.fill} style={fillBar}>
                <span className={styles.label}>{props.label}</span>
            </div>
            <span 
                    className={`${styles.label} ${styles.valueLabel}`}
                    role="progressBar"
                    aria-valuenow={props.completed}
                    aria-valuemin={0}
                    aria-valuemax={maxVal}
                >
                    {props.completed}%
            </span>
        </div>
    );
}

export default ProgressBar;