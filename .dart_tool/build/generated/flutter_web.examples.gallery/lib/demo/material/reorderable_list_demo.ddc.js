define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__material, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
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
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const ui = packages__flutter_web_ui__ui.ui;
  const radio_list_tile = packages__flutter_web__material.src__material__radio_list_tile;
  const checkbox_list_tile = packages__flutter_web__material.src__material__checkbox_list_tile;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const colors = packages__flutter_web__material.src__material__colors;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const theme = packages__flutter_web__material.src__material__theme;
  const icons = packages__flutter_web__material.src__material__icons;
  const scrollbar = packages__flutter_web__material.src__material__scrollbar;
  const reorderable_list = packages__flutter_web__material.src__material__reorderable_list;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const reorderable_list_demo = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $removeAt = dartx.removeAt;
  const $insert = dartx.insert;
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTo_ListItem = () => (StringTo_ListItem = dart.constFn(dart.fnType(reorderable_list_demo._ListItem, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let RadioListTileOf_ReorderableListType = () => (RadioListTileOf_ReorderableListType = dart.constFn(radio_list_tile.RadioListTile$(reorderable_list_demo._ReorderableListType)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToDecoratedBox = () => (BuildContextToDecoratedBox = dart.constFn(dart.fnType(container.DecoratedBox, [framework.BuildContext])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let _ListItemAnd_ListItemToint = () => (_ListItemAnd_ListItemToint = dart.constFn(dart.fnType(core.int, [reorderable_list_demo._ListItem, reorderable_list_demo._ListItem])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: reorderable_list_demo._ReorderableListType.prototype,
        [_name$]: "_ReorderableListType.horizontalAvatar",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: reorderable_list_demo._ReorderableListType.prototype,
        [_name$]: "_ReorderableListType.verticalAvatar",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: reorderable_list_demo._ReorderableListType.prototype,
        [_name$]: "_ReorderableListType.threeLine",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], reorderable_list_demo._ReorderableListType);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$0]: "BorderStyle.none",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C8 || CT.C8,
        [BorderSide_width]: 0,
        [BorderSide_color]: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$0]: "BorderStyle.solid",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1107296256
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C11 || CT.C11,
        [BorderSide_width]: 1,
        [BorderSide_color]: C12 || CT.C12
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C7 || CT.C7,
        [Border_bottom]: C7 || CT.C7,
        [Border_right]: C7 || CT.C7,
        [Border_top]: C10 || CT.C10
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C5 || CT.C5,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C6 || CT.C6,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
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
        [Text_data]: "Horizontal Avatars"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
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
        [Text_data]: "Vertical Avatars"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
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
        [Text_data]: "Three-line"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "groupValue",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primary",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
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
        [Text_data]: "Even more additional list item information appears on line three."
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57949
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C51 || CT.C51
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isThreeLine",
        [_Location_column]: 11,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 11,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondary",
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
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
        [Text_data]: "Reorderable list"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 63,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57427
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C79 || CT.C79
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 13,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 11,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onReorder",
        [_Location_column]: 11,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 11,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart"
      });
    }
  });
  const _name$ = dart.privateName(reorderable_list_demo, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  reorderable_list_demo._ReorderableListType = class _ReorderableListType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (reorderable_list_demo._ReorderableListType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = reorderable_list_demo._ReorderableListType.prototype;
  dart.addTypeTests(reorderable_list_demo._ReorderableListType);
  dart.setLibraryUri(reorderable_list_demo._ReorderableListType, "package:flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart");
  dart.setFieldSignature(reorderable_list_demo._ReorderableListType, () => ({
    __proto__: dart.getFields(reorderable_list_demo._ReorderableListType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(reorderable_list_demo._ReorderableListType, ['toString']);
  reorderable_list_demo._ReorderableListType.horizontalAvatar = C0 || CT.C0;
  reorderable_list_demo._ReorderableListType.verticalAvatar = C1 || CT.C1;
  reorderable_list_demo._ReorderableListType.threeLine = C2 || CT.C2;
  reorderable_list_demo._ReorderableListType.values = C3 || CT.C3;
  reorderable_list_demo.ReorderableListDemo = class ReorderableListDemo extends framework.StatefulWidget {
    createState() {
      return new reorderable_list_demo._ListDemoState.new();
    }
  };
  (reorderable_list_demo.ReorderableListDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    reorderable_list_demo.ReorderableListDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reorderable_list_demo.ReorderableListDemo.prototype;
  dart.addTypeTests(reorderable_list_demo.ReorderableListDemo);
  dart.setMethodSignature(reorderable_list_demo.ReorderableListDemo, () => ({
    __proto__: dart.getMethods(reorderable_list_demo.ReorderableListDemo.__proto__),
    createState: dart.fnType(reorderable_list_demo._ListDemoState, [])
  }));
  dart.setLibraryUri(reorderable_list_demo.ReorderableListDemo, "package:flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart");
  dart.defineLazy(reorderable_list_demo.ReorderableListDemo, {
    /*reorderable_list_demo.ReorderableListDemo.routeName*/get routeName() {
      return "/material/reorderable-list";
    }
  });
  reorderable_list_demo._ListItem = class _ListItem extends core.Object {};
  (reorderable_list_demo._ListItem.new = function(value, checkState) {
    this.value = value;
    this.checkState = checkState;
    ;
  }).prototype = reorderable_list_demo._ListItem.prototype;
  dart.addTypeTests(reorderable_list_demo._ListItem);
  dart.setLibraryUri(reorderable_list_demo._ListItem, "package:flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart");
  dart.setFieldSignature(reorderable_list_demo._ListItem, () => ({
    __proto__: dart.getFields(reorderable_list_demo._ListItem.__proto__),
    value: dart.finalFieldType(core.String),
    checkState: dart.fieldType(core.bool)
  }));
  const _bottomSheet = dart.privateName(reorderable_list_demo, "_bottomSheet");
  const _itemType = dart.privateName(reorderable_list_demo, "_itemType");
  const _reverseSort = dart.privateName(reorderable_list_demo, "_reverseSort");
  const _items = dart.privateName(reorderable_list_demo, "_items");
  const _name = dart.privateName(box_border, "_name");
  let C5;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const _name$0 = dart.privateName(borders, "_name");
  let C8;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C9;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C7;
  const Border_left = dart.privateName(box_border, "Border.left");
  const Border_bottom = dart.privateName(box_border, "Border.bottom");
  const Border_right = dart.privateName(box_border, "Border.right");
  let C11;
  let C12;
  let C10;
  const Border_top = dart.privateName(box_border, "Border.top");
  let C6;
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C4;
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
  let C13;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C15;
  let C14;
  let C21;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C23;
  let C22;
  let C29;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C31;
  let C30;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C45;
  let C43;
  let C42;
  const _showConfigurationSheet = dart.privateName(reorderable_list_demo, "_showConfigurationSheet");
  let C46;
  let C49;
  let C48;
  let C47;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C51;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C50;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C53;
  let C52;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C72;
  let C73;
  let C69;
  let C68;
  const _onReorder = dart.privateName(reorderable_list_demo, "_onReorder");
  let C74;
  let C77;
  let C76;
  let C75;
  let C79;
  let C78;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  let C95;
  let C96;
  let C94;
  let C93;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C97;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C103;
  let C102;
  let C106;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C108;
  let C107;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C121;
  let C118;
  let C117;
  reorderable_list_demo._ListDemoState = class _ListDemoState extends framework.State$(reorderable_list_demo.ReorderableListDemo) {
    changeItemType(type) {
      let t0, t0$;
      this.setState(dart.fn(() => {
        this[_itemType] = type;
      }, VoidToNull()));
      t0 = this[_bottomSheet];
      t0 == null ? null : t0.setState(dart.fn(() => {
      }, VoidToNull()));
      t0$ = this[_bottomSheet];
      t0$ == null ? null : t0$.close();
    }
    [_showConfigurationSheet]() {
      this.setState(dart.fn(() => {
        this[_bottomSheet] = reorderable_list_demo._ListDemoState.scaffoldKey.currentState.showBottomSheet(dart.void, dart.fn(bottomSheetContext => new container.DecoratedBox.new({decoration: C4 || CT.C4, child: new scroll_view.ListView.new({shrinkWrap: true, primary: false, children: JSArrayOfWidget().of([new (RadioListTileOf_ReorderableListType()).new({dense: true, title: C13 || CT.C13, value: reorderable_list_demo._ReorderableListType.horizontalAvatar, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new (RadioListTileOf_ReorderableListType()).new({dense: true, title: C21 || CT.C21, value: reorderable_list_demo._ReorderableListType.verticalAvatar, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new (RadioListTileOf_ReorderableListType()).new({dense: true, title: C29 || CT.C29, value: reorderable_list_demo._ReorderableListType.threeLine, groupValue: this[_itemType], onChanged: dart.bind(this, 'changeItemType'), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), BuildContextToDecoratedBox()));
        this[_bottomSheet].closed.whenComplete(dart.fn(() => {
          if (dart.test(this.mounted)) {
            this.setState(dart.fn(() => {
              this[_bottomSheet] = null;
            }, VoidToNull()));
          }
        }, VoidToNull()));
      }, VoidToNull()));
    }
    buildListTile(item) {
      let t0;
      let secondary = C46 || CT.C46;
      let listTile = null;
      switch (this[_itemType]) {
        case C2 || CT.C2:
        {
          listTile = new checkbox_list_tile.CheckboxListTile.new({key: new (ValueKeyOfString()).new(item.value), isThreeLine: true, value: (t0 = item.checkState, t0 == null ? false : t0), onChanged: dart.fn(newValue => {
              this.setState(dart.fn(() => {
                item.checkState = newValue;
              }, VoidToNull()));
            }, boolToNull()), title: new text.Text.new("This item represents " + dart.str(item.value) + ".", {$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), subtitle: secondary, secondary: C50 || CT.C50, $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
          break;
        }
        case C0 || CT.C0:
        case C1 || CT.C1:
        {
          listTile = new container.Container.new({key: new (ValueKeyOfString()).new(item.value), height: 100.0, width: 100.0, child: new circle_avatar.CircleAvatar.new({child: new text.Text.new(item.value, {$creationLocationd_0dea112b090073317d4: C61 || CT.C61}), backgroundColor: colors.Colors.green, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
          break;
        }
      }
      return listTile;
    }
    [_onReorder](oldIndex, newIndex) {
      this.setState(dart.fn(() => {
        if (dart.notNull(newIndex) > dart.notNull(oldIndex)) {
          newIndex = dart.notNull(newIndex) - 1;
        }
        let item = this[_items][$removeAt](oldIndex);
        this[_items][$insert](newIndex, item);
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: reorderable_list_demo._ListDemoState.scaffoldKey, appBar: new app_bar.AppBar.new({title: C74 || CT.C74, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/reorderable-list", {$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new icon_button.IconButton.new({icon: C78 || CT.C78, tooltip: "Sort", onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_reverseSort] = !dart.test(this[_reverseSort]);
                  this[_items][$sort](dart.fn((a, b) => dart.test(this[_reverseSort]) ? b.value[$compareTo](a.value) : a.value[$compareTo](b.value), _ListItemAnd_ListItemToint()));
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new icon_button.IconButton.new({icon: new icon.Icon.new(dart.equals(theme.Theme.of(context).platform, platform.TargetPlatform.iOS) ? icons.Icons.more_horiz : icons.Icons.more_vert, {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), tooltip: "Show menu", onPressed: this[_bottomSheet] == null ? dart.bind(this, _showConfigurationSheet) : null, $creationLocationd_0dea112b090073317d4: C88 || CT.C88})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), body: new scrollbar.Scrollbar.new({child: new reorderable_list.ReorderableListView.new({header: !dart.equals(this[_itemType], reorderable_list_demo._ReorderableListType.threeLine) ? new basic.Padding.new({padding: C97 || CT.C97, child: new text.Text.new("Header of the list", {style: theme.Theme.of(context).textTheme.headline, $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}) : null, onReorder: dart.bind(this, _onReorder), scrollDirection: dart.equals(this[_itemType], reorderable_list_demo._ReorderableListType.horizontalAvatar) ? basic_types.Axis.horizontal : basic_types.Axis.vertical, padding: C106 || CT.C106, children: this[_items][$map](framework.Widget, dart.bind(this, 'buildListTile'))[$toList](), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117});
    }
  };
  (reorderable_list_demo._ListDemoState.new = function() {
    this[_bottomSheet] = null;
    this[_itemType] = reorderable_list_demo._ReorderableListType.threeLine;
    this[_reverseSort] = false;
    this[_items] = JSArrayOfString().of(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"])[$map](reorderable_list_demo._ListItem, dart.fn(item => new reorderable_list_demo._ListItem.new(item, false), StringTo_ListItem()))[$toList]();
    reorderable_list_demo._ListDemoState.__proto__.new.call(this);
    ;
  }).prototype = reorderable_list_demo._ListDemoState.prototype;
  dart.addTypeTests(reorderable_list_demo._ListDemoState);
  dart.setMethodSignature(reorderable_list_demo._ListDemoState, () => ({
    __proto__: dart.getMethods(reorderable_list_demo._ListDemoState.__proto__),
    changeItemType: dart.fnType(dart.void, [reorderable_list_demo._ReorderableListType]),
    [_showConfigurationSheet]: dart.fnType(dart.void, []),
    buildListTile: dart.fnType(framework.Widget, [reorderable_list_demo._ListItem]),
    [_onReorder]: dart.fnType(dart.void, [core.int, core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reorderable_list_demo._ListDemoState, "package:flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart");
  dart.setFieldSignature(reorderable_list_demo._ListDemoState, () => ({
    __proto__: dart.getFields(reorderable_list_demo._ListDemoState.__proto__),
    [_bottomSheet]: dart.fieldType(scaffold.PersistentBottomSheetController$(dart.void)),
    [_itemType]: dart.fieldType(reorderable_list_demo._ReorderableListType),
    [_reverseSort]: dart.fieldType(core.bool),
    [_items]: dart.finalFieldType(core.List$(reorderable_list_demo._ListItem))
  }));
  dart.defineLazy(reorderable_list_demo._ListDemoState, {
    /*reorderable_list_demo._ListDemoState.scaffoldKey*/get scaffoldKey() {
      return GlobalKeyOfScaffoldState().new();
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo", {
    "package:flutter_web.examples.gallery/demo/material/reorderable_list_demo.dart": reorderable_list_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reorderable_list_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBA;;oEATK;;;;EASL;;;;;;;;;;;;;;;AAQkC;IAAgB;;;QALjB;;AAAQ,6EAAW,GAAG;;EAAC;;;;;;;;MAElC,mDAAS;;;;;kDAOd,OAAY;IAAZ;IAAY;;EAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBA+BG;;AAGrC,MAFF,cAAS;AACS,QAAhB,kBAAY,IAAI;;AAGW,WAA7B;0BAAc,YAAS;;AAEF,YAArB;2BAAc;IAChB;;AAgDI,MA7CF,cAAS;AAmCL,QAlCF,qBAAe,AAAY,AACtB,yFAAsB,QAAc,sBAChC,gEAIE,0CACO,eACH,iBACS,sBAChB,wDACS,mCAEqB,yEAChB,sCACD,kFAEb,wDACS,mCAEqB,uEAChB,sCACD,kFAEb,wDACS,mCAEqB,kEAChB,sCACD;AAcnB,QANF,AAAa,AAAO,uCAAa;AAC/B,wBAAI;AAGA,YAFF,cAAS;AACY,cAAnB,qBAAe;;;;;IAKzB;kBAE+B;;AAChB;AAGN;AACP,cAAQ;;;AAcH,UAZD,WAAW,kDACJ,6BAAI,AAAK,IAAD,sBACA,cACU,KAAhB,AAAK,IAAD,mBAAC,OAAc,wBACf,QAAM;AAGb,cAFF,cAAS;AACmB,gBAA1B,AAAK,IAAD,cAAc,QAAQ;;qCAGvB,kBAAK,AAAqC,mCAAb,AAAK,IAAD,UAAO,yEACrC,SAAS;AAGrB;;;;;AAWC,UARD,WAAW,kCACJ,6BAAI,AAAK,IAAD,iBACL,cACD,cACA,2CACE,kBAAK,AAAK,IAAD,mFACQ;AAG5B;;;AAGJ,YAAO,SAAQ;IACjB;iBAEoB,UAAc;AAO9B,MANF,cAAS;AACP,YAAa,aAAT,QAAQ,iBAAG,QAAQ;AACR,UAAb,WAAS,aAAT,QAAQ,IAAI;;AAEE,mBAAO,AAAO,wBAAS,QAAQ;AAClB,QAA7B,AAAO,sBAAO,QAAQ,EAAE,IAAI;;IAEhC;UAG0B;AACxB,YAAO,iCACA,0DACG,uDAEW,sBACf,qIACA,8DAEW,mBACE;AAMP,gBALF,cAAS;AACqB,kBAA5B,qBAAe,WAAC;AAGiB,kBAFjC,AAAO,oBAAK,SAAW,GAAa,gBAAM,sBACpC,AAAE,AAAM,CAAP,mBAAiB,AAAE,CAAD,UACnB,AAAE,AAAM,CAAP,mBAAiB,AAAE,CAAD;;yFAI/B,sCACQ,kBACuB,YAArB,AAAY,eAAT,OAAO,YAA6B,+BACjC,yBACA,0FAEL,wBACE,AAAa,sBAAG,iBAAO,iCAA0B,gIAI5D,oCACG,sDACa,aAAV,iBAAkC,wDACpC,sDAES,kBAAK,8BACK,AAAY,AAAU,eAAnB,OAAO,2IAC7B,2BACK,oCACgB,YAAV,iBAAkC,+DACxC,8BACA,+DAED,AAAO,AAA2B,+CAAf;IAIrC;;;IA/KsC;IACjB,kBAAiC;IACjD,qBAAe;IACE,eAAiB,AAerC,AAAwD,sBAdxD,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,6CACe,QAAQ,QAAS,wCAAU,IAAI,EAAE;;;EA8JpD;;;;;;;;;;;;;;;;;;;MAnLwC,gDAAW;YAC7C","file":"reorderable_list_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__reorderable_list_demo: reorderable_list_demo
  };
});

//# sourceMappingURL=reorderable_list_demo.ddc.js.map
