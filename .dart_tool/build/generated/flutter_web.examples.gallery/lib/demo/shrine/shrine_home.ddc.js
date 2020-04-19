define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_theme', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_types', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_page', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_data'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_theme, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types, packages__flutter_web_ui__ui, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_page, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_data) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver_grid = packages__flutter_web__animation.src__rendering__sliver_grid;
  const sliver = packages__flutter_web__animation.src__rendering__sliver;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const image = packages__flutter_web__animation.src__widgets__image;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box = packages__flutter_web__animation.src__rendering__box;
  const custom_layout = packages__flutter_web__animation.src__rendering__custom_layout;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const heroes = packages__flutter_web__animation.src__widgets__heroes;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const sliver$ = packages__flutter_web__animation.src__widgets__sliver;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const routes = packages__flutter_web__animation.src__widgets__routes;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const icon_theme_data = packages__flutter_web__src__animation__animation.src__widgets__icon_theme_data;
  const shrine_theme = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_theme.demo__shrine__shrine_theme;
  const shrine_types = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types.demo__shrine__shrine_types;
  const ui = packages__flutter_web_ui__ui.ui;
  const card = packages__flutter_web__material.src__material__card;
  const material = packages__flutter_web__material.src__material__material;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const dropdown = packages__flutter_web__material.src__material__dropdown;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const page = packages__flutter_web__material.src__material__page;
  const theme = packages__flutter_web__material.src__material__theme;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const colors = packages__flutter_web__material.src__material__colors;
  const shrine_page = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_page.demo__shrine__shrine_page;
  const shrine_data = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_data.demo__shrine__shrine_data;
  const shrine_home = Object.create(dart.library);
  const shrine_order = Object.create(dart.library);
  const shrine_demo = Object.create(dart.library);
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $firstWhere = dartx.firstWhere;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $modulo = dartx['%'];
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $where = dartx.where;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToOrderPage = () => (BuildContextToOrderPage = dart.constFn(dart.fnType(shrine_order.OrderPage, [framework.BuildContext])))();
  let ProductTobool = () => (ProductTobool = dart.constFn(dart.fnType(core.bool, [shrine_types.Product])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ProductTo_ProductItem = () => (ProductTo_ProductItem = dart.constFn(dart.fnType(shrine_home._ProductItem, [shrine_types.Product])))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let ListOfProduct = () => (ListOfProduct = dart.constFn(core.List$(shrine_types.Product)))();
  let LinkedMapOfProduct$Order = () => (LinkedMapOfProduct$Order = dart.constFn(_js_helper.LinkedMap$(shrine_types.Product, shrine_types.Order)))();
  let DropdownButtonOfint = () => (DropdownButtonOfint = dart.constFn(dropdown.DropdownButton$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let DropdownMenuItemOfint = () => (DropdownMenuItemOfint = dart.constFn(dropdown.DropdownMenuItem$(core.int)))();
  let intToDropdownMenuItemOfint = () => (intToDropdownMenuItemOfint = dart.constFn(dart.fnType(DropdownMenuItemOfint(), [core.int])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let ProductToCard = () => (ProductToCard = dart.constFn(dart.fnType(card.Card, [shrine_types.Product])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 24,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 17,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 17,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 15,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 8
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 40,
        [_Location_line]: 180,
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
        [_Location_column]: 14,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 16
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 24
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 42,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 288,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 288,
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
        [_Location_column]: 15,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 27,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 19,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 48,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 298,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 54,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 306,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vendor",
        [_Location_column]: 36,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 310,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 13,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 283,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 278,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 44,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 340,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 338,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 8
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 31,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 23,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 348,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 21,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 346,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vendor",
        [_Location_column]: 38,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 357,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 336,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 30,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 15,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 334,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 333,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 332,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "order",
        [_Location_column]: 17,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "products",
        [_Location_column]: 17,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shoppingCart",
        [_Location_column]: 17,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 391,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 46,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 412,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 30,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 412,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 21,
        [_Location_line]: 421,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 420,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 15,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 416,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minimum",
        [_Location_column]: 13,
        [_Location_line]: 415,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 13,
        [_Location_line]: 416,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 413,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 410,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scaffoldKey",
        [_Location_column]: 7,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "products",
        [_Location_column]: 7,
        [_Location_line]: 408,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shoppingCart",
        [_Location_column]: 7,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173, C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 406,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart"
      });
    },
    get C176() {
      return C176 = dart.constList([0, 2, 4, 6, 7], core.int);
    },
    get C177() {
      return C177 = dart.constList([1, 3, 5, 6, 7], core.int);
    },
    get C178() {
      return C178 = dart.constList([0, 0, 1, 1, 2, 2, 3, 4], core.int);
    },
    get C179() {
      return C179 = dart.constList([0, 1, 0, 1, 0, 1, 0, 0], core.int);
    },
    get C180() {
      return C180 = dart.constList([1, 1, 1, 1, 1, 1, 2, 2], core.int);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 28,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 88,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292467161.0
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 8
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 52,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204, C205 || CT.C205], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208, C209 || CT.C209, C210 || CT.C210], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213, C214 || CT.C214], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.constList([C217 || CT.C217], widget_inspector._Location);
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C216 || CT.C216,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225, C226 || CT.C226], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 38,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246, C247 || CT.C247], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 56
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 18,
        [EdgeInsets__left]: 16
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 29,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258, C259 || CT.C259], widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C257 || CT.C257,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294959328.0
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59535
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C265 || CT.C265,
        [Icon_size]: 24,
        [Icon_icon]: C266 || CT.C266
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C270 || CT.C270], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 19,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "quantity",
        [_Location_column]: 19,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273, C274 || CT.C274, C275 || CT.C275], widget_inspector._Location);
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C272 || CT.C272,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278, C279 || CT.C279], widget_inspector._Location);
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C277 || CT.C277,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "vendor",
        [_Location_column]: 36,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282], widget_inspector._Location);
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C281 || CT.C281,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "id",
        [_Location_column]: 17,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.constList([C285 || CT.C285, C286 || CT.C286], widget_inspector._Location);
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C284 || CT.C284,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 13,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289, C290 || CT.C290], widget_inspector._Location);
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C288 || CT.C288,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293, C294 || CT.C294], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C292 || CT.C292,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.constList([C297 || CT.C297, C298 || CT.C298, C299 || CT.C299], widget_inspector._Location);
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C296 || CT.C296,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302, C303 || CT.C303], widget_inspector._Location);
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 66,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306], widget_inspector._Location);
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 52,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C308 || CT.C308,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4279693552.0
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59476
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C312 || CT.C312,
        [Icon_size]: null,
        [Icon_icon]: C313 || CT.C313
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316, C317 || CT.C317, C318 || CT.C318, C319 || CT.C319], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C315 || CT.C315,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 15,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "quantity",
        [_Location_column]: 15,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "quantityChanged",
        [_Location_column]: 15,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.constList([C322 || CT.C322, C323 || CT.C323, C324 || CT.C324], widget_inspector._Location);
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C321 || CT.C321,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 294,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327], widget_inspector._Location);
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 293,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 32,
        [EdgeInsets__left]: 8
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.prototype,
        [SliverGridDelegateWithMaxCrossAxisExtent_childAspectRatio]: 1,
        [SliverGridDelegateWithMaxCrossAxisExtent_crossAxisSpacing]: 8,
        [SliverGridDelegateWithMaxCrossAxisExtent_mainAxisSpacing]: 8,
        [SliverGridDelegateWithMaxCrossAxisExtent_maxCrossAxisExtent]: 248
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 31,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 23,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.constList([C332 || CT.C332, C333 || CT.C333, C334 || CT.C334], widget_inspector._Location);
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C331 || CT.C331,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338], widget_inspector._Location);
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 15,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341, C342 || CT.C342], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minimum",
        [_Location_column]: 13,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 13,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345, C346 || CT.C346, C347 || CT.C347], widget_inspector._Location);
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350], widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scaffoldKey",
        [_Location_column]: 7,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "products",
        [_Location_column]: 7,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shoppingCart",
        [_Location_column]: 7,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.constList([C353 || CT.C353, C354 || CT.C354, C355 || CT.C355, C356 || CT.C356, C357 || CT.C357], widget_inspector._Location);
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C352 || CT.C352,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart"
      });
    },
    get C359() {
      return C359 = dart.constList([], widget_inspector._Location);
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C359 || CT.C359,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine_demo.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4285558896.0
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_size]: null,
        [IconThemeData__opacity]: null,
        [IconThemeData_color]: C361 || CT.C361
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.constList([C364 || CT.C364], widget_inspector._Location);
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C363 || CT.C363,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine_demo.dart"
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.constList([C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C366 || CT.C366,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine_demo.dart"
      });
    }
  });
  const rowStride$ = dart.privateName(shrine_home, "_ShrineGridLayout.rowStride");
  const columnStride$ = dart.privateName(shrine_home, "_ShrineGridLayout.columnStride");
  const tileHeight$ = dart.privateName(shrine_home, "_ShrineGridLayout.tileHeight");
  const tileWidth$ = dart.privateName(shrine_home, "_ShrineGridLayout.tileWidth");
  shrine_home._ShrineGridLayout = class _ShrineGridLayout extends sliver_grid.SliverGridLayout {
    get rowStride() {
      return this[rowStride$];
    }
    set rowStride(value) {
      super.rowStride = value;
    }
    get columnStride() {
      return this[columnStride$];
    }
    set columnStride(value) {
      super.columnStride = value;
    }
    get tileHeight() {
      return this[tileHeight$];
    }
    set tileHeight(value) {
      super.tileHeight = value;
    }
    get tileWidth() {
      return this[tileWidth$];
    }
    set tileWidth(value) {
      super.tileWidth = value;
    }
    getMinChildIndexForScrollOffset(scrollOffset) {
      return shrine_home._minIndexInRow((dart.notNull(scrollOffset) / dart.notNull(this.rowStride))[$truncate]());
    }
    getMaxChildIndexForScrollOffset(scrollOffset) {
      return shrine_home._maxIndexInRow((dart.notNull(scrollOffset) / dart.notNull(this.rowStride))[$truncate]());
    }
    getGeometryForChildIndex(index) {
      let row = shrine_home._rowAtIndex(index);
      let column = shrine_home._columnAtIndex(index);
      let columnSpan = shrine_home._columnSpanAtIndex(index);
      return new sliver_grid.SliverGridGeometry.new({scrollOffset: dart.notNull(row) * dart.notNull(this.rowStride), crossAxisOffset: dart.notNull(column) * dart.notNull(this.columnStride), mainAxisExtent: this.tileHeight, crossAxisExtent: dart.notNull(this.tileWidth) + (dart.notNull(columnSpan) - 1) * dart.notNull(this.columnStride)});
    }
    computeMaxScrollOffset(childCount) {
      if (childCount === 0) return 0.0;
      let rowCount = dart.notNull(shrine_home._rowAtIndex(dart.notNull(childCount) - 1)) + 1;
      let rowSpacing = dart.notNull(this.rowStride) - dart.notNull(this.tileHeight);
      return dart.notNull(this.rowStride) * rowCount - rowSpacing;
    }
  };
  (shrine_home._ShrineGridLayout.new = function(opts) {
    let rowStride = opts && 'rowStride' in opts ? opts.rowStride : null;
    let columnStride = opts && 'columnStride' in opts ? opts.columnStride : null;
    let tileHeight = opts && 'tileHeight' in opts ? opts.tileHeight : null;
    let tileWidth = opts && 'tileWidth' in opts ? opts.tileWidth : null;
    this[rowStride$] = rowStride;
    this[columnStride$] = columnStride;
    this[tileHeight$] = tileHeight;
    this[tileWidth$] = tileWidth;
    shrine_home._ShrineGridLayout.__proto__.new.call(this);
    ;
  }).prototype = shrine_home._ShrineGridLayout.prototype;
  dart.addTypeTests(shrine_home._ShrineGridLayout);
  dart.setMethodSignature(shrine_home._ShrineGridLayout, () => ({
    __proto__: dart.getMethods(shrine_home._ShrineGridLayout.__proto__),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    getGeometryForChildIndex: dart.fnType(sliver_grid.SliverGridGeometry, [core.int]),
    computeMaxScrollOffset: dart.fnType(core.double, [core.int])
  }));
  dart.setLibraryUri(shrine_home._ShrineGridLayout, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.setFieldSignature(shrine_home._ShrineGridLayout, () => ({
    __proto__: dart.getFields(shrine_home._ShrineGridLayout.__proto__),
    rowStride: dart.finalFieldType(core.double),
    columnStride: dart.finalFieldType(core.double),
    tileHeight: dart.finalFieldType(core.double),
    tileWidth: dart.finalFieldType(core.double)
  }));
  shrine_home._ShrineGridDelegate = class _ShrineGridDelegate extends sliver_grid.SliverGridDelegate {
    getLayout(constraints) {
      let tileWidth = (dart.notNull(constraints.crossAxisExtent) - 8) / 2.0;
      return new shrine_home._ShrineGridLayout.new({tileWidth: tileWidth, tileHeight: 224, rowStride: 224 + 8, columnStride: tileWidth + 8});
    }
    shouldRelayout(oldDelegate) {
      sliver_grid.SliverGridDelegate._check(oldDelegate);
      return false;
    }
  };
  (shrine_home._ShrineGridDelegate.new = function() {
    shrine_home._ShrineGridDelegate.__proto__.new.call(this);
    ;
  }).prototype = shrine_home._ShrineGridDelegate.prototype;
  dart.addTypeTests(shrine_home._ShrineGridDelegate);
  dart.setMethodSignature(shrine_home._ShrineGridDelegate, () => ({
    __proto__: dart.getMethods(shrine_home._ShrineGridDelegate.__proto__),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(shrine_home._ShrineGridDelegate, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.defineLazy(shrine_home._ShrineGridDelegate, {
    /*shrine_home._ShrineGridDelegate._spacing*/get _spacing() {
      return 8;
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C13;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C25;
  let C24;
  const vendor$ = dart.privateName(shrine_home, "_VendorItem.vendor");
  shrine_home._VendorItem = class _VendorItem extends framework.StatelessWidget {
    get vendor() {
      return this[vendor$];
    }
    set vendor(value) {
      super.vendor = value;
    }
    build(context) {
      return new basic.SizedBox.new({height: 24.0, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 24.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(12.0), child: new image.Image.asset(this.vendor.avatarAsset, {package: this.vendor.avatarAssetPackage, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), C13 || CT.C13, new basic.Expanded.new({child: new text.Text.new(this.vendor.name, {style: shrine_theme.ShrineTheme.of(context).vendorItemStyle, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (shrine_home._VendorItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let vendor = opts && 'vendor' in opts ? opts.vendor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[vendor$] = vendor;
    if (!(vendor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 129, 16, "vendor != null");
    shrine_home._VendorItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._VendorItem.prototype;
  dart.addTypeTests(shrine_home._VendorItem);
  dart.setMethodSignature(shrine_home._VendorItem, () => ({
    __proto__: dart.getMethods(shrine_home._VendorItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._VendorItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.setFieldSignature(shrine_home._VendorItem, () => ({
    __proto__: dart.getFields(shrine_home._VendorItem.__proto__),
    vendor: dart.finalFieldType(shrine_types.Vendor)
  }));
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  const product$ = dart.privateName(shrine_home, "_PriceItem.product");
  shrine_home._PriceItem = class _PriceItem extends framework.StatelessWidget {
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    buildItem(context, style, padding) {
      let decoration = null;
      if (shrine_home._shoppingCart[$_get](this.product) != null) decoration = new box_decoration.BoxDecoration.new({color: shrine_theme.ShrineTheme.of(context).priceHighlightColor});
      return new container.Container.new({padding: padding, decoration: decoration, child: new text.Text.new(this.product.priceString, {style: style, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
  };
  (shrine_home._PriceItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$] = product;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 166, 16, "product != null");
    shrine_home._PriceItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._PriceItem.prototype;
  dart.addTypeTests(shrine_home._PriceItem);
  dart.setMethodSignature(shrine_home._PriceItem, () => ({
    __proto__: dart.getMethods(shrine_home._PriceItem.__proto__),
    buildItem: dart.fnType(framework.Widget, [framework.BuildContext, text_style.TextStyle, edge_insets.EdgeInsets])
  }));
  dart.setLibraryUri(shrine_home._PriceItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.setFieldSignature(shrine_home._PriceItem, () => ({
    __proto__: dart.getFields(shrine_home._PriceItem.__proto__),
    product: dart.finalFieldType(shrine_types.Product)
  }));
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C37;
  shrine_home._ProductPriceItem = class _ProductPriceItem extends shrine_home._PriceItem {
    build(context) {
      return this.buildItem(context, shrine_theme.ShrineTheme.of(context).priceStyle, C37 || CT.C37);
    }
  };
  (shrine_home._ProductPriceItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shrine_home._ProductPriceItem.__proto__.new.call(this, {key: key, product: product, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._ProductPriceItem.prototype;
  dart.addTypeTests(shrine_home._ProductPriceItem);
  dart.setMethodSignature(shrine_home._ProductPriceItem, () => ({
    __proto__: dart.getMethods(shrine_home._ProductPriceItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._ProductPriceItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  let C38;
  shrine_home._FeaturePriceItem = class _FeaturePriceItem extends shrine_home._PriceItem {
    build(context) {
      return this.buildItem(context, shrine_theme.ShrineTheme.of(context).featurePriceStyle, C38 || CT.C38);
    }
  };
  (shrine_home._FeaturePriceItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shrine_home._FeaturePriceItem.__proto__.new.call(this, {key: key, product: product, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._FeaturePriceItem.prototype;
  dart.addTypeTests(shrine_home._FeaturePriceItem);
  dart.setMethodSignature(shrine_home._FeaturePriceItem, () => ({
    __proto__: dart.getMethods(shrine_home._FeaturePriceItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._FeaturePriceItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  shrine_home._HeadingLayout = class _HeadingLayout extends custom_layout.MultiChildLayoutDelegate {
    performLayout(size) {
      let priceSize = this.layoutChild("price", new box.BoxConstraints.loose(size));
      this.positionChild("price", new ui.Offset.new(dart.notNull(size.width) - dart.notNull(priceSize.width), 0.0));
      let halfWidth = dart.notNull(size.width) / 2.0;
      let halfHeight = dart.notNull(size.height) / 2.0;
      let imageSize = this.layoutChild("image", new box.BoxConstraints.loose(size));
      let imageX = dart.notNull(imageSize.width) < halfWidth - 28 ? halfWidth / 2.0 - dart.notNull(imageSize.width) / 2.0 - 28 : halfWidth - dart.notNull(imageSize.width);
      this.positionChild("image", new ui.Offset.new(imageX, halfHeight - dart.notNull(imageSize.height) / 2.0));
      let maxTitleWidth = halfWidth + 56 - 16;
      let titleBoxConstraints = new box.BoxConstraints.new({maxWidth: maxTitleWidth});
      let titleSize = this.layoutChild("title", titleBoxConstraints);
      let titleX = halfWidth - 56;
      let titleY = halfHeight - dart.notNull(titleSize.height);
      this.positionChild("title", new ui.Offset.new(titleX, titleY));
      let descriptionSize = this.layoutChild("description", titleBoxConstraints);
      let descriptionY = titleY + dart.notNull(titleSize.height) + 16;
      this.positionChild("description", new ui.Offset.new(titleX, descriptionY));
      this.layoutChild("vendor", titleBoxConstraints);
      let vendorY = descriptionY + dart.notNull(descriptionSize.height) + 16;
      this.positionChild("vendor", new ui.Offset.new(titleX, vendorY));
    }
    shouldRelayout(oldDelegate) {
      shrine_home._HeadingLayout._check(oldDelegate);
      return false;
    }
  };
  (shrine_home._HeadingLayout.new = function() {
    shrine_home._HeadingLayout.__proto__.new.call(this);
    ;
  }).prototype = shrine_home._HeadingLayout.prototype;
  dart.addTypeTests(shrine_home._HeadingLayout);
  dart.setMethodSignature(shrine_home._HeadingLayout, () => ({
    __proto__: dart.getMethods(shrine_home._HeadingLayout.__proto__),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(shrine_home._HeadingLayout, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.defineLazy(shrine_home._HeadingLayout, {
    /*shrine_home._HeadingLayout.price*/get price() {
      return "price";
    },
    /*shrine_home._HeadingLayout.image*/get image() {
      return "image";
    },
    /*shrine_home._HeadingLayout.title*/get title() {
      return "title";
    },
    /*shrine_home._HeadingLayout.description*/get description() {
      return "description";
    },
    /*shrine_home._HeadingLayout.vendor*/get vendor() {
      return "vendor";
    }
  });
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C50;
  let C47;
  let C46;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C85;
  let C83;
  let C82;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C91;
  let C90;
  shrine_home._Heading = class _Heading extends framework.StatelessWidget {
    build(context) {
      let screenSize = media_query.MediaQuery.of(context).size;
      let theme = shrine_theme.ShrineTheme.of(context);
      return new basic.MergeSemantics.new({child: new basic.SizedBox.new({height: dart.notNull(screenSize.width) > dart.notNull(screenSize.height) ? (dart.notNull(screenSize.height) - 56) * 0.85 : (dart.notNull(screenSize.height) - 56) * 0.7, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: theme.cardBackgroundColor, border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: theme.dividerColor})})}), child: new basic.CustomMultiChildLayout.new({delegate: new shrine_home._HeadingLayout.new(), children: JSArrayOfWidget().of([new basic.LayoutId.new({id: "price", child: new shrine_home._FeaturePriceItem.new({product: this.product, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new basic.LayoutId.new({id: "image", child: new image.Image.asset(this.product.imageAsset, {package: this.product.imageAssetPackage, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new basic.LayoutId.new({id: "title", child: new text.Text.new(this.product.featureTitle, {style: theme.featureTitleStyle, $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new basic.LayoutId.new({id: "description", child: new text.Text.new(this.product.featureDescription, {style: theme.featureStyle, $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new basic.LayoutId.new({id: "vendor", child: new shrine_home._VendorItem.new({vendor: this.product.vendor, $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90});
    }
  };
  (shrine_home._Heading.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.product = product;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 262, 16, "product != null");
    if (!(product.featureTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 263, 16, "product.featureTitle != null");
    if (!(product.featureDescription != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 264, 16, "product.featureDescription != null");
    shrine_home._Heading.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._Heading.prototype;
  dart.addTypeTests(shrine_home._Heading);
  dart.setMethodSignature(shrine_home._Heading, () => ({
    __proto__: dart.getMethods(shrine_home._Heading.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._Heading, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.setFieldSignature(shrine_home._Heading, () => ({
    __proto__: dart.getFields(shrine_home._Heading.__proto__),
    product: dart.finalFieldType(shrine_types.Product)
  }));
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C97;
  let C96;
  let C100;
  let C103;
  let C104;
  let C105;
  let C102;
  let C101;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C114;
  let C115;
  let C111;
  let C110;
  let C118;
  let C117;
  let C116;
  let C121;
  let C122;
  let C120;
  let C119;
  let C125;
  let C124;
  let C123;
  let C128;
  let C127;
  let C126;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  let C138;
  let C137;
  let C136;
  let C141;
  let C140;
  let C139;
  const product$0 = dart.privateName(shrine_home, "_ProductItem.product");
  const onPressed$ = dart.privateName(shrine_home, "_ProductItem.onPressed");
  shrine_home._ProductItem = class _ProductItem extends framework.StatelessWidget {
    get product() {
      return this[product$0];
    }
    set product(value) {
      super.product = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      return new basic.MergeSemantics.new({child: new card.Card.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new basic.Align.new({alignment: alignment.Alignment.centerRight, child: new shrine_home._ProductPriceItem.new({product: this.product, $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), new container.Container.new({width: 144.0, height: 144.0, padding: C100 || CT.C100, child: new heroes.Hero.new({tag: this.product.tag, child: new image.Image.asset(this.product.imageAsset, {package: this.product.imageAssetPackage, fit: box_fit.BoxFit.contain, $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), new basic.Padding.new({padding: C100 || CT.C100, child: new shrine_home._VendorItem.new({vendor: this.product.vendor, $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119})]), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), new material.Material.new({type: material.MaterialType.transparency, child: new ink_well.InkWell.new({onTap: this.onPressed, $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129})]), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139});
    }
  };
  (shrine_home._ProductItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$0] = product;
    this[onPressed$] = onPressed;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 324, 16, "product != null");
    shrine_home._ProductItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home._ProductItem.prototype;
  dart.addTypeTests(shrine_home._ProductItem);
  dart.setMethodSignature(shrine_home._ProductItem, () => ({
    __proto__: dart.getMethods(shrine_home._ProductItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._ProductItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.setFieldSignature(shrine_home._ProductItem, () => ({
    __proto__: dart.getFields(shrine_home._ProductItem.__proto__),
    product: dart.finalFieldType(shrine_types.Product),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  shrine_home.ShrineHome = class ShrineHome extends framework.StatefulWidget {
    createState() {
      return new shrine_home._ShrineHomeState.new();
    }
  };
  (shrine_home.ShrineHome.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shrine_home.ShrineHome.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_home.ShrineHome.prototype;
  dart.addTypeTests(shrine_home.ShrineHome);
  dart.setMethodSignature(shrine_home.ShrineHome, () => ({
    __proto__: dart.getMethods(shrine_home.ShrineHome.__proto__),
    createState: dart.fnType(shrine_home._ShrineHomeState, [])
  }));
  dart.setLibraryUri(shrine_home.ShrineHome, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  let C144;
  let C145;
  let C146;
  let C143;
  let C142;
  const _showOrderPage = dart.privateName(shrine_home, "_showOrderPage");
  let C149;
  let C148;
  let C147;
  let C152;
  let C151;
  let C150;
  let C153;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C161;
  let C159;
  let C158;
  let C164;
  let C165;
  let C166;
  let C163;
  let C162;
  let C169;
  let C168;
  let C167;
  let C172;
  let C173;
  let C174;
  let C175;
  let C171;
  let C170;
  shrine_home._ShrineHomeState = class _ShrineHomeState extends framework.State$(shrine_home.ShrineHome) {
    [_showOrderPage](product) {
      return async.async(dart.void, (function* _showOrderPage() {
        let t0;
        let order = (t0 = shrine_home._shoppingCart[$_get](product), t0 == null ? new shrine_types.Order.new({product: product}) : t0);
        let completedOrder = (yield navigator.Navigator.push(shrine_types.Order, this.context, new shrine_order.ShrineOrderRoute.new({order: order, builder: dart.fn(context => new shrine_order.OrderPage.new({order: order, products: shrine_home._products, shoppingCart: shrine_home._shoppingCart, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), BuildContextToOrderPage())})));
        if (!(completedOrder.product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_home.dart", 397, 12, "completedOrder.product != null");
        if (completedOrder.quantity === 0) shrine_home._shoppingCart[$remove](completedOrder.product);
      }).bind(this));
    }
    build(context) {
      let featured = shrine_home._products[$firstWhere](dart.fn(product => product.featureDescription != null, ProductTobool()));
      return new shrine_page.ShrinePage.new({scaffoldKey: shrine_home._ShrineHomeState._scaffoldKey, products: shrine_home._products, shoppingCart: shrine_home._shoppingCart, body: new scroll_view.CustomScrollView.new({slivers: JSArrayOfWidget().of([new basic.SliverToBoxAdapter.new({child: new shrine_home._Heading.new({product: featured, $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), new safe_area.SliverSafeArea.new({top: false, minimum: C153 || CT.C153, sliver: new sliver$.SliverGrid.new({gridDelegate: shrine_home._ShrineHomeState.gridDelegate, delegate: new sliver$.SliverChildListDelegate.new(shrine_home._products[$map](framework.Widget, dart.fn(product => new shrine_home._ProductItem.new({product: product, onPressed: dart.fn(() => {
                    this[_showOrderPage](product);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), ProductTo_ProductItem()))[$toList]()), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162})]), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170});
    }
  };
  (shrine_home._ShrineHomeState.new = function() {
    shrine_home._ShrineHomeState.__proto__.new.call(this);
    ;
  }).prototype = shrine_home._ShrineHomeState.prototype;
  dart.addTypeTests(shrine_home._ShrineHomeState);
  dart.setMethodSignature(shrine_home._ShrineHomeState, () => ({
    __proto__: dart.getMethods(shrine_home._ShrineHomeState.__proto__),
    [_showOrderPage]: dart.fnType(async.Future$(dart.void), [shrine_types.Product]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_home._ShrineHomeState, "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart");
  dart.defineLazy(shrine_home._ShrineHomeState, {
    /*shrine_home._ShrineHomeState._scaffoldKey*/get _scaffoldKey() {
      return GlobalKeyOfScaffoldState().new({debugLabel: "Shrine Home"});
    },
    /*shrine_home._ShrineHomeState.gridDelegate*/get gridDelegate() {
      return new shrine_home._ShrineGridDelegate.new();
    }
  });
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  shrine_home._minIndexInRow = function _minIndexInRow(rowIndex) {
    let blockIndex = (dart.notNull(rowIndex) / 5)[$truncate]();
    return dart.notNull((C176 || CT.C176)[$_get](rowIndex[$modulo](5))) + blockIndex * 8;
  };
  shrine_home._maxIndexInRow = function _maxIndexInRow(rowIndex) {
    let blockIndex = (dart.notNull(rowIndex) / 5)[$truncate]();
    return dart.notNull((C177 || CT.C177)[$_get](rowIndex[$modulo](5))) + blockIndex * 8;
  };
  shrine_home._rowAtIndex = function _rowAtIndex(index) {
    let blockCount = (dart.notNull(index) / 8)[$truncate]();
    return dart.notNull((C178 || CT.C178)[$_get](dart.notNull(index) - blockCount * 8)) + blockCount * 5;
  };
  shrine_home._columnAtIndex = function _columnAtIndex(index) {
    return (C179 || CT.C179)[$_get](index[$modulo](8));
  };
  shrine_home._columnSpanAtIndex = function _columnSpanAtIndex(index) {
    return (C180 || CT.C180)[$_get](index[$modulo](8));
  };
  dart.defineLazy(shrine_home, {
    /*shrine_home.unitSize*/get unitSize() {
      return 56;
    },
    /*shrine_home._products*/get _products() {
      return ListOfProduct().from(shrine_data.allProducts());
    },
    /*shrine_home._shoppingCart*/get _shoppingCart() {
      return new (LinkedMapOfProduct$Order()).new();
    },
    /*shrine_home._childrenPerBlock*/get _childrenPerBlock() {
      return 8;
    },
    /*shrine_home._rowsPerBlock*/get _rowsPerBlock() {
      return 5;
    }
  });
  let C183;
  let C184;
  let C182;
  let C181;
  let C185;
  let C188;
  let C189;
  let C187;
  let C186;
  let C190;
  let C191;
  const Color__value = dart.privateName(ui, "Color._value");
  let C192;
  let C193;
  let C196;
  let C197;
  let C195;
  let C194;
  let C200;
  let C201;
  let C199;
  let C198;
  let C204;
  let C205;
  let C203;
  let C202;
  let C208;
  let C209;
  let C210;
  let C207;
  let C206;
  let C213;
  let C214;
  let C212;
  let C211;
  let C217;
  let C216;
  let C215;
  let C220;
  let C221;
  let C219;
  let C218;
  let C224;
  let C225;
  let C226;
  let C223;
  let C222;
  const product$1 = dart.privateName(shrine_order, "_ProductItem.product");
  const quantity$ = dart.privateName(shrine_order, "_ProductItem.quantity");
  const onChanged$ = dart.privateName(shrine_order, "_ProductItem.onChanged");
  shrine_order._ProductItem = class _ProductItem extends framework.StatelessWidget {
    get product() {
      return this[product$1];
    }
    set product(value) {
      super.product = value;
    }
    get quantity() {
      return this[quantity$];
    }
    set quantity(value) {
      super.quantity = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    build(context) {
      let theme = shrine_theme.ShrineTheme.of(context);
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new text.Text.new(this.product.name, {style: theme.featureTitleStyle, $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), C185 || CT.C185, new text.Text.new(this.product.description, {style: theme.featureStyle, $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), C190 || CT.C190, new basic.Padding.new({padding: C191 || CT.C191, child: new dropdown.DropdownButtonHideUnderline.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: C192 || CT.C192})}), child: new (DropdownButtonOfint()).new({items: JSArrayOfint().of([0, 1, 2, 3, 4, 5])[$map](DropdownMenuItemOfint(), dart.fn(value => new (DropdownMenuItemOfint()).new({value: value, child: new basic.Padding.new({padding: C193 || CT.C193, child: new text.Text.new("Quantity " + dart.str(value), {style: theme.quantityMenuStyle, $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), $creationLocationd_0dea112b090073317d4: C202 || CT.C202}), intToDropdownMenuItemOfint()))[$toList](), value: this.quantity, onChanged: this.onChanged, $creationLocationd_0dea112b090073317d4: C206 || CT.C206}), $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), $creationLocationd_0dea112b090073317d4: C215 || CT.C215}), $creationLocationd_0dea112b090073317d4: C218 || CT.C218})]), $creationLocationd_0dea112b090073317d4: C222 || CT.C222});
    }
  };
  (shrine_order._ProductItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let quantity = opts && 'quantity' in opts ? opts.quantity : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$1] = product;
    this[quantity$] = quantity;
    this[onChanged$] = onChanged;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 20, 16, "product != null");
    if (!(quantity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 21, 16, "quantity != null");
    if (!(onChanged != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 22, 16, "onChanged != null");
    shrine_order._ProductItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_order._ProductItem.prototype;
  dart.addTypeTests(shrine_order._ProductItem);
  dart.setMethodSignature(shrine_order._ProductItem, () => ({
    __proto__: dart.getMethods(shrine_order._ProductItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_order._ProductItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order._ProductItem, () => ({
    __proto__: dart.getFields(shrine_order._ProductItem.__proto__),
    product: dart.finalFieldType(shrine_types.Product),
    quantity: dart.finalFieldType(core.int),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.int]))
  }));
  let C229;
  let C230;
  let C228;
  let C227;
  let C233;
  let C234;
  let C232;
  let C231;
  let C237;
  let C238;
  let C236;
  let C235;
  let C241;
  let C242;
  let C240;
  let C239;
  let C245;
  let C246;
  let C247;
  let C244;
  let C243;
  const vendor$0 = dart.privateName(shrine_order, "_VendorItem.vendor");
  shrine_order._VendorItem = class _VendorItem extends framework.StatelessWidget {
    get vendor() {
      return this[vendor$0];
    }
    set vendor(value) {
      super.vendor = value;
    }
    build(context) {
      let theme = shrine_theme.ShrineTheme.of(context);
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 24.0, child: new basic.Align.new({alignment: alignment.Alignment.bottomLeft, child: new text.Text.new(this.vendor.name, {style: theme.vendorTitleStyle, $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), C190 || CT.C190, new text.Text.new(this.vendor.description, {style: theme.vendorStyle, $creationLocationd_0dea112b090073317d4: C239 || CT.C239})]), $creationLocationd_0dea112b090073317d4: C243 || CT.C243});
    }
  };
  (shrine_order._VendorItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let vendor = opts && 'vendor' in opts ? opts.vendor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[vendor$0] = vendor;
    if (!(vendor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 75, 16, "vendor != null");
    shrine_order._VendorItem.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_order._VendorItem.prototype;
  dart.addTypeTests(shrine_order._VendorItem);
  dart.setMethodSignature(shrine_order._VendorItem, () => ({
    __proto__: dart.getMethods(shrine_order._VendorItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_order._VendorItem, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order._VendorItem, () => ({
    __proto__: dart.getFields(shrine_order._VendorItem.__proto__),
    vendor: dart.finalFieldType(shrine_types.Vendor)
  }));
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C248;
  shrine_order._HeadingLayout = class _HeadingLayout extends custom_layout.MultiChildLayoutDelegate {
    performLayout(size) {
      let landscape = dart.notNull(size.width) > dart.notNull(size.height);
      let imageWidth = dart.notNull(landscape ? dart.notNull(size.width) / 2.0 : size.width) - 56 * 2.0;
      let imageConstraints = new box.BoxConstraints.new({maxHeight: 224.0, maxWidth: imageWidth});
      let imageSize = this.layoutChild("image", imageConstraints);
      this.positionChild("image", C248 || CT.C248);
      let productWidth = landscape ? dart.notNull(size.width) / 2.0 : dart.notNull(size.width) - 56;
      let productConstraints = new box.BoxConstraints.new({maxWidth: productWidth});
      let productSize = this.layoutChild("product", productConstraints);
      let productX = landscape ? dart.notNull(size.width) / 2.0 : 56;
      let productY = landscape ? 0.0 : 0 + dart.notNull(imageSize.height) + 16.0;
      this.positionChild("product", new ui.Offset.new(productX, productY));
      let iconSize = this.layoutChild("icon", new box.BoxConstraints.loose(size));
      this.positionChild("icon", new ui.Offset.new(productX - dart.notNull(iconSize.width) - 16.0, productY + 8.0));
      let vendorWidth = landscape ? dart.notNull(size.width) - 56 : productWidth;
      this.layoutChild("vendor", new box.BoxConstraints.new({maxWidth: vendorWidth}));
      let vendorX = landscape ? 56 : productX;
      let vendorY = productY + dart.notNull(productSize.height) + 16.0;
      this.positionChild("vendor", new ui.Offset.new(vendorX, vendorY));
    }
    shouldRelayout(oldDelegate) {
      shrine_order._HeadingLayout._check(oldDelegate);
      return true;
    }
  };
  (shrine_order._HeadingLayout.new = function() {
    shrine_order._HeadingLayout.__proto__.new.call(this);
    ;
  }).prototype = shrine_order._HeadingLayout.prototype;
  dart.addTypeTests(shrine_order._HeadingLayout);
  dart.setMethodSignature(shrine_order._HeadingLayout, () => ({
    __proto__: dart.getMethods(shrine_order._HeadingLayout.__proto__),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(shrine_order._HeadingLayout, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.defineLazy(shrine_order._HeadingLayout, {
    /*shrine_order._HeadingLayout.image*/get image() {
      return "image";
    },
    /*shrine_order._HeadingLayout.icon*/get icon() {
      return "icon";
    },
    /*shrine_order._HeadingLayout.product*/get product() {
      return "product";
    },
    /*shrine_order._HeadingLayout.vendor*/get vendor() {
      return "vendor";
    }
  });
  let C249;
  let C252;
  let C253;
  let C254;
  let C255;
  let C251;
  let C250;
  let C258;
  let C259;
  let C257;
  let C256;
  let C262;
  let C263;
  let C261;
  let C260;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  let C265;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C266;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C264;
  let C269;
  let C270;
  let C268;
  let C267;
  let C273;
  let C274;
  let C275;
  let C272;
  let C271;
  let C278;
  let C279;
  let C277;
  let C276;
  let C282;
  let C281;
  let C280;
  let C285;
  let C286;
  let C284;
  let C283;
  let C289;
  let C290;
  let C288;
  let C287;
  let C293;
  let C294;
  let C292;
  let C291;
  let C297;
  let C298;
  let C299;
  let C296;
  let C295;
  let C302;
  let C303;
  let C301;
  let C300;
  const product$2 = dart.privateName(shrine_order, "_Heading.product");
  const quantity$0 = dart.privateName(shrine_order, "_Heading.quantity");
  const quantityChanged$ = dart.privateName(shrine_order, "_Heading.quantityChanged");
  shrine_order._Heading = class _Heading extends framework.StatelessWidget {
    get product() {
      return this[product$2];
    }
    set product(value) {
      super.product = value;
    }
    get quantity() {
      return this[quantity$0];
    }
    set quantity(value) {
      super.quantity = value;
    }
    get quantityChanged() {
      return this[quantityChanged$];
    }
    set quantityChanged(value) {
      super.quantityChanged = value;
    }
    build(context) {
      let screenSize = media_query.MediaQuery.of(context).size;
      return new basic.SizedBox.new({height: (dart.notNull(screenSize.height) - 56) * 1.35, child: new material.Material.new({type: material.MaterialType.card, elevation: 0.0, child: new basic.Padding.new({padding: C249 || CT.C249, child: new basic.CustomMultiChildLayout.new({delegate: new shrine_order._HeadingLayout.new(), children: JSArrayOfWidget().of([new basic.LayoutId.new({id: "image", child: new heroes.Hero.new({tag: this.product.tag, child: new image.Image.asset(this.product.imageAsset, {package: this.product.imageAssetPackage, fit: box_fit.BoxFit.contain, alignment: alignment.Alignment.center, $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), $creationLocationd_0dea112b090073317d4: C256 || CT.C256}), $creationLocationd_0dea112b090073317d4: C260 || CT.C260}), new basic.LayoutId.new({id: "icon", child: C264 || CT.C264, $creationLocationd_0dea112b090073317d4: C267 || CT.C267}), new basic.LayoutId.new({id: "product", child: new shrine_order._ProductItem.new({product: this.product, quantity: this.quantity, onChanged: this.quantityChanged, $creationLocationd_0dea112b090073317d4: C271 || CT.C271}), $creationLocationd_0dea112b090073317d4: C276 || CT.C276}), new basic.LayoutId.new({id: "vendor", child: new shrine_order._VendorItem.new({vendor: this.product.vendor, $creationLocationd_0dea112b090073317d4: C280 || CT.C280}), $creationLocationd_0dea112b090073317d4: C283 || CT.C283})]), $creationLocationd_0dea112b090073317d4: C287 || CT.C287}), $creationLocationd_0dea112b090073317d4: C291 || CT.C291}), $creationLocationd_0dea112b090073317d4: C295 || CT.C295}), $creationLocationd_0dea112b090073317d4: C300 || CT.C300});
    }
  };
  (shrine_order._Heading.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let product = opts && 'product' in opts ? opts.product : null;
    let quantity = opts && 'quantity' in opts ? opts.quantity : null;
    let quantityChanged = opts && 'quantityChanged' in opts ? opts.quantityChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$2] = product;
    this[quantity$0] = quantity;
    this[quantityChanged$] = quantityChanged;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 155, 16, "product != null");
    if (!(quantity != null && dart.notNull(quantity) >= 0 && dart.notNull(quantity) <= 5)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 156, 16, "quantity != null && quantity >= 0 && quantity <= 5");
    shrine_order._Heading.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_order._Heading.prototype;
  dart.addTypeTests(shrine_order._Heading);
  dart.setMethodSignature(shrine_order._Heading, () => ({
    __proto__: dart.getMethods(shrine_order._Heading.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_order._Heading, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order._Heading, () => ({
    __proto__: dart.getFields(shrine_order._Heading.__proto__),
    product: dart.finalFieldType(shrine_types.Product),
    quantity: dart.finalFieldType(core.int),
    quantityChanged: dart.finalFieldType(dart.fnType(dart.void, [core.int]))
  }));
  const order$ = dart.privateName(shrine_order, "OrderPage.order");
  const products$ = dart.privateName(shrine_order, "OrderPage.products");
  const shoppingCart$ = dart.privateName(shrine_order, "OrderPage.shoppingCart");
  shrine_order.OrderPage = class OrderPage extends framework.StatefulWidget {
    get order() {
      return this[order$];
    }
    set order(value) {
      super.order = value;
    }
    get products() {
      return this[products$];
    }
    set products(value) {
      super.products = value;
    }
    get shoppingCart() {
      return this[shoppingCart$];
    }
    set shoppingCart(value) {
      super.shoppingCart = value;
    }
    createState() {
      return new shrine_order._OrderPageState.new();
    }
  };
  (shrine_order.OrderPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let order = opts && 'order' in opts ? opts.order : null;
    let products = opts && 'products' in opts ? opts.products : null;
    let shoppingCart = opts && 'shoppingCart' in opts ? opts.shoppingCart : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[order$] = order;
    this[products$] = products;
    this[shoppingCart$] = shoppingCart;
    if (!(order != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 223, 16, "order != null");
    if (!(products != null && dart.test(products[$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 224, 16, "products != null && products.isNotEmpty");
    if (!(shoppingCart != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 225, 16, "shoppingCart != null");
    shrine_order.OrderPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_order.OrderPage.prototype;
  dart.addTypeTests(shrine_order.OrderPage);
  dart.setMethodSignature(shrine_order.OrderPage, () => ({
    __proto__: dart.getMethods(shrine_order.OrderPage.__proto__),
    createState: dart.fnType(shrine_order._OrderPageState, [])
  }));
  dart.setLibraryUri(shrine_order.OrderPage, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order.OrderPage, () => ({
    __proto__: dart.getFields(shrine_order.OrderPage.__proto__),
    order: dart.finalFieldType(shrine_types.Order),
    products: dart.finalFieldType(core.List$(shrine_types.Product)),
    shoppingCart: dart.finalFieldType(core.Map$(shrine_types.Product, shrine_types.Order))
  }));
  let C306;
  let C305;
  let C304;
  let C309;
  let C308;
  let C307;
  let C310;
  let C312;
  let C313;
  let C311;
  let C316;
  let C317;
  let C318;
  let C319;
  let C315;
  let C314;
  let C322;
  let C323;
  let C324;
  let C321;
  let C320;
  let C327;
  let C326;
  let C325;
  let C328;
  const SliverGridDelegateWithMaxCrossAxisExtent_childAspectRatio = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.childAspectRatio");
  const SliverGridDelegateWithMaxCrossAxisExtent_crossAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.crossAxisSpacing");
  const SliverGridDelegateWithMaxCrossAxisExtent_mainAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.mainAxisSpacing");
  const SliverGridDelegateWithMaxCrossAxisExtent_maxCrossAxisExtent = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.maxCrossAxisExtent");
  let C329;
  let C332;
  let C333;
  let C334;
  let C331;
  let C330;
  let C337;
  let C338;
  let C336;
  let C335;
  let C341;
  let C342;
  let C340;
  let C339;
  let C345;
  let C346;
  let C347;
  let C344;
  let C343;
  let C350;
  let C349;
  let C348;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C352;
  let C351;
  shrine_order._OrderPageState = class _OrderPageState extends framework.State$(shrine_order.OrderPage) {
    initState() {
      super.initState();
      this.scaffoldKey = GlobalKeyOfScaffoldState().new({debugLabel: "Shrine Order " + dart.str(this.widget.order)});
    }
    get currentOrder() {
      return shrine_order.ShrineOrderRoute.of(this.context).order;
    }
    set currentOrder(value) {
      shrine_order.ShrineOrderRoute.of(this.context).order = value;
    }
    updateOrder(opts) {
      let quantity = opts && 'quantity' in opts ? opts.quantity : null;
      let inCart = opts && 'inCart' in opts ? opts.inCart : null;
      let newOrder = this.currentOrder.copyWith({quantity: quantity, inCart: inCart});
      if (!dart.equals(this.currentOrder, newOrder)) {
        this.setState(dart.fn(() => {
          this.widget.shoppingCart[$_set](newOrder.product, newOrder);
          this.currentOrder = newOrder;
        }, VoidToNull()));
      }
    }
    showSnackBarMessage(message) {
      this.scaffoldKey.currentState.showSnackBar(new snack_bar.SnackBar.new({content: new text.Text.new(message, {$creationLocationd_0dea112b090073317d4: C304 || CT.C304}), $creationLocationd_0dea112b090073317d4: C307 || CT.C307}));
    }
    build(context) {
      return new shrine_page.ShrinePage.new({scaffoldKey: this.scaffoldKey, products: this.widget.products, shoppingCart: this.widget.shoppingCart, floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
            this.updateOrder({inCart: true});
            let n = this.currentOrder.quantity;
            let item = this.currentOrder.product.name;
            this.showSnackBarMessage("There " + (n === 1 ? "is one " + dart.str(item) + " item" : "are " + dart.str(n) + " " + dart.str(item) + " items") + " in the shopping cart.");
          }, VoidToNull()), backgroundColor: C310 || CT.C310, tooltip: "Add to cart", child: C311 || CT.C311, $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), body: new scroll_view.CustomScrollView.new({slivers: JSArrayOfWidget().of([new basic.SliverToBoxAdapter.new({child: new shrine_order._Heading.new({product: this.widget.order.product, quantity: this.currentOrder.quantity, quantityChanged: dart.fn(value => {
                  this.updateOrder({quantity: value});
                }, intToNull()), $creationLocationd_0dea112b090073317d4: C320 || CT.C320}), $creationLocationd_0dea112b090073317d4: C325 || CT.C325}), new safe_area.SliverSafeArea.new({top: false, minimum: C328 || CT.C328, sliver: new sliver$.SliverGrid.new({gridDelegate: C329 || CT.C329, delegate: new sliver$.SliverChildListDelegate.new(this.widget.products[$where](dart.fn(product => !dart.equals(product, this.widget.order.product), ProductTobool()))[$map](card.Card, dart.fn(product => new card.Card.new({elevation: 1.0, child: new image.Image.asset(product.imageAsset, {package: product.imageAssetPackage, fit: box_fit.BoxFit.contain, $creationLocationd_0dea112b090073317d4: C330 || CT.C330}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), ProductToCard()))[$toList]()), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C343 || CT.C343})]), $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), $creationLocationd_0dea112b090073317d4: C351 || CT.C351});
    }
  };
  (shrine_order._OrderPageState.new = function() {
    this.scaffoldKey = null;
    shrine_order._OrderPageState.__proto__.new.call(this);
    ;
  }).prototype = shrine_order._OrderPageState.prototype;
  dart.addTypeTests(shrine_order._OrderPageState);
  dart.setMethodSignature(shrine_order._OrderPageState, () => ({
    __proto__: dart.getMethods(shrine_order._OrderPageState.__proto__),
    updateOrder: dart.fnType(dart.void, [], {inCart: core.bool, quantity: core.int}, {}),
    showSnackBarMessage: dart.fnType(dart.void, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(shrine_order._OrderPageState, () => ({
    __proto__: dart.getGetters(shrine_order._OrderPageState.__proto__),
    currentOrder: shrine_types.Order
  }));
  dart.setSetterSignature(shrine_order._OrderPageState, () => ({
    __proto__: dart.getSetters(shrine_order._OrderPageState.__proto__),
    currentOrder: shrine_types.Order
  }));
  dart.setLibraryUri(shrine_order._OrderPageState, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order._OrderPageState, () => ({
    __proto__: dart.getFields(shrine_order._OrderPageState.__proto__),
    scaffoldKey: dart.fieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  const _is_ShrinePageRoute_default = Symbol('_is_ShrinePageRoute_default');
  shrine_demo.ShrinePageRoute$ = dart.generic(T => {
    class ShrinePageRoute extends page.MaterialPageRoute$(T) {
      buildPage(context, animation, secondaryAnimation) {
        return shrine_demo.buildShrine(context, super.buildPage(context, animation, secondaryAnimation));
      }
    }
    (ShrinePageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      ShrinePageRoute.__proto__.new.call(this, {builder: builder, settings: settings});
      ;
    }).prototype = ShrinePageRoute.prototype;
    dart.addTypeTests(ShrinePageRoute);
    ShrinePageRoute.prototype[_is_ShrinePageRoute_default] = true;
    dart.setLibraryUri(ShrinePageRoute, "package:flutter_web.examples.gallery/demo/shrine_demo.dart");
    return ShrinePageRoute;
  });
  shrine_demo.ShrinePageRoute = shrine_demo.ShrinePageRoute$();
  dart.addTypeTests(shrine_demo.ShrinePageRoute, _is_ShrinePageRoute_default);
  const order$0 = dart.privateName(shrine_order, "ShrineOrderRoute.order");
  shrine_order.ShrineOrderRoute = class ShrineOrderRoute extends shrine_demo.ShrinePageRoute$(shrine_types.Order) {
    get order() {
      return this[order$0];
    }
    set order(value) {
      this[order$0] = value;
    }
    get currentResult() {
      return this.order;
    }
    static of(context) {
      return shrine_order.ShrineOrderRoute._check(routes.ModalRoute.of(shrine_types.Order, context));
    }
  };
  (shrine_order.ShrineOrderRoute.new = function(opts) {
    let order = opts && 'order' in opts ? opts.order : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let settings = opts && 'settings' in opts ? opts.settings : null;
    this[order$0] = order;
    if (!(order != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_order.dart", 343, 16, "order != null");
    shrine_order.ShrineOrderRoute.__proto__.new.call(this, {builder: builder, settings: settings});
    ;
  }).prototype = shrine_order.ShrineOrderRoute.prototype;
  dart.addTypeTests(shrine_order.ShrineOrderRoute);
  dart.setLibraryUri(shrine_order.ShrineOrderRoute, "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart");
  dart.setFieldSignature(shrine_order.ShrineOrderRoute, () => ({
    __proto__: dart.getFields(shrine_order.ShrineOrderRoute.__proto__),
    order: dart.fieldType(shrine_types.Order)
  }));
  let C359;
  let C358;
  shrine_demo.ShrineDemo = class ShrineDemo extends framework.StatelessWidget {
    build(context) {
      return shrine_demo.buildShrine(context, new shrine_home.ShrineHome.new({$creationLocationd_0dea112b090073317d4: C358 || CT.C358}));
    }
  };
  (shrine_demo.ShrineDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    shrine_demo.ShrineDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shrine_demo.ShrineDemo.prototype;
  dart.addTypeTests(shrine_demo.ShrineDemo);
  dart.setMethodSignature(shrine_demo.ShrineDemo, () => ({
    __proto__: dart.getMethods(shrine_demo.ShrineDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shrine_demo.ShrineDemo, "package:flutter_web.examples.gallery/demo/shrine_demo.dart");
  dart.defineLazy(shrine_demo.ShrineDemo, {
    /*shrine_demo.ShrineDemo.routeName*/get routeName() {
      return "/shrine";
    }
  });
  const IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  const IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  let C361;
  const IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  let C360;
  let C364;
  let C363;
  let C362;
  let C367;
  let C368;
  let C366;
  let C365;
  shrine_demo.buildShrine = function buildShrine(context, child) {
    return new theme.Theme.new({data: theme_data.ThemeData.new({primarySwatch: colors.Colors.grey, iconTheme: C360 || CT.C360, platform: theme.Theme.of(context).platform}), child: new shrine_theme.ShrineTheme.new({child: child, $creationLocationd_0dea112b090073317d4: C362 || CT.C362}), $creationLocationd_0dea112b090073317d4: C365 || CT.C365});
  };
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/shrine/shrine_home", {
    "package:flutter_web.examples.gallery/demo/shrine/shrine_home.dart": shrine_home,
    "package:flutter_web.examples.gallery/demo/shrine/shrine_order.dart": shrine_order,
    "package:flutter_web.examples.gallery/demo/shrine_demo.dart": shrine_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_home.dart","shrine_order.dart","../shrine_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"shrine_home.ddc.js"}');
  // Exports:
  return {
    demo__shrine__shrine_home: shrine_home,
    demo__shrine__shrine_order: shrine_order,
    demo__shrine_demo: shrine_demo
  };
});

//# sourceMappingURL=shrine_home.ddc.js.map
