//関数はオブジェクトの一種
function add(a, b) {
    return a + b;
}
console.log(add); // 関数の参照ができる
console.dir(add); // 関数の参照ができる

const newAdd = add; // 関数の参照を代入できる
console.log(newAdd(3, 4)); // 関数の参照ができる
