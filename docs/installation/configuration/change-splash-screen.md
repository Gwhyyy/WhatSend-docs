---
sidebar_position: 1
---

# Change App Splash Screen

in order to changing the App splash screen, we're going to use the [flutter_native_splash](https://pub.dev/packages/flutter_native_splash) package that simplifies the task for you.

- 1- from the app project directory, search for the `pubspec.yaml` file
- 2- open it, then add the following like this:

```
dependencies:
  flutter_native_splash: ^2.2.14

dev_dependencies:
flutter_native_splash:
  color: "#c8c8c8"
  image: assets/app_logo.png
```

:::caution Warning
Be careful with spaces, this file is sensitive with spaces, an extra/less space will cause failure in next step
:::

- 3- change the `assets/app_logo.png` image with your app logo path, you can also change the splash background color by changing #c8c8c8 with your hex color.

- 4- open the cmd (command line), then run those commands:

```
flutter pub get
flutter pub run flutter_native_splash:create
```

- 4- That's it, now run or build your app and you should notice the splash screen of your app.
