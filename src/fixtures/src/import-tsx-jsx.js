import { jsMod } from './js-module';
import { mjsMod } from './mjs-module';
import { cjsMod } from './cjs-module';
import { jsxMod } from './jsx-module';
import { mjsxMod } from './mjsx-module';
import { cjsxMod } from './cjsx-module';
import { tsMod } from './ts-module';
import { mtsMod } from './mts-module';
import { ctsMod } from './cts-module';
import { tsxMod } from './tsx-module';
import { mtsxMod } from './mtsx-module';
import { ctsxMod } from './ctsx-module';

export function bundleMain() {
    return [
        jsMod(),
        mjsMod(),
        cjsMod(),
        jsxMod(),
        mjsxMod(),
        cjsxMod(),
        tsMod(),
        mtsMod(),
        ctsMod(),
        tsxMod(),
        mtsxMod(),
        ctsxMod(),
    ];
}
