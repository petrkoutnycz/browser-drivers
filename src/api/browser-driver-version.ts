export interface IBrowserDriverVersion {
    version: string;
    major: number;
    minor: number;
    compare: (b: IBrowserDriverVersion) => number;
};

export class BrowserDriverVersion implements IBrowserDriverVersion {
    constructor(
        public readonly version: string,
        public readonly major: number,
        public readonly minor: number) {

    }

    public compare = (b: IBrowserDriverVersion): number => {
        if (this.major < b.major) {
            return -1;
        }
        if (this.major === b.major && this.minor < b.minor) {
            return -1;
        }
        if (this.major > b.major) {
            return 1;
        }
        if (this.major === b.major && this.minor > b.minor) {
            return 1;
        }

        return 0;
    };
};
