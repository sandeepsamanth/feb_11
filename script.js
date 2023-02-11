/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((person,index)=>{
    if(person.marks>50){
             console.log(person.name)
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach((person,index)=>{
    if(person.marks>50){
             console.log(person.name)
    }
  })
}

function addData() {
  //Write your code here, just console.log
    const a={id:4,name:"susan",age:"20",marks:45};
  arr.push(a);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
   const b=[];
  arr.map((person,index)=>{
    if(person.marks>50){
             b.push(person);
    }
  })
  console.log(b);
}

function concatenateArray() {
  //Write your code here, just console.log
   const c=[ {id:4,name:"susan",age:"20",marks:45},
            {id:5,name:"nalina",age:"20",marks:49},
            {id:6,name:"gita",age:"20",marks:5}]
    const d=[...arr,...c];
    console.log(d);
}
