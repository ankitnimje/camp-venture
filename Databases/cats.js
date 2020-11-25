var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// // adding a new cat to the db

// var george = new Cat({
// 	name: "Lightsie",
// 	age: 3,
// 	temperament: "Cute"
// })

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something Went Wrong!");
// 	}
// 	else {
// 		console.log("we just saved a cat into database.");
// 		console.log(cat);
// 	}
// });


Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Nice"
}, function(err, cat){
	if(err){
		console.log(err);
	}
	else{
		console.log(cat);
	}
});


// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
	if(err){
		console.log("Oh No, Error!");
		console.log(err);
	}
	else {
		console.log("All the cats we have ...");
		console.log(cats);
	}
});
