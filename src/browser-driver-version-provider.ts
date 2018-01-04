import * as _ from "lodash";
import {BrowserTypes, IBrowserDriverVersion, IBrowserDriverVersionProvider} from "./api";
import {compatibilityMatrixFactory} from "./compatibility-matrix-factory";

/** @inheritdoc */
export const browserDriverVersionProvider: IBrowserDriverVersionProvider = 
    (browser: BrowserTypes, browserVersion: number, preferLatest: boolean = true): IBrowserDriverVersion => {

        const matrix = compatibilityMatrixFactory(browser);
        const relevantLines = _.filter(matrix.lines, line => {
            if (typeof line.maxBrowserVersion === "undefined") {
                return browserVersion >= line.minBrowserVersion;
            }

            return browserVersion >= line.minBrowserVersion && browserVersion <= line.maxBrowserVersion;
        });

        // make sure it is properly sorted by version
        relevantLines.sort((a, b) => a.compare(b));

        if (_.isEmpty(relevantLines)) {
            return undefined;
        }

        if (preferLatest) {
            return _.last(relevantLines).driverVersion;
        }

        return relevantLines[0].driverVersion;;
    };
