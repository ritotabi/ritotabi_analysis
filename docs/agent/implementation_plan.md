# 宮古島評価データのPV予測値修正プラン

宮古島（英語版）の評価データにおいて、PV予測値（pp, pn, po）に異常な数値や不整合（Pessimistic が Normal より高い、特定ページで過大な数値等）が確認されたため、統計データおよび評価仕様に基づき修正を行います。

## ユーザーレビューが必要な事項

> [!IMPORTANT]
> - `miyako_running_en.json`（ランニングページ）の楽観予測（po）が **71,420 PV/月** という非現実的な数値になっていました。これは宮古島の海外旅行者数（月間約1.6万人）を大幅に上回っており、明らかな過大評価です。これを **1,500〜2,500 PV/月** 程度（Tier 3 基準）に下方修正します。
> - `miyako_guide_en.json`（総合ガイド）で **pp (悲観) > pn (通常)** となっていた逆転現象を解消し、統計に基づいた適切な成長カーブに再設定します。
> - 各ページの成長カーブ（月次推移）において、不自然な凹凸を滑らかにし、検索エンジンのインデックス進行を模した現実的な曲線に変更します。

## 調査結果と異常内容のまとめ

| ファイル名 | 異常内容 | 修正方針 |
| :--- | :--- | :--- |
| `miyako_running_en.json` | `pn`が極端に低く(35)、`po`が極端に高い(71,420)。 | Tier 3 (100〜1,500 PV) 基準で再計算。 |
| `miyako_guide_en.json` | `pp` (16,000) > `pn` (8,700) の逆転。 | Tier 1 基準（成熟期 ~10,000 PV）で再設定。 |
| `miyako_beaches_en.json` | 成長カーブが非単調（増減が不自然）。 | SEOインデックスを考慮した滑らかな成長曲線へ修正。 |
| `miyako_hotels_en.json` | `pp`, `pn`, `po` がすべて同一値。 | シナリオ別の分散（±30~50%）を付与。 |

## 修正内容

### [evaluations](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations)

#### [MODIFY] [miyako_guide_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_guide_en.json)
- `pp`, `pn`, `po` の値を市場規模（石垣島の約85%）に合わせて再計算。
- 成熱期 (Month 24) の pn を 8,700 -> 10,000 前後に調整し、pp をその 1/2 程度に設定。

#### [MODIFY] [miyako_running_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_running_en.json)
- スケールエラー（pn が小さすぎ、po が大きすぎ）を修正。
- ニッチ需要としての妥当な数値（成熟期 pn: 1,200, po: 2,500 程度）に調整。

#### [MODIFY] [miyako_beaches_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_beaches_en.json)
- 月ごとの変動（不自然な起伏）をフラット化。

#### [MODIFY] [miyako_hotels_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_hotels_en.json)
- シナリオ別の期待値に差分を設け、現状（すべて同じ）から分散を付与。

## 検証プラン

### 自動テスト
- 修正後の各 JSON が、`pp <= pn <= po` の不等式を満たしているか確認。
- 成長カーブが（成熟期まで）単調増加しているか確認。

### 目視確認
- 石垣島の評価データ（`ishigaki_en.json`）と比較し、市場規模の比率（約0.85倍程度）として妥当なレンジに収まっているか確認。
