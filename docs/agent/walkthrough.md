# 奄美大島の収益ストリーム分離完了

奄美大島のデータを「その他」から個別のストリームに分離する作業を完了しました。

## 変更内容

### 1. ストリーム定義の追加
[streams.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/data/streams.ts) に `jp_amami` (日本語) と `en_amami` (英語) を追加しました。
- 日本語カラー: `#f472b6` (Pink-Light)
- 英語カラー: `#818cf8` (Indigo-Light)

### 2. レジストリの更新
[_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json) を更新し、以下の修正を行いました。
- `streams` リストに奄美大島を追加。
- 以下の評価データの `stream` を `jp_other` から `jp_amami` に変更。
    - `destinations_amami-island` (総合ガイド)
    - `hotels_amami-island` (ホテルガイド)

### 3. 個別評価データの更新
評価データの整合性を保つため、以下のファイルの内部 `stream` キーを `jp_amami` に更新しました。
- [amami_guide_jp.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/amami_guide_jp.json)
- [hotels_amami-island.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/hotels_amami-island.json)

## 動作確認

- [x] ストリーム定義が `streams.ts` に正しく追加されている
- [x] `_registry.json` の評価データとストリームの紐付けが正しい
- [x] 個別 JSON ファイルの `stream` 定義がレジストリと一致している

> [!NOTE]
> これにより、ダッシュボード上の収益グラフおよび内訳において、奄美大島が独立した項目として集計・表示されるようになります。
