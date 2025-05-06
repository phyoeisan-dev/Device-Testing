import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat, Result } from '@zxing/library';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss',
  imports: [CommonModule, ZXingScannerModule]
})
export class QrScannerComponent implements AfterViewInit {
  ngVersion = VERSION.full;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.PDF_417
  ];

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent | undefined;

  hasDevices: boolean | undefined;
  hasPermission: boolean | undefined;
  qrResultString: string | undefined;
  qrResult: Result | undefined;

  availableDevices: MediaDeviceInfo[] | undefined;
  currentDevice: MediaDeviceInfo | undefined;

  ngAfterViewInit(): void {
    if (!this.scanner) {
      console.warn('Scanner not initialized');
      return;
    }

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
      this.currentDevice = devices[0]; // Pick first device by default
    });

    this.scanner.camerasNotFound.subscribe(() => {
      this.hasDevices = false;
    });

    this.scanner.permissionResponse.subscribe((perm: boolean) => {
      this.hasPermission = perm;
    });

    this.scanner.scanComplete.subscribe((result: Result) => {
      this.qrResult = result;
    });
  }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selectedValue: any) {
    this.currentDevice = this.availableDevices?.find(device => device.deviceId === selectedValue.target.value);
  }

  stateToEmoji(state: boolean | undefined | null): string {
    const states = {
      undefined: '❔',
      null: '⭕',
      true: '✔',
      false: '❌'
    };

    return states[state as unknown as keyof typeof states];
  }
}
