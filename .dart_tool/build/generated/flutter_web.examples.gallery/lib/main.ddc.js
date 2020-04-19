define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/app'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__app) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const app = packages__flutter_web$46examples$46gallery__gallery__app.gallery__app;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  main.main = function main$() {
    binding.runApp(new app.GalleryApp.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}));
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/main", {
    "package:flutter_web.examples.gallery/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASsB,IAApB,eAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
