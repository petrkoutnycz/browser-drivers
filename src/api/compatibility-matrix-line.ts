import {IBrowserDriverVersion} from "./browser-driver-version";

/**
 * Matrix compatibility line
 */
export interface ICompatibilityMatrixLine {
    /**
     * Driver version
     */
    driverVersion: IBrowserDriverVersion;

    /**
     * Minimal supported browser major version
     */
    minBrowserVersion: number;

    /**
     * Maximal supported browser major version
     */
    maxBrowserVersion?: number;

    /**
     * Compares with another line
     */
    compare: (b: ICompatibilityMatrixLine) => number;
};

/**
 * Matrix compatibility line implementation
 */
export class CompatibilityMatrixLine implements ICompatibilityMatrixLine {
    constructor(
        public readonly driverVersion: IBrowserDriverVersion,
        public readonly minBrowserVersion: number,
        public readonly maxBrowserVersion?: number) {

    }

    public compare = (b: ICompatibilityMatrixLine): number => {
        const driverComparison = this.driverVersion.compare(b.driverVersion);
        if (driverComparison !== 0) {
            return driverComparison;
        }

        if (this.minBrowserVersion < b.minBrowserVersion) {
            return -1;
        } else if (this.minBrowserVersion > b.minBrowserVersion) {
            return 1;
        }

        return 0;
    };
};
