import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService,
         PdfViewerModule,
         PdfViewerComponent
} from '@syncfusion/ej2-angular-pdfviewer';
@Component({
  selector: 'app-image-view',
  standalone: true,
  templateUrl: './image-view.component.html',
  imports:[CommonModule,PdfViewerModule],
// tslint:disable-next-line:max-line-length
encapsulation: ViewEncapsulation.None,
providers: [
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
  FormDesignerService
],
  styleUrl: './image-view.component.scss'
})
export class ImageViewComponent  implements OnInit{
  @ViewChild('pdfviewer') public pdfviewer: PdfViewerComponent | undefined;

  public document = 'https://localhost:44314/api/PdfViewer/GetPdf?fileName=sale.pdf';
  public resource: string= `${window.location.protocol}//${window.location.host}/assets/ej2-pdfviewer-lib`;
  // public resource: string = "http://localhost:4200/assets/ej2-pdfviewer-lib";
  // public document = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  // public resource: string = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
  ngOnInit(): void {
  }
  printPDF(): void {
    if (this.pdfviewer) {
      this.pdfviewer?.print.print();
    }
  }


}
