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

  this.route('section', {
    path: 'topics/:name/:section'
    // route to a specific section. list the theorems
  });
});
