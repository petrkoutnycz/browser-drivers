import {ICompatibilityMatrixLine} from "./compatibility-matrix-line";

/**
 * Browser driver compatibility matrix interface
 */
export interface ICompatibilityMatrix {
    lines: ICompatibilityMatrixLine[];
};
