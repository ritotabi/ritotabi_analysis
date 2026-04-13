# 収益予測ロジックの高度化：品質スコア連動型CVRモデルの導入計画

ご指摘の通り、「品質スコアが収益（金額）に反映されない」という現状の課題を解決するため、品質スコアに基づいてCVRを動的に補正するロジックを導入します。これにより、単なるPV予測ではなく、「改善によってどれだけ収益が増えるか」を可視化します。

## User Review Required

> [!IMPORTANT]
> 収益の計算式が以下のように変更されます。
> *   **現状予測**: `PV × 単価 × ストリームCVR × (品質スコア / 100)`
> *   **最大ポテンシャル**: `PV × 単価 × ストリームCVR × 1.0` (スコア100の場合)

これにより、品質スコアが低いページの収益予測値は従来より低く算出されますが、同時に「改善による伸び代（Gap）」が明確になります。

## Proposed Changes

### 1. データ構造の定義
#### [MODIFY] [evaluation.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/types/evaluation.ts)
*   `PageEvaluation['quality']['categoryChecklist']` にランニングページ専用の CVR 指標を追加 (前回の計画通り)。
*   `BasePVRow` および `CalculatedRow` に、最大ポテンシャル収益を保持する `potRev` プロパティを追加。

### 2. 計算ロジックの刷新
#### [MODIFY] [calc.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/utils/calc.ts)
*   `addEvalsToPv` 関数を更新し、ページごとの品質スコア（`quality.overall`）を取得して、以下の2種類の収益を月別に集計するように変更します。
    1.  `rev`: スコア補正後の予測収益
    2.  `potRev`: スコア100とした場合の最大ポテンシャル収益

### 3. UIの改善（可視化）
#### [MODIFY] [OverviewTab.tsx](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/components/OverviewTab.tsx)
*   現状の予測収益の横に、最大ポテンシャル収益と「改善による機会損失（Revenue Gap）」を表示します。

### 4. 評価仕様とスキルの更新
#### [MODIFY] [eval_spec.md](file:///home/mune1/dev/ritotabi/ritotabi_analytics/.agent/skills/page_evaluator/resources/eval_spec.md)
#### [MODIFY] [SKILL.md](file:///home/mune1/dev/ritotabi/ritotabi_analytics/.agent/skills/page_evaluator/SKILL.md)
*   ランニングページ特有のCVR評価要因（直接リンク、ペルソナ適合性など）を、品質スコアの算出に明確に組み込むよう基準を更新します。

---

## Open Questions

> [!TIP]
> 「最大金額」の定義として、現在のストリームCVR（平均的な値）を100点満点時の値とするか、あるいは100点満点時はさらに上のCVRを目指す設定にするか、どちらがブランドの成長イメージに近いでしょうか？（今回はシンプルに「ストリームCVR = スコア100」として実装予定です）

## Verification Plan

### Automated Tests
*   `calc.ts` の計算ロジックにおいて、スコア50のページがスコア100の半分として計算されることを確認する。

### Manual Verification
*   ランニングページに直接アフィリエイトリンクを追加し、スコアを上げた際に予測収益が増加し、「潜在的な伸び代（Gap）」が減少することを確認する。
