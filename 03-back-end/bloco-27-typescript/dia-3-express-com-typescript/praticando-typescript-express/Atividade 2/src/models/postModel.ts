import PostContent from "../interfaces/Post";
import { Post, posts } from "../data/Post";

export function getPosts(): Post[] {
  return posts;
}

export function getPost(id: number): Post | null {
  return posts.find(post => post.id === id) || null;
}

export function createPost(post: PostContent): Post {
  const lastId = posts[posts.length - 1].id;
  const newPost = { id: lastId + 1, ...post };
  posts.push(newPost);
  return newPost;
};

export function editPost(id: number, post: PostContent) {
  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex < 0 || !posts[postIndex]) return null;

  const editedPost = { ...posts[postIndex], ...post };
  posts[postIndex] = editedPost
  return editedPost;
}

export function deletePost(id: number): Post | null {
  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex < 0 || !posts[postIndex]) return null;

  const postToBeDeleted = posts[postIndex];
  posts.splice(postIndex, 1)

  return postToBeDeleted;
}

export function searchPosts(term: string): Post[] | null {
  return posts
  .filter(({ author, category, publicationDate }) => author.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
   category.toLowerCase().includes(term.toLocaleLowerCase()) ||
   publicationDate === term) ||
   null;
}
