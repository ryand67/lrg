import Head from 'next/head';
import styles from '../styles/Home.module.css'
import PostForm from '../components/PostForm/PostForm';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lrg</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>

      <h1 className={styles.logo}>Lrg</h1>

      <PostForm />

    </div>
  )
}
