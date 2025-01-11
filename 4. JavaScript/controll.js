// Conditional controll

let x = 9;
let y = 3;

if (x === y) {
  console.log("x is equal to y");
} else if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not equal to y");
}

switch (x) {
  case 3:
    console.log("x = 3");
    break;
  case 9:
    console.log("x =9");
    break;
  default:
    console.log("x is not 3 or 9");
    break;
}

// looping statements

// i. while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// ii. do while loop

do {
  console.log(i);
  i++;
} while (i < 0);

// iii. for loop

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
