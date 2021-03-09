import React from 'react';
import styles from './PostForm.module.css';
import { useState } from 'react';
import PostObj from '../../models/Post';

export default function PostForm() {

    const [postLength, setPostLength] = useState(0);
    const [content, setContent] = useState('');
    const [byLine, setByLine] = useState('');
    const [tags, setTags] = useState([]);

    const handleTAChange = (e) => {
        setPostLength(e.target.value.length);
        setContent(e.target.value);
    }

    const handleByLineChange = (e) => {
        setByLine(e.target.value);
    }

    const handleTagsChange = (e) => {
        let temp = e.target.value.split(',');
        temp = temp.map(x => x.trim());
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const post = new PostObj(content, byLine, tags);
        console.log(post);
    }

    return (
        <form action="" className={styles.postForm} onSubmit={(e) => handleFormSubmit(e)}>
            <label htmlFor="postTextArea">Write:</label>
            <textarea name="postTextArea" id="" cols={100} rows={15} placeholder="Write here..." maxLength={500} onChange={(e) => handleTAChange(e)}></textarea>
            <p>{postLength}/500</p>
            <label htmlFor="postNameInput">Byline:</label>
            <input type="text" name="postNameInput" id="" placeholder="By..." onChange={(e) => handleByLineChange(e)}/>
            <label htmlFor="tagsInput">Tags:</label>
            <input type="text" name="tagsInput" placeholder="Tags, separated by commas..." onChange={(e) => handleTagsChange(e)}/>
            <button type="submit" className={styles.submitBtn}>Post</button>
        </form>
    )
}
