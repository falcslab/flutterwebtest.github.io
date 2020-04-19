define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const theme = packages__flutter_web__material.src__material__theme;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const colors = packages__flutter_web__material.src__material__colors;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const persistent_bottom_sheet_demo = Object.create(dart.library);
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 32,
        [EdgeInsets__right]: 32,
        [EdgeInsets__top]: 32,
        [EdgeInsets__left]: 32
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
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
        [Text_data]: "You tapped the floating action button."
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
        [Text_data]: "OK"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
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
        [Text_data]: "Persistent bottom sheet"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 43,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57669
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: "Add",
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C33 || CT.C33
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
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
        [Text_data]: "SHOW BOTTOM SHEET"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart"
      });
    }
  });
  persistent_bottom_sheet_demo.PersistentBottomSheetDemo = class PersistentBottomSheetDemo extends framework.StatefulWidget {
    createState() {
      return new persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.new();
    }
  };
  (persistent_bottom_sheet_demo.PersistentBottomSheetDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    persistent_bottom_sheet_demo.PersistentBottomSheetDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = persistent_bottom_sheet_demo.PersistentBottomSheetDemo.prototype;
  dart.addTypeTests(persistent_bottom_sheet_demo.PersistentBottomSheetDemo);
  dart.setMethodSignature(persistent_bottom_sheet_demo.PersistentBottomSheetDemo, () => ({
    __proto__: dart.getMethods(persistent_bottom_sheet_demo.PersistentBottomSheetDemo.__proto__),
    createState: dart.fnType(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState, [])
  }));
  dart.setLibraryUri(persistent_bottom_sheet_demo.PersistentBottomSheetDemo, "package:flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart");
  dart.defineLazy(persistent_bottom_sheet_demo.PersistentBottomSheetDemo, {
    /*persistent_bottom_sheet_demo.PersistentBottomSheetDemo.routeName*/get routeName() {
      return "/material/persistent-bottom-sheet";
    }
  });
  const _scaffoldKey = dart.privateName(persistent_bottom_sheet_demo, "_scaffoldKey");
  const _showBottomSheetCallback = dart.privateName(persistent_bottom_sheet_demo, "_showBottomSheetCallback");
  const _showBottomSheet = dart.privateName(persistent_bottom_sheet_demo, "_showBottomSheet");
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
  let C4;
  let C5;
  let C2;
  let C1;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C11;
  let C10;
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
  let C14;
  let C15;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  const _showMessage = dart.privateName(persistent_bottom_sheet_demo, "_showMessage");
  let C24;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C33;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C32;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C39;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C51;
  let C52;
  let C48;
  let C47;
  persistent_bottom_sheet_demo._PersistentBottomSheetDemoState = class _PersistentBottomSheetDemoState extends framework.State$(persistent_bottom_sheet_demo.PersistentBottomSheetDemo) {
    initState() {
      super.initState();
      this[_showBottomSheetCallback] = dart.bind(this, _showBottomSheet);
    }
    [_showBottomSheet]() {
      this.setState(dart.fn(() => {
        this[_showBottomSheetCallback] = null;
      }, VoidToNull()));
      this[_scaffoldKey].currentState.showBottomSheet(core.Null, dart.fn(context => {
        let themeData = theme.Theme.of(context);
        return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({color: themeData.disabledColor})})}), child: new basic.Padding.new({padding: C0 || CT.C0, child: new text.Text.new("This is a Material persistent bottom sheet. Drag downwards to dismiss it.", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: themeData.accentColor, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
      }, BuildContextToContainer())).closed.whenComplete(dart.fn(() => {
        if (dart.test(this.mounted)) {
          this.setState(dart.fn(() => {
            this[_showBottomSheetCallback] = dart.bind(this, _showBottomSheet);
          }, VoidToNull()));
        }
      }, VoidToNull()));
    }
    [_showMessage]() {
      dialog.showDialog(dart.void, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({content: C14 || CT.C14, actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({onPressed: dart.fn(() => {
                navigator.Navigator.pop(core.Object, context);
              }, VoidToNull()), child: C15 || CT.C15, $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), BuildContextToAlertDialog())});
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: C24 || CT.C24, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new(persistent_bottom_sheet_demo.PersistentBottomSheetDemo.routeName, {$creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.bind(this, _showMessage), backgroundColor: colors.Colors.redAccent, child: C32 || CT.C32, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), body: new basic.Center.new({child: new raised_button.RaisedButton.new({onPressed: this[_showBottomSheetCallback], child: C39 || CT.C39, $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_showBottomSheetCallback] = null;
    persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.__proto__.new.call(this);
    ;
  }).prototype = persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.prototype;
  dart.addTypeTests(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState);
  dart.setMethodSignature(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState, () => ({
    __proto__: dart.getMethods(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.__proto__),
    [_showBottomSheet]: dart.fnType(dart.void, []),
    [_showMessage]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState, "package:flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart");
  dart.setFieldSignature(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState, () => ({
    __proto__: dart.getFields(persistent_bottom_sheet_demo._PersistentBottomSheetDemoState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_showBottomSheetCallback]: dart.fieldType(dart.fnType(dart.void, []))
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo", {
    "package:flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.dart": persistent_bottom_sheet_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["persistent_bottom_sheet_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaM;IAAiC;;;;;;EACvC;;;;;;;;MALsB,gEAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcV,MAAX;AACqC,MAA3C,2CAA2B;IAC7B;;AAMI,MAHF,cAAS;AAEwB,QAA/B,iCAA2B;;AA2BvB,MAzBN,AAAa,AACR,AAgBA,AACA,2DAjBsB,QAAc;AACnB,wBAAkB,eAAG,OAAO;AAC5C,cAAO,0CACO,8CAEJ,gCAAY,mCAAkB,AAAU,SAAD,6BACxC,oDAEE,kBACL,yFACqB,4BACd,qCAAiB,AAAU,SAAD,wBAAwB;yDAMnD;AACZ,sBAAI;AAIA,UAHF,cAAS;AAEoC,YAA3C,2CAA2B;;;;IAIvC;;AAiBG,MAdD,uCACW,uBACA,QAAc,WACd,6DAEY,sBACf,2CACe;AACa,gBAAZ,qCAAI,OAAO;;IAOrC;UAG0B;AACxB,YAAO,iCACE,4BACG,uDAEW,sBACf,6CAC8B,6MAGZ,0EACT,sCACa,8GAMpB,6BACK,+CACQ;IAEzB;;;IApF+B,qBAAe;IAEjC;;;EAmFf","file":"persistent_bottom_sheet_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__persistent_bottom_sheet_demo: persistent_bottom_sheet_demo
  };
});

//# sourceMappingURL=persistent_bottom_sheet_demo.ddc.js.map
