$(js (function() {
	var bet = 0
	if($(1 10) == "all"){
		bet = $(currency)
	}else{
		bet = parseInt($(1 10));
	}
	var maxBet = 69420
	nfObject = new Intl.NumberFormat('en-US'); 
	// output = nfObject.format(givenNumber); 
	if(bet > maxBet){
		return "$(username), sorry bro your bet is too big (max bet is "+nfObject.format(maxBet)+")"
	}else{
		var emojis = [
						'💯',
						'🌞',
						'🥓',
						'🔥',
						'✨',
						'🌲',
						'💚',
						'🍆',
						'🍑'
					 ]
			emojis.reverse();
		
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
		var extraInfo;
		var winMultiplier = 0;
		switch( Math.max(a,b,c) ){
			case 2:
				// doubles
				if( a == 2){
					// double a
					extraInfo="double a"
					winMultiplier = (slots[0]+2)*2
				}else{
					// double b
					extraInfo="double b"
					winMultiplier = (slots[1]+2)*2
				}
				break;
			case 3:
				// triples
				extraInfo="triples"
				winMultiplier = (slots[0]+2)*3
				break;
			default:
				// no matches
				extraInfo="loser"
				winMultiplier = 0
		}
		var winnings = bet*winMultiplier
		var endTotal = $(currency)-bet+winnings
		

		var returnObject = {
				winning: winnings,
				slots: emojis[slots[0]]+" "+emojis[slots[1]]+" "+emojis[slots[2]],
				total: endTotal
			}
			
		
		return "$(username) got "+emojis[slots[0]]+emojis[slots[1]]+emojis[slots[2]]+" using "+bet+" !lurkpoints getting "+nfObject.format(winnings)+" back ("+nfObject.format(endTotal)+" total now) $[cost "+bet+"] $[give "+winnings+"]";
	}
})())
