# 実績データへの「クリック数」追加とUI表示の拡張

GoogleとBingから取得した実績データにおいて、「表示回数（Views）」に加えて「クリック数（Clicks）」も管理・表示できるように拡張します。

## ユーザーレビューが必要な項目

> [!IMPORTANT]
> **「クリック数」の定義について**
> 以下のように定義して合算することを提案します：
> - **表示回数 (Views)**: Google Views (GA4表示回数) + Bing Impressions (検索結果への表示)
> - **クリック数 (Clicks)**: Google Active Users (GA4訪問者数) + Bing Clicks (検索からの流入)
>
> Google (GA4) には「検索クリック数」という概念が直接含まれないため、サイトへの訪問が発生した「アクティブ ユーザー」をクリック数と同等の指標として扱います。これでよろしいでしょうか。

## 提案される変更

### 1. データ構造の拡張

#### [MODIFY] [calc.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/utils/calc.ts)
- `BasePVRow` に `clicks?: Record<string, number>` プロパティを追加。

#### [MODIFY] [actual-pv.ts](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/data/actual-pv.ts)
- 3月の実績データに `clicks` 情報を追加。

### 2. 合算プロセスの改善

#### [MODIFY] [merge_actuals.mjs](file:///home/mune1/.gemini/antigravity/brain/55e64f4a-7fd9-49ca-847e-4b91395dae25/scratch/merge_actuals.mjs)
- `views` と `clicks` を独立して集計し、合算後のCSVおよび `actual-pv.ts` 用の数値を算出するように修正。

### 3. UI（ダッシュボード）の表示

#### [MODIFY] [Header.tsx](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/components/Header.tsx) (または OverviewTab)
- ダッシュボードの上部に「3月実績: ○○ PV / ○○ Clicks」といった表示を追加し、パッと見て実績がわかるようにします。

## 修正計画

1. **スクリプト修正**: `merge_actuals.mjs` を更新し、Views/Clicksの両対応にする。
2. **集計実行**: 更新された `202603_google.csv` を使って再度合算を実行。
3. **コード修正**: `calc.ts` で型と計算ロジックを拡張。
4. **データ反映**: `actual-pv.ts` を新しい集計値で更新。
5. **UI反映**: Reactコンポーネントを修正して実績値を表示。

## 検証計画

### 自動確認
- スクリプトの出力ログが、各ソースの Views/Clicks 合計と一致することを確認。

### 手動確認
- ブラウザ上のダッシュボードで、実績のPV数とクリック数が正しく2項目表示されていることを確認。
