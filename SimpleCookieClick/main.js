Game.registerMod("simple cookie click", {
  init: function () {
    Game.Notify(`Simple Cookie Click Loaded!`, "", [16, 5]);
    this.name = "Simple Cookie Click Mod";
    this.version = "1.3";
    this.GameVersion = "2.042";

    this.config = this.defaultConfig();

    //auto clicks fortune tickers
    var tapNew = setInterval(function () {
      if (Game.TickerEffect && Game.TickerEffect.type == "fortune") {
        Game.tickerL.click();
      }
    }, 3000);

    //auto clicks any golden cookie.  Can be changed to click any shimmers
    var autoClickGolden = setInterval(function () {
      for (var h in Game.shimmers) {
        if (
          Game.shimmers[h].type == "golden" ||
          Game.shimmers[h].type == "reindeer"
        ) {
          Game.shimmers[h].pop();
        }
      }
    }, 1000);

    //clicks that cookie every 100ms
    var autoClickBigCookie = setInterval(Game.ClickCookie, this.clickInterval);

    //auto casts Force Hand Of Fate whenever magic is maxed out
    var autoSpellCast = setInterval(function () {
      var grimoireObject = Game.Objects["Wizard tower"].minigame;

      if (grimoireObject.magic == grimoireObject.magicM) {
        grimoireObject.castSpell(grimoireObject.spellsById[1], {});
      }
    }, 1000);
  },
  defaultConfig: function () {
    var data = {
      clickInterval: 100,
    };
    return data;
  },
  save: function () {
    return JSON.stringify(this.config);
  },
  load: function (str) {
    var obj = {};
    if (str) {
      obj = JSON.parse(str);
    }

    this.config = {
      ...this.defaultConfig(),
      ...obj,
    };
  },
});
