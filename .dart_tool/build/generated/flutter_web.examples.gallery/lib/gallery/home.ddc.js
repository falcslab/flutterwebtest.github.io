define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demos', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web.examples.gallery/gallery/backdrop'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demos, packages__flutter_web__src__foundation__assertions, packages__flutter_web$46examples$46gallery__gallery__backdrop) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const decoration_image = packages__flutter_web__animation.src__painting__decoration_image;
  const image_resolution = packages__flutter_web__animation.src__painting__image_resolution;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const text = packages__flutter_web__animation.src__widgets__text;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const page_storage = packages__flutter_web__animation.src__widgets__page_storage;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const box = packages__flutter_web__animation.src__rendering__box;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const will_pop_scope = packages__flutter_web__animation.src__widgets__will_pop_scope;
  const animated_switcher = packages__flutter_web__animation.src__widgets__animated_switcher;
  const stack = packages__flutter_web__animation.src__rendering__stack;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const banner = packages__flutter_web__animation.src__widgets__banner;
  const annotated_region = packages__flutter_web__animation.src__widgets__annotated_region;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const system_chrome = packages__flutter_web__src__animation__animation.src__services__system_chrome;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const button = packages__flutter_web__material.src__material__button;
  const colors = packages__flutter_web__material.src__material__colors;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const back_button = packages__flutter_web__material.src__material__back_button;
  const ui = packages__flutter_web_ui__ui.ui;
  const demos = packages__flutter_web$46examples$46gallery__gallery__demos.gallery__demos;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const backdrop = packages__flutter_web$46examples$46gallery__gallery__backdrop.gallery__backdrop;
  const home$ = Object.create(dart.library);
  const $toList = dartx.toList;
  const $toDouble = dartx.toDouble;
  const $length = dartx.length;
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $map = dartx.map;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let PageStorageKeyOfString = () => (PageStorageKeyOfString = dart.constFn(page_storage.PageStorageKey$(core.String)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToSizedBox = () => (intToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [core.int])))();
  let intToRow = () => (intToRow = dart.constFn(dart.fnType(basic.Row, [core.int])))();
  let BuildContextAndBoxConstraintsToRepaintBoundary = () => (BuildContextAndBoxConstraintsToRepaintBoundary = dart.constFn(dart.fnType(basic.RepaintBoundary, [framework.BuildContext, box.BoxConstraints])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let GalleryDemoTo_DemoItem = () => (GalleryDemoTo_DemoItem = dart.constFn(dart.fnType(home$._DemoItem, [demos.GalleryDemo])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let WidgetAndListOfWidgetToWidget = () => (WidgetAndListOfWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.Widget, ListOfWidget()])))();
  let VoidToGalleryDemoCategory = () => (VoidToGalleryDemoCategory = dart.constFn(dart.fnType(demos.GalleryDemoCategory, [])))();
  let GalleryDemoCategoryToNull = () => (GalleryDemoCategoryToNull = dart.constFn(dart.fnType(core.Null, [demos.GalleryDemoCategory])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: image_resolution.AssetImage.prototype,
        [AssetImage_package]: null,
        [AssetImage_bundle]: null,
        [AssetImage_assetName]: "logos/flutter_white/logo.png"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: decoration_image.DecorationImage.prototype,
        [DecorationImage_matchTextDirection]: false,
        [DecorationImage_repeat]: C3 || CT.C3,
        [DecorationImage_centerSlice]: null,
        [DecorationImage_alignment]: C4 || CT.C4,
        [DecorationImage_fit]: null,
        [DecorationImage_colorFilter]: null,
        [DecorationImage_image]: C5 || CT.C5
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C1 || CT.C1,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: C2 || CT.C2,
        [BoxDecoration_color]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
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
        [_Location_column]: 12,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 6,
        [EdgeInsets__right]: 6,
        [EdgeInsets__top]: 6,
        [EdgeInsets__left]: 6
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 81,
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
        [_Location_column]: 22,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 78,
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
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 65,
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
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: PageStorageKeyOfString().prototype,
        [ValueKey_value]: "categories"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 27,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 27,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 149,
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
        [_Location_column]: 30,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 140,
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
        [_Location_column]: 26,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 133,
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
        [_Location_column]: 22,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 118,
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
        [_Location_column]: 14,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 7,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280295716.0
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 14,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284507243.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 22,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 44
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 7,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 7,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "GalleryDemoList"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "demo",
        [_Location_column]: 30,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scopesRoute",
        [_Location_column]: 9,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 9,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 9,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 306,
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
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C155 || CT.C155,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    },
    get C156() {
      return C156 = dart.const({
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
        [Text_data]: "Options"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: home$._FlutterLogo.prototype,
        [Widget_key]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: back_button.BackButtonIcon.prototype,
        [Widget_key]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 23,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchOutCurve",
        [_Location_column]: 15,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchInCurve",
        [_Location_column]: 15,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
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
        [Text_data]: "Flutter web gallery"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176, C177 || CT.C177], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 62,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C181() {
      return C181 = dart.fn(home$._GalleryHomeState._topHomeLayout, WidgetAndListOfWidgetToWidget());
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 32,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 383,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "categories",
        [_Location_column]: 23,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCategoryTap",
        [_Location_column]: 23,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchOutCurve",
        [_Location_column]: 15,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchInCurve",
        [_Location_column]: 15,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layoutBuilder",
        [_Location_column]: 15,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193, C194 || CT.C194, C195 || CT.C195], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 377,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backTitle",
        [_Location_column]: 13,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backLayer",
        [_Location_column]: 13,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontAction",
        [_Location_column]: 13,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontTitle",
        [_Location_column]: 13,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontHeading",
        [_Location_column]: 13,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frontLayer",
        [_Location_column]: 13,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199, C200 || CT.C200, C201 || CT.C201, C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillPop",
        [_Location_column]: 11,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 346,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 344,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 341,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 8
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: 1,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C219 || CT.C219,
        [TextStyle_fontSize]: 10.2,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C220 || CT.C220,
        [TextStyle_inherit]: true
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2696354844.0
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: banner.BannerLocation.prototype,
        [_name$0]: "BannerLocation.topEnd",
        index: 1
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: banner.Banner.prototype,
        [Widget_key]: null,
        [Banner_textStyle]: C218 || CT.C218,
        [Banner_color]: C221 || CT.C221,
        [Banner_layoutDirection]: null,
        [Banner_location]: C222 || CT.C222,
        [Banner_textDirection]: null,
        [Banner_message]: "PREVIEW",
        [Banner_child]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225, C226 || CT.C226], widget_inspector._Location);
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 404,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 20,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 42,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 402,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 22,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 413,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart"
      });
    },
    get C235() {
      return C235 = dart.fn(animated_switcher.AnimatedSwitcher.defaultLayoutBuilder, WidgetAndListOfWidgetToWidget());
    },
    get C236() {
      return C236 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278205813.0
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C1;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const DecorationImage_matchTextDirection = dart.privateName(decoration_image, "DecorationImage.matchTextDirection");
  const _name$ = dart.privateName(decoration_image, "_name");
  let C3;
  const DecorationImage_repeat = dart.privateName(decoration_image, "DecorationImage.repeat");
  const DecorationImage_centerSlice = dart.privateName(decoration_image, "DecorationImage.centerSlice");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C4;
  const DecorationImage_alignment = dart.privateName(decoration_image, "DecorationImage.alignment");
  const DecorationImage_fit = dart.privateName(decoration_image, "DecorationImage.fit");
  const DecorationImage_colorFilter = dart.privateName(decoration_image, "DecorationImage.colorFilter");
  const AssetImage_package = dart.privateName(image_resolution, "AssetImage.package");
  const AssetImage_bundle = dart.privateName(image_resolution, "AssetImage.bundle");
  const AssetImage_assetName = dart.privateName(image_resolution, "AssetImage.assetName");
  let C5;
  const DecorationImage_image = dart.privateName(decoration_image, "DecorationImage.image");
  let C2;
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C12;
  let C11;
  home$._FlutterLogo = class _FlutterLogo extends framework.StatelessWidget {
    build(context) {
      return new basic.Center.new({child: new container.Container.new({width: 34.0, height: 34.0, decoration: C0 || CT.C0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (home$._FlutterLogo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home$._FlutterLogo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._FlutterLogo.prototype;
  dart.addTypeTests(home$._FlutterLogo);
  dart.setMethodSignature(home$._FlutterLogo, () => ({
    __proto__: dart.getMethods(home$._FlutterLogo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._FlutterLogo, "package:flutter_web.examples.gallery/gallery/home.dart");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C14;
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  let C22;
  let C23;
  let C21;
  let C20;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C24;
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
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C41;
  let C40;
  let C49;
  let C48;
  let C47;
  const category$ = dart.privateName(home$, "_CategoryItem.category");
  const onTap$ = dart.privateName(home$, "_CategoryItem.onTap");
  home$._CategoryItem = class _CategoryItem extends framework.StatelessWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      return new basic.RepaintBoundary.new({child: new button.RawMaterialButton.new({padding: edge_insets.EdgeInsets.zero, splashColor: theme.primaryColor.withOpacity(0.12), highlightColor: colors.Colors.transparent, onPressed: this.onTap, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C14 || CT.C14, child: new icon.Icon.new(this.category.icon, {size: 60.0, color: isDark ? colors.Colors.white : home$._kFlutterBlue, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), C24 || CT.C24, new container.Container.new({height: 48.0, alignment: alignment.Alignment.center, child: new text.Text.new(this.category.name, {textAlign: ui.TextAlign.center, style: theme.textTheme.subhead.copyWith({fontFamily: "GoogleSans", color: isDark ? colors.Colors.white : home$._kFlutterBlue}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (home$._CategoryItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let category = opts && 'category' in opts ? opts.category : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    this[onTap$] = onTap;
    home$._CategoryItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._CategoryItem.prototype;
  dart.addTypeTests(home$._CategoryItem);
  dart.setMethodSignature(home$._CategoryItem, () => ({
    __proto__: dart.getMethods(home$._CategoryItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._CategoryItem, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$._CategoryItem, () => ({
    __proto__: dart.getFields(home$._CategoryItem.__proto__),
    category: dart.finalFieldType(demos.GalleryDemoCategory),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const ValueKey_value = dart.privateName(key, "ValueKey.value");
  let C50;
  let C53;
  let C54;
  let C52;
  let C51;
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
  let C67;
  let C64;
  let C63;
  let C70;
  let C69;
  let C68;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C79;
  let C78;
  const categories$ = dart.privateName(home$, "_CategoriesPage.categories");
  const onCategoryTap$ = dart.privateName(home$, "_CategoriesPage.onCategoryTap");
  home$._CategoriesPage = class _CategoriesPage extends framework.StatelessWidget {
    get categories() {
      return this[categories$];
    }
    set categories(value) {
      super.categories = value;
    }
    get onCategoryTap() {
      return this[onCategoryTap$];
    }
    set onCategoryTap(value) {
      super.onCategoryTap = value;
    }
    build(context) {
      let categoriesList = this.categories[$toList]();
      let columnCount = dart.equals(media_query.MediaQuery.of(context).orientation, media_query.Orientation.portrait) ? 2 : 3;
      return new basic.Semantics.new({scopesRoute: true, namesRoute: true, label: "categories", explicitChildNodes: true, child: new single_child_scroll_view.SingleChildScrollView.new({key: C50 || CT.C50, child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
              let columnWidth = dart.notNull(constraints.biggest.width) / columnCount[$toDouble]();
              let rowHeight = math.min(core.double, 225.0, columnWidth * 0.8888888888888888);
              let rowCount = ((dart.notNull(this.categories[$length]) + columnCount - 1) / columnCount)[$truncate]();
              return new basic.RepaintBoundary.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: ListOfWidget().generate(rowCount, dart.fn(rowIndex => {
                    let columnCountForRow = dart.asInt(rowIndex === rowCount - 1 ? dart.notNull(this.categories[$length]) - columnCount * math.max(core.num, 0, rowCount - 1) : columnCount);
                    return new basic.Row.new({children: ListOfWidget().generate(columnCountForRow, dart.fn(columnIndex => {
                        let index = dart.notNull(rowIndex) * columnCount + dart.notNull(columnIndex);
                        let category = categoriesList[$_get](index);
                        return new basic.SizedBox.new({width: columnWidth, height: rowHeight, child: new home$._CategoryItem.new({category: category, onTap: dart.fn(() => {
                              this.onCategoryTap(category);
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
                      }, intToSizedBox())), $creationLocationd_0dea112b090073317d4: C60 || CT.C60});
                  }, intToRow())), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
            }, BuildContextAndBoxConstraintsToRepaintBoundary()), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78});
    }
  };
  (home$._CategoriesPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let categories = opts && 'categories' in opts ? opts.categories : null;
    let onCategoryTap = opts && 'onCategoryTap' in opts ? opts.onCategoryTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[categories$] = categories;
    this[onCategoryTap$] = onCategoryTap;
    home$._CategoriesPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._CategoriesPage.prototype;
  dart.addTypeTests(home$._CategoriesPage);
  dart.setMethodSignature(home$._CategoriesPage, () => ({
    __proto__: dart.getMethods(home$._CategoriesPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._CategoriesPage, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$._CategoriesPage, () => ({
    __proto__: dart.getFields(home$._CategoriesPage.__proto__),
    categories: dart.finalFieldType(core.Iterable$(demos.GalleryDemoCategory)),
    onCategoryTap: dart.finalFieldType(dart.fnType(dart.void, [demos.GalleryDemoCategory]))
  }));
  const _launchDemo = dart.privateName(home$, "_launchDemo");
  const Color__value = dart.privateName(ui, "Color._value");
  let C85;
  let C88;
  let C89;
  let C87;
  let C86;
  let C90;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C99;
  let C96;
  let C95;
  let C102;
  let C103;
  let C104;
  let C105;
  let C101;
  let C100;
  let C108;
  let C109;
  let C110;
  let C107;
  let C106;
  let C113;
  let C112;
  let C111;
  let C114;
  let C117;
  let C116;
  let C115;
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C123;
  let C122;
  const demo$ = dart.privateName(home$, "_DemoItem.demo");
  home$._DemoItem = class _DemoItem extends framework.StatelessWidget {
    get demo() {
      return this[demo$];
    }
    set demo(value) {
      super.demo = value;
    }
    [_launchDemo](context) {
      if (this.demo.routeName != null) {
        developer.Timeline.instantSync("Start Transition", {arguments: new (IdentityMapOfString$String()).from(["from", "/", "to", this.demo.routeName])});
        navigator.Navigator.pushNamed(core.Object, context, this.demo.routeName);
      }
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      let textScaleFactor = media_query.MediaQuery.textScaleFactorOf(context);
      let titleChildren = JSArrayOfWidget().of([new text.Text.new(this.demo.title, {style: theme.textTheme.subhead.copyWith({color: isDark ? colors.Colors.white : C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]);
      if (this.demo.subtitle != null) {
        titleChildren[$add](new text.Text.new(this.demo.subtitle, {style: theme.textTheme.body1.copyWith({color: isDark ? colors.Colors.white : C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}));
      }
      return new button.RawMaterialButton.new({padding: edge_insets.EdgeInsets.zero, splashColor: theme.primaryColor.withOpacity(0.12), highlightColor: colors.Colors.transparent, onPressed: dart.fn(() => {
          this[_launchDemo](context);
        }, VoidToNull()), child: new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 64 * dart.notNull(textScaleFactor)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: 56.0, height: 56.0, alignment: alignment.Alignment.center, child: new icon.Icon.new(this.demo.icon, {size: 24.0, color: isDark ? colors.Colors.white : home$._kFlutterBlue, $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new basic.Expanded.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: titleChildren, $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), C114 || CT.C114]), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
    }
  };
  (home$._DemoItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let demo = opts && 'demo' in opts ? opts.demo : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[demo$] = demo;
    home$._DemoItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._DemoItem.prototype;
  dart.addTypeTests(home$._DemoItem);
  dart.setMethodSignature(home$._DemoItem, () => ({
    __proto__: dart.getMethods(home$._DemoItem.__proto__),
    [_launchDemo]: dart.fnType(dart.void, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._DemoItem, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$._DemoItem, () => ({
    __proto__: dart.getFields(home$._DemoItem.__proto__),
    demo: dart.finalFieldType(demos.GalleryDemo)
  }));
  let C129;
  let C132;
  let C131;
  let C130;
  let C135;
  let C136;
  let C137;
  let C134;
  let C133;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C139;
  let C138;
  let C147;
  let C148;
  let C146;
  let C145;
  const category$0 = dart.privateName(home$, "_DemosPage.category");
  home$._DemosPage = class _DemosPage extends framework.StatelessWidget {
    get category() {
      return this[category$0];
    }
    set category(value) {
      super.category = value;
    }
    build(context) {
      let windowBottomPadding = media_query.MediaQuery.of(context).padding.bottom;
      return new basic.KeyedSubtree.new({key: C129 || CT.C129, child: new basic.Semantics.new({scopesRoute: true, namesRoute: true, label: this.category.name, explicitChildNodes: true, child: new scroll_view.ListView.new({key: new (PageStorageKeyOfString()).new(this.category.name), padding: new edge_insets.EdgeInsets.only({top: 8.0, bottom: windowBottomPadding}), children: demos.kGalleryCategoryToDemos[$_get](this.category)[$map](framework.Widget, dart.fn(demo => new home$._DemoItem.new({demo: demo, $creationLocationd_0dea112b090073317d4: C130 || CT.C130}), GalleryDemoTo_DemoItem()))[$toList](), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145});
    }
  };
  (home$._DemosPage.new = function(category, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$0] = category;
    home$._DemosPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$._DemosPage.prototype;
  dart.addTypeTests(home$._DemosPage);
  dart.setMethodSignature(home$._DemosPage, () => ({
    __proto__: dart.getMethods(home$._DemosPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._DemosPage, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$._DemosPage, () => ({
    __proto__: dart.getFields(home$._DemosPage.__proto__),
    category: dart.finalFieldType(demos.GalleryDemoCategory)
  }));
  const optionsPage$ = dart.privateName(home$, "GalleryHome.optionsPage");
  const testMode$ = dart.privateName(home$, "GalleryHome.testMode");
  home$.GalleryHome = class GalleryHome extends framework.StatefulWidget {
    get optionsPage() {
      return this[optionsPage$];
    }
    set optionsPage(value) {
      super.optionsPage = value;
    }
    get testMode() {
      return this[testMode$];
    }
    set testMode(value) {
      super.testMode = value;
    }
    createState() {
      return new home$._GalleryHomeState.new();
    }
  };
  (home$.GalleryHome.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let testMode = opts && 'testMode' in opts ? opts.testMode : false;
    let optionsPage = opts && 'optionsPage' in opts ? opts.optionsPage : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[testMode$] = testMode;
    this[optionsPage$] = optionsPage;
    home$.GalleryHome.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home$.GalleryHome.prototype;
  dart.addTypeTests(home$.GalleryHome);
  dart.setMethodSignature(home$.GalleryHome, () => ({
    __proto__: dart.getMethods(home$.GalleryHome.__proto__),
    createState: dart.fnType(home$._GalleryHomeState, [])
  }));
  dart.setLibraryUri(home$.GalleryHome, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$.GalleryHome, () => ({
    __proto__: dart.getFields(home$.GalleryHome.__proto__),
    optionsPage: dart.finalFieldType(framework.Widget),
    testMode: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(home$.GalleryHome, {
    /*home$.GalleryHome.showPreviewBanner*/get showPreviewBanner() {
      return true;
    },
    set showPreviewBanner(_) {}
  });
  const _controller = dart.privateName(home$, "_controller");
  const _category = dart.privateName(home$, "_category");
  let C151;
  let C152;
  let C150;
  let C149;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C153;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C155;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C154;
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
  let C156;
  let C157;
  let C158;
  let C161;
  let C162;
  let C163;
  let C160;
  let C159;
  let C166;
  let C167;
  let C168;
  let C169;
  let C165;
  let C164;
  let C170;
  let C173;
  let C172;
  let C171;
  let C176;
  let C177;
  let C175;
  let C174;
  let C180;
  let C179;
  let C178;
  let C181;
  let C184;
  let C183;
  let C182;
  let C187;
  let C188;
  let C186;
  let C185;
  let C191;
  let C192;
  let C193;
  let C194;
  let C195;
  let C190;
  let C189;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C197;
  let C196;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C211;
  let C209;
  let C208;
  let C214;
  let C215;
  let C216;
  let C213;
  let C212;
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C219;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C220;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C218;
  const Banner_textStyle = dart.privateName(banner, "Banner.textStyle");
  let C221;
  const Banner_color = dart.privateName(banner, "Banner.color");
  const Banner_layoutDirection = dart.privateName(banner, "Banner.layoutDirection");
  const _name$0 = dart.privateName(banner, "_name");
  let C222;
  const Banner_location = dart.privateName(banner, "Banner.location");
  const Banner_textDirection = dart.privateName(banner, "Banner.textDirection");
  const Banner_message = dart.privateName(banner, "Banner.message");
  const Banner_child = dart.privateName(banner, "Banner.child");
  let C217;
  let C225;
  let C226;
  let C224;
  let C223;
  let C229;
  let C230;
  let C228;
  let C227;
  let C233;
  let C234;
  let C232;
  let C231;
  let C235;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(home$.GalleryHome) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(home$.GalleryHome)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(home$.GalleryHome));
  home$._GalleryHomeState = class _GalleryHomeState extends State_SingleTickerProviderStateMixin$36 {
    static _topHomeLayout(currentChild, previousChildren) {
      let t0;
      let children = previousChildren;
      if (currentChild != null) children = (t0 = children[$toList](), t0[$add](currentChild), t0);
      return new basic.Stack.new({children: children, alignment: alignment.Alignment.topCenter, $creationLocationd_0dea112b090073317d4: C149 || CT.C149});
    }
    initState() {
      let t0;
      super.initState();
      this[_controller] = (t0 = new animation_controller.AnimationController.new({duration: C153 || CT.C153, debugLabel: "preview banner", vsync: this}), t0.forward(), t0);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let isDark = dart.equals(theme.brightness, ui.Brightness.dark);
      let media = media_query.MediaQuery.of(context);
      let centerHome = dart.equals(media.orientation, media_query.Orientation.portrait) && dart.notNull(media.size.height) < 800.0;
      let switchOutCurve = C154 || CT.C154;
      let switchInCurve = C154 || CT.C154;
      let home = new scaffold.Scaffold.new({key: home$._GalleryHomeState._scaffoldKey, backgroundColor: isDark ? home$._kFlutterBlue : theme.primaryColor, body: new safe_area.SafeArea.new({bottom: false, child: new will_pop_scope.WillPopScope.new({onWillPop: dart.fn(() => {
              if (this[_category] != null) {
                this.setState(dart.fn(() => this[_category] = null, VoidToNull()));
                return FutureOfbool().value(false);
              }
              return FutureOfbool().value(true);
            }, VoidToFutureOfbool()), child: new backdrop.Backdrop.new({backTitle: C156 || CT.C156, backLayer: this.widget.optionsPage, frontAction: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, switchOutCurve: switchOutCurve, switchInCurve: switchInCurve, child: this[_category] == null ? C157 || CT.C157 : new icon_button.IconButton.new({icon: C158 || CT.C158, tooltip: "Back", onPressed: dart.fn(() => this.setState(dart.fn(() => this[_category] = null, VoidToNull())), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), frontTitle: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, child: this[_category] == null ? C170 || CT.C170 : new text.Text.new(this[_category].name, {$creationLocationd_0dea112b090073317d4: C171 || CT.C171}), $creationLocationd_0dea112b090073317d4: C174 || CT.C174}), frontHeading: dart.test(this.widget.testMode) ? null : new container.Container.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C178 || CT.C178}), frontLayer: new animated_switcher.AnimatedSwitcher.new({duration: home$._kFrontLayerSwitchDuration, switchOutCurve: switchOutCurve, switchInCurve: switchInCurve, layoutBuilder: centerHome ? home$._GalleryHomeState._centerHomeLayout : C181 || CT.C181, child: this[_category] != null ? new home$._DemosPage.new(this[_category], {$creationLocationd_0dea112b090073317d4: C182 || CT.C182}) : new home$._CategoriesPage.new({categories: demos.kAllGalleryDemoCategories, onCategoryTap: dart.fn(category => {
                    this.setState(dart.fn(() => this[_category] = category, VoidToGalleryDemoCategory()));
                  }, GalleryDemoCategoryToNull()), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), $creationLocationd_0dea112b090073317d4: C196 || CT.C196}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212});
      if (!dart.test(dart.fn(() => {
        home$.GalleryHome.showPreviewBanner = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/home.dart", 396, 12, "() {\r\n      GalleryHome.showPreviewBanner = false;\r\n      return true;\r\n    }()");
      if (dart.test(home$.GalleryHome.showPreviewBanner)) {
        home = new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([home, new transitions.FadeTransition.new({opacity: new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOut}), child: C217 || CT.C217, $creationLocationd_0dea112b090073317d4: C223 || CT.C223})]), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
      }
      home = new (AnnotatedRegionOfSystemUiOverlayStyle()).new({child: home, value: system_chrome.SystemUiOverlayStyle.light, $creationLocationd_0dea112b090073317d4: C231 || CT.C231});
      return home;
    }
  };
  (home$._GalleryHomeState.new = function() {
    this[_controller] = null;
    this[_category] = null;
    home$._GalleryHomeState.__proto__.new.call(this);
    ;
  }).prototype = home$._GalleryHomeState.prototype;
  dart.addTypeTests(home$._GalleryHomeState);
  dart.setMethodSignature(home$._GalleryHomeState, () => ({
    __proto__: dart.getMethods(home$._GalleryHomeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home$._GalleryHomeState, "package:flutter_web.examples.gallery/gallery/home.dart");
  dart.setFieldSignature(home$._GalleryHomeState, () => ({
    __proto__: dart.getFields(home$._GalleryHomeState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_category]: dart.fieldType(demos.GalleryDemoCategory)
  }));
  dart.defineLazy(home$._GalleryHomeState, {
    /*home$._GalleryHomeState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    },
    /*home$._GalleryHomeState._centerHomeLayout*/get _centerHomeLayout() {
      return C235 || CT.C235;
    }
  });
  let C236;
  let C237;
  dart.defineLazy(home$, {
    /*home$._kFlutterBlue*/get _kFlutterBlue() {
      return C236 || CT.C236;
    },
    /*home$._kDemoItemHeight*/get _kDemoItemHeight() {
      return 64;
    },
    /*home$._kFrontLayerSwitchDuration*/get _kFrontLayerSwitchDuration() {
      return C237 || CT.C237;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/home", {
    "package:flutter_web.examples.gallery/gallery/home.dart": home$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"home.ddc.js"}');
  // Exports:
  return {
    gallery__home: home$
  };
});

//# sourceMappingURL=home.ddc.js.map
