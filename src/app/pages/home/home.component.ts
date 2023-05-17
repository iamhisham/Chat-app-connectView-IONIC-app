import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild("header") header: HTMLElement;

  //scroll to top
  @ViewChild('scrolllist') content: any;
  backToTop: boolean = false;
  pageView = 'chats';
  isAdjustScreen: boolean;
  constructor(private chat_service: ChatServiceService, private platform: Platform, public renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ionViewWillEnter() {
    this.renderer.addClass(this.header['el'], 'animated-delay');
  }


  segmentChange(event: any) {
    this.pageView = event.target.value;
  }
  //swipe down to refresh
  // handleRefresh(event?: any) {
  //   this.chat_service.isContentRefresher = false;
  //   setTimeout(() => {
  //     // Any calls to load data go here
  //     event.target.complete();
  //     this.chat_service.isContentRefresher = true;
  //   }, 2000);
  // };

  scrollToTop(event: any) {
    if (event.currentTarget.scrollTop > this.platform.height()) {
      this.backToTop = true;
    } else {
      this.backToTop = false;
    }
  }

  gotToTop() {
    this.content.scrollToTop(1000);
  }

  onContentScroll(event: any) {
    this.scrollToTop(event);

    if (event.currentTarget.scrollTop >= 10) {
      // 20 above  // scroll up(initial)
      this.renderer.setStyle(this.header['el'], 'top', '-70px');
      this.isAdjustScreen = true;
    } else {
      //20 below // scroll down  //remove all
      this.renderer.setStyle(this.header['el'], 'top', '0px');
      this.isAdjustScreen = false;
    }
  }

}

