// let orange = 100;
// let apple = 120;

// if (orange < apple) {
//   alert("みかんの値段がりんごより安い");
// } else if (orange == apple) {
//   alert("みかんとりんごが同じ値段");
// } else {
//   alert("みかんの値段がりんごより高い");
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while (num < max) {
//   num *= 2;
//   count += 1;
// }

// alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

// let i;
// let num = 0;
// // for ( 初期値; 条件式; 増減値 ){
// //   繰り返し処理}
// for (i = 1; i < 11; i++) {
//   num += i;
// }

// alert("1から10まで足し算した結果は" + num + "です")

// var nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var y = "hello"
// }

// foo()
// console.log(y)

// function foo() {
//   let x = "webcamp"
//   {
//     console.log(x)
//     console.log(y)
//   }
// }

// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)

// var str1 = "web"

// function foo() {
//   var str = "webcamp"
//   console.log(str1)
//   var str = "dmm webcamp"
//   console.log(str)

// }

// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA) {
//   let addStr = "Hello" + strA;
//   return addStr;
// }




// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
空の時はじかれるのか分からない。
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)) {
  alert("グー・チョキ・パーのいずれかを入力してください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJSのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// キャンセルの場合メッセージ（nullの場合）
if (user_hand != null) {
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand() {
  // 0～2までのランダムな整数値を生成
  let js_hand_num = Math.floor(Math.random() * 3);
  let js_hand;

  if (js_hand_num == 0) {
    js_hand = "グー";
  } else if (js_hand_num == 1) {
    js_hand = "チョキ";
  } else if (js_hand_num == 2) {
    js_hand = "パー";
  }
  // ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分けます。
  return js_hand;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  let winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    } else if (js == "パー") {
      winLoseStr = "勝ち";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}