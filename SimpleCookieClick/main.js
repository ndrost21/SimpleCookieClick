Game.registerMod("simple cookie click", {
  init: function () {
    Game.Notify(`Simple Cookie Click Loaded!`, "", [16, 5]);

    //auto clicks any golden cookie.  Can be changed to click any shimmers
    var autoClickGolden = setInterval(function () {
      for (var h in Game.shimmers) {
        if (Game.shimmers[h].type == "golden") {
          Game.shimmers[h].pop();
        }
      }
    }, 1000);

    //clicks that cookie every 100ms
    var autoClickBigCookie = setInterval(Game.ClickCookie, 100);

    //auto casts Force Hand Of Fate whenever magic is maxed out
    var autoSpellCast = setInterval(function () {
      var grimoireObject = Game.Objects["Wizard tower"].minigame;

      if (grimoireObject.magic == grimoireObject.magicM) {
        grimoireObject.castSpell(grimoireObject.spellsById[1], {});
      }
    }, 1000);
  },
  save: function () {},
  load: function (str) {},
});
