define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animated_cross_fade = packages__flutter_web__animation.src__widgets__animated_cross_fade;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const form = packages__flutter_web__animation.src__widgets__form;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const theme$ = packages__flutter_web__material.src__material__theme;
  const divider = packages__flutter_web__material.src__material__divider;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const button_theme = packages__flutter_web__material.src__material__button_theme;
  const text_form_field = packages__flutter_web__material.src__material__text_form_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const radio_list_tile = packages__flutter_web__material.src__material__radio_list_tile;
  const slider = packages__flutter_web__material.src__material__slider;
  const colors = packages__flutter_web__material.src__material__colors;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const expansion_panel = packages__flutter_web__material.src__material__expansion_panel;
  const ui = packages__flutter_web_ui__ui.ui;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const expansion_panels_demo = Object.create(dart.library);
  const $split = dartx.split;
  const $_get = dartx._get;
  const $round = dartx.round;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndboolToDualHeaderWithHint = () => (BuildContextAndboolToDualHeaderWithHint = dart.constFn(dart.fnType(expansion_panels_demo.DualHeaderWithHint, [framework.BuildContext, core.bool])))();
  let DemoItemOfString = () => (DemoItemOfString = dart.constFn(expansion_panels_demo.DemoItem$(core.String)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToCollapsibleBody = () => (BuildContextToCollapsibleBody = dart.constFn(dart.fnType(expansion_panels_demo.CollapsibleBody, [framework.BuildContext])))();
  let DemoItemOfStringToForm = () => (DemoItemOfStringToForm = dart.constFn(dart.fnType(form.Form, [DemoItemOfString()])))();
  let DemoItemOfLocation = () => (DemoItemOfLocation = dart.constFn(expansion_panels_demo.DemoItem$(expansion_panels_demo.Location)))();
  let LocationToString = () => (LocationToString = dart.constFn(dart.fnType(core.String, [expansion_panels_demo.Location])))();
  let FormFieldOfLocation = () => (FormFieldOfLocation = dart.constFn(form.FormField$(expansion_panels_demo.Location)))();
  let LocationToNull = () => (LocationToNull = dart.constFn(dart.fnType(core.Null, [expansion_panels_demo.Location])))();
  let RadioListTileOfLocation = () => (RadioListTileOfLocation = dart.constFn(radio_list_tile.RadioListTile$(expansion_panels_demo.Location)))();
  let FormFieldStateOfLocation = () => (FormFieldStateOfLocation = dart.constFn(form.FormFieldState$(expansion_panels_demo.Location)))();
  let FormFieldStateOfLocationToColumn = () => (FormFieldStateOfLocationToColumn = dart.constFn(dart.fnType(basic.Column, [FormFieldStateOfLocation()])))();
  let DemoItemOfLocationToForm = () => (DemoItemOfLocationToForm = dart.constFn(dart.fnType(form.Form, [DemoItemOfLocation()])))();
  let DemoItemOfdouble = () => (DemoItemOfdouble = dart.constFn(expansion_panels_demo.DemoItem$(core.double)))();
  let doubleToString = () => (doubleToString = dart.constFn(dart.fnType(core.String, [core.double])))();
  let FormFieldOfdouble = () => (FormFieldOfdouble = dart.constFn(form.FormField$(core.double)))();
  let doubleToNull = () => (doubleToNull = dart.constFn(dart.fnType(core.Null, [core.double])))();
  let FormFieldStateOfdouble = () => (FormFieldStateOfdouble = dart.constFn(form.FormFieldState$(core.double)))();
  let FormFieldStateOfdoubleToSlider = () => (FormFieldStateOfdoubleToSlider = dart.constFn(dart.fnType(slider.Slider, [FormFieldStateOfdouble()])))();
  let DemoItemOfdoubleToForm = () => (DemoItemOfdoubleToForm = dart.constFn(dart.fnType(form.Form, [DemoItemOfdouble()])))();
  let JSArrayOfDemoItem = () => (JSArrayOfDemoItem = dart.constFn(_interceptors.JSArray$(expansion_panels_demo.DemoItem)))();
  let intAndboolToNull = () => (intAndboolToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.bool])))();
  let DemoItemToExpansionPanel = () => (DemoItemToExpansionPanel = dart.constFn(dart.fnType(expansion_panel.ExpansionPanel, [expansion_panels_demo.DemoItem])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: expansion_panels_demo.Location.prototype,
        [_name$]: "Location.Barbados",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: expansion_panels_demo.Location.prototype,
        [_name$]: "Location.Bahamas",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: expansion_panels_demo.Location.prototype,
        [_name$]: "Location.Bermuda",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], expansion_panels_demo.Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 0.6,
        [Interval_begin]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "firstChild",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondChild",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "firstCurve",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondCurve",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sizeCurve",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossFadeState",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 24
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 51,
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
        [_Location_column]: 20,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 49,
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
        [_Location_column]: 18,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 46,
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
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 44,
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
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 62,
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
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 30,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 60,
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
        [_Location_column]: 18,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 58,
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
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 16,
        [_Location_line]: 41,
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
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 24
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 90,
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
        [_Location_column]: 22,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 88,
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
        [_Location_column]: 18,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 87,
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
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_indent]: 0,
        [Divider_height]: 1
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2315255808.0
      });
    },
    get C71() {
      return C71 = dart.const({
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
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C72 || CT.C72,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C73 || CT.C73,
        [TextStyle_inherit]: true
      });
    },
    get C70() {
      return C70 = dart.const({
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
        [Text_style]: C71 || CT.C71,
        [Text_textSpan]: null,
        [Text_data]: "CANCEL"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 100,
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
        [_Location_column]: 24,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 98,
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
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
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
        [Text_data]: "SAVE"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textTheme",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 107,
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
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 61,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 94,
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
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hint",
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showHint",
        [_Location_column]: 11,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 16
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 23,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSave",
        [_Location_column]: 19,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCancel",
        [_Location_column]: 19,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
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
        [Text_data]: "Bahamas"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 31,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 31,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
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
        [Text_data]: "Barbados"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 31,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 31,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
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
        [Text_data]: "Bermuda"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 31,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 31,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 27,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialValue",
        [_Location_column]: 21,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 21,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSave",
        [_Location_column]: 17,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCancel",
        [_Location_column]: 17,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 40,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "min",
        [_Location_column]: 23,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "max",
        [_Location_column]: 23,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "divisions",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 23,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 23,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 23,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176, C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialValue",
        [_Location_column]: 19,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSave",
        [_Location_column]: 17,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onCancel",
        [_Location_column]: 17,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190, C191 || CT.C191], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 40,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
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
        [Text_data]: "Expansion panels"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 63,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204, C205 || CT.C205], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 24
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expansionCallback",
        [_Location_column]: 17,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213, C214 || CT.C214], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217, C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 311,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 311,
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
        [_Location_column]: 12,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(expansion_panels_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  expansion_panels_demo.Location = class Location extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (expansion_panels_demo.Location.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = expansion_panels_demo.Location.prototype;
  dart.addTypeTests(expansion_panels_demo.Location);
  dart.setLibraryUri(expansion_panels_demo.Location, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
  dart.setFieldSignature(expansion_panels_demo.Location, () => ({
    __proto__: dart.getFields(expansion_panels_demo.Location.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(expansion_panels_demo.Location, ['toString']);
  expansion_panels_demo.Location.Barbados = C0 || CT.C0;
  expansion_panels_demo.Location.Bahamas = C1 || CT.C1;
  expansion_panels_demo.Location.Bermuda = C2 || CT.C2;
  expansion_panels_demo.Location.values = C3 || CT.C3;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C5;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C4;
  let C6;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C7;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C9;
  let C8;
  const _crossFade = dart.privateName(expansion_panels_demo, "_crossFade");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C17;
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
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  const name$ = dart.privateName(expansion_panels_demo, "DualHeaderWithHint.name");
  const value$ = dart.privateName(expansion_panels_demo, "DualHeaderWithHint.value");
  const hint$ = dart.privateName(expansion_panels_demo, "DualHeaderWithHint.hint");
  const showHint$ = dart.privateName(expansion_panels_demo, "DualHeaderWithHint.showHint");
  expansion_panels_demo.DualHeaderWithHint = class DualHeaderWithHint extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get hint() {
      return this[hint$];
    }
    set hint(value) {
      super.hint = value;
    }
    get showHint() {
      return this[showHint$];
    }
    set showHint(value) {
      super.showHint = value;
    }
    [_crossFade](first, second, isExpanded) {
      return new animated_cross_fade.AnimatedCrossFade.new({firstChild: first, secondChild: second, firstCurve: C4 || CT.C4, secondCurve: C6 || CT.C6, sizeCurve: curves.Curves.fastOutSlowIn, crossFadeState: dart.test(isExpanded) ? animated_cross_fade.CrossFadeState.showSecond : animated_cross_fade.CrossFadeState.showFirst, duration: C7 || CT.C7, $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let textTheme = theme.textTheme;
      return new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 2, child: new container.Container.new({margin: C17 || CT.C17, child: new basic.FittedBox.new({fit: box_fit.BoxFit.scaleDown, alignment: alignment.Alignment.centerLeft, child: new text.Text.new(this.name, {style: textTheme.body1.copyWith({fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new basic.Expanded.new({flex: 3, child: new container.Container.new({margin: C17 || CT.C17, child: this[_crossFade](new text.Text.new(this.value, {style: textTheme.caption.copyWith({fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new text.Text.new(this.hint, {style: textTheme.caption.copyWith({fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), this.showHint), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
    }
  };
  (expansion_panels_demo.DualHeaderWithHint.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let showHint = opts && 'showHint' in opts ? opts.showHint : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[value$] = value;
    this[hint$] = hint;
    this[showHint$] = showHint;
    expansion_panels_demo.DualHeaderWithHint.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expansion_panels_demo.DualHeaderWithHint.prototype;
  dart.addTypeTests(expansion_panels_demo.DualHeaderWithHint);
  dart.setMethodSignature(expansion_panels_demo.DualHeaderWithHint, () => ({
    __proto__: dart.getMethods(expansion_panels_demo.DualHeaderWithHint.__proto__),
    [_crossFade]: dart.fnType(framework.Widget, [framework.Widget, framework.Widget, core.bool]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expansion_panels_demo.DualHeaderWithHint, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
  dart.setFieldSignature(expansion_panels_demo.DualHeaderWithHint, () => ({
    __proto__: dart.getFields(expansion_panels_demo.DualHeaderWithHint.__proto__),
    name: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    showHint: dart.finalFieldType(core.bool)
  }));
  let C54;
  let C55;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C67;
  let C68;
  let C69;
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
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
  let C72;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color__value = dart.privateName(ui, "Color._value");
  let C73;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C71;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C70;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C82;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C101;
  let C100;
  const margin$ = dart.privateName(expansion_panels_demo, "CollapsibleBody.margin");
  const child$ = dart.privateName(expansion_panels_demo, "CollapsibleBody.child");
  const onSave$ = dart.privateName(expansion_panels_demo, "CollapsibleBody.onSave");
  const onCancel$ = dart.privateName(expansion_panels_demo, "CollapsibleBody.onCancel");
  expansion_panels_demo.CollapsibleBody = class CollapsibleBody extends framework.StatelessWidget {
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onSave() {
      return this[onSave$];
    }
    set onSave(value) {
      super.onSave = value;
    }
    get onCancel() {
      return this[onCancel$];
    }
    set onCancel(value) {
      super.onCancel = value;
    }
    build(context) {
      let theme = theme$.Theme.of(context);
      let textTheme = theme.textTheme;
      return new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({margin: (C55 || CT.C55)['-'](this.margin), child: new basic.Center.new({child: new text.DefaultTextStyle.new({style: textTheme.caption.copyWith({fontSize: 15.0}), child: this.child, $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), C67 || CT.C67, new container.Container.new({padding: C68 || CT.C68, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new container.Container.new({margin: C69 || CT.C69, child: new flat_button.FlatButton.new({onPressed: this.onCancel, child: C70 || CT.C70, $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), new container.Container.new({margin: C69 || CT.C69, child: new flat_button.FlatButton.new({onPressed: this.onSave, textTheme: button_theme.ButtonTextTheme.accent, child: C82 || CT.C82, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96})]), $creationLocationd_0dea112b090073317d4: C100 || CT.C100});
    }
  };
  (expansion_panels_demo.CollapsibleBody.new = function(opts) {
    let margin = opts && 'margin' in opts ? opts.margin : C54 || CT.C54;
    let child = opts && 'child' in opts ? opts.child : null;
    let onSave = opts && 'onSave' in opts ? opts.onSave : null;
    let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[margin$] = margin;
    this[child$] = child;
    this[onSave$] = onSave;
    this[onCancel$] = onCancel;
    expansion_panels_demo.CollapsibleBody.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expansion_panels_demo.CollapsibleBody.prototype;
  dart.addTypeTests(expansion_panels_demo.CollapsibleBody);
  dart.setMethodSignature(expansion_panels_demo.CollapsibleBody, () => ({
    __proto__: dart.getMethods(expansion_panels_demo.CollapsibleBody.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expansion_panels_demo.CollapsibleBody, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
  dart.setFieldSignature(expansion_panels_demo.CollapsibleBody, () => ({
    __proto__: dart.getFields(expansion_panels_demo.CollapsibleBody.__proto__),
    margin: dart.finalFieldType(edge_insets.EdgeInsets),
    child: dart.finalFieldType(framework.Widget),
    onSave: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCancel: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  let C105;
  let C106;
  let C107;
  let C108;
  let C104;
  let C103;
  const _is_DemoItem_default = Symbol('_is_DemoItem_default');
  const name$0 = dart.privateName(expansion_panels_demo, "DemoItem.name");
  const hint$0 = dart.privateName(expansion_panels_demo, "DemoItem.hint");
  const textController = dart.privateName(expansion_panels_demo, "DemoItem.textController");
  const builder$ = dart.privateName(expansion_panels_demo, "DemoItem.builder");
  const valueToString$ = dart.privateName(expansion_panels_demo, "DemoItem.valueToString");
  const value$0 = dart.privateName(expansion_panels_demo, "DemoItem.value");
  const isExpanded = dart.privateName(expansion_panels_demo, "DemoItem.isExpanded");
  expansion_panels_demo.DemoItem$ = dart.generic(T => {
    class DemoItem extends core.Object {
      get name() {
        return this[name$0];
      }
      set name(value) {
        super.name = value;
      }
      get hint() {
        return this[hint$0];
      }
      set hint(value) {
        super.hint = value;
      }
      get textController() {
        return this[textController];
      }
      set textController(value) {
        super.textController = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get valueToString() {
        return this[valueToString$];
      }
      set valueToString(value) {
        super.valueToString = value;
      }
      get value() {
        return this[value$0];
      }
      set value(value) {
        this[value$0] = T._check(value);
      }
      get isExpanded() {
        return this[isExpanded];
      }
      set isExpanded(value) {
        this[isExpanded] = value;
      }
      get headerBuilder() {
        return dart.fn((context, isExpanded) => new expansion_panels_demo.DualHeaderWithHint.new({name: this.name, value: this.valueToString(this.value), hint: this.hint, showHint: isExpanded, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), BuildContextAndboolToDualHeaderWithHint());
      }
      build() {
        return this.builder(this);
      }
    }
    (DemoItem.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let hint = opts && 'hint' in opts ? opts.hint : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let valueToString = opts && 'valueToString' in opts ? opts.valueToString : null;
      this[isExpanded] = false;
      this[name$0] = name;
      this[value$0] = value;
      this[hint$0] = hint;
      this[builder$] = builder;
      this[valueToString$] = valueToString;
      this[textController] = new editable_text.TextEditingController.new({text: valueToString(value)});
      ;
    }).prototype = DemoItem.prototype;
    dart.addTypeTests(DemoItem);
    DemoItem.prototype[_is_DemoItem_default] = true;
    dart.setMethodSignature(DemoItem, () => ({
      __proto__: dart.getMethods(DemoItem.__proto__),
      build: dart.fnType(framework.Widget, [])
    }));
    dart.setGetterSignature(DemoItem, () => ({
      __proto__: dart.getGetters(DemoItem.__proto__),
      headerBuilder: dart.fnType(framework.Widget, [framework.BuildContext, core.bool])
    }));
    dart.setLibraryUri(DemoItem, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
    dart.setFieldSignature(DemoItem, () => ({
      __proto__: dart.getFields(DemoItem.__proto__),
      name: dart.finalFieldType(core.String),
      hint: dart.finalFieldType(core.String),
      textController: dart.finalFieldType(editable_text.TextEditingController),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [expansion_panels_demo.DemoItem$(T)])),
      valueToString: dart.finalFieldType(dart.fnType(core.String, [T])),
      value: dart.fieldType(T),
      isExpanded: dart.fieldType(core.bool)
    }));
    return DemoItem;
  });
  expansion_panels_demo.DemoItem = expansion_panels_demo.DemoItem$();
  dart.addTypeTests(expansion_panels_demo.DemoItem, _is_DemoItem_default);
  expansion_panels_demo.ExpansionPanelsDemo = class ExpansionPanelsDemo extends framework.StatefulWidget {
    createState() {
      return new expansion_panels_demo._ExpansionPanelsDemoState.new();
    }
  };
  (expansion_panels_demo.ExpansionPanelsDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    expansion_panels_demo.ExpansionPanelsDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = expansion_panels_demo.ExpansionPanelsDemo.prototype;
  dart.addTypeTests(expansion_panels_demo.ExpansionPanelsDemo);
  dart.setMethodSignature(expansion_panels_demo.ExpansionPanelsDemo, () => ({
    __proto__: dart.getMethods(expansion_panels_demo.ExpansionPanelsDemo.__proto__),
    createState: dart.fnType(expansion_panels_demo._ExpansionPanelsDemoState, [])
  }));
  dart.setLibraryUri(expansion_panels_demo.ExpansionPanelsDemo, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
  dart.defineLazy(expansion_panels_demo.ExpansionPanelsDemo, {
    /*expansion_panels_demo.ExpansionPanelsDemo.routeName*/get routeName() {
      return "/material/expansion_panels";
    }
  });
  const _demoItems = dart.privateName(expansion_panels_demo, "_demoItems");
  let C109;
  let C112;
  let C113;
  let C114;
  let C111;
  let C110;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C122;
  let C123;
  let C124;
  let C120;
  let C119;
  let C127;
  let C126;
  let C125;
  let C130;
  let C129;
  let C128;
  let C131;
  let C134;
  let C135;
  let C136;
  let C137;
  let C133;
  let C132;
  let C138;
  let C141;
  let C142;
  let C143;
  let C144;
  let C140;
  let C139;
  let C145;
  let C148;
  let C149;
  let C150;
  let C151;
  let C147;
  let C146;
  let C154;
  let C155;
  let C156;
  let C153;
  let C152;
  let C159;
  let C160;
  let C161;
  let C158;
  let C157;
  let C164;
  let C165;
  let C166;
  let C163;
  let C162;
  let C169;
  let C168;
  let C167;
  let C172;
  let C171;
  let C170;
  let C175;
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  let C181;
  let C174;
  let C173;
  let C184;
  let C185;
  let C186;
  let C183;
  let C182;
  let C189;
  let C190;
  let C191;
  let C188;
  let C187;
  let C194;
  let C193;
  let C192;
  let C197;
  let C196;
  let C195;
  let C198;
  let C201;
  let C200;
  let C199;
  let C204;
  let C205;
  let C203;
  let C202;
  let C206;
  let C209;
  let C210;
  let C208;
  let C207;
  let C213;
  let C214;
  let C212;
  let C211;
  let C217;
  let C218;
  let C219;
  let C216;
  let C215;
  let C222;
  let C221;
  let C220;
  let C225;
  let C226;
  let C224;
  let C223;
  expansion_panels_demo._ExpansionPanelsDemoState = class _ExpansionPanelsDemoState extends framework.State$(expansion_panels_demo.ExpansionPanelsDemo) {
    initState() {
      super.initState();
      this[_demoItems] = JSArrayOfDemoItem().of([new (DemoItemOfString()).new({name: "Trip", value: "Caribbean cruise", hint: "Change trip name", valueToString: dart.fn(value => value, StringToString()), builder: dart.fn(item => {
            const close = () => {
              this.setState(dart.fn(() => {
                item.isExpanded = false;
              }, VoidToNull()));
            };
            dart.fn(close, VoidTovoid());
            return new form.Form.new({child: new basic.Builder.new({builder: dart.fn(context => new expansion_panels_demo.CollapsibleBody.new({margin: C109 || CT.C109, onSave: dart.fn(() => {
                    form.Form.of(context).save();
                    close();
                  }, VoidToNull()), onCancel: dart.fn(() => {
                    form.Form.of(context).reset();
                    close();
                  }, VoidToNull()), child: new basic.Padding.new({padding: C109 || CT.C109, child: new text_form_field.TextFormField.new({controller: item.textController, decoration: new input_decorator.InputDecoration.new({hintText: item.hint, labelText: item.name}), onSaved: dart.fn(value => {
                        item.value = value;
                      }, StringToNull()), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), BuildContextToCollapsibleBody()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128});
          }, DemoItemOfStringToForm())}), new (DemoItemOfLocation()).new({name: "Location", value: expansion_panels_demo.Location.Bahamas, hint: "Select location", valueToString: dart.fn(location => dart.toString(location)[$split](".")[$_get](1), LocationToString()), builder: dart.fn(item => {
            const close = () => {
              this.setState(dart.fn(() => {
                item.isExpanded = false;
              }, VoidToNull()));
            };
            dart.fn(close, VoidTovoid());
            return new form.Form.new({child: new basic.Builder.new({builder: dart.fn(context => new expansion_panels_demo.CollapsibleBody.new({onSave: dart.fn(() => {
                    form.Form.of(context).save();
                    close();
                  }, VoidToNull()), onCancel: dart.fn(() => {
                    form.Form.of(context).reset();
                    close();
                  }, VoidToNull()), child: new (FormFieldOfLocation()).new({initialValue: item.value, onSaved: dart.fn(result => {
                      item.value = result;
                    }, LocationToNull()), builder: dart.fn(field => new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new (RadioListTileOfLocation()).new({value: expansion_panels_demo.Location.Bahamas, title: C131 || CT.C131, groupValue: field.value, onChanged: dart.bind(field, 'didChange'), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), new (RadioListTileOfLocation()).new({value: expansion_panels_demo.Location.Barbados, title: C138 || CT.C138, groupValue: field.value, onChanged: dart.bind(field, 'didChange'), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new (RadioListTileOfLocation()).new({value: expansion_panels_demo.Location.Bermuda, title: C145 || CT.C145, groupValue: field.value, onChanged: dart.bind(field, 'didChange'), $creationLocationd_0dea112b090073317d4: C146 || CT.C146})]), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), FormFieldStateOfLocationToColumn()), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), BuildContextToCollapsibleBody()), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170});
          }, DemoItemOfLocationToForm())}), new (DemoItemOfdouble()).new({name: "Sun", value: 80.0, hint: "Select sun level", valueToString: dart.fn(amount => dart.str(amount[$round]()), doubleToString()), builder: dart.fn(item => {
            const close = () => {
              this.setState(dart.fn(() => {
                item.isExpanded = false;
              }, VoidToNull()));
            };
            dart.fn(close, VoidTovoid());
            return new form.Form.new({child: new basic.Builder.new({builder: dart.fn(context => new expansion_panels_demo.CollapsibleBody.new({onSave: dart.fn(() => {
                    form.Form.of(context).save();
                    close();
                  }, VoidToNull()), onCancel: dart.fn(() => {
                    form.Form.of(context).reset();
                    close();
                  }, VoidToNull()), child: new (FormFieldOfdouble()).new({initialValue: item.value, onSaved: dart.fn(value => {
                      item.value = value;
                    }, doubleToNull()), builder: dart.fn(field => new slider.Slider.new({min: 0.0, max: 100.0, divisions: 5, activeColor: colors.Colors.orange._get(100 + (dart.notNull(field.value) * 5.0)[$round]()), label: dart.str(field.value[$round]()), value: field.value, onChanged: dart.bind(field, 'didChange'), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), FormFieldStateOfdoubleToSlider()), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), BuildContextToCollapsibleBody()), $creationLocationd_0dea112b090073317d4: C192 || CT.C192}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195});
          }, DemoItemOfdoubleToForm())})]);
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C198 || CT.C198, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/expansion_panels", {$creationLocationd_0dea112b090073317d4: C199 || CT.C199})]), $creationLocationd_0dea112b090073317d4: C202 || CT.C202}), body: new single_child_scroll_view.SingleChildScrollView.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new container.Container.new({margin: C206 || CT.C206, child: new expansion_panel.ExpansionPanelList.new({expansionCallback: dart.fn((index, isExpanded) => {
                  this.setState(dart.fn(() => {
                    this[_demoItems][$_get](index).isExpanded = !dart.test(isExpanded);
                  }, VoidToNull()));
                }, intAndboolToNull()), children: this[_demoItems][$map](expansion_panel.ExpansionPanel, dart.fn(item => new expansion_panel.ExpansionPanel.new({isExpanded: item.isExpanded, headerBuilder: item.headerBuilder, body: item.build()}), DemoItemToExpansionPanel()))[$toList](), $creationLocationd_0dea112b090073317d4: C207 || CT.C207}), $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), $creationLocationd_0dea112b090073317d4: C215 || CT.C215}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), $creationLocationd_0dea112b090073317d4: C223 || CT.C223});
    }
  };
  (expansion_panels_demo._ExpansionPanelsDemoState.new = function() {
    this[_demoItems] = null;
    expansion_panels_demo._ExpansionPanelsDemoState.__proto__.new.call(this);
    ;
  }).prototype = expansion_panels_demo._ExpansionPanelsDemoState.prototype;
  dart.addTypeTests(expansion_panels_demo._ExpansionPanelsDemoState);
  dart.setMethodSignature(expansion_panels_demo._ExpansionPanelsDemoState, () => ({
    __proto__: dart.getMethods(expansion_panels_demo._ExpansionPanelsDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(expansion_panels_demo._ExpansionPanelsDemoState, "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart");
  dart.setFieldSignature(expansion_panels_demo._ExpansionPanelsDemoState, () => ({
    __proto__: dart.getFields(expansion_panels_demo._ExpansionPanelsDemoState.__proto__),
    [_demoItems]: dart.fieldType(core.List$(expansion_panels_demo.DemoItem))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo", {
    "package:flutter_web.examples.gallery/demo/material/expansion_panels_demo.dart": expansion_panels_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["expansion_panels_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAS2C;;wDAAtC;;;;EAAsC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQ5B;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;iBAEc,OAAc,QAAa;AAClD,YAAO,4DACO,KAAK,eACJ,MAAM,gEAGD,uDAEd,UAAU,IAAkB,gDAA4B;IAGhE;UAG0B;AACR,kBAAc,gBAAG,OAAO;AACxB,sBAAY,AAAM,KAAD;AAEjC,YAAO,8BAAsB,sBAC3B,8BACQ,UACC,2DAEE,8BACO,qCACS,uCACd,kBACL,mBACO,AAAU,AAAM,SAAP,2BAA0B,4OAKlD,8BACU,UACC,2DAEI,iBACH,kBAAK,oBACM,AAAU,AAAQ,SAAT,6BAA4B,iEAChD,kBAAK,mBAAa,AAAU,AAAQ,SAAT,6BAA4B,iEACvD;IAEhB;;;QAlD+B;QAAW;QAAY;QAAW;;IAAlC;IAAW;IAAY;IAAW;AAA3D;;EAAqE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyD1D;;;;;;IACJ;;;;;;IACM;;;;;;IACA;;;;;;UAGO;AACR,kBAAc,gBAAG,OAAO;AACxB,sBAAY,AAAM,KAAD;AAEjC,YAAO,iCAAyB,sBAC9B,qCACyE,qBACjE,qBACG,6BACI,sCACI,AAAU,AAAQ,SAAT,6BAA4B,eACrC,sMAEnB,4DAGQ,sCAAyC,sCAAuB,sBAClE,2DAEW,2CACQ,uJAMnB,2DAEW,2CACQ,wBACgB;IAI7C;;;QA1CU;QAA+B;QAAY;QAAa;;IAAxD;IAA+B;IAAY;IAAa;AAD5D;;EACsE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAiD/D;;;;;;MACA;;;;;;MACe;;;;;;MACC;;;;;;MACN;;;;;;MACrB;;;;;;MACG;;;;;;;AAGH,cAAO,UAAc,SAAc,eAC1B,wDACG,kBACC,mBAAc,mBACf,qBACI,UAAU;MAE5B;;AAEkB,4BAAQ;MAAK;;;UArBhB;UAAW;UAAY;UAAW;UAAc;MAS1D,mBAAa;MATH;MAAW;MAAY;MAAW;MAAc;MAC1C,uBAAE,mDAA4B,AAAa,aAAA,CAAC,KAAK;;IAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2B7B;IAA2B;;;;;;EACxE;;;;;;;;MAJsB,mDAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWV,MAAX;AAkJL,MAhJD,mBAAgC,wBAC9B,oCACQ,eACC,0BACD,mCACS,QAAQ,SAAU,KAAK,8BAC7B,QAAkB;AACzB,kBAAK;AAGD,cAFF,cAAS;AACgB,gBAAvB,AAAK,IAAD,cAAc;;;;AAItB,kBAAO,2BACE,gCACI,QAAc,WACd,gFAEG;AACiB,oBAAlB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;8CAEG;AACgB,oBAAnB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;2CAEA,wDAEE,mDACO,AAAK,IAAD,6BACJ,mDACA,AAAK,IAAD,kBACH,AAAK,IAAD,kBAER,QAAQ;AACG,wBAAlB,AAAK,IAAD,SAAS,KAAK;;0CAUpC,sCACU,mBACU,8CACV,kCACS,QAAU,YACZ,AAAW,AAAU,cAA9B,QAAQ,UAAkB,YAAK,kCAC1B,QAAoB;AAC3B,kBAAK;AAGD,cAFF,cAAS;AACgB,gBAAvB,AAAK,IAAD,cAAc;;;;AAItB,kBAAO,2BAAY,gCAAiB,QAAc,WACzC,uDACG;AACiB,oBAAlB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;8CAEG;AACgB,oBAAnB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;2CAEA,+CACW,AAAK,IAAD,iBACT,QAAU;AACE,sBAAnB,AAAK,IAAD,SAAS,MAAM;mDAEZ,QAA0B,SAC1B,oCACwB,2CACY,yCACrB,sBAChB,4CACkB,4EAEJ,AAAM,KAAD,mBACA,UAAN,KAAK,2EAElB,4CACkB,6EAEJ,AAAM,KAAD,mBACA,UAAN,KAAK,2EAElB,4CACkB,4EAEJ,AAAM,KAAD,mBACA,UAAN,KAAK;4CAOxC,oCACU,cACC,YACD,mCACS,QAAQ,UAA8B,SAAhB,AAAO,MAAD,yCAClC,QAAkB;AACzB,kBAAK;AAGD,cAFF,cAAS;AACgB,gBAAvB,AAAK,IAAD,cAAc;;;;AAItB,kBAAO,2BAAY,gCAAiB,QAAc,WACzC,uDACG;AACiB,oBAAlB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;8CAEG;AACgB,oBAAnB,AAAY,aAAT,OAAO;AACR,oBAAP,AAAK,KAAA;2CAEA,6CACS,AAAK,IAAD,iBACT,QAAQ;AACG,sBAAlB,AAAK,IAAD,SAAS,KAAK;iDAEX,QAAwB,SACxB,4BACA,UACA,kBACM,gBAEA,AAAM,0BAAC,AAAI,MAAsB,CAAP,aAAZ,AAAM,KAAD,UAAS,wBACR,SAArB,AAAM,AAAM,KAAP,0BACR,AAAM,KAAD,mBACK,UAAN,KAAK;;IAQpC;UAG0B;AACxB,YAAO,oCACG,yDAEW,sBACf,0MAGE,+DACG,iCACA,eACG,cACD,6DAEE,+DACgB,SAAK,OAAY;AAGhC,kBAFF,cAAS;AACmC,oBAA1C,AAAU,AAAQ,wBAAP,KAAK,eAAe,WAAC,UAAU;;kDAI1C,AAAW,AAKZ,uDALgC,QAAmB,QAC7C,oDACS,AAAK,IAAD,4BACD,AAAK,IAAD,sBACb,AAAK,IAAD;IAM9B;;;IAzLwB;;;EA0L1B","file":"expansion_panels_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__expansion_panels_demo: expansion_panels_demo
  };
});

//# sourceMappingURL=expansion_panels_demo.ddc.js.map
