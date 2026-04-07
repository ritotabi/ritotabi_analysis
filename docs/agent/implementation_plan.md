# 日本エリアの細分化（エリア別集計）の実装計画

日本列島（日本離島）として一括で表示されていた収益ストリームを、エリア毎（石垣島、宮古島、与論島、久米島、阿嘉島）に細分化し、言語別（日本語・英語）に集計評価できるようにします。

## ユーザーレビューが必要な事項

> [!IMPORTANT]
> **ベースラインPVの配分比率（日本語）**
> 現在の「楽天（日本離島）」のベースラインPVを以下の比率で仮配分します。実態に合わせて調整が必要な場合はお知らせください。
> - 石垣島: 35%
> - 宮古島: 25%
> - 与論島: 10%
> - 久米島: 10%
> - 阿嘉島: 5%
> - その他: 15%

> [!NOTE]
> **ストリームキーの命名ルール**
> 日本語は `jp_[area]`, 英語は `en_[area]` という形式で統一します。

## 提案される変更

### データ定義とレジストリ

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/evaluations/_registry.json)
- `streams` に以下の12個のストリームを定義（既存の `r`, `ren` は廃止）。
    - 日本語: `jp_ishigaki`, `jp_miyako`, `jp_yoron`, `jp_kume`, `jp_aka`, `jp_other`
    - 英語: `en_ishigaki`, `en_miyako`, `en_yoron`, `en_kume`, `en_aka`, `en_other`
- 既存の評価（evaluations）の `stream` プロパティを新しいエリア・言語別キーに更新。

#### [MODIFY] [baseline-pv.ts](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/data/baseline-pv.ts)
- 各月の `pv` オブジェクトにおける `r` の値を、上記日本語エリア別の比率で分割して再割り当て。
- 英語エリア別のベースラインは現状通り 0 または極小値から開始。

#### [MODIFY] [streams.ts](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/data/streams.ts)
- `DEFAULT_STREAMS` を `_registry.json` の新定義と同期。

### 評価データファイル

#### [MODIFY] [ishigaki_en.json](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/evaluations/ishigaki_en.json)
- `stream` を `ren` から `en_ishigaki` に変更。

#### [MODIFY] [top_jp.json](file:///home/mune1/dev/ritotabi/eval_site/ritotabi_analysis/src/evaluations/top_jp.json)
- `stream` を `r` から `jp_other` に変更。

---

## 修正後のストリーム構成（抜粋）

| エリア | 日本語キー | 英語キー | 色 (案) |
| :--- | :--- | :--- | :--- |
| 石垣島 | `jp_ishigaki` | `en_ishigaki` | AMBER / EMERALD |
| 宮古島 | `jp_miyako` | `en_miyako` | ORANGE / TEAL |
| 与論島 | `jp_yoron` | `en_yoron` | ROSE / INDIGO |
| 久米島 | `jp_kume` | `en_kume` | LIME / SKY |
| 阿嘉島 | `jp_aka` | `en_aka` | RED / VIOLET |
| その他 | `jp_other` | `en_other` | SLATE / GREY |

## 検証計画

### 画面確認
- 「概要」タブの「収益ストリーム」セクションに、細分化されたストリームが表示されていること。
- 「グラフ」タブで、エリア別の推移が表示されていること。
- 「評価済みPV蓄積」の各ページが正しいストリームに紐付いていること。

### 自動テスト
- `src/utils/calc.ts` のロジックが新しいキーで問題なく動作することを確認。
