Meteor.startup(function() {
  Topics.remove({});

  if (Topics.find().count() === 0) {
    var topic_id = Topics.insert({
      name: 'Graph Theory',
      encodedname: 'graphtheory'
    });
    var sections = [
      {
        name: 'Basic Definitions',
        number: 1,
        topic: topic_id,
        encodedname: 'basicdefinitions'
      },
      {
        name: 'Connectivity',
        number: 2,
        topic: topic_id,
        encodedname: 'connectivity'
      }
    ];
    var section_ids = [];
    for (var i = 0; i < sections.length; i++) {
      section_ids[i] = Sections.insert(sections[i]);
    };

    var definitions = [
      {
        term: 'Graph',
        body: 'A {graph} $G$ is an ordered pair $(V(G), E(G))$, where $V(G)$ is a set of {vertices}, $E(G)$ is a set of {edges}, and a edge is said to be {incident} to one or two vertices, called its {ends}. If $e$ is incident to vertices $u$ and $v$, we write $e = uv = vu$.',
        section: section_ids[0]
      },
      {
        term: 'Connected',
        body: 'A graph $G$ is connected if and only if for all $u, v \\in V(G)$, there exists a walk from $u$ to $v$',
        section: section_ids[1]
      }
    ];
    for (var i = 0; i < definitions.length; i++) {
      Definitions.insert(definitions[i]);
    };
    var props = [
      {
        type: 'lemma',
        section: section_ids[1],
        number: 3,
        statement: 'If there is a walk with ends $u, v$ in $G$, then there is a path in $G$ with the same ends.',
        proof: 'Choose the walk in $G$ with ends $u$ and $v$ of minimal length. We will show that it corresponds to a path, i.e. that it has no repeated vertices. \
        Suppose not, i.e. the walk is given by $v_0 e_1 v_1 \ldots v_n$, and $v_i = v_j$ for some $i < j$. Then $v_0 e_1 v_1 \\ldots v_i v_{j+1} \\ldots v_n$ is a shorter walk with the same ends, which proves the claim by contradiction.'
      }
    ];
    for (var i = 0; i < props.length; i++) {
      Propositions.insert(props[i]);
    };

  }
});
