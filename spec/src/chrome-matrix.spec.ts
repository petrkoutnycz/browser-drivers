import {browserDriverVersionProvider} from "browser-drivers";

describe("chrome compatibility matrix >", () => {
    const createIt = (chromeVersion: number, preferLatest: boolean, expectedDriverVersion: string) => {
        it(`returns ${expectedDriverVersion} for Chrome ${chromeVersion} if ${preferLatest ? "" : "not"} prefering the latest`,
            () => {
                const chromeDriver = browserDriverVersionProvider("chrome", chromeVersion, preferLatest);
                expect(chromeDriver.version).toBe(expectedDriverVersion);
            });
    };

    createIt(62, true, "2.34");
    createIt(62, false, "2.33");
    createIt(53, true, "2.26");
    createIt(53, false, "2.25");

    it("returns undefined for non-existing matrix line", () => {
        const chromeDriver = browserDriverVersionProvider("chrome", 1);
        expect(chromeDriver).toBeUndefined();
    });
});
