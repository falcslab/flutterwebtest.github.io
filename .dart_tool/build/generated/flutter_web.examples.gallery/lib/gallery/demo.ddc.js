define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/cupertino/action_sheet', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web__src__cupertino__action_sheet, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const theme = packages__flutter_web__material.src__material__theme;
  const icons = packages__flutter_web__material.src__material__icons;
  const material = packages__flutter_web__material.src__material__material;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const button = packages__flutter_web__src__cupertino__action_sheet.src__cupertino__button;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const demo = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $addAll = dartx.addAll;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextToIconButton = () => (BuildContextToIconButton = dart.constFn(dart.fnType(icon_button.IconButton, [framework.BuildContext])))();
  let ComponentDemoTabDataToTab = () => (ComponentDemoTabDataToTab = dart.constFn(dart.fnType(tabs.Tab, [demo.ComponentDemoTabData])))();
  let ComponentDemoTabDataToSafeArea = () => (ComponentDemoTabDataToSafeArea = dart.constFn(dart.fnType(safe_area.SafeArea, [demo.ComponentDemoTabData])))();
  let VoidToMap = () => (VoidToMap = dart.constFn(dart.fnType(core.Map, [])))();
  let VoidToIconData = () => (VoidToIconData = dart.constFn(dart.fnType(icon_data.IconData, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 73,
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
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57391
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 81,
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
        [_Location_column]: 28,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 78,
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
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59503
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C13 || CT.C13
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 86,
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
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 56,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 13,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 96,
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
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 114,
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
        [_Location_column]: 30,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 113,
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
        [_Location_column]: 19,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "cupertino_icons",
        [IconData_fontFamily]: "CupertinoIcons",
        [IconData_codePoint]: 62439
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C71 || CT.C71
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 163,
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
        [_Location_column]: 15,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 57,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 7,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 34,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 5,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 5,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 5,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart"
      });
    }
  });
  const demoWidget$ = dart.privateName(demo, "ComponentDemoTabData.demoWidget");
  const exampleCodeTag$ = dart.privateName(demo, "ComponentDemoTabData.exampleCodeTag");
  const description$ = dart.privateName(demo, "ComponentDemoTabData.description");
  const tabName$ = dart.privateName(demo, "ComponentDemoTabData.tabName");
  const documentationUrl$ = dart.privateName(demo, "ComponentDemoTabData.documentationUrl");
  demo.ComponentDemoTabData = class ComponentDemoTabData extends core.Object {
    get demoWidget() {
      return this[demoWidget$];
    }
    set demoWidget(value) {
      super.demoWidget = value;
    }
    get exampleCodeTag() {
      return this[exampleCodeTag$];
    }
    set exampleCodeTag(value) {
      super.exampleCodeTag = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get tabName() {
      return this[tabName$];
    }
    set tabName(value) {
      super.tabName = value;
    }
    get documentationUrl() {
      return this[documentationUrl$];
    }
    set documentationUrl(value) {
      super.documentationUrl = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = demo.ComponentDemoTabData._check(other);
      return typedOther.tabName == this.tabName && typedOther.description == this.description && typedOther.documentationUrl == this.documentationUrl;
    }
    get hashCode() {
      return ui.hashValues(this.tabName, this.description, this.documentationUrl);
    }
  };
  (demo.ComponentDemoTabData.new = function(opts) {
    let demoWidget = opts && 'demoWidget' in opts ? opts.demoWidget : null;
    let exampleCodeTag = opts && 'exampleCodeTag' in opts ? opts.exampleCodeTag : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let tabName = opts && 'tabName' in opts ? opts.tabName : null;
    let documentationUrl = opts && 'documentationUrl' in opts ? opts.documentationUrl : null;
    this[demoWidget$] = demoWidget;
    this[exampleCodeTag$] = exampleCodeTag;
    this[description$] = description;
    this[tabName$] = tabName;
    this[documentationUrl$] = documentationUrl;
    ;
  }).prototype = demo.ComponentDemoTabData.prototype;
  dart.addTypeTests(demo.ComponentDemoTabData);
  dart.setMethodSignature(demo.ComponentDemoTabData, () => ({
    __proto__: dart.getMethods(demo.ComponentDemoTabData.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(demo.ComponentDemoTabData, "package:flutter_web.examples.gallery/gallery/demo.dart");
  dart.setFieldSignature(demo.ComponentDemoTabData, () => ({
    __proto__: dart.getFields(demo.ComponentDemoTabData.__proto__),
    demoWidget: dart.finalFieldType(framework.Widget),
    exampleCodeTag: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    tabName: dart.finalFieldType(core.String),
    documentationUrl: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(demo.ComponentDemoTabData, ['_equals']);
  dart.defineExtensionAccessors(demo.ComponentDemoTabData, ['hashCode']);
  const _showExampleCode = dart.privateName(demo, "_showExampleCode");
  const _showApiDocumentation = dart.privateName(demo, "_showApiDocumentation");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C4;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C3;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C10;
  let C9;
  let C13;
  let C12;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C34;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C44;
  let C43;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  const demos$ = dart.privateName(demo, "TabbedComponentDemoScaffold.demos");
  const title$ = dart.privateName(demo, "TabbedComponentDemoScaffold.title");
  const actions$ = dart.privateName(demo, "TabbedComponentDemoScaffold.actions");
  demo.TabbedComponentDemoScaffold = class TabbedComponentDemoScaffold extends framework.StatelessWidget {
    get demos() {
      return this[demos$];
    }
    set demos(value) {
      super.demos = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    [_showExampleCode](context) {
      let tag = this.demos[$_get](tab_controller.DefaultTabController.of(context).index).exampleCodeTag;
      if (tag != null) {
        dart.throw(new core.UnimplementedError.new());
      }
    }
    [_showApiDocumentation](context) {
      let url = this.demos[$_get](tab_controller.DefaultTabController.of(context).index).documentationUrl;
      if (url != null) {
      }
    }
    build(context) {
      let t0, t0$;
      return new tab_controller.DefaultTabController.new({length: this.demos[$length], child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), actions: (t0$ = (t0 = this.actions, t0 == null ? JSArrayOfWidget().of([]) : t0), t0$[$addAll](JSArrayOfWidget().of([new basic.Builder.new({builder: dart.fn(context => new icon_button.IconButton.new({icon: C3 || CT.C3, onPressed: dart.fn(() => this[_showApiDocumentation](context), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextToIconButton()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new basic.Builder.new({builder: dart.fn(context => new icon_button.IconButton.new({icon: C12 || CT.C12, tooltip: "Show example code", onPressed: dart.fn(() => this[_showExampleCode](context), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), BuildContextToIconButton()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19})])), t0$), bottom: new tabs.TabBar.new({isScrollable: true, tabs: this.demos[$map](framework.Widget, dart.fn(data => new tabs.Tab.new({text: data.tabName, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), ComponentDemoTabDataToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), body: new tabs.TabBarView.new({children: this.demos[$map](framework.Widget, dart.fn(demo => new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C34 || CT.C34, child: new text.Text.new(demo.description, {style: theme.Theme.of(context).textTheme.subhead, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new basic.Expanded.new({child: demo.demoWidget, $creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), ComponentDemoTabDataToSafeArea()))[$toList](), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
    }
  };
  (demo.TabbedComponentDemoScaffold.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let demos = opts && 'demos' in opts ? opts.demos : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[demos$] = demos;
    this[actions$] = actions;
    demo.TabbedComponentDemoScaffold.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = demo.TabbedComponentDemoScaffold.prototype;
  dart.addTypeTests(demo.TabbedComponentDemoScaffold);
  dart.setMethodSignature(demo.TabbedComponentDemoScaffold, () => ({
    __proto__: dart.getMethods(demo.TabbedComponentDemoScaffold.__proto__),
    [_showExampleCode]: dart.fnType(dart.void, [framework.BuildContext]),
    [_showApiDocumentation]: dart.fnType(dart.void, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(demo.TabbedComponentDemoScaffold, "package:flutter_web.examples.gallery/gallery/demo.dart");
  dart.setFieldSignature(demo.TabbedComponentDemoScaffold, () => ({
    __proto__: dart.getFields(demo.TabbedComponentDemoScaffold.__proto__),
    demos: dart.finalFieldType(core.List$(demo.ComponentDemoTabData)),
    title: dart.finalFieldType(core.String),
    actions: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C67;
  let C68;
  let C69;
  let C66;
  let C65;
  const documentationUrl = dart.privateName(demo, "MaterialDemoDocumentationButton.documentationUrl");
  demo.MaterialDemoDocumentationButton = class MaterialDemoDocumentationButton extends framework.StatelessWidget {
    get documentationUrl() {
      return this[documentationUrl];
    }
    set documentationUrl(value) {
      super.documentationUrl = value;
    }
    build(context) {
      return new icon_button.IconButton.new({icon: C3 || CT.C3, tooltip: "API documentation", onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
    }
  };
  (demo.MaterialDemoDocumentationButton.new = function(routeName, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[documentationUrl] = "todo";
    if (!("todo" !== null)) dart.assertFailed("A documentation URL was not specified for demo route " + dart.str(routeName) + " in kAllGalleryDemos", "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart", 129, 16, "'todo' != null");
    demo.MaterialDemoDocumentationButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = demo.MaterialDemoDocumentationButton.prototype;
  dart.addTypeTests(demo.MaterialDemoDocumentationButton);
  dart.setMethodSignature(demo.MaterialDemoDocumentationButton, () => ({
    __proto__: dart.getMethods(demo.MaterialDemoDocumentationButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(demo.MaterialDemoDocumentationButton, "package:flutter_web.examples.gallery/gallery/demo.dart");
  dart.setFieldSignature(demo.MaterialDemoDocumentationButton, () => ({
    __proto__: dart.getFields(demo.MaterialDemoDocumentationButton.__proto__),
    documentationUrl: dart.finalFieldType(core.String)
  }));
  let C71;
  let C70;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  const documentationUrl$0 = dart.privateName(demo, "CupertinoDemoDocumentationButton.documentationUrl");
  demo.CupertinoDemoDocumentationButton = class CupertinoDemoDocumentationButton extends framework.StatelessWidget {
    get documentationUrl() {
      return this[documentationUrl$0];
    }
    set documentationUrl(value) {
      super.documentationUrl = value;
    }
    build(context) {
      return new button.CupertinoButton.new({padding: edge_insets.EdgeInsets.zero, child: new basic.Semantics.new({label: "API documentation", child: C70 || CT.C70, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMap()), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
  };
  (demo.CupertinoDemoDocumentationButton.new = function(routeName, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[documentationUrl$0] = "todo";
    if (!("todo" !== null)) dart.assertFailed("A documentation URL was not specified for demo route " + dart.str(routeName) + " in kAllGalleryDemos", "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart", 180, 16, "'todo' != null");
    demo.CupertinoDemoDocumentationButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = demo.CupertinoDemoDocumentationButton.prototype;
  dart.addTypeTests(demo.CupertinoDemoDocumentationButton);
  dart.setMethodSignature(demo.CupertinoDemoDocumentationButton, () => ({
    __proto__: dart.getMethods(demo.CupertinoDemoDocumentationButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(demo.CupertinoDemoDocumentationButton, "package:flutter_web.examples.gallery/gallery/demo.dart");
  dart.setFieldSignature(demo.CupertinoDemoDocumentationButton, () => ({
    __proto__: dart.getFields(demo.CupertinoDemoDocumentationButton.__proto__),
    documentationUrl: dart.finalFieldType(core.String)
  }));
  const _name = dart.privateName(platform, "_name");
  let C81;
  let C82;
  let C83;
  let C86;
  let C85;
  let C84;
  let C89;
  let C90;
  let C91;
  let C92;
  let C88;
  let C87;
  let C95;
  let C94;
  let C93;
  let C98;
  let C97;
  let C96;
  let C101;
  let C102;
  let C103;
  let C100;
  let C99;
  let C106;
  let C105;
  let C104;
  let C109;
  let C108;
  let C107;
  let C112;
  let C113;
  let C114;
  let C111;
  let C110;
  demo.wrapScaffold = function wrapScaffold(title, context, key, child, routeName) {
    function _backIcon() {
      switch (theme.Theme.of(context).platform) {
        case C81 || CT.C81:
        case C82 || CT.C82:
        {
          return icons.Icons.arrow_back;
        }
        case C83 || CT.C83:
        {
          return icons.Icons.arrow_back_ios;
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demo.dart", 155, 12, "false");
      return null;
    }
    dart.fn(_backIcon, VoidToIconData());
    return new scaffold.Scaffold.new({key: key, appBar: new app_bar.AppBar.new({leading: new icon_button.IconButton.new({icon: new icon.Icon.new(_backIcon(), {$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), alignment: alignment.Alignment.centerLeft, tooltip: "Back", onPressed: dart.fn(() => {
            navigator.Navigator.pop(core.Object, context);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), title: new text.Text.new(title, {$creationLocationd_0dea112b090073317d4: C93 || CT.C93}), actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new(routeName, {$creationLocationd_0dea112b090073317d4: C96 || CT.C96})]), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), body: new material.Material.new({child: new basic.Center.new({child: child, $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/demo", {
    "package:flutter_web.examples.gallery/gallery/demo.dart": demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["demo.dart"],"names":[],"mappings":"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","file":"demo.ddc.js"}');
  // Exports:
  return {
    gallery__demo: demo
  };
});

//# sourceMappingURL=demo.ddc.js.map
