# ある時刻(0時～23時)が、指定した時間の範囲内に含まれるかどうかを調べるプログラム
## 仕様
  - ある時刻と、時間の範囲(開始時刻と終了時刻)を受け取る。
  - 時刻は、6時であれば6のような指定でよく、分単位は問わない。
  - 範囲指定は、開始時刻を含み、終了時刻は含まないと判断すること。
  - ただし開始時刻と終了時刻が同じ場合は含むと判断すること。
  - 開始時刻が22時で終了時刻が5時、というような指定をされても動作すること。

## 利用方法

1. リポジトリをクローンする。
2. `npm install`実行
3. リポジトリルートで以下を実行。
    ```sh
    $ npm start {ある時刻} {開始時刻} {終了時刻}
    ```

## テスト実行

1. 以下のコマンドを実行
    ```sh
    $ npm run test
    ```
