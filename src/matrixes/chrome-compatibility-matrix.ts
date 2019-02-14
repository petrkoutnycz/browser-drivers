import {ICompatibilityMatrix, CompatibilityMatrixLine, BrowserDriverVersion} from "../api";

/**
 * Compatibility matrix for Chrome drivers
 * @example Information source: https://chromedriver.storage.googleapis.com/2.46/notes.txt
 */
export const chromeCompatibilityMatrix: ICompatibilityMatrix = {
    lines: [
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 46), 71, 73),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 45), 70, 72),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 44), 69, 71),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 43), 69, 71),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 42), 68, 70),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 41), 67, 69),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 40), 66, 68),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 39), 66, 68),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 38), 65, 67),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 37), 64, 66),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 36), 63, 65),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 35), 62, 64),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 34), 61, 63),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 33), 60, 62),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 32), 59, 61),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 31), 58, 60),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 30), 58, 60),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 29), 56, 58),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 28), 55, 57),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 27), 54, 56),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 26), 53, 55),
        new CompatibilityMatrixLine(new BrowserDriverVersion(2, 25), 53, 55)
    ]
};
