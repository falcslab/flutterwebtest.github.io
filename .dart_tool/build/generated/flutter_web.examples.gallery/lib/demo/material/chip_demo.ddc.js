define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const material = packages__flutter_web__material.src__material__material;
  const chip = packages__flutter_web__material.src__material__chip;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const colors = packages__flutter_web__material.src__material__colors;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const chip_demo = Object.create(dart.library);
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "avatar",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/chip_demo.dart"
      });
    }
  });
  chip_demo.ChipDemo = class ChipDemo extends framework.StatefulWidget {
    createState() {
      return new chip_demo._ChipDemoState.new();
    }
  };
  (chip_demo.ChipDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    chip_demo.ChipDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chip_demo.ChipDemo.prototype;
  dart.addTypeTests(chip_demo.ChipDemo);
  dart.setMethodSignature(chip_demo.ChipDemo, () => ({
    __proto__: dart.getMethods(chip_demo.ChipDemo.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(chip_demo.ChipDemo, "package:flutter_web.examples.gallery/demo/material/chip_demo.dart");
  dart.defineLazy(chip_demo.ChipDemo, {
    /*chip_demo.ChipDemo.routeName*/get routeName() {
      return "/material/chip";
    }
  });
  const _filterChipSelected = dart.privateName(chip_demo, "_filterChipSelected");
  const _hasAvatar = dart.privateName(chip_demo, "_hasAvatar");
  const _scaffoldKey = dart.privateName(chip_demo, "_scaffoldKey");
  const _buildContents = dart.privateName(chip_demo, "_buildContents");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C54;
  let C55;
  let C52;
  let C51;
  let C58;
  let C57;
  let C56;
  let C61;
  let C60;
  let C59;
  chip_demo._ChipDemoState = class _ChipDemoState extends framework.State$(chip_demo.ChipDemo) {
    build(context) {
      return demo.wrapScaffold("Chip Demo", context, this[_scaffoldKey], this[_buildContents](), "/material/chip");
    }
    [_buildContents]() {
      return new material.Material.new({child: new basic.Column.new({children: JSArrayOfWidget().of([chip_demo.addPadding(new chip.Chip.new({label: new text.Text.new("Chip", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3})), chip_demo.addPadding(new chip.InputChip.new({label: new text.Text.new("InputChip", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})), chip_demo.addPadding(new chip.ChoiceChip.new({label: new text.Text.new("Selected ChoiceChip", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), selected: true, $creationLocationd_0dea112b090073317d4: C15 || CT.C15})), chip_demo.addPadding(new chip.ChoiceChip.new({label: new text.Text.new("Deselected ChoiceChip", {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), selected: false, $creationLocationd_0dea112b090073317d4: C22 || CT.C22})), chip_demo.addPadding(new chip.FilterChip.new({label: new text.Text.new("FilterChip", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), selected: this[_filterChipSelected], onSelected: dart.fn(newValue => {
                this.setState(dart.fn(() => {
                  this[_filterChipSelected] = newValue;
                }, VoidToNull()));
              }, boolToNull()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29})), chip_demo.addPadding(new chip.ActionChip.new({label: new text.Text.new("ActionChip", {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37})), chip_demo.addPadding(new chip.ActionChip.new({label: new text.Text.new("Chip with avatar", {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), avatar: dart.test(this[_hasAvatar]) ? new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.amber, child: new text.Text.new("Z", {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}) : null, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_hasAvatar] = !dart.test(this[_hasAvatar]);
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}))]), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59});
    }
  };
  (chip_demo._ChipDemoState.new = function() {
    this[_filterChipSelected] = false;
    this[_hasAvatar] = true;
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    chip_demo._ChipDemoState.__proto__.new.call(this);
    ;
  }).prototype = chip_demo._ChipDemoState.prototype;
  dart.addTypeTests(chip_demo._ChipDemoState);
  dart.setMethodSignature(chip_demo._ChipDemoState, () => ({
    __proto__: dart.getMethods(chip_demo._ChipDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContents]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(chip_demo._ChipDemoState, "package:flutter_web.examples.gallery/demo/material/chip_demo.dart");
  dart.setFieldSignature(chip_demo._ChipDemoState, () => ({
    __proto__: dart.getFields(chip_demo._ChipDemoState.__proto__),
    [_filterChipSelected]: dart.fieldType(core.bool),
    [_hasAvatar]: dart.fieldType(core.bool),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  let C64;
  let C65;
  let C63;
  let C62;
  chip_demo.addPadding = function addPadding(widget) {
    return new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: widget, $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/chip_demo", {
    "package:flutter_web.examples.gallery/demo/material/chip_demo.dart": chip_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chip_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUyC;IAAgB;;;;;;EACzD;;;;;;;;MAHe,4BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYI;AACxB,YAAO,mBAAa,aAAa,OAAO,EAAE,oBAAc;IAE1D;;AAGE,YAAO,mCACI,gCACC,sBACR,qBAAW,0BACF,kBAAK,wHAEd,qBAAW,+BACF,kBAAK,6HAEd,qBAAW,gCACF,kBAAK,2FACF,gEAEZ,qBAAW,gCACF,kBAAK,6FACF,iEAEZ,qBAAW,gCACF,kBAAK,kFACF,uCACE,QAAM;AAGd,gBAFF,cAAS;AACuB,kBAA9B,4BAAsB,QAAQ;;0FAIpC,qBAAW,gCACF,kBAAK,mFACD;0FAEb,qBAAW,gCACF,kBAAK,gGACJ,oBACF,qDAC0B,4BACjB,kBAAK,yHAEd,iBACK;AAGP,gBAFF,cAAS;AACiB,kBAAxB,mBAAa,WAAC;;;IAM1B;;;IA1DK,4BAAsB;IACtB,mBAAa;IAEa,qBAAe;;;EAwDhD;;;;;;;;;;;;;;;;;;6CAE0B;AAAW,2CACX,+BAAI,cACjB,MAAM;EACd","file":"chip_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__chip_demo: chip_demo
  };
});

//# sourceMappingURL=chip_demo.ddc.js.map
