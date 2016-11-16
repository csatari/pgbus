import * as ko from "knockout";

require("../style/login.less");
require("bootstrap-webpack");

class Login {
    username: KnockoutObservable<string> = ko.observable("");
    password: KnockoutObservable<string> = ko.observable("");
    constructor() {
        console.log("hi");
    }
    loginClicked = () => {
        alert("Hello"+this.username()+" "+this.password());
    };
}

ko.applyBindings(new Login());