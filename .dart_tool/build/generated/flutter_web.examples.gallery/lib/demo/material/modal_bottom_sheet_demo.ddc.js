define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const bottom_sheet = packages__flutter_web__material.src__material__bottom_sheet;
  const theme = packages__flutter_web__material.src__material__theme;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const modal_bottom_sheet_demo = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
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
        [Text_data]: "Modal bottom sheet"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 61,
        [_Location_line]: 17,
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
        [_Location_column]: 29,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 17,
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
        [_Location_column]: 17,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
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
        [Text_data]: "SHOW BOTTOM SHEET"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 32,
        [EdgeInsets__right]: 32,
        [EdgeInsets__top]: 32,
        [EdgeInsets__left]: 32
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 37,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 33,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart"
      });
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
  let C7;
  let C5;
  let C4;
  let C8;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C9;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C30;
  let C29;
  modal_bottom_sheet_demo.ModalBottomSheetDemo = class ModalBottomSheetDemo extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C0 || CT.C0, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/modal-bottom-sheet", {$creationLocationd_0dea112b090073317d4: C1 || CT.C1})]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), body: new basic.Center.new({child: new raised_button.RaisedButton.new({child: C8 || CT.C8, onPressed: dart.fn(() => {
              bottom_sheet.showModalBottomSheet(dart.void, {context: context, builder: dart.fn(context => new container.Container.new({child: new basic.Padding.new({padding: C9 || CT.C9, child: new text.Text.new("This is the modal bottom sheet. Tap anywhere to dismiss.", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: theme.Theme.of(context).accentColor, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), BuildContextToContainer())});
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (modal_bottom_sheet_demo.ModalBottomSheetDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    modal_bottom_sheet_demo.ModalBottomSheetDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = modal_bottom_sheet_demo.ModalBottomSheetDemo.prototype;
  dart.addTypeTests(modal_bottom_sheet_demo.ModalBottomSheetDemo);
  dart.setMethodSignature(modal_bottom_sheet_demo.ModalBottomSheetDemo, () => ({
    __proto__: dart.getMethods(modal_bottom_sheet_demo.ModalBottomSheetDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(modal_bottom_sheet_demo.ModalBottomSheetDemo, "package:flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart");
  dart.defineLazy(modal_bottom_sheet_demo.ModalBottomSheetDemo, {
    /*modal_bottom_sheet_demo.ModalBottomSheetDemo.routeName*/get routeName() {
      return "/material/modal-bottom-sheet";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo", {
    "package:flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.dart": modal_bottom_sheet_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal_bottom_sheet_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,oCACK,qDAEW,sBAAC,oMAEd,6BACK,mEAEQ;AAaH,cAZN,uDACa,OAAO,WACP,QAAc,WACd,oCACI,oDAEI,kBACH,wEACqB,4BACd,qCACU,AAAY,eAAT,OAAO,yBACb;;IAGhD;;;;;;EACF;;;;;;;;MA5BsB,sDAAS","file":"modal_bottom_sheet_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__modal_bottom_sheet_demo: modal_bottom_sheet_demo
  };
});

//# sourceMappingURL=modal_bottom_sheet_demo.ddc.js.map
