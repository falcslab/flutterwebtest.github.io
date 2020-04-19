define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const card = packages__flutter_web__material.src__material__card;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const theme = packages__flutter_web__material.src__material__theme;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const nested_scroll_view = packages__flutter_web__animation.src__widgets__nested_scroll_view;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const page_storage = packages__flutter_web__animation.src__widgets__page_storage;
  const sliver = packages__flutter_web__animation.src__widgets__sliver;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const tabs_demo = Object.create(dart.library);
  const $_get = dartx._get;
  const $runtimeType = dartx.runtimeType;
  const $length = dartx.length;
  const $keys = dartx.keys;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let _PageToTab = () => (_PageToTab = dart.constFn(dart.fnType(tabs.Tab, [tabs_demo._Page])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let BuildContextAndboolToListOfWidget = () => (BuildContextAndboolToListOfWidget = dart.constFn(dart.fnType(ListOfWidget(), [framework.BuildContext, core.bool])))();
  let PageStorageKeyOf_Page = () => (PageStorageKeyOf_Page = dart.constFn(page_storage.PageStorageKey$(tabs_demo._Page)))();
  let BuildContextAndintToPadding = () => (BuildContextAndintToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext, core.int])))();
  let BuildContextToCustomScrollView = () => (BuildContextToCustomScrollView = dart.constFn(dart.fnType(scroll_view.CustomScrollView, [framework.BuildContext])))();
  let _PageToSafeArea = () => (_PageToSafeArea = dart.constFn(dart.fnType(safe_area.SafeArea, [tabs_demo._Page])))();
  let JSArrayOf_CardData = () => (JSArrayOf_CardData = dart.constFn(_interceptors.JSArray$(tabs_demo._CardData)))();
  let ListOf_CardData = () => (ListOf_CardData = dart.constFn(core.List$(tabs_demo._CardData)))();
  let LinkedMapOf_Page$ListOf_CardData = () => (LinkedMapOf_Page$ListOf_CardData = dart.constFn(_js_helper.LinkedMap$(tabs_demo._Page, ListOf_CardData())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 115,
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
        [_Location_column]: 42,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 115,
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
        [_Location_column]: 22,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 51,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 125,
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
        [_Location_column]: 13,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 108,
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
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 106,
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
        [_Location_column]: 12,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
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
        [Text_data]: "Tabs and scrolling"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 67,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 45,
        [_Location_line]: 157,
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
        [_Location_column]: 41,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 19,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "forceElevated",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 16
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "page",
        [_Location_column]: 37,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 188,
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
        [_Location_column]: 40,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemExtent",
        [_Location_column]: 29,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 29,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 27,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 23,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 23,
        [_Location_line]: 173,
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
        [_Location_column]: 28,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 170,
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
        [_Location_column]: 24,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 165,
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
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerSliverBuilder",
        [_Location_column]: 11,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 164,
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
        [_Location_column]: 15,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 145,
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
        [_Location_column]: 14,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "length",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 144,
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
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/tabs_demo.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/flatwear.png",
        [title$]: "Flatwear"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/table.png",
        [title$]: "Pine Table"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/cup.png",
        [title$]: "Blue Cup"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/teaset.png",
        [title$]: "Tea Set"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/deskset.png",
        [title$]: "Desk Set"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/napkins.png",
        [title$]: "Blue Linen Napkins"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/planters.png",
        [title$]: "Planters"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/kitchen_quattro.png",
        [title$]: "Kitchen Quattro"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/platter.png",
        [title$]: "Platter"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/dress.png",
        [title$]: "Cloud-White Dress"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/scarf.png",
        [title$]: "Ginger Scarf"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: tabs_demo._CardData.prototype,
        [imageAssetPackage$]: "flutter_gallery_assets",
        [imageAsset$]: "products/sweats.png",
        [title$]: "Blush Sweats"
      });
    }
  });
  tabs_demo._Page = class _Page extends core.Object {
    get id() {
      return this.label[$_get](0);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(\"" + dart.str(this.label) + "\")";
    }
  };
  (tabs_demo._Page.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    this.label = label;
    ;
  }).prototype = tabs_demo._Page.prototype;
  dart.addTypeTests(tabs_demo._Page);
  dart.setGetterSignature(tabs_demo._Page, () => ({
    __proto__: dart.getGetters(tabs_demo._Page.__proto__),
    id: core.String
  }));
  dart.setLibraryUri(tabs_demo._Page, "package:flutter_web.examples.gallery/demo/material/tabs_demo.dart");
  dart.setFieldSignature(tabs_demo._Page, () => ({
    __proto__: dart.getFields(tabs_demo._Page.__proto__),
    label: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(tabs_demo._Page, ['toString']);
  const title$ = dart.privateName(tabs_demo, "_CardData.title");
  const imageAsset$ = dart.privateName(tabs_demo, "_CardData.imageAsset");
  const imageAssetPackage$ = dart.privateName(tabs_demo, "_CardData.imageAssetPackage");
  tabs_demo._CardData = class _CardData extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get imageAsset() {
      return this[imageAsset$];
    }
    set imageAsset(value) {
      super.imageAsset = value;
    }
    get imageAssetPackage() {
      return this[imageAssetPackage$];
    }
    set imageAssetPackage(value) {
      super.imageAssetPackage = value;
    }
  };
  (tabs_demo._CardData.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let imageAsset = opts && 'imageAsset' in opts ? opts.imageAsset : null;
    let imageAssetPackage = opts && 'imageAssetPackage' in opts ? opts.imageAssetPackage : null;
    this[title$] = title;
    this[imageAsset$] = imageAsset;
    this[imageAssetPackage$] = imageAssetPackage;
    ;
  }).prototype = tabs_demo._CardData.prototype;
  dart.addTypeTests(tabs_demo._CardData);
  dart.setLibraryUri(tabs_demo._CardData, "package:flutter_web.examples.gallery/demo/material/tabs_demo.dart");
  dart.setFieldSignature(tabs_demo._CardData, () => ({
    __proto__: dart.getFields(tabs_demo._CardData.__proto__),
    title: dart.finalFieldType(core.String),
    imageAsset: dart.finalFieldType(core.String),
    imageAssetPackage: dart.finalFieldType(core.String)
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
  let C8;
  let C7;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C36;
  let C35;
  const page$ = dart.privateName(tabs_demo, "_CardDataItem.page");
  const data$ = dart.privateName(tabs_demo, "_CardDataItem.data");
  tabs_demo._CardDataItem = class _CardDataItem extends framework.StatelessWidget {
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    build(context) {
      return new card.Card.new({child: new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Align.new({alignment: this.page.id === "H" ? alignment.Alignment.centerLeft : alignment.Alignment.centerRight, child: new circle_avatar.CircleAvatar.new({child: new text.Text.new(dart.str(this.page.id), {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({width: 144.0, height: 144.0, child: new text.Text.new("image", {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.Center.new({child: new text.Text.new(this.data.title, {style: theme.Theme.of(context).textTheme.title, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
  };
  (tabs_demo._CardDataItem.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[page$] = page;
    this[data$] = data;
    tabs_demo._CardDataItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tabs_demo._CardDataItem.prototype;
  dart.addTypeTests(tabs_demo._CardDataItem);
  dart.setMethodSignature(tabs_demo._CardDataItem, () => ({
    __proto__: dart.getMethods(tabs_demo._CardDataItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tabs_demo._CardDataItem, "package:flutter_web.examples.gallery/demo/material/tabs_demo.dart");
  dart.setFieldSignature(tabs_demo._CardDataItem, () => ({
    __proto__: dart.getFields(tabs_demo._CardDataItem.__proto__),
    page: dart.finalFieldType(tabs_demo._Page),
    data: dart.finalFieldType(tabs_demo._CardData)
  }));
  dart.defineLazy(tabs_demo._CardDataItem, {
    /*tabs_demo._CardDataItem.height*/get height() {
      return 272;
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
  let C38;
  let C41;
  let C40;
  let C39;
  let C44;
  let C43;
  let C42;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C49;
  let C48;
  let C56;
  let C57;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
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
  let C97;
  let C96;
  tabs_demo.TabsDemo = class TabsDemo extends framework.StatelessWidget {
    build(context) {
      return new tab_controller.DefaultTabController.new({length: tabs_demo._allPages[$length], child: new scaffold.Scaffold.new({body: new nested_scroll_view.NestedScrollView.new({headerSliverBuilder: dart.fn((context, innerBoxIsScrolled) => JSArrayOfWidget().of([new app_bar.SliverAppBar.new({title: C38 || CT.C38, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/tabs", {$creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), pinned: true, expandedHeight: 150.0, forceElevated: innerBoxIsScrolled, bottom: new tabs.TabBar.new({tabs: tabs_demo._allPages[$keys][$map](framework.Widget, dart.fn(page => new tabs.Tab.new({text: page.label, $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), _PageToTab()))[$toList](), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), BuildContextAndboolToListOfWidget()), body: new tabs.TabBarView.new({children: tabs_demo._allPages[$keys][$map](framework.Widget, dart.fn(page => new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Builder.new({builder: dart.fn(context => new scroll_view.CustomScrollView.new({key: new (PageStorageKeyOf_Page()).new(page), slivers: JSArrayOfWidget().of([new basic.SliverPadding.new({padding: C56 || CT.C56, sliver: new sliver.SliverFixedExtentList.new({itemExtent: 272, delegate: new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => {
                            let data = tabs_demo._allPages[$_get](page)[$_get](index);
                            return new basic.Padding.new({padding: C57 || CT.C57, child: new tabs_demo._CardDataItem.new({page: page, data: data, $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
                          }, BuildContextAndintToPadding()), {childCount: tabs_demo._allPages[$_get](page)[$length]}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70})]), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), BuildContextToCustomScrollView()), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), _PageToSafeArea()))[$toList](), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
  };
  (tabs_demo.TabsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    tabs_demo.TabsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tabs_demo.TabsDemo.prototype;
  dart.addTypeTests(tabs_demo.TabsDemo);
  dart.setMethodSignature(tabs_demo.TabsDemo, () => ({
    __proto__: dart.getMethods(tabs_demo.TabsDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tabs_demo.TabsDemo, "package:flutter_web.examples.gallery/demo/material/tabs_demo.dart");
  dart.defineLazy(tabs_demo.TabsDemo, {
    /*tabs_demo.TabsDemo.routeName*/get routeName() {
      return "/material/tabs";
    }
  });
  let C100;
  let C101;
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
  dart.defineLazy(tabs_demo, {
    /*tabs_demo._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return "flutter_gallery_assets";
    },
    /*tabs_demo._allPages*/get _allPages() {
      return new (LinkedMapOf_Page$ListOf_CardData()).from([new tabs_demo._Page.new({label: "HOME"}), JSArrayOf_CardData().of([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108]), new tabs_demo._Page.new({label: "APPAREL"}), JSArrayOf_CardData().of([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111])]);
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/tabs_demo", {
    "package:flutter_web.examples.gallery/demo/material/tabs_demo.dart": tabs_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tabs_demo.dart"],"names":[],"mappings":"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","file":"tabs_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__tabs_demo: tabs_demo
  };
});

//# sourceMappingURL=tabs_demo.ddc.js.map
