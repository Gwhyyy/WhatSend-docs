---
sidebar_position: 13
---

# Enable / Disable showing always the Get Started Page

by default, The `Get Started` screen will be shown to the user just on the first time he opens the app, after that he would be redirect to the `send message` screen directly

You can change the behavior so it will be shown every time the user open the app's with the following.


- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const bool shouldShowGetStartedPageJustOnlyOnFirstTime = true;
```

- 3- Change `true` to `false`:

```dart title="/config/config.dart"
  static const bool shouldShowGetStartedPageJustOnlyOnFirstTime = false;


```
