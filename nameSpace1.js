var Chinese;
(function (Chinese) {
    Chinese.food = "Sushi";
    var Kitchen = /** @class */ (function () {
        function Kitchen() {
        }
        Kitchen.prototype.make = function () {
            console.log('Making Chinese food');
        };
        return Kitchen;
    }());
    Chinese.Kitchen = Kitchen;
    function delivery() {
        console.log("Your Chinese food is ready");
    }
    Chinese.delivery = delivery;
    delivery();
})(Chinese || (Chinese = {}));
var Italian;
(function (Italian) {
    Italian.food = "Pizza";
    var Kitchen = /** @class */ (function () {
        function Kitchen() {
        }
        Kitchen.prototype.make = function () {
            console.log('Making Italian food');
        };
        return Kitchen;
    }());
    Italian.Kitchen = Kitchen;
    function delivery() {
        console.log("Your Italian food is ready");
    }
})(Italian || (Italian = {}));
console.log(Chinese.food);
console.log(Italian.food);
