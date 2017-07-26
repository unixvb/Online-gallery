export class Picture {
    public id: number;
    public imagePath: string;
    public comment: string;
    public postedAt: string;

    constructor(id: number, imagePath: string, comment: string, postedAt: string) {
        this.id = id;
        this.imagePath = imagePath;
        this.comment = comment;
        this.postedAt = postedAt;
    }
}