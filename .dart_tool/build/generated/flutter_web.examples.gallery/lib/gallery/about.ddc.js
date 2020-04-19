define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web__animation, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tap = packages__flutter_web__src__animation__animation.src__gestures__tap;
  const text_span = packages__flutter_web__animation.src__painting__text_span;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const theme = packages__flutter_web__material.src__material__theme;
  const about = packages__flutter_web__material.src__material__about;
  const about$ = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 47,
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
        [_Location_column]: 16,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/about.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 46,
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
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/about.dart"
      });
    }
  });
  about$._LinkTextSpan = class _LinkTextSpan extends text_span.TextSpan {};
  (about$._LinkTextSpan.new = function(opts) {
    let t0, t0$;
    let style = opts && 'style' in opts ? opts.style : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let text = opts && 'text' in opts ? opts.text : null;
    about$._LinkTextSpan.__proto__.new.call(this, {style: style, text: (t0 = text, t0 == null ? url : t0), recognizer: (t0$ = new tap.TapGestureRecognizer.new(), t0$.onTap = dart.fn(() => {
      }, VoidToNull()), t0$)});
    ;
  }).prototype = about$._LinkTextSpan.prototype;
  dart.addTypeTests(about$._LinkTextSpan);
  dart.setLibraryUri(about$._LinkTextSpan, "package:flutter_web.examples.gallery/gallery/about.dart");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
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
  about$.showGalleryAboutDialog = function showGalleryAboutDialog(context) {
    let themeData = theme.Theme.of(context);
    let aboutTextStyle = themeData.textTheme.body2;
    let linkStyle = themeData.textTheme.body2.copyWith({color: themeData.accentColor});
    about.showAboutDialog({context: context, applicationVersion: "2018 Preview", applicationLegalese: "© 2018 The Chromium Authors", children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new basic.RichText.new({text: new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({style: aboutTextStyle, text: "Flutter web is an early-stage, web framework. " + "This gallery is a preview of " + "Flutter's many widgets, behaviors, animations, layouts, " + "and more. Learn more about Flutter at "}), new about$._LinkTextSpan.new({style: linkStyle, url: "https://flutter.io"}), new text_span.TextSpan.new({style: aboutTextStyle, text: ".\n\nTo see the source code for flutter "}), new about$._LinkTextSpan.new({style: linkStyle, url: "https://goo.gl/iv1p4G", text: "flutter github repo"}), new text_span.TextSpan.new({style: aboutTextStyle, text: "."})])}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4})])});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/about", {
    "package:flutter_web.examples.gallery/gallery/about.dart": about$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["about.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAqB2B;QAAc;QAAY;AAC7C,0DACW,KAAK,SACD,KAAL,IAAI,QAAJ,OAAQ,GAAG,2BACL,oCACR,YAAQ;;;EAER;;;;;;;;;;;;;;;;;;;;kEAGyB;AACvB,oBAAkB,eAAG,OAAO;AAC5B,yBAAiB,AAAU,AAAU,SAAX;AAC1B,oBACZ,AAAU,AAAU,AAAM,SAAjB,kCAAiC,AAAU,SAAD;AAyCtD,IAvCD,gCACW,OAAO,sBACI,qCAEC,yCACH,sBAChB,oDAES,8BACC,sCACgB,wBAClB,mCACW,cAAc,QACf,mDACF,kCACA,6DACA,4CACR,qCACS,SAAS,OACX,wBAEP,mCACS,cAAc,QACf,8CAER,qCACS,SAAS,OACX,+BACC,yBAER,mCACS,cAAc,QACf;EAQtB","file":"about.ddc.js"}');
  // Exports:
  return {
    gallery__about: about$
  };
});

//# sourceMappingURL=about.ddc.js.map
