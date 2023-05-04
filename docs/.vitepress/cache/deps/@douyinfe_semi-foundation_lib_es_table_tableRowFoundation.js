import {
  foundation_default
} from "./chunk-VMJJZ6RG.js";
import "./chunk-ALAR6DE5.js";
import "./chunk-2EMWRCT4.js";
import "./chunk-HGGG6L4M.js";
import "./chunk-ZZORV55O.js";
import "./chunk-JVA7ONT2.js";
import "./chunk-TY6AJI44.js";
import "./chunk-X27LVEKC.js";
import "./chunk-XEJAP4RW.js";
import "./chunk-7BHJLEWS.js";
import "./chunk-XKOYYM3K.js";
import "./chunk-4EOJPDL2.js";

// node_modules/.pnpm/@douyinfe+semi-foundation@2.34.0/node_modules/@douyinfe/semi-foundation/lib/es/table/tableRowFoundation.js
var TableRowFoundation = class extends foundation_default {
  handleClick(e) {
    const {
      expanded,
      rowKey
    } = this.getProps();
    this._adapter.notifyClick(rowKey, e, expanded);
  }
  handleDoubleClick(e) {
    this._adapter.notifyDoubleClick(this.getProp("record"), e);
  }
  handleMouseEnter(e) {
    const record = this.getProp("record");
    this._adapter.notifyMouseEnter(record, e);
  }
  handleMouseLeave(e) {
    const record = this.getProp("record");
    this._adapter.notifyMouseLeave(record, e);
  }
};
export {
  TableRowFoundation as default
};
//# sourceMappingURL=@douyinfe_semi-foundation_lib_es_table_tableRowFoundation.js.map
