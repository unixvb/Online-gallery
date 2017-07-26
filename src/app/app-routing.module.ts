import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PicturesComponent} from "./pictures/pictures.component";
import {PictureAddComponent} from "./pictures/picture-add/picture-add.component";
import {PictureStartComponent} from "./pictures/gallery/picture-start/picture-start.component";
import {PicturesDetailComponent} from "./pictures/gallery/pictures-detail/pictures-detail.component";
import {GalleryComponent} from "./pictures/gallery/gallery.component";

const appRoutes: Routes = [
    {path: '', component: PicturesComponent, children: [
        {path: 'new', component: PictureAddComponent},
        {path: '', component: GalleryComponent, children: [
            {path: '', component: PictureStartComponent, pathMatch: 'full'},
            {path: ':id', component: PicturesDetailComponent}
        ]},
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}