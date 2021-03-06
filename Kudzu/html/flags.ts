// NOTE: This field gets overwritten in a build process.
//
// see: MyRollup/index.js, function makeBundle(), with the configuration for
//  the replace plugin (replaceOpts object).
//
// Doing it this way ensures that Rollup will trim dead-code due to lazy
// logic evaluation.
export const isWorker = false;

export const isChrome = "chrome" in globalThis && !navigator.userAgent.match("CriOS");
export const isFirefox = "InstallTrigger" in globalThis;
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isOpera = /Opera/.test(navigator.userAgent);
export const isIE = /*@cc_on!@*/ false || "documentMode" in document;

export const isAndroid = /Android/.test(navigator.userAgent);
export const isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
    || /Macintosh(.*?) FxiOS(.*?)\//.test(navigator.platform)
    || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 2;
export const isMacOS = /Macintosh/.test(navigator.userAgent || "");
export const isApple = isIOS || isMacOS;
export const isBlackberry = /BlackBerry/.test(navigator.userAgent);
export const isUCBrowser = /(UC Browser |UCWEB)/.test(navigator.userAgent);

export const isMobile = isAndroid
    || isIOS
    || isBlackberry
    || isUCBrowser;
export const isDesktop = !isMobile;

export const isOculus = /oculus/i.test(navigator.userAgent);
export const isOculusGo = isOculus && /pacific/i.test(navigator.userAgent);
export const isOculusQuest = isOculus && /quest/i.test(navigator.userAgent);
export const isOculusQuest2 = isOculus && /quest 2/i.test(navigator.userAgent);
export const isMobileVR = /Mobile VR/.test(navigator.userAgent)
    || isOculus;
export const hasWebXR = "xr" in navigator
    && "isSessionSupported" in (navigator as any).xr;
export const hasWebVR = "getVRDisplays" in navigator;

export const hasBatteryAPI = "getBattery" in navigator;

export const browserName = isChrome
    ? "CHROMIUM"
    : (isFirefox
        ? "FIREFOX"
        : (isIE
            ? "IE"
            : (isOpera
                ? "OPERA"
                : (isSafari
                    ? "SAFARI"
                    : "UNKNOWN"))));