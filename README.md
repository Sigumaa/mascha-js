トゥートで遊べる。  
ltlを荒らしてしまう原因になるので、ltlには流れないようになっています。

.env.sample

```
SERVER="https://mstdn.jp/api/v1/statuses?access_token="
TOKEN="お前のTOKEN"
```

is_splitのbool値によって動作が変わります。  
trueの場合は、分割トゥートになります。  
例

![example](exsplit.jpg)

falseの場合は、通常トゥートになります。

![example](ex.jpg)

### usage

```bash

$ node mascha.js

文字列を入力してください: ねむい
入力された文字列: ねむい

~~~
logが表示される
~~~

```