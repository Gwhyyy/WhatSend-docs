---
sidebar_position: 3
---

import principalePage from '/img/principale-page.png';
import countryCode from '/img/country-code.png';
import countryCode2 from '/img/country-code2.png';
import writingMessage from '/img/writing-message.png';

# Send Message

## Principal Page Overview

This is the principal page of the Application, here the user can send messages.

<br/>
<img src={principalePage} width="500"/>
<br/>
<br/>
<br/>

## Choosing country code

After choosing, changing, searching the country phone code:

<br/>
<img src={countryCode} width="500"/>
<img src={countryCode2} width="500"/>

:::info Information
The default country code that the user will face is the `US`, you can change it to the desired country from the [configuration page](/installation/configuration/app-custom-config/initial-country-code-to-show).
:::

:::info Information 2
The app will remember the last country choosed from the user for the next app open, you can change this behavior to not remember last country code every time from the [configuration page](../installation/configuration/app-custom-config/enable-remember-last-number).
:::
:::info Information 3
The app will remember the last number input in the text field, for the next app open and you can also change this behavior from the [configuration page](/installation/configuration/app-custom-config/enable-remember-last-number).
:::
<br/>
<br/>

## Writing The Message

The user can write the message he want to send, then click on the **Send** button, he will be redirect to the **Whatsapp** Application with an open screen of the conversation with that number and the message, one click away of confirmation and that's it.

<br/>
<img src={writingMessage} width="500"/>

:::info Note
The Application will remember the last message written by the user for the next use and you can change this behavior to not remember it in the [configuration page](/installation/configuration/app-custom-config/enable-remember-last-number).
:::
