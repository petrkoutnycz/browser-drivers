import {IDriverVersion} from "./driver-version";

/**
 * Matrix compatibility line
 * @interface
 */
export interface IMatrixLine {
    /**
     * Driver version specification
     */
    driverVersion: IDriverVersion;

    /**
     * Minimal supported browser major version
     */
    minBrowserVersion: number;
};
