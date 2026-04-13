# 実装計画：石垣島ランニングページ（英語版）の再評価

石垣島ランニングページ（[Ishigaki & Taketomi Running Guide](https://ritotabi.com/en/destinations/ishigaki-island/running/)）の品質評価を、最新の評価仕様（v2.0）および市場データに基づき再定義します。

## ユーザーレビューが必要な事項

> [!NOTE]
> 収益予測（PVモデル）において、最新の季節性バイアス係数を適用し、石垣島の実績シェアに基づいた保守的かつ現実的な数値にアップデートします。

## 提案される変更

### 評価データの更新

#### [MODIFY] [ishigaki_running_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/ishigaki_running_en.json)
- **品質スコアの刷新**:
  - `brandChecklist`: 現場の質感描写（体験ベースの記述）を評価し、全項目 `true` と判定。
  - `categoryChecklist`: ランニング特有の指標（距離の明記、内部リンク数、直接リンクなし等）を反映。
  - `techChecklist`: Next.js `<Image>` の使用と絶対パス canonical の実装を確認済みとして反映。
- **収益予測の再計算**:
  - 石垣島観光客数（インバウンド約20万人）と、国内ガイドに対する英語版の期待シェア（1/4）をベースに算出。
  - `market_data.md` の沖縄エリア季節性係数（4月: 0.8, 5月: 1.3 等）を公開月（4月）から24ヶ月分適用。
- **メモの更新**: 評価の根拠となった具体的な事実（画像18枚、直接リンクなし、内部リンク3件等）を記載。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- `ishigaki_running_en` の `sum` 値を再計算後の合計値に同期。

## 確認計画

### 自動テスト
- `src/evaluations/ishigaki_running_en.json` の JSON スキーマが正しいか確認。
- `pp`, `pn`, `po` の配列要素数が24個であることを確認。

### 手動確認
- 算出されたPV予測値が `eval_spec.md` の Tier 基準（成熟期 100 - 1,500 PV）内に収まっているか確認。
