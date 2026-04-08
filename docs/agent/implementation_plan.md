# Con Dao英語版総合ガイドの再評価プラン

ユーザーによる改善報告（Meta Descriptionの最適化、ホテルセクションの追加）を受け、最新のページ品質を再評価し、評価データ（JSON）を更新します。

## ユーザーレビューが必要な項目
特にありません。事実ベースでの評価更新となります。

## 実施内容

### 1. ページ品質の再評価
- [x] Meta Descriptionの文字数確認 (148文字 / 推奨範囲内)
- [x] ホテル推薦セクションの確認 (「Coming soon」が解消され、具体的なホテルとリンクが設置されていることを確認)
- [x] 技術実装の確認 (hreflang, JSON-LD, canonical, Next.js Image等)
- [x] ブランド品質の精読 (トーン＆マナー、一次情報の有無)

### 2. 評価データの更新
#### [MODIFY] [guide_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analysis/src/evaluations/guide_en.json)
- `overall` スコアを 95 -> 98 に引き上げ。
- `SEO技術実装` スコアを 92 -> 98 に引き上げ（Meta不備解消）。
- `アフィリエイト設計` スコアを 88 -> 96 に引き上げ（ホテルセクション充実）。
- `issues` から解消済みの項目を削除。
- 収益予測（PV）を Tier 1/2 の最新ベンチマークに基づき更新（`baseline_pv.json` 準拠）。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analysis/src/evaluations/_registry.json)
- `guide_en` の `overall` と `evaluatedAt` を更新。

## 検証計画
- 更新後のJSONファイルが正しいスキーマを維持していること。
- `_registry.json` との整合性が保たれていること。
