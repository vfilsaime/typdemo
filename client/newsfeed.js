Template.newsPage.events({
	"submit #newsform": function(event){
		
		event.preventDefault();
		
		var New_Post = $("#New_Post").val();
		
		$("#New_Post").val("");
		

		var profile = Meteor.user().profile;
		
		var news_item = {
			uid:Meteor.userId(),  
			who:profile["firstName"]+" "+profile["lastName"],
			post:New_Post,
			when: new Date()
		};		
		News.insert(news_item);
	}
});

Template.newsPage.helpers({
	newsitems: function(){
		return News.find({},{sort:{when:-1}});
	},
	numposts: function(){
		return News.find().count();
	}
});

Template.news_item.helpers({
  	authorized: function(){
	    return this.uid==Meteor.userId();
	  }
});

Template.news_item.events({
    "click #delete": function () {
    	News.remove(this._id);
    }
});
