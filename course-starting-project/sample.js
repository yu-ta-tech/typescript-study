function number() {
  let num = 1;

  while (true) {
    if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {
      return num;
    }
  }
}

let num;

function findNumber(num) {
  return num ? num % 6 : num % 5;
}

if (num % 2 === 0) {
  return true;
}
if (num % 3 === 0) {
  return true;
} else {
  return false;
}
