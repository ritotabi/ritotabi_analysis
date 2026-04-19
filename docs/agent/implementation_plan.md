# 久米島ホテル紹介ページ評価の実装計画

https://ritotabi.com/hotels/kume-island/ の評価を実施し、評価結果をJSONとして保存・登録します。

## 評価サマリー
- **独自性**: 実際に走り歩いた「Runner's Review」が含まれており、高い。
- **アフィリエイト**: 3軒全てのホテルで複数OTA（楽天・じゃらん）の設置、価格表示、社会的証明、マイクロコピーが揃っており、非常に最適化されている。
- **SEO・技術**: Title/H1の一致、FAQ JSON-LDの完全な実装、絶対パスのCanonicalなど、技術的完成度が高い。
- **課題**: 背景以外のホテル紹介用画像がOTAからの提供画像に依存しており、一次情報のビジュアル面での訴求に改善の余地がある。

## 変更内容

### [ritotabi_analytics](file:///home/mune1/dev/ritotabi/ritotabi_analytics)

#### [NEW] [kume_hotels_jp.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/kume_hotels_jp.json)
- 評価結果、収益予測（24ヶ月分）、SEO/アフィリエイトチェックリストを含む詳細な評価JSONを作成。

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- 新規評価エントリ `hotels_kume-island` を追加。

## 検証プラン
- 保存された JSON の `id`, `url`, `stream` が正しいか確認。
- `_registry.json` に正しく追加されているか確認。
- 品質スコアが仕様（eval_spec.md）に準拠しているか再点検。
