import express from 'express';
import * as postControllers from './controllers/postController';
import postMiddleware from './middlewares/postsMiddleware';

const app = express();
app.use(express.json());
app.get('/posts/search', postControllers.searchPosts);

app.get('/posts', postControllers.getPosts);
app.get('/posts/:id', postControllers.getPost);

app.post('/posts', postMiddleware, postControllers.createPost);

app.put('/posts/:id', postMiddleware, postControllers.editPost);

app.delete('/posts/:id', postMiddleware, postControllers.deletePost);


const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
