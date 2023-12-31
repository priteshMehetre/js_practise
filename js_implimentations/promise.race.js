const promise1 = new Promise((resolve, reject) => setTimeout(()=> resolve('Promise1')), 1000);

const promise2 = new Promise((resolve, reject) => setTimeout(()=> resolve('Promise2')), 2000);

const promise3 = new Promise((resolve, reject) => setTimeout(()=> resolve('Promise3')), 3000);

/**
 * Returns first settled promise result that can be either failed or success
 */
Promise.race([promise1, promise2, promise3])
.then((res) => {
console.log('In then', res);
}).catch((err) => {
console.log('In catch', err);
})
