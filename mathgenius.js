Topics = new Meteor.Collection('topics');
Sections = new Meteor.Collection('sections');
Definitions = new Meteor.Collection('definitions');
Propositions = new Meteor.Collection('propositions');

if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
