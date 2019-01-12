export interface BookInterface {
    image: string,
    title: string,
    description: string,
    upvotes: number
}

export class Book implements BookInterface {
    constructor (
        public image: string,
        public title: string,
        public description: string,
        public upvotes: number = 0
    ) {

    }
}