Template.events.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		
		var Events = $("#Events") . val() ; 
		console.log(name) ; 
		
		var when = $("#when") . val() ; 
		console.log(name) ; 

		var Where = $("#Where") . val() ; 
		console.log(name) ; 
		
		
		$("#chatinput").val("");

		var profile = Meteor.user().event;
		
		var chatline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				name:name,
				typyear:typyear,
				hometown:hometown,
				when: new Date()
			};
			
		console.dir(chatline);
		
		ChatLines.insert(chatline);
	}
});

Template.events.helpers({
	chatlines: function(){
		return ChatLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return ChatLines.find().count();
	}
});