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
<<<<<<< Updated upstream
Router.route('/messages');

=======
Router.route('/typprofessors');
>>>>>>> Stashed changes


