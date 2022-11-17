---
sidebar_position: 4
---

# App Store App Link

:::note Note
Google Play Store link will work only in the Android release of the project.
App Store link will work only in the IOS release of the project.
**It will be detected automatically based on the platform.**
:::

If you have uploaded the app on App Store, you can get it's link and assign it here, so the rate app, will redirect to the app in App Store

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const String appStoreAppLink = "https://yourappstorelink.com";
```

- 3- Change `https://yourplaystorelink.com` with your app name like this:

```dart title="/config/config.dart"
  static const String appStoreAppLink = "YOUR APP STORE APP LINK";

```
