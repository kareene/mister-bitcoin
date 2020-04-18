export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public imgUrl: string = '') {
            if (this.name) {
                this.imgUrl = `https://robohash.org/${this.name.toLocaleLowerCase().replace(/\s+/g, '')}`;
            } else {
                this.imgUrl = 'assets/img/robot.svg';
            }
    }

    setId?() {
        var id = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 24; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this._id = id;
    }
}