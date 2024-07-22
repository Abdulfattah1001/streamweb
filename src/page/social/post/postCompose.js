import { ArrowBack, BrowseGalleryOutlined, Camera } from "@mui/icons-material";
import { Fab, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import styles from '../../../styles/index/postCompose.module.css'

export default function postCompose(){
    let [postContent,setPostContent] = useState("");
    let [image, setImage] = useState();
    let [video,setVideo] = useState();

    const uploadPostContent = function(){}

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <ul>
                    <ArrowBack />
                    <span>Post</span>
                </ul>
                <ul>
                    <BrowseGalleryOutlined />
                    <Camera />
                </ul>
            </header>
            <div className={styles.content}>
                <TextareaAutosize value={postContent} onChange={(event)=>setPostContent(event.target.value)} placeholder="What's on your mind...?" />
            </div>
            <Fab onClick={uploadPostContent} />
        </section>
    )
}