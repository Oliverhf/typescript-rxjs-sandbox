import { Observable, of, from, map} from "rxjs";
import { filter } from "rxjs/operators";


const observable4$ = from([1, 1, 2, 2, 2]).pipe(filter((num) => num === 2));

const subscribed =  observable4$.subscribe((val) => console.log(val));

const numArr = [1, 2, 3, 4];

const observable3$ = from(numArr).pipe((map((value) => value * 2)));

const returnValue = observable3$.subscribe((x) => console.log(x));

const observable2$ = from([12,2,3,44,45])
    .pipe(
        map((val : any) => val * 2)
    );

observable2$.subscribe(value => console.log(value));


from (['oliver', 'is', 'cool']).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete!')
})

const promise = new Promise((resolve, reject) => {
    resolve('Resolve');
})

// You will net see resolve
console.log(promise);


const observablePromise$ = from(promise);

observablePromise$.subscribe({
    next: (value) => console.log(value)
})



let observable$ = new Observable((subscriber) => {
    subscriber.next("Hello world");
    subscriber.error();
    subscriber.complete();

})

let observer = {
    next: (value: any) => {
        console.log(value);
    },
    complete: () => {
        console.log("Complete!")
    },
    error: (err: any) => {
        console.log("This is broken!");
    }
}

observable$.subscribe(observer);

of('oliver', 'is', 'cool').subscribe({
   next: value => console.log(value),
   error: err => console.log(err)
})

function handmadeOf(...args : any) {
    return new Observable(subscriber => {
        for(let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    })
}

handmadeOf('Oliver', 'is', 'cool').subscribe(value => console.log(value));