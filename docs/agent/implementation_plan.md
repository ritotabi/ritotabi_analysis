# 宮古島ランニングガイド (EN) の品質評価と収益予測

宮古島のランニングコースガイドページ（英語）について、情報の鮮度、独自性、技術的SEO、およびアフィリエイト動線の観点から評価を行い、今後24ヶ月の収益（PV）予測データを生成・登録します。

## ユーザーレビュー必須項目

> [!IMPORTANT]
> **技術的な修正が必要な点（課題）**
> 1. `hreflang` や `canonical` が絶対パスではなく相対パスで記述されています。
> 2. ランニングコース独自の「実走評価バッジ（S/A/B）」がページ内で視覚的に確認できません（JSON-LDや本文内のメタ情報としての欠落）。
> 3. 公開日がユーザー指定（2026/4/12）とJSON-LD内の `datePublished` (2026/02/20) で乖離があります。今回は指定日（4/12）を基準に評価します。

## 実施内容

### 1. ページ詳細分析
- [x] コンテンツ精読と独自性の確認
- [x] ビジュアル要素（独自写真枚数）の集計
- [x] テクニカルSEO（タグ、JSON-LD）の整合性チェック
- [x] アフィリエイト・内部リンク動線の確認

### 2. 評価データの生成
- `eval_spec.md` (v2.0) および `market_data.md` に基づき、スコアリングを行います。
- 宮古島（Tier 1 / 主役級）の市場規模と、英語ページ（インバウンド）のポテンシャルを考慮した24ヶ月のPV予測を算出します。
- `stream` は `en_miyako` を適用します。

### 3. ファイルの登録
- `[NEW]` [miyako_running_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_running_en.json)
- `[MODIFY]` [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)

## オープンクエスチョン
- 特になし。現状の事実に基づき評価を完了させます。

## 検証計画
### 自動テスト / 検証
- 生成したJSONのスキーマが `eval_spec.md` の要求に合致しているか確認します。
- `_registry.json` への追記が既存のJSON構造を破壊していないかバリデーションします。
