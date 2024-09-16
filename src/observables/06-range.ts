import { of, range, asyncScheduler, observeOn } from 'rxjs';


// const src$ = of(1,2,3,4,5);
const obs$ = range(1, 10).pipe(
    observeOn(asyncScheduler)
  );


console.log('inicio');
obs$.subscribe( console.log );
console.log('fin');