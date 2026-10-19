import { members, member1, allWorks, gameWorks1 } from "./data";

// ハンズオン1 : 変数と型
const name: string = "河原 太郎";
const introduction: string = "これは、ハンズオン用のプロフィールです。";
let productCounts: number = 5;
// const prodectConuts: number = 5;    ← これだと値を変えることができない
let jobHunting : boolean = true;

productCounts++;

console.log(`${name}:${introduction}作品数${productCounts}/就活中${jobHunting}`);


// ハンズオン2 : 配列
const names: string[] = ["あいうえお","かきくけこ","さしすせそ"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

const gameTitles: string[] = ["たちつてと","なにぬねの","はひふへほ"];
gameTitles.push("まみむめも");
console.log(`${name}さんの作品数 : ${gameTitles.length}本`);
console.log(`${name}さんが最後に出したゲームタイトル : ${gameTitles[gameTitles.length - 1]}`);


// ハンズオン3 : interface(データの形の設計図)

//const work = { // オブジェクト
  //title: "スライムの冒険",  // プロパティ
  //genre: "アクション",      // プロパティ
//};
//console.log(work.title);
//console.log(work.genre);


console.log(gameWorks1[0].title);
console.log(gameWorks1[1].title);

console.log(`「${member1.name}さんの作品数: ${member1.gameworks.length}/1本目 : ${member1.gameworks[0].title}」`);


// ハンズオン4 : 配列の操作(前半)

// メンバー全員の名前を表示

members.forEach(name => {
  console.log(`${name.name}`)
});

// メンバーが作成した作品の一覧
member1.gameworks.forEach(gameWork =>{
  console.log(`${gameWork.title}: ${gameWork.genre}`)
});

// クリックした人を探す
let selectedName: string = "河原次郎";
const found = members.find((member) => member.name === selectedName)
console.log(found?.name);


// ハンズオン4(後半)

// 名前だけの配列
const memberToNames = members.map((member) => member.name);
console.log(memberToNames);

// 作品の一覧表示
const workList = member1.gameworks.map((work) => `${work.title}(${work.genre})`);
console.log(workList);

// アクションゲームだけ集める
const allActionGames = allWorks.filter((work) => work.genre === "アクションゲーム");
const allActionGamesName = allActionGames.map((actionGame) => actionGame.title);
console.log(allActionGamesName);

// チーム制作だけ集める
const allTeamProductionGame = allWorks.filter((work) => work.producersNumber >= 2);
console.log(allTeamProductionGame);