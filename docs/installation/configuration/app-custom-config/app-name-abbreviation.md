---
sidebar_position: 2
---

# App name Abbreviation

This is the app abbreviation in the navigation drawer, (WS)
it's set that the first letter and the rest of it will have different colors

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const String appNameAbbreviation = "WS";
```

- 3- Change `WhatSend` with your app name like this:

```dart title="/config/config.dart"
  static const String appNameAbbreviation = "EN";
```
