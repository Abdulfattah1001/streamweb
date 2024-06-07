import Post from '../components/post';
import styles from '../styles/profile.module.css';
import post from '../lib/dummy';

export default function Profile(){

    let posts = post;

    return(
        <section>
            <div className={styles.header}>
                <div className={styles.iconwrapper}>
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.names}>
                    <p>Ameen Abdulfattah</p>
                    <p>aminufattah6@gmail.com</p>
                    <p>Hi,My name is Ameen Abdulfattah the CEO and also lead developer at Stream</p>
                </div>
            </div>
            <div className={styles.body}>
                {
                    posts.map(function(post,index){
                        return Post(post, index);
                    })
                }
            </div>
        </section>
    )
}