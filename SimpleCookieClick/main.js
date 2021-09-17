Game.registerMod("simple sookie click",{
	init:function(){
	Game.Notify(`Simple Cookie Click!`,'',[16,5]);
		var autoClickGolden = setInterval(function() {
			for (var h in Game.shimmers) {
				if(Game.shimmers[h].type=="golden") {
					Game.shimmers[h].pop();
				}
			} 
		} , 1000);	
	},
	save:function(){
	},
	load:function(str){
	},
});

   