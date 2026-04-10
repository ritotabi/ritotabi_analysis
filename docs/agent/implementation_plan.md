# 石垣島・竹富島ガイド（英語版）再評価の実装計画

ユーザーによるページ改善（拠点セクション、FAQ、画像・コメントの拡充）を反映し、`page_evaluator` スキルに基づいて品質スコアと収益予測を更新します。

## ユーザーレビューが必要な項目
> [!IMPORTANT]
> スコアを 85点から 92点に引き上げます。特に「アフィリエイト設計（動線）」と「SEO技術（FAQ実装）」に大きな改善が見られました。
> 拠点セクションの追加により、単なるスポット紹介から「旅の拠点選び」というコンバージョンに近い動線が構築されています。

## 変更内容

### 分析リポジトリ (ritotabi_analytics)

#### [MODIFY] [ishigaki_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/ishigaki_en.json)
- `evaluatedAt`: `2026-04-10` に更新。
- `quality.overall`: `92` に更新。
- `quality.scores`: 全体的に上方修正。
  - アフィリエイト設計: 70 → 85 (拠点セクションによる動線強化)
  - SEO技術実装: 82 → 92 (FAQ JSON-LDの実装確認)
  - ユーザー体験(UX): 85 → 90 (滞在戦略の提示)
- `quality.seoChecklist.faq`: `true` に変更。
- `quality.strengths`: 拠点セクション（Base Camp）による意思決定サポートを追記。
- `quality.issues`: FAQ欠落の課題を削除。複数OTAについては内部リンク強化により優先度を「低」に緩和。
- `pp, pn, po`: 品質向上に伴い、成熟期のPV予測を上方修正。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- 石垣島英語版のエントリを最新に更新。

## 修正内容の確認

### 自動テスト
- `npm run lint` を実行し、JSONおよびコードにエラーがないか確認。

### 手動確認
- 生成されたJSONの `pp, pn, po` 配列が24ヶ月分正しく並んでいるか目視確認。
- 事実に基づかない推測表現（「〜と思われる」等）が排除されているか確認。
