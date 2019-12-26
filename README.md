# react-pwa-installer-ios

This simple utils React component allows you to easily display a POPUP for your iOS users, informing that he/she can install your client Progressive web app on his/her phone.

This component integrate the following logic:
- The popup will display only on iOS device (iphones, ipads), not in standalone mode
- When the user clicks anywhere, the popup is closed
- When the popup is closed, timestamp is stored in localstorage. Pop up won't open up for the next 10 days.

![demo image](https://raw.githubusercontent.com/guillaumegustin/react-pwa-installer-ios/master/screen_demo.jpeg)

This component handles specific popup position for Ipad in order to match the 'share button' position:
![demo image](https://raw.githubusercontent.com/guillaumegustin/react-pwa-installer-ios/master/screen_demo_ipad.png)

## getting started
`npm install -s react-pwa-install-ios`
or 
`yarn add react-pwa-install-ios`

Then in your app:
```js
import PwaInstallPopupIOS from 'react-pwa-install-ios';

const MyComponent = () => {
  return (
    <PwaInstallPopupIOS 
      delay={3}
      lang="en"
      appIcon="https://my/icon/url.png">
    </PwaInstallPopupIOS>
  );
};
```
You can also setup your own content for the pop up:
```js
  <PwaInstallPopupIOS>
    <div 
      delay={0}
      style={{
        padding: '15px 30px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
      }}
    > 
      Hey ! I am the PwaInstallPopupIOS component.
      without the 'force=true' props, I will display only on iOS device,
      not in standalone mode.
    </div>
  </PwaInstallPopupIOS>
```
### Modules available props
- delay (number): number of seconds to wait for the popup to be displayed.
- force (boolean): set to true to force the display of the popup on any client, even non apple/safari device. This can be usefull for development / testing purpose.
- style (object): set custom style the popup container
- lang (string): language for which to display the modal default content. Currently supported: 'fr', 'en'.

## Run locally and contribute
- clone repo
- `yarn install`
- Test component by launching storybook with `yarn storybook`
- Feel free to add any new language defined in `locales.js`
- Suggest any improvement by submitting a Pull request !

## contributors
[Guillaume Gustin](https://github.com/guillaumegustin)

