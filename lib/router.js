Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about');
Router.route('/chat');
Router.route('/events');
Router.route('/ourcommunity');
Router.route('/newsPage');
Router.route('/profile');
Router.route('/edit_profile');
Router.route('/messages');


