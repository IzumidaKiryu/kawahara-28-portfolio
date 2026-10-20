////////// 作品データの定義 ///////////////////////
export interface Work { // 「ゲーム作品なら、必ずこの項目があるべき」という形のルールを決める
  title: string; // タイトルは文字列
  genre: string; // ジャンルは文字列
  producersNumber: number; // 制作人数は数値
  playUrl?: string; // プレイできるURL(ない作品もある)
}

export const work1: Work = {
 title: "ペンタクト",
 genre: "アクションゲーム",
 producersNumber: 4,
  playUrl: "https://miyosisouta.github.io/ProjectGB-Portfolio.github.io/",
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

export const gameWorks1: Work[] = [work1, work2];
export const gameWorks2: Work[] = [work3, work4];
export const gameWorks3: Work[] = [work1, work3, work5];

// 全ての作品を集めた
export const allWorks: Work[]  =[work1, work2, work3, work4, work5]; 


///////////// メンバーデータの集合体 ////////////////////////
export interface Member {
  name: string;
  introduction: string;
  gameworks: Work[];
}

export const member1: Member = {
  name: "河原太郎",
  introduction: "テストです。",
  gameworks: gameWorks1
}

export const member2: Member =
{
  name: "河原次郎",
  introduction: "次郎です",
  gameworks: gameWorks2
}

export const member3: Member =
{
  name: "河原三郎",
  introduction: "三郎です",
  gameworks: gameWorks3
}

// 全メンバー
export const members: Member[] = [member1,member2,member3];