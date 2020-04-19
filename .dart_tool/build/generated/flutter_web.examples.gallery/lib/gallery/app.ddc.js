define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/demos', 'packages/flutter_web.examples.gallery/gallery/options', 'packages/flutter_web.examples.gallery/gallery/themes', 'packages/flutter_web.examples.gallery/gallery/scales', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web.examples.gallery/gallery/home', 'packages/flutter_web/material'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__demos, packages__flutter_web$46examples$46gallery__gallery__options, packages__flutter_web$46examples$46gallery__gallery__themes, packages__flutter_web$46examples$46gallery__gallery__scales, packages__flutter_web__src__foundation__assertions, packages__flutter_web$46examples$46gallery__gallery__home, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const binding = packages__flutter_web__animation.src__scheduler__binding;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const demos = packages__flutter_web$46examples$46gallery__gallery__demos.gallery__demos;
  const options = packages__flutter_web$46examples$46gallery__gallery__options.gallery__options;
  const themes = packages__flutter_web$46examples$46gallery__gallery__themes.gallery__themes;
  const scales = packages__flutter_web$46examples$46gallery__gallery__scales.gallery__scales;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const home$ = packages__flutter_web$46examples$46gallery__gallery__home.gallery__home;
  const app = packages__flutter_web__material.src__material__app;
  const colors = packages__flutter_web__material.src__material__colors;
  const app$ = Object.create(dart.library);
  const $_get = dartx._get;
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let LinkedHashMapOfString$BuildContextToWidget = () => (LinkedHashMapOfString$BuildContextToWidget = dart.constFn(collection.LinkedHashMap$(core.String, BuildContextToWidget())))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let dynamicToFn = () => (dynamicToFn = dart.constFn(dart.fnType(BuildContextToWidget(), [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToMediaQuery = () => (BuildContextToMediaQuery = dart.constFn(dart.fnType(media_query.MediaQuery, [framework.BuildContext])))();
  let BuildContextAndWidgetToDirectionality = () => (BuildContextAndWidgetToDirectionality = dart.constFn(dart.fnType(basic.Directionality, [framework.BuildContext, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 98,
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
        [_Location_column]: 16,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 93,
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
        [_Location_column]: 12,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "options",
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onOptionsChanged",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSendFeedback",
        [_Location_column]: 9,
        [_Location_line]: 111,
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
        [_Location_column]: 20,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "testMode",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "optionsPage",
        [_Location_column]: 7,
        [_Location_line]: 108,
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
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 129,
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
        [_Location_column]: 16,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showPerformanceOverlay",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardOffscreenLayers",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "checkerboardRasterCacheImages",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/app.dart"
      });
    }
  });
  const enablePerformanceOverlay$ = dart.privateName(app$, "GalleryApp.enablePerformanceOverlay");
  const enableRasterCacheImagesCheckerboard$ = dart.privateName(app$, "GalleryApp.enableRasterCacheImagesCheckerboard");
  const enableOffscreenLayersCheckerboard$ = dart.privateName(app$, "GalleryApp.enableOffscreenLayersCheckerboard");
  const onSendFeedback$ = dart.privateName(app$, "GalleryApp.onSendFeedback");
  const testMode$ = dart.privateName(app$, "GalleryApp.testMode");
  app$.GalleryApp = class GalleryApp extends framework.StatefulWidget {
    get enablePerformanceOverlay() {
      return this[enablePerformanceOverlay$];
    }
    set enablePerformanceOverlay(value) {
      super.enablePerformanceOverlay = value;
    }
    get enableRasterCacheImagesCheckerboard() {
      return this[enableRasterCacheImagesCheckerboard$];
    }
    set enableRasterCacheImagesCheckerboard(value) {
      super.enableRasterCacheImagesCheckerboard = value;
    }
    get enableOffscreenLayersCheckerboard() {
      return this[enableOffscreenLayersCheckerboard$];
    }
    set enableOffscreenLayersCheckerboard(value) {
      super.enableOffscreenLayersCheckerboard = value;
    }
    get onSendFeedback() {
      return this[onSendFeedback$];
    }
    set onSendFeedback(value) {
      super.onSendFeedback = value;
    }
    get testMode() {
      return this[testMode$];
    }
    set testMode(value) {
      super.testMode = value;
    }
    createState() {
      return new app$._GalleryAppState.new();
    }
  };
  (app$.GalleryApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let enablePerformanceOverlay = opts && 'enablePerformanceOverlay' in opts ? opts.enablePerformanceOverlay : true;
    let enableRasterCacheImagesCheckerboard = opts && 'enableRasterCacheImagesCheckerboard' in opts ? opts.enableRasterCacheImagesCheckerboard : true;
    let enableOffscreenLayersCheckerboard = opts && 'enableOffscreenLayersCheckerboard' in opts ? opts.enableOffscreenLayersCheckerboard : true;
    let onSendFeedback = opts && 'onSendFeedback' in opts ? opts.onSendFeedback : null;
    let testMode = opts && 'testMode' in opts ? opts.testMode : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[enablePerformanceOverlay$] = enablePerformanceOverlay;
    this[enableRasterCacheImagesCheckerboard$] = enableRasterCacheImagesCheckerboard;
    this[enableOffscreenLayersCheckerboard$] = enableOffscreenLayersCheckerboard;
    this[onSendFeedback$] = onSendFeedback;
    this[testMode$] = testMode;
    app$.GalleryApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.GalleryApp.prototype;
  dart.addTypeTests(app$.GalleryApp);
  dart.setMethodSignature(app$.GalleryApp, () => ({
    __proto__: dart.getMethods(app$.GalleryApp.__proto__),
    createState: dart.fnType(app$._GalleryAppState, [])
  }));
  dart.setLibraryUri(app$.GalleryApp, "package:flutter_web.examples.gallery/gallery/app.dart");
  dart.setFieldSignature(app$.GalleryApp, () => ({
    __proto__: dart.getFields(app$.GalleryApp.__proto__),
    enablePerformanceOverlay: dart.finalFieldType(core.bool),
    enableRasterCacheImagesCheckerboard: dart.finalFieldType(core.bool),
    enableOffscreenLayersCheckerboard: dart.finalFieldType(core.bool),
    onSendFeedback: dart.finalFieldType(dart.fnType(dart.void, [])),
    testMode: dart.finalFieldType(core.bool)
  }));
  const _options = dart.privateName(app$, "_options");
  const _timeDilationTimer = dart.privateName(app$, "_timeDilationTimer");
  const _buildRoutes = dart.privateName(app$, "_buildRoutes");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const _handleOptionsChanged = dart.privateName(app$, "_handleOptionsChanged");
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
  let C6;
  let C5;
  const _applyTextScaleFactor = dart.privateName(app$, "_applyTextScaleFactor");
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
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
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C22;
  let C21;
  app$._GalleryAppState = class _GalleryAppState extends framework.State$(app$.GalleryApp) {
    [_buildRoutes]() {
      return LinkedHashMapOfString$BuildContextToWidget().fromIterable(demos.kAllGalleryDemos, {key: dart.fn(demo => dart.str(dart.dload(demo, 'routeName')), dynamicToString()), value: dart.fn(demo => BuildContextToWidget()._check(dart.dload(demo, 'buildRoute')), dynamicToFn())});
    }
    initState() {
      super.initState();
      this[_options] = new options.GalleryOptions.new({theme: themes.kLightGalleryTheme, textScaleFactor: scales.kAllGalleryTextScaleValues[$_get](0), timeDilation: binding.timeDilation, platform: platform.defaultTargetPlatform});
    }
    dispose() {
      let t0;
      t0 = this[_timeDilationTimer];
      t0 == null ? null : t0.cancel();
      this[_timeDilationTimer] = null;
      super.dispose();
    }
    [_handleOptionsChanged](newOptions) {
      this.setState(dart.fn(() => {
        let t0;
        if (this[_options].timeDilation != newOptions.timeDilation) {
          t0 = this[_timeDilationTimer];
          t0 == null ? null : t0.cancel();
          this[_timeDilationTimer] = null;
          if (dart.notNull(newOptions.timeDilation) > 1.0) {
            this[_timeDilationTimer] = async.Timer.new(C0 || CT.C0, dart.fn(() => {
              binding.timeDilation = newOptions.timeDilation;
            }, VoidToNull()));
          } else {
            binding.timeDilation = newOptions.timeDilation;
          }
        }
        this[_options] = newOptions;
      }, VoidToNull()));
    }
    [_applyTextScaleFactor](child) {
      return new basic.Builder.new({builder: dart.fn(context => new media_query.MediaQuery.new({data: media_query.MediaQuery.of(context).copyWith({textScaleFactor: this[_options].textScaleFactor.scale}), child: child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), BuildContextToMediaQuery()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
    build(context) {
      let t0;
      let home = new home$.GalleryHome.new({testMode: this.widget.testMode, optionsPage: new options.GalleryOptionsPage.new({options: this[_options], onOptionsChanged: dart.bind(this, _handleOptionsChanged), onSendFeedback: (t0 = this.widget.onSendFeedback, t0 == null ? dart.fn(() => {
          }, VoidToNull()) : t0), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
      return new app.MaterialApp.new({theme: this[_options].theme.data.copyWith({platform: this[_options].platform}), title: "Flutter Web Gallery", color: colors.Colors.grey, showPerformanceOverlay: this[_options].showPerformanceOverlay, checkerboardOffscreenLayers: this[_options].showOffscreenLayersCheckerboard, checkerboardRasterCacheImages: this[_options].showRasterCacheImagesCheckerboard, routes: this[_buildRoutes](), builder: dart.fn((context, child) => new basic.Directionality.new({textDirection: this[_options].textDirection, child: this[_applyTextScaleFactor](child), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextAndWidgetToDirectionality()), home: home, $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
  };
  (app$._GalleryAppState.new = function() {
    this[_options] = null;
    this[_timeDilationTimer] = null;
    app$._GalleryAppState.__proto__.new.call(this);
    ;
  }).prototype = app$._GalleryAppState.prototype;
  dart.addTypeTests(app$._GalleryAppState);
  dart.setMethodSignature(app$._GalleryAppState, () => ({
    __proto__: dart.getMethods(app$._GalleryAppState.__proto__),
    [_buildRoutes]: dart.fnType(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])), []),
    [_handleOptionsChanged]: dart.fnType(dart.void, [options.GalleryOptions]),
    [_applyTextScaleFactor]: dart.fnType(framework.Widget, [framework.Widget]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app$._GalleryAppState, "package:flutter_web.examples.gallery/gallery/app.dart");
  dart.setFieldSignature(app$._GalleryAppState, () => ({
    __proto__: dart.getFields(app$._GalleryAppState.__proto__),
    [_options]: dart.fieldType(options.GalleryOptions),
    [_timeDilationTimer]: dart.fieldType(async.Timer)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/app", {
    "package:flutter_web.examples.gallery/gallery/app.dart": app$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Ba;;;;;;IACA;;;;;;IACA;;;;;;IACQ;;;;;;IACR;;;;;;;AAGuB;IAAkB;;;QAf9C;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACF,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBlB,uEACE,8BACK,QAAS,QAA4B,SAAX,WAAL,IAAI,4CACvB,QAAS,QAAS,8BAAK,WAAL,IAAI;IAEjC;;AAImB,MAAX;AAML,MALD,iBAAW,uCACF,4CACU,AAA0B,yCAAC,kBAC9B,gCACJ;IAEd;;;AAI8B,WAA5B;0BAAoB;AACK,MAAzB,2BAAqB;AACN,MAAT;IACR;4BAE0C;AAkBtC,MAjBF,cAAS;;AACP,YAAI,AAAS,+BAAgB,AAAW,UAAD;AACT,eAA5B;8BAAoB;AACK,UAAzB,2BAAqB;AACrB,cAA4B,aAAxB,AAAW,UAAD,iBAAgB;AAM1B,YAFF,2BAAqB,6BAAyC;AACtB,cAAtC,uBAAe,AAAW,UAAD;;;AAGW,YAAtC,uBAAe,AAAW,UAAD;;;AAIR,QAArB,iBAAW,UAAU;;IAEzB;4BAEoC;AAClC,YAAO,iCACI,QAAc,WACd,sCACY,AAAY,0BAAT,OAAO,6BACR,AAAS,AAAgB,+CAErC,KAAK;IAIpB;UAG0B;;AACjB,iBAAO,qCACF,AAAO,mCACJ,6CACF,4CACS,+CACoB,KAAtB,AAAO,kCAAA,OACnB;;AAMR,YAAO,iCACE,AAAS,AAAM,AAAK,8CAAmB,AAAS,kCAChD,8BACO,4CACU,AAAS,oEACJ,AAAS,+EACP,AAAS,0DAChC,+BACC,SAAc,SAAgB,UAC9B,6CACU,AAAS,qCACjB,4BAAsB,KAAK,4GAGhC,IAAI;IAEd;;;IAhGe;IACT;;;EAgGR","file":"app.ddc.js"}');
  // Exports:
  return {
    gallery__app: app$
  };
});

//# sourceMappingURL=app.ddc.js.map
