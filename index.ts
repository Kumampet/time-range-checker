/**
 * 引数のバリデーションチェック。
 * 数値以外と負の数は除外
 * @param targetTime 対象時刻
 * @param startTime 開始時刻
 * @param endTime 終了時刻
 * @returns 
 */
const varidationCheck = (targetTime: number, startTime: number, endTime: number): void => {
  if (
    Number.isFinite(targetTime) &&
    Number.isFinite(startTime) &&
    Number.isFinite(endTime) &&
    0 <= targetTime && targetTime < 24 &&
    0 <= startTime && startTime < 24 &&
    0 <= endTime && endTime < 24
  ) {
    return void 0;
  } else {
    console.error(`不正な値が存在します。対象時刻(${targetTime})｜開始時刻(${startTime})｜終了時刻(${endTime})`);
    throw new Error('値が不正です。');
  }
}

/**
 * Author: Tsuyoshi Kumamoto
 * 
 * ある時刻(0時～23時)が、指定した時間の範囲内に含まれるかどうかを調べる
 * プログラムを作ってください。
 * 言語は問いませんが、ライブラリなどを使ってはいけません。
 * 
 * 以下のような条件を満たすこと。
 * - ある時刻と、時間の範囲(開始時刻と終了時刻)を受け取る。
 * - 時刻は、6時であれば6のような指定でよく、分単位は問わない。
 * - 範囲指定は、開始時刻を含み、終了時刻は含まないと判断すること。
 * - ただし開始時刻と終了時刻が同じ場合は含むと判断すること。
 * - 開始時刻が22時で終了時刻が5時、というような指定をされても動作すること。
 */
const main = () => {
  const targetTime = Number(process.argv[2]);
  const startTime = Number(process.argv[3]);
  const endTime = Number(process.argv[4]);

  try {
    // 引数のバリデーション
    varidationCheck(targetTime, startTime, endTime);

    if (startTime <= endTime) {
      // 開始<終了の場合、単純にこの範囲に収まっている時
      if (startTime <= targetTime && targetTime < endTime) {
        console.log(`この時刻(${targetTime})は開始時刻(${startTime})〜終了時刻(${endTime})の範囲内です。`);
        return null;
      }
    } else {
      // 開始>終了の場合、ターゲットが開始<=target<=23, 0<=target<終了を満たすとき
      if (
        (startTime <= targetTime && targetTime < 24) ||
        (0 <= targetTime && targetTime < endTime)
      ) {
        console.log(`この時刻(${targetTime})は開始時刻(${startTime})〜終了時刻(${endTime})の範囲内です。`);
        return null;
      }
    }
  } catch (e) {
    throw e;
  }

  // 範囲外
  console.log(`この時刻(${targetTime})は開始時刻(${startTime})〜終了時刻(${endTime})の範囲内ではありません。`);
}

main();
