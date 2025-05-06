import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageViewService {
  private apiUrl = 'https://localhost:44314/api/PdfViewer';
  constructor(private http: HttpClient) {}

  getPdf(fileName: string) {
    const url = `${this.apiUrl}/GetPdf/?fileName=`+fileName;
    return this.http.get(url, { responseType: 'blob' });
  }

}
