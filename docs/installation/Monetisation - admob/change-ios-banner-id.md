---
sidebar_position: 2
---

# Change IOS Banner

in order to set the banner admob id to yours for android, follow those steps.

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1-3} title="/config/config.dart"
  static const String iosBannerUnitId =
      "ca-app-pub-3940256099942544/6300978111";
```

- 3- Change `ca-app-pub-3940256099942544/6300978111` with your admob banner unit id for IOS

```dart title="/config/config.dart"
  static const String appStoreAppLink = "Here the admob unit id";

```

:::note Note
`ca-app-pub-3940256099942544/6300978111` is not a personal ad unit id, it's the test banner id given from Admob in order to show test ads.  
:::
