function calculate(numOne:number, numTwo:number) {
    return numOne + numTwo;
  }

  console.log(calculate(10, 20)); 
   console.log(calculate(+true, +true)); 


function printInfo(valueOne:string|number|boolean, valueTwo:string|number|boolean|number[]):string {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
  }
  
  console.log(printInfo(10, 20)); 
  console.log(printInfo("10", "20")); 
  console.log(printInfo(true, [1, 2, 3])); 

  let arr: (number | boolean[] | (string | (string | number)[])[])[];
      arr=[54,65,[true,false],['hi',['hello',87]]];
 
 

function showMyDetails(a = "", b = "") {
  return `${a}${b}`;
}
console.log(showMyDetails("54","54")); 

function showMsg(user?: number|String, age?:number|String, country?: String) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("mahdi"));
console.log(showMsg("mahdi", 40));
console.log(showMsg("mahdi", "40", "tunis"));


// Write Your Code Here
type n= number;
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// Write Your Code Here
type mix=number|boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here


// Write Your Code Here
type Info={
  theName:String;
theAge:number
}
type Full={
  theName:String;
theAge:number
country:String
}
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "mahdi", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "mahdi", theAge: 4, country: "tunisia" }));



function yesOrNo(val: number ) : "Yes" | "No" {
  if(val>10){"yes"}
  return 'No'
}

// Do Not Edit Here

console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False


type custom=String
function isHeOld(age: number ) : custom  {

  if(age>40){"yes"}
  return 'No'
}

// Do Not Edit Here
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"




const user: {
   username: string,
  age: number|string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd:( string|number)[],
  }
} = {
  username: "mahdi",
  age: 40,
  website: "mahdi.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}
// We Need To Remove Error From This Edits
user.username = "hi";
user.age = "40";
user.skills.backEnd.push(100);


// Create Enums + Function Here
function getinsane(Hard:number):number{
  return Hard-10
}
enum Game{
  Easy=100,
  Medium=Easy-20,
  Hard=(Medium-20)/2,
  Insane=getinsane(Hard),
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20