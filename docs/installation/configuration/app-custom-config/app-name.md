---
sidebar_position: 1
---

# App Name

You may be asking

> Didn't I changed the app name ?

And the Answer is **yes**.

But you changed the name of the app that it will be shown across the device.

But this will be showed on the all the spots where you will see the app name inside the app such as the about dialog title...

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
   static const String appName = "WhatSend";
```

- 3- Change `WhatSend` with your app name like this:

```dart title="/config/config.dart"
  static const String appName = "Example name";
```
