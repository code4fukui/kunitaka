# 越前市 国高地区 シビックテック

## 国高地区 地域安全 キッズセーフマップ / Kidssafe MAP in Kunitaka

https://code4fukui.github.io/kunitaka/kidssafe.html  

## オープンデータ CC BY

- [通学路GeoJSON](https://code4fukui.github.io/kunitaka/schoolzone.geojson)

## 開発の仕方

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
