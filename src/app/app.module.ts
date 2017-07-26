import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { PicturesComponent } from './pictures/pictures.component';
import { PicturesListComponent } from './pictures/pictures-list/pictures-list.component';
import { PicturesDetailComponent } from './pictures/pictures-detail/pictures-detail.component';
import { PictureItemComponent } from './pictures/pictures-list/picture-item/picture-item.component';
import { PictureAddComponent } from './pictures/picture-add/picture-add.component';
import {ImageUploadModule} from "angular2-image-upload";
import {AppRoutingModule} from "./app-routing.module";
import { PictureStartComponent } from './pictures/picture-start/picture-start.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PictureService} from "./pictures/picture.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PicturesComponent,
        PicturesListComponent,
        PicturesDetailComponent,
        PictureItemComponent,
        PictureAddComponent,
        PictureStartComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ImageUploadModule.forRoot(),
        HttpModule,
        AppRoutingModule,
    ],
    providers: [PictureService],
    bootstrap: [AppComponent]
})
export class AppModule { }
