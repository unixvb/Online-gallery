import {Component, Input, OnInit} from '@angular/core';
import {Picture} from "../../../picture.model";

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: Picture;

  constructor() { }

  ngOnInit() {
  }
}
