import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2/base';

// Registering Syncfusion license key
registerLicense('Mzc0MzU5M0AzMjM4MmUzMDJlMzBrVEcyNUM3Yzh6Q3prejk4WVlXbDU5U1dnQzNYUmhobHBuZVA3R2xIMDVBPQ==;Mgo+DSMBPh8sVXJ8S0d+X1JPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9mSX1TckVhXXlfcX1WQGk=;ORg4AjUWIQA/Gnt2XVhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5QdkFjW3tYcXZVQWhc;NRAiBiAaIQQuGjN/V05+XU9HdVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3tTdUVnWX1adnVXRmlfVw==;Mgo+DSMBMAY9C3t2XVhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5QdkFjW3tYcXZURmlf;Mzc0MzU5OEAzMjM4MmUzMDJlMzBNTnNiM0FaUDMzeTRyQ0tlejRTSVRhWThad0ZTRWoyNEhDdExEeUllTXVzPQ==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

