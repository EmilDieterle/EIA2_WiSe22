let a = [7, true, "Hallo"];
console.log(a[3]);
let s = { "zahl": 7, "wahr": true, text: "Hallo" };
s[4] = [101, 102];
console.log(s[4]);
console.log(s["key"]);
function isDivisible(dividend, divisor) { return (dividend % divisor == 0); }
console.log(isDivisible(4, 2), function isDivisible(_dividend, _divisor) {
    let result = (_dividend % _divisor == 0);
    return result;
});
let v1 = 2;
let v2, [] = v1;
console.log(v1);
console.log(v2);
//# sourceMappingURL=script.js.map