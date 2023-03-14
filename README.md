# 越前市 国高地区 シビックテック

## 国高地区 地域安全 キッズセーフマップ / Kidssafe MAP in Kunitaka

https://code4fukui.github.io/kunitaka/kidssafe.html  

## 危険箇所編集方法

下記アプリ「緯度経度地図」から該当場所に動かして、Geo3x3をコピーする
- https://fukuno.jig.jp/app/map/latlng/#%E8%B6%8A%E5%89%8D%E5%B8%82

<img width="511" alt="image" src="https://user-images.githubusercontent.com/1715217/219602296-2d3b72ce-581a-4ba8-8c69-edbe1b95ee76.png">


## オープンデータ CC BY

- [通学路GeoJSON](https://code4fukui.github.io/kunitaka/schoolzone.geojson)

## 横展開の仕方

1. 本リポジトリをcloneする
2. タイトルやデータを地区に合わせて変更する
3. GitHub Pages(SettingsのPages)を設定し公開する

## 開発貢献の仕方

### cloneする

1. [GitHub Desktop](https://desktop.github.com/)をインストール
2. 緑色のボタン「Code」を押し「Open with GitHub Desktop」を選ぶ
3. [Deno](https://deno.land/)をインストール
4. kunitakaのディレクトリ内で下記を実行する
```sh
deno run --allow-net --allow-read https://taisukef.github.io/liveserver/liveserver.js
```
5. 表示されたリンクをブラウザ開く （例、 [http://[::]:7001/](http://[::]:7001/))
6. [kidssafe.html](kidssafe.html) などを、編集する （自動的に変更がブラウザに反映される）
7. GitHub Desktopで、ブランチを作り、プルリクする

## 交通事故オープンデータのデータ加工 by Jupyter Notebook

```
python3 -m pip install pandas
python3 -m pip install jupyter
jupyter notebook
```
open "data_analyse.ipynb"
