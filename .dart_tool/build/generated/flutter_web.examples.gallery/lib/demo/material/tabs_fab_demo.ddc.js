define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter_web__material.src__material__colors;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const theme = packages__flutter_web__material.src__material__theme;
  const card = packages__flutter_web__material.src__material__card;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const icons = packages__flutter_web__material.src__material__icons;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const ui = packages__flutter_web_ui__ui.ui;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const tabs_fab_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toUpperCase = dartx.toUpperCase;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ValueKeyOfColor = () => (ValueKeyOfColor = dart.constFn(key.ValueKey$(ui.Color)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let ValueKeyOfKey = () => (ValueKeyOfKey = dart.constFn(key.ValueKey$(key.Key)))();
  let _PageToTab = () => (_PageToTab = dart.constFn(dart.fnType(tabs.Tab, [tabs_fab_demo._Page])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOf_Page = () => (JSArrayOf_Page = dart.constFn(_interceptors.JSArray$(tabs_fab_demo._Page)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 26,
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
        [_Location_column]: 23,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 32,
        [EdgeInsets__right]: 32,
        [EdgeInsets__top]: 32,
        [EdgeInsets__left]: 32
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 96,
        [EdgeInsets__right]: 48,
        [EdgeInsets__top]: 48,
        [EdgeInsets__left]: 48
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 93,
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
        [_Location_column]: 22,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 20,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 11,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
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
        [Text_data]: "FAB per tab"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 48,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 11,
        [_Location_line]: 128,
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
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 55,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59413
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C66 || CT.C66
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 132,
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
        [_Location_column]: 15,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  tabs_fab_demo._Page = class _Page extends core.Object {
    get labelColor() {
      return this.colors != null ? this.colors.shade300 : colors.Colors.grey.shade300;
    }
    get fabDefined() {
      return this.colors != null && this.icon != null;
    }
    get fabColor() {
      return this.colors.shade400;
    }
    get fabIcon() {
      return new icon.Icon.new(this.icon, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    get fabKey() {
      return new (ValueKeyOfColor()).new(this.fabColor);
    }
  };
  (tabs_fab_demo._Page.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    this.label = label;
    this.colors = colors;
    this.icon = icon;
    ;
  }).prototype = tabs_fab_demo._Page.prototype;
  dart.addTypeTests(tabs_fab_demo._Page);
  dart.setGetterSignature(tabs_fab_demo._Page, () => ({
    __proto__: dart.getGetters(tabs_fab_demo._Page.__proto__),
    labelColor: ui.Color,
    fabDefined: core.bool,
    fabColor: ui.Color,
    fabIcon: icon.Icon,
    fabKey: key.Key
  }));
  dart.setLibraryUri(tabs_fab_demo._Page, "package:flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart");
  dart.setFieldSignature(tabs_fab_demo._Page, () => ({
    __proto__: dart.getFields(tabs_fab_demo._Page.__proto__),
    label: dart.finalFieldType(core.String),
    colors: dart.finalFieldType(colors.MaterialColor),
    icon: dart.finalFieldType(icon_data.IconData)
  }));
  tabs_fab_demo.TabsFabDemo = class TabsFabDemo extends framework.StatefulWidget {
    createState() {
      return new tabs_fab_demo._TabsFabDemoState.new();
    }
  };
  (tabs_fab_demo.TabsFabDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    tabs_fab_demo.TabsFabDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tabs_fab_demo.TabsFabDemo.prototype;
  dart.addTypeTests(tabs_fab_demo.TabsFabDemo);
  dart.setMethodSignature(tabs_fab_demo.TabsFabDemo, () => ({
    __proto__: dart.getMethods(tabs_fab_demo.TabsFabDemo.__proto__),
    createState: dart.fnType(tabs_fab_demo._TabsFabDemoState, [])
  }));
  dart.setLibraryUri(tabs_fab_demo.TabsFabDemo, "package:flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart");
  dart.defineLazy(tabs_fab_demo.TabsFabDemo, {
    /*tabs_fab_demo.TabsFabDemo.routeName*/get routeName() {
      return "/material/tabs-fab";
    }
  });
  const _scaffoldKey = dart.privateName(tabs_fab_demo, "_scaffoldKey");
  const _controller = dart.privateName(tabs_fab_demo, "_controller");
  const _selectedPage = dart.privateName(tabs_fab_demo, "_selectedPage");
  const _extendedButtons = dart.privateName(tabs_fab_demo, "_extendedButtons");
  const _handleTabSelection = dart.privateName(tabs_fab_demo, "_handleTabSelection");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C3;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  const _showExplanatoryText = dart.privateName(tabs_fab_demo, "_showExplanatoryText");
  let C16;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  let C35;
  let C34;
  let C33;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C40;
  let C39;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C48;
  let C47;
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
  let C54;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C63;
  let C62;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C66;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C65;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C75;
  let C72;
  let C71;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(tabs_fab_demo.TabsFabDemo) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(tabs_fab_demo.TabsFabDemo)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(tabs_fab_demo.TabsFabDemo));
  tabs_fab_demo._TabsFabDemoState = class _TabsFabDemoState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new tab_controller.TabController.new({vsync: this, length: tabs_fab_demo._allPages[$length]});
      this[_controller].addListener(dart.bind(this, _handleTabSelection));
      this[_selectedPage] = tabs_fab_demo._allPages[$_get](0);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_handleTabSelection]() {
      this.setState(dart.fn(() => {
        this[_selectedPage] = tabs_fab_demo._allPages[$_get](this[_controller].index);
      }, VoidToNull()));
    }
    [_showExplanatoryText]() {
      this[_scaffoldKey].currentState.showBottomSheet(core.Null, dart.fn(context => new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({color: theme.Theme.of(context).dividerColor})})}), child: new basic.Padding.new({padding: C3 || CT.C3, child: new text.Text.new(tabs_fab_demo._explanatoryText, {style: theme.Theme.of(context).textTheme.subhead, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), BuildContextToContainer()));
    }
    buildTabView(page) {
      return new basic.Builder.new({builder: dart.fn(context => new container.Container.new({key: new (ValueKeyOfString()).new(page.label), padding: C16 || CT.C16, child: new card.Card.new({child: new basic.Center.new({child: new text.Text.new(page.label, {style: new text_style.TextStyle.new({color: page.labelColor, fontSize: 32.0}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), BuildContextToContainer()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
    buildFloatingActionButton(page) {
      if (!dart.test(page.fabDefined)) return null;
      if (dart.test(this[_extendedButtons])) {
        return new floating_action_button.FloatingActionButton.extended({key: new (ValueKeyOfKey()).new(page.fabKey), tooltip: "Show explanation", backgroundColor: page.fabColor, icon: page.fabIcon, label: new text.Text.new(page.label[$toUpperCase](), {$creationLocationd_0dea112b090073317d4: C36 || CT.C36}), onPressed: dart.bind(this, _showExplanatoryText), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
      }
      return new floating_action_button.FloatingActionButton.new({key: page.fabKey, tooltip: "Show explanation", backgroundColor: page.fabColor, child: page.fabIcon, onPressed: dart.bind(this, _showExplanatoryText), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C54 || CT.C54, bottom: new tabs.TabBar.new({controller: this[_controller], tabs: tabs_fab_demo._allPages[$map](framework.Widget, dart.fn(page => new tabs.Tab.new({text: page.label[$toUpperCase](), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), _PageToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/tabs-fab", {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new icon_button.IconButton.new({icon: C65 || CT.C65, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_extendedButtons] = !dart.test(this[_extendedButtons]);
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C67 || CT.C67})]), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), floatingActionButton: this.buildFloatingActionButton(this[_selectedPage]), body: new tabs.TabBarView.new({controller: this[_controller], children: tabs_fab_demo._allPages[$map](framework.Widget, dart.bind(this, 'buildTabView'))[$toList](), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (tabs_fab_demo._TabsFabDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_controller] = null;
    this[_selectedPage] = null;
    this[_extendedButtons] = false;
    tabs_fab_demo._TabsFabDemoState.__proto__.new.call(this);
    ;
  }).prototype = tabs_fab_demo._TabsFabDemoState.prototype;
  dart.addTypeTests(tabs_fab_demo._TabsFabDemoState);
  dart.setMethodSignature(tabs_fab_demo._TabsFabDemoState, () => ({
    __proto__: dart.getMethods(tabs_fab_demo._TabsFabDemoState.__proto__),
    [_handleTabSelection]: dart.fnType(dart.void, []),
    [_showExplanatoryText]: dart.fnType(dart.void, []),
    buildTabView: dart.fnType(framework.Widget, [tabs_fab_demo._Page]),
    buildFloatingActionButton: dart.fnType(framework.Widget, [tabs_fab_demo._Page]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tabs_fab_demo._TabsFabDemoState, "package:flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart");
  dart.setFieldSignature(tabs_fab_demo._TabsFabDemoState, () => ({
    __proto__: dart.getFields(tabs_fab_demo._TabsFabDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_controller]: dart.fieldType(tab_controller.TabController),
    [_selectedPage]: dart.fieldType(tabs_fab_demo._Page),
    [_extendedButtons]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(tabs_fab_demo, {
    /*tabs_fab_demo._explanatoryText*/get _explanatoryText() {
      return "When the Scaffold's floating action button changes, the new button fades and turns into view. In this demo, changing tabs can cause the app to be rebuilt with a FloatingActionButton that the Scaffold distinguishes from the others by its key.";
    },
    /*tabs_fab_demo._allPages*/get _allPages() {
      return JSArrayOf_Page().of([new tabs_fab_demo._Page.new({label: "Blue", colors: colors.Colors.indigo, icon: icons.Icons.add}), new tabs_fab_demo._Page.new({label: "Eco", colors: colors.Colors.green, icon: icons.Icons.create}), new tabs_fab_demo._Page.new({label: "No"}), new tabs_fab_demo._Page.new({label: "Teal", colors: colors.Colors.teal, icon: icons.Icons.add}), new tabs_fab_demo._Page.new({label: "Red", colors: colors.Colors.red, icon: icons.Icons.create})]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo", {
    "package:flutter_web.examples.gallery/demo/material/tabs_fab_demo.dart": tabs_fab_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tabs_fab_demo.dart"],"names":[],"mappings":"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","file":"tabs_fab_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__tabs_fab_demo: tabs_fab_demo
  };
});

//# sourceMappingURL=tabs_fab_demo.ddc.js.map
