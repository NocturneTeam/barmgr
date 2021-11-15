# BarMGR - Progressbar manager.

![License](https://img.shields.io/npm/l/barmgr?style=for-the-badge)
![Project Version](https://img.shields.io/npm/v/barmgr?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/NocturneTeam/barmgr?style=for-the-badge)

## 🚀 Get started 

First, install `barmgr` with this command : 

```sh
npm i barmgr
```

After, you may import it on your code like this :

```js
const { Bar } = require("barmgr");
```

And create a new instance of a progressbar :

```js
var myBar = new Bar(max, label);
```

> The `max` property refeers to the max amount of loading characters on the bar. 

> The `label` property refeers to the title of the bar on its left.

## ❓ Play with values

First, you have to display the bar when you need it :

```js
myBar.show();
```

> You can type `myBar.show().then(() => {})` to execute a function once the progressbar is filled.

Next, you can increment your bar value : 

```js
myBar.increment(count);
```

> The `count` property refeers to the amount of characters to add on the bar.

> You can also use `myBar.loading = count` to set a specific amount of loading characters.

## 📜 License

MIT License

Copyright (c) 2021 NocturneTeam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
