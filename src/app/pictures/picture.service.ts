import {Picture} from "./picture.model";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export  class PictureService {

    private _pictures: Picture[] = [
        new Picture(0, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'some comment', '25-07-17'),
        new Picture(1, 'http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg', 'data', '25-07-17'),
        new Picture(2, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'some KImmmm', '25-07-17'),
        new Picture(3, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'sanother as', '25-07-17'),
        new Picture(4, 'http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg', 'skotis', '25-07-17')
    ];

    constructor() {

    }

    get pictures(): Picture[] {
        return this._pictures;
    }

    /** GET response from server side
     GETpictures(){
            this.http.get('http://127.0.0.1:8000')
                .subscribe(
                    (response: Response) => {
                        const pictures: Picture[] = response.json();
                        console.log(pictures);
                        this._pictures = pictures;
                        console.log(this._pictures);
                    });
            return 1;
        }
     **/

    getPicture(id: number) {
        return this._pictures.find(p => p.id == id);
    }

    addPicture(picture: Picture) {
        this._pictures.push(picture);
    }

    updatePictureComment(picture: Picture, comment: string) {
        this._pictures.find(p => p.id == picture.id).comment = comment;
    }

    deletePicture(picture: Picture) {
        let index: number = this._pictures.indexOf(picture);
        if (index !== -1) {
            this._pictures.splice(index, 1);
        }
    }
}