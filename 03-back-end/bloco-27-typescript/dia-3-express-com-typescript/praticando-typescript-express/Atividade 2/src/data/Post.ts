import PostContent from "../interfaces/Post";

export interface Post extends PostContent {
  id: number;
}

export const posts: Post[] = [
  {
    "id": 1,
    "title": "Facebook vai dividir departamento de realidade aumentada e virtual",
    "author": "Renan",
    "category": "tecnologia",
    "publicationDate": "2021-10-26",
  },
  {
    "id": 2,
    "title": "O que é UDP e quais as diferenças com o TCP?",
    "author": "Giulianna",
    "category": "tecnologia",
    "publicationDate": "2021-10-26",
  }
]
