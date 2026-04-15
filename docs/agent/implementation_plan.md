# 収益ストリームへの奄美大島追加

奄美大島の収益を「その他」から分離し、個別のストリームとして管理するための修正を行います。

## ユーザーレビューが必要な事項

- **カラー選定**: `jp_amami` に `PINK` (#ec4899) を割り当て、`en_amami` に `SLATE` (#64748b) を割り当てる予定です。既存の色との調和を考慮しています。

## 提案される変更

### [データ定義]

#### [MODIFY] [streams.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/data/streams.ts)
- `jp_amami` (奄美大島 日本語) と `en_amami` (奄美大島 英語) を追加します。
- 数値設定（CVR/Unit）は他の日本離島（与論島等）と同等を暫定値として設定します。

### [レジストリ・評価データ]

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- `streams` 配列に奄美大島の定義を追加します。
- `evaluations` セクションの奄美大島関連ページ（`destinations_amami-island`, `hotels_amami-island`）の `stream` を `jp_other` から `jp_amami` に変更します。

#### [MODIFY] [amami_guide_jp.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/amami_guide_jp.json)
- `stream` フィールドを `jp_amami` に更新します。

#### [MODIFY] [hotels_amami-island.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/hotels_amami-island.json)
- `stream` フィールドを `jp_amami` に更新します。

## 検証プラン

### 手動確認
- ダッシュボードの収益ストリーム一覧に「奄美大島」が表示されていることを確認。
- 奄美大島のページの収益計算が、新しく定義されたストリーム（`jp_amami`）に基づいて行われていることを確認。
