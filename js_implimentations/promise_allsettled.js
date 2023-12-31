const promise1 = new Promise((resolve, reject) => setTimeout(()=> reject('Promise1')), 1000);

const promise2 = new Promise((resolve, reject) => setTimeout(()=> resolve('Promise2')), 2000);

const promise3 = new Promise((resolve, reject) => setTimeout(()=> resolve('Promise3')), 3000);

/**
 * Settle all promises and return result  
 */
Promise.allSettled([promise1, promise2, promise3])
.then((res) => {
console.log('In then', res);
}).catch((err) => {
console.log('In catch', err);
})

/**
 * Output:
 * [
  { status: 'rejected', reason: 'Promise1' },
  { status: 'fulfilled', value: 'Promise2' },
  { status: 'fulfilled', value: 'Promise3' }
]
 */
