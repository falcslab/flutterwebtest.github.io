define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web$46examples$46gallery__demo__material__full_screen_dialog_demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const time = packages__flutter_web__material.src__material__time;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const icons = packages__flutter_web__material.src__material__icons;
  const time_picker = packages__flutter_web__material.src__material__time_picker;
  const page = packages__flutter_web__material.src__material__page;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const container = packages__flutter_web__animation.src__widgets__container;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const full_screen_dialog_demo = packages__flutter_web$46examples$46gallery__demo__material__full_screen_dialog_demo.demo__material__full_screen_dialog_demo;
  const dialog_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TimeOfDayToNull = () => (TimeOfDayToNull = dart.constFn(dart.fnType(core.Null, [time.TimeOfDay])))();
  let MaterialPageRouteOfDismissDialogAction = () => (MaterialPageRouteOfDismissDialogAction = dart.constFn(page.MaterialPageRoute$(full_screen_dialog_demo.DismissDialogAction)))();
  let BuildContextToFullScreenDialogDemo = () => (BuildContextToFullScreenDialogDemo = dart.constFn(dart.fnType(full_screen_dialog_demo.FullScreenDialogDemo, [framework.BuildContext])))();
  let WidgetToContainer = () => (WidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dialog_demo.DialogDemoAction.prototype,
        [_name$]: "DialogDemoAction.cancel",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dialog_demo.DialogDemoAction.prototype,
        [_name$]: "DialogDemoAction.discard",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: dialog_demo.DialogDemoAction.prototype,
        [_name$]: "DialogDemoAction.disagree",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: dialog_demo.DialogDemoAction.prototype,
        [_name$]: "DialogDemoAction.agree",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], dialog_demo.DialogDemoAction);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 22,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 34,
        [_Location_line]: 41,
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
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 16
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 44,
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
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 40,
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
        [_Location_column]: 14,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 37,
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
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 72,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 36,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
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
        [Text_data]: "Dialogs"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 56,
        [_Location_line]: 95,
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
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 94,
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
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 72,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 72
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
        [Text_data]: "ALERT"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
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
        [Text_data]: "CANCEL"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
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
        [Text_data]: "DISCARD"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 29,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 29,
        [_Location_line]: 110,
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
        [_Location_column]: 32,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 104,
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
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
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
        [Text_data]: "ALERT WITH TITLE"
      });
    },
    get C66() {
      return C66 = dart.const({
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
        [Text_data]: "Use Google's location service?"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 134,
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
        [_Location_column]: 38,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
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
        [Text_data]: "DISAGREE"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 138,
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
        [_Location_column]: 31,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
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
        [Text_data]: "AGREE"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 29,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 29,
        [_Location_line]: 135,
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
        [_Location_column]: 32,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
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
        [Text_data]: "SIMPLE"
      });
    },
    get C91() {
      return C91 = dart.const({
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
        [Text_data]: "Set backup account"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 35,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 35,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 35,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 35,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 29,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 152,
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
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
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
        [Text_data]: "CONFIRMATION"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 73,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 29,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 64,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
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
        [Text_data]: "FULLSCREEN"
      });
    },
    get C130() {
      return C130 = dart.constList([], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 194,
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
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/dialog_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(dialog_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  dialog_demo.DialogDemoAction = class DialogDemoAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dialog_demo.DialogDemoAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dialog_demo.DialogDemoAction.prototype;
  dart.addTypeTests(dialog_demo.DialogDemoAction);
  dart.setLibraryUri(dialog_demo.DialogDemoAction, "package:flutter_web.examples.gallery/demo/material/dialog_demo.dart");
  dart.setFieldSignature(dialog_demo.DialogDemoAction, () => ({
    __proto__: dart.getFields(dialog_demo.DialogDemoAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dialog_demo.DialogDemoAction, ['toString']);
  dialog_demo.DialogDemoAction.cancel = C0 || CT.C0;
  dialog_demo.DialogDemoAction.discard = C1 || CT.C1;
  dialog_demo.DialogDemoAction.disagree = C2 || CT.C2;
  dialog_demo.DialogDemoAction.agree = C3 || CT.C3;
  dialog_demo.DialogDemoAction.values = C4 || CT.C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C10;
  let C13;
  let C12;
  let C11;
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
  const icon$ = dart.privateName(dialog_demo, "DialogDemoItem.icon");
  const color$ = dart.privateName(dialog_demo, "DialogDemoItem.color");
  const text$ = dart.privateName(dialog_demo, "DialogDemoItem.text");
  const onPressed$ = dart.privateName(dialog_demo, "DialogDemoItem.onPressed");
  dialog_demo.DialogDemoItem = class DialogDemoItem extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      return new dialog.SimpleDialogOption.new({onPressed: this.onPressed, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(this.icon, {size: 36.0, color: this.color, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Padding.new({padding: C10 || CT.C10, child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (dialog_demo.DialogDemoItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[color$] = color;
    this[text$] = text;
    this[onPressed$] = onPressed;
    dialog_demo.DialogDemoItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog_demo.DialogDemoItem.prototype;
  dart.addTypeTests(dialog_demo.DialogDemoItem);
  dart.setMethodSignature(dialog_demo.DialogDemoItem, () => ({
    __proto__: dart.getMethods(dialog_demo.DialogDemoItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog_demo.DialogDemoItem, "package:flutter_web.examples.gallery/demo/material/dialog_demo.dart");
  dart.setFieldSignature(dialog_demo.DialogDemoItem, () => ({
    __proto__: dart.getFields(dialog_demo.DialogDemoItem.__proto__),
    icon: dart.finalFieldType(icon_data.IconData),
    color: dart.finalFieldType(ui.Color),
    text: dart.finalFieldType(core.String),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dialog_demo.DialogDemo = class DialogDemo extends framework.StatefulWidget {
    createState() {
      return new dialog_demo.DialogDemoState.new();
    }
  };
  (dialog_demo.DialogDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    dialog_demo.DialogDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog_demo.DialogDemo.prototype;
  dart.addTypeTests(dialog_demo.DialogDemo);
  dart.setMethodSignature(dialog_demo.DialogDemo, () => ({
    __proto__: dart.getMethods(dialog_demo.DialogDemo.__proto__),
    createState: dart.fnType(dialog_demo.DialogDemoState, [])
  }));
  dart.setLibraryUri(dialog_demo.DialogDemo, "package:flutter_web.examples.gallery/demo/material/dialog_demo.dart");
  dart.defineLazy(dialog_demo.DialogDemo, {
    /*dialog_demo.DialogDemo.routeName*/get routeName() {
      return "/material/dialog";
    }
  });
  const _scaffoldKey = dart.privateName(dialog_demo, "_scaffoldKey");
  const _selectedTime = dart.privateName(dialog_demo, "_selectedTime");
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
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
  let C33;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C41;
  let C42;
  let C45;
  let C46;
  let C44;
  let C43;
  let C47;
  let C50;
  let C51;
  let C49;
  let C48;
  let C52;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C65;
  let C66;
  let C69;
  let C70;
  let C68;
  let C67;
  let C71;
  let C74;
  let C75;
  let C73;
  let C72;
  let C76;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C89;
  let C87;
  let C86;
  let C90;
  let C91;
  let C94;
  let C95;
  let C96;
  let C97;
  let C93;
  let C92;
  let C100;
  let C101;
  let C102;
  let C103;
  let C99;
  let C98;
  let C106;
  let C107;
  let C108;
  let C105;
  let C104;
  let C111;
  let C112;
  let C110;
  let C109;
  let C115;
  let C116;
  let C114;
  let C113;
  let C117;
  let C120;
  let C119;
  let C118;
  let C123;
  let C122;
  let C121;
  let C126;
  let C127;
  let C125;
  let C124;
  let C128;
  let C130;
  let C129;
  let C133;
  let C134;
  let C132;
  let C131;
  let C135;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C143;
  let C141;
  let C140;
  let C146;
  let C147;
  let C148;
  let C145;
  let C144;
  dialog_demo.DialogDemoState = class DialogDemoState extends framework.State$(dialog_demo.DialogDemo) {
    initState() {
      super.initState();
      let now = new core.DateTime.now();
      this[_selectedTime] = new time.TimeOfDay.new({hour: now.hour, minute: now.minute});
    }
    showDemoDialog(T, opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let child = opts && 'child' in opts ? opts.child : null;
      dialog.showDialog(T, {context: context, builder: dart.fn(context => child, BuildContextToWidget())}).then(dart.void, dart.fn(value => {
        if (value != null) {
          this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("You selected: " + dart.str(value), {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}));
        }
      }, dart.fnType(core.Null, [T])));
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let dialogTextStyle = theme.textTheme.subhead.copyWith({color: theme.textTheme.caption.color});
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C33 || CT.C33, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/dialog", {$creationLocationd_0dea112b090073317d4: C34 || CT.C34})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), body: new scroll_view.ListView.new({padding: C41 || CT.C41, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: C42 || CT.C42, onPressed: dart.fn(() => {
                this.showDemoDialog(dialog_demo.DialogDemoAction, {context: context, child: new dialog.AlertDialog.new({content: new text.Text.new("Discard draft?", {style: dialogTextStyle, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C47 || CT.C47, onPressed: dart.fn(() => {
                          navigator.Navigator.pop(dialog_demo.DialogDemoAction, context, dialog_demo.DialogDemoAction.cancel);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new flat_button.FlatButton.new({child: C52 || CT.C52, onPressed: dart.fn(() => {
                          navigator.Navigator.pop(dialog_demo.DialogDemoAction, context, dialog_demo.DialogDemoAction.discard);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})});
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new raised_button.RaisedButton.new({child: C65 || CT.C65, onPressed: dart.fn(() => {
                this.showDemoDialog(dialog_demo.DialogDemoAction, {context: context, child: new dialog.AlertDialog.new({title: C66 || CT.C66, content: new text.Text.new(dialog_demo._alertWithTitleText, {style: dialogTextStyle, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C71 || CT.C71, onPressed: dart.fn(() => {
                          navigator.Navigator.pop(dialog_demo.DialogDemoAction, context, dialog_demo.DialogDemoAction.disagree);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new flat_button.FlatButton.new({child: C76 || CT.C76, onPressed: dart.fn(() => {
                          navigator.Navigator.pop(dialog_demo.DialogDemoAction, context, dialog_demo.DialogDemoAction.agree);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81})});
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new raised_button.RaisedButton.new({child: C90 || CT.C90, onPressed: dart.fn(() => {
                this.showDemoDialog(core.String, {context: context, child: new dialog.SimpleDialog.new({title: C91 || CT.C91, children: JSArrayOfWidget().of([new dialog_demo.DialogDemoItem.new({icon: icons.Icons.account_circle, color: theme.primaryColor, text: "username@gmail.com", onPressed: dart.fn(() => {
                          navigator.Navigator.pop(core.String, context, "username@gmail.com");
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), new dialog_demo.DialogDemoItem.new({icon: icons.Icons.account_circle, color: theme.primaryColor, text: "user02@gmail.com", onPressed: dart.fn(() => {
                          navigator.Navigator.pop(core.String, context, "user02@gmail.com");
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), new dialog_demo.DialogDemoItem.new({icon: icons.Icons.add_circle, text: "add account", color: theme.disabledColor, $creationLocationd_0dea112b090073317d4: C104 || CT.C104})]), $creationLocationd_0dea112b090073317d4: C109 || CT.C109})});
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new raised_button.RaisedButton.new({child: C117 || CT.C117, onPressed: dart.fn(() => {
                time_picker.showTimePicker({context: context, initialTime: this[_selectedTime]}).then(dart.void, dart.fn(value => {
                  if (value != null && !dart.equals(value, this[_selectedTime])) {
                    this[_selectedTime] = value;
                    this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("You selected: " + dart.str(value.format(context)), {$creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}));
                  }
                }, TimeOfDayToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), new raised_button.RaisedButton.new({child: C128 || CT.C128, onPressed: dart.fn(() => {
                navigator.Navigator.push(full_screen_dialog_demo.DismissDialogAction, context, new (MaterialPageRouteOfDismissDialogAction()).new({builder: dart.fn(context => new full_screen_dialog_demo.FullScreenDialogDemo.new({$creationLocationd_0dea112b090073317d4: C129 || CT.C129}), BuildContextToFullScreenDialogDemo()), fullscreenDialog: true}));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C131 || CT.C131})])[$map](framework.Widget, dart.fn(button => new container.Container.new({padding: C135 || CT.C135, child: button, $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), WidgetToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144});
    }
  };
  (dialog_demo.DialogDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_selectedTime] = null;
    dialog_demo.DialogDemoState.__proto__.new.call(this);
    ;
  }).prototype = dialog_demo.DialogDemoState.prototype;
  dart.addTypeTests(dialog_demo.DialogDemoState);
  dart.setMethodSignature(dialog_demo.DialogDemoState, () => ({
    __proto__: dart.getMethods(dialog_demo.DialogDemoState.__proto__),
    showDemoDialog: dart.gFnType(T => [dart.void, [], {child: framework.Widget, context: framework.BuildContext}, {}]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog_demo.DialogDemoState, "package:flutter_web.examples.gallery/demo/material/dialog_demo.dart");
  dart.setFieldSignature(dialog_demo.DialogDemoState, () => ({
    __proto__: dart.getFields(dialog_demo.DialogDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_selectedTime]: dart.fieldType(time.TimeOfDay)
  }));
  dart.defineLazy(dialog_demo, {
    /*dialog_demo._alertWithoutTitleText*/get _alertWithoutTitleText() {
      return "Discard draft?";
    },
    /*dialog_demo._alertWithTitleText*/get _alertWithTitleText() {
      return "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/dialog_demo", {
    "package:flutter_web.examples.gallery/demo/material/dialog_demo.dart": dialog_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dialog_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcA;;sDALK;;;;EAKL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaiB;;;;;;IACH;;;;;;IACC;;;;;;IACM;;;;;;UAGO;AACxB,YAAO,+CACM,uBACJ,sCACgC,kDACE,0CACrB,sBAChB,kBAAK,kBAAY,aAAa,mEAC9B,sDAES,kBAAK;IAKtB;;;QAxBS;QAAU;QAAW;QAAY;QAAW;;IAAlC;IAAW;IAAY;IAAW;AAC/C,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;AA8BY;IAAiB;;;;;;EACpD;;;;;;;;MAJsB,gCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaV,MAAX;AACS,gBAAe;AAC+B,MAA7D,sBAAgB,8BAAgB,AAAI,GAAD,eAAe,AAAI,GAAD;IACvD;;UAEqC;UAAgB;AAUjD,MATF,AAGE,+BAFS,OAAO,WACP,QAAc,WAAY,KAAK,4CAC7B,QAAG;AAEd,YAAI,KAAK,IAAI;AAEuD,UADlE,AAAa,AACR,6CAAa,qCAAkB,kBAAK,AAAsB,4BAAN,KAAK;;;IAGpE;UAG0B;AACR,kBAAc,gBAAG,OAAO;AACxB,4BACZ,AAAM,AAAU,AAAQ,KAAnB,oCAAmC,AAAM,AAAU,AAAQ,KAAnB;AAEjD,YAAO,iCACE,4BACG,uDAEW,sBACf,4LAGE,gEAGgB,AAwGb,AAIF,sBA3GD,qEAEe;AAmBE,gBAlBX,4DACa,OAAO,SACT,qCACM,4CACE,eAAe,oEACT,sBACf,iEAEe;AAE4B,0BAD3B,sDACN,OAAO,EAAmB;mGAEpC,iEAEe;AAE6B,0BAD5B,sDACN,OAAO,EAAmB;;yFAIpD,qEAEe;AAqBE,gBApBX,4DACa,OAAO,SACT,2DAGM,kBAAK,yCACH,eAAe,oEACT,sBACf,iEAEe;AAE8B,0BAD7B,sDACN,OAAO,EAAmB;mGAEpC,iEAEe;AAE2B,0BAD1B,sDACN,OAAO,EAAmB;;yFAIpD,qEAEe;AAyBE,gBAxBX,2CACa,OAAO,SACT,6DAEe,sBAChB,0CACgB,mCACL,AAAM,KAAD,qBACN,iCACK;AAEyB,0BADxB,qCACN,OAAO,EAAE;mGAEnB,0CACgB,mCACL,AAAM,KAAD,qBACN,+BACK;AACiC,0BAAhC,qCAAI,OAAO,EAAE;mGAE7B,0CACgB,8BACN,sBACC,AAAM,KAAD;2FAGhC,uEAEe;AASP,gBARF,AACK,qCADmB,OAAO,eAAe,sCAC9B,QAAW;AACzB,sBAAI,KAAK,IAAI,qBAAQ,KAAK,EAAI;AACP,oBAArB,sBAAgB,KAAK;AAG8B,oBAFnD,AAAa,AAAa,6CAAa,qCAC1B,kBACL,AAAwC,4BAAvB,AAAM,KAAD,QAAQ,OAAO;;;2FAIvD,uEAEe;AAOH,gBANI,sEACN,OAAO,EACP,6DACW,QAAc,WACnB,0KACc;oHAKf,QAAQ,UAChB,8DAEI,MAAM;IAE7B;;;IAtJ+B,qBAAe;IAEpC;;;EAqJZ;;;;;;;;;;;;;;MAlMa,kCAAsB;;;MAEtB,+BAAmB","file":"dialog_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__dialog_demo: dialog_demo
  };
});

//# sourceMappingURL=dialog_demo.ddc.js.map
