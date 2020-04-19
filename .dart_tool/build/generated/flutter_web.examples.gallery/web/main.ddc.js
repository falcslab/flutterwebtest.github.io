define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/main'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__main) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const main = packages__flutter_web$46examples$46gallery__main.main;
  const main$ = Object.create(dart.library);
  const CT = Object.create(null);
  main$.main = function main$0() {
    return async.async(dart.dynamic, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAMI;AACkC,MAApC,MAAM;AACI,MAAV;IACF","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main$
  };
});

//# sourceMappingURL=main.ddc.js.map
