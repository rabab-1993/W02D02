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
      return typeof numbers == "number"
   })

   return num;
}


// CHALLENGE 7


function containsAnd(arr) {
    let contAnd = arr.filter((and)=>{
          return  and.includes('and')
    })
    return contAnd
}


// CHALLENGE 8
function oddValues(arr) {
    let oddNum = arr.filter((odd)=>{
        return  odd.includes(odd != 2 )
  })
  return oddNum;
}



// objects CHALLENGE 

// CHALLENGE 1

let checkValues = (obj, value) => {
      let ob =  Object.values(obj).includes(value) 
     return ob; 
}


// CHALLENGE 2
let courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };

  let getCourseKeys = (obj) => {
    return Object.keys(courseInfo)
  };

  // CHALLENGE 3


  const updateNumbers = (obj) => {
      return JSON.stringify(obj)
  };
  
  
  

  // CHALLENGE 4
  // CHALLENGE 5
  // CHALLENGE 6