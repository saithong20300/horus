import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/guards/auth.guard";
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layouts/layout.module';
import { NgSelectModule} from '@ng-select/ng-select'; 
import { FormsModule } from '@angular/forms';
import { Employ0002Component, DialogOverviewExampleDialog} from './employ0002/employ0002.component';
import { bornComponent } from './borndate/born.component';
import { ThaiDatePipe } from '../directives/thaidate.directives';
import { CountBorn } from '../directives/countborn.directives';
import { DefaultComponent } from './default.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule  } from '@angular/material';
const routes: Routes = [
    {
        "path": "",
        "component": PagesComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": "..\/pages\/dashboard\/dashboard.module#DashboardModule"
            },
            {
                "path": "employ",
                "component": DefaultComponent,
                "children": [
                    {
                        "path": "0002",
                        "component": Employ0002Component
                    }
                ]
                
            },
            {
                "path": "born",
                "component": DefaultComponent,
                "children": [
                    {
                        "path": "0002",
                        "component": bornComponent
                    }
                ]
                
            },
            {
                "path": "profile",
                "loadChildren": "..\/pages\/profile\/profile.module#ProfileModule"
            },
         
            {
                "path": "now",
                "loadChildren": "..\/pages\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule, 
        LayoutModule, 
        NgSelectModule,
        FormsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        BsDatepickerModule.forRoot(),
        
        
    ]
    , exports: [
        RouterModule,
        Employ0002Component ,
        DialogOverviewExampleDialog,
       // ThaiDatePipe,
    ], declarations: [
        Employ0002Component,bornComponent,
        DialogOverviewExampleDialog,
        ThaiDatePipe,
    ],
    entryComponents: [
        Employ0002Component, bornComponent,
        DialogOverviewExampleDialog,
       // ThaiDatePipe,
    ],
})
export class PagesRoutingModule { }