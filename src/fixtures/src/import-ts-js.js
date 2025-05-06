import { jsMod } from './js-module';
import { mjsMod } from './mjs-module';
import { cjsMod } from './cjs-module';
import { tsMod } from './ts-module';
import { mtsMod } from './mts-module';
import { ctsMod } from './cts-module';

export function bundleMain() {
    return [jsMod(), mjsMod(), cjsMod(), tsMod(), mtsMod(), ctsMod()];
}
