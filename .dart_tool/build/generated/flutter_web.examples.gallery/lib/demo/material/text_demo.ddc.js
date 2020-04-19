define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const divider = packages__flutter_web__material.src__material__divider;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text_demo = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.constList([], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 17,
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
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 44,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/text_demo.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C11;
  let C10;
  let C14;
  let C13;
  let C12;
  let C15;
  let C18;
  let C17;
  let C16;
  let C19;
  let C22;
  let C21;
  let C20;
  let C23;
  let C26;
  let C25;
  let C24;
  let C27;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  text_demo.TextDemo = class TextDemo extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Text", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), centerTitle: true, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([this.pad(new text.Text.new("Single line of text", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7})), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), this.pad(new text.Text.new("     Text with       a   lot of    whitespace     ", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12})), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), this.pad(new text.Text.new("Text with a newline\ncharacter should render in 2 lines", {$creationLocationd_0dea112b090073317d4: C16 || CT.C16})), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), this.pad(new text.Text.new("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor\nvel ligula eget fermentum. Integer mattis nulla vitae ullamcorper\ndignissim. Donec vel velit vel eros lobortis laoreet at sit amet turpis.\nUt in orci blandit, rhoncus metus quis, finibus augue. Nullam a elit\nvenenatis metus accumsan dapibus. Vestibulum imperdiet tristique viverra.", {$creationLocationd_0dea112b090073317d4: C20 || CT.C20})), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), this.pad(new text.Text.new("             Lorem ipsum dolor sit amet,            consectetur adipiscing elit.\n             Maecenas auctor vel ligula eget                          fermentum.\n             Integer mattis nulla                   vitae ullamcorper dignissim.\n             Donec vel velit vel eros lobortis laoreet at sit amet turpis.", {$creationLocationd_0dea112b090073317d4: C24 || CT.C24})), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
    pad(child) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(12.0), child: child, $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
  };
  (text_demo.TextDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    text_demo.TextDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_demo.TextDemo.prototype;
  dart.addTypeTests(text_demo.TextDemo);
  dart.setMethodSignature(text_demo.TextDemo, () => ({
    __proto__: dart.getMethods(text_demo.TextDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    pad: dart.fnType(basic.Padding, [framework.Widget])
  }));
  dart.setLibraryUri(text_demo.TextDemo, "package:flutter_web.examples.gallery/demo/material/text_demo.dart");
  dart.defineLazy(text_demo.TextDemo, {
    /*text_demo.TextDemo.routeName*/get routeName() {
      return "/material/text";
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/text_demo", {
    "package:flutter_web.examples.gallery/demo/material/text_demo.dart": text_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,oCACG,+BACC,kBAAK,6EACC,mEAET,wCACM,sBACR,SAAI,kBAAK,gFACT,kFAEA,SAAI,kBAAK,iHACT,kFAEA,SAAI,kBAAK,sHACT,kFAEA,SAAI,kBACF,qaAMF,kFAEA,SAAI,kBACF,+XAMF;IAIR;QAEmB;AACf,6CAA4B,+BAAI,cAAY,KAAK;IAAC;;;;;;EACxD;;;;;;;;;MA5Ce,4BAAS","file":"text_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__text_demo: text_demo
  };
});

//# sourceMappingURL=text_demo.ddc.js.map
