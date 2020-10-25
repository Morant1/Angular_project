export class Contact {

  constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {

  }

  setId?(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this._id = txt;
}

}