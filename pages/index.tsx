import Head from 'next/head';
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import API from '../util/API';
import PostForm from '../components/PostForm/PostForm';
import Post from '../components/Post/Post';

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const result = API.getPosts();
    setPosts(result);
    console.log(result);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Lrg - Write Away</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>

      <h1 className={styles.logo}>Lrg</h1>

      <PostForm />

      <p onClick={() => console.log(posts)}>asdf</p>

      {/* {posts.map(post => {
        <Post />
      })} */}

    </div>
  )
}
