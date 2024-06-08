import styles from '../styles/postcompose.module.css';

export default function PostCompose(){
    return (
        <section className={styles.body}>
            <div className={styles.left}></div>
            <div className={styles.main}>
                <div className={styles.input}><textarea autoFocus="true" placeholder="What's on your mind?" type='text' rows={10}/></div>
            </div>
            <div className={styles.right}></div>
        </section>
    )
}