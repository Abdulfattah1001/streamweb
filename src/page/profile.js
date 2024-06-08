import Post from '../components/post';
import styles from '../styles/profile.module.css';
import post from '../lib/dummy';
import { Avatar } from '@mui/material';

export default function Profile(){

    let posts = post;
    console.log(posts)

    return(
        <section>

<div className={styles.leftBody}></div>

<div className={styles.mainBody}>

<div className={styles.header}>

                <div className={styles.iconwrapper}>
                    <Avatar sx={
                        {
                            outline: '1px solid white'
                        }
                    } src='1.jpg' className={styles.icon}/>
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
                        return (
                            <Post post={post} index={index} />
                        )
                    })
                }
            </div>
</div>

<div className={styles.right}></div>


        </section>
    )
}