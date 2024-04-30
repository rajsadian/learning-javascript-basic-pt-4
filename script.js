alert(
  "First You Have To type your name, please!"
);
document.title = "Learning Javascript";
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn2");
const textDefault = "Click Me!";
const body = document.body;
const name = prompt("What is your name?");
const textDefaultTwo =
  "I know Your Real Name, Click Me!";

btn2.textContent = textDefaultTwo;
btn.textContent = textDefault;
btn.style.border = "none";
btn.style.background = "#335c67";
btn.style.padding = "20px";
btn.style.color = "white";
btn.style.fontSize = "20px";
btn2.style.border = "none";
btn2.style.background = "#335c67";
btn2.style.padding = "20px";
btn2.style.color = "white";
btn2.style.fontSize = "20px";

function myFunction() {
  btn.style.background = "#e09f3e";
}

function myFunctionOne() {
  btn.textContent =
    "the background color will change if you clicked";
}

function myFunctionTwo() {
  btn.textContent = textDefault;
  btn.style.background = "#335c67";
}

function yourName() {
  btn2.style.background = "#e09f3e";
  const realName = document.createElement("p");
  realName.style.fontSize = "50px";
  realName.textContent = name;
  body.append(realName);
}

function yourNameOne() {
  btn2.textContent =
    "trust me, its not magic its just logic!";
}

function yourNameTwo() {
  btn2.textContent = textDefaultTwo;
  btn2.style.background = "#335c67";
}
