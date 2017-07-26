import {Component, OnInit} from '@angular/core';
import {Picture} from "../picture.model";
import {NgForm} from "@angular/forms";
import {getRandomString} from "selenium-webdriver/safari";
import {PictureService} from "../picture.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-picture-add',
    templateUrl: './picture-add.component.html',
    styleUrls: ['./picture-add.component.css']
})
export class PictureAddComponent implements OnInit {

    constructor(private pictureService: PictureService,
                private router: Router) { }

    ngOnInit() {
    }

    imageUploaded() { }

    imageRemoved() { }

    disableSendButton() { }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newPicture = new Picture(Math.floor(Math.random() * 100) + 1  , "somePath", value.comment, Date.now().toString());
        this.pictureService.addPicture(newPicture);
        this.router.navigate(['']);
    }
}
