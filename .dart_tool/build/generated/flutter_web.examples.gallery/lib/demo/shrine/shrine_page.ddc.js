define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_types', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_theme', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_theme, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const bottom_sheet = packages__flutter_web__material.src__material__bottom_sheet;
  const constants = packages__flutter_web__material.src__material__constants;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const shrine_types = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types.demo__shrine__shrine_types;
  const shrine_theme = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_theme.demo__shrine__shrine_theme;
  const ui = packages__flutter_web_ui__ui.ui;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const shrine_page = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $clear = dartx.clear;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let OrderToListTile = () => (OrderToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [shrine_types.Order])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let ProductAndProductToint = () => (ProductAndProductToint = dart.constFn(dart.fnType(core.int, [shrine_types.Product, shrine_types.Product])))();
  let PopupMenuButtonOfShrineAction = () => (PopupMenuButtonOfShrineAction = dart.constFn(popup_menu.PopupMenuButton$(shrine_page.ShrineAction)))();
  let PopupMenuItemOfShrineAction = () => (PopupMenuItemOfShrineAction = dart.constFn(popup_menu.PopupMenuItem$(shrine_page.ShrineAction)))();
  let JSArrayOfPopupMenuItemOfShrineAction = () => (JSArrayOfPopupMenuItemOfShrineAction = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfShrineAction())))();
  let ListOfPopupMenuItemOfShrineAction = () => (ListOfPopupMenuItemOfShrineAction = dart.constFn(core.List$(PopupMenuItemOfShrineAction())))();
  let BuildContextToListOfPopupMenuItemOfShrineAction = () => (BuildContextToListOfPopupMenuItemOfShrineAction = dart.constFn(dart.fnType(ListOfPopupMenuItemOfShrineAction(), [framework.BuildContext])))();
  let ShrineActionToNull = () => (ShrineActionToNull = dart.constFn(dart.fnType(core.Null, [shrine_page.ShrineAction])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: shrine_page.ShrineAction.prototype,
        [_name$]: "ShrineAction.sortByPrice",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: shrine_page.ShrineAction.prototype,
        [_name$]: "ShrineAction.sortByProduct",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: shrine_page.ShrineAction.prototype,
        [_name$]: "ShrineAction.emptyCart",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], shrine_page.ShrineAction);
    },
    get C5() {
      return C5 = dart.const({
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
        [Text_data]: "The shopping cart is empty"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 24
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: basic.Padding.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C5 || CT.C5,
        [Padding_padding]: C6 || CT.C6
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 52,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 64,
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
        [_Location_column]: 29,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 19,
        [_Location_line]: 64,
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
        [_Location_column]: 22,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
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
        [Text_data]: "Shopping cart is empty"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C26 || CT.C26,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C27 || CT.C27
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 32,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59596
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C36 || CT.C36
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
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
        [Text_data]: "Sort by price"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: PopupMenuItemOfShrineAction().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C43 || CT.C43,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C0 || CT.C0
      });
    },
    get C45() {
      return C45 = dart.const({
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
        [Text_data]: "Sort by product"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: PopupMenuItemOfShrineAction().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C45 || CT.C45,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C1 || CT.C1
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
        [Text_data]: "Empty shopping cart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: PopupMenuItemOfShrineAction().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C47 || CT.C47,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C2 || CT.C2
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 19,
        [_Location_line]: 119,
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
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconTheme",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "brightness",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 13,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 13,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 56,
        [_Location_line]: 135,
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
        [_Location_column]: 15,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 9,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart"
      });
    }
  });
  const _name$ = dart.privateName(shrine_page, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  shrine_page.ShrineAction = class ShrineAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (shrine_page.ShrineAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = shrine_page.ShrineAction.prototype;
  dart.addTypeTests(shrine_page.ShrineAction);
  dart.setLibraryUri(shrine_page.ShrineAction, "package:flutter_web.examples.gallery/demo/shrine/shrine_page.dart");
  dart.setFieldSignature(shrine_page.ShrineAction, () => ({
    __proto__: dart.getFields(shrine_page.ShrineAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(shrine_page.ShrineAction, ['toString']);
  shrine_page.ShrineAction.sortByPrice = C0 || CT.C0;
  shrine_page.ShrineAction.sortByProduct = C1 || CT.C1;
  shrine_page.ShrineAction.emptyCart = C2 || CT.C2;
  shrine_page.ShrineAction.values = C3 || CT.C3;
  const scaffoldKey$ = dart.privateName(shrine_page, "ShrinePage.scaffoldKey");
  const body$ = dart.privateName(shrine_page, "ShrinePage.body");
  const floatingActionButton$ = dart.privateName(shrine_page, "ShrinePage.floatingActionButton");
  const products$ = dart.privateName(shrine_page, "ShrinePage.products");
  const shoppingCart$ = dart.privateName(shrine_page, "ShrinePage.shoppingCart");
  shrine_page.ShrinePage = class ShrinePage extends framework.StatefulWidget {
    get scaffoldKey() {
      return this[scaffoldKey$];
    }
    set scaffoldKey(value) {
      super.scaffoldKey = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    get floatingActionButton() {
      return this[floatingActionButton$];
    }
    set floatingActionButton(value) {
      super.floatingActionButton = value;
    }
    get products() {
      return this[products$];
    }
    set products(value) {
      super.products = value;
    }
    get shoppingCart() {
      return this[shoppingCart$];
    }
    set shoppingCart(value) {
      super.shoppingCart = value;
    }
    createState() {
      return new shrine_page.ShrinePageState.new();
    }
  };
  (shrine_page.ShrinePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaffoldKey = opts && 'scaffoldKey' in opts ? opts.scaffoldKey : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let floatingActionButton = opts && 'floatingActionButton' in opts ? opts.floatingActionButton : null;
    let products = opts && 'products' in opts ? opts.products : null;
    let shoppingCart = opts && 'shoppingCart' in opts ? opts.shoppingCart : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scaffoldKey$] = scaffoldKey;
    this[body$] = body;
    this[floatingActionButton$] = floatingActionButton;
    this[products$] = products;
    this[shoppingCart$] = shoppingCart;
    if (!(body != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart", 20, 16, "body != null");
    if (!(scaffoldKey != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_page.dart", 21, 16, "scaffoldKey != null");
    shrine_page.ShrinePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_page.ShrinePage.prototype;
  dart.addTypeTests(shrine_page.ShrinePage);
  dart.setMethodSignature(shrine_page.ShrinePage, () => ({
    __proto__: dart.getMethods(shrine_page.ShrinePage.__proto__),
    createState: dart.fnType(shrine_page.ShrinePageState, [])
  }));
  dart.setLibraryUri(shrine_page.ShrinePage, "package:flutter_web.examples.gallery/demo/shrine/shrine_page.dart");
  dart.setFieldSignature(shrine_page.ShrinePage, () => ({
    __proto__: dart.getFields(shrine_page.ShrinePage.__proto__),
    scaffoldKey: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    body: dart.finalFieldType(framework.Widget),
    floatingActionButton: dart.finalFieldType(framework.Widget),
    products: dart.finalFieldType(core.List$(shrine_types.Product)),
    shoppingCart: dart.finalFieldType(core.Map$(shrine_types.Product, shrine_types.Order))
  }));
  const _appBarElevation = dart.privateName(shrine_page, "_appBarElevation");
  const _handleScrollNotification = dart.privateName(shrine_page, "_handleScrollNotification");
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
  let C5;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C6;
  const Padding_padding = dart.privateName(basic, "Padding.padding");
  let C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C24;
  let C22;
  let C21;
  const _showShoppingCart = dart.privateName(shrine_page, "_showShoppingCart");
  const _sortByPrice = dart.privateName(shrine_page, "_sortByPrice");
  const _sortByProduct = dart.privateName(shrine_page, "_sortByProduct");
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C26;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
  let C27;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C25;
  const _emptyCart = dart.privateName(shrine_page, "_emptyCart");
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C36;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C35;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C43;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C42;
  let C45;
  let C44;
  let C47;
  let C46;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C53;
  let C52;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C70;
  let C71;
  let C67;
  let C66;
  shrine_page.ShrinePageState = class ShrinePageState extends framework.State$(shrine_page.ShrinePage) {
    [_handleScrollNotification](notification) {
      let elevation = dart.notNull(notification.metrics.extentBefore) <= 0.0 ? 0.0 : 1.0;
      if (elevation !== this[_appBarElevation]) {
        this.setState(dart.fn(() => {
          this[_appBarElevation] = elevation;
        }, VoidToNull()));
      }
      return false;
    }
    [_showShoppingCart]() {
      bottom_sheet.showModalBottomSheet(dart.void, {context: this.context, builder: dart.fn(context => {
          if (dart.test(this.widget.shoppingCart[$isEmpty])) {
            return C4 || CT.C4;
          }
          return new scroll_view.ListView.new({padding: constants.kMaterialListPadding, children: this.widget.shoppingCart[$values][$map](list_tile.ListTile, dart.fn(order => new list_tile.ListTile.new({title: new text.Text.new(order.product.name, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), leading: new text.Text.new(dart.str(order.quantity), {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), subtitle: new text.Text.new(order.product.vendor.name, {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), OrderToListTile()))[$toList](), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
        }, BuildContextToWidget())});
    }
    [_sortByPrice]() {
      this.widget.products[$sort](dart.fn((a, b) => a.price[$compareTo](b.price), ProductAndProductToint()));
    }
    [_sortByProduct]() {
      this.widget.products[$sort](dart.fn((a, b) => a.name[$compareTo](b.name), ProductAndProductToint()));
    }
    [_emptyCart]() {
      this.widget.shoppingCart[$clear]();
      this.widget.scaffoldKey.currentState.showSnackBar(C25 || CT.C25);
    }
    build(context) {
      let theme = shrine_theme.ShrineTheme.of(context);
      return new scaffold.Scaffold.new({key: this.widget.scaffoldKey, appBar: new app_bar.AppBar.new({elevation: this[_appBarElevation], backgroundColor: theme.appBarBackgroundColor, iconTheme: theme$.Theme.of(context).iconTheme, brightness: ui.Brightness.light, flexibleSpace: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), title: new text.Text.new("SHRINE", {style: shrine_theme.ShrineTheme.of(context).appBarTitleStyle, $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), centerTitle: true, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C35 || CT.C35, tooltip: "Shopping cart", onPressed: dart.bind(this, _showShoppingCart), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new (PopupMenuButtonOfShrineAction()).new({itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfShrineAction().of([C42 || CT.C42, C44 || CT.C44, C46 || CT.C46]), BuildContextToListOfPopupMenuItemOfShrineAction()), onSelected: dart.fn(action => {
                switch (action) {
                  case C0 || CT.C0:
                  {
                    this.setState(dart.bind(this, _sortByPrice));
                    break;
                  }
                  case C1 || CT.C1:
                  {
                    this.setState(dart.bind(this, _sortByProduct));
                    break;
                  }
                  case C2 || CT.C2:
                  {
                    this.setState(dart.bind(this, _emptyCart));
                    break;
                  }
                }
              }, ShrineActionToNull()), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), floatingActionButton: this.widget.floatingActionButton, body: new (NotificationListenerOfScrollNotification()).new({onNotification: dart.bind(this, _handleScrollNotification), child: this.widget.body, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
  };
  (shrine_page.ShrinePageState.new = function() {
    this[_appBarElevation] = 0.0;
    shrine_page.ShrinePageState.__proto__.new.call(this);
    ;
  }).prototype = shrine_page.ShrinePageState.prototype;
  dart.addTypeTests(shrine_page.ShrinePageState);
  dart.setMethodSignature(shrine_page.ShrinePageState, () => ({
    __proto__: dart.getMethods(shrine_page.ShrinePageState.__proto__),
    [_handleScrollNotification]: dart.fnType(core.bool, [scroll_notification.ScrollNotification]),
    [_showShoppingCart]: dart.fnType(dart.void, []),
    [_sortByPrice]: dart.fnType(dart.void, []),
    [_sortByProduct]: dart.fnType(dart.void, []),
    [_emptyCart]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_page.ShrinePageState, "package:flutter_web.examples.gallery/demo/shrine/shrine_page.dart");
  dart.setFieldSignature(shrine_page.ShrinePageState, () => ({
    __proto__: dart.getFields(shrine_page.ShrinePageState.__proto__),
    [_appBarElevation]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/shrine/shrine_page", {
    "package:flutter_web.examples.gallery/demo/shrine/shrine_page.dart": shrine_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAS0D;;kDAArD;;;;EAAqD;;;;;;;;;;;;;;;;;;;IAczB;;;;;;IAClB;;;;;;IACA;;;;;;IACO;;;;;;IACM;;;;;;;AAGO;IAAiB;;;QAjBzC;QACU;QACA;QACV;QACA;QACA;;IAJU;IACA;IACV;IACA;IACA;UACI,AAAK,IAAD,IAAI;UACR,AAAY,WAAD,IAAI;AACtB,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gCAgB6B;AACnC,sBACyB,aAAlC,AAAa,AAAQ,YAAT,0BAAyB,MAAM,MAAM;AACrD,UAAI,SAAS,KAAI;AAGb,QAFF,cAAS;AACqB,UAA5B,yBAAmB,SAAS;;;AAGhC,YAAO;IACT;;AAoBQ,MAjBN,uDACa,uBACA,QAAc;AACrB,wBAAI,AAAO,AAAa;AACtB;;AAIF,gBAAO,wCACI,0CACC,AAAO,AAAa,AAAO,AAKlC,4DALsC,QAAO,SACvC,mCACI,kBAAK,AAAM,AAAQ,KAAT,gFACR,kBAAwB,SAAhB,AAAM,KAAD,gFACZ,kBAAK,AAAM,AAAQ,AAAO,KAAhB;;IAIpC;;AAG4E,MAA1E,AAAO,AAAS,4BAAK,SAAS,GAAW,MAAM,AAAE,AAAM,CAAP,mBAAiB,AAAE,CAAD;IACpE;;AAG0E,MAAxE,AAAO,AAAS,4BAAK,SAAS,GAAW,MAAM,AAAE,AAAK,CAAN,kBAAgB,AAAE,CAAD;IACnE;;AAG6B,MAA3B,AAAO,AAAa;AAEsD,MAD1E,AAAO,AAAY,AACd;IACP;UAG0B;AACN,kBAAoB,4BAAG,OAAO;AAChD,YAAO,iCACE,AAAO,iCACJ,mCACO,yCACM,AAAM,KAAD,mCACL,AAAY,gBAAT,OAAO,yBACJ,oCACR,yCACC,8CAEJ,mCAAe,mCAAkB,AAAM,KAAD,qFAE9C,kBAAK,kBAA6B,AAAY,4BAAT,OAAO,0FACnC,eACI,sBACf,8DAEa,sCACE,mFACf,wDACiB,QAAc,WACM,0JAWrB,QAAc;AACxB,wBAAQ,MAAM;;;AAEY,oBAAtB,wBAAS;AACT;;;;AAEwB,oBAAxB,wBAAS;AACT;;;;AAEoB,oBAApB,wBAAS;AACT;;;kLAIM,AAAO,wCACvB,gFACc,yCAAkC,AAAO;IACnE;;;IApGO,yBAAmB;;;EAqG5B","file":"shrine_page.ddc.js"}');
  // Exports:
  return {
    demo__shrine__shrine_page: shrine_page
  };
});

//# sourceMappingURL=shrine_page.ddc.js.map
