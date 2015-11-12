
Template.editProfile.helpers({
	getProfile: function(){
		var profile = Meteor.user().profile;
		return profile;
	}
});

Template.editProfile.events({
	"submit #edit_profileform": function(event){
		
		event.preventDefault();

		var profile = Meteor.user().profile;
		profile.firstName = $("#firstName").val();
		profile.lastName = $("#lastName").val();
		profile.typyear = $("#typyear").val();
		profile.bio = $("#bio").val();
		profile.image_url = $("#image_url").val();

		Meteor.users.update(Meteor.userId(), {$set: {profile: profile}});
	}
});