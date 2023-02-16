processData(`
2
Hacker
Rank
`);

function processData(input = "") {
  const all_string = input.split("\n").filter((s) => s);

  all_string.forEach((string) => {
    let even = "";
    let odd = "";
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        even += string[i];
      } else {
        odd += string[i];
      }
    }

    console.log(`${even} ${odd}`);
  });
}
