---
sidebar_position: 4
---

# Change Package Name

in order to changing the package name, we're going to use the [change_app_package_name](https://pub.dev/packages/change_app_package_name) package that simplifies the task for you.

- 1- from the app project directory, search for the `pubspec.yaml` file
- 2- open it, then add the following like this:

```
dev_dependencies:
  change_app_package_name: ^1.1.0
```

:::caution Warning
Be careful with spaces, this file is sensitive with spaces, an extra/less space will cause failure in next step
:::

- 3- open the cmd (command line), then run this command:

**Change `com.new.package.name` with the your package name**

```
flutter pub get
flutter pub run change_app_package_name:main com.new.package.name
```

- 4- That's it, now run or build your app and you should find that the app's package changed.
