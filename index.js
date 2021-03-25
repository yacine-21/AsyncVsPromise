// PROMISE 

// const calculate = (a,b,c) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if(a < 0 || b < 0 || c < 0)
//                 return reject("No numbers can be negative.")
//             resolve(a+b+c)
//         }, 2000)
//     })
// }

// calculate(1,2,3).then((addition) =>{
//     console.log(addition);
//     return calculate(addition, 4, 5)
// })
// .then((result) =>{
//     console.log(result);
//     return calculate(result, 6, 7)
// })
// .then((result2 =>{
//     console.log(result2)
//     return calculate(result2, 8, 9)
// }))
// .then((result3) =>{
//     console.log(result3)
// })
// .catch(error =>{
//     console.log(error)
// })


/*//////////////////////////////////////////////////////////////////////////////////////////*/


// ASYNC

const calculate = (a,b,c) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(a < 0 || b < 0 || c < 0)
                return reject("No numbers can be negative.")
            resolve(a+b+c)
        }, 2000)
    })
}

const add = async () => {
    const sum1 = await calculate(1,2,3);
    const sum2 = await calculate(sum1,5,6);
    const sum3 = await calculate(sum2,7,8);
    const sum4 = await calculate(sum3,9,10);
    return sum1 + sum2 + sum3 + sum4
}

add().then((value) => {
    console.log(value)
})
.catch(error =>{
    console.log(error)
})