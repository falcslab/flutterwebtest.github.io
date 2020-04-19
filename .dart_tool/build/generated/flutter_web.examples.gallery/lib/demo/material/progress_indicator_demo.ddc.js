define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const progress_indicator = packages__flutter_web__material.src__material__progress_indicator;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const theme = packages__flutter_web__material.src__material__theme;
  const ui = packages__flutter_web_ui__ui.ui;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const progress_indicator_demo = Object.create(dart.library);
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let WidgetToContainer = () => (WidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1500000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 0.9,
        [Interval_begin]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.reverse",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_name]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: progress_indicator.LinearProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C8 || CT.C8,
        [SizedBox_height]: null,
        [SizedBox_width]: 200
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 48,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 80,
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
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 85,
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
        [_Location_column]: 20,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 84,
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
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 15,
        [EdgeInsets__right]: 20,
        [EdgeInsets__top]: 15,
        [EdgeInsets__left]: 20
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 91,
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
        [_Location_column]: 12,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
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
        [Text_data]: "Progress indicators"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 65,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 12,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 12,
        [EdgeInsets__left]: 8
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 23,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 46,
        [_Location_line]: 123,
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
        [_Location_column]: 26,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 113,
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
        [_Location_column]: 18,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart"
      });
    }
  });
  progress_indicator_demo.ProgressIndicatorDemo = class ProgressIndicatorDemo extends framework.StatefulWidget {
    createState() {
      return new progress_indicator_demo._ProgressIndicatorDemoState.new();
    }
  };
  (progress_indicator_demo.ProgressIndicatorDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    progress_indicator_demo.ProgressIndicatorDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = progress_indicator_demo.ProgressIndicatorDemo.prototype;
  dart.addTypeTests(progress_indicator_demo.ProgressIndicatorDemo);
  dart.setMethodSignature(progress_indicator_demo.ProgressIndicatorDemo, () => ({
    __proto__: dart.getMethods(progress_indicator_demo.ProgressIndicatorDemo.__proto__),
    createState: dart.fnType(progress_indicator_demo._ProgressIndicatorDemoState, [])
  }));
  dart.setLibraryUri(progress_indicator_demo.ProgressIndicatorDemo, "package:flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart");
  dart.defineLazy(progress_indicator_demo.ProgressIndicatorDemo, {
    /*progress_indicator_demo.ProgressIndicatorDemo.routeName*/get routeName() {
      return "/material/progress-indicator";
    }
  });
  const _controller = dart.privateName(progress_indicator_demo, "_controller");
  const _animation = dart.privateName(progress_indicator_demo, "_animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  const _name = dart.privateName(animation, "_name");
  let C3;
  let C4;
  let C5;
  let C6;
  const _handleTap = dart.privateName(progress_indicator_demo, "_handleTap");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  const ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  const ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  const ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  const ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  let C8;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C7;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C11;
  let C10;
  let C9;
  const CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  let C12;
  let C15;
  let C14;
  let C13;
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
  let C29;
  let C26;
  let C25;
  let C32;
  let C33;
  let C31;
  let C30;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C34;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  const _buildIndicators = dart.privateName(progress_indicator_demo, "_buildIndicators");
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
  let C42;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C47;
  let C46;
  let C50;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C74;
  let C73;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C80;
  let C79;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(progress_indicator_demo.ProgressIndicatorDemo) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(progress_indicator_demo.ProgressIndicatorDemo)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(progress_indicator_demo.ProgressIndicatorDemo));
  progress_indicator_demo._ProgressIndicatorDemoState = class _ProgressIndicatorDemoState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0 = new animation_controller.AnimationController.new({duration: C0 || CT.C0, vsync: this, animationBehavior: animation_controller.AnimationBehavior.preserve}), t0.forward(), t0);
      this[_animation] = (t0$ = new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1, reverseCurve: curves.Curves.fastOutSlowIn}), t0$.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.dismissed))
          this[_controller].forward();
        else if (dart.equals(status, animation.AnimationStatus.completed)) this[_controller].reverse();
      }, AnimationStatusToNull())), t0$);
    }
    dispose() {
      this[_controller].stop();
      super.dispose();
    }
    [_handleTap]() {
      this.setState(dart.fn(() => {
        if (dart.test(this[_controller].isAnimating)) {
          this[_controller].stop();
        } else {
          switch (this[_controller].status) {
            case C3 || CT.C3:
            case C4 || CT.C4:
            {
              this[_controller].forward();
              break;
            }
            case C5 || CT.C5:
            case C6 || CT.C6:
            {
              this[_controller].reverse();
              break;
            }
          }
        }
      }, VoidToNull()));
    }
    [_buildIndicators](context, child) {
      let indicators = JSArrayOfWidget().of([C7 || CT.C7, C8 || CT.C8, C8 || CT.C8, new progress_indicator.LinearProgressIndicator.new({value: this[_animation].value, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([C12 || CT.C12, new basic.SizedBox.new({width: 20.0, height: 20.0, child: new progress_indicator.CircularProgressIndicator.new({value: this[_animation].value, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.SizedBox.new({width: 100.0, height: 20.0, child: new text.Text.new((dart.notNull(this[_animation].value) * 100.0)[$toStringAsFixed](1) + "%", {textAlign: ui.TextAlign.right, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]);
      return new basic.Column.new({children: indicators[$map](framework.Widget, dart.fn(c => new container.Container.new({child: c, margin: C34 || CT.C34, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), WidgetToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C42 || CT.C42, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/progress-indicator", {$creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), body: new basic.Center.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new text.DefaultTextStyle.new({style: theme.Theme.of(context).textTheme.title, child: new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _handleTap), behavior: proxy_box.HitTestBehavior.opaque, child: new safe_area.SafeArea.new({top: false, bottom: false, child: new container.Container.new({padding: C50 || CT.C50, child: new transitions.AnimatedBuilder.new({animation: this[_animation], builder: dart.bind(this, _buildIndicators), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (progress_indicator_demo._ProgressIndicatorDemoState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    progress_indicator_demo._ProgressIndicatorDemoState.__proto__.new.call(this);
    ;
  }).prototype = progress_indicator_demo._ProgressIndicatorDemoState.prototype;
  dart.addTypeTests(progress_indicator_demo._ProgressIndicatorDemoState);
  dart.setMethodSignature(progress_indicator_demo._ProgressIndicatorDemoState, () => ({
    __proto__: dart.getMethods(progress_indicator_demo._ProgressIndicatorDemoState.__proto__),
    [_handleTap]: dart.fnType(dart.void, []),
    [_buildIndicators]: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(progress_indicator_demo._ProgressIndicatorDemoState, "package:flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart");
  dart.setFieldSignature(progress_indicator_demo._ProgressIndicatorDemoState, () => ({
    __proto__: dart.getFields(progress_indicator_demo._ProgressIndicatorDemoState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo", {
    "package:flutter_web.examples.gallery/demo/material/progress_indicator_demo.dart": progress_indicator_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["progress_indicator_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY+C;IAA6B;;;;;;EAC5E;;;;;;;;MAJsB,uDAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaV,MAAX;AAKM,MAJZ,0BAAc,gFAEL,yBAC8B,mDACpC;AAUC,MARJ,0BAAa,4CACD,qDAEa,+BACrB,sBAAkB,QAAiB;AACnC,YAAW,YAAP,MAAM,EAAoB;AACP,UAArB,AAAY;YACT,KAAW,YAAP,MAAM,EAAoB,sCAAW,AAAY,AAAS;;IAEzE;;AAIoB,MAAlB,AAAY;AACG,MAAT;IACR;;AAmBI,MAhBF,cAAS;AAEP,sBAAI,AAAY;AACI,UAAlB,AAAY;;AAEZ,kBAAQ,AAAY;;;;AAGK,cAArB,AAAY;AACZ;;;;;AAGqB,cAArB,AAAY;AACZ;;;;;IAIV;uBAEqC,SAAgB;AAChC,uBAAqB,6DAItC,2DAA+B,AAAW,+EAC1C,sCACuC,8CACnB,qCAEhB,+BACW,cACC,aACD,6DAAiC,AAAW,0IACvD,+BACS,eACC,aACD,kBAAmC,AAAqB,CAA9B,aAAjB,AAAW,0BAAQ,yBAAuB,KAAG,iBACpC;AAKjC,YAAO,iCACK,AACL,AAIA,UALe,yBACH,QAAQ,KAAM,oCAChB,CAAC;IAKpB;UAG0B;AACxB,YAAO,oCACG,uDAEW,sBACf,wMAGE,6BACG,+DACE,sCACQ,AAAY,AAAU,eAAnB,OAAO,0BAChB,2DACE,6BACmB,yCACnB,iCACA,eACG,cACD,4DAGE,gDACQ,qCAAqB;IAQpD;;;IAjHoB;IACF;;;EAiHpB","file":"progress_indicator_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__progress_indicator_demo: progress_indicator_demo
  };
});

//# sourceMappingURL=progress_indicator_demo.ddc.js.map
