import PostContent from '../interfaces/Post';
import { NextFunction, Request, Response } from 'express';

export default function validateBody(req: Request, res: Response, next: NextFunction) {
  const { title, author, category, publicationDate } = req.body as PostContent;
  const properties = [title, author, category, publicationDate]

  // verifica se todos os campos foram preenchidos
  if (properties.some(info => !info)) {
    const message = 'The fields "title", "author", "category" and "publicationDate" are required';
    return res.status(400).json({ message });
  }

  // verifica se o nome do autor e o nome da categoria têm pelo menos 3 caracteres cada
  if (typeof author !== 'string' || author.length < 3
    || typeof category !== 'string' || category.length < 3) {
    const message = 'Author name and category name must have at least 3 characters';
    return res.status(400).json({ message })
  }
  next();
}
