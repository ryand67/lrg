export default class Post {
    content;
    byLine;
    tags;
    createdOn;
    constructor(content: string, byLine: string, tags: Array<String>) {
        this.content = content;
        this.byLine = byLine;
        this.tags = tags;
        this.createdOn = new Date();
    }
}