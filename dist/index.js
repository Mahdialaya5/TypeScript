"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
console.log(printInfo(true, [1, 2, 3]));
let arr;
arr = [54, 65, [true, false], ['hi', ['hello', 87]]];
function showMyDetails(a = "", b = "") {
    return `${a}${b}`;
}
console.log(showMyDetails("54", "54"));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("mahdi"));
console.log(showMsg("mahdi", 40));
console.log(showMsg("mahdi", "40", "tunis"));
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "mahdi", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "mahdi", theAge: 4, country: "tunisia" }));
function yesOrNo(val) {
    if (val > 10) {
        "yes";
    }
    return 'No';
}
// Do Not Edit Here
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (age > 40) {
        "yes";
    }
    return 'No';
}
// Do Not Edit Here
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
const user = {
    username: "mahdi",
    age: 40,
    website: "mahdi.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
// We Need To Remove Error From This Edits
user.username = "hi";
user.age = "40";
user.skills.backEnd.push(100);
// Create Enums + Function Here
function getinsane(Hard) {
    return Hard - 10;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getinsane(Game.Hard)] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
