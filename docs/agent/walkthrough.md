# 修正内容の確認 (Walkthrough) - 2026年3月実績データの合算

2026年3月のGoogle (GA4) 実績とBingの実績を合算し、システム全体の実績データを更新しました。

## 変更内容

### データの合算とファイル整理
- `src/data/actual_dl/202603.csv` を `202603_google.csv` にリネームしました。
- GoogleとBingのデータをページパス単位で合算した新しい `202603.csv` を生成しました。
  - **合算ルール**: `表示回数 (PV) = Google Views + Bing Clicks` として集計。
  - BingのURLをパス名に変換し、GA4のデータと突合して加算を行いました。

### 実績TSファイルの更新
- [actual-pv.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/data/actual-pv.ts) の3月分の数値を合算後の値に更新しました。

#### 数値の変化（合計PV）
| カテゴリ (Stream) | 旧数値 (Googleのみ) | 新数値 (Google + Bing) | 増分 (Bing Clicks) |
| :--- | :---: | :---: | :---: |
| 与論島 (jp_yoron) | 296 | 303 | +7 |
| 宮古島 (jp_miyako) | 313 | 314 | +1 |
| 阿嘉島 (jp_aka) | 51 | 55 | +4 |
| その他 (jp_other) | 449 | 450 | +1 |

## 検証結果

- 合算スクリプトを実行し、BingのCSV（合計13クリック）が正しく各エリアのPVに加算されていることをログレベルで確認しました。
- 生成された `202603.csv` の整合性が保たれていることを確認しました。

## ユーザーへのお願い
- ダッシュボードを表示し、3月の実績PVがわずかに増加していることをご確認ください。
- 今回作成した合算スクリプトは [merge_actuals.mjs](file:///home/mune1/.gemini/antigravity/brain/55e64f4a-7fd9-49ca-847e-4b91395dae25/scratch/merge_actuals.mjs) に保存されています。今後の実績更新時の参考にしてください。
