# JavaScript 正则表达式

## 正则字符匹配攻略

### 横向模糊匹配

一个正则可匹配的字符串长度不是固定的，而是可以匹配多个连续的字符。

- `{m, n}`, 表示连续出现最少 m 次，最多 n 次;

```javascript
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) );
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]
```

### 纵向模糊匹配

一个正则匹配的字符串，具体到某一位字符时，可以不是某个确定的字符，可以有多种可能  
其实现的方式是使用字符组。譬如 `[abc]`，表示该字符是可以字符 `"a"、"b"、"c"` 中的任何一个  
比如 /a[123]b/ 可以匹配如下三种字符串： `"a1b"、"a2b"、"a3b"`
