let btn1 = document.querySelector("#btn1");
let btn3 = document.querySelector("#btn3");
let btn7 = document.querySelector("#btn7");
let btn0 = document.querySelector("#btn0");

let progressive = document.querySelector(".progress-bar").getAttribute("style");

if (progressive.slice(8) === "%") {
  progressive = progressive.slice(7, 8);
} else {
  progressive = progressive.slice(7, 9);
}

btn1.addEventListener("click", function() {
  progressive = Number(progressive) + 1;
  document
    .querySelector(".progress-bar")
    .setAttribute("style", `width: ${progressive}%`);
});

btn3.addEventListener("click", function() {
  progressive = Number(progressive) + 3;
  document
    .querySelector(".progress-bar")
    .setAttribute("style", `width: ${progressive}%`);
});

btn7.addEventListener("click", function() {
  progressive = Number(progressive) + 7;
  document
    .querySelector(".progress-bar")
    .setAttribute("style", `width: ${progressive}%`);
});

btn0.addEventListener("click", function() {
  progressive = 0;
  document
    .querySelector(".progress-bar")
    .setAttribute("style", `width: ${progressive}%`);
});

console.log(progressive);
