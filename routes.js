if (Meteor.isClient) {

  Router.map(function () {
    this.route('home', {
      path: '/'
    });

    this.route('topics', {
      // route to the topics page
     data: function() {
       return { topics: Topics.find().fetch() };
     }
    });

    this.route('topic', {
      path: 'topics/:name',
      // route to a specific topic. list the sections
      data: function() {
        var topic = Topics.findOne({ encodedname: this.params.name });
        if (topic) {
          return {
            topic: topic,
            sections: Sections.find(
              { topic: topic._id },
              { sort: { number: 1 } }
            ).fetch()
          };
        }
      }
    });


    // route to a specific section. list the theorems
    this.route('section', {
      path: 'topics/:name/:section/:prop?',

      action: function() {
        if (!this.params.prop) {
          this.render('section');
        } else {
          this.render('proposition');
        }
      },

      data: function() {
        var topic = Topics.findOne({ encodedname: this.params.name });
        if (topic) {
          var section = Sections.findOne({ encodedname: this.params.section, topic: topic._id});
          if (section) {
            var defs = Definitions.find({section: section._id}).fetch();

            if (!this.params.prop) {
              var props = Propositions.find(
                { section: section._id}, 
                { sort: { number: 1 } }
              ).fetch();
              return {
                definitions: defs, 
                propositions: props,
                topic: topic,
                section: section
              };
            } else {
              var prop = Propositions.findOne({
                number: parseInt(this.params.prop, 10)
              });
              return {
                definitions: defs, 
                proposition: prop,
                topic: topic,
                section: section
              };
            }
          }
        }
      }
    });

  });

};
