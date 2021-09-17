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

    var autoSpellCast = setInterval(
      function () {
        var grimoireObject = Game.ObjectsById[7].minigame;

        if (
          Game.shimmers.legnth == 0 &&
          grimoireObject.magicM >= 10 + 0.1 * grimoireObject.magicM &&
          grimoireObject.magic == grimoireObject.magicM
        ) {
          grimoireObject.castSpell(grimoireObject.spellsById[1], {});
        }
      },

      1000
    );
  },
  save: function () {},
  load: function (str) {},
});
