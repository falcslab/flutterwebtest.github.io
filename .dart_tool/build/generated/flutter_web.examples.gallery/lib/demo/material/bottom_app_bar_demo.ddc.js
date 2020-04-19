define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box = packages__flutter_web__animation.src__rendering__box;
  const container = packages__flutter_web__animation.src__widgets__container;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const circle_border = packages__flutter_web__animation.src__painting__circle_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const icon_theme = packages__flutter_web__animation.src__widgets__icon_theme;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const divider = packages__flutter_web__material.src__material__divider;
  const floating_action_button_location = packages__flutter_web__material.src__material__floating_action_button_location;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const colors = packages__flutter_web__material.src__material__colors;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const radio = packages__flutter_web__material.src__material__radio;
  const button = packages__flutter_web__material.src__material__button;
  const bottom_sheet = packages__flutter_web__material.src__material__bottom_sheet;
  const icons = packages__flutter_web__material.src__material__icons;
  const bottom_app_bar = packages__flutter_web__material.src__material__bottom_app_bar;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const material = packages__flutter_web__material.src__material__material;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const notched_shapes = packages__flutter_web__src__animation__animation.src__painting__notched_shapes;
  const colors$ = packages__flutter_web__src__animation__animation.src__painting__colors;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const icon_theme_data = packages__flutter_web__src__animation__animation.src__widgets__icon_theme_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const bottom_app_bar_demo = Object.create(dart.library);
  const $first = dartx.first;
  const $runtimeType = dartx.runtimeType;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let _RadioItemOfWidget = () => (_RadioItemOfWidget = dart.constFn(bottom_app_bar_demo._RadioItem$(framework.Widget)))();
  let _RadioItemOfbool = () => (_RadioItemOfbool = dart.constFn(bottom_app_bar_demo._RadioItem$(core.bool)))();
  let _RadioItemOfFloatingActionButtonLocation = () => (_RadioItemOfFloatingActionButtonLocation = dart.constFn(bottom_app_bar_demo._RadioItem$(floating_action_button_location.FloatingActionButtonLocation)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let _ChoiceValueOfWidget = () => (_ChoiceValueOfWidget = dart.constFn(bottom_app_bar_demo._ChoiceValue$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let _ChoiceValueOfbool = () => (_ChoiceValueOfbool = dart.constFn(bottom_app_bar_demo._ChoiceValue$(core.bool)))();
  let _ChoiceValueOfFloatingActionButtonLocation = () => (_ChoiceValueOfFloatingActionButtonLocation = dart.constFn(bottom_app_bar_demo._ChoiceValue$(floating_action_button_location.FloatingActionButtonLocation)))();
  let _NamedColorToRawMaterialButton = () => (_NamedColorToRawMaterialButton = dart.constFn(dart.fnType(button.RawMaterialButton, [bottom_app_bar_demo._NamedColor])))();
  let BuildContextTo_DemoDrawer = () => (BuildContextTo_DemoDrawer = dart.constFn(dart.fnType(bottom_app_bar_demo._DemoDrawer, [framework.BuildContext])))();
  let JSArrayOfFloatingActionButtonLocation = () => (JSArrayOfFloatingActionButtonLocation = dart.constFn(_interceptors.JSArray$(floating_action_button_location.FloatingActionButtonLocation)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C2() {
      return C2 = dart.const({
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
        [Text_data]: "When the Scaffold's floating action button location changes, the floating action button animates to its new position.The BottomAppBar adapts its shape appropriately."
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C1 || CT.C1,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C2 || CT.C2
      });
    },
    get C3() {
      return C3 = dart.const({
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
        [Text_data]: "Bottom app bar"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 60,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59413
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Update shape",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C8 || CT.C8
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 147,
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
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 88,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: bottom_app_bar_demo._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "FAB Shape"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 30,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 44,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 55,
        [_Location_line]: 164,
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
        [_Location_column]: 11,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 30,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 43,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 54,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 30,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 38,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 49,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_indent]: 0,
        [Divider_height]: 16
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: bottom_app_bar_demo._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "Notch"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 28,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 44,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 56,
        [_Location_line]: 171,
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
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 28,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 45,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 57,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: bottom_app_bar_demo._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "FAB Position"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 52,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 67,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 81,
        [_Location_line]: 177,
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
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 52,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 70,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 84,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 52,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 66,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 80,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 52,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 69,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 83,
        [_Location_line]: 180,
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
        [_Location_column]: 11,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: bottom_app_bar_demo._Heading.prototype,
        [Widget_key]: null,
        [_Heading_text]: "App bar color"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colors",
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedColor",
        [_Location_column]: 35,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 46,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fabLocation",
        [_Location_column]: 9,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButtonLocation",
        [_Location_column]: 7,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: notched_shapes.CircularNotchedRectangle.prototype
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: bottom_app_bar_demo._DiamondNotchedRectangle.prototype
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: _ChoiceValueOfWidget().prototype,
        [_ChoiceValue_label]: "do not show a floating action button",
        [_ChoiceValue_title]: "None",
        [_ChoiceValue_value]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 56,
        [BoxConstraints_minHeight]: 56,
        [BoxConstraints_maxWidth]: 56,
        [BoxConstraints_minWidth]: 56
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Clip.prototype,
        [_name]: "Clip.none",
        index: 0
      });
    },
    get C98() {
      return C98 = dart.fn(bottom_app_bar_demo._BottomAppBarDemoState._showSnackbar, VoidTovoid());
    },
    get C99() {
      return C99 = dart.const({
        __proto__: floating_action_button._DefaultHeroTag.prototype
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294964192.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294959282.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294954112.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294948685.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294944550.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294940672.0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294675456.0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294278144.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293880832.0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293284096.0
      });
    },
    get C101() {
      return C101 = dart.constMap(core.int, ui.Color, [50, C102 || CT.C102, 100, C103 || CT.C103, 200, C104 || CT.C104, 300, C105 || CT.C105, 400, C106 || CT.C106, 500, C107 || CT.C107, 600, C108 || CT.C108, 700, C109 || CT.C109, 800, C110 || CT.C110, 900, C111 || CT.C111]);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color__value]: 4294940672.0,
        [ColorSwatch__swatch]: C101 || CT.C101
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57669
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Action",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C113 || CT.C113
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: floating_action_button.FloatingActionButton.prototype,
        [Widget_key]: null,
        [FloatingActionButton__sizeConstraints]: C96 || CT.C96,
        [FloatingActionButton_materialTapTargetSize]: null,
        [FloatingActionButton_focusNode]: null,
        [FloatingActionButton_isExtended]: false,
        [FloatingActionButton_clipBehavior]: C97 || CT.C97,
        [FloatingActionButton_shape]: null,
        [FloatingActionButton_mini]: false,
        [FloatingActionButton_disabledElevation]: null,
        [FloatingActionButton_highlightElevation]: null,
        [FloatingActionButton_hoverElevation]: null,
        [FloatingActionButton_focusElevation]: null,
        [FloatingActionButton_elevation]: null,
        [FloatingActionButton_onPressed]: C98 || CT.C98,
        [FloatingActionButton_heroTag]: C99 || CT.C99,
        [FloatingActionButton_hoverColor]: null,
        [FloatingActionButton_focusColor]: null,
        [FloatingActionButton_backgroundColor]: C100 || CT.C100,
        [FloatingActionButton_foregroundColor]: null,
        [FloatingActionButton_tooltip]: null,
        [FloatingActionButton_child]: C112 || CT.C112
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: _ChoiceValueOfWidget().prototype,
        [_ChoiceValue_label]: "circular floating action button",
        [_ChoiceValue_title]: "Circular",
        [_ChoiceValue_value]: C95 || CT.C95
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: bottom_app_bar_demo._DiamondFab.prototype,
        [Widget_key]: null,
        [_DiamondFab_onPressed]: C98 || CT.C98,
        [_DiamondFab_child]: C112 || CT.C112
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: _ChoiceValueOfWidget().prototype,
        [_ChoiceValue_label]: "diamond shape floating action button",
        [_ChoiceValue_title]: "Diamond",
        [_ChoiceValue_value]: C115 || CT.C115
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: _ChoiceValueOfbool().prototype,
        [_ChoiceValue_label]: "show bottom appbar notch",
        [_ChoiceValue_title]: "On",
        [_ChoiceValue_value]: true
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: _ChoiceValueOfbool().prototype,
        [_ChoiceValue_label]: "do not show bottom appbar notch",
        [_ChoiceValue_title]: "Off",
        [_ChoiceValue_value]: false
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: floating_action_button_location._EndDockedFloatingActionButtonLocation.prototype
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: _ChoiceValueOfFloatingActionButtonLocation().prototype,
        [_ChoiceValue_label]: "floating action button is docked at the end of the bottom app bar",
        [_ChoiceValue_title]: "Attached - End",
        [_ChoiceValue_value]: C119 || CT.C119
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: floating_action_button_location._CenterDockedFloatingActionButtonLocation.prototype
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: _ChoiceValueOfFloatingActionButtonLocation().prototype,
        [_ChoiceValue_label]: "floating action button is docked at the center of the bottom app bar",
        [_ChoiceValue_title]: "Attached - Center",
        [_ChoiceValue_value]: C121 || CT.C121
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: floating_action_button_location._EndFloatFloatingActionButtonLocation.prototype
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: _ChoiceValueOfFloatingActionButtonLocation().prototype,
        [_ChoiceValue_label]: "floating action button floats above the end of the bottom app bar",
        [_ChoiceValue_title]: "Free - End",
        [_ChoiceValue_value]: C123 || CT.C123
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: floating_action_button_location._CenterFloatFloatingActionButtonLocation.prototype
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: _ChoiceValueOfFloatingActionButtonLocation().prototype,
        [_ChoiceValue_label]: "floating action button is floats above the center of the bottom app bar",
        [_ChoiceValue_title]: "Free - Center",
        [_ChoiceValue_value]: C125 || CT.C125
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Clear",
        [_NamedColor_color]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294951168.0
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Orange",
        [_NamedColor_color]: C129 || CT.C129
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4287757055.0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Light Blue",
        [_NamedColor_color]: C131 || CT.C131
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278243839.0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Cyan",
        [_NamedColor_color]: C133 || CT.C133
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278238463.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Cerulean",
        [_NamedColor_color]: C135 || CT.C135
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278229998.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: bottom_app_bar_demo._NamedColor.prototype,
        [_NamedColor_name]: "Blue",
        [_NamedColor_color]: C137 || CT.C137
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C130 || CT.C130, C132 || CT.C132, C134 || CT.C134, C136 || CT.C136], bottom_app_bar_demo._NamedColor);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional__bottom]: 0,
        [EdgeInsetsDirectional__end]: 0,
        [EdgeInsetsDirectional__top]: 0,
        [EdgeInsetsDirectional__start]: 16
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 15,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 19,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 17,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 17,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 243,
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
        [_Location_column]: 13,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 32,
        [BoxConstraints_minHeight]: 32,
        [BoxConstraints_maxWidth]: 32,
        [BoxConstraints_minWidth]: 32
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292204506.0
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 13,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 11,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fillColor",
        [_Location_column]: 11,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184, C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional__bottom]: 0,
        [EdgeInsetsDirectional__end]: 0,
        [EdgeInsetsDirectional__top]: 0,
        [EdgeInsetsDirectional__start]: 56
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194, C195 || CT.C195], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199, C200 || CT.C200, C201 || CT.C201], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 318,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58834
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Show bottom sheet",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C203 || CT.C203
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: bottom_app_bar_demo._DemoDrawer.prototype,
        [Widget_key]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 351,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_name$]: "FlexFit.tight",
        index: 0
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C210 || CT.C210,
        [Flexible_fit]: C211 || CT.C211,
        [Flexible_flex]: 1
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59574
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "show search action",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C213 || CT.C213
      });
    },
    get C215() {
      return C215 = dart.const({
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
        [Text_data]: "This is a dummy search action."
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C1 || CT.C1,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C215 || CT.C215
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 369,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 11,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
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
        [Text_data]: "This is a dummy menu action."
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C1 || CT.C1,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C225 || CT.C225
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 377,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236, C237 || CT.C237], widget_inspector._Location);
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 392,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
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
        [Text_data]: "Search"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C213 || CT.C213
      });
    },
    get C239() {
      return C239 = dart.const({
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
        [ListTile_title]: C240 || CT.C240,
        [ListTile_leading]: C241 || CT.C241
      });
    },
    get C243() {
      return C243 = dart.const({
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
        [Text_data]: "3D"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59469
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C245 || CT.C245
      });
    },
    get C242() {
      return C242 = dart.const({
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
        [ListTile_title]: C243 || CT.C243,
        [ListTile_leading]: C244 || CT.C244
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C242 || CT.C242], framework.Widget);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 408,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 407,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C250 || CT.C250,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: bottom_app_bar_demo._DiamondBorder.prototype
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256, C257 || CT.C257], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C254 || CT.C254,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 440,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 438,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 449,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264, C265 || CT.C265, C266 || CT.C266, C267 || CT.C267], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C263 || CT.C263,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 435,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    }
  });
  bottom_app_bar_demo.BottomAppBarDemo = class BottomAppBarDemo extends framework.StatefulWidget {
    createState() {
      return new bottom_app_bar_demo._BottomAppBarDemoState.new();
    }
  };
  (bottom_app_bar_demo.BottomAppBarDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottom_app_bar_demo.BottomAppBarDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo.BottomAppBarDemo.prototype;
  dart.addTypeTests(bottom_app_bar_demo.BottomAppBarDemo);
  dart.setMethodSignature(bottom_app_bar_demo.BottomAppBarDemo, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo.BottomAppBarDemo.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(bottom_app_bar_demo.BottomAppBarDemo, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.defineLazy(bottom_app_bar_demo.BottomAppBarDemo, {
    /*bottom_app_bar_demo.BottomAppBarDemo.routeName*/get routeName() {
      return "/material/bottom_app_bar";
    }
  });
  const _fabShape = dart.privateName(bottom_app_bar_demo, "_fabShape");
  const _showNotch = dart.privateName(bottom_app_bar_demo, "_showNotch");
  const _fabLocation = dart.privateName(bottom_app_bar_demo, "_fabLocation");
  const _babColor = dart.privateName(bottom_app_bar_demo, "_babColor");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
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
  let C2;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C0;
  const _onShowNotchChanged = dart.privateName(bottom_app_bar_demo, "_onShowNotchChanged");
  const _onFabShapeChanged = dart.privateName(bottom_app_bar_demo, "_onFabShapeChanged");
  const _onFabLocationChanged = dart.privateName(bottom_app_bar_demo, "_onFabLocationChanged");
  const _onBabColorChanged = dart.privateName(bottom_app_bar_demo, "_onBabColorChanged");
  let C3;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C5;
  let C4;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C8;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C7;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C18;
  const _Heading_text = dart.privateName(bottom_app_bar_demo, "_Heading.text");
  let C19;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C35;
  let C36;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
  let C47;
  let C50;
  let C51;
  let C52;
  let C49;
  let C48;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C62;
  let C59;
  let C58;
  let C65;
  let C66;
  let C67;
  let C64;
  let C63;
  let C68;
  let C71;
  let C72;
  let C73;
  let C70;
  let C69;
  let C76;
  let C77;
  let C75;
  let C74;
  const _selectNotch = dart.privateName(bottom_app_bar_demo, "_selectNotch");
  let C80;
  let C81;
  let C82;
  let C79;
  let C78;
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  let C84;
  let C83;
  let C91;
  let C92;
  const _ChoiceValue_label = dart.privateName(bottom_app_bar_demo, "_ChoiceValue.label");
  const _ChoiceValue_title = dart.privateName(bottom_app_bar_demo, "_ChoiceValue.title");
  const _ChoiceValue_value = dart.privateName(bottom_app_bar_demo, "_ChoiceValue.value");
  let C93;
  const BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  const BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  const BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  const BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  let C96;
  const FloatingActionButton__sizeConstraints = dart.privateName(floating_action_button, "FloatingActionButton._sizeConstraints");
  const FloatingActionButton_materialTapTargetSize = dart.privateName(floating_action_button, "FloatingActionButton.materialTapTargetSize");
  const FloatingActionButton_focusNode = dart.privateName(floating_action_button, "FloatingActionButton.focusNode");
  const FloatingActionButton_isExtended = dart.privateName(floating_action_button, "FloatingActionButton.isExtended");
  const _name = dart.privateName(ui, "_name");
  let C97;
  const FloatingActionButton_clipBehavior = dart.privateName(floating_action_button, "FloatingActionButton.clipBehavior");
  const FloatingActionButton_shape = dart.privateName(floating_action_button, "FloatingActionButton.shape");
  const FloatingActionButton_mini = dart.privateName(floating_action_button, "FloatingActionButton.mini");
  const FloatingActionButton_disabledElevation = dart.privateName(floating_action_button, "FloatingActionButton.disabledElevation");
  const FloatingActionButton_highlightElevation = dart.privateName(floating_action_button, "FloatingActionButton.highlightElevation");
  const FloatingActionButton_hoverElevation = dart.privateName(floating_action_button, "FloatingActionButton.hoverElevation");
  const FloatingActionButton_focusElevation = dart.privateName(floating_action_button, "FloatingActionButton.focusElevation");
  const FloatingActionButton_elevation = dart.privateName(floating_action_button, "FloatingActionButton.elevation");
  let C98;
  const FloatingActionButton_onPressed = dart.privateName(floating_action_button, "FloatingActionButton.onPressed");
  let C99;
  const FloatingActionButton_heroTag = dart.privateName(floating_action_button, "FloatingActionButton.heroTag");
  const FloatingActionButton_hoverColor = dart.privateName(floating_action_button, "FloatingActionButton.hoverColor");
  const FloatingActionButton_focusColor = dart.privateName(floating_action_button, "FloatingActionButton.focusColor");
  const Color__value = dart.privateName(ui, "Color._value");
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C101;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C100;
  const FloatingActionButton_backgroundColor = dart.privateName(floating_action_button, "FloatingActionButton.backgroundColor");
  const FloatingActionButton_foregroundColor = dart.privateName(floating_action_button, "FloatingActionButton.foregroundColor");
  const FloatingActionButton_tooltip = dart.privateName(floating_action_button, "FloatingActionButton.tooltip");
  let C113;
  let C112;
  const FloatingActionButton_child = dart.privateName(floating_action_button, "FloatingActionButton.child");
  let C95;
  let C94;
  const _DiamondFab_onPressed = dart.privateName(bottom_app_bar_demo, "_DiamondFab.onPressed");
  const _DiamondFab_child = dart.privateName(bottom_app_bar_demo, "_DiamondFab.child");
  let C115;
  let C114;
  let C116;
  let C117;
  let C119;
  let C118;
  let C121;
  let C120;
  let C123;
  let C122;
  let C125;
  let C124;
  const _NamedColor_name = dart.privateName(bottom_app_bar_demo, "_NamedColor.name");
  const _NamedColor_color = dart.privateName(bottom_app_bar_demo, "_NamedColor.color");
  let C127;
  let C129;
  let C128;
  let C131;
  let C130;
  let C133;
  let C132;
  let C135;
  let C134;
  let C137;
  let C136;
  let C126;
  bottom_app_bar_demo._BottomAppBarDemoState = class _BottomAppBarDemoState extends framework.State$(bottom_app_bar_demo.BottomAppBarDemo) {
    static _showSnackbar() {
      let text = "When the Scaffold's floating action button location changes, the floating action button animates to its new position.The BottomAppBar adapts its shape appropriately.";
      bottom_app_bar_demo._BottomAppBarDemoState._scaffoldKey.currentState.showSnackBar(C0 || CT.C0);
    }
    [_onShowNotchChanged](value) {
      this.setState(dart.fn(() => {
        this[_showNotch] = value;
      }, VoidToNull()));
    }
    [_onFabShapeChanged](value) {
      this.setState(dart.fn(() => {
        this[_fabShape] = value;
      }, VoidToNull()));
    }
    [_onFabLocationChanged](value) {
      this.setState(dart.fn(() => {
        this[_fabLocation] = value;
      }, VoidToNull()));
    }
    [_onBabColorChanged](value) {
      this.setState(dart.fn(() => {
        this[_babColor] = value;
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: bottom_app_bar_demo._BottomAppBarDemoState._scaffoldKey, appBar: new app_bar.AppBar.new({title: C3 || CT.C3, elevation: 0.0, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/bottom_app_bar", {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new icon_button.IconButton.new({icon: C7 || CT.C7, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_fabShape] = dart.equals(this[_fabShape], bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab) ? bottom_app_bar_demo._BottomAppBarDemoState.kDiamondFab : bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab;
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), body: new scroll_view.ListView.new({padding: C18 || CT.C18, children: JSArrayOfWidget().of([C19 || CT.C19, new (_RadioItemOfWidget()).new(bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab, this[_fabShape], dart.bind(this, _onFabShapeChanged), {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new (_RadioItemOfWidget()).new(bottom_app_bar_demo._BottomAppBarDemoState.kDiamondFab, this[_fabShape], dart.bind(this, _onFabShapeChanged), {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new (_RadioItemOfWidget()).new(bottom_app_bar_demo._BottomAppBarDemoState.kNoFab, this[_fabShape], dart.bind(this, _onFabShapeChanged), {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), C35 || CT.C35, C36 || CT.C36, new (_RadioItemOfbool()).new(bottom_app_bar_demo._BottomAppBarDemoState.kShowNotchTrue, this[_showNotch], dart.bind(this, _onShowNotchChanged), {$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new (_RadioItemOfbool()).new(bottom_app_bar_demo._BottomAppBarDemoState.kShowNotchFalse, this[_showNotch], dart.bind(this, _onShowNotchChanged), {$creationLocationd_0dea112b090073317d4: C42 || CT.C42}), C35 || CT.C35, C47 || CT.C47, new (_RadioItemOfFloatingActionButtonLocation()).new(bottom_app_bar_demo._BottomAppBarDemoState.kFabEndDocked, this[_fabLocation], dart.bind(this, _onFabLocationChanged), {$creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new (_RadioItemOfFloatingActionButtonLocation()).new(bottom_app_bar_demo._BottomAppBarDemoState.kFabCenterDocked, this[_fabLocation], dart.bind(this, _onFabLocationChanged), {$creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new (_RadioItemOfFloatingActionButtonLocation()).new(bottom_app_bar_demo._BottomAppBarDemoState.kFabEndFloat, this[_fabLocation], dart.bind(this, _onFabLocationChanged), {$creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new (_RadioItemOfFloatingActionButtonLocation()).new(bottom_app_bar_demo._BottomAppBarDemoState.kFabCenterFloat, this[_fabLocation], dart.bind(this, _onFabLocationChanged), {$creationLocationd_0dea112b090073317d4: C63 || CT.C63}), C35 || CT.C35, C68 || CT.C68, new bottom_app_bar_demo._ColorsItem.new(bottom_app_bar_demo._BottomAppBarDemoState.kBabColors, this[_babColor], dart.bind(this, _onBabColorChanged), {$creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), floatingActionButton: this[_fabShape].value, floatingActionButtonLocation: this[_fabLocation].value, bottomNavigationBar: new bottom_app_bar_demo._DemoBottomAppBar.new({color: this[_babColor], fabLocation: this[_fabLocation].value, shape: this[_selectNotch](), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
    [_selectNotch]() {
      if (!dart.test(this[_showNotch].value)) return null;
      if (dart.equals(this[_fabShape], bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab)) return C91 || CT.C91;
      if (dart.equals(this[_fabShape], bottom_app_bar_demo._BottomAppBarDemoState.kDiamondFab)) return C92 || CT.C92;
      return null;
    }
  };
  (bottom_app_bar_demo._BottomAppBarDemoState.new = function() {
    this[_fabShape] = bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab;
    this[_showNotch] = bottom_app_bar_demo._BottomAppBarDemoState.kShowNotchTrue;
    this[_fabLocation] = bottom_app_bar_demo._BottomAppBarDemoState.kFabEndDocked;
    this[_babColor] = bottom_app_bar_demo._BottomAppBarDemoState.kBabColors[$first].color;
    bottom_app_bar_demo._BottomAppBarDemoState.__proto__.new.call(this);
    ;
  }).prototype = bottom_app_bar_demo._BottomAppBarDemoState.prototype;
  dart.addTypeTests(bottom_app_bar_demo._BottomAppBarDemoState);
  dart.setMethodSignature(bottom_app_bar_demo._BottomAppBarDemoState, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._BottomAppBarDemoState.__proto__),
    [_onShowNotchChanged]: dart.fnType(dart.void, [bottom_app_bar_demo._ChoiceValue$(core.bool)]),
    [_onFabShapeChanged]: dart.fnType(dart.void, [bottom_app_bar_demo._ChoiceValue$(framework.Widget)]),
    [_onFabLocationChanged]: dart.fnType(dart.void, [bottom_app_bar_demo._ChoiceValue$(floating_action_button_location.FloatingActionButtonLocation)]),
    [_onBabColorChanged]: dart.fnType(dart.void, [ui.Color]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_selectNotch]: dart.fnType(notched_shapes.NotchedShape, [])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._BottomAppBarDemoState, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._BottomAppBarDemoState, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._BottomAppBarDemoState.__proto__),
    [_fabShape]: dart.fieldType(bottom_app_bar_demo._ChoiceValue$(framework.Widget)),
    [_showNotch]: dart.fieldType(bottom_app_bar_demo._ChoiceValue$(core.bool)),
    [_fabLocation]: dart.fieldType(bottom_app_bar_demo._ChoiceValue$(floating_action_button_location.FloatingActionButtonLocation)),
    [_babColor]: dart.fieldType(ui.Color)
  }));
  dart.defineLazy(bottom_app_bar_demo._BottomAppBarDemoState, {
    /*bottom_app_bar_demo._BottomAppBarDemoState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kNoFab*/get kNoFab() {
      return C93 || CT.C93;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kCircularFab*/get kCircularFab() {
      return C94 || CT.C94;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kDiamondFab*/get kDiamondFab() {
      return C114 || CT.C114;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kShowNotchTrue*/get kShowNotchTrue() {
      return C116 || CT.C116;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kShowNotchFalse*/get kShowNotchFalse() {
      return C117 || CT.C117;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kFabEndDocked*/get kFabEndDocked() {
      return C118 || CT.C118;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kFabCenterDocked*/get kFabCenterDocked() {
      return C120 || CT.C120;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kFabEndFloat*/get kFabEndFloat() {
      return C122 || CT.C122;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kFabCenterFloat*/get kFabCenterFloat() {
      return C124 || CT.C124;
    },
    /*bottom_app_bar_demo._BottomAppBarDemoState.kBabColors*/get kBabColors() {
      return C126 || CT.C126;
    }
  });
  const _is__ChoiceValue_default = Symbol('_is__ChoiceValue_default');
  bottom_app_bar_demo._ChoiceValue$ = dart.generic(T => {
    class _ChoiceValue extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get title() {
        return this[title$];
      }
      set title(value) {
        super.title = value;
      }
      get label() {
        return this[label$];
      }
      set label(value) {
        super.label = value;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(\"" + dart.str(this.title) + "\")";
      }
    }
    (_ChoiceValue.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let label = opts && 'label' in opts ? opts.label : null;
      this[value$] = value;
      this[title$] = title;
      this[label$] = label;
      ;
    }).prototype = _ChoiceValue.prototype;
    dart.addTypeTests(_ChoiceValue);
    _ChoiceValue.prototype[_is__ChoiceValue_default] = true;
    const value$ = _ChoiceValue_value;
    const title$ = _ChoiceValue_title;
    const label$ = _ChoiceValue_label;
    dart.setLibraryUri(_ChoiceValue, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
    dart.setFieldSignature(_ChoiceValue, () => ({
      __proto__: dart.getFields(_ChoiceValue.__proto__),
      value: dart.finalFieldType(T),
      title: dart.finalFieldType(core.String),
      label: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(_ChoiceValue, ['toString']);
    return _ChoiceValue;
  });
  bottom_app_bar_demo._ChoiceValue = bottom_app_bar_demo._ChoiceValue$();
  dart.addTypeTests(bottom_app_bar_demo._ChoiceValue, _is__ChoiceValue_default);
  const EdgeInsetsDirectional__bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional._bottom");
  const EdgeInsetsDirectional__end = dart.privateName(edge_insets, "EdgeInsetsDirectional._end");
  const EdgeInsetsDirectional__top = dart.privateName(edge_insets, "EdgeInsetsDirectional._top");
  const EdgeInsetsDirectional__start = dart.privateName(edge_insets, "EdgeInsetsDirectional._start");
  let C138;
  let C141;
  let C142;
  let C143;
  let C140;
  let C139;
  let C146;
  let C147;
  let C145;
  let C144;
  let C150;
  let C151;
  let C152;
  let C149;
  let C148;
  let C155;
  let C156;
  let C157;
  let C158;
  let C154;
  let C153;
  let C161;
  let C160;
  let C159;
  let C164;
  let C163;
  let C162;
  let C167;
  let C166;
  let C165;
  let C170;
  let C171;
  let C172;
  let C173;
  let C169;
  let C168;
  const _is__RadioItem_default = Symbol('_is__RadioItem_default');
  const value$ = dart.privateName(bottom_app_bar_demo, "_RadioItem.value");
  const groupValue$ = dart.privateName(bottom_app_bar_demo, "_RadioItem.groupValue");
  const onChanged$ = dart.privateName(bottom_app_bar_demo, "_RadioItem.onChanged");
  bottom_app_bar_demo._RadioItem$ = dart.generic(T => {
    let _ChoiceValueOfT = () => (_ChoiceValueOfT = dart.constFn(bottom_app_bar_demo._ChoiceValue$(T)))();
    let RadioOf_ChoiceValueOfT = () => (RadioOf_ChoiceValueOfT = dart.constFn(radio.Radio$(_ChoiceValueOfT())))();
    class _RadioItem extends framework.StatelessWidget {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get groupValue() {
        return this[groupValue$];
      }
      set groupValue(value) {
        super.groupValue = value;
      }
      get onChanged() {
        return this[onChanged$];
      }
      set onChanged(value) {
        super.onChanged = value;
      }
      build(context) {
        let theme = theme$.Theme.of(context);
        return new container.Container.new({height: 56.0, padding: C138 || CT.C138, alignment: alignment.AlignmentDirectional.centerStart, child: new basic.MergeSemantics.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new (RadioOf_ChoiceValueOfT()).new({value: this.value, groupValue: this.groupValue, onChanged: this.onChanged, $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new basic.Expanded.new({child: new basic.Semantics.new({container: true, button: true, label: this.value.label, child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
                        this.onChanged(this.value);
                      }, VoidToNull()), child: new text.Text.new(this.value.title, {style: theme.textTheme.subhead, $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159})]), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C168 || CT.C168});
      }
    }
    (_RadioItem.new = function(value, groupValue, onChanged, opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[value$] = value;
      this[groupValue$] = groupValue;
      this[onChanged$] = onChanged;
      _RadioItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _RadioItem.prototype;
    dart.addTypeTests(_RadioItem);
    _RadioItem.prototype[_is__RadioItem_default] = true;
    dart.setMethodSignature(_RadioItem, () => ({
      __proto__: dart.getMethods(_RadioItem.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_RadioItem, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
    dart.setFieldSignature(_RadioItem, () => ({
      __proto__: dart.getFields(_RadioItem.__proto__),
      value: dart.finalFieldType(bottom_app_bar_demo._ChoiceValue$(T)),
      groupValue: dart.finalFieldType(bottom_app_bar_demo._ChoiceValue$(T)),
      onChanged: dart.finalFieldType(dart.fnType(dart.void, [bottom_app_bar_demo._ChoiceValue$(T)]))
    }));
    return _RadioItem;
  });
  bottom_app_bar_demo._RadioItem = bottom_app_bar_demo._RadioItem$();
  dart.addTypeTests(bottom_app_bar_demo._RadioItem, _is__RadioItem_default);
  bottom_app_bar_demo._NamedColor = class _NamedColor extends core.Object {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
  };
  (bottom_app_bar_demo._NamedColor.new = function(color, name) {
    this[color$] = color;
    this[name$] = name;
    ;
  }).prototype = bottom_app_bar_demo._NamedColor.prototype;
  dart.addTypeTests(bottom_app_bar_demo._NamedColor);
  const color$ = _NamedColor_color;
  const name$ = _NamedColor_name;
  dart.setLibraryUri(bottom_app_bar_demo._NamedColor, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._NamedColor, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._NamedColor.__proto__),
    color: dart.finalFieldType(ui.Color),
    name: dart.finalFieldType(core.String)
  }));
  let C174;
  let C175;
  let C178;
  let C179;
  let C177;
  let C176;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C181;
  let C180;
  let C189;
  let C190;
  let C188;
  let C187;
  const colors$0 = dart.privateName(bottom_app_bar_demo, "_ColorsItem.colors");
  const selectedColor$ = dart.privateName(bottom_app_bar_demo, "_ColorsItem.selectedColor");
  const onChanged$0 = dart.privateName(bottom_app_bar_demo, "_ColorsItem.onChanged");
  bottom_app_bar_demo._ColorsItem = class _ColorsItem extends framework.StatelessWidget {
    get colors() {
      return this[colors$0];
    }
    set colors(value) {
      super.colors = value;
    }
    get selectedColor() {
      return this[selectedColor$];
    }
    set selectedColor(value) {
      super.selectedColor = value;
    }
    get onChanged() {
      return this[onChanged$0];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    build(context) {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: this.colors[$map](framework.Widget, dart.fn(namedColor => new button.RawMaterialButton.new({onPressed: dart.fn(() => {
            this.onChanged(namedColor.color);
          }, VoidToNull()), constraints: C174 || CT.C174, fillColor: namedColor.color, shape: new circle_border.CircleBorder.new({side: new borders.BorderSide.new({color: dart.equals(namedColor.color, this.selectedColor) ? colors.Colors.black : C175 || CT.C175, width: 2.0})}), child: new basic.Semantics.new({value: namedColor.name, selected: dart.equals(namedColor.color, this.selectedColor), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), _NamedColorToRawMaterialButton()))[$toList](), $creationLocationd_0dea112b090073317d4: C187 || CT.C187});
    }
  };
  (bottom_app_bar_demo._ColorsItem.new = function(colors, selectedColor, onChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colors$0] = colors;
    this[selectedColor$] = selectedColor;
    this[onChanged$0] = onChanged;
    bottom_app_bar_demo._ColorsItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo._ColorsItem.prototype;
  dart.addTypeTests(bottom_app_bar_demo._ColorsItem);
  dart.setMethodSignature(bottom_app_bar_demo._ColorsItem, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._ColorsItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._ColorsItem, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._ColorsItem, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._ColorsItem.__proto__),
    colors: dart.finalFieldType(core.List$(bottom_app_bar_demo._NamedColor)),
    selectedColor: dart.finalFieldType(ui.Color),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [ui.Color]))
  }));
  let C191;
  let C194;
  let C195;
  let C193;
  let C192;
  let C198;
  let C199;
  let C200;
  let C201;
  let C197;
  let C196;
  bottom_app_bar_demo._Heading = class _Heading extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new container.Container.new({height: 48.0, padding: C191 || CT.C191, alignment: alignment.AlignmentDirectional.centerStart, child: new text.Text.new(this.text, {style: theme.textTheme.body1.copyWith({color: theme.primaryColor}), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), $creationLocationd_0dea112b090073317d4: C196 || CT.C196});
    }
  };
  (bottom_app_bar_demo._Heading.new = function(text, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    bottom_app_bar_demo._Heading.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo._Heading.prototype;
  dart.addTypeTests(bottom_app_bar_demo._Heading);
  const text$ = _Heading_text;
  dart.setMethodSignature(bottom_app_bar_demo._Heading, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._Heading.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._Heading, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._Heading, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._Heading.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  let C203;
  let C202;
  let C204;
  let C207;
  let C208;
  let C206;
  let C205;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C210;
  const ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  const _name$ = dart.privateName(flex, "_name");
  let C211;
  const Flexible_fit = dart.privateName(basic, "Flexible.fit");
  const Flexible_flex = dart.privateName(basic, "Flexible.flex");
  let C209;
  let C213;
  let C212;
  let C215;
  let C214;
  let C218;
  let C219;
  let C217;
  let C216;
  let C222;
  let C223;
  let C221;
  let C220;
  let C225;
  let C224;
  let C228;
  let C229;
  let C227;
  let C226;
  let C232;
  let C231;
  let C230;
  let C235;
  let C236;
  let C237;
  let C234;
  let C233;
  const color$0 = dart.privateName(bottom_app_bar_demo, "_DemoBottomAppBar.color");
  const fabLocation$ = dart.privateName(bottom_app_bar_demo, "_DemoBottomAppBar.fabLocation");
  const shape$ = dart.privateName(bottom_app_bar_demo, "_DemoBottomAppBar.shape");
  bottom_app_bar_demo._DemoBottomAppBar = class _DemoBottomAppBar extends framework.StatelessWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get fabLocation() {
      return this[fabLocation$];
    }
    set fabLocation(value) {
      super.fabLocation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    build(context) {
      let rowContents = JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C202 || CT.C202, onPressed: dart.fn(() => {
            bottom_sheet.showModalBottomSheet(dart.void, {context: context, builder: dart.fn(context => C204 || CT.C204, BuildContextTo_DemoDrawer())});
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C205 || CT.C205})]);
      if (dart.test(bottom_app_bar_demo._DemoBottomAppBar.kCenterLocations[$contains](this.fabLocation))) {
        rowContents[$add](C209 || CT.C209);
      }
      rowContents[$addAll](JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C212 || CT.C212, onPressed: dart.fn(() => {
            scaffold.Scaffold.of(context).showSnackBar(C214 || CT.C214);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C216 || CT.C216}), new icon_button.IconButton.new({icon: new icon.Icon.new(dart.equals(theme$.Theme.of(context).platform, platform.TargetPlatform.iOS) ? icons.Icons.more_horiz : icons.Icons.more_vert, {semanticLabel: "Show menu actions", $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), onPressed: dart.fn(() => {
            scaffold.Scaffold.of(context).showSnackBar(C224 || CT.C224);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C226 || CT.C226})]));
      return new bottom_app_bar.BottomAppBar.new({color: this.color, child: new basic.Row.new({children: rowContents, $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), shape: this.shape, $creationLocationd_0dea112b090073317d4: C233 || CT.C233});
    }
  };
  (bottom_app_bar_demo._DemoBottomAppBar.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let fabLocation = opts && 'fabLocation' in opts ? opts.fabLocation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$0] = color;
    this[fabLocation$] = fabLocation;
    this[shape$] = shape;
    bottom_app_bar_demo._DemoBottomAppBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo._DemoBottomAppBar.prototype;
  dart.addTypeTests(bottom_app_bar_demo._DemoBottomAppBar);
  dart.setMethodSignature(bottom_app_bar_demo._DemoBottomAppBar, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._DemoBottomAppBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._DemoBottomAppBar, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._DemoBottomAppBar, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._DemoBottomAppBar.__proto__),
    color: dart.finalFieldType(ui.Color),
    fabLocation: dart.finalFieldType(floating_action_button_location.FloatingActionButtonLocation),
    shape: dart.finalFieldType(notched_shapes.NotchedShape)
  }));
  dart.defineLazy(bottom_app_bar_demo._DemoBottomAppBar, {
    /*bottom_app_bar_demo._DemoBottomAppBar.kCenterLocations*/get kCenterLocations() {
      return JSArrayOfFloatingActionButtonLocation().of([floating_action_button_location.FloatingActionButtonLocation.centerDocked, floating_action_button_location.FloatingActionButtonLocation.centerFloat]);
    }
  });
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  let C240;
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  let C241;
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C239;
  let C243;
  let C245;
  let C244;
  let C242;
  let C238;
  let C248;
  let C247;
  let C246;
  let C251;
  let C250;
  let C249;
  bottom_app_bar_demo._DemoDrawer = class _DemoDrawer extends framework.StatelessWidget {
    build(context) {
      return new drawer.Drawer.new({child: new basic.Column.new({children: C238 || CT.C238, $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), $creationLocationd_0dea112b090073317d4: C249 || CT.C249});
    }
  };
  (bottom_app_bar_demo._DemoDrawer.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottom_app_bar_demo._DemoDrawer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo._DemoDrawer.prototype;
  dart.addTypeTests(bottom_app_bar_demo._DemoDrawer);
  dart.setMethodSignature(bottom_app_bar_demo._DemoDrawer, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._DemoDrawer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._DemoDrawer, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  let C252;
  let C255;
  let C256;
  let C257;
  let C254;
  let C253;
  let C260;
  let C261;
  let C259;
  let C258;
  let C264;
  let C265;
  let C266;
  let C267;
  let C263;
  let C262;
  bottom_app_bar_demo._DiamondFab = class _DiamondFab extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      return new material.Material.new({shape: C252 || CT.C252, color: colors.Colors.orange, child: new ink_well.InkWell.new({onTap: this.onPressed, child: new container.Container.new({width: 56.0, height: 56.0, child: icon_theme.IconTheme.merge({data: new icon_theme_data.IconThemeData.new({color: theme$.Theme.of(context).accentIconTheme.color}), child: this.child}), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), $creationLocationd_0dea112b090073317d4: C258 || CT.C258}), elevation: 6.0, $creationLocationd_0dea112b090073317d4: C262 || CT.C262});
    }
  };
  (bottom_app_bar_demo._DiamondFab.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[onPressed$] = onPressed;
    bottom_app_bar_demo._DiamondFab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_app_bar_demo._DiamondFab.prototype;
  dart.addTypeTests(bottom_app_bar_demo._DiamondFab);
  const child$ = _DiamondFab_child;
  const onPressed$ = _DiamondFab_onPressed;
  dart.setMethodSignature(bottom_app_bar_demo._DiamondFab, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._DiamondFab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._DiamondFab, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.setFieldSignature(bottom_app_bar_demo._DiamondFab, () => ({
    __proto__: dart.getFields(bottom_app_bar_demo._DiamondFab.__proto__),
    child: dart.finalFieldType(framework.Widget),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  bottom_app_bar_demo._DiamondNotchedRectangle = class _DiamondNotchedRectangle extends core.Object {
    getOuterPath(host, guest) {
      let t0, t0$;
      if (!dart.test(host.overlaps(guest))) {
        t0 = ui.Path.new();
        t0.addRect(host);
        return t0;
      }
      if (!(dart.notNull(guest.width) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart", 461, 12, "guest.width > 0.0");
      let intersection = guest.intersect(host);
      let notchToCenter = dart.notNull(intersection.height) * (dart.notNull(guest.height) / 2.0) / (dart.notNull(guest.width) / 2.0);
      t0$ = ui.Path.new();
      t0$.moveTo(host.left, host.top);
      t0$.lineTo(dart.notNull(guest.center.dx) - notchToCenter, host.top);
      t0$.lineTo(dart.notNull(guest.left) + dart.notNull(guest.width) / 2.0, guest.bottom);
      t0$.lineTo(dart.notNull(guest.center.dx) + notchToCenter, host.top);
      t0$.lineTo(host.right, host.top);
      t0$.lineTo(host.right, host.bottom);
      t0$.lineTo(host.left, host.bottom);
      t0$.close();
      return t0$;
    }
  };
  (bottom_app_bar_demo._DiamondNotchedRectangle.new = function() {
    ;
  }).prototype = bottom_app_bar_demo._DiamondNotchedRectangle.prototype;
  dart.addTypeTests(bottom_app_bar_demo._DiamondNotchedRectangle);
  bottom_app_bar_demo._DiamondNotchedRectangle[dart.implements] = () => [notched_shapes.NotchedShape];
  dart.setMethodSignature(bottom_app_bar_demo._DiamondNotchedRectangle, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._DiamondNotchedRectangle.__proto__),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect, ui.Rect])
  }));
  dart.setLibraryUri(bottom_app_bar_demo._DiamondNotchedRectangle, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  let C268;
  bottom_app_bar_demo._DiamondBorder = class _DiamondBorder extends borders.ShapeBorder {
    get dimensions() {
      return C268 || CT.C268;
    }
    getInnerPath(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return this.getOuterPath(rect, {textDirection: textDirection});
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      t0.moveTo(dart.notNull(rect.left) + dart.notNull(rect.width) / 2.0, rect.top);
      t0.lineTo(rect.right, dart.notNull(rect.top) + dart.notNull(rect.height) / 2.0);
      t0.lineTo(dart.notNull(rect.left) + dart.notNull(rect.width) / 2.0, rect.bottom);
      t0.lineTo(rect.left, dart.notNull(rect.top) + dart.notNull(rect.height) / 2.0);
      t0.close();
      return t0;
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    }
    scale(t) {
      return null;
    }
  };
  (bottom_app_bar_demo._DiamondBorder.new = function() {
    bottom_app_bar_demo._DiamondBorder.__proto__.new.call(this);
    ;
  }).prototype = bottom_app_bar_demo._DiamondBorder.prototype;
  dart.addTypeTests(bottom_app_bar_demo._DiamondBorder);
  dart.setMethodSignature(bottom_app_bar_demo._DiamondBorder, () => ({
    __proto__: dart.getMethods(bottom_app_bar_demo._DiamondBorder.__proto__),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: ui.TextDirection}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: ui.TextDirection}, {}),
    scale: dart.fnType(borders.ShapeBorder, [core.double])
  }));
  dart.setGetterSignature(bottom_app_bar_demo._DiamondBorder, () => ({
    __proto__: dart.getGetters(bottom_app_bar_demo._DiamondBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(bottom_app_bar_demo._DiamondBorder, "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart");
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo", {
    "package:flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.dart": bottom_app_bar_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_app_bar_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYyB;IAAwB;;;;;;EACjD;;;;;;;;MAJsB,8CAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiFd;AAMZ,MAFD,AAAa,AAAa;IAG5B;0BAkB4C;AAGxC,MAFF,cAAS;AACW,QAAlB,mBAAa,KAAK;;IAEtB;yBAE6C;AAGzC,MAFF,cAAS;AACU,QAAjB,kBAAY,KAAK;;IAErB;4BAEsE;AAGlE,MAFF,cAAS;AACa,QAApB,qBAAe,KAAK;;IAExB;yBAE8B;AAG1B,MAFF,cAAS;AACU,QAAjB,kBAAY,KAAK;;IAErB;UAG0B;AACxB,YAAO,iCACA,iEACG,uDAEK,cACM,sBACf,iIACA,8DAEa;AAGP,gBAFF,cAAS;AAC2D,kBAAlE,kBAAsB,YAAV,iBAAa,2DAAe,yDAAc;;wJAM1D,gEAEc,qCAGhB,+BAAmB,yDAAc,2BAAW,qFAC5C,+BAAmB,wDAAa,2BAAW,qFAC3C,+BAAmB,mDAAQ,2BAAW,mHAKtC,6BAAiB,2DAAgB,4BAAY,sFAC7C,6BAAiB,4DAAiB,4BAAY,oHAK9C,qDAAyC,0DAAe,8BAAc,wFACtE,qDAAyC,6DAAkB,8BAAc,wFACzE,qDAAyC,yDAAc,8BAAc,wFACrE,qDAAyC,4DAAiB,8BAAc,sHAKxE,wCAAY,uDAAY,2BAAW,sKAGjB,AAAU,qDACF,AAAa,+CACtB,sDACZ,8BACM,AAAa,iCACnB;IAGb;;AAGE,qBAAK,AAAW,yBACd,MAAO;AACT,UAAc,YAAV,iBAAa,0DACf;AACF,UAAc,YAAV,iBAAa,yDACf;AACF,YAAO;IACT;;;IA/FqB,kBAAY;IACd,mBAAa;IACW,qBAAe;IACpD,kBAAY,AAAW,AAAM;;;EA6FrC;;;;;;;;;;;;;;;;;;;;MA1LwC,uDAAY;YAAG;;MAInB,iDAAM;;;MAMN,uDAAY;;;MAUZ,sDAAW;;;MAWb,yDAAc;;;MAMd,0DAAe;;;MAQS,wDAAa;;;MAMb,2DAAgB;;;MAMhB,uDAAY;;;MAMZ,0DAAe;;;MAkBxC,qDAAU;;;;;;;MA8GjC;;;;;;MACK;;;;;;MACA;;;;;;;AAGQ,cAAwB,UAAtB,sBAAW,iBAAG,cAAK;MAAG;;;UAPnB;UAAY;UAAY;MAAxB;MAAY;MAAY;;IAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAapC;;;;;;MACA;;;;;;MACc;;;;;;YAGV;AACR,oBAAc,gBAAG,OAAO;AACxC,cAAO,sCACG,2CAEwB,mDACzB,qCACE,6BACa,sBAChB,2CACS,wBACK,4BACD,2EAEb,+BACS,oCACM,cACH,aACD,AAAM,yBACN,oDACqB,yCACnB;AACW,wBAAhB,eAAU;+CAEL,kBACL,AAAM,0BACC,AAAM,AAAU,KAAX;MAS9B;;+BA1CsB,OAAY,YAAiB;;MAA7B;MAAY;MAAiB;AAA7C;;IAAuD;;;;;;;;;;;;;;;;;;;IAgDjD;;;;;;IACC;;;;;;;kDAHU,OAAY;IAAZ;IAAY;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAShB;;;;;;IACZ;;;;;;IACc;;;;;;UAGA;AACxB,YAAO,uCACgC,8CAC3B,AAAO,AAqBd,oCArB0B,QAAa,cACjC,6CACM;AACkB,YAA3B,eAAU,AAAW,UAAD;qEAMX,AAAW,UAAD,eACd,0CACC,mCACoB,YAAjB,AAAW,UAAD,QAAU,sBAAuB,8CAC3C,gBAGJ,gCACE,AAAW,UAAD,iBACU,YAAjB,AAAW,UAAD,QAAU;IAKxC;;kDAjCuB,QAAa,eAAoB;;IAAjC;IAAa;IAAoB;AAAlD;;EAA4D;;;;;;;;;;;;;;;;;;;;;;;;;IAuCrD;;;;;;UAGa;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,sCACG,2CAEwB,mDACzB,kBACL,mBACO,AAAM,AAAU,AAAM,KAAjB,kCACH,AAAM,KAAD;IAIpB;;+CAlBoB;;;AAAd;;EAAmB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4Bb;;;;;;IACuB;;;;;;IAChB;;;;;;UAQO;AACL,wBAAuB,sBACxC,kEAEa;AAIR,YAHD,uDACW,OAAO,WACP,QAAc;;AAM/B,oBAAI,AAAiB,kEAAS;AAG3B,QAFD,AAAY,WAAD;;AA2BX,MAtBF,AAAY,WAAD,UAAiB,sBAC1B,kEAEa;AAGR,YAFQ,AAAY,qBAAT,OAAO;uFAKvB,sCACQ,kBACuB,YAArB,AAAY,gBAAT,OAAO,YAA6B,+BACjC,yBACA,uCACG,2FAEN;AAGR,YAFQ,AAAY,qBAAT,OAAO;;AAOzB,YAAO,6CACE,mBACA,6BAAc,WAAW,oEACzB;IAEX;;;QA/DO;QACA;QACA;;IAFA;IACA;IACA;AAHD;;EAIJ;;;;;;;;;;;;;;MAM8C,sDAAgB;YAAiC,6CAClE,2EACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA4DL;AACxB,YAAO,+BACE;IAaX;;;;AAlBM;;EAAa;;;;;;;;;;;;;;;;;;;;;;;;IA4BN;;;;;;IACM;;;;;;UAGO;AACxB,YAAO,2DAES,6BACP,iCACE,uBACA,oCACE,cACC,aACS,kCACT,8CAA2B,AAAY,AAAgB,gBAAzB,OAAO,kCACpC,+IAIF;IAEf;;;QAzBO;QACA;;IADA;IACA;AAFD;;EAGJ;;;;;;;;;;;;;;;iBA8BqB,MAAW;;AAChC,qBAAK,AAAK,IAAD,UAAU,KAAK,IACtB;aAAO;QAAQ,WAAQ,IAAI;;;AAC7B,YAAmB,aAAZ,AAAM,KAAD,UAAS;AAEV,yBAAe,AAAM,KAAD,WAAW,IAAI;AAajC,0BACS,AACpB,aADA,AAAa,YAAD,YAAwB,aAAb,AAAM,KAAD,WAAU,QACvB,aAAZ,AAAM,KAAD,UAAS;AAEnB,YAAO;MACH,WAAO,AAAK,IAAD,OAAO,AAAK,IAAD;MACtB,WAAuB,aAAhB,AAAM,AAAO,KAAR,cAAa,aAAa,EAAE,AAAK,IAAD;MAC5C,WAAkB,aAAX,AAAM,KAAD,SAAoB,aAAZ,AAAM,KAAD,UAAS,KAAK,AAAM,KAAD;MAC5C,WAAuB,aAAhB,AAAM,AAAO,KAAR,cAAa,aAAa,EAAE,AAAK,IAAD;MAC5C,WAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;MACvB,WAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;MACvB,WAAO,AAAK,IAAD,OAAO,AAAK,IAAD;MACtB;;IACN;;;;EAlCgC;;;;;;;;;;;AA0C9B;IACF;iBAGuB;UAAsB;AAC3C,YAAO,mBAAa,IAAI,kBAAiB,aAAa;IACxD;iBAGuB;;UAAsB;AAC3C,WAAO;MACH,UAAiB,aAAV,AAAK,IAAD,SAAmB,aAAX,AAAK,IAAD,UAAS,KAAK,AAAK,IAAD;MACzC,UAAO,AAAK,IAAD,QAAiB,aAAT,AAAK,IAAD,QAAmB,aAAZ,AAAK,IAAD,WAAU;MAC5C,UAAiB,aAAV,AAAK,IAAD,SAAoB,aAAZ,AAAK,IAAD,UAAU,KAAK,AAAK,IAAD;MAC1C,UAAO,AAAK,IAAD,OAAgB,aAAT,AAAK,IAAD,QAAmB,aAAZ,AAAK,IAAD,WAAU;MAC3C;;IACN;UAGkB,QAAa;UAAsB;IAAkB;UAI9C;AACvB,YAAO;IACT;;;AA7BM;;EAAgB","file":"bottom_app_bar_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__bottom_app_bar_demo: bottom_app_bar_demo
  };
});

//# sourceMappingURL=bottom_app_bar_demo.ddc.js.map
