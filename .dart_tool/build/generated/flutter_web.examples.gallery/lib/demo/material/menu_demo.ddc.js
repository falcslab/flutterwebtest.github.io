define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const constants = packages__flutter_web__material.src__material__constants;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const menu_demo = Object.create(dart.library);
  const $contains = dartx.contains;
  const $remove = dartx.remove;
  const $add = dartx.add;
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let PopupMenuButtonOfString = () => (PopupMenuButtonOfString = dart.constFn(popup_menu.PopupMenuButton$(core.String)))();
  let PopupMenuItemOfString = () => (PopupMenuItemOfString = dart.constFn(popup_menu.PopupMenuItem$(core.String)))();
  let JSArrayOfPopupMenuItemOfString = () => (JSArrayOfPopupMenuItemOfString = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfString())))();
  let ListOfPopupMenuItemOfString = () => (ListOfPopupMenuItemOfString = dart.constFn(core.List$(PopupMenuItemOfString())))();
  let BuildContextToListOfPopupMenuItemOfString = () => (BuildContextToListOfPopupMenuItemOfString = dart.constFn(dart.fnType(ListOfPopupMenuItemOfString(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let PopupMenuEntryOfString = () => (PopupMenuEntryOfString = dart.constFn(popup_menu.PopupMenuEntry$(core.String)))();
  let JSArrayOfPopupMenuEntryOfString = () => (JSArrayOfPopupMenuEntryOfString = dart.constFn(_interceptors.JSArray$(PopupMenuEntryOfString())))();
  let ListOfPopupMenuEntryOfString = () => (ListOfPopupMenuEntryOfString = dart.constFn(core.List$(PopupMenuEntryOfString())))();
  let BuildContextToListOfPopupMenuEntryOfString = () => (BuildContextToListOfPopupMenuEntryOfString = dart.constFn(dart.fnType(ListOfPopupMenuEntryOfString(), [framework.BuildContext])))();
  let CheckedPopupMenuItemOfString = () => (CheckedPopupMenuItemOfString = dart.constFn(popup_menu.CheckedPopupMenuItem$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 40,
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
        [_Location_column]: 62,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 53,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
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
        [Text_data]: "Menus"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 54,
        [_Location_line]: 67,
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
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
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
        [Text_data]: "Toolbar menu"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C11 || CT.C11,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Toolbar menu"
      });
    },
    get C13() {
      return C13 = dart.const({
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
        [Text_data]: "Right here"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C13 || CT.C13,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Right here"
      });
    },
    get C15() {
      return C15 = dart.const({
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
        [Text_data]: "Hooray!"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C15 || CT.C15,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Hooray!"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 70,
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
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 66,
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
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
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
        [Text_data]: "An item with a context menu button"
      });
    },
    get C25() {
      return C25 = dart.const({
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
        [Text_data]: "Context menu item one"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
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
        [Text_data]: "A disabled menu item"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C31 || CT.C31,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: false,
        [PopupMenuItem_value]: null
      });
    },
    get C32() {
      return C32 = dart.const({
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
        [Text_data]: "Context menu item three"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 90,
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
        [_Location_column]: 25,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 87,
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
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
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
        [Text_data]: "An item with a sectioned menu"
      });
    },
    get C49() {
      return C49 = dart.const({
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
        [Text_data]: "Preview"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59636
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C51 || CT.C51
      });
    },
    get C48() {
      return C48 = dart.const({
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
        [ListTile_title]: C49 || CT.C49,
        [ListTile_leading]: C50 || CT.C50
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C48 || CT.C48,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Preview"
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
        [Text_data]: "Share"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59390
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C56 || CT.C56
      });
    },
    get C53() {
      return C53 = dart.const({
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
        [ListTile_title]: C54 || CT.C54,
        [ListTile_leading]: C55 || CT.C55
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C53 || CT.C53,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Share"
      });
    },
    get C59() {
      return C59 = dart.const({
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
        [Text_data]: "Get link"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57687
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C61 || CT.C61
      });
    },
    get C58() {
      return C58 = dart.const({
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
        [ListTile_title]: C59 || CT.C59,
        [ListTile_leading]: C60 || CT.C60
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C58 || CT.C58,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Get Link"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: popup_menu.PopupMenuDivider.prototype,
        [Widget_key]: null,
        [PopupMenuDivider_height]: 16
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
        [Text_data]: "Remove"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59506
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C67 || CT.C67
      });
    },
    get C64() {
      return C64 = dart.const({
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
        [ListTile_title]: C65 || CT.C65,
        [ListTile_leading]: C66 || CT.C66
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: PopupMenuItemOfString().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C64 || CT.C64,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: "Remove"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 19,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 107,
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
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
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
        [Text_data]: "An item with a simple menu"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 19,
        [_Location_line]: 143,
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
        [_Location_column]: 22,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 148,
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
        [_Location_column]: 54,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialValue",
        [_Location_column]: 15,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 15,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
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
        [Text_data]: "An item with a checklist menu"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 29,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 169,
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
        [_Location_column]: 36,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 29,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 29,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 29,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checked",
        [_Location_column]: 29,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 19,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 159,
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
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 156,
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
        [_Location_column]: 11,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 24,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 55,
        [_Location_line]: 81,
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
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/menu_demo.dart"
      });
    }
  });
  menu_demo.MenuDemo = class MenuDemo extends framework.StatefulWidget {
    createState() {
      return new menu_demo.MenuDemoState.new();
    }
  };
  (menu_demo.MenuDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    menu_demo.MenuDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = menu_demo.MenuDemo.prototype;
  dart.addTypeTests(menu_demo.MenuDemo);
  dart.setMethodSignature(menu_demo.MenuDemo, () => ({
    __proto__: dart.getMethods(menu_demo.MenuDemo.__proto__),
    createState: dart.fnType(menu_demo.MenuDemoState, [])
  }));
  dart.setLibraryUri(menu_demo.MenuDemo, "package:flutter_web.examples.gallery/demo/material/menu_demo.dart");
  dart.defineLazy(menu_demo.MenuDemo, {
    /*menu_demo.MenuDemo.routeName*/get routeName() {
      return "/material/menu";
    }
  });
  const _scaffoldKey = dart.privateName(menu_demo, "_scaffoldKey");
  const _simpleValue1 = dart.privateName(menu_demo, "_simpleValue1");
  const _simpleValue2 = dart.privateName(menu_demo, "_simpleValue2");
  const _simpleValue3 = dart.privateName(menu_demo, "_simpleValue3");
  const _simpleValue = dart.privateName(menu_demo, "_simpleValue");
  const _checkedValue1 = dart.privateName(menu_demo, "_checkedValue1");
  const _checkedValue2 = dart.privateName(menu_demo, "_checkedValue2");
  const _checkedValue3 = dart.privateName(menu_demo, "_checkedValue3");
  const _checkedValue4 = dart.privateName(menu_demo, "_checkedValue4");
  const _checkedValues = dart.privateName(menu_demo, "_checkedValues");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
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
  let C6;
  let C9;
  let C8;
  let C7;
  let C11;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C10;
  let C13;
  let C12;
  let C15;
  let C14;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  let C24;
  let C25;
  let C28;
  let C29;
  let C27;
  let C26;
  let C31;
  let C30;
  let C32;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C45;
  let C43;
  let C42;
  let C46;
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  let C49;
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C51;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C50;
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C48;
  let C47;
  let C54;
  let C56;
  let C55;
  let C53;
  let C52;
  let C59;
  let C61;
  let C60;
  let C58;
  let C57;
  const PopupMenuDivider_height = dart.privateName(popup_menu, "PopupMenuDivider.height");
  let C62;
  let C65;
  let C67;
  let C66;
  let C64;
  let C63;
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C76;
  let C74;
  let C73;
  let C77;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C107;
  let C106;
  let C113;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C121;
  let C118;
  let C117;
  let C124;
  let C123;
  let C122;
  let C127;
  let C128;
  let C129;
  let C130;
  let C126;
  let C125;
  let C133;
  let C132;
  let C131;
  let C136;
  let C137;
  let C138;
  let C135;
  let C134;
  let C141;
  let C140;
  let C139;
  let C144;
  let C145;
  let C146;
  let C143;
  let C142;
  let C149;
  let C150;
  let C151;
  let C148;
  let C147;
  let C154;
  let C155;
  let C153;
  let C152;
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C163;
  let C164;
  let C161;
  let C160;
  menu_demo.MenuDemoState = class MenuDemoState extends framework.State$(menu_demo.MenuDemo) {
    initState() {
      super.initState();
      this[_simpleValue] = this[_simpleValue2];
      this[_checkedValues] = JSArrayOfString().of([this[_checkedValue3]]);
    }
    showInSnackBar(value) {
      this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}));
    }
    showMenuSelection(value) {
      if (dart.test(JSArrayOfString().of([this[_simpleValue1], this[_simpleValue2], this[_simpleValue3]])[$contains](value))) this[_simpleValue] = value;
      this.showInSnackBar("You selected: " + dart.str(value));
    }
    showCheckedMenuSelections(value) {
      if (dart.test(this[_checkedValues][$contains](value)))
        this[_checkedValues][$remove](value);
      else
        this[_checkedValues][$add](value);
      this.showInSnackBar("Checked " + dart.str(this[_checkedValues]));
    }
    isChecked(value) {
      return this[_checkedValues][$contains](value);
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C6 || CT.C6, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/menu", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new (PopupMenuButtonOfString()).new({onSelected: dart.bind(this, 'showMenuSelection'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([C10 || CT.C10, C12 || CT.C12, C14 || CT.C14]), BuildContextToListOfPopupMenuItemOfString()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), body: new scroll_view.ListView.new({padding: constants.kMaterialListPadding, children: JSArrayOfWidget().of([new list_tile.ListTile.new({title: C24 || CT.C24, trailing: new (PopupMenuButtonOfString()).new({padding: edge_insets.EdgeInsets.zero, onSelected: dart.bind(this, 'showMenuSelection'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([new (PopupMenuItemOfString()).new({value: this[_simpleValue1], child: C25 || CT.C25, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), C30 || CT.C30, new (PopupMenuItemOfString()).new({value: this[_simpleValue3], child: C32 || CT.C32, $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), BuildContextToListOfPopupMenuItemOfString()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new list_tile.ListTile.new({title: C46 || CT.C46, trailing: new (PopupMenuButtonOfString()).new({padding: edge_insets.EdgeInsets.zero, onSelected: dart.bind(this, 'showMenuSelection'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuEntryOfString().of([C47 || CT.C47, C52 || CT.C52, C57 || CT.C57, C62 || CT.C62, C63 || CT.C63]), BuildContextToListOfPopupMenuEntryOfString()), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new (PopupMenuButtonOfString()).new({padding: edge_insets.EdgeInsets.zero, initialValue: this[_simpleValue], onSelected: dart.bind(this, 'showMenuSelection'), child: new list_tile.ListTile.new({title: C77 || CT.C77, subtitle: new text.Text.new(this[_simpleValue], {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([new (PopupMenuItemOfString()).new({value: this[_simpleValue1], child: new text.Text.new(this[_simpleValue1], {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), new (PopupMenuItemOfString()).new({value: this[_simpleValue2], child: new text.Text.new(this[_simpleValue2], {$creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), new (PopupMenuItemOfString()).new({value: this[_simpleValue3], child: new text.Text.new(this[_simpleValue3], {$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), BuildContextToListOfPopupMenuItemOfString()), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), new list_tile.ListTile.new({title: C113 || CT.C113, trailing: new (PopupMenuButtonOfString()).new({padding: edge_insets.EdgeInsets.zero, onSelected: dart.bind(this, 'showCheckedMenuSelections'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([new (CheckedPopupMenuItemOfString()).new({value: this[_checkedValue1], checked: this.isChecked(this[_checkedValue1]), child: new text.Text.new(this[_checkedValue1], {$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), new (CheckedPopupMenuItemOfString()).new({value: this[_checkedValue2], enabled: false, checked: this.isChecked(this[_checkedValue2]), child: new text.Text.new(this[_checkedValue2], {$creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new (CheckedPopupMenuItemOfString()).new({value: this[_checkedValue3], checked: this.isChecked(this[_checkedValue3]), child: new text.Text.new(this[_checkedValue3], {$creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), new (CheckedPopupMenuItemOfString()).new({value: this[_checkedValue4], checked: this.isChecked(this[_checkedValue4]), child: new text.Text.new(this[_checkedValue4], {$creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142})]), BuildContextToListOfPopupMenuItemOfString()), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152})]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    }
  };
  (menu_demo.MenuDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_simpleValue1] = "Menu item value one";
    this[_simpleValue2] = "Menu item value two";
    this[_simpleValue3] = "Menu item value three";
    this[_simpleValue] = null;
    this[_checkedValue1] = "One";
    this[_checkedValue2] = "Two";
    this[_checkedValue3] = "Free";
    this[_checkedValue4] = "Four";
    this[_checkedValues] = null;
    menu_demo.MenuDemoState.__proto__.new.call(this);
    ;
  }).prototype = menu_demo.MenuDemoState.prototype;
  dart.addTypeTests(menu_demo.MenuDemoState);
  dart.setMethodSignature(menu_demo.MenuDemoState, () => ({
    __proto__: dart.getMethods(menu_demo.MenuDemoState.__proto__),
    showInSnackBar: dart.fnType(dart.void, [core.String]),
    showMenuSelection: dart.fnType(dart.void, [core.String]),
    showCheckedMenuSelections: dart.fnType(dart.void, [core.String]),
    isChecked: dart.fnType(core.bool, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(menu_demo.MenuDemoState, "package:flutter_web.examples.gallery/demo/material/menu_demo.dart");
  dart.setFieldSignature(menu_demo.MenuDemoState, () => ({
    __proto__: dart.getFields(menu_demo.MenuDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_simpleValue1]: dart.finalFieldType(core.String),
    [_simpleValue2]: dart.finalFieldType(core.String),
    [_simpleValue3]: dart.finalFieldType(core.String),
    [_simpleValue]: dart.fieldType(core.String),
    [_checkedValue1]: dart.finalFieldType(core.String),
    [_checkedValue2]: dart.finalFieldType(core.String),
    [_checkedValue3]: dart.finalFieldType(core.String),
    [_checkedValue4]: dart.finalFieldType(core.String),
    [_checkedValues]: dart.fieldType(core.List$(core.String))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/menu_demo", {
    "package:flutter_web.examples.gallery/demo/material/menu_demo.dart": menu_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["menu_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAciC;IAAe;;;QAL1B;;AAAQ,sDAAW,GAAG;;EAAC;;;;;;;;MAEvB,4BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsBV,MAAX;AACsB,MAA5B,qBAAe;AAC0B,MAAzC,uBAAyB,sBAAC;IAC5B;mBAE2B;AAC6C,MAAtE,AAAa,AAAa,6CAAa,qCAAkB,kBAAK,KAAK;IACrE;sBAE8B;AAC5B,oBAAY,AAA8C,sBAA7C,qBAAe,qBAAe,iCAAwB,KAAK,IACtE,AAAoB,qBAAL,KAAK;AACgB,MAAtC,oBAAe,AAAsB,4BAAN,KAAK;IACtC;8BAEsC;AACpC,oBAAI,AAAe,gCAAS,KAAK;AACH,QAA5B,AAAe,8BAAO,KAAK;;AAEF,QAAzB,AAAe,2BAAI,KAAK;AAEe,MAAzC,oBAAe,AAAyB,sBAAf;IAC3B;cAEsB;AAAU,YAAA,AAAe,iCAAS,KAAK;IAAC;UAGpC;AACxB,YAAO,iCACE,4BACG,qDAEW,sBACf,uHACA,2DACc,yCACC,QAAc,WAAmC,4PAW9D,uCAAkB,0CAAwC,sBAI9D,4DAEc,8CACc,mDACR,yCACC,QAAc,WACA,qCACrB,0CACW,mHAKX,0CACW,sQAMzB,4DAEc,8CACc,mDACR,yCACC,QAAc,WACC,oRA0BpC,8CACwB,2CACN,0CACF,mCACL,4DAEO,kBAAK,oJACN,QAAc,WAAmC,qCACxD,0CACW,4BAAsB,kBAAK,wIACtC,0CACW,4BAAsB,kBAAK,wIACtC,0CACW,4BAAsB,kBAAK,qPAIhD,8DAEc,8CACc,mDACR,iDACC,QAAc,WACA,qCACrB,iDACW,+BACE,eAAU,8BACZ,kBAAK,6IAChB,iDACW,+BACE,gBACA,eAAU,8BACZ,kBAAK,6IAChB,iDACW,+BACE,eAAU,8BACZ,kBAAK,6IAChB,iDACW,+BACE,eAAU,8BACZ,kBAAK;IAGtC;;;IAjK+B,qBAAe;IAEjC,sBAAgB;IAChB,sBAAgB;IAChB,sBAAgB;IACtB;IAEM,uBAAiB;IACjB,uBAAiB;IACjB,uBAAiB;IACjB,uBAAiB;IACjB;;;EAuJf","file":"menu_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__menu_demo: menu_demo
  };
});

//# sourceMappingURL=menu_demo.ddc.js.map
