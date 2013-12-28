Topics = new Meteor.Collection('topics');
Sections = new Meteor.Collection('sections');
Definitions = new Meteor.Collection('definitions');
Propositions = new Meteor.Collection('propositions');
Annotations = new Meteor.Collection('annotations');

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
  // Event handlers
  Template.proposition.events({
    'click .line-sep': function(event){
      var trigger_elem = event.currentTarget;
      var annotations = Annotations.find({
        line: parseInt(trigger_elem.id, 10),
        proposition: Session.get('prop')
      }).fetch();

      console.log(annotations);

      $('.content #ann-container').empty();
      if (annotations) {
        for (var i = 0; i < annotations.length; i++) {
          $('.content #ann-container').append('<div class="ui item">' + annotations[i].text + '</div>');
        }
      }
      
      $('.ui.modal')
        .modal('show')
      ;
      $('.negative').on('click', function() {
        $('.close.icon').click();
      });
      $('.positive').on('click', function() {
        var text = $('textarea').val();
        $('textarea').val('');
        Annotations.insert({
          type: 'explanation',
          text: text,
          vote: 1,
          line: parseInt(trigger_elem.id, 10),
          proposition: Session.get('prop')
        });
        $('span#' + parseInt(trigger_elem.id,10)).addClass('highlighted');
        $('.close.icon').click();
      });
    },
  });

  Template.proposition.rendered = function() {
    var annotated = Annotations.find({ proposition: Session.get('prop') }).fetch();
    for (var i = 0; i < annotated.length; i++) {
      var line = annotated[i].line;
      $('span#' + line).addClass('highlighted');
    }
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
