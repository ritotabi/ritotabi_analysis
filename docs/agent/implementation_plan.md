# 実装計画：石垣島ホテルページ（英語版）の再評価

石垣島ホテルページ（[https://ritotabi.com/en/hotels/ishigaki-island/](https://ritotabi.com/en/hotels/ishigaki-island/)）のソースコードを精査し、評価仕様（`eval_spec.md`）に基づいた品質スコアの算出と収益予測の更新を行います。

## ユーザーレビューが必要な項目
- **H1とMeta Titleの不一致**: `metadata.title` と `HeroSection` の `h1` が一致していないため、SEO技術実装スコアを下方修正（95→90）します。
- **アフィリエイト設計**: 比較表やマイクロコピーは優秀ですが、レンタカーやアクティビティへの直接導線がないため、スコアを 94 とします。

## 変更内容

### 評価データの更新

#### [MODIFY] [ishigaki_hotels_en.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/ishigaki_hotels_en.json)
- `evaluatedAt` を本日の日付（2026-04-23）に更新。
- `publishedDate` を `page.tsx` の事実に合わせ、2026-02-17 に修正。
- `freshness` を `new` から `growing` に変更。
- スコアおよびチェックリストを最新のコード分析結果に基づき更新。
- 収益予測（pp, pn, po）を 2026-04 以降の季節性を考慮して再計算。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- `en_hotels_ishigaki-island` エントリの `overall` スコアと `evaluatedAt` を更新。

## 検証計画

### 手動確認
- 生成された `ishigaki_hotels_en.json` がスキーマに準拠しているか確認。
- `_registry.json` のエントリが正しく更新されているか確認。
