// $(username) gets $(repeat $(rng 1 40) 🥓) many pieces... $(count) attempts to get 🥓

$(js (function() {
	var user = $(username)
		user = key.replace(' ','')
	var rng = parseInt($(rng 1 40));
	var frozenBacon = parseInt($(cache bacon.`user`))
	var totalBacon = rng+frozenBacon
	var save = "$[cache bacon."+user+" 600 totalBacon]"
	
	return "$(username) got "+rng+" pieces of bacon and now has "+totalBacon+" pieces in their freezer "+save;
})())
