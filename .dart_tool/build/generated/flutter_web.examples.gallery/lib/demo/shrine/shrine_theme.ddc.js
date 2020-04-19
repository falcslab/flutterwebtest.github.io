define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors = packages__flutter_web__material.src__material__colors;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const shrine_theme = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292467161.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294959328.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286682525.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278858050.0
      });
    }
  });
  shrine_theme.ShrineStyle = class ShrineStyle extends text_style.TextStyle {};
  (shrine_theme.ShrineStyle.roboto = function(size, weight, color) {
    shrine_theme.ShrineStyle.__proto__.new.call(this, {inherit: false, color: color, fontSize: size, fontWeight: weight, textBaseline: ui.TextBaseline.alphabetic});
    ;
  }).prototype = shrine_theme.ShrineStyle.prototype;
  (shrine_theme.ShrineStyle.abrilFatface = function(size, weight, color) {
    shrine_theme.ShrineStyle.__proto__.new.call(this, {inherit: false, color: color, fontFamily: "AbrilFatface", fontSize: size, fontWeight: weight, textBaseline: ui.TextBaseline.alphabetic});
    ;
  }).prototype = shrine_theme.ShrineStyle.prototype;
  dart.addTypeTests(shrine_theme.ShrineStyle);
  dart.setLibraryUri(shrine_theme.ShrineStyle, "package:flutter_web.examples.gallery/demo/shrine/shrine_theme.dart");
  const Color__value = dart.privateName(ui, "Color._value");
  let C0;
  let C1;
  let C2;
  let C3;
  const cardBackgroundColor = dart.privateName(shrine_theme, "ShrineTheme.cardBackgroundColor");
  const appBarBackgroundColor = dart.privateName(shrine_theme, "ShrineTheme.appBarBackgroundColor");
  const dividerColor = dart.privateName(shrine_theme, "ShrineTheme.dividerColor");
  const priceHighlightColor = dart.privateName(shrine_theme, "ShrineTheme.priceHighlightColor");
  const appBarTitleStyle = dart.privateName(shrine_theme, "ShrineTheme.appBarTitleStyle");
  const vendorItemStyle = dart.privateName(shrine_theme, "ShrineTheme.vendorItemStyle");
  const priceStyle = dart.privateName(shrine_theme, "ShrineTheme.priceStyle");
  const featureTitleStyle = dart.privateName(shrine_theme, "ShrineTheme.featureTitleStyle");
  const featurePriceStyle = dart.privateName(shrine_theme, "ShrineTheme.featurePriceStyle");
  const featureStyle = dart.privateName(shrine_theme, "ShrineTheme.featureStyle");
  const orderTitleStyle = dart.privateName(shrine_theme, "ShrineTheme.orderTitleStyle");
  const orderStyle = dart.privateName(shrine_theme, "ShrineTheme.orderStyle");
  const vendorTitleStyle = dart.privateName(shrine_theme, "ShrineTheme.vendorTitleStyle");
  const vendorStyle = dart.privateName(shrine_theme, "ShrineTheme.vendorStyle");
  const quantityMenuStyle = dart.privateName(shrine_theme, "ShrineTheme.quantityMenuStyle");
  shrine_theme.ShrineTheme = class ShrineTheme extends framework.InheritedWidget {
    get cardBackgroundColor() {
      return this[cardBackgroundColor];
    }
    set cardBackgroundColor(value) {
      super.cardBackgroundColor = value;
    }
    get appBarBackgroundColor() {
      return this[appBarBackgroundColor];
    }
    set appBarBackgroundColor(value) {
      super.appBarBackgroundColor = value;
    }
    get dividerColor() {
      return this[dividerColor];
    }
    set dividerColor(value) {
      super.dividerColor = value;
    }
    get priceHighlightColor() {
      return this[priceHighlightColor];
    }
    set priceHighlightColor(value) {
      super.priceHighlightColor = value;
    }
    get appBarTitleStyle() {
      return this[appBarTitleStyle];
    }
    set appBarTitleStyle(value) {
      super.appBarTitleStyle = value;
    }
    get vendorItemStyle() {
      return this[vendorItemStyle];
    }
    set vendorItemStyle(value) {
      super.vendorItemStyle = value;
    }
    get priceStyle() {
      return this[priceStyle];
    }
    set priceStyle(value) {
      super.priceStyle = value;
    }
    get featureTitleStyle() {
      return this[featureTitleStyle];
    }
    set featureTitleStyle(value) {
      super.featureTitleStyle = value;
    }
    get featurePriceStyle() {
      return this[featurePriceStyle];
    }
    set featurePriceStyle(value) {
      super.featurePriceStyle = value;
    }
    get featureStyle() {
      return this[featureStyle];
    }
    set featureStyle(value) {
      super.featureStyle = value;
    }
    get orderTitleStyle() {
      return this[orderTitleStyle];
    }
    set orderTitleStyle(value) {
      super.orderTitleStyle = value;
    }
    get orderStyle() {
      return this[orderStyle];
    }
    set orderStyle(value) {
      super.orderStyle = value;
    }
    get vendorTitleStyle() {
      return this[vendorTitleStyle];
    }
    set vendorTitleStyle(value) {
      super.vendorTitleStyle = value;
    }
    get vendorStyle() {
      return this[vendorStyle];
    }
    set vendorStyle(value) {
      super.vendorStyle = value;
    }
    get quantityMenuStyle() {
      return this[quantityMenuStyle];
    }
    set quantityMenuStyle(value) {
      super.quantityMenuStyle = value;
    }
    static of(context) {
      return shrine_theme.ShrineTheme._check(context.inheritFromWidgetOfExactType(dart.wrapType(shrine_theme.ShrineTheme)));
    }
    updateShouldNotify(oldWidget) {
      shrine_theme.ShrineTheme._check(oldWidget);
      return false;
    }
  };
  (shrine_theme.ShrineTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[cardBackgroundColor] = colors.Colors.white;
    this[appBarBackgroundColor] = colors.Colors.white;
    this[dividerColor] = C0 || CT.C0;
    this[priceHighlightColor] = C1 || CT.C1;
    this[appBarTitleStyle] = shrine_theme.robotoRegular20(colors.Colors.black87);
    this[vendorItemStyle] = shrine_theme.robotoRegular12(C2 || CT.C2);
    this[priceStyle] = shrine_theme.robotoRegular14(colors.Colors.black87);
    this[featureTitleStyle] = shrine_theme.abrilFatfaceRegular34(C3 || CT.C3);
    this[featurePriceStyle] = shrine_theme.robotoRegular16(colors.Colors.black87);
    this[featureStyle] = shrine_theme.robotoLight14(colors.Colors.black54);
    this[orderTitleStyle] = shrine_theme.abrilFatfaceRegular24(colors.Colors.black87);
    this[orderStyle] = shrine_theme.robotoLight14(colors.Colors.black54);
    this[vendorTitleStyle] = shrine_theme.robotoMedium14(colors.Colors.black87);
    this[vendorStyle] = shrine_theme.robotoLight14(colors.Colors.black54);
    this[quantityMenuStyle] = shrine_theme.robotoLight14(colors.Colors.black54);
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_theme.dart", 50, 16, "child != null");
    shrine_theme.ShrineTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_theme.ShrineTheme.prototype;
  dart.addTypeTests(shrine_theme.ShrineTheme);
  dart.setMethodSignature(shrine_theme.ShrineTheme, () => ({
    __proto__: dart.getMethods(shrine_theme.ShrineTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(shrine_theme.ShrineTheme, "package:flutter_web.examples.gallery/demo/shrine/shrine_theme.dart");
  dart.setFieldSignature(shrine_theme.ShrineTheme, () => ({
    __proto__: dart.getFields(shrine_theme.ShrineTheme.__proto__),
    cardBackgroundColor: dart.finalFieldType(ui.Color),
    appBarBackgroundColor: dart.finalFieldType(ui.Color),
    dividerColor: dart.finalFieldType(ui.Color),
    priceHighlightColor: dart.finalFieldType(ui.Color),
    appBarTitleStyle: dart.finalFieldType(text_style.TextStyle),
    vendorItemStyle: dart.finalFieldType(text_style.TextStyle),
    priceStyle: dart.finalFieldType(text_style.TextStyle),
    featureTitleStyle: dart.finalFieldType(text_style.TextStyle),
    featurePriceStyle: dart.finalFieldType(text_style.TextStyle),
    featureStyle: dart.finalFieldType(text_style.TextStyle),
    orderTitleStyle: dart.finalFieldType(text_style.TextStyle),
    orderStyle: dart.finalFieldType(text_style.TextStyle),
    vendorTitleStyle: dart.finalFieldType(text_style.TextStyle),
    vendorStyle: dart.finalFieldType(text_style.TextStyle),
    quantityMenuStyle: dart.finalFieldType(text_style.TextStyle)
  }));
  shrine_theme.robotoRegular12 = function robotoRegular12(color) {
    return new shrine_theme.ShrineStyle.roboto(12.0, ui.FontWeight.w500, color);
  };
  shrine_theme.robotoLight12 = function robotoLight12(color) {
    return new shrine_theme.ShrineStyle.roboto(12.0, ui.FontWeight.w300, color);
  };
  shrine_theme.robotoRegular14 = function robotoRegular14(color) {
    return new shrine_theme.ShrineStyle.roboto(14.0, ui.FontWeight.w500, color);
  };
  shrine_theme.robotoMedium14 = function robotoMedium14(color) {
    return new shrine_theme.ShrineStyle.roboto(14.0, ui.FontWeight.w600, color);
  };
  shrine_theme.robotoLight14 = function robotoLight14(color) {
    return new shrine_theme.ShrineStyle.roboto(14.0, ui.FontWeight.w300, color);
  };
  shrine_theme.robotoRegular16 = function robotoRegular16(color) {
    return new shrine_theme.ShrineStyle.roboto(16.0, ui.FontWeight.w500, color);
  };
  shrine_theme.robotoRegular20 = function robotoRegular20(color) {
    return new shrine_theme.ShrineStyle.roboto(20.0, ui.FontWeight.w500, color);
  };
  shrine_theme.abrilFatfaceRegular24 = function abrilFatfaceRegular24(color) {
    return new shrine_theme.ShrineStyle.abrilFatface(24.0, ui.FontWeight.w500, color);
  };
  shrine_theme.abrilFatfaceRegular34 = function abrilFatfaceRegular34(color) {
    return new shrine_theme.ShrineStyle.abrilFatface(34.0, ui.FontWeight.w500, color);
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/shrine/shrine_theme", {
    "package:flutter_web.examples.gallery/demo/shrine/shrine_theme.dart": shrine_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8CAOkC,MAAiB,QAAc;AACzD,gEACa,cACF,KAAK,YACF,IAAI,cACF,MAAM,gBACS;;EAAW;oDAEV,MAAiB,QAAc;AAC/D,gEACa,cACF,KAAK,cACA,0BACF,IAAI,cACF,MAAM,gBACS;;EAAW;;;;;;;;;;;;;;;;;;;;;;;;IA8BpC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEI;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IAEA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;cAEmB;AAC/B,6CAAA,AAAQ,OAAD,8BAA8B;IAAY;uBAGjB;;AAAc;IAAK;;;QA1BtC;QAAsB;;IAI3B,4BAA6B;IAC7B,8BAA+B;IAC/B;IACA;IAEI,yBAAmB,6BAAuB;IAC1C,wBAAkB;IAClB,mBAAa,6BAAuB;IACpC,0BACZ;IACY,0BAAoB,6BAAuB;IAC3C,qBAAe,2BAAqB;IACpC,wBAAkB,mCAA6B;IAC/C,mBAAa,2BAAqB;IAClC,yBAAmB,4BAAsB;IACzC,oBAAc,2BAAqB;IACnC,0BAAoB,2BAAqB;UAnB5C,AAAM,KAAD,IAAI;AAChB,4DAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;0DAzBL;AAC5B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;sDACtB;AAC1B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;0DACpB;AAC5B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;wDACrB;AAC3B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;sDACtB;AAC1B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;0DACpB;AAC5B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;0DACpB;AAC5B,UAAY,qCAAO,MAAiB,oBAAM,KAAK;EAAC;sEACd;AAClC,UAAY,2CAAa,MAAiB,oBAAM,KAAK;EAAC;sEACpB;AAClC,UAAY,2CAAa,MAAiB,oBAAM,KAAK;EAAC","file":"shrine_theme.ddc.js"}');
  // Exports:
  return {
    demo__shrine__shrine_theme: shrine_theme
  };
});

//# sourceMappingURL=shrine_theme.ddc.js.map
