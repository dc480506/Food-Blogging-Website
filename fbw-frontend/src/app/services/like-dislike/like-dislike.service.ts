import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService extends DataService{

  constructor(http:HttpClient) {
    super('blogs/like-dislike',http);
   }

   
}
