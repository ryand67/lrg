import axios from 'axios';
import { getHeapCodeStatistics } from 'node:v8';
import Post from '../models/Post';

export default {
    createPost(post: Post) {
        axios.post('/api/posts/create', post)
            .then(res => console.log(res))
    },

    getPosts() {
        axios.get('/api/posts/get')
            .then(res => {
                return ['asdf', 'jkl']
                return res.data;
            })
    }
}