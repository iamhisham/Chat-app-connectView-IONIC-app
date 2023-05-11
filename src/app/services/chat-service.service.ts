import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  isContentRefresher: boolean = false;
  constructor() { }
}
