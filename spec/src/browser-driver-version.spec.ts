import {BrowserDriverVersion, browserDriverVersionProvider} from "browser-drivers";

describe("browser driver version >", () => {
    describe("compare() >", () => {
        it("returns -1 for lower major version", () => {
            const res = new BrowserDriverVersion(1, 0).compare(new BrowserDriverVersion(2, 0));
            expect(res).toBe(-1);
        });

        it("returns -1 for same major version and lower minor version", () => {
            const res = new BrowserDriverVersion(1, 0).compare(new BrowserDriverVersion(1, 1));
            expect(res).toBe(-1);
        });

        it("returns 0 for same major and minor version", () => {
            const res = new BrowserDriverVersion(2, 1).compare(new BrowserDriverVersion(2, 1));
            expect(res).toBe(0);
        });

        it("returns 1 for higher major version", () => {
            const res = new BrowserDriverVersion(2, 0).compare(new BrowserDriverVersion(1, 0));
            expect(res).toBe(1);
        });

        it("returns 1 for same major version and higher minor version", () => {
            const res = new BrowserDriverVersion(2, 2).compare(new BrowserDriverVersion(2, 1));
            expect(res).toBe(1);
        });
    });
});
