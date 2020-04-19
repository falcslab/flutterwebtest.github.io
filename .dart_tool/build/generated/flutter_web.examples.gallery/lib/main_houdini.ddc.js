define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/main'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__main) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const engine = packages__flutter_web_ui__ui.src__engine;
  const ui = packages__flutter_web_ui__ui.ui;
  const main = packages__flutter_web$46examples$46gallery__main.main;
  const main_houdini = Object.create(dart.library);
  let doubleAnddoubleAndPicture__ToPersistedHoudiniPicture = () => (doubleAnddoubleAndPicture__ToPersistedHoudiniPicture = dart.constFn(dart.fnType(engine.PersistedHoudiniPicture, [core.double, core.double, ui.Picture, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(engine.houdiniPictureFactory, doubleAnddoubleAndPicture__ToPersistedHoudiniPicture());
    }
  });
  let C0;
  main_houdini.main = function main$() {
    engine.persistedPictureFactory = C0 || CT.C0;
    main.main();
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/main_houdini", {
    "package:flutter_web.examples.gallery/main_houdini.dart": main_houdini
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main_houdini.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AASuD,IAAlD;AACO,IAAV;EACF","file":"main_houdini.ddc.js"}');
  // Exports:
  return {
    main_houdini: main_houdini
  };
});

//# sourceMappingURL=main_houdini.ddc.js.map
