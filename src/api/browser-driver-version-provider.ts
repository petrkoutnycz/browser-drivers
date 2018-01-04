import {BrowserTypes} from "./browser-types";
import {IBrowserDriverVersion} from "./browser-driver-version";

/**
 * Browser driver version provider
 */
export interface IBrowserDriverVersionProvider {
    /**
     * Gets browser driver version based on given browser
     * @param {BrowserTypes} browser Requested browser
     * @param {number} browserMajorVersion Browser major version
     * @param {boolean} preferLatest Flag indicating whether the latest applicable driver should be returned
     */
    (browser: BrowserTypes, browserMajorVersion: number, preferLatest: boolean): IBrowserDriverVersion;
};
