function main() {
  const n = 4;

  const arr = `1 4 3 2`.split(" ");

  let result = "";

  for (let i = n - 1; i >= 0; i--) {
    result = result + arr[i] + " ";
  }
  console.log(result);
}

main();
