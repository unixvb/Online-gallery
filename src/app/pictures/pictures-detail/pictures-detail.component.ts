import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Picture} from "../picture.model";
import {PictureService} from "../picture.service";

@Component({
    selector: 'app-pictures-detail',
    templateUrl: './pictures-detail.component.html',
    styleUrls: ['./pictures-detail.component.css']
})
export class PicturesDetailComponent implements OnInit {
    picture: Picture;
    pictureForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private pictureService: PictureService,
                private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.picture = this.pictureService.getPicture(+params['id']);
                if (typeof this.picture != "undefined")
                    this.initForm();
                else
                    this.router.navigate(['']);
            }
        );

    }

    private initForm() {
        this.pictureForm = new FormGroup({
            'comment': new FormControl(this.picture.comment)
        });
    }

    onSaveChanges() {
        this.pictureService.updatePictureComment(this.picture, this.pictureForm.value.comment);
    }

    onDelete() {
        this.pictureService.deletePicture(this.picture);
        this.router.navigate(['../'], {relativeTo: this.route});
    }

}
