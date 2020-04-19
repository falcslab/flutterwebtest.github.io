define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/intl/intl', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__intl__intl, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time = packages__flutter_web__material.src__material__time;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const date_picker = packages__flutter_web__material.src__material__date_picker;
  const time_picker = packages__flutter_web__material.src__material__time_picker;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const checkbox = packages__flutter_web__material.src__material__checkbox;
  const text = packages__flutter_web__animation.src__widgets__text;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const form = packages__flutter_web__animation.src__widgets__form;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const intl = packages__intl__intl.intl;
  const ui = packages__flutter_web_ui__ui.ui;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const full_screen_dialog_demo = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let DateTimeToNull = () => (DateTimeToNull = dart.constFn(dart.fnType(core.Null, [core.DateTime])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let TimeOfDayToNull = () => (TimeOfDayToNull = dart.constFn(dart.fnType(core.Null, [time.TimeOfDay])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let WidgetToContainer = () => (WidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: full_screen_dialog_demo.DismissDialogAction.prototype,
        [_name$]: "DismissDialogAction.cancel",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: full_screen_dialog_demo.DismissDialogAction.prototype,
        [_name$]: "DismissDialogAction.discard",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: full_screen_dialog_demo.DismissDialogAction.prototype,
        [_name$]: "DismissDialogAction.save",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], full_screen_dialog_demo.DismissDialogAction);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2592000000000.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 64,
        [_Location_line]: 60,
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
        [_Location_column]: 29,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2315255808.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58821
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C10 || CT.C10,
        [Icon_size]: null,
        [Icon_icon]: C11 || CT.C11
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 59,
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
        [_Location_column]: 30,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 43,
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
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 38,
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
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 8
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 80,
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
        [_Location_column]: 21,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 30,
        [_Location_line]: 79,
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
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 79,
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
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 20,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 36,
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
        [_Location_column]: 12,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 51,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
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
        [Text_data]: "CANCEL"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 117,
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
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
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
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 123,
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
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 114,
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
        [_Location_column]: 20,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 145,
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
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Event name",
        [InputDecoration_icon]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 25,
        [_Location_line]: 161,
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
        [_Location_column]: 28,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Where is the event?",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Location",
        [InputDecoration_icon]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 25,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 36,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dateTime",
        [_Location_column]: 27,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dateTime",
        [_Location_column]: 27,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
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
        [Text_data]: "All-day"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 32,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillPop",
        [_Location_column]: 11,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 149,
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
        [_Location_column]: 12,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(full_screen_dialog_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  full_screen_dialog_demo.DismissDialogAction = class DismissDialogAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (full_screen_dialog_demo.DismissDialogAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = full_screen_dialog_demo.DismissDialogAction.prototype;
  dart.addTypeTests(full_screen_dialog_demo.DismissDialogAction);
  dart.setLibraryUri(full_screen_dialog_demo.DismissDialogAction, "package:flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart");
  dart.setFieldSignature(full_screen_dialog_demo.DismissDialogAction, () => ({
    __proto__: dart.getFields(full_screen_dialog_demo.DismissDialogAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(full_screen_dialog_demo.DismissDialogAction, ['toString']);
  full_screen_dialog_demo.DismissDialogAction.cancel = C0 || CT.C0;
  full_screen_dialog_demo.DismissDialogAction.discard = C1 || CT.C1;
  full_screen_dialog_demo.DismissDialogAction.save = C2 || CT.C2;
  full_screen_dialog_demo.DismissDialogAction.values = C3 || CT.C3;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C4;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C5;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C7;
  let C6;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color__value = dart.privateName(ui, "Color._value");
  let C10;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C11;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
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
  let C42;
  let C43;
  let C44;
  let C40;
  let C39;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C49;
  let C48;
  const date = dart.privateName(full_screen_dialog_demo, "DateTimeItem.date");
  const time$ = dart.privateName(full_screen_dialog_demo, "DateTimeItem.time");
  const onChanged$ = dart.privateName(full_screen_dialog_demo, "DateTimeItem.onChanged");
  full_screen_dialog_demo.DateTimeItem = class DateTimeItem extends framework.StatelessWidget {
    get date() {
      return this[date];
    }
    set date(value) {
      super.date = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new text.DefaultTextStyle.new({style: theme.textTheme.subhead, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new container.Container.new({padding: C4 || CT.C4, decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                    date_picker.showDatePicker({context: context, initialDate: this.date, firstDate: this.date.subtract(C5 || CT.C5), lastDate: this.date.add(C5 || CT.C5)}).then(dart.void, dart.fn(value => {
                      if (value != null) this.onChanged(new core.DateTime.new(value.year, value.month, value.day, this.time.hour, this.time.minute));
                    }, DateTimeToNull()));
                  }, VoidToNull()), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new(new intl.DateFormat.new("EEE, MMM d yyyy").format(this.date), {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), C9 || CT.C9]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new container.Container.new({margin: C28 || CT.C28, padding: C4 || CT.C4, decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                  time_picker.showTimePicker({context: context, initialTime: this.time}).then(dart.void, dart.fn(value => {
                    if (value != null) this.onChanged(new core.DateTime.new(this.date.year, this.date.month, this.date.day, value.hour, value.minute));
                  }, TimeOfDayToNull()));
                }, VoidToNull()), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new(dart.str(this.time.format(context)), {$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), C9 || CT.C9]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
    }
  };
  (full_screen_dialog_demo.DateTimeItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let dateTime = opts && 'dateTime' in opts ? opts.dateTime : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onChanged$] = onChanged;
    if (!(onChanged != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart", 21, 16, "onChanged != null");
    this[date] = new core.DateTime.new(dateTime.year, dateTime.month, dateTime.day);
    this[time$] = new time.TimeOfDay.new({hour: dateTime.hour, minute: dateTime.minute});
    full_screen_dialog_demo.DateTimeItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = full_screen_dialog_demo.DateTimeItem.prototype;
  dart.addTypeTests(full_screen_dialog_demo.DateTimeItem);
  dart.setMethodSignature(full_screen_dialog_demo.DateTimeItem, () => ({
    __proto__: dart.getMethods(full_screen_dialog_demo.DateTimeItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(full_screen_dialog_demo.DateTimeItem, "package:flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart");
  dart.setFieldSignature(full_screen_dialog_demo.DateTimeItem, () => ({
    __proto__: dart.getFields(full_screen_dialog_demo.DateTimeItem.__proto__),
    date: dart.finalFieldType(core.DateTime),
    time: dart.finalFieldType(time.TimeOfDay),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime]))
  }));
  full_screen_dialog_demo.FullScreenDialogDemo = class FullScreenDialogDemo extends framework.StatefulWidget {
    createState() {
      return new full_screen_dialog_demo.FullScreenDialogDemoState.new();
    }
  };
  (full_screen_dialog_demo.FullScreenDialogDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    full_screen_dialog_demo.FullScreenDialogDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = full_screen_dialog_demo.FullScreenDialogDemo.prototype;
  dart.addTypeTests(full_screen_dialog_demo.FullScreenDialogDemo);
  dart.setMethodSignature(full_screen_dialog_demo.FullScreenDialogDemo, () => ({
    __proto__: dart.getMethods(full_screen_dialog_demo.FullScreenDialogDemo.__proto__),
    createState: dart.fnType(full_screen_dialog_demo.FullScreenDialogDemoState, [])
  }));
  dart.setLibraryUri(full_screen_dialog_demo.FullScreenDialogDemo, "package:flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart");
  const _fromDateTime = dart.privateName(full_screen_dialog_demo, "_fromDateTime");
  const _toDateTime = dart.privateName(full_screen_dialog_demo, "_toDateTime");
  const _allDayValue = dart.privateName(full_screen_dialog_demo, "_allDayValue");
  const _saveNeeded = dart.privateName(full_screen_dialog_demo, "_saveNeeded");
  const _hasLocation = dart.privateName(full_screen_dialog_demo, "_hasLocation");
  const _hasName = dart.privateName(full_screen_dialog_demo, "_hasName");
  const _eventName = dart.privateName(full_screen_dialog_demo, "_eventName");
  let C54;
  let C55;
  let C53;
  let C52;
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
  let C58;
  let C57;
  let C61;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  const _onWillPop = dart.privateName(full_screen_dialog_demo, "_onWillPop");
  let C72;
  let C71;
  let C70;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C82;
  let C81;
  let C85;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C86;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C95;
  let C96;
  let C93;
  let C92;
  let C97;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C106;
  let C103;
  let C102;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C112;
  let C111;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C122;
  let C120;
  let C119;
  let C125;
  let C126;
  let C124;
  let C123;
  let C127;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C135;
  let C133;
  let C132;
  let C138;
  let C137;
  let C136;
  let C141;
  let C142;
  let C140;
  let C139;
  let C145;
  let C146;
  let C147;
  let C144;
  let C143;
  let C150;
  let C151;
  let C149;
  let C148;
  let C154;
  let C155;
  let C153;
  let C152;
  let C158;
  let C159;
  let C157;
  let C156;
  full_screen_dialog_demo.FullScreenDialogDemoState = class FullScreenDialogDemoState extends framework.State$(full_screen_dialog_demo.FullScreenDialogDemo) {
    [_onWillPop]() {
      return async.async(core.bool, (function* _onWillPop() {
        let t0;
        this[_saveNeeded] = dart.test(this[_hasLocation]) || dart.test(this[_hasName]) || dart.test(this[_saveNeeded]);
        if (!dart.test(this[_saveNeeded])) return true;
        let theme = theme$.Theme.of(this.context);
        let dialogTextStyle = theme.textTheme.subhead.copyWith({color: theme.textTheme.caption.color});
        t0 = (yield dialog.showDialog(core.bool, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new text.Text.new("Discard new event?", {style: dialogTextStyle, $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C56 || CT.C56, onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.bool, false);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new flat_button.FlatButton.new({child: C61 || CT.C61, onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.bool, true);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), BuildContextToAlertDialog())}));
        return t0 == null ? false : t0;
      }).bind(this));
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(dart.test(this[_hasName]) ? this[_eventName] : "Event Name TBD", {$creationLocationd_0dea112b090073317d4: C70 || CT.C70}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("SAVE", {style: theme.textTheme.body1.copyWith({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), onPressed: dart.fn(() => {
                navigator.Navigator.pop(full_screen_dialog_demo.DismissDialogAction, context, full_screen_dialog_demo.DismissDialogAction.save);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), body: new form.Form.new({onWillPop: dart.bind(this, _onWillPop), child: new scroll_view.ListView.new({padding: C85 || CT.C85, children: JSArrayOfWidget().of([new container.Container.new({padding: C4 || CT.C4, alignment: alignment.Alignment.bottomLeft, child: new text_field.TextField.new({decoration: C86 || CT.C86, style: theme.textTheme.headline, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this[_hasName] = value[$isNotEmpty];
                      if (dart.test(this[_hasName])) {
                        this[_eventName] = value;
                      }
                    }, VoidToNull()));
                  }, StringToNull()), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), new container.Container.new({padding: C4 || CT.C4, alignment: alignment.Alignment.bottomLeft, child: new text_field.TextField.new({decoration: C97 || CT.C97, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this[_hasLocation] = value[$isNotEmpty];
                    }, VoidToNull()));
                  }, StringToNull()), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("From", {style: theme.textTheme.caption, $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new full_screen_dialog_demo.DateTimeItem.new({dateTime: this[_fromDateTime], onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_fromDateTime] = value;
                        this[_saveNeeded] = true;
                      }, VoidToNull()));
                    }, DateTimeToNull()), $creationLocationd_0dea112b090073317d4: C111 || CT.C111})]), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("To", {style: theme.textTheme.caption, $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), new full_screen_dialog_demo.DateTimeItem.new({dateTime: this[_toDateTime], onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_toDateTime] = value;
                        this[_saveNeeded] = true;
                      }, VoidToNull()));
                    }, DateTimeToNull()), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), C127 || CT.C127]), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), child: new basic.Row.new({children: JSArrayOfWidget().of([new checkbox.Checkbox.new({value: this[_allDayValue], onChanged: dart.fn(value => {
                        this.setState(dart.fn(() => {
                          this[_allDayValue] = value;
                          this[_saveNeeded] = true;
                        }, VoidToNull()));
                      }, boolToNull()), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), C127 || CT.C127]), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139})])[$map](framework.Widget, dart.fn(child => new container.Container.new({padding: C4 || CT.C4, height: 96.0, child: child, $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), WidgetToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156});
    }
  };
  (full_screen_dialog_demo.FullScreenDialogDemoState.new = function() {
    this[_fromDateTime] = new core.DateTime.now();
    this[_toDateTime] = new core.DateTime.now();
    this[_allDayValue] = false;
    this[_saveNeeded] = false;
    this[_hasLocation] = false;
    this[_hasName] = false;
    this[_eventName] = null;
    full_screen_dialog_demo.FullScreenDialogDemoState.__proto__.new.call(this);
    ;
  }).prototype = full_screen_dialog_demo.FullScreenDialogDemoState.prototype;
  dart.addTypeTests(full_screen_dialog_demo.FullScreenDialogDemoState);
  dart.setMethodSignature(full_screen_dialog_demo.FullScreenDialogDemoState, () => ({
    __proto__: dart.getMethods(full_screen_dialog_demo.FullScreenDialogDemoState.__proto__),
    [_onWillPop]: dart.fnType(async.Future$(core.bool), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(full_screen_dialog_demo.FullScreenDialogDemoState, "package:flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart");
  dart.setFieldSignature(full_screen_dialog_demo.FullScreenDialogDemoState, () => ({
    __proto__: dart.getFields(full_screen_dialog_demo.FullScreenDialogDemoState.__proto__),
    [_fromDateTime]: dart.fieldType(core.DateTime),
    [_toDateTime]: dart.fieldType(core.DateTime),
    [_allDayValue]: dart.fieldType(core.bool),
    [_saveNeeded]: dart.fieldType(core.bool),
    [_hasLocation]: dart.fieldType(core.bool),
    [_hasName]: dart.fieldType(core.bool),
    [_eventName]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo", {
    "package:flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.dart": full_screen_dialog_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["full_screen_dialog_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBA;;qEAJK;;;;EAIL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASiB;;;;;;IACC;;;;;;IACa;;;;;;UAGH;AACR,kBAAc,gBAAG,OAAO;AAExC,YAAO,uCACI,AAAM,AAAU,KAAX,2BACL,6BAAsB,sBAC3B,+BACW,+DAES,8CACA,mCACI,mCAAkB,AAAM,KAAD,4BAChC,iCACI;AAWH,oBAVF,AAMK,qCALY,OAAO,eACH,sBAET,AAAK,2CACC,AAAK,6CACP,QAAU;AACxB,0BAAI,KAAK,IAAI,MACX,AACuC,eAD7B,sBAAS,AAAM,KAAD,OAAO,AAAM,KAAD,QAChC,AAAM,KAAD,MAAM,AAAK,gBAAM,AAAK;;2CAG9B,sCACkC,+CACnB,sBAChB,kBAAK,AAA8B,wBAAnB,0BAA0B,uTAI5D,sFAGgB,8CAEJ,mCAAe,mCAAkB,AAAM,KAAD,4BACvC,iCACI;AAMH,kBALF,AACK,qCADmB,OAAO,eAAe,4BAC9B,QAAW;AACzB,wBAAI,KAAK,IAAI,MACX,AAC8B,eADpB,sBAAS,AAAK,gBAAM,AAAK,iBAAO,AAAK,eAC3C,AAAM,KAAD,OAAO,AAAM,KAAD;;yCAGpB,6BAAsB,sBAC3B,kBAA8B,SAAtB,AAAK,iBAAO,OAAO;IAI7C;;;QAhEkB;QAAc;QAAyB;;;UAC5C,AAAU,SAAD,IAAI;IACf,aAAE,sBAAS,AAAS,QAAD,OAAO,AAAS,QAAD,QAAQ,AAAS,QAAD;IAClD,cAAE,8BAAgB,AAAS,QAAD,eAAe,AAAS,QAAD;AACtD,wEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;AAiEsB;IAA2B;;;;;;EACxE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWyB;;AACgC,QAArD,oBAAuC,UAAzB,iCAAgB,6BAAY;AAC1C,uBAAK,oBAAa,MAAO;AAET,oBAAc,gBAAG;AACjB,8BACZ,AAAM,AAAU,AAAQ,KAAnB,oCAAmC,AAAM,AAAU,AAAQ,KAAnB;AAEjD,cAAO,MAAM,uCACE,uBACA,QAAc,WACd,qCACI,kBAAK,8BAA6B,eAAe,oEACzC,sBACf,iEAEe;AAEC,kBADA,AAAY,uBAAT,OAAO,iBAChB;2FAEV,iEAEe;AAEA,kBADC,AAAY,uBAAT,OAAO,iBAChB;;qBAhBf,OAsBH;MACN;;UAG0B;AACR,kBAAc,gBAAG,OAAO;AAExC,YAAO,oCACG,+BACG,4BAAK,kBAAW,mBAAa,qFACnB,sBACf,uCACW,kBAAK,gBACD,AAAM,AAAU,AAAM,KAAjB,kCAAwC,2FAC7C;AACuC,gBAAtC,qEAAI,OAAO,EAAsB;0JAGjD,wCACS,0BACJ,gEAEe,AAuEhB,AAKC,sBA3ED,8DAEyB,uCACd,gEAGI,AAAM,AAAU,KAAX,gCACD,QAAQ;AAMf,oBALF,cAAS;AACoB,sBAA3B,iBAAW,AAAM,KAAD;AAChB,oCAAI;AACgB,wBAAlB,mBAAa,KAAK;;;wJAIhC,8DAEyB,uCACd,oEAKQ,QAAQ;AAGf,oBAFF,cAAS;AACwB,sBAA/B,qBAAe,AAAM,KAAD;;0JAGhC,0CAC2C,yCACrB,sBAChB,kBAAK,gBAAe,AAAM,AAAU,KAAX,+EACzB,wDACc,gCACC,QAAU;AAIjB,sBAHF,cAAS;AACc,wBAArB,sBAAgB,KAAK;AACH,wBAAlB,oBAAc;;kKAI5B,0CAC2C,yCACrB,sBAChB,kBAAK,cAAa,AAAM,AAAU,KAAX,+EACvB,wDACc,8BACC,QAAU;AAIjB,sBAHF,cAAS;AACY,wBAAnB,oBAAc,KAAK;AACD,wBAAlB,oBAAc;;mLAK5B,yCACgB,8CACA,mCACI,mCAAkB,AAAM,KAAD,4BAChC,6BAAsB,sBAC3B,kCACW,+BACI,QAAM;AAIb,wBAHF,cAAS;AACa,0BAApB,qBAAe,KAAK;AACF,0BAAlB,oBAAc;;qQAKhB,QAAQ,SACb,2DAEK,aACD,KAAK;IAG9B;;;IA1IS,sBAAyB;IACzB,oBAAuB;IAC3B,qBAAe;IACf,oBAAc;IACd,qBAAe;IACf,iBAAW;IACT;;;EAqIT","file":"full_screen_dialog_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__full_screen_dialog_demo: full_screen_dialog_demo
  };
});

//# sourceMappingURL=full_screen_dialog_demo.ddc.js.map
