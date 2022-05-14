export default class Todos {
    text: string;
    id?: any;
    constructor(text: string){
        this.text = text;
        this.id = new Date().toISOString();
    }
}