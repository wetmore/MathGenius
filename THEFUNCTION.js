function getSelectedText() {
    var sln = window.getSelection();
    var node = sln.anchorNode;

    console.log(node.parentNode);
	console.log(sln.anchorOffset);

	//case where first click is in MathJax
	if (node.parentNode.className != "prop-proof") {
		var temp = node.parentNode;

		while(temp.className != "MathJax") {		
			console.log(temp.className);
			temp = temp.parentNode;
		}

		var mathjax = parseInt(temp.getAttribute('id'));

		return {
			dollar1: mathjax * 2,
			dollar2: mathjax * 2 + 1,
			offset1:0,
			offset2:0
		};
	}
	else {
		var offset =

	}
};

document.onmouseup = getSelectedText;