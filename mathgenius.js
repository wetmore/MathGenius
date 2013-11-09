Topics = new Meteor.Collection('topics');
Sections = new Meteor.Collection('sections');
Definitions = new Meteor.Collection('definitions');
Propositions = new Meteor.Collection('propositions');

if (Meteor.isClient) {
  Handlebars.registerHelper("capitalize", function(word, context) {
      return word.substr(0,1).toUpperCase() + word.substr(1);
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
