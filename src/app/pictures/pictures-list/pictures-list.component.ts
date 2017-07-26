import {Component, OnInit} from '@angular/core';
import {Picture} from "../../picture.model";
import {PictureService} from "../../picture.service";

@Component({
    selector: 'app-pictures-list',
    templateUrl: './pictures-list.component.html',
    styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {
    pictures: Picture[];


    constructor(private pictureService: PictureService) { }

    ngOnInit() {
        this.pictures = this.pictureService.pictures;
    }

}
