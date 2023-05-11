import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import { NewChatsComponent } from 'src/app/components/new-chats/new-chats.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  details = ['mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe'];
  constructor(public chat_service: ChatServiceService) { }

  ngOnInit() {
    this.isLoaded();
  }

  //refresh btn
  isLoaded() {
    this.chat_service.isContentRefresher = false;
    setTimeout(() => {
      this.chat_service.isContentRefresher = true;
    }, 2000)
  }

}



