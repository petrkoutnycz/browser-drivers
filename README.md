# browser-drivers
node.js tool for resolving appropriate browser driver versions

## Example of resolving Chrome driver version (Typescript)
```
import {browserDriverVersionProvider} from "browser-drivers";
const chromeMajorVersion = 64;
const preferLatestDriver = true;
const chromeDriver = browserDriverVersionProvider("chrome", chromeMajorVersion, preferLatestDriver);
```
## Changelog
Tool history can be found in [CHANGELOG.md](CHANGELOG.md)