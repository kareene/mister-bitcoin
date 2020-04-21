export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '') { }

    setId?() {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 24; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this._id = id;
    }
}