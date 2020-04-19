define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const snack_bar_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let WidgetToContainer = () => (WidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 24
      });
    },
    get C1() {
      return C1 = dart.const({
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
        [Text_data]: "Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action."
      });
    },
    get C2() {
      return C2 = dart.const({
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
        [Text_data]: "Snackbars should contain a single line of text directly related to the operation performed. They cannot contain icons."
      });
    },
    get C3() {
      return C3 = dart.const({
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
        [Text_data]: "SHOW A SNACKBAR"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 78,
        [_Location_line]: 48,
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
        [_Location_column]: 34,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 91,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 35,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 65,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 29,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 25,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "action",
        [_Location_column]: 25,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 45,
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
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 26,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 42,
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
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
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
        [Text_data]: "By default snackbars automatically disappear after a few seconds "
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 12,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 12,
        [EdgeInsets__left]: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 64,
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
        [_Location_column]: 20,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
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
        [Text_data]: "Snackbar"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 58,
        [_Location_line]: 75,
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
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 74,
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
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.dart"
      });
    }
  });
  snack_bar_demo.SnackBarDemo = class SnackBarDemo extends framework.StatefulWidget {
    createState() {
      return new snack_bar_demo._SnackBarDemoState.new();
    }
  };
  (snack_bar_demo.SnackBarDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    snack_bar_demo.SnackBarDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = snack_bar_demo.SnackBarDemo.prototype;
  dart.addTypeTests(snack_bar_demo.SnackBarDemo);
  dart.setMethodSignature(snack_bar_demo.SnackBarDemo, () => ({
    __proto__: dart.getMethods(snack_bar_demo.SnackBarDemo.__proto__),
    createState: dart.fnType(snack_bar_demo._SnackBarDemoState, [])
  }));
  dart.setLibraryUri(snack_bar_demo.SnackBarDemo, "package:flutter_web.examples.gallery/demo/material/snack_bar_demo.dart");
  dart.defineLazy(snack_bar_demo.SnackBarDemo, {
    /*snack_bar_demo.SnackBarDemo.routeName*/get routeName() {
      return "/material/snack-bar";
    }
  });
  const _snackBarIndex = dart.privateName(snack_bar_demo, "_snackBarIndex");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C0;
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
  let C1;
  let C2;
  let C3;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C31;
  let C32;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C46;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  snack_bar_demo._SnackBarDemoState = class _SnackBarDemoState extends framework.State$(snack_bar_demo.SnackBarDemo) {
    buildBody(context) {
      return new safe_area.SafeArea.new({top: false, bottom: false, child: new scroll_view.ListView.new({padding: C0 || CT.C0, children: JSArrayOfWidget().of([C1 || CT.C1, C2 || CT.C2, new basic.Center.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({child: C3 || CT.C3, onPressed: dart.fn(() => {
                      let t0;
                      let thisSnackBarIndex = (t0 = this[_snackBarIndex], this[_snackBarIndex] = dart.notNull(t0) + 1, t0);
                      scaffold.Scaffold.of(context).showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("This is snackbar #" + dart.str(thisSnackBarIndex) + ".", {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), action: new snack_bar.SnackBarAction.new({label: "ACTION", onPressed: dart.fn(() => {
                            scaffold.Scaffold.of(context).showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new("You pressed snackbar " + dart.str(thisSnackBarIndex) + "'s action.", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}));
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21})]), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), C31 || CT.C31])[$map](framework.Widget, dart.fn(child => new container.Container.new({margin: C32 || CT.C32, child: child, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), WidgetToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C46 || CT.C46, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/snack-bar", {$creationLocationd_0dea112b090073317d4: C47 || CT.C47})]), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), body: new basic.Builder.new({builder: dart.bind(this, 'buildBody'), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
    }
  };
  (snack_bar_demo._SnackBarDemoState.new = function() {
    this[_snackBarIndex] = 1;
    snack_bar_demo._SnackBarDemoState.__proto__.new.call(this);
    ;
  }).prototype = snack_bar_demo._SnackBarDemoState.prototype;
  dart.addTypeTests(snack_bar_demo._SnackBarDemoState);
  dart.setMethodSignature(snack_bar_demo._SnackBarDemoState, () => ({
    __proto__: dart.getMethods(snack_bar_demo._SnackBarDemoState.__proto__),
    buildBody: dart.fnType(framework.Widget, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(snack_bar_demo._SnackBarDemoState, "package:flutter_web.examples.gallery/demo/material/snack_bar_demo.dart");
  dart.setFieldSignature(snack_bar_demo._SnackBarDemoState, () => ({
    __proto__: dart.getFields(snack_bar_demo._SnackBarDemoState.__proto__),
    [_snackBarIndex]: dart.fieldType(core.int)
  }));
  dart.defineLazy(snack_bar_demo, {
    /*snack_bar_demo._text1*/get _text1() {
      return "Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.";
    },
    /*snack_bar_demo._text2*/get _text2() {
      return "Snackbars should contain a single line of text directly related to the operation performed. They cannot contain icons.";
    },
    /*snack_bar_demo._text3*/get _text3() {
      return "By default snackbars automatically disappear after a few seconds ";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/snack_bar_demo", {
    "package:flutter_web.examples.gallery/demo/material/snack_bar_demo.dart": snack_bar_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["snack_bar_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBsC;IAAoB;;;QALhC;;AAAQ,+DAAW,GAAG;;EAAC;;;;;;;;MAE3B,qCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cASC;AAC5B,YAAO,kCACA,eACG,cACD,8DAEe,AAuBhB,AAIC,gDAxBD,6BACS,6BAAsB,sBAC3B,mEAEe;;AACC,+CAAkC,2BAAd,0CAAc;AAU1C,sBATO,AAAY,qBAAT,OAAO,eAAe,qCACvB,kBAAK,AAAuC,gCAAnB,iBAAiB,yEAC3C,yCACG,qBACI;AAGsD,4BAFtD,AAAY,qBAAT,OAAO,eAAe,qCACrB,kBACL,AAAoD,mCAA7B,iBAAiB;;2PAOtD,QAAQ,SACb,2DAEI,KAAK;IAG1B;UAG0B;AACxB,YAAO,oCACK,uDAEW,sBACf,+LAGE,0CAGO;IACnB;;;IApDI,uBAAiB;;;EAqDvB;;;;;;;;;;;;;MA3Ea,qBAAM;;;MAKN,qBAAM;;;MAIN,qBAAM","file":"snack_bar_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__snack_bar_demo: snack_bar_demo
  };
});

//# sourceMappingURL=snack_bar_demo.ddc.js.map
