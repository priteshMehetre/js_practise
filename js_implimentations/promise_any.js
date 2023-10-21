const promise1 = new Promise((resolve, reject) => setTimeout(()=> reject('Promise1')), 1000);

const promise2 = new Promise((resolve, reject) => setTimeout(()=> reject('Promise2')), 2000);

const promise3 = new Promise((resolve, reject) => setTimeout(()=> reject('Promise3')), 3000);

/**
 * Returns result of first success promise and if all the promises failed then returns errors in collection
 */
Promise.any([promise1, promise2, promise3])
.then((res) => {
console.log('In then', res);
}).catch((err) => {
console.log('In catch', err);
})

/**
 * If promise1 is rejected and other two are resolved then output will be 'In then Promise2'
 */
/**
 * If all promises rejected then output:
 * {
  [errors]: [ 'Promise1', 'Promise2', 'Promise3' ]
} 
 */