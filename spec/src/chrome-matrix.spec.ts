import {BrowserTypes, browserDriverVersionProvider} from "browser-drivers";

describe("chrome compatibility matrix >", () => {
    const createIt = (browser: BrowserTypes, chromeVersion: number, preferLatest: boolean, expectedDriverVersion: string) => {
        it(`returns ${expectedDriverVersion} for ${browser} ${chromeVersion} ${preferLatest ? "" : "not"} prefering the latest`,
            () => {
                const chromeDriver = browserDriverVersionProvider("chrome", chromeVersion, preferLatest);
                expect(chromeDriver.version).toBe(expectedDriverVersion);
            });
    };

    createIt("chrome", 73, true, "2.46");
    createIt("chrome", 73, false, "2.46");
    createIt("chrome", 72, true, "2.46");
    createIt("chrome", 72, false, "2.45");
    createIt("chrome", 71, true, "2.46");
    createIt("chrome", 71, false, "2.43");
    createIt("chrome", 70, true, "2.45");
    createIt("chrome", 70, false, "2.42");
    createIt("chrome", 69, true, "2.44");
    createIt("chrome", 69, false, "2.41");
    createIt("chrome", 68, true, "2.42");
    createIt("chrome", 68, false, "2.39");
    createIt("chrome", 67, true, "2.41");
    createIt("chrome", 67, false, "2.38");
    createIt("chrome", 66, true, "2.40");
    createIt("chrome", 66, false, "2.37");
    createIt("chrome", 65, true, "2.38");
    createIt("chrome", 65, false, "2.36");
    createIt("chrome", 64, true, "2.37");
    createIt("chrome", 64, false, "2.35");
    createIt("chrome", 63, true, "2.36");
    createIt("chrome", 63, false, "2.34");

    it("returns undefined for non-existing matrix line", () => {
        const chromeDriver = browserDriverVersionProvider("chrome", 1, false);
        expect(chromeDriver).toBeUndefined();
    });
});
