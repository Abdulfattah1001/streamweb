import { InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material';
import styles from '../../../styles/index/courseedit.module.css';
import { useState } from 'react';


export default function CourseCreation(){
    let [courseState, setCourseState] = useState("Chapter");

    return(
        <section className={styles.body}>
            <div className={styles.left}>
                <ul>
                    <li><button>add image</button></li>
                    <li><button>add image</button></li>
                    <li><button>add image</button></li>
                </ul>
            </div>

            <div className={styles.main}>
                <div>
                    <div className={styles.inputwrapper}>
                        <input id="title" type='text' placeholder='Enter your course name' required />
                    </div>
                    <div className={styles.inputwrapper}>
                        <input type='text' placeholder='Enter your course introduction' required />
                    </div>

                    <div className={styles.inputwrapper}>
                        <select value="Name">
                            <option>Chapter 1</option>
                            <option>Chapter 2</option>
                        </select>
                    </div>

                    <div className={styles.inputwrapper}>
                        <TextareaAutosize placeholder='Enter course content' className={styles.textArea} />
                    </div>
                    
                </div>
            </div>

            <div className={styles.right}></div>
        </section>
    )
}