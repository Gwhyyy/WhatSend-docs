---
sidebar_position: 8
---

# Share Text

This is the text that will be shared when user click on the `Share app` Item in the navigation drawer.

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1-3} title="/config/config.dart"

  static const String textToShare =
      "Here the text you want to share when the share item in navigation drawer is clicked";

```

- 3- Change `Here the text you want to share when the share item in navigation drawer is clicked` with text you waa share.

```dart title="/config/config.dart"
  static const String textToShare =
      "appName, is an application that let you send messages easily without saving numbers in the phone";
```
