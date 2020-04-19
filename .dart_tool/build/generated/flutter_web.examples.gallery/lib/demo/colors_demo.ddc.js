define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter_web__material.src__material__colors;
  const theme = packages__flutter_web__material.src__material__theme;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const ui = packages__flutter_web_ui__ui.ui;
  const colors_demo = Object.create(dart.library);
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $toUpperCase = dartx.toUpperCase;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToDefaultTextStyle = () => (intToDefaultTextStyle = dart.constFn(dart.fnType(text.DefaultTextStyle, [core.int])))();
  let PaletteToTab = () => (PaletteToTab = dart.constFn(dart.fnType(tabs.Tab, [colors_demo.Palette])))();
  let PaletteToPaletteTabView = () => (PaletteToPaletteTabView = dart.constFn(dart.fnType(colors_demo.PaletteTabView, [colors_demo.Palette])))();
  let JSArrayOfPalette = () => (JSArrayOfPalette = dart.constFn(_interceptors.JSArray$(colors_demo.Palette)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 16
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 132,
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
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 133,
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
        [_Location_column]: 15,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 121,
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
        [_Location_column]: 12,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 26,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 40,
        [_Location_line]: 175,
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
        [_Location_column]: 16,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 175,
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
        [_Location_column]: 14,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 25,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 39,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "prefix",
        [_Location_column]: 68,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.constList([50, 100, 200, 300, 400, 500, 600, 700, 800, 900], core.int);
    },
    get C49() {
      return C49 = dart.constList([100, 200, 400, 700], core.int);
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
        [Text_data]: "Colors"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 54,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 13,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 207,
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
        [_Location_column]: 17,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colors",
        [_Location_column]: 35,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 214,
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
        [_Location_column]: 14,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 7,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 203,
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
        [_Location_column]: 12,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart"
      });
    }
  });
  const name$ = dart.privateName(colors_demo, "Palette.name");
  const primary$ = dart.privateName(colors_demo, "Palette.primary");
  const accent$ = dart.privateName(colors_demo, "Palette.accent");
  const threshold$ = dart.privateName(colors_demo, "Palette.threshold");
  colors_demo.Palette = class Palette extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get accent() {
      return this[accent$];
    }
    set accent(value) {
      super.accent = value;
    }
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    get isValid() {
      return this.name != null && this.primary != null && this.threshold != null;
    }
  };
  (colors_demo.Palette.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let accent = opts && 'accent' in opts ? opts.accent : null;
    let threshold = opts && 'threshold' in opts ? opts.threshold : 900;
    this[name$] = name;
    this[primary$] = primary;
    this[accent$] = accent;
    this[threshold$] = threshold;
    ;
  }).prototype = colors_demo.Palette.prototype;
  dart.addTypeTests(colors_demo.Palette);
  dart.setGetterSignature(colors_demo.Palette, () => ({
    __proto__: dart.getGetters(colors_demo.Palette.__proto__),
    isValid: core.bool
  }));
  dart.setLibraryUri(colors_demo.Palette, "package:flutter_web.examples.gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.Palette, () => ({
    __proto__: dart.getFields(colors_demo.Palette.__proto__),
    name: dart.finalFieldType(core.String),
    primary: dart.finalFieldType(colors.MaterialColor),
    accent: dart.finalFieldType(colors.MaterialAccentColor),
    threshold: dart.finalFieldType(core.int)
  }));
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
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
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C16;
  let C13;
  let C12;
  let C19;
  let C20;
  let C21;
  let C22;
  let C18;
  let C17;
  let C25;
  let C26;
  let C24;
  let C23;
  const index$ = dart.privateName(colors_demo, "ColorItem.index");
  const color$ = dart.privateName(colors_demo, "ColorItem.color");
  const prefix$ = dart.privateName(colors_demo, "ColorItem.prefix");
  colors_demo.ColorItem = class ColorItem extends framework.StatelessWidget {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    colorString() {
      return "#" + this.color.value[$toRadixString](16)[$padLeft](8, "0")[$toUpperCase]();
    }
    build(context) {
      return new basic.Semantics.new({container: true, child: new container.Container.new({height: 48, padding: C0 || CT.C0, color: this.color, child: new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(dart.str(this.prefix) + dart.str(this.index), {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new text.Text.new(this.colorString(), {$creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (colors_demo.ColorItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let prefix = opts && 'prefix' in opts ? opts.prefix : "";
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[index$] = index;
    this[color$] = color;
    this[prefix$] = prefix;
    if (!(index != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart", 105, 16, "index != null");
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart", 106, 16, "color != null");
    if (!(prefix != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart", 107, 16, "prefix != null");
    colors_demo.ColorItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.ColorItem.prototype;
  dart.addTypeTests(colors_demo.ColorItem);
  dart.setMethodSignature(colors_demo.ColorItem, () => ({
    __proto__: dart.getMethods(colors_demo.ColorItem.__proto__),
    colorString: dart.fnType(core.String, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.ColorItem, "package:flutter_web.examples.gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.ColorItem, () => ({
    __proto__: dart.getFields(colors_demo.ColorItem.__proto__),
    index: dart.finalFieldType(core.int),
    color: dart.finalFieldType(ui.Color),
    prefix: dart.finalFieldType(core.String)
  }));
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  const colors$ = dart.privateName(colors_demo, "PaletteTabView.colors");
  let C48;
  let C49;
  colors_demo.PaletteTabView = class PaletteTabView extends framework.StatelessWidget {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    build(context) {
      let textTheme = theme.Theme.of(context).textTheme;
      let whiteTextStyle = textTheme.body1.copyWith({color: colors.Colors.white});
      let blackTextStyle = textTheme.body1.copyWith({color: colors.Colors.black});
      let colorItems = colors_demo.PaletteTabView.primaryKeys[$map](framework.Widget, dart.fn(index => new text.DefaultTextStyle.new({style: dart.notNull(index) > dart.notNull(this.colors.threshold) ? whiteTextStyle : blackTextStyle, child: new colors_demo.ColorItem.new({index: index, color: this.colors.primary._get(index), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), intToDefaultTextStyle()))[$toList]();
      if (this.colors.accent != null) {
        colorItems[$addAll](colors_demo.PaletteTabView.accentKeys[$map](framework.Widget, dart.fn(index => new text.DefaultTextStyle.new({style: dart.notNull(index) > dart.notNull(this.colors.threshold) ? whiteTextStyle : blackTextStyle, child: new colors_demo.ColorItem.new({index: index, color: this.colors.accent._get(index), prefix: "A", $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), intToDefaultTextStyle()))[$toList]());
      }
      return new scroll_view.ListView.new({itemExtent: 48, children: colorItems, $creationLocationd_0dea112b090073317d4: C44 || CT.C44});
    }
  };
  (colors_demo.PaletteTabView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colors$] = colors;
    if (!(colors != null && dart.test(colors.isValid))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/colors_demo.dart", 146, 16, "colors != null && colors.isValid");
    colors_demo.PaletteTabView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.PaletteTabView.prototype;
  dart.addTypeTests(colors_demo.PaletteTabView);
  dart.setMethodSignature(colors_demo.PaletteTabView, () => ({
    __proto__: dart.getMethods(colors_demo.PaletteTabView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.PaletteTabView, "package:flutter_web.examples.gallery/demo/colors_demo.dart");
  dart.setFieldSignature(colors_demo.PaletteTabView, () => ({
    __proto__: dart.getFields(colors_demo.PaletteTabView.__proto__),
    colors: dart.finalFieldType(colors_demo.Palette)
  }));
  dart.defineLazy(colors_demo.PaletteTabView, {
    /*colors_demo.PaletteTabView.primaryKeys*/get primaryKeys() {
      return C48 || CT.C48;
    },
    /*colors_demo.PaletteTabView.accentKeys*/get accentKeys() {
      return C49 || CT.C49;
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
  let C50;
  let C53;
  let C52;
  let C51;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C61;
  let C62;
  let C59;
  let C58;
  let C65;
  let C64;
  let C63;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C74;
  let C73;
  colors_demo.ColorsDemo = class ColorsDemo extends framework.StatelessWidget {
    build(context) {
      return new tab_controller.DefaultTabController.new({length: colors_demo.allPalettes[$length], child: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({elevation: 0.0, title: C50 || CT.C50, bottom: new tabs.TabBar.new({isScrollable: true, tabs: colors_demo.allPalettes[$map](framework.Widget, dart.fn(swatch => new tabs.Tab.new({text: swatch.name, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), PaletteToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), body: new tabs.TabBarView.new({children: colors_demo.allPalettes[$map](framework.Widget, dart.fn(colors => new colors_demo.PaletteTabView.new({colors: colors, $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), PaletteToPaletteTabView()))[$toList](), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73});
    }
  };
  (colors_demo.ColorsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    colors_demo.ColorsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colors_demo.ColorsDemo.prototype;
  dart.addTypeTests(colors_demo.ColorsDemo);
  dart.setMethodSignature(colors_demo.ColorsDemo, () => ({
    __proto__: dart.getMethods(colors_demo.ColorsDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(colors_demo.ColorsDemo, "package:flutter_web.examples.gallery/demo/colors_demo.dart");
  dart.defineLazy(colors_demo.ColorsDemo, {
    /*colors_demo.ColorsDemo.routeName*/get routeName() {
      return "/colors";
    }
  });
  dart.defineLazy(colors_demo, {
    /*colors_demo.kColorItemHeight*/get kColorItemHeight() {
      return 48;
    },
    /*colors_demo.allPalettes*/get allPalettes() {
      return JSArrayOfPalette().of([new colors_demo.Palette.new({name: "RED", primary: colors.Colors.red, accent: colors.Colors.redAccent, threshold: 300}), new colors_demo.Palette.new({name: "PINK", primary: colors.Colors.pink, accent: colors.Colors.pinkAccent, threshold: 200}), new colors_demo.Palette.new({name: "PURPLE", primary: colors.Colors.purple, accent: colors.Colors.purpleAccent, threshold: 200}), new colors_demo.Palette.new({name: "DEEP PURPLE", primary: colors.Colors.deepPurple, accent: colors.Colors.deepPurpleAccent, threshold: 200}), new colors_demo.Palette.new({name: "INDIGO", primary: colors.Colors.indigo, accent: colors.Colors.indigoAccent, threshold: 200}), new colors_demo.Palette.new({name: "BLUE", primary: colors.Colors.blue, accent: colors.Colors.blueAccent, threshold: 400}), new colors_demo.Palette.new({name: "LIGHT BLUE", primary: colors.Colors.lightBlue, accent: colors.Colors.lightBlueAccent, threshold: 500}), new colors_demo.Palette.new({name: "CYAN", primary: colors.Colors.cyan, accent: colors.Colors.cyanAccent, threshold: 600}), new colors_demo.Palette.new({name: "TEAL", primary: colors.Colors.teal, accent: colors.Colors.tealAccent, threshold: 400}), new colors_demo.Palette.new({name: "GREEN", primary: colors.Colors.green, accent: colors.Colors.greenAccent, threshold: 500}), new colors_demo.Palette.new({name: "LIGHT GREEN", primary: colors.Colors.lightGreen, accent: colors.Colors.lightGreenAccent, threshold: 600}), new colors_demo.Palette.new({name: "LIME", primary: colors.Colors.lime, accent: colors.Colors.limeAccent, threshold: 800}), new colors_demo.Palette.new({name: "YELLOW", primary: colors.Colors.yellow, accent: colors.Colors.yellowAccent}), new colors_demo.Palette.new({name: "AMBER", primary: colors.Colors.amber, accent: colors.Colors.amberAccent}), new colors_demo.Palette.new({name: "ORANGE", primary: colors.Colors.orange, accent: colors.Colors.orangeAccent, threshold: 700}), new colors_demo.Palette.new({name: "DEEP ORANGE", primary: colors.Colors.deepOrange, accent: colors.Colors.deepOrangeAccent, threshold: 400}), new colors_demo.Palette.new({name: "BROWN", primary: colors.Colors.brown, threshold: 200}), new colors_demo.Palette.new({name: "GREY", primary: colors.Colors.grey, threshold: 500}), new colors_demo.Palette.new({name: "BLUE GREY", primary: colors.Colors.blueGrey, threshold: 500})]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/colors_demo", {
    "package:flutter_web.examples.gallery/demo/colors_demo.dart": colors_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["colors_demo.dart"],"names":[],"mappings":"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","file":"colors_demo.ddc.js"}');
  // Exports:
  return {
    demo__colors_demo: colors_demo
  };
});

//# sourceMappingURL=colors_demo.ddc.js.map
