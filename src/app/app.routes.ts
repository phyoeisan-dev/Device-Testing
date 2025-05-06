import { Routes } from '@angular/router';
import { ImageViewComponent } from './printing-process/components/image-view/image-view.component';
import { CameraViewComponent } from './printing-process/components/camera-view/camera-view.component';
import { QrScannerComponent } from './printing-process/components/qr-scanner/qr-scanner.component';
import { HomeComponent } from './printing-process/components/home/home.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'',redirectTo:'chats',pathMatch:'full'},
  {path:'image-view',component:ImageViewComponent},
  {path:'camera-view',component:CameraViewComponent},
  {path:'qr-scanner',component:QrScannerComponent},
  {path:'home',component:HomeComponent},
];

