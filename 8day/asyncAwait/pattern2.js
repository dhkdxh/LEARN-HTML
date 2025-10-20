function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase);
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === 'DONE') {
      resolve('Go Play Game!');
    } else {
      reject(new Error("Don't"));
    }
  });
}

// myWork('done')
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   }); //pattern 굿 but promise가 중첩된다면?

myWork('done').then(function (result) {
  playGame(result).then(function (val) {
    console.log(val);
  });
});
