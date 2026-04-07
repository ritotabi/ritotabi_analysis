# 石垣島ホテルガイド（英語版）評価実施計画

https://ritotabi.com/en/hotels/ishigaki-island/ のページ内容を分析し、品質評価スコアと収益予測データを生成します。

## ユーザーレビュー必須項目

> [!IMPORTANT]
> 収益予測（PV予測）は、公開日（2026-04-06）を基準とした24ヶ月分の成長モデルに基づき算出します。

## 変更内容

### 評価データ生成

#### [NEW] [ishigaki_hotels_en.json](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/evaluations/ishigaki_hotels_en.json)
新規評価データを生成します。
- **Stream**: `en_ishigaki` (石垣島 英語)
- **Type**: `ホテル`
- **言語**: `EN`
- **独自性**: 高（ランナー視点、運転初心者向けTips等の独自コンテンツを確認）
- **アフィリエイト**: 新戦略（Agoda/Booking/楽天）に完全準拠

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/evaluations/_registry.json)
新規評価データをレジストリに追加し、ダッシュボードに反映させます。

## オープンクエスチョン

なし。

## 検証計画

### 自動テスト
- JSON スキーマの妥当性確認
- `_registry.json` の整合性チェック（IDの重複がないか）

### 手動確認
- `npm run dev` で起動中のダッシュボードに「石垣島ホテルガイド（英語）」が正しく表示され、スコアが反映されていることを確認。
