import { Add, ArrowBack, BrowseGalleryOutlined, Camera, Done } from "@mui/icons-material";
import { Fab, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import styles from '../../../styles/index/postCompose.module.css'
import { useNavigate } from "react-router-dom";

export default function PostCompose(){
    let navigate = useNavigate();

    let [postContent,setPostContent] = useState("");
    let [image, setImage] = useState();
    let [video,setVideo] = useState();

    const uploadPostContent = function(){}

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <ul>
                    <ArrowBack onClick={navigate(-1)} />
                    <span>Post</span>
                </ul>
                <ul>
                    <BrowseGalleryOutlined />
                    <Camera />
                </ul>
            </header>
            <div className={styles.content}>
                <TextareaAutosize className={styles.postinput} value={postContent} onChange={(event)=>setPostContent(event.target.value)} placeholder="What's on your mind...?" />
            </div>
            <Fab onClick={uploadPostContent} size="medium" sx={
                {
                    position: 'fixed',
                    bottom:'10px',
                    right:'5px'
                }
            }><Done/></Fab>
        </section>
    )
}