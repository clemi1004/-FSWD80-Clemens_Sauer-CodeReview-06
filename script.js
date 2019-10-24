var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var base = /** @class */ (function () {
    function base(name, city, ZIP_code, address, teaser_img) {
        this.name = "";
        this.city = "";
        this.ZIP_code = null;
        this.address = "";
        this.teaser_img = "";
        this.name = name;
        this.city = city;
        this.ZIP_code = ZIP_code;
        this.address = address;
        this.teaser_img = teaser_img;
    }
    base.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-6card\">\n                    <img src=\"" + this.teaser_img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.ZIP_code + " " + this.city + "</p>\n                    </div>\n                \t<div class=\"card-footer\">\n      \t\t\t\t\t<small class=\"text-muted\">Created: 24.10.2019 12:45 ago</small>\n      \t\t\t\t</div>\n    \t\t\t</div>";
    };
    return base;
}());
var sight_st_charles_church = new base("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "./img/st_charles_church.jpg");
var sight_zoo_vienna = new base("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13B", "./img/zoo_vienna.jpg");
document.getElementById("places").innerHTML = (sight_st_charles_church.display() + sight_zoo_vienna.display());
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, city, ZIP_code, address, teaser_img, telephone_number, type, web_address) {
        var _this = _super.call(this, name, city, ZIP_code, address, teaser_img) || this;
        _this.telephone_number = "";
        _this.type = "";
        _this.web_address = "";
        _this.telephone_number = telephone_number;
        _this.type = type;
        _this.web_address = web_address;
        return _this;
    }
    restaurant.prototype.display_restaurant = function () {
        return "<div class=\"card\">\n                    <img src=\"" + this.teaser_img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.ZIP_code + " " + this.city + ", " + this.telephone_number + "</p>\n                        <a href=\"" + this.web_address + "\"target=\"_blank\">" + this.web_address.substr(7) + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n      \t\t\t\t\t<small class=\"text-muted\">Created: 24.10.2019 12:45 ago</small>\n    \t\t\t\t</div>\n                </div>";
    };
    return restaurant;
}(base));
var restaurant_1 = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "./img/lemon_leaf_thai_restaurant.jpg", "+43(1)5812308", "asiatic", "http://www.lemonleaf.at");
var restaurant_2 = new restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "./img/sixta_restaurant.png", "+43 1 58 528 56 l +43 1 58 528 56", "austrian", "http://www.sixta-restaurant.at");
document.getElementById("restaurants").innerHTML = (restaurant_1.display_restaurant() + restaurant_2.display_restaurant());
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, city, ZIP_code, address, teaser_img, eventDate, eventTime, ticket_price, web_address) {
        var _this = _super.call(this, name, city, ZIP_code, address, teaser_img) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.ticket_price = "";
        _this.web_address = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticket_price = ticket_price;
        _this.web_address = web_address;
        return _this;
    }
    events.prototype.display_concert = function () {
        return "<div class=\"card\">\n                    <img src=\"" + this.teaser_img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p " + this.eventDate + ". " + this.eventTime + "</p>\n                        <p " + this.ticket_price + "</p>\n                        <p class=\"card-text\">" + this.address + ", " + this.ZIP_code + " " + this.city + "</p>\n                        <a href=\"" + this.web_address + "\"target=\"_blank\">" + this.web_address.substr(7) + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n      \t\t\t\t\t<small class=\"text-muted\">Created: 24.10.2019 12:45 ago</small>\n    \t\t\t\t</div>\n                </div>";
    };
    return events;
}(base));
var concert_1 = new events("Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kris_kristofferson.jpg", "Fr., 15.11.2019", "20:00", "58,50 EUR", "http://kriskristofferson.com");
var concert_2 = new events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "./img/lenny_kravitz.jpg", "Sat, 09.12.2019", "19:30", "€ 47,80", "http://kriskristofferson.com");
document.getElementById("concerts").innerHTML = (concert_1.display_concert() + concert_2.display_concert());
