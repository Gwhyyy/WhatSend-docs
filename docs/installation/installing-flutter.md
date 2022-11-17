---
sidebar_position: 1
---

import iconFlutter from "/img/icon_flutter.png";
import flutterInstall1 from "/img/flutter-install-1.png";
import flutterInstall2 from "/img/flutter-install-2.png";
import flutterInstall3 from "/img/flutter-install-3.png";
import flutterInstall4 from "/img/flutter-install-4.png";
import flutterInstall5 from "/img/flutter-install-5.png";
import flutterInstall6 from "/img/flutter-install-6.png";
import flutterInstall7 from "/img/flutter-install-7.png";

# Installing Flutter

:::note Note
If you have already **Flutter** installed on your machine, you can skip to the next step.
:::

## Flutter

Flutter is Google’s portable UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.

## How To Install Flutter

First, enter to that link [Get Started With Flutter](https://docs.flutter.dev/get-started/install)

This page will be shown to you

- 1- choose your operation system.

:::note Note
In this tutorial, we will continue with Windows, but the process should be valid for other operation system
:::

<br />
<img src={flutterInstall1} />
<br />
<br />
<br />

- 2- click the button to download.

<img src={flutterInstall2} />
<br />

- 3- After it's downloaded, extract the zip file and place the contained flutter in the desired installation location for the **Flutter** SDK (for example, **C:\src\flutter**).

- 4- Copy the full path of the downloaded **Flutter** sdk folder to **flutter\bin**.

:::caution Warning
Do not install **Flutter** to a path that contains special characters or spaces.
:::

:::caution Warning
Do not install Flutter in a directory like C:\Program Files\
:::

5- If you wish to run **Flutter** commands in the regular Windows console, take these steps to add Flutter to the PATH environment variable:

- 5-1- From the Start search bar, enter ‘env’ and select Edit environment variables for your account.
  - <img src={flutterInstall3} />
  - <img src={flutterInstall4} />
- 5-2- Under User variables check if there is an entry called Path.
  - <img src={flutterInstall5} />
- 5-3- Click on Edit. a new Dialog will open from it, click on "new" and paste the link you copied as its value

  - <img src={flutterInstall6} />

:::note Note
Please make sure the path you copied ends with /flutter/bin
:::

- 6- Now Restart your pc for changes to take effect

:::note Note
We are assuming that you followed the steps until step 6, and restarted your pc
:::
7- open the command line cmd, from the Start search bar, type cmd and open it
8- run the following command:

```
flutter doctor
```

- <img src={flutterInstall7} />

This command checks your environment and displays a report of the status of your Flutter installation. Check the output carefully for other software you might need to install or further tasks to perform (shown in bold text).

9- confirm that it show something like that

```
[-] Android toolchain - develop for Android devices
    • Android SDK at D:\Android\sdk
    ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
    • Try re-installing or updating your Android SDK,
      visit https://docs.flutter.dev/setup/#android-setup for detailed instructions.
```
