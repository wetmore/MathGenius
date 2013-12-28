if (Meteor.isClient) {
  Template.mathjax.renderContent = function () {
    var options = this.options;
    if (options && _.isFunction(options.fn))
      return new Handlebars.SafeString(options.fn(this.context));
  };

  Template.mathjax.rendered = function () {
    var self = this;
    var nodes = [];
    try {
      //TODO: restrict to user-defined class
      nodes = self.findAll('*');
    } catch (err) { // node not in DOM? ignore
      return err;
    }
    // we don't want to wait untill
    // everything is rendered
    Meteor.defer(function () {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, nodes]);
    });
  };
}
