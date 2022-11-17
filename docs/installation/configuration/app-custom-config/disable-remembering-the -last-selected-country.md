---
sidebar_position: 13
---

# Enable / Disable remembering the last selected country

by default, Every last country set by the user will be saved for the next use until the user will change it again.

You can change the behavior so it will reset the selected country every time the app is open with the following.

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const bool shouldRememberLastCountrySelected = true;
```

- 3- Change `true` to `false`:

```dart title="/config/config.dart"
  static const bool shouldRememberLastCountrySelected = false;


```
