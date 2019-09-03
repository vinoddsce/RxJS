const Rx = require('rxjs');
const RxOp = require('rxjs/operators');

// const dataSource = [1, 2, -3, 4];

// var observable = Rx.Observable.create(function (observer) {

//     for (var i = 0; i < dataSource.length; i++) {
//         if (dataSource[i] >= 0) {
//             observer.next(dataSource[i]);
//         } else {
//             observer.error("Negative Number");
//         }
//     }
//     observer.complete();

//     // setTimeout(() => {
//     //     observer.next(4);
//     //     observer.complete();
//     // }, 2000);
// })

// observable.subscribe({
//     next: (value) => { console.log("Data Received, ", value) },
//     error: (err) => { console.log("Error Occured", err) },
//     complete: () => { console.log("Completed") }
// })

// console.log("That's All");

// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';


