import { Component, OnInit } from '@angular/core';
import {Picture} from "./picture.model";
import {PictureService} from "./picture.service";

@Component({
    selector: 'app-pictures',
    templateUrl: './pictures.component.html',
    styleUrls: ['./pictures.component.css'],
    providers: [PictureService]
})
export class PicturesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
