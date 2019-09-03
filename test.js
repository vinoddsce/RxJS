const Rx = require("rxjs");
const Operators = require("rxjs/operators");

// var add = "11" + "1";
// console.log(add);

// var sub = "11" - "1";
// console.log(sub);

Operators.map(x => x + 1)(Rx.of(1, 2, 3)).subscribe(x => console.log(x));
// console.log(ob.subscribe(x => x));
// ob.subscribe(x => console.log(x));

