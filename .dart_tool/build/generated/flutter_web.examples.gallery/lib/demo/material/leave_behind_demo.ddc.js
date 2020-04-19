define(['dart_sdk', 'packages/flutter_web/animation', 'packages/collection/src/algorithms', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__collection__src__algorithms, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const dismissible = packages__flutter_web__animation.src__widgets__dismissible;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const semantics = packages__flutter_web__animation.src__semantics__semantics;
  const container = packages__flutter_web__animation.src__widgets__container;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const algorithms = packages__collection__src__algorithms.src__algorithms;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const ui = packages__flutter_web_ui__ui.ui;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const leave_behind_demo = Object.create(dart.library);
  const $compareTo = dartx.compareTo;
  const $insert = dartx.insert;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ListOfLeaveBehindItem = () => (ListOfLeaveBehindItem = dart.constFn(core.List$(leave_behind_demo.LeaveBehindItem)))();
  let intToLeaveBehindItem = () => (intToLeaveBehindItem = dart.constFn(dart.fnType(leave_behind_demo.LeaveBehindItem, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let LeaveBehindItemTo_LeaveBehindListItem = () => (LeaveBehindItemTo_LeaveBehindListItem = dart.constFn(dart.fnType(leave_behind_demo._LeaveBehindListItem, [leave_behind_demo.LeaveBehindItem])))();
  let PopupMenuButtonOfLeaveBehindDemoAction = () => (PopupMenuButtonOfLeaveBehindDemoAction = dart.constFn(popup_menu.PopupMenuButton$(leave_behind_demo.LeaveBehindDemoAction)))();
  let PopupMenuItemOfLeaveBehindDemoAction = () => (PopupMenuItemOfLeaveBehindDemoAction = dart.constFn(popup_menu.PopupMenuItem$(leave_behind_demo.LeaveBehindDemoAction)))();
  let CheckedPopupMenuItemOfLeaveBehindDemoAction = () => (CheckedPopupMenuItemOfLeaveBehindDemoAction = dart.constFn(popup_menu.CheckedPopupMenuItem$(leave_behind_demo.LeaveBehindDemoAction)))();
  let PopupMenuEntryOfLeaveBehindDemoAction = () => (PopupMenuEntryOfLeaveBehindDemoAction = dart.constFn(popup_menu.PopupMenuEntry$(leave_behind_demo.LeaveBehindDemoAction)))();
  let JSArrayOfPopupMenuEntryOfLeaveBehindDemoAction = () => (JSArrayOfPopupMenuEntryOfLeaveBehindDemoAction = dart.constFn(_interceptors.JSArray$(PopupMenuEntryOfLeaveBehindDemoAction())))();
  let ListOfPopupMenuEntryOfLeaveBehindDemoAction = () => (ListOfPopupMenuEntryOfLeaveBehindDemoAction = dart.constFn(core.List$(PopupMenuEntryOfLeaveBehindDemoAction())))();
  let BuildContextToListOfPopupMenuEntryOfLeaveBehindDemoAction = () => (BuildContextToListOfPopupMenuEntryOfLeaveBehindDemoAction = dart.constFn(dart.fnType(ListOfPopupMenuEntryOfLeaveBehindDemoAction(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let LinkedMapOfCustomSemanticsAction$VoidTovoid = () => (LinkedMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, VoidTovoid())))();
  let DismissDirectionToNull = () => (DismissDirectionToNull = dart.constFn(dart.fnType(core.Null, [dismissible.DismissDirection])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: leave_behind_demo.LeaveBehindDemoAction.prototype,
        [_name$]: "LeaveBehindDemoAction.reset",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: leave_behind_demo.LeaveBehindDemoAction.prototype,
        [_name$]: "LeaveBehindDemoAction.horizontalSwipe",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: leave_behind_demo.LeaveBehindDemoAction.prototype,
        [_name$]: "LeaveBehindDemoAction.leftSwipe",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: leave_behind_demo.LeaveBehindDemoAction.prototype,
        [_name$]: "LeaveBehindDemoAction.rightSwipe",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], leave_behind_demo.LeaveBehindDemoAction);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 97,
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
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "action",
        [_Location_column]: 9,
        [_Location_line]: 95,
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
        [_Location_column]: 44,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 107,
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
        [_Location_column]: 18,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 110,
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
        [_Location_column]: 17,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "action",
        [_Location_column]: 9,
        [_Location_line]: 108,
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
        [_Location_column]: 44,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
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
        [Text_data]: "Reset the list"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 120,
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
        [_Location_column]: 14,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "item",
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onArchive",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDelete",
        [_Location_column]: 11,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dismissDirection",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
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
        [Text_data]: "Swipe to dismiss"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 57,
        [_Location_line]: 140,
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
        [_Location_column]: 9,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: PopupMenuItemOfLeaveBehindDemoAction().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C27 || CT.C27,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C0 || CT.C0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: popup_menu.PopupMenuDivider.prototype,
        [Widget_key]: null,
        [PopupMenuDivider_height]: 16
      });
    },
    get C50() {
      return C50 = dart.const({
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
        [Text_data]: "Horizontal swipe"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 23,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
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
        [Text_data]: "Only swipe left"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 23,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 23,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 156,
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
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
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
        [Text_data]: "Only swipe right"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 23,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 23,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 160,
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
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 143,
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
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 61,
        [_Location_line]: 139,
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
        [_Location_column]: 15,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 163,
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
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: semantics.CustomSemanticsAction.prototype,
        [CustomSemanticsAction_action]: null,
        [CustomSemanticsAction_hint]: null,
        [CustomSemanticsAction_label]: "Archive"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: semantics.CustomSemanticsAction.prototype,
        [CustomSemanticsAction_action]: null,
        [CustomSemanticsAction_hint]: null,
        [CustomSemanticsAction_label]: "Delete"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59506
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C85 || CT.C85,
        [Icon_size]: 36,
        [Icon_icon]: C86 || CT.C86
      });
    },
    get C83() {
      return C83 = dart.const({
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
        [ListTile_title]: null,
        [ListTile_leading]: C84 || CT.C84
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57673
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C85 || CT.C85,
        [Icon_size]: 36,
        [Icon_icon]: C93 || CT.C93
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: C92 || CT.C92,
        [ListTile_subtitle]: null,
        [ListTile_title]: null,
        [ListTile_leading]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 15,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isThreeLine",
        [_Location_column]: 15,
        [_Location_line]: 223,
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
        [_Location_column]: 18,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 220,
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
        [_Location_column]: 16,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 9,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDismissed",
        [_Location_column]: 9,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 9,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondaryBackground",
        [_Location_column]: 9,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customSemanticsActions",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(leave_behind_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  leave_behind_demo.LeaveBehindDemoAction = class LeaveBehindDemoAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (leave_behind_demo.LeaveBehindDemoAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = leave_behind_demo.LeaveBehindDemoAction.prototype;
  dart.addTypeTests(leave_behind_demo.LeaveBehindDemoAction);
  dart.setLibraryUri(leave_behind_demo.LeaveBehindDemoAction, "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart");
  dart.setFieldSignature(leave_behind_demo.LeaveBehindDemoAction, () => ({
    __proto__: dart.getFields(leave_behind_demo.LeaveBehindDemoAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(leave_behind_demo.LeaveBehindDemoAction, ['toString']);
  leave_behind_demo.LeaveBehindDemoAction.reset = C0 || CT.C0;
  leave_behind_demo.LeaveBehindDemoAction.horizontalSwipe = C1 || CT.C1;
  leave_behind_demo.LeaveBehindDemoAction.leftSwipe = C2 || CT.C2;
  leave_behind_demo.LeaveBehindDemoAction.rightSwipe = C3 || CT.C3;
  leave_behind_demo.LeaveBehindDemoAction.values = C4 || CT.C4;
  const index$ = dart.privateName(leave_behind_demo, "LeaveBehindItem.index");
  const name$ = dart.privateName(leave_behind_demo, "LeaveBehindItem.name");
  const subject$ = dart.privateName(leave_behind_demo, "LeaveBehindItem.subject");
  const body$ = dart.privateName(leave_behind_demo, "LeaveBehindItem.body");
  leave_behind_demo.LeaveBehindItem = class LeaveBehindItem extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get subject() {
      return this[subject$];
    }
    set subject(value) {
      super.subject = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    compareTo(other) {
      leave_behind_demo.LeaveBehindItem._check(other);
      return this.index[$compareTo](other.index);
    }
  };
  (leave_behind_demo.LeaveBehindItem.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let subject = opts && 'subject' in opts ? opts.subject : null;
    let body = opts && 'body' in opts ? opts.body : null;
    this[index$] = index;
    this[name$] = name;
    this[subject$] = subject;
    this[body$] = body;
    ;
  }).prototype = leave_behind_demo.LeaveBehindItem.prototype;
  (leave_behind_demo.LeaveBehindItem.from = function(item) {
    this[index$] = item.index;
    this[name$] = item.name;
    this[subject$] = item.subject;
    this[body$] = item.body;
    ;
  }).prototype = leave_behind_demo.LeaveBehindItem.prototype;
  dart.addTypeTests(leave_behind_demo.LeaveBehindItem);
  leave_behind_demo.LeaveBehindItem[dart.implements] = () => [core.Comparable$(leave_behind_demo.LeaveBehindItem)];
  dart.setMethodSignature(leave_behind_demo.LeaveBehindItem, () => ({
    __proto__: dart.getMethods(leave_behind_demo.LeaveBehindItem.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(leave_behind_demo.LeaveBehindItem, "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart");
  dart.setFieldSignature(leave_behind_demo.LeaveBehindItem, () => ({
    __proto__: dart.getFields(leave_behind_demo.LeaveBehindItem.__proto__),
    index: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String),
    subject: dart.finalFieldType(core.String),
    body: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(leave_behind_demo.LeaveBehindItem, ['compareTo']);
  leave_behind_demo.LeaveBehindDemo = class LeaveBehindDemo extends framework.StatefulWidget {
    createState() {
      return new leave_behind_demo.LeaveBehindDemoState.new();
    }
  };
  (leave_behind_demo.LeaveBehindDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    leave_behind_demo.LeaveBehindDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = leave_behind_demo.LeaveBehindDemo.prototype;
  dart.addTypeTests(leave_behind_demo.LeaveBehindDemo);
  dart.setMethodSignature(leave_behind_demo.LeaveBehindDemo, () => ({
    __proto__: dart.getMethods(leave_behind_demo.LeaveBehindDemo.__proto__),
    createState: dart.fnType(leave_behind_demo.LeaveBehindDemoState, [])
  }));
  dart.setLibraryUri(leave_behind_demo.LeaveBehindDemo, "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart");
  dart.defineLazy(leave_behind_demo.LeaveBehindDemo, {
    /*leave_behind_demo.LeaveBehindDemo.routeName*/get routeName() {
      return "/material/leave-behind";
    }
  });
  const _dismissDirection = dart.privateName(leave_behind_demo, "_dismissDirection");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C6;
  let C5;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  const _handleArchive = dart.privateName(leave_behind_demo, "_handleArchive");
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  const _handleDelete = dart.privateName(leave_behind_demo, "_handleDelete");
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
  let C27;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C42;
  let C41;
  let C44;
  let C47;
  let C46;
  let C45;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C48;
  const PopupMenuDivider_height = dart.privateName(popup_menu, "PopupMenuDivider.height");
  let C49;
  let C50;
  let C53;
  let C54;
  let C55;
  let C52;
  let C51;
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
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  const leaveBehindItems = dart.privateName(leave_behind_demo, "LeaveBehindDemoState.leaveBehindItems");
  leave_behind_demo.LeaveBehindDemoState = class LeaveBehindDemoState extends framework.State$(leave_behind_demo.LeaveBehindDemo) {
    get leaveBehindItems() {
      return this[leaveBehindItems];
    }
    set leaveBehindItems(value) {
      this[leaveBehindItems] = value;
    }
    initListItems() {
      this.leaveBehindItems = ListOfLeaveBehindItem().generate(16, dart.fn(index => new leave_behind_demo.LeaveBehindItem.new({index: index, name: "Item " + dart.str(index) + " Sender", subject: "Subject: " + dart.str(index), body: "[" + dart.str(index) + "] first line of the message's body..."}), intToLeaveBehindItem()));
    }
    initState() {
      super.initState();
      this.initListItems();
    }
    handleDemoAction(action) {
      this.setState(dart.fn(() => {
        switch (action) {
          case C0 || CT.C0:
          {
            this.initListItems();
            break;
          }
          case C1 || CT.C1:
          {
            this[_dismissDirection] = dismissible.DismissDirection.horizontal;
            break;
          }
          case C2 || CT.C2:
          {
            this[_dismissDirection] = dismissible.DismissDirection.endToStart;
            break;
          }
          case C3 || CT.C3:
          {
            this[_dismissDirection] = dismissible.DismissDirection.startToEnd;
            break;
          }
        }
      }, VoidToNull()));
    }
    handleUndo(item) {
      let insertionIndex = algorithms.lowerBound(leave_behind_demo.LeaveBehindItem, this.leaveBehindItems, item);
      this.setState(dart.fn(() => {
        this.leaveBehindItems[$insert](insertionIndex, item);
      }, VoidToNull()));
    }
    [_handleArchive](item) {
      this.setState(dart.fn(() => {
        this.leaveBehindItems[$remove](item);
      }, VoidToNull()));
      leave_behind_demo.LeaveBehindDemoState._scaffoldKey.currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("You archived item " + dart.str(item.index), {$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), action: new snack_bar.SnackBarAction.new({label: "UNDO", onPressed: dart.fn(() => {
            this.handleUndo(item);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}));
    }
    [_handleDelete](item) {
      this.setState(dart.fn(() => {
        this.leaveBehindItems[$remove](item);
      }, VoidToNull()));
      leave_behind_demo.LeaveBehindDemoState._scaffoldKey.currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("You deleted item " + dart.str(item.index), {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), action: new snack_bar.SnackBarAction.new({label: "UNDO", onPressed: dart.fn(() => {
            this.handleUndo(item);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}));
    }
    build(context) {
      let body = null;
      if (dart.test(this.leaveBehindItems[$isEmpty])) {
        body = new basic.Center.new({child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => this.handleDemoAction(leave_behind_demo.LeaveBehindDemoAction.reset), VoidTovoid()), child: C27 || CT.C27, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
      } else {
        body = new scroll_view.ListView.new({children: this.leaveBehindItems[$map](framework.Widget, dart.fn(item => new leave_behind_demo._LeaveBehindListItem.new({item: item, onArchive: dart.bind(this, _handleArchive), onDelete: dart.bind(this, _handleDelete), dismissDirection: this[_dismissDirection], $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), LeaveBehindItemTo_LeaveBehindListItem()))[$toList](), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
      }
      return new scaffold.Scaffold.new({key: leave_behind_demo.LeaveBehindDemoState._scaffoldKey, appBar: new app_bar.AppBar.new({title: C44 || CT.C44, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/leave-behind", {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new (PopupMenuButtonOfLeaveBehindDemoAction()).new({onSelected: dart.bind(this, 'handleDemoAction'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuEntryOfLeaveBehindDemoAction().of([C48 || CT.C48, C49 || CT.C49, new (CheckedPopupMenuItemOfLeaveBehindDemoAction()).new({value: leave_behind_demo.LeaveBehindDemoAction.horizontalSwipe, checked: dart.equals(this[_dismissDirection], dismissible.DismissDirection.horizontal), child: C50 || CT.C50, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new (CheckedPopupMenuItemOfLeaveBehindDemoAction()).new({value: leave_behind_demo.LeaveBehindDemoAction.leftSwipe, checked: dart.equals(this[_dismissDirection], dismissible.DismissDirection.endToStart), child: C56 || CT.C56, $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new (CheckedPopupMenuItemOfLeaveBehindDemoAction()).new({value: leave_behind_demo.LeaveBehindDemoAction.rightSwipe, checked: dart.equals(this[_dismissDirection], dismissible.DismissDirection.startToEnd), child: C62 || CT.C62, $creationLocationd_0dea112b090073317d4: C63 || CT.C63})]), BuildContextToListOfPopupMenuEntryOfLeaveBehindDemoAction()), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), body: body, $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
  };
  (leave_behind_demo.LeaveBehindDemoState.new = function() {
    this[_dismissDirection] = dismissible.DismissDirection.horizontal;
    this[leaveBehindItems] = null;
    leave_behind_demo.LeaveBehindDemoState.__proto__.new.call(this);
    ;
  }).prototype = leave_behind_demo.LeaveBehindDemoState.prototype;
  dart.addTypeTests(leave_behind_demo.LeaveBehindDemoState);
  dart.setMethodSignature(leave_behind_demo.LeaveBehindDemoState, () => ({
    __proto__: dart.getMethods(leave_behind_demo.LeaveBehindDemoState.__proto__),
    initListItems: dart.fnType(dart.void, []),
    handleDemoAction: dart.fnType(dart.void, [leave_behind_demo.LeaveBehindDemoAction]),
    handleUndo: dart.fnType(dart.void, [leave_behind_demo.LeaveBehindItem]),
    [_handleArchive]: dart.fnType(dart.void, [leave_behind_demo.LeaveBehindItem]),
    [_handleDelete]: dart.fnType(dart.void, [leave_behind_demo.LeaveBehindItem]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(leave_behind_demo.LeaveBehindDemoState, "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart");
  dart.setFieldSignature(leave_behind_demo.LeaveBehindDemoState, () => ({
    __proto__: dart.getFields(leave_behind_demo.LeaveBehindDemoState.__proto__),
    [_dismissDirection]: dart.fieldType(dismissible.DismissDirection),
    leaveBehindItems: dart.fieldType(core.List$(leave_behind_demo.LeaveBehindItem))
  }));
  dart.defineLazy(leave_behind_demo.LeaveBehindDemoState, {
    /*leave_behind_demo.LeaveBehindDemoState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    }
  });
  const CustomSemanticsAction_action = dart.privateName(semantics, "CustomSemanticsAction.action");
  const CustomSemanticsAction_hint = dart.privateName(semantics, "CustomSemanticsAction.hint");
  const CustomSemanticsAction_label = dart.privateName(semantics, "CustomSemanticsAction.label");
  let C81;
  let C82;
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color__value = dart.privateName(ui, "Color._value");
  let C85;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C86;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C84;
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C83;
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C92;
  let C91;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C99;
  let C98;
  let C103;
  let C102;
  let C101;
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
  let C117;
  let C118;
  let C119;
  let C120;
  let C114;
  let C113;
  let C123;
  let C124;
  let C122;
  let C121;
  const item$ = dart.privateName(leave_behind_demo, "_LeaveBehindListItem.item");
  const dismissDirection$ = dart.privateName(leave_behind_demo, "_LeaveBehindListItem.dismissDirection");
  const onArchive$ = dart.privateName(leave_behind_demo, "_LeaveBehindListItem.onArchive");
  const onDelete$ = dart.privateName(leave_behind_demo, "_LeaveBehindListItem.onDelete");
  leave_behind_demo._LeaveBehindListItem = class _LeaveBehindListItem extends framework.StatelessWidget {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get dismissDirection() {
      return this[dismissDirection$];
    }
    set dismissDirection(value) {
      super.dismissDirection = value;
    }
    get onArchive() {
      return this[onArchive$];
    }
    set onArchive(value) {
      super.onArchive = value;
    }
    get onDelete() {
      return this[onDelete$];
    }
    set onDelete(value) {
      super.onDelete = value;
    }
    [_handleArchive]() {
      this.onArchive(this.item);
    }
    [_handleDelete]() {
      this.onDelete(this.item);
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new basic.Semantics.new({customSemanticsActions: new (LinkedMapOfCustomSemanticsAction$VoidTovoid()).from([C81 || CT.C81, dart.bind(this, _handleArchive), C82 || CT.C82, dart.bind(this, _handleDelete)]), child: new dismissible.Dismissible.new({key: new framework.ObjectKey.new(this.item), direction: this.dismissDirection, onDismissed: dart.fn(direction => {
            if (dart.equals(direction, dismissible.DismissDirection.endToStart))
              this[_handleArchive]();
            else
              this[_handleDelete]();
          }, DismissDirectionToNull()), background: new container.Container.new({color: theme.primaryColor, child: C83 || CT.C83, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), secondaryBackground: new container.Container.new({color: theme.primaryColor, child: C91 || CT.C91, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: theme.canvasColor, border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), child: new list_tile.ListTile.new({title: new text.Text.new(this.item.name, {$creationLocationd_0dea112b090073317d4: C98 || CT.C98}), subtitle: new text.Text.new(dart.str(this.item.subject) + "\n" + dart.str(this.item.body), {$creationLocationd_0dea112b090073317d4: C101 || CT.C101}), isThreeLine: true, $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121});
    }
  };
  (leave_behind_demo._LeaveBehindListItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let onArchive = opts && 'onArchive' in opts ? opts.onArchive : null;
    let onDelete = opts && 'onDelete' in opts ? opts.onDelete : null;
    let dismissDirection = opts && 'dismissDirection' in opts ? opts.dismissDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[onArchive$] = onArchive;
    this[onDelete$] = onDelete;
    this[dismissDirection$] = dismissDirection;
    leave_behind_demo._LeaveBehindListItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = leave_behind_demo._LeaveBehindListItem.prototype;
  dart.addTypeTests(leave_behind_demo._LeaveBehindListItem);
  dart.setMethodSignature(leave_behind_demo._LeaveBehindListItem, () => ({
    __proto__: dart.getMethods(leave_behind_demo._LeaveBehindListItem.__proto__),
    [_handleArchive]: dart.fnType(dart.void, []),
    [_handleDelete]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(leave_behind_demo._LeaveBehindListItem, "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart");
  dart.setFieldSignature(leave_behind_demo._LeaveBehindListItem, () => ({
    __proto__: dart.getFields(leave_behind_demo._LeaveBehindListItem.__proto__),
    item: dart.finalFieldType(leave_behind_demo.LeaveBehindItem),
    dismissDirection: dart.finalFieldType(dismissible.DismissDirection),
    onArchive: dart.finalFieldType(dart.fnType(dart.void, [leave_behind_demo.LeaveBehindItem])),
    onDelete: dart.finalFieldType(dart.fnType(dart.void, [leave_behind_demo.LeaveBehindItem]))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/leave_behind_demo", {
    "package:flutter_web.examples.gallery/demo/material/leave_behind_demo.dart": leave_behind_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["leave_behind_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAW2E;;iEAAtE;;;;EAAsE;;;;;;;;;;;;;;;;;;;IAW/D;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;cAGiB;;AAAU,YAAA,AAAM,wBAAU,AAAM,KAAD;IAAO;;;QAd9C;QAAY;QAAW;QAAc;IAArC;IAAY;IAAW;IAAc;;EAAM;qDAE5B;IACzB,eAAE,AAAK,IAAD;IACP,cAAE,AAAK,IAAD;IACH,iBAAE,AAAK,IAAD;IACT,cAAE,AAAK,IAAD;;EAAK;;;;;;;;;;;;;;;;;;;AAiBgB;IAAsB;;;QALjC;;AAAQ,qEAAW,GAAG;;EAAC;;;;;;;;MAE9B,2CAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUP;;;;;;;AASlB,MANF,wBAAiB,iCAAiC,IAAI,QAAK,SAClD,kDACI,KAAK,QACN,AAAoB,mBAAb,KAAK,wBACT,AAAiB,uBAAN,KAAK,SACnB,AAA8C,eAA3C,KAAK;IAEtB;;AAImB,MAAX;AACS,MAAf;IACF;qBAE4C;AAgBxC,MAfF,cAAS;AACP,gBAAQ,MAAM;;;AAEK,YAAf;AACA;;;;AAE+C,YAA/C,0BAAqC;AACrC;;;;AAE+C,YAA/C,0BAAqC;AACrC;;;;AAE+C,YAA/C,0BAAqC;AACrC;;;;IAGR;eAEgC;AACpB,2BAAiB,yDAAW,uBAAkB,IAAI;AAG1D,MAFF,cAAS;AACsC,QAA7C,AAAiB,+BAAO,cAAc,EAAE,IAAI;;IAEhD;qBAEoC;AAGhC,MAFF,cAAS;AACsB,QAA7B,AAAiB,+BAAO,IAAI;;AAQlB,MANZ,AAAa,AAAa,8EAAa,qCAC1B,kBAAK,AAAiC,gCAAZ,AAAK,IAAD,yEAC/B,yCACG,mBACI;AACO,YAAhB,gBAAW,IAAI;;IAE3B;oBAEmC;AAG/B,MAFF,cAAS;AACsB,QAA7B,AAAiB,+BAAO,IAAI;;AAQlB,MANZ,AAAa,AAAa,8EAAa,qCAC1B,kBAAK,AAAgC,+BAAZ,AAAK,IAAD,2EAC9B,yCACG,mBACI;AACO,YAAhB,gBAAW,IAAI;;IAE3B;UAG0B;AACjB;AACP,oBAAI,AAAiB;AAMlB,QALD,OAAO,6BACE,+CACM,cAAM,sBAAuC;;AAahD,QARZ,OAAO,wCACO,AAAiB,AAO5B,8CAPwC,QAAiB,QACnD,sDACC,IAAI,uBACC,2CACD,wCACQ;;AAKxB,YAAO,iCACA,6DACG,uDAA+D,sBACrE,iIACA,0EACgB,wCACC,QAAc,WACgB,mFAKrC,gEACiC,kEACF,YAAlB,yBAAsC,yHAEnD,gEACiC,4DACF,YAAlB,yBAAsC,yHAEnD,gEACiC,6DACF,YAAlB,yBAAsC,mTAIzD,IAAI;IAEd;;;IAzHiB,0BAAqC;IAChC;;;EAyHxB;;;;;;;;;;;;;;;;;;MA5HwC,mDAAY;YAC9C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsIkB;;;;;;IACC;;;;;;IACc;;;;;;IACA;;;;;;;AAGpB,MAAf,eAAU;IACZ;;AAGgB,MAAd,cAAS;IACX;UAG0B;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,kDACwD,mFACZ,gDACD,+BAEzC,sCACA,4BAAU,uBACJ,oCACE,QAAkB;AAC7B,gBAAc,YAAV,SAAS,EAAqB;AAChB,cAAhB;;AAEe,cAAf;oDAEQ,oCACD,AAAM,KAAD,mHAGK,oCACV,AAAM,KAAD,qGAIT,yCACO,6CACD,AAAM,KAAD,sBACJ,mCAAe,mCAAkB,AAAM,KAAD,4BAC3C,mCACI,kBAAK,AAAK,oFACP,kBAAoC,SAA5B,AAAK,qBAAQ,gBAAI,AAAK,0FAC3B;IAIzB;;;QAzDM;QACW;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;AACZ,0EAAW,GAAG;;EAAC","file":"leave_behind_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__leave_behind_demo: leave_behind_demo
  };
});

//# sourceMappingURL=leave_behind_demo.ddc.js.map
