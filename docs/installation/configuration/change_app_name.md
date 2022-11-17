---
sidebar_position: 2
---

# Change App Name

in order to changing the app name, we're going to use the [change_app_package_name ](https://pub.dev/packages/change_app_package_name) package that simplifies the task of updating the app launcher name for you

- 1- from the app project directory, search for the `pubspec.yaml` file
- 2- open it, then add the following like this:

```
dev_dependencies:
  flutter_launcher_name: "^0.0.1"

flutter_launcher_name:
  name: "yourNewAppLauncherName"

```

**Change `yourNewAppLauncherName` with the your app name**

:::caution Warning
Be careful with spaces, this file is sensitive with spaces, an extra/less space will cause failure in next step
:::

- 3- open the cmd (command line), then run this command:

```
flutter pub get
flutter pub run flutter_launcher_name:main
```

then wait so it get the package, and run it to change the app name

- 4- That's it, now run or build your app and you should see the name changed
