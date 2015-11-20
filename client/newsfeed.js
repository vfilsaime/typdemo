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
	likes: function(){
		return this.likes.length;
	},
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
	  },
	  numlikes: function(){
	    return (this.likes)? this.likes.length: 0;
	}
});

Template.news_item.events({
    "click #delete": function () {
    	News.remove(this._id);
    },

    "click #like": function () {
      var likes = this.likes || [];
      var index = likes.indexOf(Meteor.userId());
      if (index < 0) {
      	likes.push(Meteor.userId());
      }

      News.update(this._id, {
  		$set: {likes:likes}
  	  });
    }


});
