var regex = /hello/;
console.log(regex.test("hello"));

var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(regex));
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]