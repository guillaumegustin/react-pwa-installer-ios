import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import classnames from "classnames";

import translations from "./locales.json";
import shareIcon from "./ic_iphone_share.png";

import {isIos, isIPad, isInStandaloneMode, isSafari} from "../helpers/browser";

import "./styles.scss";

const LOCAL_STORAGE_KEY = "pwa_popup_display";
const NB_DAYS_EXPIRE = 1;
const DEFAULT_DELAY_FOR_DISPLAY_SECONDS = 10;
const DEFAULT_LANG = "en";
const isDevelopment = process.env.NODE_ENV === "development";

const checkLastPwaDisplay = () => {
  const lastDisplayTimestamp = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!lastDisplayTimestamp) return true;
  const lastDisplayMoment = moment(parseInt(lastDisplayTimestamp));
  return moment().diff(lastDisplayMoment, "days") > NB_DAYS_EXPIRE;
};
const saveLastPwaDisplay = () => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, moment().valueOf());
};

const addClickListener = (clickListener) => {
  window.addEventListener("click", clickListener);
  window.addEventListener("touchstart", clickListener);
  window.addEventListener("touch", clickListener);
};
const removeClickListener = (clickListener) => {
  window.removeEventListener("click", clickListener);
  window.removeEventListener("touchstart", clickListener);
  window.removeEventListener("touch", clickListener);
};

const PwaInstallPopupIOS = ({
  lang,
  appIcon,
  appName,
  styles,
  delay,
  children,
  force,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setOpened] = useState(false);
  const languageCode = Object.keys(translations).includes(lang)
    ? lang
    : DEFAULT_LANG;

  const clickListener = () => {
    setOpened((v) => {
      if (v) {
        saveLastPwaDisplay();
        removeClickListener(clickListener);
        return false;
      }
      return v;
    });
  };

  useEffect(() => {
    setIsLoaded(true);
    addClickListener(clickListener);
    const t = setTimeout(() => {
      if (isDevelopment) {
        console.log("isIOS: ", isIos());
        console.log("isInStandaloneMode: ", isInStandaloneMode());
        console.log("checkLastPwaDisplay: ", checkLastPwaDisplay());
      }
      if (
        force ||
        (isIos() && !isInStandaloneMode() && checkLastPwaDisplay())
      ) {
        setOpened(true);
      }
    }, delay * 1000);
    return () => {
      removeClickListener(clickListener);
      if (t) clearTimeout(t);
    };
  }, []);

  if (!isLoaded) return null;

  const apppNameLabel = appName
    ? appName
    : translations[languageCode].APP_NAME_DEFAULT;
  return isOpen ? (
    <div
      style={styles}
      className={classnames("pwa-install-popup-ios", {
        "ipad-device": isIPad(),
        "safari-nav": isSafari(),
      })}>
      {children ? (
        children
      ) : (
        <div className="pwa-install-popup-ios-content">
          <div className="left">
            <img className="appIcon" src={appIcon} />
          </div>
          <div className="right">
            <div>
              {translations[languageCode].PWA_POPUP_PART1.replace(
                "{{appName}}",
                apppNameLabel
              )}
            </div>
            <div>
              {translations[languageCode].PWA_POPUP_PART2.replace(
                "{{appName}}",
                apppNameLabel
              )}
            </div>
            <div>
              {translations[languageCode].PWA_POPUP_PART3}
              <span>
                <img className="small" src={shareIcon} />
              </span>
            </div>
            <div>{translations[languageCode].PWA_POPUP_PART4}</div>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

PwaInstallPopupIOS.propTypes = {
  lang: PropTypes.oneOf(["en", "fr", "pt", "nl"]),
  children: PropTypes.node,
  styles: PropTypes.object,
  force: PropTypes.bool,
  appIcon: PropTypes.string,
  delay: PropTypes.number,
  appName: PropTypes.string,
};

PwaInstallPopupIOS.defaultProps = {
  styles: null,
  appName: null,
  force: false,
  children: null,
  appIcon: null,
  delay: DEFAULT_DELAY_FOR_DISPLAY_SECONDS,
};

export default PwaInstallPopupIOS;
