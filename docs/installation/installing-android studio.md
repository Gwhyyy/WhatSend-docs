---
sidebar_position: 2
---

# Installing Android Studio

:::note Note
as the [official documentation](https://docs.flutter.dev/get-started/install/windows#android-setup) says, Flutter relies on a full installation of Android Studio to supply its Android platform dependencies. However, you can write your Flutter apps in a number of editors; a later step discusses that.
:::

:::note Note
If you have already **Android Studio** installed on your machine, you can skip to the next step.
:::

## Android Studio

Android Studio is the official Integrated Development Environment (IDE) for Android app development.

## Installing Android Studio

- 1- Download [Android Studio](https://developer.android.com/studio) and install it
- 2- Start Android Studio, and go through the ‘Android Studio Setup Wizard’. This installs the latest Android SDK, Android SDK Command-line Tools, and Android SDK Build-Tools, which are required by Flutter when developing for Android.

- 3- Run

```
flutter doctor
```

To confirm that Flutter has located your installation of Android Studio.

If Flutter cannot locate it, run flutter

```
config --android-studio-dir <directory> // replace <directory> with Android Studio installed folder
```

To set the directory that Android Studio is installed to.

## Set up your Android device

To prepare to run and test your Flutter app on an Android device, you need an Android device running Android 4.1 (API level 16) or higher.

- 1- Enable Developer options and USB debugging on your device. Detailed instructions are available in the [Android documentation](https://developer.android.com/studio/debug/dev-options).
- 2- Windows-only: Install the [Google USB Driver](https://developer.android.com/studio/run/win-usb).
- 3- Using a USB cable, plug your phone into your computer. If prompted on your device, authorize your computer to access your device.
- 4- In the terminal, run

```
flutter devices
```

To verify that Flutter recognizes your connected Android device. By default, Flutter uses the version of the Android SDK where your adb tool is based. If you want Flutter to use a different installation of the Android SDK, you must set the ANDROID_SDK_ROOT environment variable to that installation directory.

## Set up the Android emulator

- 1- Enable [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration#accel-vm) on your machine.
- 2- Launch Android Studio, click the AVD Manager icon, and select **Create Virtual Device**…
  - In older versions of Android Studio, you should instead launch **Android Studio > Tools > Android > AVD Manager** and select **Create Virtual Device**…. (The Android submenu is only present when inside an Android project.)
  - If you do not have a project open, you can choose** Configure > AVD Manager** and select **Create Virtual Device**…
- 3- Choose a device definition and select **Next**.
- 4- Select one or more system images for the Android versions you want to emulate, and select **Next**. An x86 or x86_64 image is recommended.
- 5- Under Emulated Performance, select **Hardware - GLES 2.0** to [enable hardware acceleration](https://developer.android.com/studio/run/emulator-acceleration).
- 6- Verify the AVD configuration is correct, and select **Finish**.

:::note Note
For details on the above steps, see Managing AVDs.
:::

- 7- In Android Virtual Device Manager, click **Run** in the toolbar. The emulator starts up and displays the default canvas for your selected OS version and device.

## Agree to Android Licenses

Before you can use Flutter, you must agree to the licenses of the Android SDK platform. This step should be done after you have installed the tools listed above.

Make sure that you have a version of Java 8 installed and that your JAVA_HOME environment variable is set to the JDK’s folder.

Android Studio versions 2.2 and higher come with a JDK, so this should already be done.

- 1- Open an elevated console window and run the following command to begin signing licenses.
  Android Studio versions 2.2 and higher come with a JDK, so this should already be done.
- 2- Open an elevated console window and run the following command to begin signing licenses.

```
flutter doctor --android-licenses
```

- 3- Review the terms of each license carefully before agreeing to them.
- 4- Once you are done agreeing with licenses, run

```
flutter doctor
```

Again to confirm that you are ready to use Flutter.
