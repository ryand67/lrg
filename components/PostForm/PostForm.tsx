import React from 'react';
import styles from './PostForm.module.css';

export default function PostForm() {
    return (
        <form action="" className={styles.postForm}>
            <label htmlFor="postTextArea">Write:</label>
            <textarea name="postTextArea" id="" cols={100} rows={15} placeholder="Write here..."></textarea>
            <label htmlFor="postNameInput">Byline:</label>
            <input type="text" name="postNameInput" id="" placeholder="By..."/>
            <label htmlFor="tagsInput">Tags:</label>
            <input type="text" name="tagsInput" placeholder="Tags, seperated by commas..."/>
            <button type="submit" className={styles.submitBtn}>Post</button>
        </form>
    )
}
