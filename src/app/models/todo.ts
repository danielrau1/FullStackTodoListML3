export class Todo {
    id: number;
    title: string;
    completed: boolean;


    // [1.1a]
    constructor(args?) {
        this.id = args.id;
        this.title = args.title;
        this.completed = args.completed;
    }
}
