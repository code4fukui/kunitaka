# Kidssafe MAP in Kunitaka

越前市国高地区における地域安全のためのシビックテックプロジェクト。危険箇所の報告や通学路データの可視化を行うインタラクティブマップを提供します。

## デモ

https://code4fukui.github.io/kunitaka/

## 機能

-   **インタラクティブマップ**: Leaflet.jsマップ上で危険箇所、VRスポット、テレマティクスデータを表示します。
-   **クラウドソースデータ**: Geo3x3エンコーディングを使用した地域からの危険報告データ（CSV形式）を活用します。
-   **複数のデータレイヤー**: 通学路（GeoJSON）、VRスポット、危険運転イベント（CSV）を可視化します。
-   **座標変換**: 日本測地系からWGS84への座標変換スクリプトが含まれています。

## データソース

-   **地域からの危険報告**: 危険箇所の詳細を記載したCSVファイル（例: [`kidssafe/村国3丁目.csv`](kidssafe/村国3丁目.csv)）。
-   **通学路**: 通学経路のGeoJSONデータは [schoolzone.geojson](https://code4fukui.github.io/kunitaka/schoolzone.geojson) から取得可能です。
-   **VRスポット**: [`vr_spot.csv`](vr_spot.csv) のデータと [vr-kunitaka](https://github.com/code4fukui/vr-kunitaka/) プロジェクトの3Dモデルを使用します。
-   **テレマティクスデータ**: あいおいニッセイ同和損害保険の危険運転イベントデータは [`aioi_events.csv`](aioi_events.csv) に含まれます。
-   **街路灯データ**: [`streetlight/k.csv`](streetlight/k.csv) に収録された生データをWGS84座標に変換して使用します。

## ご自身の地域への適用方法

このプロジェクトは任意の地域に適用可能です。

1.  **リポジトリのフォーク**: まず、このプロジェクトを自身のGitHubアカウントにフォークします。
2.  **データの準備**: サンプルのCSVおよびGeoJSONファイルを、ご自身の地域のデータに置き換えます。
3.  **マップのカスタマイズ**: `index.html` を編集してタイトル、デフォルトのマップビュー、データファイルのパスを変更します。
4.  **公開**: リポジトリの設定でGitHub Pagesを有効化し、マップをオンラインで公開します。

### 開発に関する注意点

地域の街路灯データを処理する座標変換スクリプト `streetlight/jp2wgs.js` を実行するには、[Deno](https://deno.land/) ランタイムが必要です。

## ライセンス

MIT License
