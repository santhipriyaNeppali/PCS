export class suburb {
    constructor(
        public postcode: String,
        public name: String,
        public state: state,
        public locality: String,
        public latitude: number,
        public longitude: number,
        public selected: boolean
    ) {  }
}

export interface state{
    name: String,
    abbreviation: String
}