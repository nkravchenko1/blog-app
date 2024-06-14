// src/app/blog.service.ts
import { Injectable } from '@angular/core';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
  ];
  private nextId = 3;

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    post.id = this.nextId++;
    this.posts.push(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
