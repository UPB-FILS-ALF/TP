"use strict";
var Colours;
(function (Colours) {
    Colours[Colours["BLACK"] = 0] = "BLACK";
    Colours[Colours["BROWN"] = 1] = "BROWN";
    Colours[Colours["RED"] = 2] = "RED";
    Colours[Colours["ORANGE"] = 3] = "ORANGE";
    Colours[Colours["YELLOW"] = 4] = "YELLOW";
    Colours[Colours["GREEN"] = 5] = "GREEN";
    Colours[Colours["BLUE"] = 6] = "BLUE";
    Colours[Colours["VIOLET"] = 7] = "VIOLET";
    Colours[Colours["GREY"] = 8] = "GREY";
    Colours[Colours["WHITE"] = 9] = "WHITE";
})(Colours || (Colours = {}));
var sum = 0;
sum = Colours.BROWN + Colours.ORANGE + Colours.VIOLET;
console.log(sum);
