import { Observable, of, from} from "rxjs";


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