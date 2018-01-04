import {ICompatibilityMatrix, CompatibilityMatrixLine, BrowserDriverVersion} from "../api";

/**
 * Compatibility matrix for Chrome drivers
 * @example Information source: https://chromedriver.storage.googleapis.com/2.34/notes.txt
 */
export const chromeCompatibilityMatrix: ICompatibilityMatrix = {
    lines: [
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.34", 2, 34), 61, 63),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.33", 2, 33), 60, 62),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.32", 2, 32), 59, 61),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.31", 2, 31), 58, 60),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.30", 2, 30), 58, 60),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.29", 2, 29), 56, 58),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.28", 2, 28), 55, 57),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.27", 2, 27), 54, 56),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.26", 2, 26), 53, 55),
        new CompatibilityMatrixLine(new BrowserDriverVersion("2.25", 2, 25), 53, 55)
    ]
};
