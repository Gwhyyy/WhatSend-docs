---
sidebar_position: 10
---

# Get Started Asset

:::danger To know
Be careful with asset path if you will change it, otherwise you will get errors.
:::

This is the asset image shown in the get started screen.

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1-3} title="/config/config.dart"
  static const String getStartedAssetImage = "assets/1.png";


```

- 3- Change `assets/1.png` with the path of your image.

```dart title="/config/config.dart"
  static const String textToShare =
      "assets/someOtherImage.png";
```
