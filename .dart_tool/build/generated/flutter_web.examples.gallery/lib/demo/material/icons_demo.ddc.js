define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon_theme = packages__flutter_web__animation.src__widgets__icon_theme;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const icon$ = packages__flutter_web__animation.src__widgets__icon;
  const table = packages__flutter_web__animation.src__widgets__table;
  const table$ = packages__flutter_web__animation.src__rendering__table;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icons = packages__flutter_web__material.src__material__icons;
  const colors = packages__flutter_web__material.src__material__colors;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const card = packages__flutter_web__material.src__material__card;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_theme_data = packages__flutter_web__src__animation__animation.src__widgets__icon_theme_data;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const icons_demo = Object.create(dart.library);
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $floor = dartx.floor;
  const $toString = dartx.toString;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfMaterialColor = () => (JSArrayOfMaterialColor = dart.constFn(_interceptors.JSArray$(colors.MaterialColor)))();
  let JSArrayOfTableRow = () => (JSArrayOfTableRow = dart.constFn(_interceptors.JSArray$(table.TableRow)))();
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
        [Text_data]: "Icons"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 69,
        [_Location_line]: 54,
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
        [_Location_column]: 27,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 24
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleIconButtonPress",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 48,
        [_Location_line]: 65,
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
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "handleIconButtonPress",
        [_Location_column]: 30,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 68,
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
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 63,
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
        [_Location_column]: 18,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 56,
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
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 20,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 28,
        [_Location_line]: 94,
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
        [_Location_column]: 16,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "defaultVerticalAlignment",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
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
        [_Location_column]: 18,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
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
        [_Location_column]: 16,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 115,
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
        [_Location_column]: 14,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/icons_demo.dart"
      });
    }
  });
  icons_demo.IconsDemo = class IconsDemo extends framework.StatefulWidget {
    createState() {
      return new icons_demo.IconsDemoState.new();
    }
  };
  (icons_demo.IconsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    icons_demo.IconsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icons_demo.IconsDemo.prototype;
  dart.addTypeTests(icons_demo.IconsDemo);
  dart.setMethodSignature(icons_demo.IconsDemo, () => ({
    __proto__: dart.getMethods(icons_demo.IconsDemo.__proto__),
    createState: dart.fnType(icons_demo.IconsDemoState, [])
  }));
  dart.setLibraryUri(icons_demo.IconsDemo, "package:flutter_web.examples.gallery/demo/material/icons_demo.dart");
  dart.defineLazy(icons_demo.IconsDemo, {
    /*icons_demo.IconsDemo.routeName*/get routeName() {
      return "/material/icons";
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
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C8;
  let C11;
  let C12;
  let C10;
  let C9;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C13;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C26;
  let C23;
  let C22;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  const iconColorIndex = dart.privateName(icons_demo, "IconsDemoState.iconColorIndex");
  icons_demo.IconsDemoState = class IconsDemoState extends framework.State$(icons_demo.IconsDemo) {
    get iconColorIndex() {
      return this[iconColorIndex];
    }
    set iconColorIndex(value) {
      this[iconColorIndex] = value;
    }
    get iconColor() {
      return icons_demo.IconsDemoState.iconColors[$_get](this.iconColorIndex);
    }
    handleIconButtonPress() {
      this.setState(dart.fn(() => {
        this.iconColorIndex = (dart.notNull(this.iconColorIndex) + 1)[$modulo](icons_demo.IconsDemoState.iconColors[$length]);
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C0 || CT.C0, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/icons", {$creationLocationd_0dea112b090073317d4: C1 || CT.C1})]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), body: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: this.iconColor}), child: new safe_area.SafeArea.new({top: false, bottom: false, child: new scroll_view.ListView.new({padding: C8 || CT.C8, children: JSArrayOfWidget().of([new icons_demo._IconsDemoCard.new(dart.bind(this, 'handleIconButtonPress'), icons.Icons.face, {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), C13 || CT.C13, new icons_demo._IconsDemoCard.new(dart.bind(this, 'handleIconButtonPress'), icons.Icons.battery_unknown, {$creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
  };
  (icons_demo.IconsDemoState.new = function() {
    this[iconColorIndex] = 8;
    icons_demo.IconsDemoState.__proto__.new.call(this);
    ;
  }).prototype = icons_demo.IconsDemoState.prototype;
  dart.addTypeTests(icons_demo.IconsDemoState);
  dart.setMethodSignature(icons_demo.IconsDemoState, () => ({
    __proto__: dart.getMethods(icons_demo.IconsDemoState.__proto__),
    handleIconButtonPress: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(icons_demo.IconsDemoState, () => ({
    __proto__: dart.getGetters(icons_demo.IconsDemoState.__proto__),
    iconColor: ui.Color
  }));
  dart.setLibraryUri(icons_demo.IconsDemoState, "package:flutter_web.examples.gallery/demo/material/icons_demo.dart");
  dart.setFieldSignature(icons_demo.IconsDemoState, () => ({
    __proto__: dart.getFields(icons_demo.IconsDemoState.__proto__),
    iconColorIndex: dart.fieldType(core.int)
  }));
  dart.defineLazy(icons_demo.IconsDemoState, {
    /*icons_demo.IconsDemoState.iconColors*/get iconColors() {
      return JSArrayOfMaterialColor().of([colors.Colors.red, colors.Colors.pink, colors.Colors.purple, colors.Colors.deepPurple, colors.Colors.indigo, colors.Colors.blue, colors.Colors.lightBlue, colors.Colors.cyan, colors.Colors.teal, colors.Colors.green, colors.Colors.lightGreen, colors.Colors.lime, colors.Colors.yellow, colors.Colors.amber, colors.Colors.orange, colors.Colors.deepOrange, colors.Colors.brown, colors.Colors.grey, colors.Colors.blueGrey]);
    }
  });
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C42;
  let C43;
  let C39;
  let C38;
  const _buildIconButton = dart.privateName(icons_demo, "_buildIconButton");
  let C44;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
  const _centeredText = dart.privateName(icons_demo, "_centeredText");
  const _buildIconRow = dart.privateName(icons_demo, "_buildIconRow");
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
  let C67;
  let C66;
  let C65;
  const handleIconButtonPress$ = dart.privateName(icons_demo, "_IconsDemoCard.handleIconButtonPress");
  const icon$0 = dart.privateName(icons_demo, "_IconsDemoCard.icon");
  icons_demo._IconsDemoCard = class _IconsDemoCard extends framework.StatelessWidget {
    get handleIconButtonPress() {
      return this[handleIconButtonPress$];
    }
    set handleIconButtonPress(value) {
      super.handleIconButtonPress = value;
    }
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    [_buildIconButton](iconSize, icon, enabled) {
      return new icon_button.IconButton.new({icon: new icon$.Icon.new(icon, {$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), iconSize: iconSize, tooltip: (dart.test(enabled) ? "Enabled" : "Disabled") + " icon button", onPressed: dart.test(enabled) ? this.handleIconButtonPress : null, $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
    [_centeredText](label) {
      return new basic.Padding.new({padding: C44 || CT.C44, child: new text.Text.new(label, {textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49});
    }
    [_buildIconRow](size) {
      return new table.TableRow.new({children: JSArrayOfWidget().of([this[_centeredText](size[$floor]()[$toString]()), this[_buildIconButton](size, this.icon, true), this[_buildIconButton](size, this.icon, false)])});
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let textStyle = theme.textTheme.subhead.copyWith({color: theme.textTheme.caption.color});
      return new card.Card.new({child: new text.DefaultTextStyle.new({style: textStyle, child: new basic.Semantics.new({explicitChildNodes: true, child: new table.Table.new({defaultVerticalAlignment: table$.TableCellVerticalAlignment.middle, children: JSArrayOfTableRow().of([new table.TableRow.new({children: JSArrayOfWidget().of([this[_centeredText]("Size"), this[_centeredText]("Enabled"), this[_centeredText]("Disabled")])}), this[_buildIconRow](18.0), this[_buildIconRow](24.0), this[_buildIconRow](36.0), this[_buildIconRow](48.0)]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
    }
  };
  (icons_demo._IconsDemoCard.new = function(handleIconButtonPress, icon, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[handleIconButtonPress$] = handleIconButtonPress;
    this[icon$0] = icon;
    icons_demo._IconsDemoCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icons_demo._IconsDemoCard.prototype;
  dart.addTypeTests(icons_demo._IconsDemoCard);
  dart.setMethodSignature(icons_demo._IconsDemoCard, () => ({
    __proto__: dart.getMethods(icons_demo._IconsDemoCard.__proto__),
    [_buildIconButton]: dart.fnType(framework.Widget, [core.double, icon_data.IconData, core.bool]),
    [_centeredText]: dart.fnType(framework.Widget, [core.String]),
    [_buildIconRow]: dart.fnType(table.TableRow, [core.double]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(icons_demo._IconsDemoCard, "package:flutter_web.examples.gallery/demo/material/icons_demo.dart");
  dart.setFieldSignature(icons_demo._IconsDemoCard, () => ({
    __proto__: dart.getFields(icons_demo._IconsDemoCard.__proto__),
    handleIconButtonPress: dart.finalFieldType(dart.fnType(dart.void, [])),
    icon: dart.finalFieldType(icon_data.IconData)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/icons_demo", {
    "package:flutter_web.examples.gallery/demo/material/icons_demo.dart": icons_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icons_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYkC;IAAgB;;;;;;EAClD;;;;;;;;MAJsB,8BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BzB;;;;;;;AAEmB,YAAA,AAAU,6CAAC;IAAe;;AAK7C,MAFF,cAAS;AACkD,QAAzD,sBAAsC,CAAL,aAAf,uBAAiB,YAAK,AAAW;;IAEvD;UAG0B;AACxB,YAAO,oCACG,qDAEW,sBAAC,uLAEd,oCACE,8CAAqB,yBACpB,iCACA,eACG,cACD,8DAEa,sBAChB,4CACI,gCAA6B,yFAEjC,4CAAe,gCACL;IAMtB;;;IAnCI,uBAAiB;;;EAoCvB;;;;;;;;;;;;;;;;;MA1DmC,oCAAU;YAAkB,8BACpD,mBACA,oBACA,sBACA,0BACA,sBACA,oBACA,yBACA,oBACA,oBACA,qBACA,0BACA,oBACA,sBACA,qBACA,sBACA,0BACA,qBACA,oBACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4CU;;;;;;IACJ;;;;;;uBAEgB,UAAmB,MAAW;AAC3D,YAAO,uCACG,mBAAK,IAAI,sEACL,QAAQ,WACwC,WAA9C,OAAO,IAAG,YAAY,cAAW,qCAClC,OAAO,IAAG,6BAAwB;IACnD;oBAE4B;AAAU,mEAGzB,kBAAK,KAAK,cAAuB;IACzC;oBAEyB;AAC5B,YAAO,mCACa,sBAChB,oBAAc,AAAK,AAAQ,IAAT,0BAClB,uBAAiB,IAAI,EAAE,WAAM,OAC7B,uBAAiB,IAAI,EAAE,WAAM;IAGnC;UAG0B;AACR,kBAAc,gBAAG,OAAO;AACxB,sBACZ,AAAM,AAAU,AAAQ,KAAnB,oCAAmC,AAAM,AAAU,AAAQ,KAAnB;AACjD,YAAO,2BACE,sCACE,SAAS,SACT,6CACe,aACb,+CACgD,oDACjC,wBAClB,kCAA2B,sBACzB,oBAAc,SACd,oBAAc,YACd,oBAAc,iBAEhB,oBAAc,OACd,oBAAc,OACd,oBAAc,OACd,oBAAc;IAM1B;;4CAxD0B,uBAA4B;;IAA5B;IAA4B;AAAhD;;EAAqD","file":"icons_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__icons_demo: icons_demo
  };
});

//# sourceMappingURL=icons_demo.ddc.js.map
