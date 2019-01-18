import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class ImageProvider {

  constructor(private camera : Camera) {}

  takePhotograph() {
      return new Promise(resolve => {
         this.camera.getPicture({
            destinationType 	 : this.camera.DestinationType.DATA_URL,
            targetWidth 	     : 320,
            targetHeight	     : 240
         })
         .then((data) => {
            resolve(data);
         });
      });
   }

   selectPhotograph() {
      return new Promise(resolve => {
         let cameraOptions : CameraOptions = {
             sourceType         : this.camera.PictureSourceType.PHOTOLIBRARY,
             destinationType    : this.camera.DestinationType.DATA_URL,
             quality            : 100,
             targetWidth        : 320,
             targetHeight       : 240,
             encodingType       : this.camera.EncodingType.JPEG,
             correctOrientation : true
         };

         this.camera.getPicture(cameraOptions)
           .then((data) => {
              resolve(data);
           });
      });
   }
}
