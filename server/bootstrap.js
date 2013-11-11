Meteor.startup(function() {
  //if (Topics.find().count() === 0) {
    Topics.remove({});
    Sections.remove({});
    Definitions.remove({});
    Propositions.remove({});
    Annotations.remove({});
    var topic_id = Topics.insert({
      name: 'Graph Theory',
      encodedname: 'graphtheory'
    });
    var sections = [
      {
        name: 'Basic Definitions',
        number: 1,
        topic: topic_id,
        description: 'Important terms, the handshake lemma',
        encodedname: 'basicdefinitions'
      },
      {
        name: 'Connectivity',
        number: 2,
        topic: topic_id,
        description: 'Connected components, cut edges',
        encodedname: 'connectivity'
      },
      {
        name: 'Trees and Forests',
        number: 3,
        topic: topic_id,
        description: 'Acyclic simple graphs',
        encodedname: 'treesandforests'
      },
      {
        name: 'Spanning Trees',
        number: 4,
        topic: topic_id,
        description: 'Fundamental cycles, minimum-cost trees',
        encodedname: 'spanningtrees'
      },
      {
        name: 'Shortest Paths',
        number: 5,
        topic: topic_id,
        description: 'Shortest-path trees, Dijkstra\'s algorithm',
        encodedname: 'shortestpaths'
      },
      {
        name: 'Euler\'s Theorem and Hamiltonian Paths',
        number: 6,
        topic: topic_id,
        description: 'Necessary/sufficient conditions',
        encodedname: 'eulerhamiltonian'
      },
      {
        name: 'Bipartite Graphs',
        number: 7,
        topic: topic_id,
        description: 'Bipartitions, necessary conditions',
        encodedname: 'bipartite'
      },
      {
        name: 'Matchings in Bipartite Graphs',
        number: 8,
        topic: topic_id,
        description: 'König\'s theorem, vertex covers, Hall\'s theorem',
        encodedname: 'bipartitematchings'
      }
    ];
    var section_ids = [];
    for (var i = 0; i < sections.length; i++) {
      section_ids[i] = Sections.insert(sections[i]);
    };

    var definitions = [
      {
        term: 'Graph',
        body: 'A graph $G$ is an ordered pair $(V(G), E(G))$, where $V(G)$ is a set of vertices, $E(G)$ is a set of edges, and a edge is said to be incident to one or two vertices, called its ends. If $e$ is incident to vertices $u$ and $v$, we write $e = uv = vu$.',
        section: section_ids[0]
      },
      {
        term: 'Loop',
        body: 'A loop is an edge with only one end',
        section: section_ids[0]
      },
      {
        term: 'Parallel',
        body: 'Edges are said to be parallel if they are incident to the same two vertices.',
        section: section_ids[0]
      },
      {
        term: 'Connected',
        body: 'A graph $G$ is connected if and only if for all $u, v \\in V(G)$, there exists a walk from $u$ to $v$',
        section: section_ids[1]
      },
      {
        term: 'Componenents',
        body: 'A connected component of a graph $G$ is a maximal connected subgraph.',
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
        number: 1,
        statement: 'Let $G$ be a graph which is not connected. Then there exists a partition $(X, Y)$ of $G$, $X, Y \\neq \\emptyset$, such that no edge of $G$ has one end in $X$ and another in $Y$.',
        proof: '<span class="line-sep" id="1">Trivial</span>'
      }, {
        type: 'lemma',
        section: section_ids[1],
        number: 2,
        statement: 'Let $G$ be a connected graph, let $X \\subsetneq V(G)$ with $X \\neq \\emptyset$. Then there exists an edge of $G$ with one edge in $X$ and another in $V(G) - X$.',
        proof: '<span class="line-sep" id="1">Trivial</span>'
      }, {
        type: 'lemma',
        section: section_ids[1],
        number: 3,
        statement: 'If there is a walk with ends $u, v$ in $G$, then there is a path in $G$ with the same ends.',
        proof: '<span class="line-sep" id="1">Choose the walk in $G$ with ends $u$ and $v$ of minimal length. </span><span class="line-sep" id="2">We will show that it corresponds to a path, i.e. that it has no repeated vertices. </span><span class="line-sep" id="3">Suppose not, i.e. the walk is given by $v_0 e_1 v_1 \\cdots v_n$, and $v_i = v_j$ for some $i < j$. </span><span class="line-sep" id="4">Then $v_0 e_1 v_1 \\cdots v_i v_{j+1} \\cdots v_n$ is a shorter walk with the same ends, which proves the claim by contradiction.</span>'
      }, {
        type: 'lemma',
        section: section_ids[1],
        number: 4,
        statement: 'If $H_1, H_2$ are connected subgraphs of $G$ so that $H_1 \\cap H_2 \\neq \\emptyset$, then $H_1 \\cup H_2$ is connected.',
        proof: '<span class="line-sep" id="1">Let $w \\in V(H_1) \\cap V(H_2)$.</span><span class="line-sep" id="2"> Now, for all $u, v \\in V(H_1 \\cup H_2) = V(H_1) \\cup V(H_2)$, there exists a walk from $u$ to $w$ which lies entirely WLOG in $H_1$,</span><span class="line-sep" id="3"> and a walk from $w$ to $v$ lying WLOG entirely in $H_2$.</span><span class="line-sep" id="4"> Concatenating these walks, the result is immediate.</span>'
      }
    ];
    for (var i = 0; i < props.length; i++) {
      Propositions.insert(props[i]);
    };

    var annotations = [
      {
        type:'explanation',
        text: 'Minimizing a particular quantity is a technique that you see over and over again in Graph Theory.',
        vote: 4,
        line: 1,
        proposition: Propositions.findOne({number: 3})
      }];

//  }
});
