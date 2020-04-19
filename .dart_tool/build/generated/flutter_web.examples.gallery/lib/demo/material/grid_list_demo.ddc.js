define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/vector_math/vector_math_64', 'packages/flutter_web/material', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__vector_math__vector_math_64, packages__flutter_web__material, packages__flutter_web__src__foundation__assertions, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const image$ = packages__flutter_web__animation.src__widgets__image;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const heroes = packages__flutter_web__animation.src__widgets__heroes;
  const icon$ = packages__flutter_web__animation.src__widgets__icon;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const scale = packages__flutter_web__src__animation__animation.src__gestures__scale;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const ui = packages__flutter_web_ui__ui.ui;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const page = packages__flutter_web__material.src__material__page;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icons = packages__flutter_web__material.src__material__icons;
  const grid_tile = packages__flutter_web__material.src__material__grid_tile;
  const grid_tile_bar = packages__flutter_web__material.src__material__grid_tile_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const grid_list_demo = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let MaterialPageRouteOfvoid = () => (MaterialPageRouteOfvoid = dart.constFn(page.MaterialPageRoute$(dart.void)))();
  let BuildContextToScaffold = () => (BuildContextToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let JSArrayOfPhoto = () => (JSArrayOfPhoto = dart.constFn(_interceptors.JSArray$(grid_list_demo.Photo)))();
  let PopupMenuButtonOfGridDemoTileStyle = () => (PopupMenuButtonOfGridDemoTileStyle = dart.constFn(popup_menu.PopupMenuButton$(grid_list_demo.GridDemoTileStyle)))();
  let PopupMenuItemOfGridDemoTileStyle = () => (PopupMenuItemOfGridDemoTileStyle = dart.constFn(popup_menu.PopupMenuItem$(grid_list_demo.GridDemoTileStyle)))();
  let JSArrayOfPopupMenuItemOfGridDemoTileStyle = () => (JSArrayOfPopupMenuItemOfGridDemoTileStyle = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfGridDemoTileStyle())))();
  let ListOfPopupMenuItemOfGridDemoTileStyle = () => (ListOfPopupMenuItemOfGridDemoTileStyle = dart.constFn(core.List$(PopupMenuItemOfGridDemoTileStyle())))();
  let BuildContextToListOfPopupMenuItemOfGridDemoTileStyle = () => (BuildContextToListOfPopupMenuItemOfGridDemoTileStyle = dart.constFn(dart.fnType(ListOfPopupMenuItemOfGridDemoTileStyle(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let PhotoToNull = () => (PhotoToNull = dart.constFn(dart.fnType(core.Null, [grid_list_demo.Photo])))();
  let PhotoToGridDemoPhotoItem = () => (PhotoToGridDemoPhotoItem = dart.constFn(dart.fnType(grid_list_demo.GridDemoPhotoItem, [grid_list_demo.Photo])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: grid_list_demo.GridDemoTileStyle.prototype,
        [_name$]: "GridDemoTileStyle.imageOnly",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: grid_list_demo.GridDemoTileStyle.prototype,
        [_name$]: "GridDemoTileStyle.oneLine",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: grid_list_demo.GridDemoTileStyle.prototype,
        [_name$]: "GridDemoTileStyle.twoLine",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], grid_list_demo.GridDemoTileStyle);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 59,
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
        [_Location_column]: 14,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 59,
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
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 40,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 13,
        [_Location_line]: 144,
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
        [_Location_column]: 24,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 141,
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
        [_Location_column]: 16,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleStart",
        [_Location_column]: 7,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleUpdate",
        [_Location_column]: 7,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onScaleEnd",
        [_Location_column]: 7,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 136,
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
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 172,
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
        [_Location_column]: 31,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 24,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "photo",
        [_Location_column]: 36,
        [_Location_line]: 176,
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
        [_Location_column]: 20,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 13,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 176,
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
        [_Location_column]: 18,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 174,
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
        [_Location_column]: 24,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 173,
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
        [_Location_column]: 14,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 35,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 195,
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
        [_Location_column]: 26,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 13,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 192,
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
        [_Location_column]: 16,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 189,
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
        [_Location_column]: 26,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 43,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 15,
        [_Location_line]: 213,
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
        [_Location_column]: 20,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 210,
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
        [_Location_column]: 19,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 11,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 219,
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
        [_Location_column]: 16,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 43,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 46,
        [_Location_line]: 231,
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
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 234,
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
        [_Location_column]: 25,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 15,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 11,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 238,
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
        [_Location_column]: 16,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
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
        [Text_data]: "Grid list"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 56,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 346,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
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
        [Text_data]: "Image only"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: PopupMenuItemOfGridDemoTileStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C111 || CT.C111,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C0 || CT.C0
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
        [Text_data]: "One line"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: PopupMenuItemOfGridDemoTileStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C113 || CT.C113,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C1 || CT.C1
      });
    },
    get C115() {
      return C115 = dart.const({
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
        [Text_data]: "Two line"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: PopupMenuItemOfGridDemoTileStyle().prototype,
        [Widget_key]: null,
        [PopupMenuItem_child]: C115 || CT.C115,
        [PopupMenuItem_height]: 48,
        [PopupMenuItem_enabled]: true,
        [PopupMenuItem_value]: C2 || CT.C2
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 347,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 343,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 4,
        [EdgeInsets__right]: 4,
        [EdgeInsets__top]: 4,
        [EdgeInsets__left]: 4
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "photo",
        [_Location_column]: 23,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tileStyle",
        [_Location_column]: 23,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onBannerTap",
        [_Location_column]: 23,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 381,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 17,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childAspectRatio",
        [_Location_column]: 17,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133, C134 || CT.C134, C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 15,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 369,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 367,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(grid_list_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  grid_list_demo.GridDemoTileStyle = class GridDemoTileStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (grid_list_demo.GridDemoTileStyle.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = grid_list_demo.GridDemoTileStyle.prototype;
  dart.addTypeTests(grid_list_demo.GridDemoTileStyle);
  dart.setLibraryUri(grid_list_demo.GridDemoTileStyle, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo.GridDemoTileStyle, () => ({
    __proto__: dart.getFields(grid_list_demo.GridDemoTileStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(grid_list_demo.GridDemoTileStyle, ['toString']);
  grid_list_demo.GridDemoTileStyle.imageOnly = C0 || CT.C0;
  grid_list_demo.GridDemoTileStyle.oneLine = C1 || CT.C1;
  grid_list_demo.GridDemoTileStyle.twoLine = C2 || CT.C2;
  grid_list_demo.GridDemoTileStyle.values = C3 || CT.C3;
  const assetName$ = dart.privateName(grid_list_demo, "Photo.assetName");
  const assetPackage$ = dart.privateName(grid_list_demo, "Photo.assetPackage");
  const title$ = dart.privateName(grid_list_demo, "Photo.title");
  const caption$ = dart.privateName(grid_list_demo, "Photo.caption");
  const isFavorite$ = dart.privateName(grid_list_demo, "Photo.isFavorite");
  grid_list_demo.Photo = class Photo extends core.Object {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get assetPackage() {
      return this[assetPackage$];
    }
    set assetPackage(value) {
      super.assetPackage = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get caption() {
      return this[caption$];
    }
    set caption(value) {
      super.caption = value;
    }
    get isFavorite() {
      return this[isFavorite$];
    }
    set isFavorite(value) {
      this[isFavorite$] = value;
    }
    get tag() {
      return this.assetName;
    }
    get isValid() {
      return this.assetName != null && this.title != null && this.caption != null && this.isFavorite != null;
    }
  };
  (grid_list_demo.Photo.new = function(opts) {
    let assetName = opts && 'assetName' in opts ? opts.assetName : null;
    let assetPackage = opts && 'assetPackage' in opts ? opts.assetPackage : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let caption = opts && 'caption' in opts ? opts.caption : null;
    let isFavorite = opts && 'isFavorite' in opts ? opts.isFavorite : false;
    this[assetName$] = assetName;
    this[assetPackage$] = assetPackage;
    this[title$] = title;
    this[caption$] = caption;
    this[isFavorite$] = isFavorite;
    ;
  }).prototype = grid_list_demo.Photo.prototype;
  dart.addTypeTests(grid_list_demo.Photo);
  dart.setGetterSignature(grid_list_demo.Photo, () => ({
    __proto__: dart.getGetters(grid_list_demo.Photo.__proto__),
    tag: core.String,
    isValid: core.bool
  }));
  dart.setLibraryUri(grid_list_demo.Photo, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo.Photo, () => ({
    __proto__: dart.getFields(grid_list_demo.Photo.__proto__),
    assetName: dart.finalFieldType(core.String),
    assetPackage: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    caption: dart.finalFieldType(core.String),
    isFavorite: dart.fieldType(core.bool)
  }));
  const photo$ = dart.privateName(grid_list_demo, "GridPhotoViewer.photo");
  grid_list_demo.GridPhotoViewer = class GridPhotoViewer extends framework.StatefulWidget {
    get photo() {
      return this[photo$];
    }
    set photo(value) {
      super.photo = value;
    }
    createState() {
      return new grid_list_demo._GridPhotoViewerState.new();
    }
  };
  (grid_list_demo.GridPhotoViewer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let photo = opts && 'photo' in opts ? opts.photo : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[photo$] = photo;
    grid_list_demo.GridPhotoViewer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_list_demo.GridPhotoViewer.prototype;
  dart.addTypeTests(grid_list_demo.GridPhotoViewer);
  dart.setMethodSignature(grid_list_demo.GridPhotoViewer, () => ({
    __proto__: dart.getMethods(grid_list_demo.GridPhotoViewer.__proto__),
    createState: dart.fnType(grid_list_demo._GridPhotoViewerState, [])
  }));
  dart.setLibraryUri(grid_list_demo.GridPhotoViewer, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo.GridPhotoViewer, () => ({
    __proto__: dart.getFields(grid_list_demo.GridPhotoViewer.__proto__),
    photo: dart.finalFieldType(grid_list_demo.Photo)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  const text$ = dart.privateName(grid_list_demo, "_GridTitleText.text");
  grid_list_demo._GridTitleText = class _GridTitleText extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    build(context) {
      return new basic.FittedBox.new({fit: box_fit.BoxFit.scaleDown, alignment: alignment.Alignment.centerLeft, child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (grid_list_demo._GridTitleText.new = function(text, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    grid_list_demo._GridTitleText.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_list_demo._GridTitleText.prototype;
  dart.addTypeTests(grid_list_demo._GridTitleText);
  dart.setMethodSignature(grid_list_demo._GridTitleText, () => ({
    __proto__: dart.getMethods(grid_list_demo._GridTitleText.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_list_demo._GridTitleText, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo._GridTitleText, () => ({
    __proto__: dart.getFields(grid_list_demo._GridTitleText.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  const _controller = dart.privateName(grid_list_demo, "_controller");
  const _flingAnimation = dart.privateName(grid_list_demo, "_flingAnimation");
  const _offset = dart.privateName(grid_list_demo, "_offset");
  const _scale = dart.privateName(grid_list_demo, "_scale");
  const _normalizedOffset = dart.privateName(grid_list_demo, "_normalizedOffset");
  const _previousScale = dart.privateName(grid_list_demo, "_previousScale");
  const _handleFlingAnimation = dart.privateName(grid_list_demo, "_handleFlingAnimation");
  const _clampOffset = dart.privateName(grid_list_demo, "_clampOffset");
  const _handleOnScaleStart = dart.privateName(grid_list_demo, "_handleOnScaleStart");
  const _handleOnScaleUpdate = dart.privateName(grid_list_demo, "_handleOnScaleUpdate");
  const _handleOnScaleEnd = dart.privateName(grid_list_demo, "_handleOnScaleEnd");
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C27;
  let C28;
  let C24;
  let C23;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(grid_list_demo.GridPhotoViewer) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(grid_list_demo.GridPhotoViewer)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(grid_list_demo.GridPhotoViewer));
  grid_list_demo._GridPhotoViewerState = class _GridPhotoViewerState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0;
      super.initState();
      this[_controller] = (t0 = new animation_controller.AnimationController.new({vsync: this}), t0.addListener(dart.bind(this, _handleFlingAnimation)), t0);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_clampOffset](offset) {
      let size = this.context.size;
      let minOffset = new ui.Offset.new(size.width, size.height)['*'](1.0 - dart.notNull(this[_scale]));
      return new ui.Offset.new(offset.dx[$clamp](minOffset.dx, 0.0), offset.dy[$clamp](minOffset.dy, 0.0));
    }
    [_handleFlingAnimation]() {
      this.setState(dart.fn(() => {
        this[_offset] = this[_flingAnimation].value;
      }, VoidToNull()));
    }
    [_handleOnScaleStart](details) {
      this.setState(dart.fn(() => {
        this[_previousScale] = this[_scale];
        this[_normalizedOffset] = details.focalPoint['-'](this[_offset])['/'](this[_scale]);
        this[_controller].stop();
      }, VoidToNull()));
    }
    [_handleOnScaleUpdate](details) {
      this.setState(dart.fn(() => {
        this[_scale] = (dart.notNull(this[_previousScale]) * dart.notNull(details.scale))[$clamp](1.0, 4.0);
        this[_offset] = this[_clampOffset](details.focalPoint['-'](this[_normalizedOffset]['*'](this[_scale])));
      }, VoidToNull()));
    }
    [_handleOnScaleEnd](details) {
      let t0;
      let magnitude = details.velocity.pixelsPerSecond.distance;
      if (dart.notNull(magnitude) < 800) return;
      let direction = details.velocity.pixelsPerSecond['/'](magnitude);
      let distance = ui.Offset.zero['&'](this.context.size).shortestSide;
      this[_flingAnimation] = this[_controller].drive(ui.Offset, new (TweenOfOffset()).new({begin: this[_offset], end: this[_clampOffset](this[_offset]['+'](direction['*'](distance)))}));
      t0 = this[_controller];
      t0.value = 0.0;
      t0.fling({velocity: dart.notNull(magnitude) / 1000.0});
      t0;
    }
    build(context) {
      let t0;
      return new gesture_detector.GestureDetector.new({onScaleStart: dart.bind(this, _handleOnScaleStart), onScaleUpdate: dart.bind(this, _handleOnScaleUpdate), onScaleEnd: dart.bind(this, _handleOnScaleEnd), child: new basic.ClipRect.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.translate(this[_offset].dx, this[_offset].dy), t0.scale(this[_scale]), t0), child: new image$.Image.asset(dart.str(this.widget.photo.assetName), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (grid_list_demo._GridPhotoViewerState.new = function() {
    this[_controller] = null;
    this[_flingAnimation] = null;
    this[_offset] = ui.Offset.zero;
    this[_scale] = 1.0;
    this[_normalizedOffset] = null;
    this[_previousScale] = null;
    grid_list_demo._GridPhotoViewerState.__proto__.new.call(this);
    ;
  }).prototype = grid_list_demo._GridPhotoViewerState.prototype;
  dart.addTypeTests(grid_list_demo._GridPhotoViewerState);
  dart.setMethodSignature(grid_list_demo._GridPhotoViewerState, () => ({
    __proto__: dart.getMethods(grid_list_demo._GridPhotoViewerState.__proto__),
    [_clampOffset]: dart.fnType(ui.Offset, [ui.Offset]),
    [_handleFlingAnimation]: dart.fnType(dart.void, []),
    [_handleOnScaleStart]: dart.fnType(dart.void, [scale.ScaleStartDetails]),
    [_handleOnScaleUpdate]: dart.fnType(dart.void, [scale.ScaleUpdateDetails]),
    [_handleOnScaleEnd]: dart.fnType(dart.void, [scale.ScaleEndDetails]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_list_demo._GridPhotoViewerState, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo._GridPhotoViewerState, () => ({
    __proto__: dart.getFields(grid_list_demo._GridPhotoViewerState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_flingAnimation]: dart.fieldType(animation.Animation$(ui.Offset)),
    [_offset]: dart.fieldType(ui.Offset),
    [_scale]: dart.fieldType(core.double),
    [_normalizedOffset]: dart.fieldType(ui.Offset),
    [_previousScale]: dart.fieldType(core.double)
  }));
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  let C37;
  let C36;
  let C35;
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
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C73;
  let C70;
  let C69;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C83;
  let C82;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C95;
  let C96;
  let C97;
  let C93;
  let C92;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C103;
  let C102;
  const photo$0 = dart.privateName(grid_list_demo, "GridDemoPhotoItem.photo");
  const tileStyle$ = dart.privateName(grid_list_demo, "GridDemoPhotoItem.tileStyle");
  const onBannerTap$ = dart.privateName(grid_list_demo, "GridDemoPhotoItem.onBannerTap");
  grid_list_demo.GridDemoPhotoItem = class GridDemoPhotoItem extends framework.StatelessWidget {
    get photo() {
      return this[photo$0];
    }
    set photo(value) {
      super.photo = value;
    }
    get tileStyle() {
      return this[tileStyle$];
    }
    set tileStyle(value) {
      super.tileStyle = value;
    }
    get onBannerTap() {
      return this[onBannerTap$];
    }
    set onBannerTap(value) {
      super.onBannerTap = value;
    }
    showPhoto(context) {
      navigator.Navigator.push(dart.void, context, new (MaterialPageRouteOfvoid()).new({builder: dart.fn(context => new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.photo.title, {$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), body: new basic.SizedBox.expand({child: new heroes.Hero.new({tag: this.photo.tag, child: new grid_list_demo.GridPhotoViewer.new({photo: this.photo, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), BuildContextToScaffold())}));
    }
    build(context) {
      let image = new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          this.showPhoto(context);
        }, VoidToNull()), child: new heroes.Hero.new({key: new (ValueKeyOfString()).new(this.photo.assetName), tag: this.photo.tag, child: new image$.Image.asset(dart.str(this.photo.assetName), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
      let icon = dart.test(this.photo.isFavorite) ? icons.Icons.star : icons.Icons.star_border;
      switch (this.tileStyle) {
        case C0 || CT.C0:
        {
          return image;
        }
        case C1 || CT.C1:
        {
          return new grid_tile.GridTile.new({header: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                this.onBannerTap(this.photo);
              }, VoidToNull()), child: new grid_tile_bar.GridTileBar.new({title: new grid_list_demo._GridTitleText.new(this.photo.title, {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), backgroundColor: colors.Colors.black45, leading: new icon$.Icon.new(icon, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), child: image, $creationLocationd_0dea112b090073317d4: C78 || CT.C78});
        }
        case C2 || CT.C2:
        {
          return new grid_tile.GridTile.new({footer: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                this.onBannerTap(this.photo);
              }, VoidToNull()), child: new grid_tile_bar.GridTileBar.new({backgroundColor: colors.Colors.black45, title: new grid_list_demo._GridTitleText.new(this.photo.title, {$creationLocationd_0dea112b090073317d4: C82 || CT.C82}), subtitle: new grid_list_demo._GridTitleText.new(this.photo.caption, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), trailing: new icon$.Icon.new(icon, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), child: image, $creationLocationd_0dea112b090073317d4: C102 || CT.C102});
        }
      }
      if (!(this.tileStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart", 241, 12, "tileStyle != null");
      return null;
    }
  };
  (grid_list_demo.GridDemoPhotoItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let photo = opts && 'photo' in opts ? opts.photo : null;
    let tileStyle = opts && 'tileStyle' in opts ? opts.tileStyle : null;
    let onBannerTap = opts && 'onBannerTap' in opts ? opts.onBannerTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[photo$0] = photo;
    this[tileStyle$] = tileStyle;
    this[onBannerTap$] = onBannerTap;
    if (!(photo != null && dart.test(photo.isValid))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart", 158, 16, "photo != null && photo.isValid");
    if (!(tileStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart", 159, 16, "tileStyle != null");
    if (!(onBannerTap != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/grid_list_demo.dart", 160, 16, "onBannerTap != null");
    grid_list_demo.GridDemoPhotoItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_list_demo.GridDemoPhotoItem.prototype;
  dart.addTypeTests(grid_list_demo.GridDemoPhotoItem);
  dart.setMethodSignature(grid_list_demo.GridDemoPhotoItem, () => ({
    __proto__: dart.getMethods(grid_list_demo.GridDemoPhotoItem.__proto__),
    showPhoto: dart.fnType(dart.void, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_list_demo.GridDemoPhotoItem, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo.GridDemoPhotoItem, () => ({
    __proto__: dart.getFields(grid_list_demo.GridDemoPhotoItem.__proto__),
    photo: dart.finalFieldType(grid_list_demo.Photo),
    tileStyle: dart.finalFieldType(grid_list_demo.GridDemoTileStyle),
    onBannerTap: dart.finalFieldType(dart.fnType(dart.void, [grid_list_demo.Photo]))
  }));
  grid_list_demo.GridListDemo = class GridListDemo extends framework.StatefulWidget {
    createState() {
      return new grid_list_demo.GridListDemoState.new();
    }
  };
  (grid_list_demo.GridListDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    grid_list_demo.GridListDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_list_demo.GridListDemo.prototype;
  dart.addTypeTests(grid_list_demo.GridListDemo);
  dart.setMethodSignature(grid_list_demo.GridListDemo, () => ({
    __proto__: dart.getMethods(grid_list_demo.GridListDemo.__proto__),
    createState: dart.fnType(grid_list_demo.GridListDemoState, [])
  }));
  dart.setLibraryUri(grid_list_demo.GridListDemo, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.defineLazy(grid_list_demo.GridListDemo, {
    /*grid_list_demo.GridListDemo.routeName*/get routeName() {
      return "/material/grid-list";
    }
  });
  const _tileStyle = dart.privateName(grid_list_demo, "_tileStyle");
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
  let C106;
  let C109;
  let C108;
  let C107;
  let C111;
  const PopupMenuItem_child = dart.privateName(popup_menu, "PopupMenuItem.child");
  const PopupMenuItem_height = dart.privateName(popup_menu, "PopupMenuItem.height");
  const PopupMenuItem_enabled = dart.privateName(popup_menu, "PopupMenuItem.enabled");
  const PopupMenuItem_value = dart.privateName(popup_menu, "PopupMenuItem.value");
  let C110;
  let C113;
  let C112;
  let C115;
  let C114;
  let C118;
  let C119;
  let C117;
  let C116;
  let C122;
  let C123;
  let C121;
  let C120;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C124;
  let C127;
  let C128;
  let C129;
  let C126;
  let C125;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C131;
  let C130;
  let C140;
  let C141;
  let C142;
  let C139;
  let C138;
  let C145;
  let C144;
  let C143;
  let C148;
  let C147;
  let C146;
  let C151;
  let C152;
  let C150;
  let C149;
  const photos = dart.privateName(grid_list_demo, "GridListDemoState.photos");
  grid_list_demo.GridListDemoState = class GridListDemoState extends framework.State$(grid_list_demo.GridListDemo) {
    get photos() {
      return this[photos];
    }
    set photos(value) {
      this[photos] = value;
    }
    changeTileStyle(value) {
      this.setState(dart.fn(() => {
        this[_tileStyle] = value;
      }, VoidToNull()));
    }
    build(context) {
      let orientation = media_query.MediaQuery.of(context).orientation;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C106 || CT.C106, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/grid-list", {$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new (PopupMenuButtonOfGridDemoTileStyle()).new({onSelected: dart.bind(this, 'changeTileStyle'), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfGridDemoTileStyle().of([C110 || CT.C110, C112 || CT.C112, C114 || CT.C114]), BuildContextToListOfPopupMenuItemOfGridDemoTileStyle()), $creationLocationd_0dea112b090073317d4: C116 || CT.C116})]), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), body: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new scroll_view.GridView.count({crossAxisCount: dart.equals(orientation, media_query.Orientation.portrait) ? 2 : 3, mainAxisSpacing: 4.0, crossAxisSpacing: 4.0, padding: C124 || CT.C124, childAspectRatio: dart.equals(orientation, media_query.Orientation.portrait) ? 1.0 : 1.3, children: this.photos[$map](framework.Widget, dart.fn(photo => new grid_list_demo.GridDemoPhotoItem.new({photo: photo, tileStyle: this[_tileStyle], onBannerTap: dart.fn(photo => {
                      this.setState(dart.fn(() => {
                        photo.isFavorite = !dart.test(photo.isFavorite);
                      }, VoidToNull()));
                    }, PhotoToNull()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), PhotoToGridDemoPhotoItem()))[$toList](), $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143})]), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149});
    }
  };
  (grid_list_demo.GridListDemoState.new = function() {
    this[_tileStyle] = grid_list_demo.GridDemoTileStyle.twoLine;
    this[photos] = JSArrayOfPhoto().of([new grid_list_demo.Photo.new({assetName: "places/india_chennai_flower_market.png", assetPackage: "flutter_gallery_assets", title: "Chennai", caption: "Flower Market"}), new grid_list_demo.Photo.new({assetName: "places/india_tanjore_bronze_works.png", assetPackage: "flutter_gallery_assets", title: "Tanjore", caption: "Bronze Works"}), new grid_list_demo.Photo.new({assetName: "places/india_tanjore_market_merchant.png", assetPackage: "flutter_gallery_assets", title: "Tanjore", caption: "Market"}), new grid_list_demo.Photo.new({assetName: "places/india_tanjore_thanjavur_temple.png", assetPackage: "flutter_gallery_assets", title: "Tanjore", caption: "Thanjavur Temple"}), new grid_list_demo.Photo.new({assetName: "places/india_tanjore_thanjavur_temple_carvings.png", assetPackage: "flutter_gallery_assets", title: "Tanjore", caption: "Thanjavur Temple"}), new grid_list_demo.Photo.new({assetName: "places/india_pondicherry_salt_farm.png", assetPackage: "flutter_gallery_assets", title: "Pondicherry", caption: "Salt Farm"}), new grid_list_demo.Photo.new({assetName: "places/india_chennai_highway.png", assetPackage: "flutter_gallery_assets", title: "Chennai", caption: "Scooters"}), new grid_list_demo.Photo.new({assetName: "places/india_chettinad_silk_maker.png", assetPackage: "flutter_gallery_assets", title: "Chettinad", caption: "Silk Maker"}), new grid_list_demo.Photo.new({assetName: "places/india_chettinad_produce.png", assetPackage: "flutter_gallery_assets", title: "Chettinad", caption: "Lunch Prep"}), new grid_list_demo.Photo.new({assetName: "places/india_tanjore_market_technology.png", assetPackage: "flutter_gallery_assets", title: "Tanjore", caption: "Market"}), new grid_list_demo.Photo.new({assetName: "places/india_pondicherry_beach.png", assetPackage: "flutter_gallery_assets", title: "Pondicherry", caption: "Beach"}), new grid_list_demo.Photo.new({assetName: "places/india_pondicherry_fisherman.png", assetPackage: "flutter_gallery_assets", title: "Pondicherry", caption: "Fisherman"})]);
    grid_list_demo.GridListDemoState.__proto__.new.call(this);
    ;
  }).prototype = grid_list_demo.GridListDemoState.prototype;
  dart.addTypeTests(grid_list_demo.GridListDemoState);
  dart.setMethodSignature(grid_list_demo.GridListDemoState, () => ({
    __proto__: dart.getMethods(grid_list_demo.GridListDemoState.__proto__),
    changeTileStyle: dart.fnType(dart.void, [grid_list_demo.GridDemoTileStyle]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_list_demo.GridListDemoState, "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart");
  dart.setFieldSignature(grid_list_demo.GridListDemoState, () => ({
    __proto__: dart.getFields(grid_list_demo.GridListDemoState.__proto__),
    [_tileStyle]: dart.fieldType(grid_list_demo.GridDemoTileStyle),
    photos: dart.fieldType(core.List$(grid_list_demo.Photo))
  }));
  dart.defineLazy(grid_list_demo, {
    /*grid_list_demo._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 800;
    },
    /*grid_list_demo._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return "flutter_gallery_assets";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/grid_list_demo", {
    "package:flutter_web.examples.gallery/demo/material/grid_list_demo.dart": grid_list_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["grid_list_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"grid_list_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__grid_list_demo: grid_list_demo
  };
});

//# sourceMappingURL=grid_list_demo.ddc.js.map
