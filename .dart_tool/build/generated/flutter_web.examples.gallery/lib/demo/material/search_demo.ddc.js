define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const image_resolution = packages__flutter_web__animation.src__painting__image_resolution;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const text_span = packages__flutter_web__animation.src__painting__text_span;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const animated_icons = packages__flutter_web__material.src__material__animated_icons;
  const colors = packages__flutter_web__material.src__material__colors;
  const search = packages__flutter_web__material.src__material__search;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const icons = packages__flutter_web__material.src__material__icons;
  const tooltip = packages__flutter_web__material.src__material__tooltip;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const user_accounts_drawer_header = packages__flutter_web__material.src__material__user_accounts_drawer_header;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const card = packages__flutter_web__material.src__material__card;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const ui = packages__flutter_web_ui__ui.ui;
  const search_demo = Object.create(dart.library);
  const $reversed = dartx.reversed;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $startsWith = dartx.startsWith;
  const $where = dartx.where;
  const $map = dartx.map;
  const $contains = dartx.contains;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $substring = dartx.substring;
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progress",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 34,
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
        [_Location_column]: 18,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
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
        [Text_data]: "Numbers"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59574
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C12 || CT.C12
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 54,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 60,
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
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 63,
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
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 39,
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
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
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
        [Text_data]: "Press the "
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 18,
        [Icon_icon]: C12 || CT.C12
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: tooltip.Tooltip.prototype,
        [Widget_key]: null,
        [Tooltip_showDuration]: null,
        [Tooltip_waitDuration]: null,
        [Tooltip_textStyle]: null,
        [Tooltip_decoration]: null,
        [Tooltip_child]: C37 || CT.C37,
        [Tooltip_excludeFromSemantics]: null,
        [Tooltip_preferBelow]: null,
        [Tooltip_verticalOffset]: null,
        [Tooltip_margin]: null,
        [Tooltip_padding]: null,
        [Tooltip_height]: null,
        [Tooltip_message]: "search"
      });
    },
    get C38() {
      return C38 = dart.const({
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
        [Text_data]: " icon in the AppBar"
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C38 || CT.C38], framework.Widget);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 77,
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
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
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
        [Text_data]: "and search for an integer between 0 and 100,000."
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 64,
        [SizedBox_width]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 77,
        [_Location_line]: 95,
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
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
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
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
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
        [Text_data]: "Close demo"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58829
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C64 || CT.C64
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
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
        [Text_data]: "peter.widget@example.com"
      });
    },
    get C73() {
      return C73 = dart.const({
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
        [Text_data]: "Peter Widget"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: image_resolution.AssetImage.prototype,
        [AssetImage_package]: null,
        [AssetImage_bundle]: null,
        [AssetImage_assetName]: "people/square/peter.png"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: circle_avatar.CircleAvatar.prototype,
        [Widget_key]: null,
        [CircleAvatar_maxRadius]: null,
        [CircleAvatar_minRadius]: null,
        [CircleAvatar_radius]: null,
        [CircleAvatar_backgroundImage]: C75 || CT.C75,
        [CircleAvatar_foregroundColor]: null,
        [CircleAvatar_backgroundColor]: null,
        [CircleAvatar_child]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: user_accounts_drawer_header.UserAccountsDrawerHeader.prototype,
        [Widget_key]: null,
        [UserAccountsDrawerHeader_onDetailsPressed]: null,
        [UserAccountsDrawerHeader_accountEmail]: C72 || CT.C72,
        [UserAccountsDrawerHeader_accountName]: C73 || CT.C73,
        [UserAccountsDrawerHeader_otherAccountsPictures]: null,
        [UserAccountsDrawerHeader_currentAccountPicture]: C74 || CT.C74,
        [UserAccountsDrawerHeader_margin]: C76 || CT.C76,
        [UserAccountsDrawerHeader_decoration]: null
      });
    },
    get C78() {
      return C78 = dart.const({
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
        [Text_data]: "Placeholder"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59553
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C80 || CT.C80
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C78 || CT.C78,
        [ListTile_leading]: C79 || CT.C79
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeTop",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progress",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "query",
        [_Location_column]: 7,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "suggestions",
        [_Location_column]: 7,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 7,
        [_Location_line]: 164,
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
        [_Location_column]: 12,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 81,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 11,
        [_Location_line]: 178,
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
        [_Location_column]: 16,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "integer",
        [_Location_column]: 11,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "searchDelegate",
        [_Location_column]: 11,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "integer",
        [_Location_column]: 11,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "searchDelegate",
        [_Location_column]: 11,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "integer",
        [_Location_column]: 11,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "searchDelegate",
        [_Location_column]: 11,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57385
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C139 || CT.C139
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 15,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57676
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C146 || CT.C146
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 15,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59529
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C175 || CT.C175
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 13,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/search_demo.dart"
      });
    }
  });
  search_demo.SearchDemo = class SearchDemo extends framework.StatefulWidget {
    createState() {
      return new search_demo._SearchDemoState.new();
    }
  };
  (search_demo.SearchDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_demo.SearchDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_demo.SearchDemo.prototype;
  dart.addTypeTests(search_demo.SearchDemo);
  dart.setMethodSignature(search_demo.SearchDemo, () => ({
    __proto__: dart.getMethods(search_demo.SearchDemo.__proto__),
    createState: dart.fnType(search_demo._SearchDemoState, [])
  }));
  dart.setLibraryUri(search_demo.SearchDemo, "package:flutter_web.examples.gallery/demo/material/search_demo.dart");
  dart.defineLazy(search_demo.SearchDemo, {
    /*search_demo.SearchDemo.routeName*/get routeName() {
      return "/material/search";
    }
  });
  const _delegate = dart.privateName(search_demo, "_delegate");
  const _scaffoldKey = dart.privateName(search_demo, "_scaffoldKey");
  const _lastIntegerSelected = dart.privateName(search_demo, "_lastIntegerSelected");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C9;
  let C6;
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
  let C10;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C12;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C11;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C35;
  const Tooltip_showDuration = dart.privateName(tooltip, "Tooltip.showDuration");
  const Tooltip_waitDuration = dart.privateName(tooltip, "Tooltip.waitDuration");
  const Tooltip_textStyle = dart.privateName(tooltip, "Tooltip.textStyle");
  const Tooltip_decoration = dart.privateName(tooltip, "Tooltip.decoration");
  let C37;
  const Tooltip_child = dart.privateName(tooltip, "Tooltip.child");
  const Tooltip_excludeFromSemantics = dart.privateName(tooltip, "Tooltip.excludeFromSemantics");
  const Tooltip_preferBelow = dart.privateName(tooltip, "Tooltip.preferBelow");
  const Tooltip_verticalOffset = dart.privateName(tooltip, "Tooltip.verticalOffset");
  const Tooltip_margin = dart.privateName(tooltip, "Tooltip.margin");
  const Tooltip_padding = dart.privateName(tooltip, "Tooltip.padding");
  const Tooltip_height = dart.privateName(tooltip, "Tooltip.height");
  const Tooltip_message = dart.privateName(tooltip, "Tooltip.message");
  let C36;
  let C38;
  let C34;
  let C41;
  let C42;
  let C40;
  let C39;
  let C43;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C51;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C60;
  let C59;
  let C62;
  let C64;
  let C63;
  let C67;
  let C68;
  let C69;
  let C70;
  let C66;
  let C65;
  const UserAccountsDrawerHeader_onDetailsPressed = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.onDetailsPressed");
  let C72;
  const UserAccountsDrawerHeader_accountEmail = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.accountEmail");
  let C73;
  const UserAccountsDrawerHeader_accountName = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.accountName");
  const UserAccountsDrawerHeader_otherAccountsPictures = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.otherAccountsPictures");
  const CircleAvatar_maxRadius = dart.privateName(circle_avatar, "CircleAvatar.maxRadius");
  const CircleAvatar_minRadius = dart.privateName(circle_avatar, "CircleAvatar.minRadius");
  const CircleAvatar_radius = dart.privateName(circle_avatar, "CircleAvatar.radius");
  const AssetImage_package = dart.privateName(image_resolution, "AssetImage.package");
  const AssetImage_bundle = dart.privateName(image_resolution, "AssetImage.bundle");
  const AssetImage_assetName = dart.privateName(image_resolution, "AssetImage.assetName");
  let C75;
  const CircleAvatar_backgroundImage = dart.privateName(circle_avatar, "CircleAvatar.backgroundImage");
  const CircleAvatar_foregroundColor = dart.privateName(circle_avatar, "CircleAvatar.foregroundColor");
  const CircleAvatar_backgroundColor = dart.privateName(circle_avatar, "CircleAvatar.backgroundColor");
  const CircleAvatar_child = dart.privateName(circle_avatar, "CircleAvatar.child");
  let C74;
  const UserAccountsDrawerHeader_currentAccountPicture = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.currentAccountPicture");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C76;
  const UserAccountsDrawerHeader_margin = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.margin");
  const UserAccountsDrawerHeader_decoration = dart.privateName(user_accounts_drawer_header, "UserAccountsDrawerHeader.decoration");
  let C71;
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  let C78;
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  let C80;
  let C79;
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C77;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C87;
  let C86;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C93;
  let C92;
  search_demo._SearchDemoState = class _SearchDemoState extends framework.State$(search_demo.SearchDemo) {
    build(context) {
      let t0;
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({leading: new icon_button.IconButton.new({tooltip: "Navigation menu", icon: new animated_icons.AnimatedIcon.new({icon: animated_icons.AnimatedIcons.menu_arrow, color: colors.Colors.white, progress: this[_delegate].transitionAnimation, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
              this[_scaffoldKey].currentState.openDrawer();
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), title: C10 || CT.C10, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({tooltip: "Search", icon: C11 || CT.C11, onPressed: dart.fn(() => async.async(core.Null, (function*() {
                let selected = (yield search.showSearch(core.int, {context: context, delegate: this[_delegate]}));
                if (selected != null && selected != this[_lastIntegerSelected]) {
                  this.setState(dart.fn(() => {
                    this[_lastIntegerSelected] = selected;
                  }, VoidToNull()));
                }
              }).bind(this)), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new demo.MaterialDemoDocumentationButton.new("/material/search", {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new icon_button.IconButton.new({tooltip: "More (not implemented)", icon: new icon.Icon.new(dart.equals(theme$.Theme.of(context).platform, platform.TargetPlatform.iOS) ? icons.Icons.more_horiz : icons.Icons.more_vert, {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), onPressed: dart.fn(() => {
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.MergeSemantics.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: C34 || CT.C34, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), C43 || CT.C43]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), C51 || CT.C51, new text.Text.new("Last selected integer: " + dart.str((t0 = this[_lastIntegerSelected], t0 == null ? "NONE" : t0)) + ".", {$creationLocationd_0dea112b090073317d4: C52 || CT.C52})]), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), floatingActionButton: new floating_action_button.FloatingActionButton.extended({tooltip: "Back", onPressed: dart.fn(() => {
            navigator.Navigator.of(context).pop(core.Object);
          }, VoidToNull()), label: C62 || CT.C62, icon: C63 || CT.C63, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), drawer: new drawer.Drawer.new({child: new basic.Column.new({children: JSArrayOfWidget().of([C71 || CT.C71, media_query.MediaQuery.removePadding({context: context, removeTop: true, child: C77 || CT.C77, $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92});
    }
  };
  (search_demo._SearchDemoState.new = function() {
    this[_delegate] = new search_demo._SearchDemoSearchDelegate.new();
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_lastIntegerSelected] = null;
    search_demo._SearchDemoState.__proto__.new.call(this);
    ;
  }).prototype = search_demo._SearchDemoState.prototype;
  dart.addTypeTests(search_demo._SearchDemoState);
  dart.setMethodSignature(search_demo._SearchDemoState, () => ({
    __proto__: dart.getMethods(search_demo._SearchDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_demo._SearchDemoState, "package:flutter_web.examples.gallery/demo/material/search_demo.dart");
  dart.setFieldSignature(search_demo._SearchDemoState, () => ({
    __proto__: dart.getFields(search_demo._SearchDemoState.__proto__),
    [_delegate]: dart.finalFieldType(search_demo._SearchDemoSearchDelegate),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_lastIntegerSelected]: dart.fieldType(core.int)
  }));
  const _data = dart.privateName(search_demo, "_data");
  const _history = dart.privateName(search_demo, "_history");
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C106;
  let C107;
  let C104;
  let C103;
  let C110;
  let C111;
  let C112;
  let C109;
  let C108;
  let C115;
  let C116;
  let C114;
  let C113;
  let C119;
  let C118;
  let C117;
  let C122;
  let C123;
  let C124;
  let C121;
  let C120;
  let C127;
  let C128;
  let C129;
  let C126;
  let C125;
  let C132;
  let C133;
  let C134;
  let C131;
  let C130;
  let C137;
  let C136;
  let C135;
  let C139;
  let C138;
  let C142;
  let C143;
  let C144;
  let C141;
  let C140;
  let C146;
  let C145;
  let C149;
  let C150;
  let C151;
  let C148;
  let C147;
  search_demo._SearchDemoSearchDelegate = class _SearchDemoSearchDelegate extends search.SearchDelegate$(core.int) {
    buildLeading(context) {
      return new icon_button.IconButton.new({tooltip: "Back", icon: new animated_icons.AnimatedIcon.new({icon: animated_icons.AnimatedIcons.menu_arrow, progress: this.transitionAnimation, $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), onPressed: dart.fn(() => {
          this.close(context, null);
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C103 || CT.C103});
    }
    buildSuggestions(context) {
      let suggestions = this.query[$isEmpty] ? this[_history] : this[_data][$where](dart.fn(i => dart.str(i)[$startsWith](this.query), intTobool()));
      return new search_demo._SuggestionList.new({query: this.query, suggestions: suggestions[$map](core.String, dart.fn(i => dart.str(i), intToString()))[$toList](), onSelected: dart.fn(suggestion => {
          this.query = suggestion;
          this.showResults(context);
        }, StringToNull()), $creationLocationd_0dea112b090073317d4: C108 || CT.C108});
    }
    buildResults(context) {
      let searched = core.int.tryParse(this.query);
      if (searched == null || !dart.test(this[_data][$contains](searched))) {
        return new basic.Center.new({child: new text.Text.new("\"" + dart.str(this.query) + "\"\n is not a valid integer between 0 and 100,000.\nTry again.", {textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117});
      }
      return new scroll_view.ListView.new({children: JSArrayOfWidget().of([new search_demo._ResultCard.new({title: "This integer", integer: searched, searchDelegate: this, $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new search_demo._ResultCard.new({title: "Next integer", integer: dart.notNull(searched) + 1, searchDelegate: this, $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new search_demo._ResultCard.new({title: "Previous integer", integer: dart.notNull(searched) - 1, searchDelegate: this, $creationLocationd_0dea112b090073317d4: C130 || CT.C130})]), $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
    }
    buildActions(context) {
      return JSArrayOfWidget().of([this.query[$isEmpty] ? new icon_button.IconButton.new({tooltip: "Voice Search", icon: C138 || CT.C138, onPressed: dart.fn(() => {
            this.query = "TODO: implement voice input";
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}) : new icon_button.IconButton.new({tooltip: "Clear", icon: C145 || CT.C145, onPressed: dart.fn(() => {
            this.query = "";
            this.showSuggestions(context);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C147 || CT.C147})]);
    }
  };
  (search_demo._SearchDemoSearchDelegate.new = function() {
    this[_data] = ListOfint().generate(100001, dart.fn(i => i, intToint()))[$reversed][$toList]();
    this[_history] = JSArrayOfint().of([42607, 85604, 66374, 44, 174]);
    search_demo._SearchDemoSearchDelegate.__proto__.new.call(this);
    ;
  }).prototype = search_demo._SearchDemoSearchDelegate.prototype;
  dart.addTypeTests(search_demo._SearchDemoSearchDelegate);
  dart.setMethodSignature(search_demo._SearchDemoSearchDelegate, () => ({
    __proto__: dart.getMethods(search_demo._SearchDemoSearchDelegate.__proto__),
    buildLeading: dart.fnType(framework.Widget, [framework.BuildContext]),
    buildSuggestions: dart.fnType(framework.Widget, [framework.BuildContext]),
    buildResults: dart.fnType(framework.Widget, [framework.BuildContext]),
    buildActions: dart.fnType(core.List$(framework.Widget), [framework.BuildContext])
  }));
  dart.setLibraryUri(search_demo._SearchDemoSearchDelegate, "package:flutter_web.examples.gallery/demo/material/search_demo.dart");
  dart.setFieldSignature(search_demo._SearchDemoSearchDelegate, () => ({
    __proto__: dart.getFields(search_demo._SearchDemoSearchDelegate.__proto__),
    [_data]: dart.finalFieldType(core.List$(core.int)),
    [_history]: dart.finalFieldType(core.List$(core.int))
  }));
  let C152;
  let C155;
  let C154;
  let C153;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C161;
  let C160;
  let C165;
  let C166;
  let C164;
  let C163;
  let C169;
  let C168;
  let C167;
  let C172;
  let C173;
  let C171;
  let C170;
  const integer$ = dart.privateName(search_demo, "_ResultCard.integer");
  const title$ = dart.privateName(search_demo, "_ResultCard.title");
  const searchDelegate$ = dart.privateName(search_demo, "_ResultCard.searchDelegate");
  search_demo._ResultCard = class _ResultCard extends framework.StatelessWidget {
    get integer() {
      return this[integer$];
    }
    set integer(value) {
      super.integer = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get searchDelegate() {
      return this[searchDelegate$];
    }
    set searchDelegate(value) {
      super.searchDelegate = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          this.searchDelegate.close(context, this.integer);
        }, VoidToNull()), child: new card.Card.new({child: new basic.Padding.new({padding: C152 || CT.C152, child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C153 || CT.C153}), new text.Text.new(dart.str(this.integer), {style: theme.textTheme.headline.copyWith({fontSize: 72.0}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170});
    }
  };
  (search_demo._ResultCard.new = function(opts) {
    let integer = opts && 'integer' in opts ? opts.integer : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let searchDelegate = opts && 'searchDelegate' in opts ? opts.searchDelegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[integer$] = integer;
    this[title$] = title;
    this[searchDelegate$] = searchDelegate;
    search_demo._ResultCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_demo._ResultCard.prototype;
  dart.addTypeTests(search_demo._ResultCard);
  dart.setMethodSignature(search_demo._ResultCard, () => ({
    __proto__: dart.getMethods(search_demo._ResultCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_demo._ResultCard, "package:flutter_web.examples.gallery/demo/material/search_demo.dart");
  dart.setFieldSignature(search_demo._ResultCard, () => ({
    __proto__: dart.getFields(search_demo._ResultCard.__proto__),
    integer: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String),
    searchDelegate: dart.finalFieldType(search.SearchDelegate$(core.int))
  }));
  let C175;
  let C174;
  let C176;
  let C179;
  let C178;
  let C177;
  let C182;
  let C183;
  let C184;
  let C181;
  let C180;
  let C187;
  let C188;
  let C186;
  let C185;
  const suggestions$ = dart.privateName(search_demo, "_SuggestionList.suggestions");
  const query$ = dart.privateName(search_demo, "_SuggestionList.query");
  const onSelected$ = dart.privateName(search_demo, "_SuggestionList.onSelected");
  search_demo._SuggestionList = class _SuggestionList extends framework.StatelessWidget {
    get suggestions() {
      return this[suggestions$];
    }
    set suggestions(value) {
      super.suggestions = value;
    }
    get query() {
      return this[query$];
    }
    set query(value) {
      super.query = value;
    }
    get onSelected() {
      return this[onSelected$];
    }
    set onSelected(value) {
      super.onSelected = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new scroll_view.ListView.builder({itemCount: this.suggestions[$length], itemBuilder: dart.fn((context, i) => {
          let suggestion = this.suggestions[$_get](i);
          return new list_tile.ListTile.new({leading: this.query[$isEmpty] ? C174 || CT.C174 : C176 || CT.C176, title: new basic.RichText.new({text: new text_span.TextSpan.new({text: suggestion[$substring](0, this.query.length), style: theme.textTheme.subhead.copyWith({fontWeight: ui.FontWeight.bold}), children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: suggestion[$substring](this.query.length), style: theme.textTheme.subhead})])}), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), onTap: dart.fn(() => {
              this.onSelected(suggestion);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C180 || CT.C180});
        }, BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C185 || CT.C185});
    }
  };
  (search_demo._SuggestionList.new = function(opts) {
    let suggestions = opts && 'suggestions' in opts ? opts.suggestions : null;
    let query = opts && 'query' in opts ? opts.query : null;
    let onSelected = opts && 'onSelected' in opts ? opts.onSelected : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[suggestions$] = suggestions;
    this[query$] = query;
    this[onSelected$] = onSelected;
    search_demo._SuggestionList.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_demo._SuggestionList.prototype;
  dart.addTypeTests(search_demo._SuggestionList);
  dart.setMethodSignature(search_demo._SuggestionList, () => ({
    __proto__: dart.getMethods(search_demo._SuggestionList.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_demo._SuggestionList, "package:flutter_web.examples.gallery/demo/material/search_demo.dart");
  dart.setFieldSignature(search_demo._SuggestionList, () => ({
    __proto__: dart.getFields(search_demo._SuggestionList.__proto__),
    suggestions: dart.finalFieldType(core.List$(core.String)),
    query: dart.finalFieldType(core.String),
    onSelected: dart.finalFieldType(dart.fnType(dart.void, [core.String]))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/search_demo", {
    "package:flutter_web.examples.gallery/demo/material/search_demo.dart": search_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYoC;IAAkB;;;;;;EACtD;;;;;;;;MAJsB,gCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAaH;;AACxB,YAAO,iCACA,4BACG,iCACG,yCACE,yBACH,2CACgB,gDACN,+BACJ,AAAU,uGAEX;AAC6B,cAAtC,AAAa,AAAa;oHAIb,sBACf,yCACW,0CAEE;AACC,gCAAW,MAAM,sCAChB,OAAO,YACN;AAEZ,oBAAI,QAAQ,IAAI,QAAQ,QAAQ,IAAI;AAGhC,kBAFF,cAAS;AACwB,oBAA/B,6BAAuB,QAAQ;;;cAGpC,gGAEH,2HACA,yCACW,gCACH,kBACuB,YAArB,AAAY,gBAAT,OAAO,YAA6B,+BACjC,yBACA,4FAEH;0JAIX,6BACG,yCACgC,yCACnB,sBAChB,qCACS,yCACgC,yCACnB,sBAChB,sCACuC,mQAmB7C,kBAAK,AAA2D,sCAAZ,uCAArB,OAAwB,gBAAO,yMAIzB,mEAChC,mBACE;AACkB,YAAjB,AAAY,uBAAT,OAAO;wIAKhB,8BACC,gCACa,qCAWL,+CACA,OAAO,aAEL;IAUvB;;;IApHgC,kBAAY;IACb,qBAAe;IAE1C;;;EAkHN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iBAQmC;AAC/B,YAAO,0CACI,cACH,2CACgB,mDACV,8FAED;AACW,UAApB,WAAM,OAAO,EAAE;;IAGrB;qBAGqC;AACf,wBAAc,AAAM,uBAClC,iBACA,AAAM,oBAAM,QAAK,KAAU,AAAC,SAAH,CAAC,eAAa;AAE7C,YAAO,6CACE,yBACM,AAAY,AAA6B,WAA9B,oBAAa,QAAK,KAAU,SAAF,CAAC,2CACvC,QAAQ;AACA,UAAlB,aAAQ,UAAU;AACE,UAApB,iBAAY,OAAO;;IAGzB;iBAGiC;AACrB,qBAAe,kBAAS;AAClC,UAAI,AAAS,QAAD,IAAI,mBAAS,AAAM,uBAAS,QAAQ;AAC9C,cAAO,8BACE,kBACL,AAAsE,gBAAnE,cAAK,8EACa;;AAK3B,YAAO,yCACa,sBAChB,wCACS,yBACE,QAAQ,kBACD,iEAElB,wCACS,yBACW,aAAT,QAAQ,IAAG,mBACJ,iEAElB,wCACS,6BACW,aAAT,QAAQ,IAAG,mBACJ;IAIxB;iBAGuC;AACrC,YAAe,uBACb,AAAM,uBACA,yCACW,kDAEE;AAC4B,YAArC,aAAQ;wFAGZ,yCACW,2CAEE;AACC,YAAV,aAAQ;AACgB,YAAxB,qBAAgB,OAAO;;IAIrC;;;IAvFgB,cAAM,AACuB,AAAS,qBAA/B,QAAQ,QAAK,KAAM,CAAC;IAC3B,iBAAgB,mBAAC,OAAO,OAAO,OAAO,IAAI;;;EAsF5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKY;;;;;;IACG;;;;;;IACa;;;;;;UAGA;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,kDACE;AACiC,UAAtC,AAAe,0BAAM,OAAO,EAAE;iCAEzB,0BACE,wDAEE,gCACa,sBAChB,kBAAK,wEACL,kBACY,SAAR,uBACK,AAAM,AAAU,AAAS,KAApB,wCAAuC;IAOjE;;;QA5BwB;QAAc;QAAY;;IAA1B;IAAc;IAAY;AAA5C;;EAA4D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkC/C;;;;;;IACN;;;;;;IACc;;;;;;UAGD;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAgB,8CACH,AAAY,wCACV,SAAc,SAAa;AACzB,2BAAa,AAAW,wBAAC,CAAC;AACvC,gBAAO,sCACI,AAAM,iEACR,8BACC,kCACE,AAAW,UAAD,aAAW,GAAG,AAAM,2BAEhC,AAAM,AAAU,AAAQ,KAAnB,yCAAmD,gCACxC,wBAClB,kCACQ,AAAW,UAAD,aAAW,AAAM,2BAC1B,AAAM,AAAU,KAAX,4FAKb;AACiB,cAAtB,gBAAW,UAAU;;;IAK/B;;;QAlC4B;QAAkB;QAAY;;IAA9B;IAAkB;IAAY;AAApD;;EAAgE","file":"search_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__search_demo: search_demo
  };
});

//# sourceMappingURL=search_demo.ddc.js.map
