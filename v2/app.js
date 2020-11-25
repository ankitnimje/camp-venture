 var express     = require("express"),
	 app         = express(),
	 bodyParser  = require("body-parser"),
	 mongoose    = require("mongoose");
	 PORT		 = 5000;

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// --------------------Add to DB----------------

// Campground.create(
// 	{
// 		name: "Granie Hill",
// 		image: "https://specials-images.forbesimg.com/imageserve/960743598/960x0.jpg?fit=scale",
// 		description: "This is a huge granite hill, no bathrooms. Not water. Complete wilderly. Beautiful Granite."
// 	},
// 	function(err, campground){
// 		if(err){
// 			console.log(err);
// 		}
// 		else {
// 			console.log("Newly Created Campground: ");
// 			console.log(campground)
// 		}
// 	}
// );

// ---------------------------------------------

app.get( "/" , function(req, res){
	res.render("landing")
});

// INDEX - show all campgrounds
app.get("/campgrounds" , function(req, res){
	
	//Getb all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}
		else {
			res.render("index" , {campgrounds:allCampgrounds});
		}
	});
});

// CREATE - add new campgrounds to DB
app.post( "/campgrounds" , function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name: name, image: image, description: description}
	
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			// redirect back to campgrounds page
			res.redirect("/campgrounds")
		}
	});
});

// NEW - show form to create new campgrounds
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

// SHOW - shows more information about the campgrounds
app.get("/campgrounds/:id", function(req, res){
	// find the campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}
		else{
			// render show template with that campground
			res.render("show", {campground: foundCampground});
		}
	});
	
});

// ---------------------------------------

app.listen( PORT,  function(){
	console.log("YelpCamp server connected om PORT " + PORT );
});