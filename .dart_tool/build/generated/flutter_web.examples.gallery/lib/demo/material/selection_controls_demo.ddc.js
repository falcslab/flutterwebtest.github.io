define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const material = packages__flutter_web__material.src__material__material;
  const colors = packages__flutter_web__material.src__material__colors;
  const divider = packages__flutter_web__material.src__material__divider;
  const checkbox = packages__flutter_web__material.src__material__checkbox;
  const radio = packages__flutter_web__material.src__material__radio;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const selection_controls_demo = Object.create(dart.library);
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let RadioOfint = () => (RadioOfint = dart.constFn(radio.Radio$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.2,
        [Alignment_x]: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tristate",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: checkbox.Checkbox.prototype,
        [Widget_key]: null,
        [Checkbox_materialTapTargetSize]: null,
        [Checkbox_tristate]: false,
        [Checkbox_activeColor]: null,
        [Checkbox_onChanged]: null,
        [Checkbox_value]: true
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: checkbox.Checkbox.prototype,
        [Widget_key]: null,
        [Checkbox_materialTapTargetSize]: null,
        [Checkbox_tristate]: false,
        [Checkbox_activeColor]: null,
        [Checkbox_onChanged]: null,
        [Checkbox_value]: false
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: checkbox.Checkbox.prototype,
        [Widget_key]: null,
        [Checkbox_materialTapTargetSize]: null,
        [Checkbox_tristate]: true,
        [Checkbox_activeColor]: null,
        [Checkbox_onChanged]: null,
        [Checkbox_value]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], framework.Widget);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 47,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 55,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 47,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: RadioOfint().prototype,
        [Widget_key]: null,
        [Radio_materialTapTargetSize]: null,
        [Radio_activeColor]: null,
        [Radio_onChanged]: null,
        [Radio_groupValue]: 0,
        [Radio_value]: 0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: RadioOfint().prototype,
        [Widget_key]: null,
        [Radio_materialTapTargetSize]: null,
        [Radio_activeColor]: null,
        [Radio_onChanged]: null,
        [Radio_groupValue]: 0,
        [Radio_value]: 1
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: RadioOfint().prototype,
        [Widget_key]: null,
        [Radio_materialTapTargetSize]: null,
        [Radio_activeColor]: null,
        [Radio_onChanged]: null,
        [Radio_groupValue]: 0,
        [Radio_value]: 2
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], framework.Widget);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 47,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 55,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.dart"
      });
    }
  });
  selection_controls_demo.SelectionControlsDemo = class SelectionControlsDemo extends framework.StatefulWidget {
    createState() {
      return new selection_controls_demo._SelectionControlsDemoState.new();
    }
  };
  (selection_controls_demo.SelectionControlsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    selection_controls_demo.SelectionControlsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_controls_demo.SelectionControlsDemo.prototype;
  dart.addTypeTests(selection_controls_demo.SelectionControlsDemo);
  dart.setMethodSignature(selection_controls_demo.SelectionControlsDemo, () => ({
    __proto__: dart.getMethods(selection_controls_demo.SelectionControlsDemo.__proto__),
    createState: dart.fnType(selection_controls_demo._SelectionControlsDemoState, [])
  }));
  dart.setLibraryUri(selection_controls_demo.SelectionControlsDemo, "package:flutter_web.examples.gallery/demo/material/selection_controls_demo.dart");
  dart.defineLazy(selection_controls_demo.SelectionControlsDemo, {
    /*selection_controls_demo.SelectionControlsDemo.routeName*/get routeName() {
      return "/material/selection";
    }
  });
  const _scaffoldKey = dart.privateName(selection_controls_demo, "_scaffoldKey");
  const _buildContents = dart.privateName(selection_controls_demo, "_buildContents");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C3;
  let C2;
  let C7;
  let C8;
  let C6;
  let C5;
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C26;
  let C24;
  let C23;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Checkbox_materialTapTargetSize = dart.privateName(checkbox, "Checkbox.materialTapTargetSize");
  const Checkbox_tristate = dart.privateName(checkbox, "Checkbox.tristate");
  const Checkbox_activeColor = dart.privateName(checkbox, "Checkbox.activeColor");
  const Checkbox_onChanged = dart.privateName(checkbox, "Checkbox.onChanged");
  const Checkbox_value = dart.privateName(checkbox, "Checkbox.value");
  let C28;
  let C29;
  let C30;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C47;
  let C44;
  let C43;
  let C50;
  let C51;
  let C52;
  let C49;
  let C48;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C59;
  let C58;
  const Radio_materialTapTargetSize = dart.privateName(radio, "Radio.materialTapTargetSize");
  const Radio_activeColor = dart.privateName(radio, "Radio.activeColor");
  const Radio_onChanged = dart.privateName(radio, "Radio.onChanged");
  const Radio_groupValue = dart.privateName(radio, "Radio.groupValue");
  const Radio_value = dart.privateName(radio, "Radio.value");
  let C63;
  let C64;
  let C65;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C75;
  let C74;
  selection_controls_demo._SelectionControlsDemoState = class _SelectionControlsDemoState extends framework.State$(selection_controls_demo.SelectionControlsDemo) {
    handleRadioValueChanged(value) {
      this.setState(dart.fn(() => {
        this.radioValue = value;
      }, VoidToNull()));
    }
    build(context) {
      return demo.wrapScaffold("Selection Controls", context, this[_scaffoldKey], this[_buildContents](), "/material/selection");
    }
    [_buildContents]() {
      return new material.Material.new({color: colors.Colors.white, child: new basic.Column.new({children: JSArrayOfWidget().of([this.buildCheckbox(), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), this.buildRadio()]), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
    buildCheckbox() {
      return new basic.Align.new({alignment: C9 || CT.C9, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new checkbox.Checkbox.new({value: this.checkboxValueA, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this.checkboxValueA = value;
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new checkbox.Checkbox.new({value: this.checkboxValueB, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this.checkboxValueB = value;
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new checkbox.Checkbox.new({value: this.checkboxValueC, tristate: true, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this.checkboxValueC = value;
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: C27 || CT.C27, $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
    buildRadio() {
      return new basic.Align.new({alignment: C9 || CT.C9, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new (RadioOfint()).new({value: 0, groupValue: this.radioValue, onChanged: dart.bind(this, 'handleRadioValueChanged'), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), new (RadioOfint()).new({value: 1, groupValue: this.radioValue, onChanged: dart.bind(this, 'handleRadioValueChanged'), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new (RadioOfint()).new({value: 2, groupValue: this.radioValue, onChanged: dart.bind(this, 'handleRadioValueChanged'), $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: C62 || CT.C62, $creationLocationd_0dea112b090073317d4: C66 || CT.C66})]), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
  };
  (selection_controls_demo._SelectionControlsDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this.checkboxValueA = true;
    this.checkboxValueB = false;
    this.checkboxValueC = null;
    this.radioValue = 0;
    selection_controls_demo._SelectionControlsDemoState.__proto__.new.call(this);
    ;
  }).prototype = selection_controls_demo._SelectionControlsDemoState.prototype;
  dart.addTypeTests(selection_controls_demo._SelectionControlsDemoState);
  dart.setMethodSignature(selection_controls_demo._SelectionControlsDemoState, () => ({
    __proto__: dart.getMethods(selection_controls_demo._SelectionControlsDemoState.__proto__),
    handleRadioValueChanged: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContents]: dart.fnType(framework.Widget, []),
    buildCheckbox: dart.fnType(framework.Widget, []),
    buildRadio: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(selection_controls_demo._SelectionControlsDemoState, "package:flutter_web.examples.gallery/demo/material/selection_controls_demo.dart");
  dart.setFieldSignature(selection_controls_demo._SelectionControlsDemoState, () => ({
    __proto__: dart.getFields(selection_controls_demo._SelectionControlsDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    checkboxValueA: dart.fieldType(core.bool),
    checkboxValueB: dart.fieldType(core.bool),
    checkboxValueC: dart.fieldType(core.bool),
    radioValue: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/selection_controls_demo", {
    "package:flutter_web.examples.gallery/demo/material/selection_controls_demo.dart": selection_controls_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_controls_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAW+C;IAA6B;;;;;;EAC5E;;;;;;;;MAHsB,uDAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4BAaI;AAG7B,MAFF,cAAS;AACW,QAAlB,kBAAa,KAAK;;IAEtB;UAG0B;AACxB,YAAO,mBAAa,sBAAsB,OAAO,EAAE,oBAC/C;IACN;;AAGE,YAAO,mCACW,4BACH,gCACW,sBAAC,sBAAiB,gFAAW;IACzD;;AAGE,YAAO,qDAEI,oCAAkC,iCAAuB,sBAC9D,iCAC6B,iCACT,sBAChB,kCACS,gCACI,QAAM;AAGb,oBAFF,cAAS;AACe,sBAAtB,sBAAiB,KAAK;;6FAI5B,kCACS,gCACI,QAAM;AAGb,oBAFF,cAAS;AACe,sBAAtB,sBAAiB,KAAK;;6FAI5B,kCACS,+BACG,iBACC,QAAM;AAGb,oBAFF,cAAS;AACe,sBAAtB,sBAAiB,KAAK;;wJAMhC,iCAA+B;IAOvC;;AAGE,YAAO,qDAEI,oCAAkC,iCAAuB,sBAC9D,iCAA+B,iCAAuB,sBACpD,+BACW,eACK,sCACD,2FACf,+BACW,eACK,sCACD,2FACf,+BACW,eACK,sCACD,sJAGjB,iCAA+B;IAMvC;;;IA9F+B,qBAAe;IAEzC,sBAAiB;IACjB,sBAAiB;IACjB;IACD,kBAAa;;;EA0FnB","file":"selection_controls_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__selection_controls_demo: selection_controls_demo
  };
});

//# sourceMappingURL=selection_controls_demo.ddc.js.map
