"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.from)(['oliver', 'is', 'cool']).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete!')
});
const promise = new Promise((resolve, reject) => {
    resolve('Resolve');
});
// You will net see resolve
console.log(promise);
const observablePromise$ = (0, rxjs_1.from)(promise);
observablePromise$.subscribe({
    next: (value) => console.log(value)
});
let observable$ = new rxjs_1.Observable((subscriber) => {
    subscriber.next("Hello world");
    subscriber.error();
    subscriber.complete();
});
let observer = {
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log("Complete!");
    },
    error: (err) => {
        console.log("This is broken!");
    }
};
observable$.subscribe(observer);
(0, rxjs_1.of)('oliver', 'is', 'cool').subscribe({
    next: value => console.log(value),
    error: err => console.log(err)
});
function handmadeOf(...args) {
    return new rxjs_1.Observable(subscriber => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    });
}
handmadeOf('Oliver', 'is', 'cool').subscribe(value => console.log(value));
