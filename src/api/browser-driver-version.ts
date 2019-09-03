import {isUndefined} from "lodash";

export interface IBrowserDriverVersion {
    version: string;
    major: number;
    minor: number;
    revision?: number;
    build?: number;
    compare: (b: IBrowserDriverVersion) => number;
};

export class BrowserDriverVersion implements IBrowserDriverVersion {
    constructor(
        public readonly major: number,
        public readonly minor: number,
        public readonly revision: number = undefined,
        public readonly build: number = undefined) {
    }

    public get version(): string{
        if (!isUndefined(this.build)) {
            return `${this.major}.${this.minor}.${this.revision}.${this.build}`;
        }
        if (!isUndefined(this.revision)) {
            return `${this.major}.${this.minor}.${this.revision}`;
        }
        return `${this.major}.${this.minor}`;
    };

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

        // TODO: compare also revision/build parts

        return 0;
    };

    public toString = (): string => {
        return this.version;
    };
};
