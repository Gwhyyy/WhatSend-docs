---
sidebar_position: 3
---

# Change App Icon

in order to changing the app icon name, we're going to use the [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons) package that simplifies the task for you.


- 1- rename your icon image to `icon.png`, then move to `assets/icon/` inside the app project folder
- 2- from the app project directory, search for the `pubspec.yaml` file
- 3- open it, then add the following like this:

```
dev_dependencies:
  flutter_launcher_icons: "^0.10.0"

flutter_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/icon/icon.png"
  min_sdk_android: 21 # android min sdk min:16, default 21

```
**Change `assets/icon/icon.png` with the your app icon image path**

:::caution Warning
Be careful with spaces, this file is sensitive with spaces, an extra/less space will cause failure in next step
:::

- 4- open the cmd (command line), then run this command:

```
flutter pub get
flutter pub run flutter_launcher_icons:main
```

then wait so it get the package, and run it to change the image icon

- 5- That's it, now run or build your app and you should see the app icon changed
