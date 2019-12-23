# react-pwa-installer-ios

This simple utils React component allows you to easily display a POP for your iOS users, informing that he/she can install the app on the phone.
This component integrate the following logic:
- The popup will display only on iOS device, not in standalone mode
- When the user clicks anywhere, the popup is closed
- When the popup is closed, timestamp is stored in localstorage. Pop up won't open for the next 10 days.

![demo image](https://github.com/guillaumegustin/react-pwa-installer-ios/blob/master/screen_demo.png)

## getting started
- clone repo
- `yarn install`
- Launch storybook with `yarn storybook`

## How to use
```js
import PwaInstallPopupIOS from 'PwaInstallPopupIOS';

const MyComponent = ({ t }) => {
  return (
    <PwaInstallPopupIOS>
      <div className="pwa-popup">
        <div className="left">
	  <img className="appIcon" src="/images/app-icon-180.png" />
	  <i className="fa fa-plus-square" aria-hidden="true"></i>
	</div>
	<div className="right">
	  To install this web app on your phone: open the share menu
	  <span><img className="small" src="/images/ic_iphone_share.png"/></span>
	  <br/>
	  then select 'Add to Homescreen'
	</div>
      </div>
    </PwaInstallPopupIOS>
  );
};
```
