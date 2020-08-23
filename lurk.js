$(js (function() {
	var nfObject = new Intl.NumberFormat('en-US'); 
	var output = nfObject.format($(currency)); 
	return "$(username) is lurking & have spent roughly $(hours) hours in the livestream accumulating "+output+" !lurkpoints"
})())
