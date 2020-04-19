define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const object = packages__flutter_web__animation.src__rendering__object;
  const text_painter = packages__flutter_web__animation.src__painting__text_painter;
  const box = packages__flutter_web__animation.src__rendering__box;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const slider_theme = packages__flutter_web__material.src__material__slider_theme;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const slider = packages__flutter_web__material.src__material__slider;
  const colors = packages__flutter_web__material.src__material__colors;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const slider_demo = Object.create(dart.library);
  const $round = dartx.round;
  const $toString = dartx.toString;
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let doubleToNull = () => (doubleToNull = dart.constFn(dart.fnType(core.Null, [core.double])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let doubleToString = () => (doubleToString = dart.constFn(dart.fnType(core.String, [core.double])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 8,
        [OffsetBase__dx]: 8
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 6,
        [OffsetBase__dx]: 6
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 40,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 40
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "min",
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "max",
        [_Location_column]: 17,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
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
        [Text_data]: "Continuous"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 22,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 35,
        [_Location_line]: 179,
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
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 178,
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
        [_Location_column]: 11,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "min",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "max",
        [_Location_column]: 17,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "divisions",
        [_Location_column]: 17,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
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
        [Text_data]: "Discrete"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "min",
        [_Location_column]: 19,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "max",
        [_Location_column]: 19,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "divisions",
        [_Location_column]: 19,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticFormatterCallback",
        [_Location_column]: 19,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 19,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
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
        [Text_data]: "Discrete with Custom Theme"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/slider_demo.dart"
      });
    }
  });
  slider_demo.SliderDemo = class SliderDemo extends framework.StatefulWidget {
    createState() {
      return new slider_demo._SliderDemoState.new();
    }
  };
  (slider_demo.SliderDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    slider_demo.SliderDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = slider_demo.SliderDemo.prototype;
  dart.addTypeTests(slider_demo.SliderDemo);
  dart.setMethodSignature(slider_demo.SliderDemo, () => ({
    __proto__: dart.getMethods(slider_demo.SliderDemo.__proto__),
    createState: dart.fnType(slider_demo._SliderDemoState, [])
  }));
  dart.setLibraryUri(slider_demo.SliderDemo, "package:flutter_web.examples.gallery/demo/material/slider_demo.dart");
  dart.defineLazy(slider_demo.SliderDemo, {
    /*slider_demo.SliderDemo.routeName*/get routeName() {
      return "/material/slider";
    }
  });
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C0;
  let C1;
  slider_demo._CustomThumbShape = class _CustomThumbShape extends slider_theme.SliderComponentShape {
    getPreferredSize(isEnabled, isDiscrete) {
      return dart.test(isEnabled) ? C0 || CT.C0 : C1 || CT.C1;
    }
    paint(context, thumbCenter, opts) {
      let t0;
      let activationAnimation = opts && 'activationAnimation' in opts ? opts.activationAnimation : null;
      let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
      let isDiscrete = opts && 'isDiscrete' in opts ? opts.isDiscrete : null;
      let labelPainter = opts && 'labelPainter' in opts ? opts.labelPainter : null;
      let parentBox = opts && 'parentBox' in opts ? opts.parentBox : null;
      let sliderTheme = opts && 'sliderTheme' in opts ? opts.sliderTheme : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let canvas = context.canvas;
      let colorTween = new tween.ColorTween.new({begin: sliderTheme.disabledThumbColor, end: sliderTheme.thumbColor});
      let size = 4 * dart.notNull(slider_demo._CustomThumbShape.sizeTween.evaluate(enableAnimation));
      let thumbPath = slider_demo._triangle(size, thumbCenter);
      canvas.drawPath(thumbPath, (t0 = new ui.Paint.new(), t0.color = colorTween.evaluate(enableAnimation), t0));
    }
  };
  (slider_demo._CustomThumbShape.new = function() {
    slider_demo._CustomThumbShape.__proto__.new.call(this);
    ;
  }).prototype = slider_demo._CustomThumbShape.prototype;
  dart.addTypeTests(slider_demo._CustomThumbShape);
  dart.setMethodSignature(slider_demo._CustomThumbShape, () => ({
    __proto__: dart.getMethods(slider_demo._CustomThumbShape.__proto__),
    getPreferredSize: dart.fnType(ui.Size, [core.bool, core.bool]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset], {activationAnimation: animation.Animation$(core.double), enableAnimation: animation.Animation$(core.double), isDiscrete: core.bool, labelPainter: text_painter.TextPainter, parentBox: box.RenderBox, sliderTheme: slider_theme.SliderThemeData, textDirection: ui.TextDirection, value: core.double}, {})
  }));
  dart.setLibraryUri(slider_demo._CustomThumbShape, "package:flutter_web.examples.gallery/demo/material/slider_demo.dart");
  dart.defineLazy(slider_demo._CustomThumbShape, {
    /*slider_demo._CustomThumbShape._thumbSize*/get _thumbSize() {
      return 4;
    },
    /*slider_demo._CustomThumbShape._disabledThumbSize*/get _disabledThumbSize() {
      return 3;
    },
    /*slider_demo._CustomThumbShape.sizeTween*/get sizeTween() {
      return new (TweenOfdouble()).new({begin: 3, end: 4});
    }
  });
  slider_demo._CustomValueIndicatorShape = class _CustomValueIndicatorShape extends slider_theme.SliderComponentShape {
    getPreferredSize(isEnabled, isDiscrete) {
      return new ui.Size.fromRadius(dart.test(isEnabled) ? 4 : 3);
    }
    paint(context, thumbCenter, opts) {
      let t0, t0$;
      let activationAnimation = opts && 'activationAnimation' in opts ? opts.activationAnimation : null;
      let enableAnimation = opts && 'enableAnimation' in opts ? opts.enableAnimation : null;
      let isDiscrete = opts && 'isDiscrete' in opts ? opts.isDiscrete : null;
      let labelPainter = opts && 'labelPainter' in opts ? opts.labelPainter : null;
      let parentBox = opts && 'parentBox' in opts ? opts.parentBox : null;
      let sliderTheme = opts && 'sliderTheme' in opts ? opts.sliderTheme : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let canvas = context.canvas;
      let enableColor = new tween.ColorTween.new({begin: sliderTheme.disabledThumbColor, end: sliderTheme.valueIndicatorColor});
      let slideUpTween = new (TweenOfdouble()).new({begin: 0.0, end: 40});
      let size = 4 * dart.notNull(slider_demo._CustomValueIndicatorShape.sizeTween.evaluate(enableAnimation));
      let slideUpOffset = new ui.Offset.new(0.0, -dart.notNull(slideUpTween.evaluate(activationAnimation)));
      let thumbPath = slider_demo._triangle(size, thumbCenter['+'](slideUpOffset), {invert: true});
      let paintColor = enableColor.evaluate(enableAnimation).withAlpha((255.0 * dart.notNull(activationAnimation.value))[$round]());
      canvas.drawPath(thumbPath, (t0 = new ui.Paint.new(), t0.color = paintColor, t0));
      canvas.drawLine(thumbCenter, thumbCenter['+'](slideUpOffset), (t0$ = new ui.Paint.new(), t0$.color = paintColor, t0$.style = ui.PaintingStyle.stroke, t0$.strokeWidth = 2.0, t0$));
      labelPainter.paint(canvas, thumbCenter['+'](slideUpOffset)['+'](new ui.Offset.new(-dart.notNull(labelPainter.width) / 2.0, -dart.notNull(labelPainter.height) - 4.0)));
    }
  };
  (slider_demo._CustomValueIndicatorShape.new = function() {
    slider_demo._CustomValueIndicatorShape.__proto__.new.call(this);
    ;
  }).prototype = slider_demo._CustomValueIndicatorShape.prototype;
  dart.addTypeTests(slider_demo._CustomValueIndicatorShape);
  dart.setMethodSignature(slider_demo._CustomValueIndicatorShape, () => ({
    __proto__: dart.getMethods(slider_demo._CustomValueIndicatorShape.__proto__),
    getPreferredSize: dart.fnType(ui.Size, [core.bool, core.bool]),
    paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset], {activationAnimation: animation.Animation$(core.double), enableAnimation: animation.Animation$(core.double), isDiscrete: core.bool, labelPainter: text_painter.TextPainter, parentBox: box.RenderBox, sliderTheme: slider_theme.SliderThemeData, textDirection: ui.TextDirection, value: core.double}, {})
  }));
  dart.setLibraryUri(slider_demo._CustomValueIndicatorShape, "package:flutter_web.examples.gallery/demo/material/slider_demo.dart");
  dart.defineLazy(slider_demo._CustomValueIndicatorShape, {
    /*slider_demo._CustomValueIndicatorShape._indicatorSize*/get _indicatorSize() {
      return 4;
    },
    /*slider_demo._CustomValueIndicatorShape._disabledIndicatorSize*/get _disabledIndicatorSize() {
      return 3;
    },
    /*slider_demo._CustomValueIndicatorShape._slideUpHeight*/get _slideUpHeight() {
      return 40;
    },
    /*slider_demo._CustomValueIndicatorShape.sizeTween*/get sizeTween() {
      return new (TweenOfdouble()).new({begin: 3, end: 4});
    }
  });
  const _scaffoldKey = dart.privateName(slider_demo, "_scaffoldKey");
  const _value = dart.privateName(slider_demo, "_value");
  const _discreteValue = dart.privateName(slider_demo, "_discreteValue");
  const _buildContents = dart.privateName(slider_demo, "_buildContents");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C2;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
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
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C26;
  let C25;
  let C33;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C39;
  let C38;
  let C49;
  let C50;
  let C48;
  let C47;
  let C51;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  slider_demo._SliderDemoState = class _SliderDemoState extends framework.State$(slider_demo.SliderDemo) {
    build(context) {
      return demo.wrapScaffold("Slider Demo", context, this[_scaffoldKey], this[_buildContents](context), "/material/slider");
    }
    [_buildContents](context) {
      let theme = theme$.Theme.of(context);
      return new basic.Padding.new({padding: C2 || CT.C2, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new slider.Slider.new({value: this[_value], min: 0.0, max: 100.0, onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this[_value] = value;
                    }, VoidToNull()));
                  }, doubleToNull()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), C9 || CT.C9]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new slider.Slider.new({value: 0.25, onChanged: dart.fn(val => {
                  }, doubleToNull()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new text.Text.new("Disabled", {$creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new slider.Slider.new({value: this[_discreteValue], min: 0.0, max: 200.0, divisions: 5, label: dart.str(this[_discreteValue][$round]()), onChanged: dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this[_discreteValue] = value;
                    }, VoidToNull()));
                  }, doubleToNull()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), C33 || CT.C33]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new slider_theme.SliderTheme.new({data: theme.sliderTheme.copyWith({activeTrackColor: colors.Colors.deepPurple, inactiveTrackColor: colors.Colors.black26, activeTickMarkColor: colors.Colors.white70, inactiveTickMarkColor: colors.Colors.black, overlayColor: colors.Colors.black12, thumbColor: colors.Colors.deepPurple, valueIndicatorColor: colors.Colors.deepPurpleAccent, thumbShape: new slider_demo._CustomThumbShape.new(), valueIndicatorShape: new slider_demo._CustomValueIndicatorShape.new(), valueIndicatorTextStyle: theme.accentTextTheme.body2.copyWith({color: colors.Colors.black87})}), child: new slider.Slider.new({value: this[_discreteValue], min: 0.0, max: 200.0, divisions: 5, semanticFormatterCallback: dart.fn(value => value[$round]()[$toString](), doubleToString()), label: dart.str(this[_discreteValue][$round]()), onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_discreteValue] = value;
                      }, VoidToNull()));
                    }, doubleToNull()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), C51 || CT.C51]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52})]), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60});
    }
  };
  (slider_demo._SliderDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_value] = 25.0;
    this[_discreteValue] = 40.0;
    slider_demo._SliderDemoState.__proto__.new.call(this);
    ;
  }).prototype = slider_demo._SliderDemoState.prototype;
  dart.addTypeTests(slider_demo._SliderDemoState);
  dart.setMethodSignature(slider_demo._SliderDemoState, () => ({
    __proto__: dart.getMethods(slider_demo._SliderDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContents]: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(slider_demo._SliderDemoState, "package:flutter_web.examples.gallery/demo/material/slider_demo.dart");
  dart.setFieldSignature(slider_demo._SliderDemoState, () => ({
    __proto__: dart.getFields(slider_demo._SliderDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_value]: dart.fieldType(core.double),
    [_discreteValue]: dart.fieldType(core.double)
  }));
  slider_demo._triangle = function _triangle(size, thumbCenter, opts) {
    let invert = opts && 'invert' in opts ? opts.invert : false;
    let thumbPath = ui.Path.new();
    let height = math.sqrt(3.0) / 2.0;
    let halfSide = dart.notNull(size) / 2.0;
    let centerHeight = dart.notNull(size) * height / 3.0;
    let sign = dart.test(invert) ? -1.0 : 1.0;
    thumbPath.moveTo(dart.notNull(thumbCenter.dx) - halfSide, dart.notNull(thumbCenter.dy) + sign * centerHeight);
    thumbPath.lineTo(thumbCenter.dx, dart.notNull(thumbCenter.dy) - 2.0 * sign * centerHeight);
    thumbPath.lineTo(dart.notNull(thumbCenter.dx) + halfSide, dart.notNull(thumbCenter.dy) + sign * centerHeight);
    thumbPath.close();
    return thumbPath;
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/slider_demo", {
    "package:flutter_web.examples.gallery/demo/material/slider_demo.dart": slider_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["slider_demo.dart"],"names":[],"mappings":"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","file":"slider_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__slider_demo: slider_demo
  };
});

//# sourceMappingURL=slider_demo.ddc.js.map
