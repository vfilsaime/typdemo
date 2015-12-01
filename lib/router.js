Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about');
Router.route('/events');
Router.route('/ourcommunity');
Router.route('/newsPage');
Router.route('/profile');
Router.route('/edit_profile');
Router.route('/chats');
Router.route('/startchat');


Router.route('/chats/:_id', {
    template: 'chatPage',
    data: function(){
        var chatId = this.params._id;
        return Chats.findOne({ _id: chatId });
    }
});


