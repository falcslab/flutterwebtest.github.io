define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const color_scheme = packages__flutter_web__material.src__material__color_scheme;
  const colors = packages__flutter_web__material.src__material__colors;
  const button_theme = packages__flutter_web__material.src__material__button_theme;
  const ink_ripple = packages__flutter_web__material.src__material__ink_ripple;
  const ui = packages__flutter_web_ui__ui.ui;
  const themes = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278285762.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4279482877.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.dark",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4289724448.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278442694.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4283105744.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4290479868.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: color_scheme.ColorScheme.prototype,
        [ColorScheme_brightness]: C3 || CT.C3,
        [ColorScheme_onError]: C4 || CT.C4,
        [ColorScheme_onBackground]: C5 || CT.C5,
        [ColorScheme_onSurface]: C5 || CT.C5,
        [ColorScheme_onSecondary]: C4 || CT.C4,
        [ColorScheme_onPrimary]: C4 || CT.C4,
        [ColorScheme_error]: C6 || CT.C6,
        [ColorScheme_background]: C4 || CT.C4,
        [ColorScheme_surface]: C4 || CT.C4,
        [ColorScheme_secondaryVariant]: C7 || CT.C7,
        [ColorScheme_secondary]: C7 || CT.C7,
        [ColorScheme_primaryVariant]: C8 || CT.C8,
        [ColorScheme_primary]: C9 || CT.C9
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280295716.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278290310.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281794739.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284612846.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: color_scheme.ColorScheme.prototype,
        [ColorScheme_brightness]: C12 || CT.C12,
        [ColorScheme_onError]: C5 || CT.C5,
        [ColorScheme_onBackground]: C4 || CT.C4,
        [ColorScheme_onSurface]: C4 || CT.C4,
        [ColorScheme_onSecondary]: C4 || CT.C4,
        [ColorScheme_onPrimary]: C5 || CT.C5,
        [ColorScheme_error]: C6 || CT.C6,
        [ColorScheme_background]: C5 || CT.C5,
        [ColorScheme_surface]: C5 || CT.C5,
        [ColorScheme_secondaryVariant]: C13 || CT.C13,
        [ColorScheme_secondary]: C7 || CT.C7,
        [ColorScheme_primaryVariant]: C14 || CT.C14,
        [ColorScheme_primary]: C15 || CT.C15
      });
    }
  });
  const name$ = dart.privateName(themes, "GalleryTheme.name");
  const data$ = dart.privateName(themes, "GalleryTheme.data");
  themes.GalleryTheme = class GalleryTheme extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
  };
  (themes.GalleryTheme.__ = function(name, data) {
    this[name$] = name;
    this[data$] = data;
    ;
  }).prototype = themes.GalleryTheme.prototype;
  dart.addTypeTests(themes.GalleryTheme);
  dart.setLibraryUri(themes.GalleryTheme, "package:flutter_web.examples.gallery/gallery/themes.dart");
  dart.setFieldSignature(themes.GalleryTheme, () => ({
    __proto__: dart.getFields(themes.GalleryTheme.__proto__),
    name: dart.finalFieldType(core.String),
    data: dart.finalFieldType(theme_data.ThemeData)
  }));
  const Color__value = dart.privateName(ui, "Color._value");
  let C0;
  let C1;
  const _name = dart.privateName(ui, "_name");
  let C3;
  const ColorScheme_brightness = dart.privateName(color_scheme, "ColorScheme.brightness");
  let C4;
  const ColorScheme_onError = dart.privateName(color_scheme, "ColorScheme.onError");
  let C5;
  const ColorScheme_onBackground = dart.privateName(color_scheme, "ColorScheme.onBackground");
  const ColorScheme_onSurface = dart.privateName(color_scheme, "ColorScheme.onSurface");
  const ColorScheme_onSecondary = dart.privateName(color_scheme, "ColorScheme.onSecondary");
  const ColorScheme_onPrimary = dart.privateName(color_scheme, "ColorScheme.onPrimary");
  let C6;
  const ColorScheme_error = dart.privateName(color_scheme, "ColorScheme.error");
  const ColorScheme_background = dart.privateName(color_scheme, "ColorScheme.background");
  const ColorScheme_surface = dart.privateName(color_scheme, "ColorScheme.surface");
  let C7;
  const ColorScheme_secondaryVariant = dart.privateName(color_scheme, "ColorScheme.secondaryVariant");
  const ColorScheme_secondary = dart.privateName(color_scheme, "ColorScheme.secondary");
  let C8;
  const ColorScheme_primaryVariant = dart.privateName(color_scheme, "ColorScheme.primaryVariant");
  let C9;
  const ColorScheme_primary = dart.privateName(color_scheme, "ColorScheme.primary");
  let C2;
  let C10;
  let C12;
  let C13;
  let C14;
  let C15;
  let C11;
  themes._buildTextTheme = function _buildTextTheme(base) {
    return base.copyWith({title: base.title.copyWith({fontFamily: "GoogleSans"})});
  };
  themes._buildDarkTheme = function _buildDarkTheme() {
    let primaryColor = C0 || CT.C0;
    let secondaryColor = C1 || CT.C1;
    let base = theme_data.ThemeData.dark();
    let colorScheme = (C2 || CT.C2).copyWith({primary: primaryColor, secondary: secondaryColor});
    return base.copyWith({primaryColor: primaryColor, buttonColor: primaryColor, indicatorColor: colors.Colors.white, accentColor: secondaryColor, canvasColor: C10 || CT.C10, scaffoldBackgroundColor: C10 || CT.C10, backgroundColor: C10 || CT.C10, errorColor: C6 || CT.C6, buttonTheme: new button_theme.ButtonThemeData.new({colorScheme: colorScheme, textTheme: button_theme.ButtonTextTheme.primary}), textTheme: themes._buildTextTheme(base.textTheme), primaryTextTheme: themes._buildTextTheme(base.primaryTextTheme), accentTextTheme: themes._buildTextTheme(base.accentTextTheme)});
  };
  themes._buildLightTheme = function _buildLightTheme() {
    let primaryColor = C0 || CT.C0;
    let secondaryColor = C1 || CT.C1;
    let colorScheme = (C11 || CT.C11).copyWith({primary: primaryColor, secondary: secondaryColor});
    let base = theme_data.ThemeData.light();
    return base.copyWith({colorScheme: colorScheme, primaryColor: primaryColor, buttonColor: primaryColor, indicatorColor: colors.Colors.white, splashColor: colors.Colors.white24, splashFactory: ink_ripple.InkRipple.splashFactory, accentColor: secondaryColor, canvasColor: colors.Colors.white, scaffoldBackgroundColor: colors.Colors.white, backgroundColor: colors.Colors.white, errorColor: C6 || CT.C6, buttonTheme: new button_theme.ButtonThemeData.new({colorScheme: colorScheme, textTheme: button_theme.ButtonTextTheme.primary}), textTheme: themes._buildTextTheme(base.textTheme), primaryTextTheme: themes._buildTextTheme(base.primaryTextTheme), accentTextTheme: themes._buildTextTheme(base.accentTextTheme)});
  };
  dart.defineLazy(themes, {
    /*themes.kDarkGalleryTheme*/get kDarkGalleryTheme() {
      return new themes.GalleryTheme.__("Dark", themes._buildDarkTheme());
    },
    /*themes.kLightGalleryTheme*/get kLightGalleryTheme() {
      return new themes.GalleryTheme.__("Light", themes._buildLightTheme());
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/themes", {
    "package:flutter_web.examples.gallery/gallery/themes.dart": themes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["themes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACG;;;;;;;qCAHU,MAAW;IAAX;IAAW;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oDAWR;AAClC,UAAO,AAAK,KAAD,kBACF,AAAK,AAAM,IAAP,6BACG;EAGlB;;AAGc;AACA;AACI,eAAiB;AACf,sBAAuC,iCAC9C,YAAY,aACV,cAAc;AAE3B,UAAO,AAAK,KAAD,yBACK,YAAY,eACb,YAAY,kBACF,kCACV,cAAc,4IAKd,mDACE,WAAW,aACG,mDAElB,uBAAgB,AAAK,IAAD,+BACb,uBAAgB,AAAK,IAAD,qCACrB,uBAAgB,AAAK,IAAD;EAEzC;;AAGc;AACA;AACM,sBAAwC,mCAC/C,YAAY,aACV,cAAc;AAEX,eAAiB;AACjC,UAAO,AAAK,KAAD,wBACI,WAAW,gBACV,YAAY,eACb,YAAY,kBACF,kCACH,sCACK,iDACZ,cAAc,eACP,8CACY,sCACR,2DAEX,mDACE,WAAW,aACG,mDAElB,uBAAgB,AAAK,IAAD,+BACb,uBAAgB,AAAK,IAAD,qCACrB,uBAAgB,AAAK,IAAD;EAEzC;;MApEmB,wBAAiB;YACnB,4BAAE,QAAQ;;MACR,yBAAkB;YACpB,4BAAE,SAAS","file":"themes.ddc.js"}');
  // Exports:
  return {
    gallery__themes: themes
  };
});

//# sourceMappingURL=themes.ddc.js.map
