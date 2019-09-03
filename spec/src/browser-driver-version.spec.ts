import {BrowserDriverVersion} from "browser-drivers";

describe("browser driver version >", () => {
    describe("version getter >", () => {
        it("returns 4 digits if all specified", () => {
            expect(new BrowserDriverVersion(1, 2, 3, 4).version).toBe("1.2.3.4");
        });

        it("returns 3 digits if 3 specified", () => {
            expect(new BrowserDriverVersion(1, 2, 3).version).toBe("1.2.3");
        });

        it("returns 2 digits if 2 specified", () => {
            expect(new BrowserDriverVersion(1, 2).version).toBe("1.2");
        });
    });

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
