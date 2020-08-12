 $(js (function() {
    var emojis = [
					'💯',
					'🌞',
					'🔥',
					'✨',
					'🌲',
					'🍆',
					'🍑'
				 ]
    var possibleValues = parseInt(emojis.length);
	
	var slots = []
	slots[0] = (Math.floor((Math.random() * possibleValues) + 1))-1;
	slots[1] = (Math.floor((Math.random() * possibleValues) + 1))-1;
	slots[2] = (Math.floor((Math.random() * possibleValues) + 1))-1;
	
	var a=0,b=0,c=0
	for(slot of slots){
		if(slot==slots[0]) a++
		if(slot==slots[1]) b++
		if(slot==slots[2]) c++
	}
	var extraInfo
	switch( Math.max(a,b,c) ){
		case 2:
			// doubles
			if( a == 2){
				// double a
				extraInfo="double a"
			}else{
				// double b
				extraInfo="double b"
			}
			break;
		case 3:
			// triples
			extraInfo="triples"
			break;
		default:
			// no matches
			extraInfo="loser"
	}
		

	return extraInfo+" "+emojis[slots[0]]+" "+emojis[slots[1]]+" "+emojis[slots[2]]+" = "+slots[0]+" "+slots[1]+" "+slots[2]+" = "+a+" "+b+" "+c;
})())
