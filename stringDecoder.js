// let decoder = (code) => {
//     code = code.split('')
//     let placeHolder = []



//     for (let i = 0; i < code.length; i++){
//         if (parseInt(code[i]) === parseInt((code[i])) ) {
//             code[i] = code[i] + parseInt(code[i])
//         } else {
//             placeHolder.push(code[i])
//         }
//     }
//     placeHolder = placeHolder.join('')
//     return placeHolder
// }

// console.log(decoder('h2xce5ngbrdy'))

// let parse = '25'
// console.log(parseInt(parse))


const decoder = (code) => {
    let decoded = [];
    for (let i = 0; i < code.length; i += Number(code[i]) + 2) {
      decoded.push(code[Number(code[i]) + i + 1]);
    }
    return decoded.join("");
  };
  console.log(decoder("0h2xce5ngbrdy"))