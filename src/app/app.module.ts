import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { PicturesComponent } from './pictures/pictures.component';
import { PicturesListComponent } from './pictures/gallery/pictures-list/pictures-list.component';
import { PicturesDetailComponent } from './pictures/gallery/pictures-detail/pictures-detail.component';
import { PictureItemComponent } from './pictures/gallery/pictures-list/picture-item/picture-item.component';
import { PictureAddComponent } from './pictures/picture-add/picture-add.component';
import {ImageUploadModule} from "angular2-image-upload";
import {AppRoutingModule} from "./app-routing.module";
import { PictureStartComponent } from './pictures/gallery/picture-start/picture-start.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GalleryComponent } from './pictures/gallery/gallery.component';

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
        GalleryComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ImageUploadModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
