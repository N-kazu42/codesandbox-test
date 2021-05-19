// // *const.let等の変数宣言
// var val1 = "var変数";
// console.log(val1);
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "varを再宣言";
// console.log(val1);
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// // let val2 = "let変数を再宣言";
// const val3 = "const変数";
// console.log(val3);
// val3 = "const";
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "naga",
//   age: 28
// };
// val4.name = "ながい";
// console.log(val4);
// constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push ("monkey");

// console.log(val5);

// テンプレート文字列
// const name = "長井";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 分割定義

// const myProfile = {
//   name: "なが",
//   age: 42
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳ですyo。`;

// console.log(message2);
// const myProfile = ["なが", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳ですyo。`;

// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です1yo。`;
// console.log(message4);

// デフォルト値

// const sayHello = (name) => console.log(`こんにちは!${name}さん!`)；
// sayHello("ながい");
// const sayHello = (name) => console.log(`こんにちは!${name}さん!`);
// sayHello("ながい")

// スプレッド構文
// 配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0]=100;
// console.log(arr6);
// console.log(arr4);

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const arr8 = arr4;
// console.log(arr8);

// const nameArr = ["田中", "ヤマダ", "ながい"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name,index) => console.log(`${index + 1 }番目は${name}です。`));
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// const newNameArr = nameArr.map((name) => {
//   if (name === "ながい") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子

// ある条件？条件がtrueのとき：条件がflseのとき

// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています!!` : `想定の範囲内です`;
// };
// console.log(checkSum(50, 60));

// 論理演算子のほんとうの意味を知ろう
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1か2もtrueになります");
// }

// const num = 100;
// const fee = num || "金額は未設定です";

// console.log(fee);

const num2 = 150;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
