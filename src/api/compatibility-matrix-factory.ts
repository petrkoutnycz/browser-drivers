import {BrowserTypes} from "./browser-types";
import {ICompatibilityMatrix} from "./compatibility-matrix";

/**
 * Compatibility matrix factory interface
 * 
 * @description Implementation creates instance of matrix upon a given browser
 */
export interface ICompatibilityMatrixFactory {
    /**
     * Gets a browser driver compatibility matrix based on given browser
     */
    (browser: BrowserTypes): ICompatibilityMatrix;
};
