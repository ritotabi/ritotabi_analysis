# 実装計画：コンダオ島（英語版）ページ再評価

コンダオ島の3つのページ（総合ガイド、ホテルガイド、ランニングガイド）について、ソースコードに基づいた厳格な品質評価を行い、分析システム用の評価データを更新します。

## ユーザーレビューが必要な項目
- **スコアの妥当性**: ソースコードの解析結果に基づき、ガイド(98点)、ホテル(98点)、ランニング(94点)と評価しました。これらは前回の評価を維持しつつ、最新のコンポーネント実装状況（NearbySpotOptimizer等）を反映したものです。
- **PV予測**: `baseline_pv.json` の市場トレンドをベースに、ページタイプ補正（ガイド1.0x, ホテル0.8x, ランニング0.5x）と品質補正を掛け合わせた24ヶ月予測を算出しました。

## オープンな質問
- 特になし（解析により実装状況は確認済み）

## 変更内容

### [Component Name] analytics-data

#### [NEW] [con-dao-island-en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/con-dao-island-en.json)
- コンダオ島総合ガイドの評価データ。

#### [NEW] [con-dao-island-hotels-en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/con-dao-island-hotels-en.json)
- コンダオ島ホテルガイドの評価データ。

#### [NEW] [con-dao-island-running-en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/con-dao-island-running-en.json)
- コンダオ島ランニングガイドの評価データ。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- 上記3つの新規評価ファイルの登録と、メタデータの更新。

## 検証計画

### 自動テスト
- `src/evaluations/` 配下のJSONファイルが、分析ダッシュボードの型定義に適合しているか確認。

### 手動確認
- 生成されたJSON内の `projections.pv` 配列が24要素（24ヶ月分）正しく生成されているか確認。
- `_registry.json` の `path` が正しいファイル名を指しているか確認。
