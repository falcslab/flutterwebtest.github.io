define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/intl/intl', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__intl__intl, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const icons = packages__flutter_web__material.src__material__icons;
  const theme = packages__flutter_web__material.src__material__theme;
  const colors = packages__flutter_web__material.src__material__colors;
  const date_picker = packages__flutter_web__material.src__material__date_picker;
  const time_picker = packages__flutter_web__material.src__material__time_picker;
  const time = packages__flutter_web__material.src__material__time;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const dropdown = packages__flutter_web__material.src__material__dropdown;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_border = packages__flutter_web__material.src__material__input_border;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const intl = packages__intl__intl.intl;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const date_and_time_picker_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DateTimeToNull = () => (DateTimeToNull = dart.constFn(dart.fnType(core.Null, [core.DateTime])))();
  let TimeOfDayToNull = () => (TimeOfDayToNull = dart.constFn(dart.fnType(core.Null, [time.TimeOfDay])))();
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let StringToDropdownMenuItemOfString = () => (StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 18,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 43,
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
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseStyle",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 32,
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
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueText",
        [_Location_column]: 13,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueStyle",
        [_Location_column]: 13,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 12
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueText",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueStyle",
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 104,
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
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: time.TimeOfDay.prototype,
        [TimeOfDay_minute]: 28,
        [TimeOfDay_hour]: 7
      });
    },
    get C47() {
      return C47 = dart.const({
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
        [Text_data]: "Date and time pickers"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 65,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 142,
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
        [_Location_column]: 15,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C59 || CT.C59,
        [BorderSide_width]: 1,
        [BorderSide_color]: C60 || CT.C60
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C62 || CT.C62,
        [BorderRadius_bottomLeft]: C62 || CT.C62,
        [BorderRadius_topRight]: C62 || CT.C62,
        [BorderRadius_topLeft]: C62 || CT.C62
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C58 || CT.C58,
        [OutlineInputBorder_borderRadius]: C61 || CT.C61,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C57 || CT.C57,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Event name",
        [InputDecoration_icon]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 159,
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
        [_Location_column]: 15,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Location",
        [InputDecoration_icon]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 165,
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
        [_Location_column]: 15,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 17,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 17,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectDate",
        [_Location_column]: 17,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectTime",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 17,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 17,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectDate",
        [_Location_column]: 17,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectTime",
        [_Location_column]: 17,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 8,
        [SizedBox_width]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: C89 || CT.C89,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Choose an activity",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Activity",
        [InputDecoration_icon]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 23,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 19,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 19,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 17,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C20;
  let C21;
  let C19;
  let C18;
  const labelText$ = dart.privateName(date_and_time_picker_demo, "_InputDropdown.labelText");
  const valueText$ = dart.privateName(date_and_time_picker_demo, "_InputDropdown.valueText");
  const valueStyle$ = dart.privateName(date_and_time_picker_demo, "_InputDropdown.valueStyle");
  const onPressed$ = dart.privateName(date_and_time_picker_demo, "_InputDropdown.onPressed");
  const child$ = dart.privateName(date_and_time_picker_demo, "_InputDropdown.child");
  date_and_time_picker_demo._InputDropdown = class _InputDropdown extends framework.StatelessWidget {
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get valueText() {
      return this[valueText$];
    }
    set valueText(value) {
      super.valueText = value;
    }
    get valueStyle() {
      return this[valueStyle$];
    }
    set valueStyle(value) {
      super.valueStyle = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new ink_well.InkWell.new({onTap: this.onPressed, child: new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({labelText: this.labelText}), baseStyle: this.valueStyle, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new text.Text.new(this.valueText, {style: this.valueStyle, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new icon.Icon.new(icons.Icons.arrow_drop_down, {color: dart.equals(theme.Theme.of(context).brightness, ui.Brightness.light) ? colors.Colors.grey.shade700 : colors.Colors.white70, $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
  };
  (date_and_time_picker_demo._InputDropdown.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let valueText = opts && 'valueText' in opts ? opts.valueText : null;
    let valueStyle = opts && 'valueStyle' in opts ? opts.valueStyle : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[labelText$] = labelText;
    this[valueText$] = valueText;
    this[valueStyle$] = valueStyle;
    this[onPressed$] = onPressed;
    date_and_time_picker_demo._InputDropdown.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_and_time_picker_demo._InputDropdown.prototype;
  dart.addTypeTests(date_and_time_picker_demo._InputDropdown);
  dart.setMethodSignature(date_and_time_picker_demo._InputDropdown, () => ({
    __proto__: dart.getMethods(date_and_time_picker_demo._InputDropdown.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_and_time_picker_demo._InputDropdown, "package:flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart");
  dart.setFieldSignature(date_and_time_picker_demo._InputDropdown, () => ({
    __proto__: dart.getFields(date_and_time_picker_demo._InputDropdown.__proto__),
    labelText: dart.finalFieldType(core.String),
    valueText: dart.finalFieldType(core.String),
    valueStyle: dart.finalFieldType(text_style.TextStyle),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _selectDate = dart.privateName(date_and_time_picker_demo, "_selectDate");
  const _selectTime = dart.privateName(date_and_time_picker_demo, "_selectTime");
  let C24;
  let C25;
  let C26;
  let C27;
  let C23;
  let C22;
  let C30;
  let C31;
  let C29;
  let C28;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C32;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C43;
  let C42;
  const labelText$0 = dart.privateName(date_and_time_picker_demo, "_DateTimePicker.labelText");
  const selectedDate$ = dart.privateName(date_and_time_picker_demo, "_DateTimePicker.selectedDate");
  const selectedTime$ = dart.privateName(date_and_time_picker_demo, "_DateTimePicker.selectedTime");
  const selectDate$ = dart.privateName(date_and_time_picker_demo, "_DateTimePicker.selectDate");
  const selectTime$ = dart.privateName(date_and_time_picker_demo, "_DateTimePicker.selectTime");
  date_and_time_picker_demo._DateTimePicker = class _DateTimePicker extends framework.StatelessWidget {
    get labelText() {
      return this[labelText$0];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get selectedDate() {
      return this[selectedDate$];
    }
    set selectedDate(value) {
      super.selectedDate = value;
    }
    get selectedTime() {
      return this[selectedTime$];
    }
    set selectedTime(value) {
      super.selectedTime = value;
    }
    get selectDate() {
      return this[selectDate$];
    }
    set selectDate(value) {
      super.selectDate = value;
    }
    get selectTime() {
      return this[selectTime$];
    }
    set selectTime(value) {
      super.selectTime = value;
    }
    [_selectDate](context) {
      return async.async(dart.void, (function* _selectDate() {
        let picked = (yield date_picker.showDatePicker({context: context, initialDate: this.selectedDate, firstDate: new core.DateTime.new(2015, 8), lastDate: new core.DateTime.new(2101)}));
        if (picked != null && !dart.equals(picked, this.selectedDate)) this.selectDate(picked);
      }).bind(this));
    }
    [_selectTime](context) {
      return async.async(dart.void, (function* _selectTime() {
        let picked = (yield time_picker.showTimePicker({context: context, initialTime: this.selectedTime}));
        if (picked != null && !dart.equals(picked, this.selectedTime)) this.selectTime(picked);
      }).bind(this));
    }
    build(context) {
      let valueStyle = theme.Theme.of(context).textTheme.title;
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 4, child: new date_and_time_picker_demo._InputDropdown.new({labelText: this.labelText, valueText: new intl.DateFormat.yMMMd().format(this.selectedDate), valueStyle: valueStyle, onPressed: dart.fn(() => {
                this[_selectDate](context);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), C32 || CT.C32, new basic.Expanded.new({flex: 3, child: new date_and_time_picker_demo._InputDropdown.new({valueText: this.selectedTime.format(context), valueStyle: valueStyle, onPressed: dart.fn(() => {
                this[_selectTime](context);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
  };
  (date_and_time_picker_demo._DateTimePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let selectedTime = opts && 'selectedTime' in opts ? opts.selectedTime : null;
    let selectDate = opts && 'selectDate' in opts ? opts.selectDate : null;
    let selectTime = opts && 'selectTime' in opts ? opts.selectTime : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$0] = labelText;
    this[selectedDate$] = selectedDate;
    this[selectedTime$] = selectedTime;
    this[selectDate$] = selectDate;
    this[selectTime$] = selectTime;
    date_and_time_picker_demo._DateTimePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_and_time_picker_demo._DateTimePicker.prototype;
  dart.addTypeTests(date_and_time_picker_demo._DateTimePicker);
  dart.setMethodSignature(date_and_time_picker_demo._DateTimePicker, () => ({
    __proto__: dart.getMethods(date_and_time_picker_demo._DateTimePicker.__proto__),
    [_selectDate]: dart.fnType(async.Future$(dart.void), [framework.BuildContext]),
    [_selectTime]: dart.fnType(async.Future$(dart.void), [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_and_time_picker_demo._DateTimePicker, "package:flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart");
  dart.setFieldSignature(date_and_time_picker_demo._DateTimePicker, () => ({
    __proto__: dart.getFields(date_and_time_picker_demo._DateTimePicker.__proto__),
    labelText: dart.finalFieldType(core.String),
    selectedDate: dart.finalFieldType(core.DateTime),
    selectedTime: dart.finalFieldType(time.TimeOfDay),
    selectDate: dart.finalFieldType(dart.fnType(dart.void, [core.DateTime])),
    selectTime: dart.finalFieldType(dart.fnType(dart.void, [time.TimeOfDay]))
  }));
  date_and_time_picker_demo.DateAndTimePickerDemo = class DateAndTimePickerDemo extends framework.StatefulWidget {
    createState() {
      return new date_and_time_picker_demo._DateAndTimePickerDemoState.new();
    }
  };
  (date_and_time_picker_demo.DateAndTimePickerDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    date_and_time_picker_demo.DateAndTimePickerDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_and_time_picker_demo.DateAndTimePickerDemo.prototype;
  dart.addTypeTests(date_and_time_picker_demo.DateAndTimePickerDemo);
  dart.setMethodSignature(date_and_time_picker_demo.DateAndTimePickerDemo, () => ({
    __proto__: dart.getMethods(date_and_time_picker_demo.DateAndTimePickerDemo.__proto__),
    createState: dart.fnType(date_and_time_picker_demo._DateAndTimePickerDemoState, [])
  }));
  dart.setLibraryUri(date_and_time_picker_demo.DateAndTimePickerDemo, "package:flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart");
  dart.defineLazy(date_and_time_picker_demo.DateAndTimePickerDemo, {
    /*date_and_time_picker_demo.DateAndTimePickerDemo.routeName*/get routeName() {
      return "/material/date-and-time-pickers";
    }
  });
  const _fromDate = dart.privateName(date_and_time_picker_demo, "_fromDate");
  const _fromTime = dart.privateName(date_and_time_picker_demo, "_fromTime");
  const TimeOfDay_minute = dart.privateName(time, "TimeOfDay.minute");
  const TimeOfDay_hour = dart.privateName(time, "TimeOfDay.hour");
  let C46;
  const _toDate = dart.privateName(date_and_time_picker_demo, "_toDate");
  const _toTime = dart.privateName(date_and_time_picker_demo, "_toTime");
  const _allActivities = dart.privateName(date_and_time_picker_demo, "_allActivities");
  const _activity = dart.privateName(date_and_time_picker_demo, "_activity");
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
  let C47;
  let C50;
  let C49;
  let C48;
  let C53;
  let C54;
  let C52;
  let C51;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C55;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const _name = dart.privateName(borders, "_name");
  let C59;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C60;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C58;
  const InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C62;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C61;
  const OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  const OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  let C57;
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C56;
  let C65;
  let C66;
  let C67;
  let C64;
  let C63;
  let C68;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C74;
  let C73;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C81;
  let C80;
  let C87;
  let C89;
  let C88;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C98;
  let C97;
  let C104;
  let C105;
  let C106;
  let C103;
  let C102;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C115;
  let C112;
  let C111;
  let C118;
  let C117;
  let C116;
  let C121;
  let C122;
  let C120;
  let C119;
  date_and_time_picker_demo._DateAndTimePickerDemoState = class _DateAndTimePickerDemoState extends framework.State$(date_and_time_picker_demo.DateAndTimePickerDemo) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C47 || CT.C47, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/date-and-time-pickers", {$creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), body: new dropdown.DropdownButtonHideUnderline.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new scroll_view.ListView.new({padding: C55 || CT.C55, children: JSArrayOfWidget().of([new text_field.TextField.new({enabled: true, decoration: C56 || CT.C56, style: theme.Theme.of(context).textTheme.display1, $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), new text_field.TextField.new({decoration: C68 || CT.C68, style: theme.Theme.of(context).textTheme.display1.copyWith({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new date_and_time_picker_demo._DateTimePicker.new({labelText: "From", selectedDate: this[_fromDate], selectedTime: this[_fromTime], selectDate: dart.fn(date => {
                    this.setState(dart.fn(() => {
                      this[_fromDate] = date;
                    }, VoidToNull()));
                  }, DateTimeToNull()), selectTime: dart.fn(time => {
                    this.setState(dart.fn(() => {
                      this[_fromTime] = time;
                    }, VoidToNull()));
                  }, TimeOfDayToNull()), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new date_and_time_picker_demo._DateTimePicker.new({labelText: "To", selectedDate: this[_toDate], selectedTime: this[_toTime], selectDate: dart.fn(date => {
                    this.setState(dart.fn(() => {
                      this[_toDate] = date;
                    }, VoidToNull()));
                  }, DateTimeToNull()), selectTime: dart.fn(time => {
                    this.setState(dart.fn(() => {
                      this[_toTime] = time;
                    }, VoidToNull()));
                  }, TimeOfDayToNull()), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), C87 || CT.C87, new input_decorator.InputDecorator.new({decoration: C88 || CT.C88, isEmpty: this[_activity] == null, child: new (DropdownButtonOfString()).new({value: this[_activity], onChanged: dart.fn(newValue => {
                      this.setState(dart.fn(() => {
                        this[_activity] = newValue;
                      }, VoidToNull()));
                    }, StringToNull()), items: this[_allActivities][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119});
    }
  };
  (date_and_time_picker_demo._DateAndTimePickerDemoState.new = function() {
    this[_fromDate] = new core.DateTime.now();
    this[_fromTime] = C46 || CT.C46;
    this[_toDate] = new core.DateTime.now();
    this[_toTime] = C46 || CT.C46;
    this[_allActivities] = JSArrayOfString().of(["hiking", "swimming", "boating", "fishing"]);
    this[_activity] = "fishing";
    date_and_time_picker_demo._DateAndTimePickerDemoState.__proto__.new.call(this);
    ;
  }).prototype = date_and_time_picker_demo._DateAndTimePickerDemoState.prototype;
  dart.addTypeTests(date_and_time_picker_demo._DateAndTimePickerDemoState);
  dart.setMethodSignature(date_and_time_picker_demo._DateAndTimePickerDemoState, () => ({
    __proto__: dart.getMethods(date_and_time_picker_demo._DateAndTimePickerDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(date_and_time_picker_demo._DateAndTimePickerDemoState, "package:flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart");
  dart.setFieldSignature(date_and_time_picker_demo._DateAndTimePickerDemoState, () => ({
    __proto__: dart.getFields(date_and_time_picker_demo._DateAndTimePickerDemoState.__proto__),
    [_fromDate]: dart.fieldType(core.DateTime),
    [_fromTime]: dart.fieldType(time.TimeOfDay),
    [_toDate]: dart.fieldType(core.DateTime),
    [_toTime]: dart.fieldType(time.TimeOfDay),
    [_allActivities]: dart.finalFieldType(core.List$(core.String)),
    [_activity]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo", {
    "package:flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.dart": date_and_time_picker_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_and_time_picker_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqBe;;;;;;IACA;;;;;;IACG;;;;;;IACG;;;;;;IACN;;;;;;UAGa;AACxB,YAAO,kCACE,uBACA,oDACO,oDACC,6BAEF,wBACJ,sCACgC,mDACV,iCACT,sBAChB,kBAAK,wBAAkB,wEACvB,kBAAW,qCAC6B,YAAvB,AAAY,eAAT,OAAO,cAA2B,uBACrC,AAAK,8BACL;IAK3B;;;QApCS;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACH,4EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2CR;;;;;;IACE;;;;;;IACC;;;;;;IACa;;;;;;IACC;;;;;;kBAEQ;AAAd;AACP,sBAAS,MAAM,qCACjB,OAAO,eACH,8BACF,sBAAS,MAAM,cAChB,sBAAS;AACvB,YAAI,MAAM,IAAI,qBAAQ,MAAM,EAAI,oBAAc,AAAkB,gBAAP,MAAM;MACjE;;kBAEsC;AAAd;AACN,sBACZ,MAAM,qCAAwB,OAAO,eAAe;AACxD,YAAI,MAAM,IAAI,qBAAQ,MAAM,EAAI,oBAAc,AAAkB,gBAAP,MAAM;MACjE;;UAG0B;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AAC7C,YAAO,wCACkC,uCACrB,sBAChB,8BACQ,UACC,6DACM,2BACW,AAAQ,mCAAO,gCACzB,UAAU,aACX;AACW,gBAApB,kBAAY,OAAO;iKAKzB,8BACQ,UACC,6DACM,AAAa,yBAAO,OAAO,eAC1B,UAAU,aACX;AACW,gBAApB,kBAAY,OAAO;;IAM/B;;;QA3DS;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACH,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;AA4DwB;IAA6B;;;;;;EAC5E;;;;;;;;MAJsB,yDAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoBH;AACxB,YAAO,oCACG,uDAEW,sBACf,2MAGE,qDACG,iCACA,eACG,cACD,gEAEa,sBAChB,uCACW,wCAKI,AAAY,AAAU,eAAnB,OAAO,+EAEzB,gEAIe,AACR,AACA,AACA,eAHW,OAAO,yCAGC,iEAE1B,8DACa,sBACG,+BACA,6BACF,QAAU;AAGlB,oBAFF,cAAS;AACS,sBAAhB,kBAAY,IAAI;;oDAGR,QAAW;AAGnB,oBAFF,cAAS;AACS,sBAAhB,kBAAY,IAAI;;kGAItB,8DACa,oBACG,6BACA,2BACF,QAAU;AAGlB,oBAFF,cAAS;AACO,sBAAd,gBAAU,IAAI;;oDAGN,QAAW;AAGnB,oBAFF,cAAS;AACO,sBAAd,gBAAU,IAAI;;iHAKpB,4EAMW,AAAU,mBAAG,aACf,2CACE,4BACI,QAAQ;AAGf,sBAFF,cAAS;AACa,wBAApB,kBAAY,QAAQ;;+CAGjB,AACF,AAKF,uDALgC,QAAQ,SAClC,6CACE,KAAK,SACL,kBAAK,KAAK;IAUrC;;;IAxGS,kBAAqB;IACpB;IACD,gBAAmB;IAClB;IACS,uBAAyB,sBAC1C,UACA,YACA,WACA;IAEK,kBAAY;;;EA+FrB","file":"date_and_time_picker_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__date_and_time_picker_demo: date_and_time_picker_demo
  };
});

//# sourceMappingURL=date_and_time_picker_demo.ddc.js.map
