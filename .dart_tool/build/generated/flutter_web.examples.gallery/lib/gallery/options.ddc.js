define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web.examples.gallery/gallery/scales', 'packages/flutter_web.examples.gallery/gallery/themes', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/about'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__src__foundation__assertions, packages__flutter_web$46examples$46gallery__gallery__scales, packages__flutter_web$46examples$46gallery__gallery__themes, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__about) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const scales = packages__flutter_web$46examples$46gallery__gallery__scales.gallery__scales;
  const themes = packages__flutter_web$46examples$46gallery__gallery__themes.gallery__themes;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box = packages__flutter_web__animation.src__rendering__box;
  const text = packages__flutter_web__animation.src__widgets__text;
  const paragraph = packages__flutter_web__animation.src__rendering__paragraph;
  const icon_theme = packages__flutter_web__animation.src__widgets__icon_theme;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const $switch = packages__flutter_web__material.src__material__switch;
  const colors = packages__flutter_web__material.src__material__colors;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const divider = packages__flutter_web__material.src__material__divider;
  const about = packages__flutter_web$46examples$46gallery__gallery__about.gallery__about;
  const options$ = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let PopupMenuButtonOfGalleryTextScaleValue = () => (PopupMenuButtonOfGalleryTextScaleValue = dart.constFn(popup_menu.PopupMenuButton$(scales.GalleryTextScaleValue)))();
  let PopupMenuItemOfGalleryTextScaleValue = () => (PopupMenuItemOfGalleryTextScaleValue = dart.constFn(popup_menu.PopupMenuItem$(scales.GalleryTextScaleValue)))();
  let GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue = () => (GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue = dart.constFn(dart.fnType(PopupMenuItemOfGalleryTextScaleValue(), [scales.GalleryTextScaleValue])))();
  let ListOfPopupMenuItemOfGalleryTextScaleValue = () => (ListOfPopupMenuItemOfGalleryTextScaleValue = dart.constFn(core.List$(PopupMenuItemOfGalleryTextScaleValue())))();
  let BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue = () => (BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue = dart.constFn(dart.fnType(ListOfPopupMenuItemOfGalleryTextScaleValue(), [framework.BuildContext])))();
  let GalleryTextScaleValueToNull = () => (GalleryTextScaleValueToNull = dart.constFn(dart.fnType(core.Null, [scales.GalleryTextScaleValue])))();
  let PopupMenuButtonOfTargetPlatform = () => (PopupMenuButtonOfTargetPlatform = dart.constFn(popup_menu.PopupMenuButton$(platform.TargetPlatform)))();
  let PopupMenuItemOfTargetPlatform = () => (PopupMenuItemOfTargetPlatform = dart.constFn(popup_menu.PopupMenuItem$(platform.TargetPlatform)))();
  let TargetPlatformToPopupMenuItemOfTargetPlatform = () => (TargetPlatformToPopupMenuItemOfTargetPlatform = dart.constFn(dart.fnType(PopupMenuItemOfTargetPlatform(), [platform.TargetPlatform])))();
  let ListOfPopupMenuItemOfTargetPlatform = () => (ListOfPopupMenuItemOfTargetPlatform = dart.constFn(core.List$(PopupMenuItemOfTargetPlatform())))();
  let BuildContextToListOfPopupMenuItemOfTargetPlatform = () => (BuildContextToListOfPopupMenuItemOfTargetPlatform = dart.constFn(dart.fnType(ListOfPopupMenuItemOfTargetPlatform(), [framework.BuildContext])))();
  let TargetPlatformToNull = () => (TargetPlatformToNull = dart.constFn(dart.fnType(core.Null, [platform.TargetPlatform])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 104,
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
        [_Location_column]: 12,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
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
        [_Location_column]: 27,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 137,
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
        [_Location_column]: 11,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281978621.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeTrackColor",
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 136,
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
        [_Location_column]: 14,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 135,
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
        [_Location_column]: 12,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 162,
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
        [_Location_column]: 16,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 160,
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
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 179,
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
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 11,
        [_Location_line]: 203,
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
        [_Location_column]: 16,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 201,
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
        [_Location_column]: 14,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "dark_theme"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchKey",
        [_Location_column]: 7,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
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
        [Text_data]: "Text size"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional__bottom]: 0,
        [EdgeInsetsDirectional__end]: 16,
        [EdgeInsetsDirectional__top]: 0,
        [EdgeInsetsDirectional__start]: 0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58821
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C94 || CT.C94
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 265,
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
        [_Location_column]: 24,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 242,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 242,
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
        [_Location_column]: 12,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "text_direction"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 29,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchKey",
        [_Location_column]: 7,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: ValueKeyOfString().prototype,
        [ValueKey_value]: "slow_motion"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 28,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "switchKey",
        [_Location_column]: 7,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.android",
        index: 0
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C131() {
      return C131 = dart.const({
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
        [Text_data]: "Platform mechanics"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 352,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 351,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
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
        [_Location_column]: 26,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 368,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 13,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 349,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 349,
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
        [_Location_column]: 12,
        [_Location_line]: 348,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C162() {
      return C162 = dart.constList([], framework.Widget);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_indent]: 0,
        [Divider_height]: 16
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [text$0]: "Diagnostics"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 54,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 412,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 421,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 124,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [text$0]: "Display"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 22,
        [_Location_line]: 456,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 31,
        [_Location_line]: 456,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 32,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 41,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 457,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 30,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 39,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 458,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 29,
        [_Location_line]: 459,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 38,
        [_Location_line]: 459,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 459,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [text$0]: "Platform mechanics"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 25,
        [_Location_line]: 462,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 34,
        [_Location_line]: 462,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 462,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: options$._Heading.prototype,
        [Widget_key]: null,
        [text$0]: "Flutter Web gallery"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 27,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 56,
        [_Location_line]: 471,
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
        [_Location_column]: 15,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 27,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 44,
        [_Location_line]: 474,
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
        [_Location_column]: 15,
        [_Location_line]: 474,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 453,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 454,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 452,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 451,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 452,
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
        [_Location_column]: 12,
        [_Location_line]: 450,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: edge_insets.EdgeInsetsDirectional.prototype,
        [EdgeInsetsDirectional__bottom]: 0,
        [EdgeInsetsDirectional__end]: 0,
        [EdgeInsetsDirectional__top]: 0,
        [EdgeInsetsDirectional__start]: 56
      });
    }
  });
  const _name = dart.privateName(ui, "_name");
  let C0;
  const theme$0 = dart.privateName(options$, "GalleryOptions.theme");
  const textScaleFactor$ = dart.privateName(options$, "GalleryOptions.textScaleFactor");
  const textDirection$ = dart.privateName(options$, "GalleryOptions.textDirection");
  const timeDilation$ = dart.privateName(options$, "GalleryOptions.timeDilation");
  const platform$ = dart.privateName(options$, "GalleryOptions.platform");
  const showPerformanceOverlay$ = dart.privateName(options$, "GalleryOptions.showPerformanceOverlay");
  const showRasterCacheImagesCheckerboard$ = dart.privateName(options$, "GalleryOptions.showRasterCacheImagesCheckerboard");
  const showOffscreenLayersCheckerboard$ = dart.privateName(options$, "GalleryOptions.showOffscreenLayersCheckerboard");
  options$.GalleryOptions = class GalleryOptions extends core.Object {
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get timeDilation() {
      return this[timeDilation$];
    }
    set timeDilation(value) {
      super.timeDilation = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get showRasterCacheImagesCheckerboard() {
      return this[showRasterCacheImagesCheckerboard$];
    }
    set showRasterCacheImagesCheckerboard(value) {
      super.showRasterCacheImagesCheckerboard = value;
    }
    get showOffscreenLayersCheckerboard() {
      return this[showOffscreenLayersCheckerboard$];
    }
    set showOffscreenLayersCheckerboard(value) {
      super.showOffscreenLayersCheckerboard = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let timeDilation = opts && 'timeDilation' in opts ? opts.timeDilation : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : null;
      let showRasterCacheImagesCheckerboard = opts && 'showRasterCacheImagesCheckerboard' in opts ? opts.showRasterCacheImagesCheckerboard : null;
      let showOffscreenLayersCheckerboard = opts && 'showOffscreenLayersCheckerboard' in opts ? opts.showOffscreenLayersCheckerboard : null;
      return new options$.GalleryOptions.new({theme: (t0 = theme, t0 == null ? this.theme : t0), textScaleFactor: (t0$ = textScaleFactor, t0$ == null ? this.textScaleFactor : t0$), textDirection: (t0$0 = textDirection, t0$0 == null ? this.textDirection : t0$0), timeDilation: (t0$1 = timeDilation, t0$1 == null ? this.timeDilation : t0$1), platform: (t0$2 = platform, t0$2 == null ? this.platform : t0$2), showPerformanceOverlay: (t0$3 = showPerformanceOverlay, t0$3 == null ? this.showPerformanceOverlay : t0$3), showOffscreenLayersCheckerboard: (t0$4 = showOffscreenLayersCheckerboard, t0$4 == null ? this.showOffscreenLayersCheckerboard : t0$4), showRasterCacheImagesCheckerboard: (t0$5 = showRasterCacheImagesCheckerboard, t0$5 == null ? this.showRasterCacheImagesCheckerboard : t0$5)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = options$.GalleryOptions._check(other);
      return dart.equals(this.theme, typedOther.theme) && dart.equals(this.textScaleFactor, typedOther.textScaleFactor) && dart.equals(this.textDirection, typedOther.textDirection) && dart.equals(this.platform, typedOther.platform) && dart.equals(this.showPerformanceOverlay, typedOther.showPerformanceOverlay) && dart.equals(this.showRasterCacheImagesCheckerboard, typedOther.showRasterCacheImagesCheckerboard) && dart.equals(this.showOffscreenLayersCheckerboard, typedOther.showRasterCacheImagesCheckerboard);
    }
    get hashCode() {
      return ui.hashValues(this.theme, this.textScaleFactor, this.textDirection, this.timeDilation, this.platform, this.showPerformanceOverlay, this.showRasterCacheImagesCheckerboard, this.showOffscreenLayersCheckerboard);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.theme) + ")";
    }
  };
  (options$.GalleryOptions.new = function(opts) {
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : C0 || CT.C0;
    let timeDilation = opts && 'timeDilation' in opts ? opts.timeDilation : 1;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    let showOffscreenLayersCheckerboard = opts && 'showOffscreenLayersCheckerboard' in opts ? opts.showOffscreenLayersCheckerboard : false;
    let showRasterCacheImagesCheckerboard = opts && 'showRasterCacheImagesCheckerboard' in opts ? opts.showRasterCacheImagesCheckerboard : false;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    this[theme$0] = theme;
    this[textScaleFactor$] = textScaleFactor;
    this[textDirection$] = textDirection;
    this[timeDilation$] = timeDilation;
    this[platform$] = platform;
    this[showOffscreenLayersCheckerboard$] = showOffscreenLayersCheckerboard;
    this[showRasterCacheImagesCheckerboard$] = showRasterCacheImagesCheckerboard;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    ;
  }).prototype = options$.GalleryOptions.prototype;
  dart.addTypeTests(options$.GalleryOptions);
  dart.setMethodSignature(options$.GalleryOptions, () => ({
    __proto__: dart.getMethods(options$.GalleryOptions.__proto__),
    copyWith: dart.fnType(options$.GalleryOptions, [], {platform: platform.TargetPlatform, showOffscreenLayersCheckerboard: core.bool, showPerformanceOverlay: core.bool, showRasterCacheImagesCheckerboard: core.bool, textDirection: ui.TextDirection, textScaleFactor: scales.GalleryTextScaleValue, theme: themes.GalleryTheme, timeDilation: core.double}, {})
  }));
  dart.setLibraryUri(options$.GalleryOptions, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$.GalleryOptions, () => ({
    __proto__: dart.getFields(options$.GalleryOptions.__proto__),
    theme: dart.finalFieldType(themes.GalleryTheme),
    textScaleFactor: dart.finalFieldType(scales.GalleryTextScaleValue),
    textDirection: dart.finalFieldType(ui.TextDirection),
    timeDilation: dart.finalFieldType(core.double),
    platform: dart.finalFieldType(platform.TargetPlatform),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    showRasterCacheImagesCheckerboard: dart.finalFieldType(core.bool),
    showOffscreenLayersCheckerboard: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(options$.GalleryOptions, ['_equals', 'toString']);
  dart.defineExtensionAccessors(options$.GalleryOptions, ['hashCode']);
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C9;
  let C10;
  let C6;
  let C5;
  let C13;
  let C14;
  let C15;
  let C16;
  let C12;
  let C11;
  let C19;
  let C18;
  let C17;
  const child$ = dart.privateName(options$, "_OptionsItem.child");
  options$._OptionsItem = class _OptionsItem extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let textScaleFactor = media_query.MediaQuery.textScaleFactorOf(context);
      return new basic.MergeSemantics.new({child: new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 48 * dart.notNull(textScaleFactor)}), padding: options$._kItemPadding, alignment: alignment.AlignmentDirectional.centerStart, child: new text.DefaultTextStyle.new({style: text.DefaultTextStyle.of(context).style, maxLines: 2, overflow: paragraph.TextOverflow.fade, child: new icon_theme.IconTheme.new({data: theme$.Theme.of(context).primaryIconTheme, child: this.child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (options$._OptionsItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    options$._OptionsItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._OptionsItem.prototype;
  dart.addTypeTests(options$._OptionsItem);
  dart.setMethodSignature(options$._OptionsItem, () => ({
    __proto__: dart.getMethods(options$._OptionsItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._OptionsItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._OptionsItem, () => ({
    __proto__: dart.getFields(options$._OptionsItem.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  const Color__value = dart.privateName(ui, "Color._value");
  let C26;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C28;
  let C27;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  const title$ = dart.privateName(options$, "_BooleanItem.title");
  const value$ = dart.privateName(options$, "_BooleanItem.value");
  const onChanged$ = dart.privateName(options$, "_BooleanItem.onChanged");
  const switchKey$ = dart.privateName(options$, "_BooleanItem.switchKey");
  options$._BooleanItem = class _BooleanItem extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get switchKey() {
      return this[switchKey$];
    }
    set switchKey(value) {
      super.switchKey = value;
    }
    build(context) {
      let isDark = dart.equals(theme$.Theme.of(context).brightness, ui.Brightness.dark);
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new $switch.Switch.new({key: this.switchKey, value: this.value, onChanged: this.onChanged, activeColor: C26 || CT.C26, activeTrackColor: isDark ? colors.Colors.white30 : colors.Colors.black26, $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
  };
  (options$._BooleanItem.new = function(title, value, onChanged, opts) {
    let switchKey = opts && 'switchKey' in opts ? opts.switchKey : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[value$] = value;
    this[onChanged$] = onChanged;
    this[switchKey$] = switchKey;
    options$._BooleanItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._BooleanItem.prototype;
  dart.addTypeTests(options$._BooleanItem);
  dart.setMethodSignature(options$._BooleanItem, () => ({
    __proto__: dart.getMethods(options$._BooleanItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._BooleanItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._BooleanItem, () => ({
    __proto__: dart.getFields(options$._BooleanItem.__proto__),
    title: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    switchKey: dart.finalFieldType(key.Key)
  }));
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  const text$ = dart.privateName(options$, "_ActionItem.text");
  const onTap$ = dart.privateName(options$, "_ActionItem.onTap");
  options$._ActionItem = class _ActionItem extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new options$._FlatButton.new({onPressed: this.onTap, child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (options$._ActionItem.new = function(text, onTap, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onTap$] = onTap;
    options$._ActionItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._ActionItem.prototype;
  dart.addTypeTests(options$._ActionItem);
  dart.setMethodSignature(options$._ActionItem, () => ({
    __proto__: dart.getMethods(options$._ActionItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._ActionItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._ActionItem, () => ({
    __proto__: dart.getFields(options$._ActionItem.__proto__),
    text: dart.finalFieldType(core.String),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  const onPressed$ = dart.privateName(options$, "_FlatButton.onPressed");
  const child$0 = dart.privateName(options$, "_FlatButton.child");
  options$._FlatButton = class _FlatButton extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new flat_button.FlatButton.new({padding: edge_insets.EdgeInsets.zero, onPressed: this.onPressed, child: new text.DefaultTextStyle.new({style: theme$.Theme.of(context).primaryTextTheme.subhead, child: this.child, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
  };
  (options$._FlatButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[child$0] = child;
    options$._FlatButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._FlatButton.prototype;
  dart.addTypeTests(options$._FlatButton);
  dart.setMethodSignature(options$._FlatButton, () => ({
    __proto__: dart.getMethods(options$._FlatButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._FlatButton, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._FlatButton, () => ({
    __proto__: dart.getFields(options$._FlatButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C71;
  let C70;
  const text$0 = dart.privateName(options$, "_Heading.text");
  options$._Heading = class _Heading extends framework.StatelessWidget {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      return new options$._OptionsItem.new({child: new text.DefaultTextStyle.new({style: theme.textTheme.body1.copyWith({fontFamily: "GoogleSans", color: theme.accentColor}), child: new basic.Semantics.new({child: new text.Text.new(this.text, {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), header: true, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
  };
  (options$._Heading.new = function(text, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$0] = text;
    options$._Heading.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._Heading.prototype;
  dart.addTypeTests(options$._Heading);
  dart.setMethodSignature(options$._Heading, () => ({
    __proto__: dart.getMethods(options$._Heading.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._Heading, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._Heading, () => ({
    __proto__: dart.getFields(options$._Heading.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  const ValueKey_value = dart.privateName(key, "ValueKey.value");
  let C73;
  let C76;
  let C77;
  let C78;
  let C79;
  let C75;
  let C74;
  const options$0 = dart.privateName(options$, "_ThemeItem.options");
  const onOptionsChanged$ = dart.privateName(options$, "_ThemeItem.onOptionsChanged");
  options$._ThemeItem = class _ThemeItem extends framework.StatelessWidget {
    get options() {
      return this[options$0];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._BooleanItem.new("Dark Theme", dart.equals(this.options.theme, themes.kDarkGalleryTheme), dart.fn(value => {
        this.onOptionsChanged(this.options.copyWith({theme: dart.test(value) ? themes.kDarkGalleryTheme : themes.kLightGalleryTheme}));
      }, boolToNull()), {switchKey: C73 || CT.C73, $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
  };
  (options$._ThemeItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$0] = options;
    this[onOptionsChanged$] = onOptionsChanged;
    options$._ThemeItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._ThemeItem.prototype;
  dart.addTypeTests(options$._ThemeItem);
  dart.setMethodSignature(options$._ThemeItem, () => ({
    __proto__: dart.getMethods(options$._ThemeItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._ThemeItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._ThemeItem, () => ({
    __proto__: dart.getFields(options$._ThemeItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
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
  let C80;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  const EdgeInsetsDirectional__bottom = dart.privateName(edge_insets, "EdgeInsetsDirectional._bottom");
  const EdgeInsetsDirectional__end = dart.privateName(edge_insets, "EdgeInsetsDirectional._end");
  const EdgeInsetsDirectional__top = dart.privateName(edge_insets, "EdgeInsetsDirectional._top");
  const EdgeInsetsDirectional__start = dart.privateName(edge_insets, "EdgeInsetsDirectional._start");
  let C92;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C94;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C93;
  let C97;
  let C96;
  let C95;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C106;
  let C107;
  let C103;
  let C102;
  let C110;
  let C109;
  let C108;
  let C113;
  let C112;
  let C111;
  const options$1 = dart.privateName(options$, "_TextScaleFactorItem.options");
  const onOptionsChanged$0 = dart.privateName(options$, "_TextScaleFactorItem.onOptionsChanged");
  options$._TextScaleFactorItem = class _TextScaleFactorItem extends framework.StatelessWidget {
    get options() {
      return this[options$1];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$0];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([C80 || CT.C80, new text.Text.new(dart.str(this.options.textScaleFactor.label), {style: theme$.Theme.of(context).primaryTextTheme.body1, $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new (PopupMenuButtonOfGalleryTextScaleValue()).new({padding: C92 || CT.C92, icon: C93 || CT.C93, itemBuilder: dart.fn(context => scales.kAllGalleryTextScaleValues[$map](PopupMenuItemOfGalleryTextScaleValue(), dart.fn(scaleValue => new (PopupMenuItemOfGalleryTextScaleValue()).new({value: scaleValue, child: new text.Text.new(scaleValue.label, {$creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), GalleryTextScaleValueToPopupMenuItemOfGalleryTextScaleValue()))[$toList](), BuildContextToListOfPopupMenuItemOfGalleryTextScaleValue()), onSelected: dart.fn(scaleValue => {
                this.onOptionsChanged(this.options.copyWith({textScaleFactor: scaleValue}));
              }, GalleryTextScaleValueToNull()), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111});
    }
  };
  (options$._TextScaleFactorItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$1] = options;
    this[onOptionsChanged$0] = onOptionsChanged;
    options$._TextScaleFactorItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TextScaleFactorItem.prototype;
  dart.addTypeTests(options$._TextScaleFactorItem);
  dart.setMethodSignature(options$._TextScaleFactorItem, () => ({
    __proto__: dart.getMethods(options$._TextScaleFactorItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TextScaleFactorItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TextScaleFactorItem, () => ({
    __proto__: dart.getFields(options$._TextScaleFactorItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  let C114;
  let C117;
  let C118;
  let C119;
  let C120;
  let C116;
  let C115;
  const options$2 = dart.privateName(options$, "_TextDirectionItem.options");
  const onOptionsChanged$1 = dart.privateName(options$, "_TextDirectionItem.onOptionsChanged");
  options$._TextDirectionItem = class _TextDirectionItem extends framework.StatelessWidget {
    get options() {
      return this[options$2];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$1];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._BooleanItem.new("Force RTL", dart.equals(this.options.textDirection, ui.TextDirection.rtl), dart.fn(value => {
        this.onOptionsChanged(this.options.copyWith({textDirection: dart.test(value) ? ui.TextDirection.rtl : ui.TextDirection.ltr}));
      }, boolToNull()), {switchKey: C114 || CT.C114, $creationLocationd_0dea112b090073317d4: C115 || CT.C115});
    }
  };
  (options$._TextDirectionItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$2] = options;
    this[onOptionsChanged$1] = onOptionsChanged;
    options$._TextDirectionItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TextDirectionItem.prototype;
  dart.addTypeTests(options$._TextDirectionItem);
  dart.setMethodSignature(options$._TextDirectionItem, () => ({
    __proto__: dart.getMethods(options$._TextDirectionItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TextDirectionItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TextDirectionItem, () => ({
    __proto__: dart.getFields(options$._TextDirectionItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  let C121;
  let C124;
  let C125;
  let C126;
  let C127;
  let C123;
  let C122;
  const options$3 = dart.privateName(options$, "_TimeDilationItem.options");
  const onOptionsChanged$2 = dart.privateName(options$, "_TimeDilationItem.onOptionsChanged");
  options$._TimeDilationItem = class _TimeDilationItem extends framework.StatelessWidget {
    get options() {
      return this[options$3];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$2];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    build(context) {
      return new options$._BooleanItem.new("Slow motion", this.options.timeDilation !== 1.0, dart.fn(value => {
        this.onOptionsChanged(this.options.copyWith({timeDilation: dart.test(value) ? 20.0 : 1.0}));
      }, boolToNull()), {switchKey: C121 || CT.C121, $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
    }
  };
  (options$._TimeDilationItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$3] = options;
    this[onOptionsChanged$2] = onOptionsChanged;
    options$._TimeDilationItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._TimeDilationItem.prototype;
  dart.addTypeTests(options$._TimeDilationItem);
  dart.setMethodSignature(options$._TimeDilationItem, () => ({
    __proto__: dart.getMethods(options$._TimeDilationItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._TimeDilationItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._TimeDilationItem, () => ({
    __proto__: dart.getFields(options$._TimeDilationItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  const _name$ = dart.privateName(platform, "_name");
  let C128;
  let C129;
  let C130;
  const _platformLabel = dart.privateName(options$, "_platformLabel");
  let C131;
  let C134;
  let C135;
  let C133;
  let C132;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C141;
  let C140;
  let C145;
  let C144;
  let C143;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C153;
  let C154;
  let C155;
  let C151;
  let C150;
  let C158;
  let C157;
  let C156;
  let C161;
  let C160;
  let C159;
  const options$4 = dart.privateName(options$, "_PlatformItem.options");
  const onOptionsChanged$3 = dart.privateName(options$, "_PlatformItem.onOptionsChanged");
  options$._PlatformItem = class _PlatformItem extends framework.StatelessWidget {
    get options() {
      return this[options$4];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$3];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    [_platformLabel](platform) {
      switch (platform) {
        case C128 || CT.C128:
        {
          return "Mountain View";
        }
        case C129 || CT.C129:
        {
          return "Fuchsia";
        }
        case C130 || CT.C130:
        {
          return "Cupertino";
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/options.dart", 342, 12, "false");
      return null;
    }
    build(context) {
      return new options$._OptionsItem.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([C131 || CT.C131, new text.Text.new(dart.str(this[_platformLabel](this.options.platform)), {style: theme$.Theme.of(context).primaryTextTheme.body1, $creationLocationd_0dea112b090073317d4: C132 || CT.C132})]), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), new (PopupMenuButtonOfTargetPlatform()).new({padding: C92 || CT.C92, icon: C93 || CT.C93, itemBuilder: dart.fn(context => platform.TargetPlatform.values[$map](PopupMenuItemOfTargetPlatform(), dart.fn(platform => new (PopupMenuItemOfTargetPlatform()).new({value: platform, child: new text.Text.new(this[_platformLabel](platform), {$creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), TargetPlatformToPopupMenuItemOfTargetPlatform()))[$toList](), BuildContextToListOfPopupMenuItemOfTargetPlatform()), onSelected: dart.fn(platform => {
                this.onOptionsChanged(this.options.copyWith({platform: platform}));
              }, TargetPlatformToNull()), $creationLocationd_0dea112b090073317d4: C150 || CT.C150})]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159});
    }
  };
  (options$._PlatformItem.new = function(options, onOptionsChanged, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$4] = options;
    this[onOptionsChanged$3] = onOptionsChanged;
    options$._PlatformItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$._PlatformItem.prototype;
  dart.addTypeTests(options$._PlatformItem);
  dart.setMethodSignature(options$._PlatformItem, () => ({
    __proto__: dart.getMethods(options$._PlatformItem.__proto__),
    [_platformLabel]: dart.fnType(core.String, [platform.TargetPlatform]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$._PlatformItem, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$._PlatformItem, () => ({
    __proto__: dart.getFields(options$._PlatformItem.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions]))
  }));
  let C162;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C163;
  let C164;
  let C167;
  let C168;
  let C169;
  let C166;
  let C165;
  let C172;
  let C173;
  let C174;
  let C171;
  let C170;
  let C177;
  let C178;
  let C179;
  let C176;
  let C175;
  const _enabledDiagnosticItems = dart.privateName(options$, "_enabledDiagnosticItems");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C180;
  let C181;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C193;
  let C191;
  let C190;
  let C196;
  let C197;
  let C195;
  let C194;
  let C198;
  let C201;
  let C202;
  let C200;
  let C199;
  let C203;
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
  let C213;
  let C212;
  let C218;
  let C219;
  let C217;
  let C216;
  const options$5 = dart.privateName(options$, "GalleryOptionsPage.options");
  const onOptionsChanged$4 = dart.privateName(options$, "GalleryOptionsPage.onOptionsChanged");
  const onSendFeedback$ = dart.privateName(options$, "GalleryOptionsPage.onSendFeedback");
  options$.GalleryOptionsPage = class GalleryOptionsPage extends framework.StatelessWidget {
    get options() {
      return this[options$5];
    }
    set options(value) {
      super.options = value;
    }
    get onOptionsChanged() {
      return this[onOptionsChanged$4];
    }
    set onOptionsChanged(value) {
      super.onOptionsChanged = value;
    }
    get onSendFeedback() {
      return this[onSendFeedback$];
    }
    set onSendFeedback(value) {
      super.onSendFeedback = value;
    }
    [_enabledDiagnosticItems]() {
      let t0, t0$;
      if (dart.test((t0$ = (t0 = null == this.options.showOffscreenLayersCheckerboard, t0 === null ? this.options.showRasterCacheImagesCheckerboard : t0), t0$ == null ? this.options.showPerformanceOverlay : t0$))) return C162 || CT.C162;
      let items = JSArrayOfWidget().of([C163 || CT.C163, C164 || CT.C164]);
      if (this.options.showOffscreenLayersCheckerboard != null) {
        items[$add](new options$._BooleanItem.new("Highlight offscreen layers", this.options.showOffscreenLayersCheckerboard, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showOffscreenLayersCheckerboard: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C165 || CT.C165}));
      }
      if (this.options.showRasterCacheImagesCheckerboard != null) {
        items[$add](new options$._BooleanItem.new("Highlight raster cache images", this.options.showRasterCacheImagesCheckerboard, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showRasterCacheImagesCheckerboard: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C170 || CT.C170}));
      }
      if (this.options.showPerformanceOverlay != null) {
        items[$add](new options$._BooleanItem.new("Show performance overlay", this.options.showPerformanceOverlay, dart.fn(value => {
          this.onOptionsChanged(this.options.copyWith({showPerformanceOverlay: value}));
        }, boolToNull()), {$creationLocationd_0dea112b090073317d4: C175 || CT.C175}));
      }
      return items;
    }
    build(context) {
      let t0;
      let theme = theme$.Theme.of(context);
      return new text.DefaultTextStyle.new({style: theme.primaryTextTheme.subhead, child: new scroll_view.ListView.new({padding: C180 || CT.C180, children: (t0 = JSArrayOfWidget().of([C181 || CT.C181, new options$._ThemeItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C182 || CT.C182}), new options$._TextScaleFactorItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C186 || CT.C186}), new options$._TextDirectionItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C190 || CT.C190}), new options$._TimeDilationItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C194 || CT.C194}), C163 || CT.C163, C198 || CT.C198, new options$._PlatformItem.new(this.options, this.onOptionsChanged, {$creationLocationd_0dea112b090073317d4: C199 || CT.C199})]), t0[$addAll](this[_enabledDiagnosticItems]()), t0[$addAll](JSArrayOfWidget().of([C163 || CT.C163, C203 || CT.C203, new options$._ActionItem.new("About Flutter Web Gallery", dart.fn(() => {
              about.showGalleryAboutDialog(context);
            }, VoidToNull()), {$creationLocationd_0dea112b090073317d4: C204 || CT.C204}), new options$._ActionItem.new("Send feedback", this.onSendFeedback, {$creationLocationd_0dea112b090073317d4: C208 || CT.C208})])), t0), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), $creationLocationd_0dea112b090073317d4: C216 || CT.C216});
    }
  };
  (options$.GalleryOptionsPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let onOptionsChanged = opts && 'onOptionsChanged' in opts ? opts.onOptionsChanged : null;
    let onSendFeedback = opts && 'onSendFeedback' in opts ? opts.onSendFeedback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[options$5] = options;
    this[onOptionsChanged$4] = onOptionsChanged;
    this[onSendFeedback$] = onSendFeedback;
    options$.GalleryOptionsPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = options$.GalleryOptionsPage.prototype;
  dart.addTypeTests(options$.GalleryOptionsPage);
  dart.setMethodSignature(options$.GalleryOptionsPage, () => ({
    __proto__: dart.getMethods(options$.GalleryOptionsPage.__proto__),
    [_enabledDiagnosticItems]: dart.fnType(core.List$(framework.Widget), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(options$.GalleryOptionsPage, "package:flutter_web.examples.gallery/gallery/options.dart");
  dart.setFieldSignature(options$.GalleryOptionsPage, () => ({
    __proto__: dart.getFields(options$.GalleryOptionsPage.__proto__),
    options: dart.finalFieldType(options$.GalleryOptions),
    onOptionsChanged: dart.finalFieldType(dart.fnType(dart.void, [options$.GalleryOptions])),
    onSendFeedback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  let C220;
  dart.defineLazy(options$, {
    /*options$._kItemHeight*/get _kItemHeight() {
      return 48;
    },
    /*options$._kItemPadding*/get _kItemPadding() {
      return C220 || CT.C220;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/options", {
    "package:flutter_web.examples.gallery/gallery/options.dart": options$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["options.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"options.ddc.js"}');
  // Exports:
  return {
    gallery__options: options$
  };
});

//# sourceMappingURL=options.ddc.js.map
