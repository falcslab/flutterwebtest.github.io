define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const text = packages__flutter_web__animation.src__widgets__text;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const icons = packages__flutter_web__material.src__material__icons;
  const theme = packages__flutter_web__material.src__material__theme;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const material_button = packages__flutter_web__material.src__material__material_button;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const material_button_demo = Object.create(dart.library);
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToIconData = () => (VoidToIconData = dart.constFn(dart.fnType(icon_data.IconData, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
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
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Material buttons"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 55,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 68,
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
        [_Location_column]: 18,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart"
      });
    }
  });
  const _scaffoldKey = dart.privateName(material_button_demo, "_scaffoldKey");
  const _name = dart.privateName(platform, "_name");
  let C0;
  let C1;
  let C2;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C10;
  let C11;
  let C7;
  let C6;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C12;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  const _buildButtons = dart.privateName(material_button_demo, "_buildButtons");
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C31;
  let C30;
  let C29;
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C59;
  let C56;
  let C55;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C67;
  let C64;
  let C63;
  let C70;
  let C69;
  let C68;
  let C73;
  let C74;
  let C75;
  let C72;
  let C71;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  let C85;
  let C84;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C93;
  let C92;
  material_button_demo.ButtonsDemo = class ButtonsDemo extends framework.StatelessWidget {
    build(context) {
      function _backIcon() {
        switch (theme.Theme.of(context).platform) {
          case C0 || CT.C0:
          case C1 || CT.C1:
          {
            return icons.Icons.arrow_back;
          }
          case C2 || CT.C2:
          {
            return icons.Icons.arrow_back_ios;
          }
        }
        if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/material_button_demo.dart", 23, 14, "false");
        return null;
      }
      dart.fn(_backIcon, VoidToIconData());
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({leading: new icon_button.IconButton.new({icon: new icon.Icon.new(_backIcon(), {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), alignment: alignment.Alignment.centerLeft, tooltip: "Back", onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), title: C12 || CT.C12, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/buttons", {$creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), body: new basic.Center.new({child: this[_buildButtons](), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
    [_buildButtons]() {
      return new basic.Column.new({children: JSArrayOfWidget().of([material_button_demo.pad(new material_button.MaterialButton.new({onPressed: dart.fn(() => {
              core.print("MaterialButton pressed");
            }, VoidToNull()), elevation: 3.0, child: new text.Text.new("MaterialButton", {$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32})), material_button_demo.pad(new flat_button.FlatButton.new({onPressed: dart.fn(() => {
              core.print("FlatButton pressed");
            }, VoidToNull()), child: new text.Text.new("FlatButton", {$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 0.0, child: new text.Text.new("RaisedButton 0.0", {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 1.0, child: new text.Text.new("RaisedButton 1.0", {$creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 2.0, child: new text.Text.new("RaisedButton 2.0", {$creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 3.0, child: new text.Text.new("RaisedButton 3.0", {$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 4.0, child: new text.Text.new("RaisedButton 4.0", {$creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79})), material_button_demo.pad(new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            }, VoidToNull()), elevation: 8.0, child: new text.Text.new("RaisedButton 8.0", {$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}))]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92});
    }
  };
  (material_button_demo.ButtonsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    material_button_demo.ButtonsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = material_button_demo.ButtonsDemo.prototype;
  dart.addTypeTests(material_button_demo.ButtonsDemo);
  dart.setMethodSignature(material_button_demo.ButtonsDemo, () => ({
    __proto__: dart.getMethods(material_button_demo.ButtonsDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildButtons]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(material_button_demo.ButtonsDemo, "package:flutter_web.examples.gallery/demo/material/material_button_demo.dart");
  dart.setFieldSignature(material_button_demo.ButtonsDemo, () => ({
    __proto__: dart.getFields(material_button_demo.ButtonsDemo.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  dart.defineLazy(material_button_demo.ButtonsDemo, {
    /*material_button_demo.ButtonsDemo.routeName*/get routeName() {
      return "/material/buttons";
    }
  });
  let C97;
  let C98;
  let C96;
  let C95;
  material_button_demo.pad = function pad(widget) {
    return new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: widget, $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/material_button_demo", {
    "package:flutter_web.examples.gallery/demo/material/material_button_demo.dart": material_button_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_button_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACxB,eAAS;AACP,gBAAc,AAAY,eAAT,OAAO;;;;AAGpB,kBAAa;;;;AAEb,kBAAa;;;AAEjB,aAAO;AACP,cAAO;;;AAGT,YAAO,iCACA,4BACG,iCACG,sCACD,kBAAK,AAAS,SAAA,uEACC,yCACZ,mBACE;AACa,cAAZ,qCAAI,OAAO;oHAIR,sBACf,6LAGE,6BACG;IAGb;;AAGE,YAAO,iCACK,sBACR,yBAAI,mDACS;AACsB,cAA/B,WAAM;yCAEG,YACJ,kBAAK,sIAEd,yBAAI,2CACS;AACkB,cAA3B,WAAM;qCAED,kBAAK,kIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK,wIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK,wIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK,wIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK,wIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK,wIAEd,yBAAI,+CACS;yCACA,YACJ,kBAAK;IAIpB;;;;IAtF+B,qBAAe;;;EAuFhD;;;;;;;;;;;;;MAxFsB,0CAAS;;;;;;;;0CA0FZ;AAAW,2CACJ,+BAAI,cACjB,MAAM;EACd","file":"material_button_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__material_button_demo: material_button_demo
  };
});

//# sourceMappingURL=material_button_demo.ddc.js.map
