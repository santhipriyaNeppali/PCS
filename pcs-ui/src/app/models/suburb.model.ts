export class suburb {
    constructor(
        public postcode: String,
        public name: String,
        public state: state,
        public locality: String,
        public latitude: String,
        public longitude: String,
        public selected: boolean
    ) {  }
}

export interface state{
    name: String,
    abbreviation: String
}