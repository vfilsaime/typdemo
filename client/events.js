Template.events.events({
	"submit #eventsform": function(event){
		
		event.preventDefault();
		
		var eventname = $("#eventname").val(); 
		console.log(eventname) ; 
		
		var when = $("#when").val(); 
		console.log(when); 

		var where = $("#where").val(); 
		console.log(where); 
		
		
		$("#eventname").val("");
		$("#when").val("");
		$("#where").val("");



		var profile = Meteor.user().profile;
		
		var eventsline = 
		  	{
				uid:Meteor.userId(),  
				who:profile["firstName"]+" "+profile["lastName"], 
				eventname:eventname,
				when:when,
				where:where
				
			};
			
		console.dir(eventsline);
		
		EventsLines.insert(eventsline);
	}
});

Template.events.helpers({
	eventslines: function(){
		return EventsLines.find({},{limit:10, sort:{when:-1}});
	},
	numevents: function(){
		return EventsLines.find().count();
	}
});