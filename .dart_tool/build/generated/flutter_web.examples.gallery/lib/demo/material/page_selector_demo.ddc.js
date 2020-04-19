define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const theme = packages__flutter_web__material.src__material__theme;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const card = packages__flutter_web__material.src__material__card;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon_theme = packages__flutter_web__animation.src__widgets__icon_theme;
  const text = packages__flutter_web__animation.src__widgets__text;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const icon_theme_data = packages__flutter_web__src__animation__animation.src__widgets__icon_theme_data;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const page_selector_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $clamp = dartx.clamp;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let IconToContainer = () => (IconToContainer = dart.constFn(dart.fnType(container.Container, [icon.Icon])))();
  let JSArrayOfIcon = () => (JSArrayOfIcon = dart.constFn(_interceptors.JSArray$(icon.Icon)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58827
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 33,
        [_Location_line]: 40,
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
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58828
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
        [_Location_column]: 21,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 21,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 26,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 18,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 12,
        [EdgeInsets__right]: 12,
        [EdgeInsets__top]: 12,
        [EdgeInsets__left]: 12
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 61,
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
        [_Location_column]: 28,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 59,
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
        [_Location_column]: 24,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 50,
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
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
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
        [Text_data]: "Page selector"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 59,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 90,
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
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icons",
        [_Location_column]: 30,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 92,
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
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/page_selector_demo.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59512
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Event",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C77 || CT.C77
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59530
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Home",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C79 || CT.C79
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59481
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Android",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C81 || CT.C81
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59477
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Alarm",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C83 || CT.C83
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59516
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Face",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C85 || CT.C85
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59540
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Language",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C87 || CT.C87
      });
    }
  });
  const _handleArrowButtonPress = dart.privateName(page_selector_demo, "_handleArrowButtonPress");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
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
  let C2;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  let C11;
  let C10;
  let C9;
  let C13;
  let C12;
  let C16;
  let C17;
  let C18;
  let C19;
  let C15;
  let C14;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C25;
  let C24;
  let C28;
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C56;
  let C53;
  let C52;
  const icons$ = dart.privateName(page_selector_demo, "_PageSelector.icons");
  page_selector_demo._PageSelector = class _PageSelector extends framework.StatelessWidget {
    get icons() {
      return this[icons$];
    }
    set icons(value) {
      super.icons = value;
    }
    [_handleArrowButtonPress](context, delta) {
      let controller = tab_controller.DefaultTabController.of(context);
      if (!dart.test(controller.indexIsChanging)) controller.animateTo(dart.asInt((dart.notNull(controller.index) + dart.notNull(delta))[$clamp](0, dart.notNull(this.icons[$length]) - 1)));
    }
    build(context) {
      let controller = tab_controller.DefaultTabController.of(context);
      let color = theme.Theme.of(context).accentColor;
      return new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({margin: C0 || CT.C0, child: new basic.Row.new({children: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C1 || CT.C1, color: color, onPressed: dart.fn(() => {
                      this[_handleArrowButtonPress](context, -1);
                    }, VoidToNull()), tooltip: "Page back", $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new tabs.TabPageSelector.new({controller: controller, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new icon_button.IconButton.new({icon: C12 || CT.C12, color: color, onPressed: dart.fn(() => {
                      this[_handleArrowButtonPress](context, 1);
                    }, VoidToNull()), tooltip: "Page forward", $creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new basic.Expanded.new({child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({size: 128.0, color: color}), child: new tabs.TabBarView.new({children: this.icons[$map](framework.Widget, dart.fn(icon => new container.Container.new({padding: C28 || CT.C28, child: new card.Card.new({child: new basic.Center.new({child: icon, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), IconToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46})]), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
    }
  };
  (page_selector_demo._PageSelector.new = function(opts) {
    let icons = opts && 'icons' in opts ? opts.icons : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icons$] = icons;
    page_selector_demo._PageSelector.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_selector_demo._PageSelector.prototype;
  dart.addTypeTests(page_selector_demo._PageSelector);
  dart.setMethodSignature(page_selector_demo._PageSelector, () => ({
    __proto__: dart.getMethods(page_selector_demo._PageSelector.__proto__),
    [_handleArrowButtonPress]: dart.fnType(dart.void, [framework.BuildContext, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(page_selector_demo._PageSelector, "package:flutter_web.examples.gallery/demo/material/page_selector_demo.dart");
  dart.setFieldSignature(page_selector_demo._PageSelector, () => ({
    __proto__: dart.getFields(page_selector_demo._PageSelector.__proto__),
    icons: dart.finalFieldType(core.List$(icon.Icon))
  }));
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
  let C57;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C66;
  let C65;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C73;
  let C72;
  let C77;
  let C76;
  let C79;
  let C78;
  let C81;
  let C80;
  let C83;
  let C82;
  let C85;
  let C84;
  let C87;
  let C86;
  page_selector_demo.PageSelectorDemo = class PageSelectorDemo extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C57 || CT.C57, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/page-selector", {$creationLocationd_0dea112b090073317d4: C58 || CT.C58})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), body: new tab_controller.DefaultTabController.new({length: page_selector_demo.PageSelectorDemo.icons[$length], child: new page_selector_demo._PageSelector.new({icons: page_selector_demo.PageSelectorDemo.icons, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
    }
  };
  (page_selector_demo.PageSelectorDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    page_selector_demo.PageSelectorDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_selector_demo.PageSelectorDemo.prototype;
  dart.addTypeTests(page_selector_demo.PageSelectorDemo);
  dart.setMethodSignature(page_selector_demo.PageSelectorDemo, () => ({
    __proto__: dart.getMethods(page_selector_demo.PageSelectorDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(page_selector_demo.PageSelectorDemo, "package:flutter_web.examples.gallery/demo/material/page_selector_demo.dart");
  dart.defineLazy(page_selector_demo.PageSelectorDemo, {
    /*page_selector_demo.PageSelectorDemo.routeName*/get routeName() {
      return "/material/page-selector";
    },
    /*page_selector_demo.PageSelectorDemo.icons*/get icons() {
      return JSArrayOfIcon().of([C76 || CT.C76, C78 || CT.C78, C80 || CT.C80, C82 || CT.C82, C84 || CT.C84, C86 || CT.C86]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/page_selector_demo", {
    "package:flutter_web.examples.gallery/demo/material/page_selector_demo.dart": page_selector_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page_selector_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWmB;;;;;;8BAEyB,SAAa;AACjC,uBAAkC,uCAAG,OAAO;AAChE,qBAAK,AAAW,UAAD,mBACb,AACK,AAAgE,UAD3D,sBACgC,CAAT,aAAjB,AAAW,UAAD,uBAAS,KAAK,WAAQ,GAAgB,aAAb,AAAM,uBAAS;IACtE;UAG0B;AACJ,uBAAkC,uCAAG,OAAO;AACpD,kBAAc,AAAY,eAAT,OAAO;AACpC,YAAO,kCACA,eACG,cACD,gCACa,sBAChB,yDAEW,6BAAsB,sBAC3B,0DAEW,KAAK,aACD;AAC2B,sBAApC,8BAAwB,OAAO,EAAE,CAAC;+CAE3B,oEACb,0CAA4B,UAAU,yDACtC,4DAEW,KAAK,aACD;AAC0B,sBAAnC,8BAAwB,OAAO,EAAE;+CAE1B,8FACyB,uJAC5C,+BACS,oCACC,6CACE,cACC,KAAK,WAEP,mCACO,AAAM,AASjB,mCAT6B,QAAM,QAC7B,4DAEE,0BACE,6BACE,IAAI;IAU/B;;;QA7D0B;;;AAApB;;EAA2B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA4EP;AACxB,YAAO,oCACG,uDAEW,sBAAC,mMAEd,qDACI,AAAM,2DACP,iDAAqB;IAGlC;;;;;;EACF;;;;;;;;MAvBsB,6CAAS;;;MACL,yCAAK;YAAS","file":"page_selector_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__page_selector_demo: page_selector_demo
  };
});

//# sourceMappingURL=page_selector_demo.ddc.js.map
