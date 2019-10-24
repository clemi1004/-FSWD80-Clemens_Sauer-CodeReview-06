class base {
	name = "";
	city = "";
	ZIP_code = null;
	address = "";
	teaser_img = "";

	constructor(name, city, ZIP_code, address, teaser_img){
		this.name = name;
		this.city = city;
		this.ZIP_code = ZIP_code;
		this.address = address;
		this.teaser_img = teaser_img;
	}

	display(){
		return  `<div class="col-sm-12 col-md-6 col-lg-6card">
                    <img src="${this.teaser_img}" class="card-img-top" alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.address}, ${this.ZIP_code} ${this.city}</p>
                    </div>
                	<div class="card-footer">
      					<small class="text-muted">Created: 24.10.2019 12:45 ago</small>
      				</div>
    			</div>`             
	}
}

var sight_st_charles_church = new base("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "./img/st_charles_church.jpg")
var sight_zoo_vienna = new base("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13B", "./img/zoo_vienna.jpg")

document.getElementById("places").innerHTML = (sight_st_charles_church.display() + sight_zoo_vienna.display());

// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class restaurant extends base{
	telephone_number = "";
	type = "";
	web_address = "";

	constructor(name, city, ZIP_code, address, teaser_img, telephone_number, type, web_address){
		super(name, city, ZIP_code, address, teaser_img);
		this.telephone_number = telephone_number;
		this.type = type;
		this.web_address = web_address;

}

	display_restaurant() {
		return  `<div class="card">
                    <img src="${this.teaser_img}" class="card-img-top" alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.address}, ${this.ZIP_code} ${this.city}, ${this.telephone_number}</p>
                        <a href="${this.web_address}"target="_blank">${this.web_address.substr(7)}</a>
                    </div>
                    <div class="card-footer">
      					<small class="text-muted">Created: 24.10.2019 12:45 ago</small>
    				</div>
                </div>`        
	}
}

var restaurant_1 = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "./img/lemon_leaf_thai_restaurant.jpg" , "+43(1)5812308", "asiatic", "http://www.lemonleaf.at")
var restaurant_2 = new restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "./img/sixta_restaurant.png" , "+43 1 58 528 56 l +43 1 58 528 56", "austrian", "http://www.sixta-restaurant.at")

document.getElementById("restaurants").innerHTML = (restaurant_1.display_restaurant() + restaurant_2.display_restaurant());

class events extends base{
	eventDate = "";
	eventTime = "";
	ticket_price = "";
	web_address = "";

	constructor(name, city, ZIP_code, address, teaser_img, eventDate, eventTime, ticket_price, web_address){
		super(name, city, ZIP_code, address, teaser_img);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticket_price = ticket_price;
		this.web_address = web_address;

}

	display_concert() {
		return  `<div class="card">
                    <img src="${this.teaser_img}" class="card-img-top" alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p ${this.eventDate}. ${this.eventTime}</p>
                        <p ${this.ticket_price}</p>
                        <p class="card-text">${this.address}, ${this.ZIP_code} ${this.city}</p>
                        <a href="${this.web_address}"target="_blank">${this.web_address.substr(7)}</a>
                    </div>
                    <div class="card-footer">
      					<small class="text-muted">Created: 24.10.2019 12:45 ago</small>
    				</div>
                </div>`   
	}
}

var concert_1 = new events("Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kris_kristofferson.jpg", "Fr., 15.11.2019", "20:00", "58,50 EUR", "http://kriskristofferson.com");
var concert_2 = new events("Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "./img/lenny_kravitz.jpg", "Sat, 09.12.2019", "19:30", "€ 47,80", "http://kriskristofferson.com");

document.getElementById("concerts").innerHTML = (concert_1.display_concert() + concert_2.display_concert());

