// PROMISE
const calculate = (a, b, c) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0 || c < 0) 
            return reject("No numbers can be negative.");
      resolve(a + b + c);
    }, 1000);
  });
};


calculate(1, 2, 3)
  .then((result0) => {
    console.log(result0);
    return calculate(result0, 4, 5);
  })
  .then((result1) => {
    console.log(result1);
    return calculate(result1, 6, 7);
  })
  .then((result2) => {
    console.log(result2);
    return calculate(result2, 8, 9);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.log(error);
  });

/*//////////////////////////////////////////////////////////////////////////////////////////*/

// ASYNC

const add = async () => {
  const sum1 = await calculate(1, 2, 3);
  const sum2 = await calculate(sum1, 4, 5);
  const sum3 = await calculate(sum2, 6, 7);
  const sum4 = await calculate(sum3, 8, 9);
  return `
    ${sum1}  
    ${sum2}  
    ${sum3}   
    ${sum4}
            `;
};

add()
.then((value) => console.log(value))
.catch((error) => console.log(error))
