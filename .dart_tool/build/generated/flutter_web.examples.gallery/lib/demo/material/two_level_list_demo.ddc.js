define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const expansion_tile = packages__flutter_web__material.src__material__expansion_tile;
  const theme = packages__flutter_web__material.src__material__theme;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const two_level_list_demo = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
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
        [Text_data]: "Expand/collapse list control"
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
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.dart"
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
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
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
        [Text_data]: "Top"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C9 || CT.C9,
        [ListTile_leading]: null
      });
    },
    get C10() {
      return C10 = dart.const({
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
        [Text_data]: "Sublist"
      });
    },
    get C13() {
      return C13 = dart.const({
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
        [Text_data]: "One"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C13 || CT.C13,
        [ListTile_leading]: null
      });
    },
    get C15() {
      return C15 = dart.const({
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
        [Text_data]: "Two"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C15 || CT.C15,
        [ListTile_leading]: null
      });
    },
    get C17() {
      return C17 = dart.const({
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
        [Text_data]: "Free"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C17 || CT.C17,
        [ListTile_leading]: null
      });
    },
    get C19() {
      return C19 = dart.const({
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
        [Text_data]: "Four"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C19 || CT.C19,
        [ListTile_leading]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C14 || CT.C14, C16 || CT.C16, C18 || CT.C18], framework.Widget);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
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
        [Text_data]: "Bottom"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: list_tile.ListTile.prototype,
        [Widget_key]: null,
        [ListTile_selected]: false,
        [ListTile_onLongPress]: null,
        [ListTile_onTap]: null,
        [ListTile_enabled]: true,
        [ListTile_contentPadding]: null,
        [ListTile_dense]: null,
        [ListTile_isThreeLine]: false,
        [ListTile_trailing]: null,
        [ListTile_subtitle]: null,
        [ListTile_title]: C26 || CT.C26,
        [ListTile_leading]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 24,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.dart"
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
  const ListTile_selected = dart.privateName(list_tile, "ListTile.selected");
  const ListTile_onLongPress = dart.privateName(list_tile, "ListTile.onLongPress");
  const ListTile_onTap = dart.privateName(list_tile, "ListTile.onTap");
  const ListTile_enabled = dart.privateName(list_tile, "ListTile.enabled");
  const ListTile_contentPadding = dart.privateName(list_tile, "ListTile.contentPadding");
  const ListTile_dense = dart.privateName(list_tile, "ListTile.dense");
  const ListTile_isThreeLine = dart.privateName(list_tile, "ListTile.isThreeLine");
  const ListTile_trailing = dart.privateName(list_tile, "ListTile.trailing");
  const ListTile_subtitle = dart.privateName(list_tile, "ListTile.subtitle");
  let C9;
  const ListTile_title = dart.privateName(list_tile, "ListTile.title");
  const ListTile_leading = dart.privateName(list_tile, "ListTile.leading");
  let C8;
  let C10;
  let C13;
  let C12;
  let C15;
  let C14;
  let C17;
  let C16;
  let C19;
  let C18;
  let C11;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C26;
  let C25;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C31;
  let C30;
  two_level_list_demo.TwoLevelListDemo = class TwoLevelListDemo extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C0 || CT.C0, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/two-level-list", {$creationLocationd_0dea112b090073317d4: C1 || CT.C1})]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([C8 || CT.C8, new expansion_tile.ExpansionTile.new({title: C10 || CT.C10, backgroundColor: theme.Theme.of(context).accentColor.withOpacity(0.025), children: C11 || CT.C11, $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), C25 || CT.C25]), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (two_level_list_demo.TwoLevelListDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    two_level_list_demo.TwoLevelListDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = two_level_list_demo.TwoLevelListDemo.prototype;
  dart.addTypeTests(two_level_list_demo.TwoLevelListDemo);
  dart.setMethodSignature(two_level_list_demo.TwoLevelListDemo, () => ({
    __proto__: dart.getMethods(two_level_list_demo.TwoLevelListDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(two_level_list_demo.TwoLevelListDemo, "package:flutter_web.examples.gallery/demo/material/two_level_list_demo.dart");
  dart.defineLazy(two_level_list_demo.TwoLevelListDemo, {
    /*two_level_list_demo.TwoLevelListDemo.routeName*/get routeName() {
      return "/material/two-level-list";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/two_level_list_demo", {
    "package:flutter_web.examples.gallery/demo/material/two_level_list_demo.dart": two_level_list_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["two_level_list_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,oCACK,qDAEW,sBAAC,gMAEd,wCAA2B,mCAE/B,6EAE2B,AAAY,AAAY,eAArB,OAAO,0BAA0B;IAUvE;;;;;;EACF;;;;;;;;MAxBsB,8CAAS","file":"two_level_list_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__two_level_list_demo: two_level_list_demo
  };
});

//# sourceMappingURL=two_level_list_demo.ddc.js.map
