import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/services/chat-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  details = ['mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe'];
  constructor(public chat_service: ChatServiceService) { }

  ngOnInit() { }

}
