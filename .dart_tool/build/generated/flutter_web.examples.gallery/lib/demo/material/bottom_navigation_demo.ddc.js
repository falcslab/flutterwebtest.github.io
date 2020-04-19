define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bottom_navigation_bar_item = packages__flutter_web__animation.src__widgets__bottom_navigation_bar_item;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const icon_theme = packages__flutter_web__animation.src__widgets__icon_theme;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const theme = packages__flutter_web__material.src__material__theme;
  const bottom_navigation_bar = packages__flutter_web__material.src__material__bottom_navigation_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const icon_theme_data = packages__flutter_web__src__animation__animation.src__widgets__icon_theme_data;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const bottom_navigation_demo = Object.create(dart.library);
  const $_get = dartx._get;
  const $add = dartx.add;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let JSArrayOfNavigationIconView = () => (JSArrayOfNavigationIconView = dart.constFn(_interceptors.JSArray$(bottom_navigation_demo.NavigationIconView)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfFadeTransition = () => (JSArrayOfFadeTransition = dart.constFn(_interceptors.JSArray$(transitions.FadeTransition)))();
  let FadeTransitionAndFadeTransitionToint = () => (FadeTransitionAndFadeTransitionToint = dart.constFn(dart.fnType(core.int, [transitions.FadeTransition, transitions.FadeTransition])))();
  let NavigationIconViewToBottomNavigationBarItem = () => (NavigationIconViewToBottomNavigationBarItem = dart.constFn(dart.fnType(bottom_navigation_bar_item.BottomNavigationBarItem, [bottom_navigation_demo.NavigationIconView])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let PopupMenuButtonOfBottomNavigationBarType = () => (PopupMenuButtonOfBottomNavigationBarType = dart.constFn(popup_menu.PopupMenuButton$(bottom_navigation_bar.BottomNavigationBarType)))();
  let BottomNavigationBarTypeToNull = () => (BottomNavigationBarTypeToNull = dart.constFn(dart.fnType(core.Null, [bottom_navigation_bar.BottomNavigationBarType])))();
  let PopupMenuItemOfBottomNavigationBarType = () => (PopupMenuItemOfBottomNavigationBarType = dart.constFn(popup_menu.PopupMenuItem$(bottom_navigation_bar.BottomNavigationBarType)))();
  let JSArrayOfPopupMenuItemOfBottomNavigationBarType = () => (JSArrayOfPopupMenuItemOfBottomNavigationBarType = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfBottomNavigationBarType())))();
  let ListOfPopupMenuItemOfBottomNavigationBarType = () => (ListOfPopupMenuItemOfBottomNavigationBarType = dart.constFn(core.List$(PopupMenuItemOfBottomNavigationBarType())))();
  let BuildContextToListOfPopupMenuItemOfBottomNavigationBarType = () => (BuildContextToListOfPopupMenuItemOfBottomNavigationBarType = dart.constFn(dart.fnType(ListOfPopupMenuItemOfBottomNavigationBarType(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 22,
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
        [_Location_column]: 18,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C4 || CT.C4,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0.02,
        [OffsetBase__dx]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 62,
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
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 4,
        [EdgeInsets__right]: 4,
        [EdgeInsets__top]: 4,
        [EdgeInsets__left]: 4
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57744
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
    get C38() {
      return C38 = dart.constList([], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58045
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C41 || CT.C41
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58050
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C43 || CT.C43
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59517
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C45 || CT.C45
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59518
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C47 || CT.C47
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58900
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C49 || CT.C49
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 7,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentIndex",
        [_Location_column]: 7,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 7,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
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
        [Text_data]: "Bottom navigation"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 64,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
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
        [Text_data]: "Fixed"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: bottom_navigation_bar.BottomNavigationBarType.prototype,
        [_name]: "BottomNavigationBarType.fixed",
        index: 0
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: PopupMenuItemOfBottomNavigationBarType().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C64 || CT.C64,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C65 || CT.C65
      });
    },
    get C67() {
      return C67 = dart.const({
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
        [Text_data]: "Shifting"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: bottom_navigation_bar.BottomNavigationBarType.prototype,
        [_name]: "BottomNavigationBarType.shifting",
        index: 1
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: PopupMenuItemOfBottomNavigationBarType().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C67 || CT.C67,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C68 || CT.C68
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 213,
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
        [_Location_column]: 15,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 7,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart"
      });
    }
  });
  const _animation = dart.privateName(bottom_navigation_demo, "_animation");
  const _icon = dart.privateName(bottom_navigation_demo, "_icon");
  const _color = dart.privateName(bottom_navigation_demo, "_color");
  const _title = dart.privateName(bottom_navigation_demo, "_title");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C4;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C3;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C5;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  const item = dart.privateName(bottom_navigation_demo, "NavigationIconView.item");
  const controller = dart.privateName(bottom_navigation_demo, "NavigationIconView.controller");
  bottom_navigation_demo.NavigationIconView = class NavigationIconView extends core.Object {
    get item() {
      return this[item];
    }
    set item(value) {
      super.item = value;
    }
    get controller() {
      return this[controller];
    }
    set controller(value) {
      super.controller = value;
    }
    transition(type, context) {
      let iconColor = null;
      if (dart.equals(type, bottom_navigation_bar.BottomNavigationBarType.shifting)) {
        iconColor = this[_color];
      } else {
        let themeData = theme.Theme.of(context);
        iconColor = dart.equals(themeData.brightness, ui.Brightness.light) ? themeData.primaryColor : themeData.accentColor;
      }
      return new transitions.FadeTransition.new({opacity: this[_animation], child: new transitions.SlideTransition.new({position: this[_animation].drive(ui.Offset, new (TweenOfOffset()).new({begin: C5 || CT.C5, end: ui.Offset.zero})), child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: iconColor, size: 120.0}), child: new basic.Semantics.new({label: "Placeholder for " + dart.str(this[_title]) + " tab", child: this[_icon], $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
  };
  (bottom_navigation_demo.NavigationIconView.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let activeIcon = opts && 'activeIcon' in opts ? opts.activeIcon : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    this[_animation] = null;
    this[_icon] = icon;
    this[_color] = color;
    this[_title] = title;
    this[item] = new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: icon, activeIcon: activeIcon, title: new text.Text.new(title, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), backgroundColor: color});
    this[controller] = new animation_controller.AnimationController.new({duration: theme.kThemeAnimationDuration, vsync: vsync});
    this[_animation] = this.controller.drive(core.double, new tween.CurveTween.new({curve: C3 || CT.C3}));
  }).prototype = bottom_navigation_demo.NavigationIconView.prototype;
  dart.addTypeTests(bottom_navigation_demo.NavigationIconView);
  dart.setMethodSignature(bottom_navigation_demo.NavigationIconView, () => ({
    __proto__: dart.getMethods(bottom_navigation_demo.NavigationIconView.__proto__),
    transition: dart.fnType(transitions.FadeTransition, [bottom_navigation_bar.BottomNavigationBarType, framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navigation_demo.NavigationIconView, "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart");
  dart.setFieldSignature(bottom_navigation_demo.NavigationIconView, () => ({
    __proto__: dart.getFields(bottom_navigation_demo.NavigationIconView.__proto__),
    [_icon]: dart.finalFieldType(framework.Widget),
    [_color]: dart.finalFieldType(ui.Color),
    [_title]: dart.finalFieldType(core.String),
    item: dart.finalFieldType(bottom_navigation_bar_item.BottomNavigationBarItem),
    controller: dart.finalFieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C22;
  let C25;
  let C26;
  let C27;
  let C28;
  let C24;
  let C23;
  bottom_navigation_demo.CustomIcon = class CustomIcon extends framework.StatelessWidget {
    build(context) {
      let iconTheme = icon_theme.IconTheme.of(context);
      return new container.Container.new({margin: C22 || CT.C22, width: dart.notNull(iconTheme.size) - 8.0, height: dart.notNull(iconTheme.size) - 8.0, color: iconTheme.color, $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (bottom_navigation_demo.CustomIcon.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottom_navigation_demo.CustomIcon.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_navigation_demo.CustomIcon.prototype;
  dart.addTypeTests(bottom_navigation_demo.CustomIcon);
  dart.setMethodSignature(bottom_navigation_demo.CustomIcon, () => ({
    __proto__: dart.getMethods(bottom_navigation_demo.CustomIcon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navigation_demo.CustomIcon, "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart");
  let C31;
  let C32;
  let C33;
  let C34;
  let C30;
  let C29;
  bottom_navigation_demo.CustomInactiveIcon = class CustomInactiveIcon extends framework.StatelessWidget {
    build(context) {
      let iconTheme = icon_theme.IconTheme.of(context);
      return new container.Container.new({margin: C22 || CT.C22, width: dart.notNull(iconTheme.size) - 8.0, height: dart.notNull(iconTheme.size) - 8.0, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: iconTheme.color, width: 2.0})}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (bottom_navigation_demo.CustomInactiveIcon.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottom_navigation_demo.CustomInactiveIcon.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_navigation_demo.CustomInactiveIcon.prototype;
  dart.addTypeTests(bottom_navigation_demo.CustomInactiveIcon);
  dart.setMethodSignature(bottom_navigation_demo.CustomInactiveIcon, () => ({
    __proto__: dart.getMethods(bottom_navigation_demo.CustomInactiveIcon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navigation_demo.CustomInactiveIcon, "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart");
  bottom_navigation_demo.BottomNavigationDemo = class BottomNavigationDemo extends framework.StatefulWidget {
    createState() {
      return new bottom_navigation_demo._BottomNavigationDemoState.new();
    }
  };
  (bottom_navigation_demo.BottomNavigationDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottom_navigation_demo.BottomNavigationDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_navigation_demo.BottomNavigationDemo.prototype;
  dart.addTypeTests(bottom_navigation_demo.BottomNavigationDemo);
  dart.setMethodSignature(bottom_navigation_demo.BottomNavigationDemo, () => ({
    __proto__: dart.getMethods(bottom_navigation_demo.BottomNavigationDemo.__proto__),
    createState: dart.fnType(bottom_navigation_demo._BottomNavigationDemoState, [])
  }));
  dart.setLibraryUri(bottom_navigation_demo.BottomNavigationDemo, "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart");
  dart.defineLazy(bottom_navigation_demo.BottomNavigationDemo, {
    /*bottom_navigation_demo.BottomNavigationDemo.routeName*/get routeName() {
      return "/material/bottom_navigation";
    }
  });
  const _currentIndex = dart.privateName(bottom_navigation_demo, "_currentIndex");
  const _type = dart.privateName(bottom_navigation_demo, "_type");
  const _navigationViews = dart.privateName(bottom_navigation_demo, "_navigationViews");
  const Widget_key = dart.privateName(framework, "Widget.key");
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
  let C38;
  let C37;
  let C39;
  let C41;
  let C40;
  let C43;
  let C42;
  let C45;
  let C44;
  let C47;
  let C46;
  let C49;
  let C48;
  const _rebuild = dart.privateName(bottom_navigation_demo, "_rebuild");
  let C52;
  let C51;
  let C50;
  const _buildTransitionsStack = dart.privateName(bottom_navigation_demo, "_buildTransitionsStack");
  let C55;
  let C56;
  let C57;
  let C58;
  let C54;
  let C53;
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
  let C59;
  let C62;
  let C61;
  let C60;
  let C64;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const _name = dart.privateName(bottom_navigation_bar, "_name");
  let C65;
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C63;
  let C67;
  let C68;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(bottom_navigation_demo.BottomNavigationDemo) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(bottom_navigation_demo.BottomNavigationDemo)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(bottom_navigation_demo.BottomNavigationDemo));
  bottom_navigation_demo._BottomNavigationDemoState = class _BottomNavigationDemoState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_navigationViews] = JSArrayOfNavigationIconView().of([new bottom_navigation_demo.NavigationIconView.new({icon: C35 || CT.C35, title: "Alarm", color: colors.Colors.deepPurple, vsync: this}), new bottom_navigation_demo.NavigationIconView.new({activeIcon: new bottom_navigation_demo.CustomIcon.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), icon: new bottom_navigation_demo.CustomInactiveIcon.new({$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), title: "Box", color: colors.Colors.deepOrange, vsync: this}), new bottom_navigation_demo.NavigationIconView.new({activeIcon: C40 || CT.C40, icon: C42 || CT.C42, title: "Cloud", color: colors.Colors.teal, vsync: this}), new bottom_navigation_demo.NavigationIconView.new({activeIcon: C44 || CT.C44, icon: C46 || CT.C46, title: "Favorites", color: colors.Colors.indigo, vsync: this}), new bottom_navigation_demo.NavigationIconView.new({icon: C48 || CT.C48, title: "Event", color: colors.Colors.pink, vsync: this})]);
      for (let view of this[_navigationViews])
        view.controller.addListener(dart.bind(this, _rebuild));
      this[_navigationViews][$_get](this[_currentIndex]).controller.value = 1.0;
    }
    dispose() {
      for (let view of this[_navigationViews])
        view.controller.dispose();
      super.dispose();
    }
    [_rebuild]() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_buildTransitionsStack]() {
      let transitions = JSArrayOfFadeTransition().of([]);
      for (let view of this[_navigationViews])
        transitions[$add](view.transition(this[_type], this.context));
      transitions[$sort](dart.fn((a, b) => {
        let aAnimation = a.opacity;
        let bAnimation = b.opacity;
        let aValue = aAnimation.value;
        let bValue = bAnimation.value;
        return aValue[$compareTo](bValue);
      }, FadeTransitionAndFadeTransitionToint()));
      return new basic.Stack.new({children: transitions, $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
    }
    build(context) {
      let botNavBar = new bottom_navigation_bar.BottomNavigationBar.new({items: this[_navigationViews][$map](bottom_navigation_bar_item.BottomNavigationBarItem, dart.fn(navigationView => navigationView.item, NavigationIconViewToBottomNavigationBarItem()))[$toList](), currentIndex: this[_currentIndex], type: this[_type], onTap: dart.fn(index => {
          this.setState(dart.fn(() => {
            this[_navigationViews][$_get](this[_currentIndex]).controller.reverse();
            this[_currentIndex] = index;
            this[_navigationViews][$_get](this[_currentIndex]).controller.forward();
          }, VoidToNull()));
        }, intToNull()), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C59 || CT.C59, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/bottom_navigation", {$creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new (PopupMenuButtonOfBottomNavigationBarType()).new({onSelected: dart.fn(value => {
                this.setState(dart.fn(() => {
                  this[_type] = value;
                }, VoidToNull()));
              }, BottomNavigationBarTypeToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfBottomNavigationBarType().of([C63 || CT.C63, C66 || CT.C66]), BuildContextToListOfPopupMenuItemOfBottomNavigationBarType()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), body: new basic.Center.new({child: this[_buildTransitionsStack](), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), bottomNavigationBar: botNavBar, $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (bottom_navigation_demo._BottomNavigationDemoState.new = function() {
    this[_currentIndex] = 0;
    this[_type] = bottom_navigation_bar.BottomNavigationBarType.shifting;
    this[_navigationViews] = null;
    bottom_navigation_demo._BottomNavigationDemoState.__proto__.new.call(this);
    ;
  }).prototype = bottom_navigation_demo._BottomNavigationDemoState.prototype;
  dart.addTypeTests(bottom_navigation_demo._BottomNavigationDemoState);
  dart.setMethodSignature(bottom_navigation_demo._BottomNavigationDemoState, () => ({
    __proto__: dart.getMethods(bottom_navigation_demo._BottomNavigationDemoState.__proto__),
    [_rebuild]: dart.fnType(dart.void, []),
    [_buildTransitionsStack]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navigation_demo._BottomNavigationDemoState, "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart");
  dart.setFieldSignature(bottom_navigation_demo._BottomNavigationDemoState, () => ({
    __proto__: dart.getFields(bottom_navigation_demo._BottomNavigationDemoState.__proto__),
    [_currentIndex]: dart.fieldType(core.int),
    [_type]: dart.fieldType(bottom_navigation_bar.BottomNavigationBarType),
    [_navigationViews]: dart.fieldType(core.List$(bottom_navigation_demo.NavigationIconView))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo", {
    "package:flutter_web.examples.gallery/demo/material/bottom_navigation_demo.dart": bottom_navigation_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_navigation_demo.dart"],"names":[],"mappings":"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","file":"bottom_navigation_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__bottom_navigation_demo: bottom_navigation_demo
  };
});

//# sourceMappingURL=bottom_navigation_demo.ddc.js.map
