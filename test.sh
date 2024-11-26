echo "テストを開始します。\n"

npm start 10 5 12
echo "期待値は「範囲内」です。\n"
npm start 1 5 12
echo "期待値は「範囲外」です。\n"
npm start 15 1 20
echo "期待値は「範囲内」です。\n"
npm start 10 8 9
echo "期待値は「範囲外」です。\n"
npm start 10 15 12
echo "期待値は「範囲内」です。\n"
npm start 10 20 19
echo "期待値は「範囲内」です。\n"
npm start 23 0 23
echo "期待値は「範囲外」です。\n"
npm start 10 24 12
echo "期待値は「エラー」です。\n"
npm start 9 5 10
echo "期待値は「範囲内」です。\n"
npm start 100 5 12
echo "期待値は「エラー」です。\n"
npm start 10 -20 12
echo "期待値は「エラー」です。\n"
npm start 1 5 -12
echo "期待値は「エラー」です。\n"
npm start 1 1 5
echo "期待値は「範囲内」です。\n"
npm start 1 21 0
echo "期待値は「範囲外」です。\n"

echo "--------テスト終了----------\n"
