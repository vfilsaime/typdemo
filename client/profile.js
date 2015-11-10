
Template.profile.helpers({
	getProfile: function(){
		var profile = Meteor.user().profile;
		console.dir(profile);
		return profile;
	},
	myEvents: function(){
		return Events.find({uid:Meteor.userId()},{sort:{when:-1}});;
	},
	myNews: function(){
		return News.find({uid:Meteor.userId()},{sort:{when:-1}});;
	},
});