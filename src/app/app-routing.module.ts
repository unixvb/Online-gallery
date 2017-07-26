import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PicturesComponent} from "./pictures/pictures.component";
import {PictureAddComponent} from "./pictures/picture-add/picture-add.component";
import {PictureStartComponent} from "./pictures/picture-start/picture-start.component";
import {PicturesDetailComponent} from "./pictures/pictures-detail/pictures-detail.component";

const appRoutes: Routes = [

    {path: 'new', component: PictureAddComponent},
    {path: '', component: PicturesComponent, children: [
        {path: '', component: PictureStartComponent, pathMatch: 'full'},
        {path: ':id', component: PicturesDetailComponent}
    ]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}