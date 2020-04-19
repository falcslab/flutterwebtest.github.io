define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const banner = packages__flutter_web__animation.src__widgets__banner;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const theme = packages__flutter_web__material.src__material__theme;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const editable_text_demo = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 25,
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
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 26,
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
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 2,
        [Radius_x]: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 15,
        [_Location_line]: 55,
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
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "message",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "location",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorRadius",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorWidth",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 5,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 5,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/editable_text_demo.dart"
      });
    }
  });
  editable_text_demo.EditableTextDemo = class EditableTextDemo extends framework.StatefulWidget {
    createState() {
      return new editable_text_demo.EditableTextDemoState.new();
    }
  };
  (editable_text_demo.EditableTextDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    editable_text_demo.EditableTextDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = editable_text_demo.EditableTextDemo.prototype;
  dart.addTypeTests(editable_text_demo.EditableTextDemo);
  dart.setMethodSignature(editable_text_demo.EditableTextDemo, () => ({
    __proto__: dart.getMethods(editable_text_demo.EditableTextDemo.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(editable_text_demo.EditableTextDemo, "package:flutter_web.examples.gallery/demo/material/editable_text_demo.dart");
  dart.defineLazy(editable_text_demo.EditableTextDemo, {
    /*editable_text_demo.EditableTextDemo.routeName*/get routeName() {
      return "/material/editable_text";
    },
    set routeName(_) {}
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
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C7;
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  let C15;
  let C16;
  let C17;
  let C18;
  let C14;
  let C13;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  const cyanController = dart.privateName(editable_text_demo, "EditableTextDemoState.cyanController");
  const orangeController = dart.privateName(editable_text_demo, "EditableTextDemoState.orangeController");
  const thickController = dart.privateName(editable_text_demo, "EditableTextDemoState.thickController");
  const multiController = dart.privateName(editable_text_demo, "EditableTextDemoState.multiController");
  editable_text_demo.EditableTextDemoState = class EditableTextDemoState extends framework.State$(editable_text_demo.EditableTextDemo) {
    get cyanController() {
      return this[cyanController];
    }
    set cyanController(value) {
      super.cyanController = value;
    }
    get orangeController() {
      return this[orangeController];
    }
    set orangeController(value) {
      super.orangeController = value;
    }
    get thickController() {
      return this[thickController];
    }
    set thickController(value) {
      super.thickController = value;
    }
    get multiController() {
      return this[multiController];
    }
    set multiController(value) {
      super.multiController = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Text Editing", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), centerTitle: true, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([editable_text_demo.field(this.cyanController, {color: colors.Colors.cyan.shade50, selection: colors.Colors.cyan.shade200, cursor: colors.Colors.cyan.shade900}), editable_text_demo.field(this.orangeController, {color: colors.Colors.orange.shade50, selection: colors.Colors.orange.shade200, cursor: colors.Colors.orange.shade900, center: true}), editable_text_demo.field(this.thickController, {color: colors.Colors.white, selection: colors.Colors.grey.shade200, cursor: colors.Colors.red.shade900, radius: C7 || CT.C7, cursorWidth: 8.0}), new banner.Banner.new({child: new text_field.TextField.new({style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 20.0}), controller: this.multiController, maxLines: 3, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), message: "W.I.P", textDirection: ui.TextDirection.ltr, location: banner.BannerLocation.bottomEnd, $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (editable_text_demo.EditableTextDemoState.new = function() {
    this[cyanController] = new editable_text.TextEditingController.new({text: "Cyan"});
    this[orangeController] = new editable_text.TextEditingController.new({text: "Orange"});
    this[thickController] = new editable_text.TextEditingController.new({text: "Thick Rounded Cursor"});
    this[multiController] = new editable_text.TextEditingController.new({text: "First line\nSecond line"});
    editable_text_demo.EditableTextDemoState.__proto__.new.call(this);
    ;
  }).prototype = editable_text_demo.EditableTextDemoState.prototype;
  dart.addTypeTests(editable_text_demo.EditableTextDemoState);
  dart.setMethodSignature(editable_text_demo.EditableTextDemoState, () => ({
    __proto__: dart.getMethods(editable_text_demo.EditableTextDemoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(editable_text_demo.EditableTextDemoState, "package:flutter_web.examples.gallery/demo/material/editable_text_demo.dart");
  dart.setFieldSignature(editable_text_demo.EditableTextDemoState, () => ({
    __proto__: dart.getFields(editable_text_demo.EditableTextDemoState.__proto__),
    cyanController: dart.finalFieldType(editable_text.TextEditingController),
    orangeController: dart.finalFieldType(editable_text.TextEditingController),
    thickController: dart.finalFieldType(editable_text.TextEditingController),
    multiController: dart.finalFieldType(editable_text.TextEditingController)
  }));
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C27;
  let C26;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  editable_text_demo.field = function field(controller, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let cursor = opts && 'cursor' in opts ? opts.cursor : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    let center = opts && 'center' in opts ? opts.center : false;
    return new theme.Theme.new({data: theme_data.ThemeData.new({textSelectionColor: selection}), child: new container.Container.new({color: color, child: new text_field.TextField.new({textAlign: dart.test(center) ? ui.TextAlign.center : ui.TextAlign.start, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(8.0, 16.0, 8.0, 16.0)}), controller: controller, cursorColor: cursor, cursorRadius: radius, cursorWidth: cursorWidth, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/editable_text_demo", {
    "package:flutter_web.examples.gallery/demo/material/editable_text_demo.dart": editable_text_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["editable_text_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUyC;IAAuB;;;;;;EAChE;;;;;;;;MAJgB,6CAAS;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOpB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;UAIoB;AACxB,YAAO,oCACG,+BACC,kBAAK,qFACC,mEAET,wCACM,sBACR,yBACE,6BACc,AAAK,uCACD,AAAK,qCACR,AAAK,+BAEtB,yBACE,+BACc,AAAO,yCACH,AAAO,uCACV,AAAO,uCACd,QAEV,yBACE,8BACc,gCACI,AAAK,qCACR,AAAI,8DAEN,OAEf,8BACS,qCACE,0CAAiC,8BAAgB,oBAC5C,gCACF,mEAEH,wBACoB,gCACJ;IAKnC;;;IAjDM,uBAAiB,mDAA4B;IAC7C,yBAAmB,mDAA4B;IAC/C,wBAAkB,mDAA4B;IAC9C,wBACF,mDAA4B;;;EA8ClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4CAGwB;QAChB;QACA;QACA;QACC;QACA;QACF;AAEL,UAAO,4BACC,8CAA8B,SAAS,WACtC,oCACE,KAAK,SACL,mDACM,MAAM,IAAa,sBAAmB,gCACrC,yDACiB,oCAAS,KAAG,MAAI,KAAG,qBAEpC,UAAU,eACT,MAAM,gBACL,MAAM,eACP,WAAW;EAIhC","file":"editable_text_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__editable_text_demo: editable_text_demo
  };
});

//# sourceMappingURL=editable_text_demo.ddc.js.map
