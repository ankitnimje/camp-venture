var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image:"https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2b73d39645c65d_340.jpg",
		description: "blah b;ah b;aha ;mskapsnmjnjsoisininnmoid nndnm jimoiwj ojoqwksm  egd."
	},
	{
		name: "Milton peace's Dome",
		image:"https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744171277cd59f4ec0_340.jpg",
		description: "blah b;ah b;aha ;mskapsnmjnjsoisininnmoid nndnm jimoiwj ojoqwksm  egd."
	},
	{
		name: "Gunman's Paradise",
		image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2b73d39645c65d_340.jpg",
		description: "blah b;ah b;aha ;mskapsnmjnjsoisininnmoid nndnm jimoiwj ojoqwksm  egd."
	}
]

function seedDB(){
	// Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed campgrounds!");
		// Add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				}
				else {
					console.log("added a campground")
					// Add a few comments
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						}, function(err, comment){
							if (err){
								console.log(err);
							}
							else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created a new comment");
							}
						});
				}
			});
		});
	});	
	
	
}

module.exports = seedDB;