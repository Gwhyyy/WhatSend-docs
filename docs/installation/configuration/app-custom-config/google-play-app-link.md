---
sidebar_position: 3
---

# Google Play App Link

:::note Note
Google Play Store link will work only in the Android release of the project.
App Store link will work only in the IOS release of the project.
**It will be detected automatically based on the platform.**
:::

If you have uploaded the app on Google Play Store, you can get it's link and assign it here, so the rate app, will redirect to the app in Google Play Store

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const String googlePlayAppLink = "https://yourplaystorelink.com";
```

- 3- Change `https://yourplaystorelink.com` with your app name like this:

```dart title="/config/config.dart"
  static const String googlePlayAppLink = "https://play.google.com/store/apps/details?id=com.gwhyyy.publicApis";

```
