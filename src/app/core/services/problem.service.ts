import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';

@Injectable({ providedIn: 'root' })
export class ProblemService {
  getRecommended(): Problem[] {
    return [
      { id: '1', title: 'Coin Change II',     difficulty: 'medium', topic: 'dynamic-programming', topicLabel: 'Dynamic Programming' },
      { id: '2', title: 'Number of Islands',  difficulty: 'hard',   topic: 'graphs',              topicLabel: 'Graphs · BFS' },
      { id: '3', title: 'Climbing Stairs',    difficulty: 'easy',   topic: 'recursion',           topicLabel: 'Recursion · Memo' },
    ];
  }
}
