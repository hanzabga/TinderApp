import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { EmployeeProvider } from '../providers/employee/employee';
import { ImageProvider } from '../providers/image/image';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
//import { LoginPage } from '../pages/login/login';
//import { LoginPageModule } from '../pages/login/login.module';

export class CameraMock extends Camera {

  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('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');
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
  //  LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [ HomePage, ChatPage ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    { provide: Camera, useClass: CameraMock },
    EmployeeProvider,
    ImageProvider,
  //  LoginPage
  ]
})
export class AppModule {}
