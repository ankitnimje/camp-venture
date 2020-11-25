var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});

// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String, 
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email: "hermoini@hogwarts.edu",
// 	name: "Hermoini granger"
// });

// newUser.posts.push({
// 	title: "vingardium levios",
// 	content: "Vingaaardiuuum Leviossaaaaaaaaaa"
// });


// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Congratulations",
// 	content: "Heyy Charlie Congrats for your Graduation"
// });
// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}
// 	else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "Hermoini granger"}, function(err, user){
	if(err){
		console.log(err);
	}
	else{
		user.posts.push({
			title: "3 things I hate the most",
			content: "Voldemort Voldemort Voldemort!"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log(user);
			}
		});
	}
});








