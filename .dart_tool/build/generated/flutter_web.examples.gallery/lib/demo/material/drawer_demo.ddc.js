define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__foundation__assertions, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const text = packages__flutter_web__animation.src__widgets__text;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const container = packages__flutter_web__animation.src__widgets__container;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const icons = packages__flutter_web__material.src__material__icons;
  const theme = packages__flutter_web__material.src__material__theme;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const user_accounts_drawer_header = packages__flutter_web__material.src__material__user_accounts_drawer_header;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const ui = packages__flutter_web_ui__ui.ui;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const drawer_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToListTile = () => (StringToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [core.String])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.android",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
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
        [Text_data]: "The drawer's items don't do anything"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C5 || CT.C5,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C6 || CT.C6
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 22,
        [_Location_line]: 83,
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
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 86,
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
        [_Location_column]: 18,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
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
        [Text_data]: "Navigation drawer"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 54,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 91,
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
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
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
        [Text_data]: "Trevor Widget"
      });
    },
    get C26() {
      return C26 = dart.const({
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
        [Text_data]: "trevor.widget@example.com"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "accountName",
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "accountEmail",
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDetailsPressed",
        [_Location_column]: 15,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 128,
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
        [_Location_column]: 62,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 55,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 62,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 33,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 33,
        [_Location_line]: 130,
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
        [_Location_column]: 38,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 29,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 126,
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
        [_Location_column]: 34,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 27,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 123,
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
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57669
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C58 || CT.C58
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
        [Text_data]: "Add account"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 35,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 35,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59576
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C66 || CT.C66
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
        [Text_data]: "Manage accounts"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 35,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 35,
        [_Location_line]: 152,
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
        [_Location_column]: 33,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 31,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 31,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 27,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 119,
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
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 117,
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
        [_Location_column]: 24,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeTop",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 97,
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
        [_Location_column]: 16,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 181,
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
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 187,
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
        [_Location_column]: 26,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 185,
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
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 178,
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
        [_Location_column]: 20,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 13,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "excludeSemantics",
        [_Location_column]: 13,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart"
      });
    },
    get C142() {
      return C142 = dart.constList(["A", "B", "C", "D", "E"], core.String);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: 0
      });
    }
  });
  drawer_demo.DrawerDemo = class DrawerDemo extends framework.StatefulWidget {
    createState() {
      return new drawer_demo._DrawerDemoState.new();
    }
  };
  (drawer_demo.DrawerDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    drawer_demo.DrawerDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = drawer_demo.DrawerDemo.prototype;
  dart.addTypeTests(drawer_demo.DrawerDemo);
  dart.setMethodSignature(drawer_demo.DrawerDemo, () => ({
    __proto__: dart.getMethods(drawer_demo.DrawerDemo.__proto__),
    createState: dart.fnType(drawer_demo._DrawerDemoState, [])
  }));
  dart.setLibraryUri(drawer_demo.DrawerDemo, "package:flutter_web.examples.gallery/demo/material/drawer_demo.dart");
  dart.defineLazy(drawer_demo.DrawerDemo, {
    /*drawer_demo.DrawerDemo.routeName*/get routeName() {
      return "/material/drawer";
    }
  });
  const _scaffoldKey = dart.privateName(drawer_demo, "_scaffoldKey");
  const _controller = dart.privateName(drawer_demo, "_controller");
  const _drawerContentsOpacity = dart.privateName(drawer_demo, "_drawerContentsOpacity");
  const _drawerDetailsPosition = dart.privateName(drawer_demo, "_drawerDetailsPosition");
  const _showDrawerContents = dart.privateName(drawer_demo, "_showDrawerContents");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const _name = dart.privateName(platform, "_name");
  let C1;
  let C2;
  let C3;
  const _backIcon = dart.privateName(drawer_demo, "_backIcon");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  let C5;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
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
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C4;
  const _showNotImplementedMessage = dart.privateName(drawer_demo, "_showNotImplementedMessage");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C14;
  let C15;
  let C11;
  let C10;
  let C16;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C25;
  let C26;
  let C29;
  let C30;
  let C31;
  let C32;
  let C28;
  let C27;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C33;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
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
  let C56;
  let C54;
  let C53;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C58;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C57;
  let C59;
  let C62;
  let C63;
  let C64;
  let C61;
  let C60;
  let C66;
  let C65;
  let C67;
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C76;
  let C77;
  let C74;
  let C73;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C85;
  let C83;
  let C82;
  let C88;
  let C87;
  let C86;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C100;
  let C97;
  let C96;
  let C103;
  let C102;
  let C101;
  let C106;
  let C105;
  let C104;
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
  let C127;
  let C128;
  let C124;
  let C123;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  let C138;
  let C139;
  let C140;
  let C141;
  let C137;
  let C136;
  let C142;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C143;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(drawer_demo.DrawerDemo) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(drawer_demo.DrawerDemo)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(drawer_demo.DrawerDemo));
  drawer_demo._DrawerDemoState = class _DrawerDemoState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: C0 || CT.C0});
      this[_drawerContentsOpacity] = new animations.CurvedAnimation.new({parent: new animations.ReverseAnimation.new(this[_controller]), curve: curves.Curves.fastOutSlowIn});
      this[_drawerDetailsPosition] = this[_controller].drive(ui.Offset, drawer_demo._DrawerDemoState._drawerDetailsTween);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_backIcon]() {
      switch (theme.Theme.of(this.context).platform) {
        case C1 || CT.C1:
        case C2 || CT.C2:
        {
          return icons.Icons.arrow_back;
        }
        case C3 || CT.C3:
        {
          return icons.Icons.arrow_back_ios;
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/drawer_demo.dart", 67, 12, "false");
      return null;
    }
    [_showNotImplementedMessage]() {
      navigator.Navigator.pop(core.Object, this.context);
      this[_scaffoldKey].currentState.showSnackBar(C4 || CT.C4);
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({leading: new icon_button.IconButton.new({icon: new icon.Icon.new(this[_backIcon](), {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), alignment: alignment.Alignment.centerLeft, tooltip: "Back", onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), title: C16 || CT.C16, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/drawer", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), drawer: new drawer.Drawer.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new user_accounts_drawer_header.UserAccountsDrawerHeader.new({accountName: C25 || CT.C25, accountEmail: C26 || CT.C26, margin: edge_insets.EdgeInsets.zero, onDetailsPressed: dart.fn(() => {
                  this[_showDrawerContents] = !dart.test(this[_showDrawerContents]);
                  if (dart.test(this[_showDrawerContents]))
                    this[_controller].reverse();
                  else
                    this[_controller].forward();
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), media_query.MediaQuery.removePadding({context: context, removeTop: true, child: new basic.Expanded.new({child: new scroll_view.ListView.new({padding: C33 || CT.C33, children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new transitions.FadeTransition.new({opacity: this[_drawerContentsOpacity], child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: drawer_demo._DrawerDemoState._drawerContents[$map](framework.Widget, dart.fn(id => new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({child: new text.Text.new(id, {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), title: new text.Text.new("Drawer item " + dart.str(id), {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), onTap: dart.bind(this, _showNotImplementedMessage), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), StringToListTile()))[$toList](), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new transitions.SlideTransition.new({position: this[_drawerDetailsPosition], child: new transitions.FadeTransition.new({opacity: new animations.ReverseAnimation.new(this[_drawerContentsOpacity]), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: C57 || CT.C57, title: C59 || CT.C59, onTap: dart.bind(this, _showNotImplementedMessage), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new list_tile.ListTile.new({leading: C65 || CT.C65, title: C67 || CT.C67, onTap: dart.bind(this, _showNotImplementedMessage), $creationLocationd_0dea112b090073317d4: C68 || CT.C68})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82})]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96})]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), body: new basic.Center.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
              this[_scaffoldKey].currentState.openDrawer();
            }, VoidToNull()), child: new basic.Semantics.new({button: true, label: "Open drawer", excludeSemantics: true, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new container.Container.new({width: 100.0, height: 100.0, $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new basic.Padding.new({padding: C33 || CT.C33, child: new text.Text.new("Tap here to open the drawer", {style: theme.Theme.of(context).textTheme.subhead, $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115})]), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136});
    }
  };
  (drawer_demo._DrawerDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_controller] = null;
    this[_drawerContentsOpacity] = null;
    this[_drawerDetailsPosition] = null;
    this[_showDrawerContents] = true;
    drawer_demo._DrawerDemoState.__proto__.new.call(this);
    ;
  }).prototype = drawer_demo._DrawerDemoState.prototype;
  dart.addTypeTests(drawer_demo._DrawerDemoState);
  dart.setMethodSignature(drawer_demo._DrawerDemoState, () => ({
    __proto__: dart.getMethods(drawer_demo._DrawerDemoState.__proto__),
    [_backIcon]: dart.fnType(icon_data.IconData, []),
    [_showNotImplementedMessage]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(drawer_demo._DrawerDemoState, "package:flutter_web.examples.gallery/demo/material/drawer_demo.dart");
  dart.setFieldSignature(drawer_demo._DrawerDemoState, () => ({
    __proto__: dart.getFields(drawer_demo._DrawerDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_drawerContentsOpacity]: dart.fieldType(animation.Animation$(core.double)),
    [_drawerDetailsPosition]: dart.fieldType(animation.Animation$(ui.Offset)),
    [_showDrawerContents]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(drawer_demo._DrawerDemoState, {
    /*drawer_demo._DrawerDemoState._drawerContents*/get _drawerContents() {
      return C142 || CT.C142;
    },
    /*drawer_demo._DrawerDemoState._drawerDetailsTween*/get _drawerDetailsTween() {
      return new (TweenOfOffset()).new({begin: C143 || CT.C143, end: ui.Offset.zero}).chain(new tween.CurveTween.new({curve: curves.Curves.fastOutSlowIn}));
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/drawer_demo", {
    "package:flutter_web.examples.gallery/demo/material/drawer_demo.dart": drawer_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drawer_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYoC;IAAkB;;;;;;EACtD;;;;;;;;MAJsB,gCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BV,MAAX;AAIL,MAHD,oBAAc,yDACL;AAMR,MAHD,+BAAyB,4CACf,oCAAiB,2BACX;AAE+C,MAA/D,+BAAyB,AAAY,mCAAM;IAC7C;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;;AAGE,cAAc,AAAY,eAAT;;;;AAGb,gBAAa;;;;AAEb,gBAAa;;;AAEjB,WAAO;AACP,YAAO;IACT;;AAGwB,MAAZ,qCAAI;AAE4D,MAD1E,AAAa,AAAa;IAE5B;UAG0B;AACxB,YAAO,iCACA,4BACG,iCACG,sCACD,kBAAK,sFACU,yCACZ,mBACE;AACa,cAAZ,qCAAI,OAAO;sHAIR,sBACf,8LAGI,8BACC,gCACa,sBAChB,+HAGqB,+CACD;AAC0B,kBAA1C,4BAAsB,WAAC;AACvB,gCAAI;AACmB,oBAArB,AAAY;;AAES,oBAArB,AAAY;2FAGP,+CACA,OAAO,aAEL,aACJ,+BACE,gEAEa,sBAChB,+BACoB,sBAEhB,6CACW,qCACF,oCACsB,2CACY,2CAC7B,AAAgB,AAMvB,qEANmC,QAAQ,MACrC,qCACI,2CAAoB,kBAAK,EAAE,4HAC7B,kBAAK,AAAiB,0BAAH,EAAE,8EACrB,+OAMf,+CACY,qCACH,6CACI,oCAAiB,sCACnB,oCACsB,2CACY,2CACrB,sBAChB,2FAGS,4FAET,2FAGS,+mBAe7B,6BACG,iCACE;AACiC,cAAtC,AAAa,AAAa;qCAErB,iCACG,aACD,iCACW,aACX,oCACsB,iCACT,sBAChB,oCACS,eACC,kEAEV,sDAES,kBACL,uCACa,AAAY,AAAU,eAAnB,OAAO;IASzC;;;IAnL+B,qBAAe;IAiB1B;IACF;IACA;IACb,4BAAsB;;;EAgK7B;;;;;;;;;;;;;;;;;;MAlL4B,4CAAe;;;MAQT,gDAAmB;YAAG,AAGpD,yDADY,uBACN,iCACQ","file":"drawer_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__drawer_demo: drawer_demo
  };
});

//# sourceMappingURL=drawer_demo.ddc.js.map
