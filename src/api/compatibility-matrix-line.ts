/**
 * Matrix compatibility line
 */
export interface ICompatibilityMatrixLine {
    /**
     * Driver version
     */
    driverVersion: string;

    /**
     * Minimal supported browser major version
     */
    minBrowserVersion: number;

    /**
     * Maximal supported browser major version
     */
    maxBrowserVersion?: number;
};
