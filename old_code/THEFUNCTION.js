// if(Meteor.isClient) {

// 	function getSelectedText() {
// 	    var sln = window.getSelection();
// 	    var node = sln.anchorNode;

// 	    console.log(node.parentNode);
// 		console.log(sln.anchorOffset);

// 		//case where first click is in MathJax
// 		if (node.parentNode.className != "prop-proof") {
// 			var temp = node.parentNode;

// 			while(temp.className != "MathJax") {
// 				console.log(temp.className);
// 				temp = temp.parentNode;
// 			}

// 			var arr = temp.id.split("-");
// 			var mathjax = Number(arr[2]);

// 			var par = document.getElementsByClassName('prop-proof')[0];
// 			var arr2 = par.children[1].id.split("-");
// 			var mathjax = mathjax - Number(arr2[2]);

// 			console.log(mathjax * 2, mathjax * 2 + 1);

// 			return {
// 				dollar1: mathjax * 2,
// 				dollar2: mathjax * 2 + 1,
// 				offset1:0,
// 				offset2:0
// 			};
// 		}
// 		else
// 		{
// 			var offset1 = sln.anchorOffset;
// 			var offset2 = sln.focusOffset;
// 			var par = document.getElementsByClassName('prop-proof')[0];

// 			var dllr1 = 0;
// 		    var temp = par.firstChild;

// 			while(temp != node && temp != null) {
// 				if (temp.nodeName == "SCRIPT") {
// 					dllr1 ++;
// 				}
// 				temp = temp.nextSibling;
// 	    	}

// 	    	//same thing but for second index
// 	    	var node2 = sln.focusNode;
// 			temp = par.firstChild;
// 			var dllr2 = 0;

// 			while(temp != node2 && temp != null) {
// 				if (temp.nodeName == "SCRIPT") {
// 					dllr2 ++;
// 				}
// 				temp = temp.nextSibling;
// 	    	}

// 	    	console.log(dllr1 * 2, dllr2 * 2, offset1, offset2);

// 	    	return {
// 				dollar1: dllr1 * 2,
// 				dollar2: dllr2 * 2,
// 				offset1: offset1,
// 				offset2: offset2
// 			};
// 		}
// 	};

// 	document.onmouseup = getSelectedText;
// }
