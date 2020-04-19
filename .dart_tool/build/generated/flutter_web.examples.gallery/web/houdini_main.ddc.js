define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/main_houdini'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__main_houdini) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const engine = packages__flutter_web_ui__ui.src__engine;
  const main_houdini = packages__flutter_web$46examples$46gallery__main_houdini.main_houdini;
  const houdini_main = Object.create(dart.library);
  const CT = Object.create(null);
  houdini_main.main = function main() {
    return async.async(dart.dynamic, function* main() {
      yield ui.webOnlyInitializePlatform({assetManager: new engine.AssetManager.new({assetsDir: "houdini.assets"})});
      main_houdini.main();
    });
  };
  dart.trackLibraries("web/houdini_main", {
    "org-dartlang-app:///web/houdini_main.dart": houdini_main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["houdini_main.dart"],"names":[],"mappings":";;;;;;;;;;;;AASI;AAEiE,MADnE,MAAM,4CACmB,wCAAwB;AACvC,MAAV;IACF","file":"houdini_main.ddc.js"}');
  // Exports:
  return {
    web__houdini_main: houdini_main
  };
});

//# sourceMappingURL=houdini_main.ddc.js.map
