define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/gallery/demo', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__gallery__demo, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const card = packages__flutter_web__material.src__material__card;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const elevation_demo = Object.create(dart.library);
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let doubleToCenter = () => (doubleToCenter = dart.constFn(dart.fnType(basic.Center, [core.double])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([0, 1, 2, 3, 4, 5, 8, 16, 24], core.double);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 20,
        [EdgeInsets__right]: 20,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 20
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 63,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
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
        [_Location_column]: 18,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
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
        [_Location_column]: 16,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 34,
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
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
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
        [Text_data]: "Elevation"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 57,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59413
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C26 || CT.C26
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 58,
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
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 65,
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
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 64,
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
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/elevation_demo.dart"
      });
    }
  });
  elevation_demo.ElevationDemo = class ElevationDemo extends framework.StatefulWidget {
    createState() {
      return new elevation_demo._ElevationDemoState.new();
    }
  };
  (elevation_demo.ElevationDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    elevation_demo.ElevationDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = elevation_demo.ElevationDemo.prototype;
  dart.addTypeTests(elevation_demo.ElevationDemo);
  dart.setMethodSignature(elevation_demo.ElevationDemo, () => ({
    __proto__: dart.getMethods(elevation_demo.ElevationDemo.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(elevation_demo.ElevationDemo, "package:flutter_web.examples.gallery/demo/material/elevation_demo.dart");
  dart.defineLazy(elevation_demo.ElevationDemo, {
    /*elevation_demo.ElevationDemo.routeName*/get routeName() {
      return "/material/elevation";
    }
  });
  const _showElevation = dart.privateName(elevation_demo, "_showElevation");
  let C0;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C3;
  let C2;
  let C7;
  let C6;
  let C5;
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
  let C19;
  let C18;
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
  let C21;
  let C24;
  let C23;
  let C22;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C26;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C25;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C36;
  let C35;
  let C40;
  let C41;
  let C39;
  let C38;
  elevation_demo._ElevationDemoState = class _ElevationDemoState extends framework.State$(elevation_demo.ElevationDemo) {
    buildCards() {
      let elevations = C0 || CT.C0;
      return elevations[$map](framework.Widget, dart.fn(elevation => new basic.Center.new({child: new card.Card.new({margin: C1 || CT.C1, elevation: dart.test(this[_showElevation]) ? elevation : 0.0, child: new basic.SizedBox.new({height: 100.0, width: 100.0, child: new basic.Center.new({child: new text.Text.new(elevation[$toStringAsFixed](0) + " pt", {$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), doubleToCenter()))[$toList]();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C21 || CT.C21, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/elevation", {$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new icon_button.IconButton.new({icon: C25 || CT.C25, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => this[_showElevation] = !dart.test(this[_showElevation]), VoidTobool()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), body: new scroll_view.ListView.new({children: this.buildCards(), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
  };
  (elevation_demo._ElevationDemoState.new = function() {
    this[_showElevation] = true;
    elevation_demo._ElevationDemoState.__proto__.new.call(this);
    ;
  }).prototype = elevation_demo._ElevationDemoState.prototype;
  dart.addTypeTests(elevation_demo._ElevationDemoState);
  dart.setMethodSignature(elevation_demo._ElevationDemoState, () => ({
    __proto__: dart.getMethods(elevation_demo._ElevationDemoState.__proto__),
    buildCards: dart.fnType(core.List$(framework.Widget), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(elevation_demo._ElevationDemoState, "package:flutter_web.examples.gallery/demo/material/elevation_demo.dart");
  dart.setFieldSignature(elevation_demo._ElevationDemoState, () => ({
    __proto__: dart.getFields(elevation_demo._ElevationDemoState.__proto__),
    [_showElevation]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/elevation_demo", {
    "package:flutter_web.examples.gallery/demo/material/elevation_demo.dart": elevation_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["elevation_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYyC;IAAqB;;;;;;EAC9D;;;;;;;;MAJsB,sCAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUR;AAYnB,YAAO,AAAW,AAcf,WAdc,yBAAa,QAAQ,aAC7B,6BACE,6DAEM,wBAAiB,SAAS,GAAG,YACjC,gCACG,cACD,cACA,6BACE,kBAAQ,AAAU,AAAuB,SAAxB,mBAAiB,KAAG;IAMxD;UAG0B;AACxB,YAAO,oCACG,uDAEW,sBACf,8HACA,gEAEa;AACuC,gBAAhD,cAAS,cAAM,uBAAiB,WAAC;0JAKnC,wCACM;IAGhB;;;IAnDK,uBAAiB;;;EAoDxB","file":"elevation_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__elevation_demo: elevation_demo
  };
});

//# sourceMappingURL=elevation_demo.ddc.js.map
