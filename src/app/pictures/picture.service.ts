import {Picture} from "./picture.model";

export  class PictureService {
    get pictures(): Picture[] {
        return this._pictures;
    }

    private _pictures: Picture[] = [
        new Picture(4, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'some comment', '25-07-17'),
        new Picture(10, 'http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg', 'skotis', '25-07-17'),
        new Picture(0, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'some KImmmm', '25-07-17'),
        new Picture(3, 'https://pbs.twimg.com/profile_images/78194494/randomkitty.jpg', 'some KIафыафыаmmmm', '25-07-17'),
        new Picture(7, 'http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg', 'skotis', '25-07-17')
    ];

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