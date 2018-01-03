import {BrowserTypes, ICompatibilityMatrix, ICompatibilityMatrixFactory} from "./api";
import {chromeCompatibilityMatrix} from "./matrixes/chrome-compatibility-matrix";

/** @inheritdoc */
export const compatibilityMatrixFactory: ICompatibilityMatrixFactory = 
    (browser: BrowserTypes): ICompatibilityMatrix => {
        switch (browser) {
            case "chrome": return chromeCompatibilityMatrix;
            default:
                throw new Error("Only chrome matrix is supported.");
        }
    };
