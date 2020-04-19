define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const refresh_indicator = packages__flutter_web__material.src__material__refresh_indicator;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const constants = packages__flutter_web__material.src__material__constants;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const overscroll_demo = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let GlobalKeyOfRefreshIndicatorState = () => (GlobalKeyOfRefreshIndicatorState = dart.constFn(framework.GlobalKey$(refresh_indicator.RefreshIndicatorState)))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: overscroll_demo.IndicatorType.prototype,
        [_name$]: "IndicatorType.overscroll",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: overscroll_demo.IndicatorType.prototype,
        [_name$]: "IndicatorType.refresh",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], overscroll_demo.IndicatorType);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3000000
      });
    },
    get C4() {
      return C4 = dart.const({
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
        [Text_data]: "Refresh complete"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "action",
        [_Location_column]: 11,
        [_Location_line]: 51,
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
        [_Location_column]: 47,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
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
        [Text_data]: "Pull to refresh"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 56,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58837
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C18 || CT.C18
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 60,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 82,
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
        [_Location_column]: 44,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 83,
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
        [_Location_column]: 22,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
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
        [Text_data]: "Even more additional list item information appears on line three."
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isThreeLine",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 15,
        [_Location_line]: 84,
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
        [_Location_column]: 20,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/overscroll_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(overscroll_demo, "_name");
  let C0;
  let C1;
  let C2;
  overscroll_demo.IndicatorType = class IndicatorType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (overscroll_demo.IndicatorType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = overscroll_demo.IndicatorType.prototype;
  dart.addTypeTests(overscroll_demo.IndicatorType);
  dart.setLibraryUri(overscroll_demo.IndicatorType, "package:flutter_web.examples.gallery/demo/material/overscroll_demo.dart");
  dart.setFieldSignature(overscroll_demo.IndicatorType, () => ({
    __proto__: dart.getFields(overscroll_demo.IndicatorType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(overscroll_demo.IndicatorType, ['toString']);
  overscroll_demo.IndicatorType.overscroll = C0 || CT.C0;
  overscroll_demo.IndicatorType.refresh = C1 || CT.C1;
  overscroll_demo.IndicatorType.values = C2 || CT.C2;
  overscroll_demo.OverscrollDemo = class OverscrollDemo extends framework.StatefulWidget {
    createState() {
      return new overscroll_demo.OverscrollDemoState.new();
    }
  };
  (overscroll_demo.OverscrollDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    overscroll_demo.OverscrollDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = overscroll_demo.OverscrollDemo.prototype;
  dart.addTypeTests(overscroll_demo.OverscrollDemo);
  dart.setMethodSignature(overscroll_demo.OverscrollDemo, () => ({
    __proto__: dart.getMethods(overscroll_demo.OverscrollDemo.__proto__),
    createState: dart.fnType(overscroll_demo.OverscrollDemoState, [])
  }));
  dart.setLibraryUri(overscroll_demo.OverscrollDemo, "package:flutter_web.examples.gallery/demo/material/overscroll_demo.dart");
  dart.defineLazy(overscroll_demo.OverscrollDemo, {
    /*overscroll_demo.OverscrollDemo.routeName*/get routeName() {
      return "/material/overscroll";
    }
  });
  const _scaffoldKey = dart.privateName(overscroll_demo, "_scaffoldKey");
  const _refreshIndicatorKey = dart.privateName(overscroll_demo, "_refreshIndicatorKey");
  const Duration__duration = dart.privateName(core, "Duration._duration");
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
  let C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  const _handleRefresh = dart.privateName(overscroll_demo, "_handleRefresh");
  let C13;
  let C16;
  let C15;
  let C14;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C18;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C17;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C29;
  let C28;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C37;
  let C40;
  let C41;
  let C42;
  let C43;
  let C39;
  let C38;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  overscroll_demo.OverscrollDemoState = class OverscrollDemoState extends framework.State$(overscroll_demo.OverscrollDemo) {
    [_handleRefresh]() {
      let completer = CompleterOfvoid().new();
      async.Timer.new(C3 || CT.C3, dart.fn(() => {
        completer.complete();
      }, VoidToNull()));
      return completer.future.then(dart.void, dart.fn(_ => {
        let t0;
        t0 = this[_scaffoldKey].currentState;
        t0 == null ? null : t0.showSnackBar(new snack_bar.SnackBar.new({content: C4 || CT.C4, action: new snack_bar.SnackBarAction.new({label: "RETRY", onPressed: dart.fn(() => {
              this[_refreshIndicatorKey].currentState.show();
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}));
      }, voidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C13 || CT.C13, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/overscroll", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new icon_button.IconButton.new({icon: C17 || CT.C17, tooltip: "Refresh", onPressed: dart.fn(() => {
                this[_refreshIndicatorKey].currentState.show();
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), body: new refresh_indicator.RefreshIndicator.new({key: this[_refreshIndicatorKey], onRefresh: dart.bind(this, _handleRefresh), child: new scroll_view.ListView.builder({padding: constants.kMaterialListPadding, itemCount: overscroll_demo.OverscrollDemoState._items[$length], itemBuilder: dart.fn((context, index) => {
              let item = overscroll_demo.OverscrollDemoState._items[$_get](index);
              return new list_tile.ListTile.new({isThreeLine: true, leading: new circle_avatar.CircleAvatar.new({child: new text.Text.new(item, {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), title: new text.Text.new("This item represents " + dart.str(item) + ".", {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), subtitle: C37 || CT.C37, $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
            }, BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
  };
  (overscroll_demo.OverscrollDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_refreshIndicatorKey] = GlobalKeyOfRefreshIndicatorState().new();
    overscroll_demo.OverscrollDemoState.__proto__.new.call(this);
    ;
  }).prototype = overscroll_demo.OverscrollDemoState.prototype;
  dart.addTypeTests(overscroll_demo.OverscrollDemoState);
  dart.setMethodSignature(overscroll_demo.OverscrollDemoState, () => ({
    __proto__: dart.getMethods(overscroll_demo.OverscrollDemoState.__proto__),
    [_handleRefresh]: dart.fnType(async.Future$(dart.void), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(overscroll_demo.OverscrollDemoState, "package:flutter_web.examples.gallery/demo/material/overscroll_demo.dart");
  dart.setFieldSignature(overscroll_demo.OverscrollDemoState, () => ({
    __proto__: dart.getFields(overscroll_demo.OverscrollDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_refreshIndicatorKey]: dart.finalFieldType(framework.GlobalKey$(refresh_indicator.RefreshIndicatorState))
  }));
  dart.defineLazy(overscroll_demo.OverscrollDemoState, {
    /*overscroll_demo.OverscrollDemoState._items*/get _items() {
      return JSArrayOfString().of(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/overscroll_demo", {
    "package:flutter_web.examples.gallery/demo/material/overscroll_demo.dart": overscroll_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["overscroll_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUyC;;uDAApC;;;;EAAoC;;;;;;;;;;;;;;AAQF;IAAqB;;;QALhC;;AAAQ,kEAAW,GAAG;;EAAC;;;;;;;;MAE7B,wCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BL,sBAAY;AAGhC,MAFF,6BAAkC;AACZ,QAApB,AAAU,SAAD;;AAEX,YAAO,AAAU,AAAO,UAAR,wBAAmB,QAAC;;AAOtB,aANZ,AAAa;qBAAA,OAAc,gBAAa,0DAE5B,yCACG,oBACI;AAC+B,cAAxC,AAAqB,AAAa;;;IAGhD;UAG0B;AACxB,YAAO,iCACA,4BACG,uDAA8D,sBACpE,+HACA,8DAEa,sBACE;AAC+B,gBAAxC,AAAqB,AAAa;0JAGpC,iDACC,iDACM,8BACK,2CACL,2CACE,AAAO,kEACL,SAAc,SAAa;AACzB,yBAAO,AAAM,kDAAC,KAAK;AAChC,oBAAO,0CACQ,eACJ,2CAAoB,kBAAK,IAAI,4HAC/B,kBAAK,AAA6B,mCAAN,IAAI;;IAQnD;;;IApE+B,qBAAe;IACP,6BACnC;;;EAmEN;;;;;;;;;;;;;;MAlE4B,0CAAM;YAAW,uBACzC,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA","file":"overscroll_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__overscroll_demo: overscroll_demo
  };
});

//# sourceMappingURL=overscroll_demo.ddc.js.map
