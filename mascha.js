const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください: ', (str) => {
  console.log(`入力された文字列: ${str}`);
  main(str);
  rl.close();
});

async function sendRequest(c) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return fetch("https://mstdn.jp/api/v1/statuses?access_token=", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "status="+encodeURIComponent(c)+"&visibility=unlisted"
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
}

async function main(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      await sendRequest(str[i]);
    }
}