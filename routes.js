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
      if (Topics.find().count() > 0) {
        var topic = Topics.findOne({ encodedname: this.params.name });
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
    path: 'topics/:name/:section',

    data: function() {
      if ((Topics.find().count() > 0) && (Sections.find().count() > 0)) {
        var topic = Topics.findOne({ encodedname: this.params.name });
        var section = Sections.findOne({ encodedname: this.params.section, topic: topic._id});
        var defs = Definitions.find({section: section._id}).fetch();
        var props = Propositions.find(
          { section: section._id}, 
          { sort: { number: 1 } }
        ).fetch();

        console.log(defs, props);
        return {

        }
      };
    }

  });
});
