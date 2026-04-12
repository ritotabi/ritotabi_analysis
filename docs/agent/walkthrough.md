# 宮古島評価データのPV予測値修正完了

宮古島（英語版）の各ページにおける異常なPV予測値を修正し、統計データおよびSEO成長曲線に基づいた現実的な予測値に更新しました。

## 修正内容

### 1. 逆転現象および市場規模の整合性修正
- **[miyako_guide_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_guide_en.json)**:
  - 悲観予測（pp）が通常予測（pn）を上回っていた問題を解消しました。
  - 楽観予測（po）を石垣島の市場規模（約85%）に合わせて下方修正しました。

### 2. スケールエラーの解消
- **[miyako_running_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_running_en.json)**:
  - 楽観予測が 71,420 PV/月 という非現実的な数値になっていたエラーを修正し、Tier 3（ニッチ）基準の最大 3,200 PV/月 程度に調整しました。
  - 極端に低かった通常予測も現実的な成長曲線に引き上げました。

### 3. 成長曲線の平滑化と分散の付与
- **[miyako_beaches_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_beaches_en.json)**:
  - 成長過程での不自然な予測値の増減を平滑化し、SEOの浸透を模した単調増加曲線に変更しました。
- **[miyako_hotels_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/miyako_hotels_en.json)**:
  - 全シナリオが同一値だった状態から、悲観・通常・楽観に応じた予測幅を設定しました。

## 検証結果

全てのファイルにおいて以下の整合性を確認済みです。
- [x] **シナリオ整合性**: `悲観(pp) <= 通常(pn) <= 楽観(po)`
- [x] **時系列整合性**: 月次の推移が概ね単調増加（成熟期まで）となっている。
- [x] **市場比率**: 宮古島の旅行者統計（年間120万人規模）に対し、過大・過小すぎないリーチ率となっている。

修正後のデータは、分析システムのダッシュボードや収益予測シミュレーションに即座に反映されます。
