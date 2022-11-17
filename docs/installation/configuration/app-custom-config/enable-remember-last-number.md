---
sidebar_position: 13
---

# Enable / Disable Remembering last number sent input

by default, Every number the user will enter will be saved for the next use until the user will change it.

You can change the behavior so it will clear the input field every time the app is open with the following.

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const bool shouldRememberLastNumberSent = true;
```

- 3- Change `true` to `false`:

```dart title="/config/config.dart"
  static const bool shouldRememberLastNumberSent = false;


```
