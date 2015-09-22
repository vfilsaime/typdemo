Template.chat.events({
	"submit #chatform": function(event){
		
		event.preventDefault();
		
		var name = $("#name") . val() ; 
		console.log(name) ; 
		
		var typyear = $("#typyear") . val() ; 
		console.log(name) ; 

		var hometown = $("#hometown") . val() ; 
		console.log(name) ; 
		
		
		$("#chatinput").val("");

		var profile = Meteor.user().profile;
		
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

Template.chat.helpers({
	chatlines: function(){
		return ChatLines.find({},{limit:10, sort:{when:-1}});
	},
	numchats: function(){
		return ChatLines.find().count();
	}
});