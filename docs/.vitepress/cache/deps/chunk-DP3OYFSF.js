import {
  require_baseClone
} from "./chunk-EFUJT5LA.js";
import {
  __commonJS
} from "./chunk-4EOJPDL2.js";

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep;
  }
});

export {
  require_cloneDeep
};
//# sourceMappingURL=chunk-DP3OYFSF.js.map
