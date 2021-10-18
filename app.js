// CHALLENGE 1
function addOne(arr) {
    let arr1 = [];
    arr.forEach((num )=> {
        arr1.push(num+1);
        

    });
        return arr1;
}


// CHALLENGE 2

function addExclamation (arr) {
    let str = [];
    arr.forEach((element) => {
        str.push(element+ '!')
       
    });

    return str;
}


// CHALLENGE 3

function addOneByMap(arr) {
    let newArr = []
    arr.map((num)=>{
        newArr.push(num+1)
    })
    return newArr;
}


// CHALLENGE 4

function addQuestion(arr) {
    let nArr = arr.map((str)=>{
        return str +  "?";
    })
    
    return nArr;
}


// CHALLENGE 5

// function forLoopTwoToThe(arr) {
//     let numPower = []
//      for (const arry of arr) {
       
//        numPower.push(arry ^ arr)
       
//     }

//     return numPower;
// }


// CHALLENGE 6

function typeNum(arr) {
   let num = arr.filter((numbers) =>{
       numbers == "number"
   })

   return num;
}
