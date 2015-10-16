Template.messages.events({
	"submit #messagesform": function(event){
		
		event.preventDefault();
		
		var name = $("#name") . val() ; 
		console.log(name) ; 
		
		var major = $("#major") . val() ; 
		console.log(name) ; 

		var hometown = $("#hometown") . val() ; 
		console.log(name) ; 
		
		
		$("#messagesinput").val("");

		var profile = Meteor.user().profile;
		
		var messageline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				name:name,
				typyear:typyear,
				hometown:hometown,
				when: new Date()
			};
			
		console.dir(messagesline);
		
		MessagesLines.insert(messagesline);
	}
});

Template.messages.helpers({
	messageslines: function(){
		return messagesLines.find({},{limit:10, sort:{when:-1}});
	},
	nummessages: function(){
		return MessagesLines.find().count();
	}
});