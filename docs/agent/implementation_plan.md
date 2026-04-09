# ページ評価：https://ritotabi.com/en/hotels/ishigaki-island/

石垣島のホテルまとめページ（英語版）の再評価を行います。最新の評価仕様（v2.0）に基づき、収益予測と品質スコアを生成し、JSONファイルを更新します。

## ユーザーレビューが必要な事項
- 特になし。

## 変更内容

### 評価の実施とデータ保存

#### [NEW] [en_ishigaki_hotel.json](file:///home/mune1/dev/ritotabi/ritotabi_analysis/src/evaluations/en_ishigaki_hotel.json)
- URL: `https://ritotabi.com/en/hotels/ishigaki-island/` の評価結果を保存。
- 以下の軸でスコアを算出：
  - コンテンツ独自性
  - 写真・ビジュアル（独自写真9枚、OTA5枚を確認済み）
  - アフィリエイト設計（複数OTA対応、マイクロコピーの有無）
  - 内部リンク（ガイド・ランニングへの動線）
  - SEO技術実装（FAQ JSON-LD, Canonical等の確認）
  - ユーザー体験(UX)
  - 英語品質

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analysis/src/evaluations/_registry.json)
- 新規評価データの追加。

## 公開済みの情報に基づく事実確認（完了済み）
- **画像数**: 合計15枚、独自画像9枚、OTA画像5枚。
- **SEOタグ**: Canonical（絶対パス）、FAQ JSON-LD（2件）を確認。
- **アフィリエイト**: Agoda, Booking.com, 楽天トラベルの3種類が概ね設置されている（ENホテルとして適切）。
- **ブランド品質**: 一次情報（冷蔵庫の音、駐車場の狭さ等）が豊富に含まれている。

## 実施計画
1. 詳細なコンテンツ分析（ブランドチェックリスト、カテゴリチェックリストの判定）。
2. 24ヶ月分のPV予測値の生成。
3. `en_ishigaki_hotel.json` の作成。
4. `_registry.json` の更新。

## 検証プラン
- 生成されたJSONファイルがスキーマに従っているか確認。
- `_registry.json` に正しく登録されているか確認。
