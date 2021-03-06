import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { IChatRoom } from '../../../../shared/interfaces/chatroom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selected;
  public room: IChatRoom;

  constructor() {
    this.selected = 'welcome';
  }

  ngOnInit() {
  }

  changeView(view: string) {
    this.selected = view;
  }

  changeChatRoom(room) {
    if (room) {
      this.selected = 'chatRoom';
      this.room = room;
    } else {
      this.selected = 'settings';
    }
  }

  createNewChatRoom() {
    this.selected = 'createChat';
  }

  showSettings() {
    this.selected = 'settings';
  }

}
