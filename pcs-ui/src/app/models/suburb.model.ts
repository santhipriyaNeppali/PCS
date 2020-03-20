export class suburb {
    constructor(
        public postcode: string,
        public name: string,
        public state: state,
        public locality: string,
        public latitude: string,
        public longitude: string
    ) {  }
}

export interface state{
    name: string,
    abbreviation: string
}