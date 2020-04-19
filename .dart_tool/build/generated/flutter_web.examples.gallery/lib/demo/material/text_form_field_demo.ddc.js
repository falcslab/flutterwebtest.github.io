define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const form = packages__flutter_web__animation.src__widgets__form;
  const text = packages__flutter_web__animation.src__widgets__text;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text_input = packages__flutter_web__animation.src__services__text_input;
  const text_formatter = packages__flutter_web__animation.src__services__text_formatter;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const text_form_field = packages__flutter_web__material.src__material__text_form_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const input_border = packages__flutter_web__material.src__material__input_border;
  const icons = packages__flutter_web__material.src__material__icons;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const theme = packages__flutter_web__material.src__material__theme;
  const ui = packages__flutter_web_ui__ui.ui;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors$ = packages__flutter_web__src__animation__animation.src__painting__colors;
  const text_editing = packages__flutter_web__src__animation__animation.src__services__text_editing;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const text_form_field_demo = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $substring = dartx.substring;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let FormFieldStateOfString = () => (FormFieldStateOfString = dart.constFn(form.FormFieldState$(core.String)))();
  let GlobalKeyOfFormFieldStateOfString = () => (GlobalKeyOfFormFieldStateOfString = dart.constFn(framework.GlobalKey$(FormFieldStateOfString())))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.solid",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C2 || CT.C2,
        [BorderSide_width]: 1,
        [BorderSide_color]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C5 || CT.C5,
        [BorderRadius_bottomLeft]: C5 || CT.C5,
        [BorderRadius_topRight]: C6 || CT.C6,
        [BorderRadius_topLeft]: C6 || CT.C6
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: input_border.UnderlineInputBorder.prototype,
        [InputBorder_borderSide]: C1 || CT.C1,
        [UnderlineInputBorder_borderRadius]: C4 || CT.C4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 13,
        [_Location_line]: 77,
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
        [_Location_column]: 18,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFieldSubmitted",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 53,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
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
        [Text_data]: "This form has errors"
      });
    },
    get C31() {
      return C31 = dart.const({
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
        [Text_data]: "Really leave this form?"
      });
    },
    get C32() {
      return C32 = dart.const({
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
        [Text_data]: "YES"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
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
        [Text_data]: "NO"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 158,
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
        [_Location_column]: 17,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
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
        [Text_data]: "Text fields"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 61,
        [_Location_line]: 176,
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
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 175,
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
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 16
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C59 || CT.C59
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C0 || CT.C0,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
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
        [InputDecoration_hintText]: "What do people call you?",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Name * ",
        [InputDecoration_icon]: C58 || CT.C58
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57549
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C68 || CT.C68
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C0 || CT.C0,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: "+1",
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
        [InputDecoration_hintText]: "Where can we reach you?",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Phone Number * ",
        [InputDecoration_icon]: C67 || CT.C67
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C78 || CT.C78
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C0 || CT.C0,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
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
        [InputDecoration_hintText]: "Your email address",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "E-mail",
        [InputDecoration_icon]: C77 || CT.C77
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C6 || CT.C6,
        [BorderRadius_bottomLeft]: C6 || CT.C6,
        [BorderRadius_topRight]: C6 || CT.C6,
        [BorderRadius_topLeft]: C6 || CT.C6
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C1 || CT.C1,
        [OutlineInputBorder_borderRadius]: C86 || CT.C86,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C85 || CT.C85,
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
        [InputDecoration_hintText]: "Tell us about yourself (e.g., write down what you do or what hobbies you have)",
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: "Keep it short, this is just a demo.",
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Life story",
        [InputDecoration_icon]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 19,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 243,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293457385.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4291356361.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4289058471.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286695300.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284922730.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4283215696.0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282622023.0
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281896508.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281236786.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4279983648.0
      });
    },
    get C94() {
      return C94 = dart.constMap(core.int, ui.Color, [50, C95 || CT.C95, 100, C96 || CT.C96, 200, C97 || CT.C97, 300, C98 || CT.C98, 400, C99 || CT.C99, 500, C100 || CT.C100, 600, C101 || CT.C101, 700, C102 || CT.C102, 800, C103 || CT.C103, 900, C104 || CT.C104]);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color__value]: 4283215696.0,
        [ColorSwatch__swatch]: C94 || CT.C94
      });
    },
    get C92() {
      return C92 = dart.const({
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
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C93 || CT.C93,
        [TextStyle_inherit]: true
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C85 || CT.C85,
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
        [InputDecoration_suffixStyle]: C92 || CT.C92,
        [InputDecoration_suffixText]: "USD",
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: "$",
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
        [InputDecoration_labelText]: "Salary",
        [InputDecoration_icon]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fieldKey",
        [_Location_column]: 19,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "helperText",
        [_Location_column]: 19,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 19,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFieldSubmitted",
        [_Location_column]: 19,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C0 || CT.C0,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: true,
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
        [InputDecoration_labelText]: "Re-type password",
        [InputDecoration_icon]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 19,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 19,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
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
        [Text_data]: "SUBMIT"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 297,
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
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 190,
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
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autovalidate",
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onWillPop",
        [_Location_column]: 11,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147, C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.dart"
      });
    }
  });
  text_form_field_demo.TextFormFieldDemo = class TextFormFieldDemo extends framework.StatefulWidget {
    createState() {
      return new text_form_field_demo.TextFormFieldDemoState.new();
    }
  };
  (text_form_field_demo.TextFormFieldDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    text_form_field_demo.TextFormFieldDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_form_field_demo.TextFormFieldDemo.prototype;
  dart.addTypeTests(text_form_field_demo.TextFormFieldDemo);
  dart.setMethodSignature(text_form_field_demo.TextFormFieldDemo, () => ({
    __proto__: dart.getMethods(text_form_field_demo.TextFormFieldDemo.__proto__),
    createState: dart.fnType(text_form_field_demo.TextFormFieldDemoState, [])
  }));
  dart.setLibraryUri(text_form_field_demo.TextFormFieldDemo, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.defineLazy(text_form_field_demo.TextFormFieldDemo, {
    /*text_form_field_demo.TextFormFieldDemo.routeName*/get routeName() {
      return "/material/text-form-field";
    }
  });
  const name = dart.privateName(text_form_field_demo, "PersonData.name");
  const phoneNumber = dart.privateName(text_form_field_demo, "PersonData.phoneNumber");
  const email = dart.privateName(text_form_field_demo, "PersonData.email");
  const password = dart.privateName(text_form_field_demo, "PersonData.password");
  text_form_field_demo.PersonData = class PersonData extends core.Object {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get phoneNumber() {
      return this[phoneNumber];
    }
    set phoneNumber(value) {
      this[phoneNumber] = value;
    }
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get password() {
      return this[password];
    }
    set password(value) {
      this[password] = value;
    }
  };
  (text_form_field_demo.PersonData.new = function() {
    this[name] = "";
    this[phoneNumber] = "";
    this[email] = "";
    this[password] = "";
    ;
  }).prototype = text_form_field_demo.PersonData.prototype;
  dart.addTypeTests(text_form_field_demo.PersonData);
  dart.setLibraryUri(text_form_field_demo.PersonData, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.setFieldSignature(text_form_field_demo.PersonData, () => ({
    __proto__: dart.getFields(text_form_field_demo.PersonData.__proto__),
    name: dart.fieldType(core.String),
    phoneNumber: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String)
  }));
  const fieldKey$ = dart.privateName(text_form_field_demo, "PasswordField.fieldKey");
  const hintText$ = dart.privateName(text_form_field_demo, "PasswordField.hintText");
  const labelText$ = dart.privateName(text_form_field_demo, "PasswordField.labelText");
  const helperText$ = dart.privateName(text_form_field_demo, "PasswordField.helperText");
  const onSaved$ = dart.privateName(text_form_field_demo, "PasswordField.onSaved");
  const validator$ = dart.privateName(text_form_field_demo, "PasswordField.validator");
  const onFieldSubmitted$ = dart.privateName(text_form_field_demo, "PasswordField.onFieldSubmitted");
  text_form_field_demo.PasswordField = class PasswordField extends framework.StatefulWidget {
    get fieldKey() {
      return this[fieldKey$];
    }
    set fieldKey(value) {
      super.fieldKey = value;
    }
    get hintText() {
      return this[hintText$];
    }
    set hintText(value) {
      super.hintText = value;
    }
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get helperText() {
      return this[helperText$];
    }
    set helperText(value) {
      super.helperText = value;
    }
    get onSaved() {
      return this[onSaved$];
    }
    set onSaved(value) {
      super.onSaved = value;
    }
    get validator() {
      return this[validator$];
    }
    set validator(value) {
      super.validator = value;
    }
    get onFieldSubmitted() {
      return this[onFieldSubmitted$];
    }
    set onFieldSubmitted(value) {
      super.onFieldSubmitted = value;
    }
    createState() {
      return new text_form_field_demo._PasswordFieldState.new();
    }
  };
  (text_form_field_demo.PasswordField.new = function(opts) {
    let fieldKey = opts && 'fieldKey' in opts ? opts.fieldKey : null;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let helperText = opts && 'helperText' in opts ? opts.helperText : null;
    let onSaved = opts && 'onSaved' in opts ? opts.onSaved : null;
    let validator = opts && 'validator' in opts ? opts.validator : null;
    let onFieldSubmitted = opts && 'onFieldSubmitted' in opts ? opts.onFieldSubmitted : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[fieldKey$] = fieldKey;
    this[hintText$] = hintText;
    this[labelText$] = labelText;
    this[helperText$] = helperText;
    this[onSaved$] = onSaved;
    this[validator$] = validator;
    this[onFieldSubmitted$] = onFieldSubmitted;
    text_form_field_demo.PasswordField.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_form_field_demo.PasswordField.prototype;
  dart.addTypeTests(text_form_field_demo.PasswordField);
  dart.setMethodSignature(text_form_field_demo.PasswordField, () => ({
    __proto__: dart.getMethods(text_form_field_demo.PasswordField.__proto__),
    createState: dart.fnType(text_form_field_demo._PasswordFieldState, [])
  }));
  dart.setLibraryUri(text_form_field_demo.PasswordField, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.setFieldSignature(text_form_field_demo.PasswordField, () => ({
    __proto__: dart.getFields(text_form_field_demo.PasswordField.__proto__),
    fieldKey: dart.finalFieldType(key.Key),
    hintText: dart.finalFieldType(core.String),
    labelText: dart.finalFieldType(core.String),
    helperText: dart.finalFieldType(core.String),
    onSaved: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    validator: dart.finalFieldType(dart.fnType(core.String, [core.String])),
    onFieldSubmitted: dart.finalFieldType(dart.fnType(dart.void, [core.String]))
  }));
  const _obscureText = dart.privateName(text_form_field_demo, "_obscureText");
  const _name = dart.privateName(borders, "_name");
  let C2;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C3;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C1;
  const InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C5;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  let C6;
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C4;
  const UnderlineInputBorder_borderRadius = dart.privateName(input_border, "UnderlineInputBorder.borderRadius");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C16;
  let C15;
  text_form_field_demo._PasswordFieldState = class _PasswordFieldState extends framework.State$(text_form_field_demo.PasswordField) {
    build(context) {
      return new text_form_field.TextFormField.new({key: this.widget.fieldKey, obscureText: this[_obscureText], maxLength: 8, onSaved: this.widget.onSaved, validator: this.widget.validator, onFieldSubmitted: this.widget.onFieldSubmitted, decoration: new input_decorator.InputDecoration.new({border: C0 || CT.C0, filled: true, hintText: this.widget.hintText, labelText: this.widget.labelText, helperText: this.widget.helperText, suffixIcon: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              this.setState(dart.fn(() => {
                this[_obscureText] = !dart.test(this[_obscureText]);
              }, VoidToNull()));
            }, VoidToNull()), child: new icon.Icon.new(dart.test(this[_obscureText]) ? icons.Icons.visibility : icons.Icons.visibility_off, {semanticLabel: dart.test(this[_obscureText]) ? "show password" : "hide password", $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11})}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (text_form_field_demo._PasswordFieldState.new = function() {
    this[_obscureText] = true;
    text_form_field_demo._PasswordFieldState.__proto__.new.call(this);
    ;
  }).prototype = text_form_field_demo._PasswordFieldState.prototype;
  dart.addTypeTests(text_form_field_demo._PasswordFieldState);
  dart.setMethodSignature(text_form_field_demo._PasswordFieldState, () => ({
    __proto__: dart.getMethods(text_form_field_demo._PasswordFieldState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_form_field_demo._PasswordFieldState, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.setFieldSignature(text_form_field_demo._PasswordFieldState, () => ({
    __proto__: dart.getFields(text_form_field_demo._PasswordFieldState.__proto__),
    [_obscureText]: dart.fieldType(core.bool)
  }));
  const _scaffoldKey = dart.privateName(text_form_field_demo, "_scaffoldKey");
  const _autovalidate = dart.privateName(text_form_field_demo, "_autovalidate");
  const _formWasEdited = dart.privateName(text_form_field_demo, "_formWasEdited");
  const _formKey = dart.privateName(text_form_field_demo, "_formKey");
  const _passwordFieldKey = dart.privateName(text_form_field_demo, "_passwordFieldKey");
  const _phoneNumberFormatter = dart.privateName(text_form_field_demo, "_phoneNumberFormatter");
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  const _handleSubmitted = dart.privateName(text_form_field_demo, "_handleSubmitted");
  const _validateName = dart.privateName(text_form_field_demo, "_validateName");
  const _validatePhoneNumber = dart.privateName(text_form_field_demo, "_validatePhoneNumber");
  const _validatePassword = dart.privateName(text_form_field_demo, "_validatePassword");
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
  let C30;
  let C31;
  let C32;
  let C35;
  let C36;
  let C34;
  let C33;
  let C37;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
  const _warnUserAboutInvalidData = dart.privateName(text_form_field_demo, "_warnUserAboutInvalidData");
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
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C56;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
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
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C59;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C58;
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C57;
  let C62;
  let C63;
  let C64;
  let C65;
  let C61;
  let C60;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C70;
  let C69;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  const OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  const OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  let C85;
  let C84;
  let C89;
  let C90;
  let C88;
  let C87;
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
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C94;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C93;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C92;
  let C91;
  let C107;
  let C108;
  let C109;
  let C106;
  let C105;
  let C112;
  let C113;
  let C114;
  let C115;
  let C111;
  let C110;
  let C116;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C118;
  let C117;
  let C124;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  let C134;
  let C135;
  let C133;
  let C132;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C143;
  let C141;
  let C140;
  let C146;
  let C147;
  let C148;
  let C149;
  let C145;
  let C144;
  let C152;
  let C153;
  let C154;
  let C151;
  let C150;
  let C157;
  let C158;
  let C159;
  let C156;
  let C155;
  const person = dart.privateName(text_form_field_demo, "TextFormFieldDemoState.person");
  text_form_field_demo.TextFormFieldDemoState = class TextFormFieldDemoState extends framework.State$(text_form_field_demo.TextFormFieldDemo) {
    get person() {
      return this[person];
    }
    set person(value) {
      this[person] = value;
    }
    showInSnackBar(value) {
      this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}));
    }
    [_handleSubmitted]() {
      let form = this[_formKey].currentState;
      if (!dart.test(form.validate())) {
        this[_autovalidate] = true;
        this.showInSnackBar("Please fix the errors in red before submitting.");
      } else {
        form.save();
        this.showInSnackBar(dart.str(this.person.name) + "'s phone number is " + dart.str(this.person.phoneNumber));
      }
    }
    [_validateName](value) {
      this[_formWasEdited] = true;
      if (value[$isEmpty]) return "Name is required.";
      let nameExp = core.RegExp.new("^[A-Za-z ]+$");
      if (!dart.test(nameExp.hasMatch(value))) return "Please enter only alphabetical characters.";
      return null;
    }
    [_validatePhoneNumber](value) {
      this[_formWasEdited] = true;
      let phoneExp = core.RegExp.new("^\\(\\d\\d\\d\\) \\d\\d\\d\\-\\d\\d\\d\\d$");
      if (!dart.test(phoneExp.hasMatch(value))) return "(###) ###-#### - Enter a US phone number.";
      return null;
    }
    [_validatePassword](value) {
      this[_formWasEdited] = true;
      let passwordField = this[_passwordFieldKey].currentState;
      if (passwordField.value == null || passwordField.value[$isEmpty]) return "Please enter a password.";
      if (passwordField.value != value) return "The passwords don't match";
      return null;
    }
    [_warnUserAboutInvalidData]() {
      return async.async(core.bool, (function* _warnUserAboutInvalidData() {
        let t0;
        let form = this[_formKey].currentState;
        if (form == null || !dart.test(this[_formWasEdited]) || dart.test(form.validate())) return true;
        t0 = (yield dialog.showDialog(core.bool, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C30 || CT.C30, content: C31 || CT.C31, actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: C32 || CT.C32, onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.bool, true);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new flat_button.FlatButton.new({child: C37 || CT.C37, onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.bool, false);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), BuildContextToAlertDialog())}));
        return t0 == null ? false : t0;
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C47 || CT.C47, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/text-form-field", {$creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), body: new safe_area.SafeArea.new({top: false, bottom: false, child: new form.Form.new({key: this[_formKey], autovalidate: this[_autovalidate], onWillPop: dart.bind(this, _warnUserAboutInvalidData), child: new single_child_scroll_view.SingleChildScrollView.new({padding: C55 || CT.C55, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([C56 || CT.C56, new text_form_field.TextFormField.new({textCapitalization: text_input.TextCapitalization.words, decoration: C57 || CT.C57, onSaved: dart.fn(value => {
                      this.person.name = value;
                    }, StringToNull()), validator: dart.bind(this, _validateName), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), C56 || CT.C56, new text_form_field.TextFormField.new({decoration: C66 || CT.C66, keyboardType: text_input.TextInputType.phone, onSaved: dart.fn(value => {
                      this.person.phoneNumber = value;
                    }, StringToNull()), validator: dart.bind(this, _validatePhoneNumber), inputFormatters: JSArrayOfTextInputFormatter().of([text_formatter.WhitelistingTextInputFormatter.digitsOnly, this[_phoneNumberFormatter]]), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), C56 || CT.C56, new text_form_field.TextFormField.new({decoration: C76 || CT.C76, keyboardType: text_input.TextInputType.emailAddress, onSaved: dart.fn(value => {
                      this.person.email = value;
                    }, StringToNull()), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), C56 || CT.C56, new text_form_field.TextFormField.new({decoration: C84 || CT.C84, maxLines: 3, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), C56 || CT.C56, new text_form_field.TextFormField.new({keyboardType: text_input.TextInputType.number, decoration: C91 || CT.C91, maxLines: 1, $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), C56 || CT.C56, new text_form_field_demo.PasswordField.new({fieldKey: this[_passwordFieldKey], helperText: "No more than 8 characters.", labelText: "Password *", onFieldSubmitted: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this.person.password = value;
                      }, VoidToNull()));
                    }, StringToNull()), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), C56 || CT.C56, new text_form_field.TextFormField.new({enabled: this.person.password != null && this.person.password[$isNotEmpty], decoration: C116 || CT.C116, maxLength: 8, obscureText: true, validator: dart.bind(this, _validatePassword), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), C56 || CT.C56, new basic.Center.new({child: new raised_button.RaisedButton.new({child: C124 || CT.C124, onPressed: dart.bind(this, _handleSubmitted), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), C56 || CT.C56, new text.Text.new("* indicates required field", {style: theme.Theme.of(context).textTheme.caption, $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), C56 || CT.C56]), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C155 || CT.C155});
    }
  };
  (text_form_field_demo.TextFormFieldDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[person] = new text_form_field_demo.PersonData.new();
    this[_autovalidate] = false;
    this[_formWasEdited] = false;
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_passwordFieldKey] = GlobalKeyOfFormFieldStateOfString().new();
    this[_phoneNumberFormatter] = new text_form_field_demo._UsNumberTextInputFormatter.new();
    text_form_field_demo.TextFormFieldDemoState.__proto__.new.call(this);
    ;
  }).prototype = text_form_field_demo.TextFormFieldDemoState.prototype;
  dart.addTypeTests(text_form_field_demo.TextFormFieldDemoState);
  dart.setMethodSignature(text_form_field_demo.TextFormFieldDemoState, () => ({
    __proto__: dart.getMethods(text_form_field_demo.TextFormFieldDemoState.__proto__),
    showInSnackBar: dart.fnType(dart.void, [core.String]),
    [_handleSubmitted]: dart.fnType(dart.void, []),
    [_validateName]: dart.fnType(core.String, [core.String]),
    [_validatePhoneNumber]: dart.fnType(core.String, [core.String]),
    [_validatePassword]: dart.fnType(core.String, [core.String]),
    [_warnUserAboutInvalidData]: dart.fnType(async.Future$(core.bool), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_form_field_demo.TextFormFieldDemoState, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.setFieldSignature(text_form_field_demo.TextFormFieldDemoState, () => ({
    __proto__: dart.getFields(text_form_field_demo.TextFormFieldDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    person: dart.fieldType(text_form_field_demo.PersonData),
    [_autovalidate]: dart.fieldType(core.bool),
    [_formWasEdited]: dart.fieldType(core.bool),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_passwordFieldKey]: dart.finalFieldType(framework.GlobalKey$(form.FormFieldState$(core.String))),
    [_phoneNumberFormatter]: dart.finalFieldType(text_form_field_demo._UsNumberTextInputFormatter)
  }));
  text_form_field_demo._UsNumberTextInputFormatter = class _UsNumberTextInputFormatter extends text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      let newTextLength = newValue.text.length;
      let selectionIndex = newValue.selection.end;
      let usedSubstringIndex = 0;
      let newText = new core.StringBuffer.new();
      if (newTextLength >= 1) {
        newText.write("(");
        if (dart.notNull(newValue.selection.end) >= 1) selectionIndex = dart.notNull(selectionIndex) + 1;
      }
      if (newTextLength >= 4) {
        newText.write(newValue.text[$substring](0, usedSubstringIndex = 3) + ") ");
        if (dart.notNull(newValue.selection.end) >= 3) selectionIndex = dart.notNull(selectionIndex) + 2;
      }
      if (newTextLength >= 7) {
        newText.write(newValue.text[$substring](3, usedSubstringIndex = 6) + "-");
        if (dart.notNull(newValue.selection.end) >= 6) selectionIndex = dart.notNull(selectionIndex) + 1;
      }
      if (newTextLength >= 11) {
        newText.write(newValue.text[$substring](6, usedSubstringIndex = 10) + " ");
        if (dart.notNull(newValue.selection.end) >= 10) selectionIndex = dart.notNull(selectionIndex) + 1;
      }
      if (newTextLength >= usedSubstringIndex) newText.write(newValue.text[$substring](usedSubstringIndex));
      return new text_input.TextEditingValue.new({text: newText.toString(), selection: new text_editing.TextSelection.collapsed({offset: selectionIndex})});
    }
  };
  (text_form_field_demo._UsNumberTextInputFormatter.new = function() {
    ;
  }).prototype = text_form_field_demo._UsNumberTextInputFormatter.prototype;
  dart.addTypeTests(text_form_field_demo._UsNumberTextInputFormatter);
  dart.setMethodSignature(text_form_field_demo._UsNumberTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_form_field_demo._UsNumberTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_form_field_demo._UsNumberTextInputFormatter, "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart");
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/text_form_field_demo", {
    "package:flutter_web.examples.gallery/demo/material/text_form_field_demo.dart": text_form_field_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_form_field_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiB0C;IAAwB;;;QALnC;;AAAQ,0EAAW,GAAG;;EAAC;;;;;;;;MAEhC,gDAAS;;;;;;;;;IAOtB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;IAHA,aAAO;IACP,oBAAc;IACd,cAAQ;IACR,iBAAW;;EACpB;;;;;;;;;;;;;;;;;;IAaY;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACiB;;;;;;IACG;;;;;;IACN;;;;;;;AAGU;IAAqB;;;QAlBnD;QACA;QACA;QACA;QACA;QACA;QACA;;IANA;IACA;IACA;IACA;IACA;IACA;IACA;AAPD;;EAQJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAkBwB;AACxB,YAAO,6CACA,AAAO,mCACC,+BACF,YACF,AAAO,gCACL,AAAO,yCACA,AAAO,0CACb,sEAEF,gBACE,AAAO,iCACN,AAAO,mCACN,AAAO,oCACP,iDACH;AAGH,cAFF,cAAS;AACqB,gBAA5B,qBAAe,WAAC;;qCAGb,4BACL,sBAAqB,yBAAmB,sDACzB,sBAAe,kBAAkB;IAK1D;;;IA9BK,qBAAe;;;EA+BtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKa;;;;;;mBAEgB;AAC6C,MAAtE,AAAa,AAAa,6CAAa,qCAAkB,kBAAK,KAAK;IACrE;;AAWkB,iBAAO,AAAS;AAChC,qBAAK,AAAK,IAAD;AACa,QAApB,sBAAgB;AACiD,QAAjE,oBAAe;;AAEJ,QAAX,AAAK,IAAD;AACqE,QAAzE,oBAAwE,SAAtD,AAAO,oBAAK,iCAAsB,AAAO;;IAE/D;oBAE4B;AACL,MAArB,uBAAiB;AACjB,UAAI,AAAM,KAAD,YAAU,MAAO;AACb,oBAAU,gBAAO;AAC9B,qBAAK,AAAQ,OAAD,UAAU,KAAK,IACzB,MAAO;AACT,YAAO;IACT;2BAEmC;AACZ,MAArB,uBAAiB;AACJ,qBAAW,gBAAO;AAC/B,qBAAK,AAAS,QAAD,UAAU,KAAK,IAC1B,MAAO;AACT,YAAO;IACT;wBAEgC;AACT,MAArB,uBAAiB;AACY,0BAAgB,AAAkB;AAC/D,UAAI,AAAc,AAAM,aAAP,UAAU,QAAQ,AAAc,AAAM,aAAP,kBAC9C,MAAO;AACT,UAAI,AAAc,aAAD,UAAU,KAAK,EAAE,MAAO;AACzC,YAAO;IACT;;AAEsC;;AACpB,mBAAO,AAAS;AAChC,YAAI,AAAK,IAAD,IAAI,mBAAS,mCAAkB,AAAK,IAAD,cAAa,MAAO;AAE/D,cAAO,MAAM,uCACE,uBACA,QAAc,WACd,mFAGY,sBACf,iEAEa;AACsB,kBAArB,AAAY,uBAAT,OAAO,iBAAM;2FAG9B,iEAEa;AACuB,kBAAtB,AAAY,uBAAT,OAAO,iBAAM;;qBAhBnC,OAuBH;MACN;;UAG0B;AACxB,YAAO,iCACA,4BACG,uDAEW,sBACf,qMAGE,iCACC,eACG,cACD,wBACA,8BACS,0CACH,yCACJ,uFAEE,0CACkC,2CACrB,qCAEhB,2DACyC,yEAQ9B,QAAQ;AACI,sBAAnB,AAAO,mBAAO,KAAK;6DAEV,8FAGb,gFAS8B,yCACnB,QAAQ;AACW,sBAA1B,AAAO,0BAAc,KAAK;6DAEjB,8CAE0B,kCACJ,0DAE/B,uGAIJ,gFAQ8B,gDACnB,QAAQ;AACK,sBAApB,AAAO,oBAAQ,KAAK;gHAIxB,4EAQY,2EAGZ,qDAC8B,sEAOlB,6EAGZ,sDACY,qCACE,yCACD,gCACO,QAAQ;AAGtB,sBAFF,cAAS;AACgB,wBAAvB,AAAO,uBAAW,KAAK;;kHAK7B,gDAEM,AAAO,AAAiB,wBAAL,QAAQ,AAAO,AAAS,2EAMpC,gBACE,2BACF,oGAGb,6BACS,iFAEM,8JAIf,kBAAK,sCACY,AAAY,AAAU,eAAnB,OAAO;IAQzC;;;IA3N+B,qBAAe;IAEnC,eAAS;IAMf,sBAAgB;IAChB,uBAAiB;IAEK,iBAAW;IACE,0BACpC;IAC8B,8BAC9B;;;EA6MN;;;;;;;;;;;;;;;;;;;;;;;;qBAMuB,UAA2B;AACpC,0BAAgB,AAAS,AAAK,QAAN;AAC9B,2BAAiB,AAAS,AAAU,QAAX;AACzB,+BAAqB;AACN,oBAAU;AAC7B,UAAI,AAAc,aAAD,IAAI;AACD,QAAlB,AAAQ,OAAD,OAAO;AACd,YAA2B,aAAvB,AAAS,AAAU,QAAX,mBAAkB,GAAG,AAAgB,iBAAF,aAAd,cAAc;;AAEjD,UAAI,AAAc,aAAD,IAAI;AACqD,QAAxE,AAAQ,OAAD,OAAO,AAAS,AAAK,AAAqC,QAA3C,kBAAgB,GAAG,qBAAqB,KAAK;AACnE,YAA2B,aAAvB,AAAS,AAAU,QAAX,mBAAkB,GAAG,AAAmB,iBAAJ,aAAf,cAAc,IAAI;;AAErD,UAAI,AAAc,aAAD,IAAI;AACoD,QAAvE,AAAQ,OAAD,OAAO,AAAS,AAAK,AAAqC,QAA3C,kBAAgB,GAAG,qBAAqB,KAAK;AACnE,YAA2B,aAAvB,AAAS,AAAU,QAAX,mBAAkB,GAAG,AAAgB,iBAAF,aAAd,cAAc;;AAEjD,UAAI,AAAc,aAAD,IAAI;AACqD,QAAxE,AAAQ,OAAD,OAAO,AAAS,AAAK,AAAsC,QAA5C,kBAAgB,GAAG,qBAAqB,MAAM;AACpE,YAA2B,aAAvB,AAAS,AAAU,QAAX,mBAAkB,IAAI,AAAgB,iBAAF,aAAd,cAAc;;AAGlD,UAAI,AAAc,aAAD,IAAI,kBAAkB,EACrC,AAAQ,AAAkD,OAAnD,OAAO,AAAS,AAAK,QAAN,kBAAgB,kBAAkB;AAC1D,YAAO,4CACC,AAAQ,OAAD,wBACY,kDAAkB,cAAc;IAE7D;;;;EACF","file":"text_form_field_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__text_form_field_demo: text_form_field_demo
  };
});

//# sourceMappingURL=text_form_field_demo.ddc.js.map
