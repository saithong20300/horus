import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { LayoutModule } from './pages/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./utils/_services/script-loader.service";
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { AuthModule } from "./auth/auth.module";
import { NgSelectModule} from '@ng-select/ng-select';
import { MAT_DATE_LOCALE} from '@angular/material';
import { BrowserCookiesModule } from '@ngx-utils/cookies/browser';
import { PayrollService } from './service/payroll-service';


@NgModule({
    declarations: [
        PagesComponent,
        AppComponent,
      
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PagesRoutingModule,
        AuthModule,
        NgSelectModule,
        BrowserCookiesModule.forRoot({
            httpOnly: true
        })
    ],
    providers: [
        ScriptLoaderService,
        { provide: MAT_DATE_LOCALE, useValue: 'th-TH' },
        PayrollService
    ],
    bootstrap: [AppComponent]
    
})
export class AppModule { }