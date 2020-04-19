define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const colors = packages__flutter_web__material.src__material__colors;
  const card = packages__flutter_web__material.src__material__card;
  const button_theme = packages__flutter_web__material.src__material__button_theme;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const paragraph = packages__flutter_web__animation.src__rendering__paragraph;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const cards_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let TravelDestinationToContainer = () => (TravelDestinationToContainer = dart.constFn(dart.fnType(container.Container, [cards_demo.TravelDestination])))();
  let JSArrayOfTravelDestination = () => (JSArrayOfTravelDestination = dart.constFn(_interceptors.JSArray$(cards_demo.TravelDestination)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 21,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 21,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 50,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 113,
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
        [_Location_column]: 32,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 117,
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
        [_Location_column]: 23,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 118,
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
        [_Location_column]: 23,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 107,
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
        [_Location_column]: 26,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
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
        [Text_data]: "SHARE"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
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
        [Text_data]: "EXPLORE"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 21,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 137,
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
        [_Location_column]: 19,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 128,
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
        [_Location_column]: 22,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "destination",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart"
      });
    },
    get C103() {
      return C103 = dart.constList(["Number 10", "Thanjavur", "Thanjavur, Tamil Nadu"], core.String);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: cards_demo.TravelDestination.prototype,
        [description$]: C103 || CT.C103,
        [title$]: "Top 10 Cities to Visit in Tamil Nadu",
        [assetPackage$]: "flutter_gallery_assets",
        [assetName$]: "places/india_thanjavur_market.png"
      });
    },
    get C105() {
      return C105 = dart.constList(["Silk Spinners", "Chettinad", "Sivaganga, Tamil Nadu"], core.String);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: cards_demo.TravelDestination.prototype,
        [description$]: C105 || CT.C105,
        [title$]: "Artisans of Southern India",
        [assetPackage$]: "flutter_gallery_assets",
        [assetName$]: "places/india_chettinad_silk_maker.png"
      });
    }
  });
  const assetName$ = dart.privateName(cards_demo, "TravelDestination.assetName");
  const assetPackage$ = dart.privateName(cards_demo, "TravelDestination.assetPackage");
  const title$ = dart.privateName(cards_demo, "TravelDestination.title");
  const description$ = dart.privateName(cards_demo, "TravelDestination.description");
  cards_demo.TravelDestination = class TravelDestination extends core.Object {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get assetPackage() {
      return this[assetPackage$];
    }
    set assetPackage(value) {
      super.assetPackage = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get isValid() {
      let t0;
      return this.assetName != null && this.title != null && (t0 = this.description, t0 == null ? null : t0[$length]) === 3;
    }
  };
  (cards_demo.TravelDestination.new = function(opts) {
    let assetName = opts && 'assetName' in opts ? opts.assetName : null;
    let assetPackage = opts && 'assetPackage' in opts ? opts.assetPackage : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let description = opts && 'description' in opts ? opts.description : null;
    this[assetName$] = assetName;
    this[assetPackage$] = assetPackage;
    this[title$] = title;
    this[description$] = description;
    ;
  }).prototype = cards_demo.TravelDestination.prototype;
  dart.addTypeTests(cards_demo.TravelDestination);
  dart.setGetterSignature(cards_demo.TravelDestination, () => ({
    __proto__: dart.getGetters(cards_demo.TravelDestination.__proto__),
    isValid: core.bool
  }));
  dart.setLibraryUri(cards_demo.TravelDestination, "package:flutter_web.examples.gallery/demo/material/cards_demo.dart");
  dart.setFieldSignature(cards_demo.TravelDestination, () => ({
    __proto__: dart.getFields(cards_demo.TravelDestination.__proto__),
    assetName: dart.finalFieldType(core.String),
    assetPackage: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.List$(core.String))
  }));
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C14;
  let C15;
  let C11;
  let C10;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C20;
  let C19;
  let C23;
  let C24;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C34;
  let C33;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C47;
  let C48;
  let C44;
  let C43;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
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
  let C56;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C62;
  let C65;
  let C66;
  let C67;
  let C64;
  let C63;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C73;
  let C72;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  const destination$ = dart.privateName(cards_demo, "TravelDestinationItem.destination");
  const shape$ = dart.privateName(cards_demo, "TravelDestinationItem.shape");
  cards_demo.TravelDestinationItem = class TravelDestinationItem extends framework.StatelessWidget {
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let titleStyle = theme.textTheme.headline.copyWith({color: colors.Colors.white});
      let descriptionStyle = theme.textTheme.subhead;
      return new container.Container.new({padding: C0 || CT.C0, height: 366, child: new card.Card.new({shape: this.shape, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 184.0, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({bottom: 16.0, left: 16.0, right: 16.0, child: new basic.FittedBox.new({fit: box_fit.BoxFit.scaleDown, alignment: alignment.Alignment.centerLeft, child: new text.Text.new(this.destination.title, {style: titleStyle, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.Expanded.new({child: new basic.Padding.new({padding: C23 || CT.C23, child: new text.DefaultTextStyle.new({softWrap: false, overflow: paragraph.TextOverflow.ellipsis, style: descriptionStyle, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C24 || CT.C24, child: new text.Text.new(this.destination.description[$_get](0), {style: descriptionStyle.copyWith({color: colors.Colors.black54}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new text.Text.new(this.destination.description[$_get](1), {$creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new text.Text.new(this.destination.description[$_get](2), {$creationLocationd_0dea112b090073317d4: C36 || CT.C36})]), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new button_theme.ButtonTheme.bar({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C56 || CT.C56, textColor: colors.Colors.amber.shade500, onPressed: dart.fn(() => {
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new flat_button.FlatButton.new({child: C62 || CT.C62, textColor: colors.Colors.amber.shade500, onPressed: dart.fn(() => {
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C63 || CT.C63})]), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
  };
  (cards_demo.TravelDestinationItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let destination = opts && 'destination' in opts ? opts.destination : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[destination$] = destination;
    this[shape$] = shape;
    if (!(destination != null && dart.test(destination.isValid))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/cards_demo.dart", 54, 16, "destination != null && destination.isValid");
    cards_demo.TravelDestinationItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cards_demo.TravelDestinationItem.prototype;
  dart.addTypeTests(cards_demo.TravelDestinationItem);
  dart.setMethodSignature(cards_demo.TravelDestinationItem, () => ({
    __proto__: dart.getMethods(cards_demo.TravelDestinationItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(cards_demo.TravelDestinationItem, "package:flutter_web.examples.gallery/demo/material/cards_demo.dart");
  dart.setFieldSignature(cards_demo.TravelDestinationItem, () => ({
    __proto__: dart.getFields(cards_demo.TravelDestinationItem.__proto__),
    destination: dart.finalFieldType(cards_demo.TravelDestination),
    shape: dart.finalFieldType(borders.ShapeBorder)
  }));
  dart.defineLazy(cards_demo.TravelDestinationItem, {
    /*cards_demo.TravelDestinationItem.height*/get height() {
      return 366;
    }
  });
  cards_demo.CardsDemo = class CardsDemo extends framework.StatefulWidget {
    createState() {
      return new cards_demo._CardsDemoState.new();
    }
  };
  (cards_demo.CardsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    cards_demo.CardsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cards_demo.CardsDemo.prototype;
  dart.addTypeTests(cards_demo.CardsDemo);
  dart.setMethodSignature(cards_demo.CardsDemo, () => ({
    __proto__: dart.getMethods(cards_demo.CardsDemo.__proto__),
    createState: dart.fnType(cards_demo._CardsDemoState, [])
  }));
  dart.setLibraryUri(cards_demo.CardsDemo, "package:flutter_web.examples.gallery/demo/material/cards_demo.dart");
  dart.defineLazy(cards_demo.CardsDemo, {
    /*cards_demo.CardsDemo.routeName*/get routeName() {
      return "/material/cards";
    }
  });
  const _shape = dart.privateName(cards_demo, "_shape");
  const _scaffoldKey = dart.privateName(cards_demo, "_scaffoldKey");
  const _buildContents = dart.privateName(cards_demo, "_buildContents");
  let C88;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C98;
  let C97;
  cards_demo._CardsDemoState = class _CardsDemoState extends framework.State$(cards_demo.CardsDemo) {
    build(context) {
      return demo.wrapScaffold("Cards Demo", context, this[_scaffoldKey], this[_buildContents](context), "/material/cards");
    }
    [_buildContents](context) {
      return new scroll_view.ListView.new({itemExtent: 366, padding: C88 || CT.C88, children: cards_demo.destinations[$map](container.Container, dart.fn(destination => new container.Container.new({margin: C24 || CT.C24, child: new cards_demo.TravelDestinationItem.new({destination: destination, shape: this[_shape], $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), TravelDestinationToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C97 || CT.C97});
    }
  };
  (cards_demo._CardsDemoState.new = function() {
    this[_shape] = null;
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    cards_demo._CardsDemoState.__proto__.new.call(this);
    ;
  }).prototype = cards_demo._CardsDemoState.prototype;
  dart.addTypeTests(cards_demo._CardsDemoState);
  dart.setMethodSignature(cards_demo._CardsDemoState, () => ({
    __proto__: dart.getMethods(cards_demo._CardsDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContents]: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(cards_demo._CardsDemoState, "package:flutter_web.examples.gallery/demo/material/cards_demo.dart");
  dart.setFieldSignature(cards_demo._CardsDemoState, () => ({
    __proto__: dart.getFields(cards_demo._CardsDemoState.__proto__),
    [_shape]: dart.fieldType(borders.ShapeBorder),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  let C103;
  let C102;
  let C105;
  let C104;
  dart.defineLazy(cards_demo, {
    /*cards_demo._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return "flutter_gallery_assets";
    },
    /*cards_demo.destinations*/get destinations() {
      return JSArrayOfTravelDestination().of([C102 || CT.C102, C104 || CT.C104]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/cards_demo", {
    "package:flutter_web.examples.gallery/demo/material/cards_demo.dart": cards_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cards_demo.dart"],"names":[],"mappings":"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","file":"cards_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__cards_demo: cards_demo
  };
});

//# sourceMappingURL=cards_demo.ddc.js.map
