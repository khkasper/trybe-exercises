import PostContent from "../interfaces/Post";
import * as postModel from "../models/postModel";

export function getPosts() {
  const data = postModel.getPosts();
  return { status: 200, data };
}

export function getPost(id: number) {
  const data = postModel.getPost(id);

  if (data === null) {
    const message = 'Post not found';
    return { status: 404, error: { message } };
  };
  return { status: 200, data };
}


export function createPost(post: PostContent) {
  const data = postModel.createPost(post);
  return { status: 201, data };
}

export function editPost(id: number, post: PostContent) {
  const data = postModel.editPost(id, post);

  if (data === null) {
    const message = 'Post not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
}

export function deletePost(id: number) {
  const data = postModel.deletePost(id);

  if (data === null) {
    const message = 'Post not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
};

export function searchPosts(term: string) {
  const data = postModel.searchPosts(term);
  if (!data || data.length === 0) {
    const message = 'Post not found';
    return { status: 404, error: { message } };
  }
  return { status: 200, data };
}
