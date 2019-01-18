import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatLijstPage } from './chat-lijst';

@NgModule({
  declarations: [
    ChatLijstPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatLijstPage),
  ],
})
export class ChatLijstPageModule {}
