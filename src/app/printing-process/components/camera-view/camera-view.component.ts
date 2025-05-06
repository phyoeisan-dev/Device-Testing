import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamImage, WebcamModule} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera-view',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,WebcamModule],
  templateUrl: './camera-view.component.html',
  styleUrl: './camera-view.component.scss'
})
export class CameraViewComponent implements OnInit {
  selectedFile: File | null = null;
  public webcamimg: boolean = false;

   //web cam
   private trigger: Subject<any> = new Subject();
   public webcamImage!:WebcamImage ;
   private nextWebcam: Subject<any> = new Subject();
   public flag:boolean=true;
   public img:boolean=false;
   public sysImage: string | undefined;
   public file: string | undefined;
   // the end



  @ViewChild("video", { static: true }) //variable from html
  public video: ElementRef | undefined;

  @ViewChild("canvas", { static: true }) //variable from html
  public canvas: ElementRef | undefined;

  // public captures: string | undefined;
   ngOnInit() {
   }

  // public capture() {
  //   if (this.canvas && this.canvas.nativeElement) {
  //     const context = this.canvas.nativeElement
  //       .getContext("2d")
  //       .drawImage(this.video?.nativeElement, 0, 0, 400, 300);
  //   }
  //   if (this.canvas && this.canvas.nativeElement) {
  //       this.captures = this.canvas.nativeElement.toDataURL("image/png");
  //   }
  // }


  //new web cam
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
   console.log(webcamImage.imageAsDataUrl);
   this.webcamImage = webcamImage;
   this.sysImage = webcamImage.imageAsDataUrl;
   this.flag=false;
   this.img = true;
  }

  public get invokeObservable(): Observable<any> {
   return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
   return this.nextWebcam.asObservable();
  }

  public UploadImage(): void {
  // const formData = new FormData();
  // const data=this.vehicleQueueForm.value;
  // this.flag=true;
  // formData.append("vehicleQueueNo", '');
  // formData.append("vehicleRegNo", data.vehicleRegNo);
  // formData.append("date", moment(data.date).format('MM/DD/YYYY HH:mm:ss'));
  // formData.append("createdUser",localStorage.getItem('currentUser'));
  // if(this.selectedFile==null){
  // if(this.sysImage!=undefined || this.sysImage!=null){
  //   let base64string =this.sysImage;
  //   base64string=base64string.replace('data:image/jpeg;base64,','')
  //   const byteArray=new Uint8Array(atob(base64string).split('').map((char)=>char.charCodeAt(0)) );
  //   const file=new Blob ([byteArray],{type:'image/jpeg'});
  //   formData.append("uploadImage",file);
  //   this.uploadFileToAPI(formData);
  // }
  // else{
  //   Swal.fire('Vehicle Queue', "Please take a picture!", 'error');
  // }
  // }
  // else{
  //   formData.append('uploadImage', this.selectedFile);
  //   this.uploadFileToAPI(formData);
  // }
  }

  uploadFileToAPI(formData: any) {
  // this.service.uploadImage(formData)
  // .pipe(catchError((err) => of(this.showError(err))))
  // .subscribe((result) => {
  //   if (result.status == true) {
  //     this.router.navigate(["/order/vehicle-queue"]);
  //   } else {
  //     Swal.fire('Vehicle Queue', result.messageContent, 'error');
  //   }
  // });

  }
}
