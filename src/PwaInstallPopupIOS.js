import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

import translations from './locales.json';
import shareIcon from './ic_iphone_share.png';

import './styles.scss';

const LOCAL_STORAGE_KEY = 'pwa_popup_display';
const NB_DAYS_EXPIRE = 10;
const TIMEOUT_FOR_DISPLAY_SECONDS = 10;
const DEFAULT_LANG = 'en';
const isDevelopment = process.env.NODE_ENV === 'development';

const isIos = () => {
	const userAgent = window.navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test( userAgent );
};
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

const checkLastPwaDisplay = () => {
	const lastDisplayTimestamp = window.localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!lastDisplayTimestamp) return true;
	const lastDisplayMoment = moment(parseInt(lastDisplayTimestamp));
	return moment().diff(lastDisplayMoment, 'days') > NB_DAYS_EXPIRE;
};
const saveLastPwaDisplay = () => {
	window.localStorage.setItem(LOCAL_STORAGE_KEY, moment().valueOf());
};

const PwaInstallPopupIOS = ({ lang, appIcon, styles, children, force }) => {
  const [isOpen, setOpened] = useState(false);
  const languageCode = Object.keys(translations).includes(lang) ? lang : DEFAULT_LANG;

	const clickListener = () => {
		setOpened(v => {
			if(v) {
				saveLastPwaDisplay();
				window.removeEventListener('click', clickListener);
				return false;
			}
			return v;
		});
	};

	useEffect(() => {
		window.addEventListener('click', clickListener);
		const t = setTimeout(() => {
			if (isDevelopment) {
				console.log('isIOS: ', isIos());
				console.log('isInStandaloneMode: ', isInStandaloneMode());
				console.log('checkLastPwaDisplay: ', checkLastPwaDisplay());
			}
			if (force || (isIos() && !isInStandaloneMode() && checkLastPwaDisplay())) {
				setOpened(true);
			}
		}, TIMEOUT_FOR_DISPLAY_SECONDS * 1000);
		return () => {
			window.removeEventListener('click', clickListener);
			if (t) clearTimeout(t);
		};
	}, []);

	return isOpen ? (
		<div style={styles} className="pwa-install-popup-ios">
			{children ? children : (
        <div className="pwa-install-popup-ios-content">
          <div className="left">
            <img className="appIcon" src="/images/app-icon-180.png" />
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          <div className="right">
            {translations[languageCode].PWA_POPUP_PART1}
            <span><img className="small" src={shareIcon} /></span>
            <br/>
            {translations[languageCode].PWA_POPUP_PART2}
          </div>
        </div>
      )}
		</div>
	) : null;
};

PwaInstallPopupIOS.propTypes = {
	children: PropTypes.node,
	styles: PropTypes.object,
	force: PropTypes.bool,
};

PwaInstallPopupIOS.defaultProps = {
	styles: null,
  force: false,
  children: null,
};

export default PwaInstallPopupIOS;
