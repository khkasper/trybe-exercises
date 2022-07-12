import * as postService from "../services/postService";
import { Request, Response } from 'express';
import PostContent from "../interfaces/Post"

export function getPosts(_req: Request, res: Response) {
  const { status, data } = postService.getPosts();
  res.status(status).json(data);
}

export function getPost(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = postService.getPost(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function createPost(req: Request, res: Response) {
  const post = req.body;
  const { status, data } = postService.createPost(post);
  res.status(status).json(data);
}

export function editPost(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const post = req.body as PostContent;
  const { status, data, error } = postService.editPost(Number(id), post);

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function deletePost(req: Request, res: Response) {
  const { id } = req.params as { id: string };
  const { status, data, error } = postService.deletePost(Number(id));

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}

export function searchPosts(req: Request, res: Response) {
  const term: any = req.query.term;
  const { status, data, error } = postService.searchPosts(term);

  if (error) return res.status(status).json({ error });

  res.status(status).json(data);
}
