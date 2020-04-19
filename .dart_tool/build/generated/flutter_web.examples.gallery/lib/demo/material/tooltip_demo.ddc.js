define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const tooltip = packages__flutter_web__material.src__material__tooltip;
  const icons = packages__flutter_web__material.src__material__icons;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const tooltip_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let WidgetToPadding = () => (WidgetToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.Widget])))();
  let BuildContextToSafeArea = () => (BuildContextToSafeArea = dart.constFn(dart.fnType(safe_area.SafeArea, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
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
        [Text_data]: "Tooltips"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 61,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 32,
        [_Location_line]: 31,
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
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 33,
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
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 25,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 37,
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
        [_Location_column]: 28,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "message",
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 36,
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
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 32,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 32,
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
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57520
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C33 || CT.C33
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C36() {
      return C36 = dart.const({
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
        [Text_data]: "That was an ordinary tap."
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C35 || CT.C35,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C36 || CT.C36
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 54,
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
        [_Location_column]: 22,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 30,
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
        [_Location_column]: 20,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 23,
        [_Location_line]: 25,
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
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tooltip_demo.dart"
      });
    }
  });
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
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C33;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C32;
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C35;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
  let C36;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C34;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C38;
  let C37;
  let C46;
  let C45;
  let C44;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C47;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C59;
  let C56;
  let C55;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  tooltip_demo.TooltipDemo = class TooltipDemo extends framework.StatelessWidget {
    build(context) {
      let theme = theme$.Theme.of(context);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C0 || CT.C0, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/tooltips", {$creationLocationd_0dea112b090073317d4: C1 || CT.C1})]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), body: new basic.Builder.new({builder: dart.fn(context => new safe_area.SafeArea.new({top: false, bottom: false, child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new text.Text.new(tooltip_demo._introText, {style: theme.textTheme.subhead, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("Long press the ", {style: theme.textTheme.subhead, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new tooltip.Tooltip.new({message: "call icon", child: new icon.Icon.new(icons.Icons.call, {size: 18.0, color: theme.iconTheme.color, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new text.Text.new(" icon.", {style: theme.textTheme.subhead, $creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new basic.Center.new({child: new icon_button.IconButton.new({iconSize: 48.0, icon: C32 || CT.C32, color: theme.iconTheme.color, tooltip: "Place a phone call", onPressed: dart.fn(() => {
                      scaffold.Scaffold.of(context).showSnackBar(C34 || CT.C34);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})])[$map](framework.Widget, dart.fn(widget => new basic.Padding.new({padding: C47 || CT.C47, child: widget, $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), WidgetToPadding()))[$toList](), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), BuildContextToSafeArea()), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63});
    }
  };
  (tooltip_demo.TooltipDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    tooltip_demo.TooltipDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tooltip_demo.TooltipDemo.prototype;
  dart.addTypeTests(tooltip_demo.TooltipDemo);
  dart.setMethodSignature(tooltip_demo.TooltipDemo, () => ({
    __proto__: dart.getMethods(tooltip_demo.TooltipDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tooltip_demo.TooltipDemo, "package:flutter_web.examples.gallery/demo/material/tooltip_demo.dart");
  dart.defineLazy(tooltip_demo.TooltipDemo, {
    /*tooltip_demo.TooltipDemo.routeName*/get routeName() {
      return "/material/tooltips";
    }
  });
  dart.defineLazy(tooltip_demo, {
    /*tooltip_demo._introText*/get _introText() {
      return "Tooltips are short identifying messages that briefly appear in response to a long press. Tooltip messages are also used by services that make Flutter apps accessible, like screen readers.";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/tooltip_demo", {
    "package:flutter_web.examples.gallery/demo/material/tooltip_demo.dart": tooltip_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAiB4B;AACR,kBAAc,gBAAG,OAAO;AACxC,YAAO,oCACK,qDAEW,sBAAC,0LAEd,gCAAiB,QAAc,WAC5B,iCACA,eACG,cACD,wCACe,AAoBpB,AAKC,sBAxBD,kBAAK,iCAAmB,AAAM,AAAU,KAAX,2EAC7B,6BAAsB,sBACpB,kBAAK,2BAA0B,AAAM,AAAU,KAAX,6EACpC,kCACa,oBACF,kBAAW,yBACR,aAAa,AAAM,AAAU,KAAX,oIAChC,kBAAK,kBAAiB,AAAM,AAAU,KAAX,wIAE7B,6BACW,0CACO,kCAEH,AAAM,AAAU,KAAX,2BACH,iCACE;AAEuC,sBADvC,AAAY,qBAAT,OAAO;iLAGjB,QAAQ,UACb,sDAGI,MAAM;IAI7B;;;;;;EACF;;;;;;;;MA5CsB,kCAAS;;;;;MANlB,uBAAU","file":"tooltip_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__tooltip_demo: tooltip_demo
  };
});

//# sourceMappingURL=tooltip_demo.ddc.js.map
