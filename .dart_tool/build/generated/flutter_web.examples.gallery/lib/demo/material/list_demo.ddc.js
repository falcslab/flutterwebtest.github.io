define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const ui = packages__flutter_web_ui__ui.ui;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const radio = packages__flutter_web__material.src__material__radio;
  const checkbox = packages__flutter_web__material.src__material__checkbox;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const icons = packages__flutter_web__material.src__material__icons;
  const theme = packages__flutter_web__material.src__material__theme;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const scrollbar = packages__flutter_web__material.src__material__scrollbar;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const list_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $toList = dartx.toList;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let RadioOf_MaterialListType = () => (RadioOf_MaterialListType = dart.constFn(radio.Radio$(list_demo._MaterialListType)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let StringToWidget = () => (StringToWidget = dart.constFn(dart.fnType(framework.Widget, [core.String])))();
  let StringAndStringToint = () => (StringAndStringToint = dart.constFn(dart.fnType(core.int, [core.String, core.String])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: list_demo._MaterialListType.prototype,
        [_name$]: "_MaterialListType.oneLine",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: list_demo._MaterialListType.prototype,
        [_name$]: "_MaterialListType.oneLineWithAvatar",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: list_demo._MaterialListType.prototype,
        [_name$]: "_MaterialListType.twoLine",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: list_demo._MaterialListType.prototype,
        [_name$]: "_MaterialListType.threeLine",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], list_demo._MaterialListType);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$0]: "BorderStyle.none",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C9 || CT.C9,
        [BorderSide_width]: 0,
        [BorderSide_color]: C10 || CT.C10
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$0]: "BorderStyle.solid",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1107296256
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C12 || CT.C12,
        [BorderSide_width]: 1,
        [BorderSide_color]: C13 || CT.C13
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C8 || CT.C8,
        [Border_bottom]: C8 || CT.C8,
        [Border_right]: C8 || CT.C8,
        [Border_top]: C11 || CT.C11
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C6 || CT.C6,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C7 || CT.C7,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C14() {
      return C14 = dart.const({
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
        [Text_data]: "One-line"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 80,
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
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
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
        [Text_data]: "Two-line"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 98,
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
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 92,
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
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
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
        [Text_data]: "Three-line"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 108,
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
        [_Location_column]: 27,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 105,
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
        [_Location_column]: 22,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 102,
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
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
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
        [Text_data]: "Show avatar"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 118,
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
        [_Location_column]: 27,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
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
        [Text_data]: "Show icon"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 133,
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
        [_Location_column]: 27,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
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
        [Text_data]: "Show dividers"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 146,
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
        [_Location_column]: 22,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 143,
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
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
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
        [Text_data]: "Dense layout"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primary",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
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
        [Text_data]: "Additional item information."
      });
    },
    get C118() {
      return C118 = dart.const({
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
        [Text_data]: "Even more additional list item information appears on line three."
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 64,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 59,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 52,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 32,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 50,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 32,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isThreeLine",
        [_Location_column]: 9,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 9,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 9,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 63,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 52,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57427
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C153 || CT.C153
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180, C181 || CT.C181, C182 || CT.C182], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/list_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(list_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  list_demo._MaterialListType = class _MaterialListType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (list_demo._MaterialListType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = list_demo._MaterialListType.prototype;
  dart.addTypeTests(list_demo._MaterialListType);
  dart.setLibraryUri(list_demo._MaterialListType, "package:flutter_web.examples.gallery/demo/material/list_demo.dart");
  dart.setFieldSignature(list_demo._MaterialListType, () => ({
    __proto__: dart.getFields(list_demo._MaterialListType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(list_demo._MaterialListType, ['toString']);
  list_demo._MaterialListType.oneLine = C0 || CT.C0;
  list_demo._MaterialListType.oneLineWithAvatar = C1 || CT.C1;
  list_demo._MaterialListType.twoLine = C2 || CT.C2;
  list_demo._MaterialListType.threeLine = C3 || CT.C3;
  list_demo._MaterialListType.values = C4 || CT.C4;
  list_demo.ListDemo = class ListDemo extends framework.StatefulWidget {
    createState() {
      return new list_demo._ListDemoState.new();
    }
  };
  (list_demo.ListDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    list_demo.ListDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_demo.ListDemo.prototype;
  dart.addTypeTests(list_demo.ListDemo);
  dart.setMethodSignature(list_demo.ListDemo, () => ({
    __proto__: dart.getMethods(list_demo.ListDemo.__proto__),
    createState: dart.fnType(list_demo._ListDemoState, [])
  }));
  dart.setLibraryUri(list_demo.ListDemo, "package:flutter_web.examples.gallery/demo/material/list_demo.dart");
  dart.defineLazy(list_demo.ListDemo, {
    /*list_demo.ListDemo.routeName*/get routeName() {
      return "/material/list";
    }
  });
  const _bottomSheet = dart.privateName(list_demo, "_bottomSheet");
  const _itemType = dart.privateName(list_demo, "_itemType");
  const _dense = dart.privateName(list_demo, "_dense");
  const _showAvatars = dart.privateName(list_demo, "_showAvatars");
  const _showIcons = dart.privateName(list_demo, "_showIcons");
  const _showDividers = dart.privateName(list_demo, "_showDividers");
  const _reverseSort = dart.privateName(list_demo, "_reverseSort");
  const _name = dart.privateName(box_border, "_name");
  let C6;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const _name$0 = dart.privateName(borders, "_name");
  let C9;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C10;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C8;
  const Border_left = dart.privateName(box_border, "Border.left");
  const Border_bottom = dart.privateName(box_border, "Border.bottom");
  const Border_right = dart.privateName(box_border, "Border.right");
  let C12;
  let C13;
  let C11;
  const Border_top = dart.privateName(box_border, "Border.top");
  let C7;
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C5;
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
  let C14;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C26;
  let C25;
  let C28;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C41;
  let C40;
  let C39;
  let C42;
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
  let C54;
  let C53;
  let C56;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C67;
  let C66;
  let C69;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C80;
  let C79;
  let C82;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C93;
  let C92;
  let C95;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C103;
  let C104;
  let C101;
  let C100;
  let C107;
  let C106;
  let C105;
  let C110;
  let C111;
  let C112;
  let C109;
  let C108;
  let C115;
  let C116;
  let C114;
  let C113;
  const _showConfigurationSheet = dart.privateName(list_demo, "_showConfigurationSheet");
  let C117;
  let C118;
  let C121;
  let C120;
  let C119;
  let C124;
  let C123;
  let C122;
  let C127;
  let C126;
  let C125;
  let C130;
  let C129;
  let C128;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C136;
  let C135;
  let C145;
  let C144;
  let C143;
  let C148;
  let C147;
  let C146;
  let C151;
  let C150;
  let C149;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C153;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C152;
  let C156;
  let C157;
  let C158;
  let C155;
  let C154;
  let C161;
  let C160;
  let C159;
  let C164;
  let C165;
  let C166;
  let C163;
  let C162;
  let C169;
  let C170;
  let C168;
  let C167;
  let C173;
  let C174;
  let C172;
  let C171;
  let C177;
  let C176;
  let C175;
  let C180;
  let C181;
  let C182;
  let C179;
  let C178;
  list_demo._ListDemoState = class _ListDemoState extends framework.State$(list_demo.ListDemo) {
    changeItemType(type) {
      let t0;
      this.setState(dart.fn(() => {
        this[_itemType] = type;
      }, VoidToNull()));
      t0 = this[_bottomSheet];
      t0 == null ? null : t0.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_showConfigurationSheet]() {
      let bottomSheet = list_demo._ListDemoState.scaffoldKey.currentState.showBottomSheet(dart.void, dart.fn(bottomSheetContext => new container.Container.new({decoration: C5 || CT.C5, child: new scroll_view.ListView.new({shrinkWrap: true, primary: false, children: JSArrayOfWidget().of([new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C14 || CT.C14, trailing: new (RadioOf_MaterialListType()).new({value: dart.test(this[_showAvatars]) ? list_demo._MaterialListType.oneLineWithAvatar : list_demo._MaterialListType.oneLine, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C28 || CT.C28, trailing: new (RadioOf_MaterialListType()).new({value: list_demo._MaterialListType.twoLine, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C42 || CT.C42, trailing: new (RadioOf_MaterialListType()).new({value: list_demo._MaterialListType.threeLine, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C56 || CT.C56, trailing: new checkbox.Checkbox.new({value: this[_showAvatars], onChanged: dart.fn(value => {
                    let t0;
                    this.setState(dart.fn(() => {
                      this[_showAvatars] = value;
                    }, VoidToNull()));
                    t0 = this[_bottomSheet];
                    t0 == null ? null : t0.setState(dart.fn(() => {
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C69 || CT.C69, trailing: new checkbox.Checkbox.new({value: this[_showIcons], onChanged: dart.fn(value => {
                    let t0;
                    this.setState(dart.fn(() => {
                      this[_showIcons] = value;
                    }, VoidToNull()));
                    t0 = this[_bottomSheet];
                    t0 == null ? null : t0.setState(dart.fn(() => {
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C82 || CT.C82, trailing: new checkbox.Checkbox.new({value: this[_showDividers], onChanged: dart.fn(value => {
                    let t0;
                    this.setState(dart.fn(() => {
                      this[_showDividers] = value;
                    }, VoidToNull()));
                    t0 = this[_bottomSheet];
                    t0 == null ? null : t0.setState(dart.fn(() => {
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), new basic.MergeSemantics.new({child: new list_tile.ListTile.new({dense: true, title: C95 || CT.C95, trailing: new checkbox.Checkbox.new({value: this[_dense], onChanged: dart.fn(value => {
                    let t0;
                    this.setState(dart.fn(() => {
                      this[_dense] = value;
                    }, VoidToNull()));
                    t0 = this[_bottomSheet];
                    t0 == null ? null : t0.setState(dart.fn(() => {
                    }, VoidToNull()));
                  }, boolToNull()), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105})]), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), BuildContextToContainer()));
      this.setState(dart.fn(() => {
        this[_bottomSheet] = bottomSheet;
      }, VoidToNull()));
      this[_bottomSheet].closed.whenComplete(dart.fn(() => {
        if (dart.test(this.mounted)) {
          this.setState(dart.fn(() => {
            this[_bottomSheet] = null;
          }, VoidToNull()));
        }
      }, VoidToNull()));
    }
    buildListTile(context, item) {
      let secondary = null;
      if (dart.equals(this[_itemType], list_demo._MaterialListType.twoLine)) {
        secondary = C117 || CT.C117;
      } else if (dart.equals(this[_itemType], list_demo._MaterialListType.threeLine)) {
        secondary = C118 || CT.C118;
      }
      return new basic.MergeSemantics.new({child: new list_tile.ListTile.new({isThreeLine: dart.equals(this[_itemType], list_demo._MaterialListType.threeLine), dense: this[_dense], leading: dart.test(this[_showAvatars]) ? new basic.ExcludeSemantics.new({child: new circle_avatar.CircleAvatar.new({child: new text.Text.new(item, {$creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}) : null, title: new text.Text.new("This item represents " + dart.str(item) + ".", {$creationLocationd_0dea112b090073317d4: C128 || CT.C128}), subtitle: secondary, trailing: dart.test(this[_showIcons]) ? new icon.Icon.new(icons.Icons.info, {color: theme.Theme.of(context).disabledColor, $creationLocationd_0dea112b090073317d4: C131 || CT.C131}) : null, $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143});
    }
    build(context) {
      let layoutText = dart.test(this[_dense]) ? " – Dense" : "";
      let itemTypeText = null;
      switch (this[_itemType]) {
        case C0 || CT.C0:
        case C1 || CT.C1:
        {
          itemTypeText = "Single-line";
          break;
        }
        case C2 || CT.C2:
        {
          itemTypeText = "Two-line";
          break;
        }
        case C3 || CT.C3:
        {
          itemTypeText = "Three-line";
          break;
        }
      }
      let listTiles = this.items[$map](framework.Widget, dart.fn(item => this.buildListTile(context, item), StringToWidget()));
      if (dart.test(this[_showDividers])) listTiles = list_tile.ListTile.divideTiles({context: context, tiles: listTiles});
      return new scaffold.Scaffold.new({key: list_demo._ListDemoState.scaffoldKey, appBar: new app_bar.AppBar.new({title: new text.Text.new("Scrolling list\n" + dart.str(itemTypeText) + layoutText, {$creationLocationd_0dea112b090073317d4: C146 || CT.C146}), actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/list", {$creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new icon_button.IconButton.new({icon: C152 || CT.C152, tooltip: "Sort", onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_reverseSort] = !dart.test(this[_reverseSort]);
                  this.items[$sort](dart.fn((a, b) => dart.test(this[_reverseSort]) ? b[$compareTo](a) : a[$compareTo](b), StringAndStringToint()));
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), new icon_button.IconButton.new({icon: new icon.Icon.new(dart.equals(theme.Theme.of(context).platform, platform.TargetPlatform.iOS) ? icons.Icons.more_horiz : icons.Icons.more_vert, {$creationLocationd_0dea112b090073317d4: C159 || CT.C159}), tooltip: "Show menu", onPressed: this[_bottomSheet] == null ? dart.bind(this, _showConfigurationSheet) : null, $creationLocationd_0dea112b090073317d4: C162 || CT.C162})]), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), body: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: dart.test(this[_dense]) ? 4.0 : 8.0}), children: listTiles[$toList](), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C178 || CT.C178});
    }
  };
  (list_demo._ListDemoState.new = function() {
    this[_bottomSheet] = null;
    this[_itemType] = list_demo._MaterialListType.threeLine;
    this[_dense] = false;
    this[_showAvatars] = true;
    this[_showIcons] = false;
    this[_showDividers] = false;
    this[_reverseSort] = false;
    this.items = JSArrayOfString().of(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]);
    list_demo._ListDemoState.__proto__.new.call(this);
    ;
  }).prototype = list_demo._ListDemoState.prototype;
  dart.addTypeTests(list_demo._ListDemoState);
  dart.setMethodSignature(list_demo._ListDemoState, () => ({
    __proto__: dart.getMethods(list_demo._ListDemoState.__proto__),
    changeItemType: dart.fnType(dart.void, [list_demo._MaterialListType]),
    [_showConfigurationSheet]: dart.fnType(dart.void, []),
    buildListTile: dart.fnType(framework.Widget, [framework.BuildContext, core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list_demo._ListDemoState, "package:flutter_web.examples.gallery/demo/material/list_demo.dart");
  dart.setFieldSignature(list_demo._ListDemoState, () => ({
    __proto__: dart.getFields(list_demo._ListDemoState.__proto__),
    [_bottomSheet]: dart.fieldType(scaffold.PersistentBottomSheetController$(dart.void)),
    [_itemType]: dart.fieldType(list_demo._MaterialListType),
    [_dense]: dart.fieldType(core.bool),
    [_showAvatars]: dart.fieldType(core.bool),
    [_showIcons]: dart.fieldType(core.bool),
    [_showDividers]: dart.fieldType(core.bool),
    [_reverseSort]: dart.fieldType(core.bool),
    items: dart.fieldType(core.List$(core.String))
  }));
  dart.defineLazy(list_demo._ListDemoState, {
    /*list_demo._ListDemoState.scaffoldKey*/get scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/list_demo", {
    "package:flutter_web.examples.gallery/demo/material/list_demo.dart": list_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBA;;qDAZK;;;;EAYL;;;;;;;;;;;;;;;;AAQkC;IAAgB;;;QAL5B;;AAAQ,sDAAW,GAAG;;EAAC;;;;;;;;MAEvB,4BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAkCS;;AAGlC,MAFF,cAAS;AACS,QAAhB,kBAAY,IAAI;;AAEW,WAA7B;0BAAc,YAAS;;IACzB;;AAG8C,wBAAc,AACrD,AACA,6EAAsB,QAAc,sBAChC,6DAIE,0CACO,eACH,iBACS,sBAChB,qCACS,mCACI,sCAEG,uDACD,sBACiB,gDACA,iDACZ,sCACD,oMAGnB,qCACS,mCACI,sCAEG,6CACiB,iDACb,sCACD,oMAGnB,qCACS,mCACE,sCAEG,6CACiB,mDACb,sCACD,oMAIjB,qCACS,mCACE,sCAEG,kCACD,+BACI,QAAM;;AAGb,oBAFF,cAAS;AACa,sBAApB,qBAAe,KAAK;;AAEO,yBAA7B;wCAAc,YAAS;;+MAK/B,qCACS,mCACE,sCAEG,kCACD,6BACI,QAAM;;AAGb,oBAFF,cAAS;AACW,sBAAlB,mBAAa,KAAK;;AAES,yBAA7B;wCAAc,YAAS;;+MAK/B,qCACS,mCACE,sCAEG,kCACD,gCACI,QAAM;;AAGb,oBAFF,cAAS;AACc,sBAArB,sBAAgB,KAAK;;AAEM,yBAA7B;wCAAc,YAAS;;+MAK/B,qCACS,mCACE,sCAEG,kCACD,yBACI,QAAM;;AAGb,oBAFF,cAAS;AACO,sBAAd,eAAS,KAAK;;AAEa,yBAA7B;wCAAc,YAAS;;;AAYrC,MAFF,cAAS;AACmB,QAA1B,qBAAe,WAAW;;AAS1B,MANF,AAAa,AAAO,uCAAa;AAC/B,sBAAI;AAGA,UAFF,cAAS;AACY,YAAnB,qBAAe;;;;IAIvB;kBAEkC,SAAgB;AACzC;AACP,UAAc,YAAV,iBAA+B;AACqB,QAAtD;YACK,KAAc,YAAV,iBAA+B;AAGvC,QAFD;;AAIF,YAAO,sCACE,yCACkB,YAAV,iBAA+B,+CACrC,iCACE,sBACH,uCAAwB,2CAAoB,kBAAK,IAAI,qLACrD,aACC,kBAAK,AAA6B,mCAAN,IAAI,+EAC7B,SAAS,sBACT,oBACJ,kBAAW,0BAAmB,AAAY,eAAT,OAAO,6EACxC;IAGZ;UAG0B;AACX,iCAAa,gBAAS,aAAkB;AAC9C;AACP,cAAQ;;;;AAGwB,UAA5B,eAAe;AACf;;;;AAEyB,UAAzB,eAAe;AACf;;;;AAE2B,UAA3B,eAAe;AACf;;;AAGa,sBACb,AAAM,mCAAY,QAAQ,QAAS,mBAAc,OAAO,EAAE,IAAI;AAClE,oBAAI,sBACF,AAAoE,YAA/C,yCAAqB,OAAO,SAAS,SAAS;AAErE,YAAO,iCACA,8CACG,+BACC,kBAAK,AAA0C,8BAAxB,YAAY,IAAC,UAAU,uEACpC,sBACf,2HACA,gEAEW,mBACE;AAKP,gBAJF,cAAS;AACqB,kBAA5B,qBAAe,WAAC;AAEmC,kBADnD,AAAM,kBAAK,SAAQ,GAAU,gBACzB,sBAAe,AAAE,CAAD,aAAW,CAAC,IAAI,AAAE,CAAD,aAAW,CAAC;;2FAIvD,sCACQ,kBACuB,YAArB,AAAY,eAAT,OAAO,YAA6B,+BACjC,yBACA,4FAEL,wBACE,AAAa,sBAAG,iBAAO,iCAA0B,oIAI5D,oCACG,uCACe,0DAAoB,gBAAS,MAAM,iBAC7C,AAAU,SAAD;IAI3B;;;IA5OsC;IACpB,kBAA8B;IAC3C,eAAS;IACT,qBAAe;IACf,mBAAa;IACb,sBAAgB;IAChB,qBAAe;IACP,aAAgB,sBAC3B,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA;;;EAwNJ;;;;;;;;;;;;;;;;;;;;;;MAhPwC,oCAAW;YAC7C","file":"list_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__list_demo: list_demo
  };
});

//# sourceMappingURL=list_demo.ddc.js.map
