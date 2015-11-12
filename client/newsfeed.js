Template.newsfeed.events({
	"submit #eventform": function(event){
		
		event.preventDefault();
		
		var heading = $("#heading").val();
		var date = $("#date_time").val();
		var info = $("#info").val();
		var location = $("#location").val();
		
		$("#heading").val("");
		$("#date_time").val("");
		$("#info").val("");
		$("#location").val("");

		var profile = Meteor.user().profile;
		
		var event = {
			uid:Meteor.userId(),  
			name:profile["firstName"]+" "+profile["lastName"],
			info:info,
			heading:heading,
			location:location,
			attending:[],
			when: date
		};		
		Events.insert(event);
	}
});

Template.newsfeed.helpers({
	events: function(){
		return Events.find({},{sort:{when:-1}});
	},
	numevents: function(){
		return Events.find().count();
	}
});

Template.news_item.helpers({
	attending_count: function(){
		return this.attending.length;
	},
  	authorized: function(){
	    return this.uid==Meteor.userId();
	  }
});

Template.news_item.events({
	"click #attending": function () {
      var attending = this.attending;
      var index = attending.indexOf(Meteor.userId());
      if (index < 0) {
      	attending.push(Meteor.userId());
      }
      Events.update(this._id, {
  		$set: {attending:attending}
  	  });
    },

	"click #notattending": function () {
      var attending = this.attending;
      index = attending.indexOf(Meteor.userId());
      if (index > -1) {
      	attending.splice(index, 1);
      }
      Events.update(this._id, {
  		$set: {attending:attending}
  	  });
    },
    "click #delete": function () {
    	Events.remove(this._id);
    }
});
