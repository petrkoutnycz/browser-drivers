import {ICompatibilityMatrix} from "../api";

/**
 * Compatibility matrix for Chrome drivers
 * @example Information source: https://chromedriver.storage.googleapis.com/2.34/notes.txt
 */
export const chromeCompatibilityMatrix: ICompatibilityMatrix = {
    lines: [{
            driverVersion: "2.34",
            minBrowserVersion: 61,
            maxBrowserVersion: 63
        }, {
            driverVersion: "2.33",
            minBrowserVersion: 60,
            maxBrowserVersion: 62
        }, {
            driverVersion: "2.32",
            minBrowserVersion: 59,
            maxBrowserVersion: 61
        }, {
            driverVersion: "2.30",
            minBrowserVersion: 58,
            maxBrowserVersion: 60
        }, {
            driverVersion: "2.29",
            minBrowserVersion: 56,
            maxBrowserVersion: 58
        }, {
            driverVersion: "2.28",
            minBrowserVersion: 55,
            maxBrowserVersion: 57
        }, {
            driverVersion: "2.27",
            minBrowserVersion: 54,
            maxBrowserVersion: 56
        }, {
            driverVersion: "2.26",
            minBrowserVersion: 53,
            maxBrowserVersion: 55
        }, {
            driverVersion: "2.25",
            minBrowserVersion: 53,
            maxBrowserVersion: 55
        }
    ]
};
