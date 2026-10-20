// main.ts = TypeScript
// ウェブサイトの「動き」を作るためのもの

// 練習用スクリプトをインポート
// コメントアウトするか否かでコンソールでのログの確認等を行うことができる
// import "./practice";

import "./style.css"
import { members, type Member } from "./data";

// 入れ物を取得
const app = document.querySelector<HTMLDivElement>("#app")!;

// ボタンと文字を作成
const buttonHtml = members.map((member) => 
    `<button class="member-card"> 
      <span class="name">${member.name}</span>
      <span class="intro">${member.introduction}</span> 
    </button>`
)
.join("");

app.innerHTML = `
    <div class="member-list">${buttonHtml}</div>
    <div id="detail"></div>
`;


// 入れ物を取得
const detail = document.querySelector<HTMLDivElement>("#detail")!;

// クリック処理
const buttons = app.querySelectorAll<HTMLButtonElement>(".member-card") // .membercardで作られたものをすべて取得
buttons.forEach((button, index) => {                    // メンバーカード一つ一つを回す。indexにより配列がわかる
    button.addEventListener("click", () => {            // 該当するボタンをクリックした場合、
        const member = members[index];                  // 押された人についての情報を格納
        console.log(`${member.name}が押された！`);       // ログを流す
        showDetail(member);                             // クリックした人の情報を出す
    });             
    
    
});

showDetail(members[0]); // 太郎さんを出す


// カードを表示
function showDetail(member: Member){
    // 選んだ一人の紹介(名前と紹介文)
    const detailHtml = `<h2>${member.name}</h2><p>${member.introduction}</p>`

    // ゲーム作品のカード一覧
    const gameWorkHtml = member.gameworks.map((gameWork) =>             // 複数の作品を一つずつ
        gameWork.playUrl
        // URLがあるなら
        ? `<a class="work-card" href="${gameWork.playUrl}" target="_blank" rel="noopener noreferrer">
           <h3>${gameWork.title}</h3>                                  
           <p>${gameWork.genre} / ${gameWork.producersNumber}人</p>
           <span class="work-link">作品ページを見る →</span>
           </a>`
        // URLがないなら
        : `<div class="work-card">
           <h3>${gameWork.title}</h3>                                  
           <p>${gameWork.genre} / ${gameWork.producersNumber}人</p>    
           </div>`
    )
    .join(""); // 1つの文字列に変換

    // 設定した名前・紹介文・ゲーム作品カード一覧を表示・切り替え
    detail.innerHTML = `
        ${detailHtml}
        <div class="work-list">${gameWorkHtml}</div>
    `;
}