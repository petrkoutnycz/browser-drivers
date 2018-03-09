import {BrowserTypes, browserDriverVersionProvider} from "browser-drivers";

describe("chrome compatibility matrix >", () => {
    const createIt = (browser: BrowserTypes, chromeVersion: number, preferLatest: boolean, expectedDriverVersion: string) => {
        it(`returns ${expectedDriverVersion} for ${browser} ${chromeVersion} ${preferLatest ? "" : "not"} prefering the latest`,
            () => {
                const chromeDriver = browserDriverVersionProvider("chrome", chromeVersion, preferLatest);
                expect(chromeDriver.version).toBe(expectedDriverVersion);
            });
    };

    createIt("chrome", 66, true, "2.36");
    createIt("chrome", 66, false, "2.36");
    createIt("chrome", 65, true, "2.36");
    createIt("chrome", 65, false, "2.35");
    createIt("chrome", 62, true, "2.34");
    createIt("chrome", 62, false, "2.33");
    createIt("chrome", 53, true, "2.26");
    createIt("chrome", 53, false, "2.25");

    it("returns undefined for non-existing matrix line", () => {
        const chromeDriver = browserDriverVersionProvider("chrome", 1, false);
        expect(chromeDriver).toBeUndefined();
    });
});
