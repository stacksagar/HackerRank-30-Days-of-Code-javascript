processData(`
2
Hacker
Rank
`);

function processData(input = "") {
  let stringLength = input.split("\n").slice(1);

  stringLength.forEach((str) => {
    let even = [];
    let odd = [];
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        even.push(str[i]);
      } else {
        odd.push(str[i]);
      }
    }


    console.log(`${even.join("")} ${odd.join("")}`);
  });
}
