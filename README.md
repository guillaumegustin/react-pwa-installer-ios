# react-pwa-installer-ios

This simple utils React component allows you to easily display a POP for your iOS users, informing that he/she can install the app 
on the phone.

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
					{t('GENERAL.PWA_POPUP_PART1')}
					<span><img className="small" src="/images/ic_iphone_share.png"/></span>
					<br/>
					{t('GENERAL.PWA_POPUP_PART2')}
				</div>
			</div>
		</PwaInstallPopupIOS>
	);
};
```
