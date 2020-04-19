define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const shape_decoration = packages__flutter_web__animation.src__painting__shape_decoration;
  const rounded_rectangle_border = packages__flutter_web__animation.src__painting__rounded_rectangle_border;
  const circle_border = packages__flutter_web__animation.src__painting__circle_border;
  const stadium_border = packages__flutter_web__animation.src__painting__stadium_border;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const container = packages__flutter_web__animation.src__widgets__container;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const decoration = packages__flutter_web__animation.src__painting__decoration;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const tab_indicator = packages__flutter_web__material.src__material__tab_indicator;
  const theme = packages__flutter_web__material.src__material__theme;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const card = packages__flutter_web__material.src__material__card;
  const ui = packages__flutter_web_ui__ui.ui;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const scrollable_tabs_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let PopupMenuButtonOfTabsDemoStyle = () => (PopupMenuButtonOfTabsDemoStyle = dart.constFn(popup_menu.PopupMenuButton$(scrollable_tabs_demo.TabsDemoStyle)))();
  let PopupMenuItemOfTabsDemoStyle = () => (PopupMenuItemOfTabsDemoStyle = dart.constFn(popup_menu.PopupMenuItem$(scrollable_tabs_demo.TabsDemoStyle)))();
  let JSArrayOfPopupMenuItemOfTabsDemoStyle = () => (JSArrayOfPopupMenuItemOfTabsDemoStyle = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfTabsDemoStyle())))();
  let ListOfPopupMenuItemOfTabsDemoStyle = () => (ListOfPopupMenuItemOfTabsDemoStyle = dart.constFn(core.List$(PopupMenuItemOfTabsDemoStyle())))();
  let BuildContextToListOfPopupMenuItemOfTabsDemoStyle = () => (BuildContextToListOfPopupMenuItemOfTabsDemoStyle = dart.constFn(dart.fnType(ListOfPopupMenuItemOfTabsDemoStyle(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let _PageToTab = () => (_PageToTab = dart.constFn(dart.fnType(tabs.Tab, [scrollable_tabs_demo._Page])))();
  let _PageToSafeArea = () => (_PageToSafeArea = dart.constFn(dart.fnType(safe_area.SafeArea, [scrollable_tabs_demo._Page])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scrollable_tabs_demo.TabsDemoStyle.prototype,
        [_name$]: "TabsDemoStyle.iconsAndText",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scrollable_tabs_demo.TabsDemoStyle.prototype,
        [_name$]: "TabsDemoStyle.iconsOnly",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: scrollable_tabs_demo.TabsDemoStyle.prototype,
        [_name$]: "TabsDemoStyle.textOnly",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], scrollable_tabs_demo.TabsDemoStyle);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C7 || CT.C7,
        [BorderSide_width]: 2,
        [BorderSide_color]: C8 || CT.C8
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: tab_indicator.UnderlineTabIndicator.prototype,
        [UnderlineTabIndicator_insets]: C5 || CT.C5,
        [UnderlineTabIndicator_borderSide]: C6 || CT.C6
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C11 || CT.C11,
        [BorderRadius_bottomLeft]: C11 || CT.C11,
        [BorderRadius_topRight]: C11 || CT.C11,
        [BorderRadius_topLeft]: C11 || CT.C11
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1040187391
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C7 || CT.C7,
        [BorderSide_width]: 2,
        [BorderSide_color]: C13 || CT.C13
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [RoundedRectangleBorder_borderRadius]: C10 || CT.C10,
        [RoundedRectangleBorder_side]: C12 || CT.C12
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C7 || CT.C7,
        [BorderSide_width]: 4,
        [BorderSide_color]: C16 || CT.C16
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [RoundedRectangleBorder_borderRadius]: C10 || CT.C10,
        [RoundedRectangleBorder_side]: C15 || CT.C15
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C7 || CT.C7,
        [BorderSide_width]: 4,
        [BorderSide_color]: C13 || CT.C13
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [CircleBorder_side]: C18 || CT.C18
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: circle_border.CircleBorder.prototype,
        [CircleBorder_side]: C15 || CT.C15
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: stadium_border.StadiumBorder.prototype,
        [StadiumBorder_side]: C12 || CT.C12
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: stadium_border.StadiumBorder.prototype,
        [StadiumBorder_side]: C15 || CT.C15
      });
    },
    get C22() {
      return C22 = dart.const({
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
        [Text_data]: "Scrollable tabs"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 62,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59413
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C27 || CT.C27
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 132,
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
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
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
        [Text_data]: "Icons and text"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: PopupMenuItemOfTabsDemoStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C33 || CT.C33,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C0 || CT.C0
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
        [Text_data]: "Icons only"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: PopupMenuItemOfTabsDemoStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C35 || CT.C35,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C1 || CT.C1
      });
    },
    get C37() {
      return C37 = dart.const({
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
        [Text_data]: "Text only"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: PopupMenuItemOfTabsDemoStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C37 || CT.C37,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C2 || CT.C2
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 61,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 28,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 44,
        [_Location_line]: 163,
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
        [_Location_column]: 34,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 163,
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
        [_Location_column]: 24,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 28,
        [_Location_line]: 165,
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
        [_Location_column]: 24,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 11,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicator",
        [_Location_column]: 11,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 11,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 12,
        [EdgeInsets__right]: 12,
        [EdgeInsets__top]: 12,
        [EdgeInsets__left]: 12
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
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
        [_Location_column]: 24,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 17,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 15,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 177,
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
        [_Location_column]: 20,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 171,
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
        [_Location_column]: 12,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59525
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "TRIUMPH",
        [icon$]: C102 || CT.C102
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57403
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "NOTE",
        [icon$]: C104 || CT.C104
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59500
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "SUCCESS",
        [icon$]: C106 || CT.C106
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59567
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "OVERSTATE",
        [icon$]: C108 || CT.C108
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "SATISFACTION",
        [icon$]: C27 || CT.C27
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58287
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "APERTURE",
        [icon$]: C111 || CT.C111
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59487
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "WE MUST",
        [icon$]: C113 || CT.C113
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59490
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "WE CAN",
        [icon$]: C115 || CT.C115
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59375
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "ALL",
        [icon$]: C117 || CT.C117
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57675
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "EXCEPT",
        [icon$]: C119 || CT.C119
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59412
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "CRYING",
        [icon$]: C121 || CT.C121
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57344
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "MISTAKE",
        [icon$]: C123 || CT.C123
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57384
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "TRYING",
        [icon$]: C125 || CT.C125
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59369
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: scrollable_tabs_demo._Page.prototype,
        [text$]: "CAKE",
        [icon$]: C127 || CT.C127
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C103 || CT.C103, C105 || CT.C105, C107 || CT.C107, C109 || CT.C109, C110 || CT.C110, C112 || CT.C112, C114 || CT.C114, C116 || CT.C116, C118 || CT.C118, C120 || CT.C120, C122 || CT.C122, C124 || CT.C124, C126 || CT.C126], scrollable_tabs_demo._Page);
    }
  });
  const _name$ = dart.privateName(scrollable_tabs_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  scrollable_tabs_demo.TabsDemoStyle = class TabsDemoStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (scrollable_tabs_demo.TabsDemoStyle.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = scrollable_tabs_demo.TabsDemoStyle.prototype;
  dart.addTypeTests(scrollable_tabs_demo.TabsDemoStyle);
  dart.setLibraryUri(scrollable_tabs_demo.TabsDemoStyle, "package:flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart");
  dart.setFieldSignature(scrollable_tabs_demo.TabsDemoStyle, () => ({
    __proto__: dart.getFields(scrollable_tabs_demo.TabsDemoStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scrollable_tabs_demo.TabsDemoStyle, ['toString']);
  scrollable_tabs_demo.TabsDemoStyle.iconsAndText = C0 || CT.C0;
  scrollable_tabs_demo.TabsDemoStyle.iconsOnly = C1 || CT.C1;
  scrollable_tabs_demo.TabsDemoStyle.textOnly = C2 || CT.C2;
  scrollable_tabs_demo.TabsDemoStyle.values = C3 || CT.C3;
  const icon$ = dart.privateName(scrollable_tabs_demo, "_Page.icon");
  const text$ = dart.privateName(scrollable_tabs_demo, "_Page.text");
  scrollable_tabs_demo._Page = class _Page extends core.Object {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (scrollable_tabs_demo._Page.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let text = opts && 'text' in opts ? opts.text : null;
    this[icon$] = icon;
    this[text$] = text;
    ;
  }).prototype = scrollable_tabs_demo._Page.prototype;
  dart.addTypeTests(scrollable_tabs_demo._Page);
  dart.setLibraryUri(scrollable_tabs_demo._Page, "package:flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart");
  dart.setFieldSignature(scrollable_tabs_demo._Page, () => ({
    __proto__: dart.getFields(scrollable_tabs_demo._Page.__proto__),
    icon: dart.finalFieldType(icon_data.IconData),
    text: dart.finalFieldType(core.String)
  }));
  scrollable_tabs_demo.ScrollableTabsDemo = class ScrollableTabsDemo extends framework.StatefulWidget {
    createState() {
      return new scrollable_tabs_demo.ScrollableTabsDemoState.new();
    }
  };
  (scrollable_tabs_demo.ScrollableTabsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    scrollable_tabs_demo.ScrollableTabsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scrollable_tabs_demo.ScrollableTabsDemo.prototype;
  dart.addTypeTests(scrollable_tabs_demo.ScrollableTabsDemo);
  dart.setMethodSignature(scrollable_tabs_demo.ScrollableTabsDemo, () => ({
    __proto__: dart.getMethods(scrollable_tabs_demo.ScrollableTabsDemo.__proto__),
    createState: dart.fnType(scrollable_tabs_demo.ScrollableTabsDemoState, [])
  }));
  dart.setLibraryUri(scrollable_tabs_demo.ScrollableTabsDemo, "package:flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart");
  dart.defineLazy(scrollable_tabs_demo.ScrollableTabsDemo, {
    /*scrollable_tabs_demo.ScrollableTabsDemo.routeName*/get routeName() {
      return "/material/scrollable-tabs";
    }
  });
  const _controller = dart.privateName(scrollable_tabs_demo, "_controller");
  const _demoStyle = dart.privateName(scrollable_tabs_demo, "_demoStyle");
  const _customIndicator = dart.privateName(scrollable_tabs_demo, "_customIndicator");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C5;
  const UnderlineTabIndicator_insets = dart.privateName(tab_indicator, "UnderlineTabIndicator.insets");
  const _name = dart.privateName(borders, "_name");
  let C7;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C8;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C6;
  const UnderlineTabIndicator_borderSide = dart.privateName(tab_indicator, "UnderlineTabIndicator.borderSide");
  let C4;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C11;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C10;
  const RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  let C13;
  let C12;
  const RoundedRectangleBorder_side = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.side");
  let C9;
  let C16;
  let C15;
  let C14;
  let C18;
  const CircleBorder_side = dart.privateName(circle_border, "CircleBorder.side");
  let C17;
  let C19;
  const StadiumBorder_side = dart.privateName(stadium_border, "StadiumBorder.side");
  let C20;
  let C21;
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
  let C22;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C25;
  let C24;
  let C23;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C27;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C26;
  let C30;
  let C31;
  let C29;
  let C28;
  let C33;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C32;
  let C35;
  let C34;
  let C37;
  let C36;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C50;
  let C49;
  let C54;
  let C53;
  let C52;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C62;
  let C63;
  let C59;
  let C58;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C69;
  let C72;
  let C73;
  let C74;
  let C75;
  let C71;
  let C70;
  let C78;
  let C77;
  let C76;
  let C81;
  let C80;
  let C79;
  let C84;
  let C85;
  let C86;
  let C83;
  let C82;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(scrollable_tabs_demo.ScrollableTabsDemo) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(scrollable_tabs_demo.ScrollableTabsDemo)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(scrollable_tabs_demo.ScrollableTabsDemo));
  scrollable_tabs_demo.ScrollableTabsDemoState = class ScrollableTabsDemoState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new tab_controller.TabController.new({vsync: this, length: scrollable_tabs_demo._allPages[$length]});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    changeDemoStyle(style) {
      this.setState(dart.fn(() => {
        this[_demoStyle] = style;
      }, VoidToNull()));
    }
    getIndicator() {
      if (!dart.test(this[_customIndicator])) return C4 || CT.C4;
      switch (this[_demoStyle]) {
        case C0 || CT.C0:
        {
          return new shape_decoration.ShapeDecoration.new({shape: (C9 || CT.C9)['+'](C14 || CT.C14)});
        }
        case C1 || CT.C1:
        {
          return new shape_decoration.ShapeDecoration.new({shape: (C17 || CT.C17)['+'](C19 || CT.C19)});
        }
        case C2 || CT.C2:
        {
          return new shape_decoration.ShapeDecoration.new({shape: (C20 || CT.C20)['+'](C21 || CT.C21)});
        }
      }
      return null;
    }
    build(context) {
      let iconColor = theme.Theme.of(context).accentColor;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C22 || CT.C22, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/scrollable-tabs", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new icon_button.IconButton.new({icon: C26 || CT.C26, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_customIndicator] = !dart.test(this[_customIndicator]);
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new (PopupMenuButtonOfTabsDemoStyle()).new({onSelected: dart.bind(this, 'changeDemoStyle'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfTabsDemoStyle().of([C32 || CT.C32, C34 || CT.C34, C36 || CT.C36]), BuildContextToListOfPopupMenuItemOfTabsDemoStyle()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), bottom: new tabs.TabBar.new({controller: this[_controller], isScrollable: true, indicator: this.getIndicator(), tabs: scrollable_tabs_demo._allPages[$map](tabs.Tab, dart.fn(page => {
              if (!(this[_demoStyle] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart", 158, 20, "_demoStyle != null");
              switch (this[_demoStyle]) {
                case C0 || CT.C0:
                {
                  return new tabs.Tab.new({text: page.text, icon: new icon.Icon.new(page.icon, {$creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
                }
                case C1 || CT.C1:
                {
                  return new tabs.Tab.new({icon: new icon.Icon.new(page.icon, {$creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
                }
                case C2 || CT.C2:
                {
                  return new tabs.Tab.new({text: page.text, $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
                }
              }
              return null;
            }, _PageToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), body: new tabs.TabBarView.new({controller: this[_controller], children: scrollable_tabs_demo._allPages[$map](framework.Widget, dart.fn(page => new safe_area.SafeArea.new({top: false, bottom: false, child: new container.Container.new({key: new framework.ObjectKey.new(page.icon), padding: C69 || CT.C69, child: new card.Card.new({child: new basic.Center.new({child: new icon.Icon.new(page.icon, {color: iconColor, size: 128.0, semanticLabel: "Placeholder for " + dart.str(page.text) + " tab", $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), _PageToSafeArea()))[$toList](), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
  };
  (scrollable_tabs_demo.ScrollableTabsDemoState.new = function() {
    this[_controller] = null;
    this[_demoStyle] = scrollable_tabs_demo.TabsDemoStyle.iconsAndText;
    this[_customIndicator] = false;
    scrollable_tabs_demo.ScrollableTabsDemoState.__proto__.new.call(this);
    ;
  }).prototype = scrollable_tabs_demo.ScrollableTabsDemoState.prototype;
  dart.addTypeTests(scrollable_tabs_demo.ScrollableTabsDemoState);
  dart.setMethodSignature(scrollable_tabs_demo.ScrollableTabsDemoState, () => ({
    __proto__: dart.getMethods(scrollable_tabs_demo.ScrollableTabsDemoState.__proto__),
    changeDemoStyle: dart.fnType(dart.void, [scrollable_tabs_demo.TabsDemoStyle]),
    getIndicator: dart.fnType(decoration.Decoration, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scrollable_tabs_demo.ScrollableTabsDemoState, "package:flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart");
  dart.setFieldSignature(scrollable_tabs_demo.ScrollableTabsDemoState, () => ({
    __proto__: dart.getFields(scrollable_tabs_demo.ScrollableTabsDemoState.__proto__),
    [_controller]: dart.fieldType(tab_controller.TabController),
    [_demoStyle]: dart.fieldType(scrollable_tabs_demo.TabsDemoStyle),
    [_customIndicator]: dart.fieldType(core.bool)
  }));
  let C102;
  let C101;
  let C104;
  let C103;
  let C106;
  let C105;
  let C108;
  let C107;
  let C109;
  let C111;
  let C110;
  let C113;
  let C112;
  let C115;
  let C114;
  let C117;
  let C116;
  let C119;
  let C118;
  let C121;
  let C120;
  let C123;
  let C122;
  let C125;
  let C124;
  let C127;
  let C126;
  let C100;
  dart.defineLazy(scrollable_tabs_demo, {
    /*scrollable_tabs_demo._allPages*/get _allPages() {
      return C100 || CT.C100;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo", {
    "package:flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.dart": scrollable_tabs_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scrollable_tabs_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQuD;;4DAAlD;;;;EAAkD;;;;;;;;;;;;;;;;IAItC;;;;;;IACF;;;;;;;;QAFK;QAAW;IAAX;IAAW;;EAAM;;;;;;;;;;AA0BM;IAAyB;;;;;;EACpE;;;;;;;;MAJsB,iDAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcV,MAAX;AAC4D,MAAlE,oBAAc,6CAAqB,cAAc,AAAU;IAC7D;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;oBAEmC;AAG/B,MAFF,cAAS;AACW,QAAlB,mBAAa,KAAK;;IAEtB;;AAGE,qBAAK,yBAAkB;AAEvB,cAAQ;;;AAEJ,gBAAO,kDAOC;;;;AAWR,gBAAO,kDAMC;;;;AAUR,gBAAO,kDAMC;;;AASZ,YAAO;IACT;UAG0B;AACZ,sBAAkB,AAAY,eAAT,OAAO;AACxC,YAAO,oCACG,uDAEW,sBACf,oIACA,gEAEa;AAGP,gBAFF,cAAS;AAC6B,kBAApC,yBAAmB,WAAC;;yFAI1B,kEACc,uCACC,QAAc,WACO,mNAY9B,iCACM,iCACE,iBACH,2BACL,AAAU,AAWb,+CAXsB,QAAO;AAC9B,oBAAO,AAAW,oBAAG;AACrB,sBAAQ;;;AAEJ,wBAAO,yBAAU,AAAK,IAAD,aAAa,kBAAK,AAAK,IAAD;;;;AAE3C,wBAAO,yBAAU,kBAAK,AAAK,IAAD;;;;AAE1B,wBAAO,yBAAU,AAAK,IAAD;;;AAEzB,oBAAO;kKAIP,qCACU,6BACF,AAAU,AAmBjB,uDAnB6B,QAAO,QAC9B,iCACA,eACG,cACD,kCACA,4BAAU,AAAK,IAAD,uCAEZ,0BACE,6BACE,kBACL,AAAK,IAAD,eACG,SAAS,QACV,sBACS,AAAkC,8BAAf,AAAK,IAAD,SAAM;IAQhE;;;IAvJc;IACA,mBAA2B;IACpC,yBAAmB;;;EAsJ1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAlLkB,8BAAS","file":"scrollable_tabs_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__scrollable_tabs_demo: scrollable_tabs_demo
  };
});

//# sourceMappingURL=scrollable_tabs_demo.ddc.js.map
