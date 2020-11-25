var express     = require("express"),
	app         = express(),
	bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

var campgrounds = [
		{name: "Salmon Creek" , image: "https://d2umhuunwbec1r.cloudfront.net/gallery/0004/0025/5E29973C10EC438FACE45AB950337832/medium.jpg"},
		{name: "Granite Hill" , image: "https://koa.com/blog/images/solo-camping-tips.jpg?preset=blogPhoto"},
		{name: "Mountain Goat's Rest" , image: "https://www.gannett-cdn.com/presto/2020/01/17/USAT/360e601d-30ad-44f3-a3f5-147c87504053-01_-_Canada.jpg?width=2560"},
		{name: "Salmon Creek" , image: "https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg"},
		{name: "Granite Hill" , image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/TroutLakeCamping_DC2.jpg?itok=2UO32aZ_"},
		{name: "Mountain Goat's Rest" , image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/TroutLakeCamping_DC2.jpg?itok=2UO32aZ_"},
		{name: "Salmon Creek" , image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/TroutLakeCamping_DC2.jpg?itok=2UO32aZ_"},
		{name: "Granite Hill" , image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/TroutLakeCamping_DC2.jpg?itok=2UO32aZ_"},
		{name: "Mountain Goat's Rest" , image: "https://www.colorado.com/sites/default/files/styles/1000x685/public/TroutLakeCamping_DC2.jpg?itok=2UO32aZ_"}         
	];

app.get( "/" , function(req, res){
	res.render("landing")
});

app.get("/campgrounds" , function(req, res){
	res.render("campgrounds" , {campgrounds:campgrounds});
});

app.post( "/campgrounds" , function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

// ---------------------------------------

app.listen( 4000 , function(){
	console.log("YelpCamp server connected om PORT 4000");
});