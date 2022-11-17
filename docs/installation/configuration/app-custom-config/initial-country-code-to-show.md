---
sidebar_position: 7
---

# Initial Country Code To Show

the default country code that will be shown to user for the phone number field
if `initialCountryCodeToShow` value is valid, an automatic country flag will be set automatically

- 1- Open the `config.dart` file.
- 2- Search for this:

```dart {1} title="/config/config.dart"
  static const String initialCountryCodeToShow = "US";
```

- 3- Change `US` with your app name like this:

```dart title="/config/config.dart"
  static const String appName = "FR"; // for france
```
