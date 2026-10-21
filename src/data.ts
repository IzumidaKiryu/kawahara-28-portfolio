////////// 作品データの定義 ///////////////////////
export interface Work { // 「ゲーム作品なら、必ずこの項目があるべき」という形のルールを決める
  title: string; // タイトルは文字列
  genre: string; // ジャンルは文字列
  producersNumber: number; // 制作人数は数値
  pageUrl?: string; // 作品ページのURL(ない作品もある)
}

export const work1: Work = {
 title: "ペンタクト",
 genre: "アクションゲーム",
 producersNumber: 4,
  pageUrl: "https://miyosisouta.github.io/ProjectGB-Portfolio.github.io/",
};
export const work2: Work = {
  title: "宇宙ラリー",
  genre: "レースゲーム",
  producersNumber: 1,
};
export const work3: Work = {
  title: "ふらふらスピング",
  genre: "野球ゲーム",
  producersNumber: 3,
};
export const work4: Work = {
  title: "Moofo",
  genre: "アクションゲーム",
  producersNumber: 3,
};
export const work5: Work = {
  title: "わちゃわちゃパーティ",
  genre: "パーティーゲーム",
  producersNumber: 3,
};

export const works1: Work[] = [work1, work2];
export const works2: Work[] = [work3, work4];
export const works3: Work[] = [work1, work3, work5];

// 全ての作品を集めた
export const allWorks: Work[]  =[work1, work2, work3, work4, work5]; 


///////////// メンバーデータの集合体 ////////////////////////
export interface Member {
  name: string;
  introduction: string;
  works: Work[];
  hidden?: boolean;
}

export const member1: Member = {
  name: "河原太郎",
  introduction: "テストです。",
  works: works1
}

export const member2: Member =
{
  name: "河原次郎",
  introduction: "次郎です",
  works: works2
}

export const member3: Member =
{
  name: "河原三郎",
  introduction: "三郎です",
  works: works3
}


// members フォルダの JSON を全部読み込む（_ で始まるお手本は除く）
const memberFiles = import.meta.glob<Member>(   // Viteの機能 : フォルダの中のファイルをまとめて読み込む
  ["/members/*.json", "!/members/_*.json"],     // membersフォルダの.jsonで終わるファイル全部。_で始まる.jsonは除く。
  { eager: true, import: "default" }            // eager: 今すぐ読み込むか , import: "default" → ファイルの中身を頂戴
);

// 全メンバー : hiddenがfalseのものは写さないのでフィルターではじく
export const members: Member[] = Object.values(memberFiles).filter((member) => member.hidden !== true);