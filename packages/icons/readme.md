## @webinteractions/icons

Packages Used

To Convert SVG to React Component

```
yarn -D add @svgr/cli
```

```
"scripts": {
    "svgr": "svgr --icon --title-prop  --replace-attr-values '#1D1D1D=currentColor' -d src assets --out-dir src",
}

```

To Find output fileSize

```
yarn -D add rollup-plugin-filesize
```

To remove src and dist file

```
yarn -D add rimraf

"scripts": {
    "prebuild": "rimraf src & rimraf dist",
}
```
