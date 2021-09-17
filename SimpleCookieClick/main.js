Game.registerMod("simple cookie click", {
  init: function () {
    Game.Notify(`Simple Cookie Click Loaded!`, "", [16, 5]);
    
	var autoClickGolden = setInterval(function () {
      for (var h in Game.shimmers) {
        if (Game.shimmers[h].type == "golden") {
          Game.shimmers[h].pop();
        }
      }
    }, 1000);

    var autoClickBigCookie = setInterval(Game.ClickCookie, 100);
  },
  save: function () {},
  load: function (str) {},
});
