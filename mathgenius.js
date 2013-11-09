Topics = new Meteor.Collection('topics');
Sections = new Meteor.Collection('sections');
Definitions = new Meteor.Collection('definitions');
Propositions = new Meteor.Collection('propositions');

if (Meteor.isClient) {
  Handlebars.registerHelper("capitalize", function(word, context) {
      return word.substr(0,1).toUpperCase() + word.substr(1);
  });
  Handlebars.registerHelper('mathjax', function (options) {
    var self = this;
    var template = Template.mathjax;
    if (!template)
      // fallback solution
      return new Handlebars.SafeString(options.fn(self));
    //---------------------------------------------------
    return template({
      options: options,
      context: this,
    });
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
