document.getElementById('btn-starters').addEventListener('click', function() {
    displayMenuItems('Starters');
});

document.getElementById('btn-mains').addEventListener('click', function() {
    displayMenuItems('Mains');
});

document.getElementById('btn-desserts').addEventListener('click', function() {
    displayMenuItems('Desserts');
});

function displayMenuItems(category) {
    const menuSection = document.getElementById('menu-section');
    menuSection.innerHTML = `<h2>${category}</h2><p>Items for ${category} will be listed here...</p>`;
    console.log(`${category}: Items for ${category} will be listed here...`);
}


// const appContainer = document.getElementById("app");

// // console.log(appContainer);

// const person = {
//   name: "John",
//   age: 25,
//   istudent: false,
// }

// appContainer.innerHTML = `Hello World! ${person.name}`;

// const square = document.createElement("div");

// // console.log(square);

// square.style.width = "30px";
// square.style.height = "30px";
// // square.style.backgroundColor = "green";
// square.style.position = "absolute";
// square.classList.add("red");


// let leftPosition = 0;
// let topPosition = 0;
// // setInterval(()=> {
// //   leftPosition += 1;
// //   topPosition +=0.2
// //   // console.log("Hello!");
// //   square.style.left = leftPosition + "px";
// //   square.style.top = topPosition + "px";
// // }, 10);
// appContainer.appendChild(square);


// let dragging = false;
// square.addEventListener("mousedown", (event) => {
//   dragging = true;
// });
// appContainer.addEventListener("mouseup", (event) => {
//   dragging = false;
// });
// appContainer.addEventListener("mousemove", (event) => {
//   // console.log(event.target);
//   // console.log(event.currentTarget);
//   if (!dragging) return;
//   let conatinerX = appContainer.getBoundingClientRect().left;
//   let conatinerY = appContainer.getBoundingClientRect().top;
//   let squareX = event.pageX - conatinerX - (square.offsetWidth);
//   let squareY = event.pageY - conatinerY - (square.offsetHeight);
//   square.style.left = squareX + "px";
//   square.style.top = squareY + "px";
// });

// // let color = "red";
// // square.addEventListener("click", (event) => {
// //   // if (color === "red") {
// //   //   color = "green";
// //   // } else {
// //   //   color = "red";
// //   // }
// //   // square.style.backgroundColor = color;
// //   square.classList.toggle("red");
// //   square.classList.toggle("blue");
// //   console.log(event);
// //   event.stopPropagation();
// //   event.preventDefault();
// // });

// // appContainer.addEventListener("click", (event) => {
// //   // event.isTrusted = false;
// //   console.log(event);
// // });




// // let l = [1, 2, 3, 4, 5];
// // console.log(l);

// // l = l.filter((v, i) => {
// //   return v % 2 === 0;
// // })

// // console.log(l);
// // console.log("hello world!");

// // const obj = {
// //   name: "John",
// //   age: 30,
// //   city: "New York",
// // };

// // console.log(obj);

// // console.log(obj["name"]);
// // console.log(obj.name);

// // const objStr = JSON.stringify(obj);
// // console.log(objStr);

// // const objCopy = JSON.parse(objStr);
// // console.log(objCopy);

// // objCopy.country = "USA";
// // objCopy["job"] = "Developer";

// // console.log(objCopy);

// // console.log(objCopy.hasOwnProperty("age"));

// // // function printX(dataEntry, callback) {
// // //   const x = callback(dataEntry);
// // //   console.log("X:", x);
// // // }

// // // printX(15, (d) => d * 2);


// // // function printThenDo(num, callback) {
// // //   console.log("print:", number);
// // //   callback(number);
// // // }



// // // console.log("hellow world!");
// // // var a = 1;
// // // var b = 2;

// // // var d = 1;
// // // console.log(d);



// // // for (let i = 0; i < 5; i++) {
// // //   var v1 = 1;
// // //   let v2 = 2;
// // // }

// // // console.log("v1 =", v1);
// // // // console.log("v2 =", v2);


// // // while(d < 10) {
// // //   d += 1;
// // //   console.log(d);
// // // }
// // // // console.log(v1);












// // // import './style.css'
// // // import javascriptLogo from './javascript.svg'
// // // import viteLogo from '/vite.svg'
// // // import { setupCounter } from './counter.js'

// // // document.querySelector('#app').innerHTML = `
// // //   <div>
// // //     <a href="https://vitejs.dev" target="_blank">
// // //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// // //     </a>
// // //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// // //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// // //     </a>
// // //     <h1>Hello Vite!</h1>
// // //     <div class="card">
// // //       <button id="counter" type="button"></button>
// // //     </div>
// // //     <p class="read-the-docs">
// // //       Click on the Vite logo to learn more
// // //     </p>
// // //   </div>
// // // `

// // // setupCounter(document.querySelector('#counter'))
