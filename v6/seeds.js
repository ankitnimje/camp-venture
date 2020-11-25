var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e507441732a7edd954ccd_340.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Milton peace's Dome",
		image:"https://pixabay.com/get/55e8dc404f5aab14f1dc84609620367d1c3ed9e04e507441732a7edd954ccd_340.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Gunman's Paradise",
		image:"https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441732a7edd954ccd_340.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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