# 収益予測の高度化とランニングページ評価基準の改善

ユーザーからの「品質スコアを収益に反映させるべき」というフィードバックに基づき、計算ロジックの刷新とランニングページ専用の評価指標を導入しました。

## 実施内容

### 1. ランニングページ専用CVR指標の追加
ランナー向けの宿泊導線を評価するため、以下の指標を定義・追加しました。
- `internalHotelLinks`: 内部ホテルページへのリンク数（現状の主流）
- `directAffiliateLinks`: 予約サイトへの直接リンク数（CVRが高い推奨動線）
- `hotelCtaPerCourse`: コースあたりのCTA密度
- `runnerPersonaMatch`: ランナー視点での訴求（早朝朝食、洗濯機等）の有無

### 2. 品質スコア連動型収益予測モデル
`calc.ts` の計算ロジックを刷新し、品質スコアが直接予測金額に影響するように変更しました。
- **予測収益**: `PV × 単価 × ストリームCVR × (品質スコア / 100)`
- **最大ポテンシャル**: `PV × 単価 × ストリームCVR × 1.0`

### 3. ダッシュボードの可視化改善
`OverviewTab.tsx` を更新し、以下の項目を表示するようにしました。
- **機会損失 (Revenue Gap)**: 最大ポテンシャルと現状予測の差額。
- **最大ポテンシャル収益**: 全てのページを最高品質（スコア100）にした場合の収益。

## 修正ファイル一覧

- [evaluation.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/types/evaluation.ts): データ構造の定義
- [eval_spec.md](file:///home/mune1/dev/ritotabi/ritotabi_analytics/.agent/skills/page_evaluator/resources/eval_spec.md): 評価基準の更新
- [SKILL.md](file:///home/mune1/dev/ritotabi/ritotabi_analytics/.agent/skills/page_evaluator/SKILL.md): AIエージェントの指示更新
- [calc.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/utils/calc.ts): 計算ロジックの刷新
- [OverviewTab.tsx](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/components/OverviewTab.tsx): UI表示の追加
- [colors.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/utils/colors.ts): UI用カラーの追加

## 検証結果

既存のランニングページ（宮古島）において、直接アフィリエイトリンクがない状態をシミュレーションした結果、ダッシュボード上で約8%の「機会損失（Revenue Gap）」が正しく算出・表示されることを確認しました。
これにより、「直接リンクを追加して品質を100に近づければ、収益がさらに向上する」という改善の動機付けが明確になりました。
