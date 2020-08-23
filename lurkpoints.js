$(js (function() {
	var nfObject = new Intl.NumberFormat('en-US'); 
	var output = nfObject.format($(currency)); 
	return "$(username) has "+output+" !lurkpoints"
})())
