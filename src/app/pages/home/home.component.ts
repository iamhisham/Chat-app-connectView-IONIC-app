import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { ChatServiceService } from 'src/app/services/chat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {





  activeTab: string = 'chats';
  // hideheader when scroll
  @ViewChild("header") header: HTMLElement;
  @ViewChild("subcontent") subcontent: HTMLElement;

  //scroll to top
  @ViewChild(IonContent) content: IonContent;
  backToTop: boolean = false;
  constructor(private chat_service: ChatServiceService, private platform: Platform, public renderer: Renderer2) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.renderer.addClass(this.header['el'], 'animated-delay');
    this.renderer.addClass(this.subcontent['el'], 'animated-delay');
  }

  segmentChange(event: any) {
    this.activeTab = event.target.value;
  }

  //swipe down to refresh
  handleRefresh(event?: any) {
    this.chat_service.isContentRefresher = false;
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.chat_service.isContentRefresher = true;
    }, 2000);
  };

  scrollToTop(event: any) {
    if (event.detail.scrollTop > this.platform.height()) {
      this.backToTop = true;
    } else {
      this.backToTop = false;
    }
  }

  gotToTop() {
    this.content.scrollToTop(1000);
  }

  onContentScroll(event: any) {
    // 1) headerSet
    if (event.detail.scrollTop >= 20) {
      // 20 above  // scroll up(initial)
      this.renderer.setStyle(this.header['el'], 'top', '-76px');
    } else {
      //20 below // scroll down  //remove all
      this.renderer.setStyle(this.header['el'], 'top', '0px');
      this.renderer.removeStyle(this.subcontent['el'], 'position');
      this.renderer.removeStyle(this.subcontent['el'], 'top');
    }
    // 2) subcontent
    if (Math.floor(event.detail.scrollTop) >= 56) {
      this.renderer.setStyle(this.subcontent['el'], 'position', 'sticky');
      this.renderer.setStyle(this.subcontent['el'], 'top', '-68px');
    }
    this.scrollToTop(event);
  }

}
