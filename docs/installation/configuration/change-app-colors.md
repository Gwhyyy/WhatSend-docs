---
sidebar_position: 5
---

# App Colors Config

If you have uploaded the app on App Store, you can get it's link and assign it here, so the rate app, will redirect to the app in App Store

- 1- Open the `config/colors/colors.dart` file in the project folder
- 2- you will find this:

```dart {2-5} title="/config/config.dart"
class AppColors {
  static Color lightGreen = hex("#48df95");
  static Color green = hex("#29b595");
  static Color grey = hex("#4f4f4f");
  static Color white = hex("#fff");
}
```
w
As you see, the colors are just a usual Hex colors, you can change colors by searching for a specific hex color code then replace it in the code.

**Example :**
let's say I want to change the `#48df95` color, to blue with it's hex color `#2980b9`

```dart {2} title="/config/config.dart"
class AppColors {
  static Color lightGreen = hex("#2980b9");
  static Color green = hex("#29b595");
  static Color grey = hex("#4f4f4f");
  static Color white = hex("#fff");
}
```
