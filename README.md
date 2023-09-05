# UA incorrect repro

This repository will demo that chromedriver v116 couldn't emulate iOS by `deviceName`

```js
mobileEmulation: {
    deviceName: "iPhone 12 Pro",
}
```

### How to reproduce

```sh
$ npm install
$ npm run wdio # WDIO should install latest chromedriver for you here
$ OS=android npm run wdio # or you can try to run the test with Pixel 3 XL emulation
```
