define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/demo'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const data_table = packages__flutter_web__material.src__material__data_table;
  const data_table_source = packages__flutter_web__material.src__material__data_table_source;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const paginated_data_table = packages__flutter_web__material.src__material__paginated_data_table;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const demo = packages__flutter_web$46examples$46gallery__gallery__demo.gallery__demo;
  const data_table_demo = Object.create(dart.library);
  const $sort = dartx.sort;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toStringAsFixed = dartx.toStringAsFixed;
  let JSArrayOfDessert = () => (JSArrayOfDessert = dart.constFn(_interceptors.JSArray$(data_table_demo.Dessert)))();
  let DessertAndDessertToint = () => (DessertAndDessertToint = dart.constFn(dart.fnType(core.int, [data_table_demo.Dessert, data_table_demo.Dessert])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let JSArrayOfDataCell = () => (JSArrayOfDataCell = dart.constFn(_interceptors.JSArray$(data_table.DataCell)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let DessertToString = () => (DessertToString = dart.constFn(dart.fnType(core.String, [data_table_demo.Dessert])))();
  let intAndboolTovoid = () => (intAndboolTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.bool])))();
  let DessertToint = () => (DessertToint = dart.constFn(dart.fnType(core.int, [data_table_demo.Dessert])))();
  let DessertTodouble = () => (DessertTodouble = dart.constFn(dart.fnType(core.double, [data_table_demo.Dessert])))();
  let JSArrayOfDataColumn = () => (JSArrayOfDataColumn = dart.constFn(_interceptors.JSArray$(data_table.DataColumn)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 113,
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
        [_Location_column]: 20,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 64,
        [_Location_line]: 117,
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
        [_Location_column]: 20,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 119,
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
        [_Location_column]: 20,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 120,
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
        [_Location_column]: 20,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
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
        [Text_data]: "Data tables"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routeName",
        [_Location_column]: 59,
        [_Location_line]: 168,
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
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 167,
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
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 20,
        [EdgeInsets__right]: 20,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 20
      });
    },
    get C33() {
      return C33 = dart.const({
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
        [Text_data]: "Nutrition"
      });
    },
    get C34() {
      return C34 = dart.const({
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
        [Text_data]: "Dessert (100g serving)"
      });
    },
    get C35() {
      return C35 = dart.const({
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
        [Text_data]: "Calories"
      });
    },
    get C36() {
      return C36 = dart.const({
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
        [Text_data]: "Fat (g)"
      });
    },
    get C37() {
      return C37 = dart.const({
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
        [Text_data]: "Carbs (g)"
      });
    },
    get C38() {
      return C38 = dart.const({
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
        [Text_data]: "Protein (g)"
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
        [Text_data]: "Sodium (mg)"
      });
    },
    get C40() {
      return C40 = dart.const({
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
        [Text_data]: "Calcium (%)"
      });
    },
    get C41() {
      return C41 = dart.const({
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
        [Text_data]: "Iron (%)"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 15,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rowsPerPage",
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRowsPerPageChanged",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sortColumnIndex",
        [_Location_column]: 15,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sortAscending",
        [_Location_column]: 15,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelectAll",
        [_Location_column]: 15,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "columns",
        [_Location_column]: 15,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "source",
        [_Location_column]: 15,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 24,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 61,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart"
      });
    }
  });
  const name$ = dart.privateName(data_table_demo, "Dessert.name");
  const calories$ = dart.privateName(data_table_demo, "Dessert.calories");
  const fat$ = dart.privateName(data_table_demo, "Dessert.fat");
  const carbs$ = dart.privateName(data_table_demo, "Dessert.carbs");
  const protein$ = dart.privateName(data_table_demo, "Dessert.protein");
  const sodium$ = dart.privateName(data_table_demo, "Dessert.sodium");
  const calcium$ = dart.privateName(data_table_demo, "Dessert.calcium");
  const iron$ = dart.privateName(data_table_demo, "Dessert.iron");
  const selected = dart.privateName(data_table_demo, "Dessert.selected");
  data_table_demo.Dessert = class Dessert extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get calories() {
      return this[calories$];
    }
    set calories(value) {
      super.calories = value;
    }
    get fat() {
      return this[fat$];
    }
    set fat(value) {
      super.fat = value;
    }
    get carbs() {
      return this[carbs$];
    }
    set carbs(value) {
      super.carbs = value;
    }
    get protein() {
      return this[protein$];
    }
    set protein(value) {
      super.protein = value;
    }
    get sodium() {
      return this[sodium$];
    }
    set sodium(value) {
      super.sodium = value;
    }
    get calcium() {
      return this[calcium$];
    }
    set calcium(value) {
      super.calcium = value;
    }
    get iron() {
      return this[iron$];
    }
    set iron(value) {
      super.iron = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
  };
  (data_table_demo.Dessert.new = function(name, calories, fat, carbs, protein, sodium, calcium, iron) {
    this[selected] = false;
    this[name$] = name;
    this[calories$] = calories;
    this[fat$] = fat;
    this[carbs$] = carbs;
    this[protein$] = protein;
    this[sodium$] = sodium;
    this[calcium$] = calcium;
    this[iron$] = iron;
    ;
  }).prototype = data_table_demo.Dessert.prototype;
  dart.addTypeTests(data_table_demo.Dessert);
  dart.setLibraryUri(data_table_demo.Dessert, "package:flutter_web.examples.gallery/demo/material/data_table_demo.dart");
  dart.setFieldSignature(data_table_demo.Dessert, () => ({
    __proto__: dart.getFields(data_table_demo.Dessert.__proto__),
    name: dart.finalFieldType(core.String),
    calories: dart.finalFieldType(core.int),
    fat: dart.finalFieldType(core.double),
    carbs: dart.finalFieldType(core.int),
    protein: dart.finalFieldType(core.double),
    sodium: dart.finalFieldType(core.int),
    calcium: dart.finalFieldType(core.int),
    iron: dart.finalFieldType(core.int),
    selected: dart.fieldType(core.bool)
  }));
  const _desserts = dart.privateName(data_table_demo, "_desserts");
  const _selectedCount = dart.privateName(data_table_demo, "_selectedCount");
  const _sort = dart.privateName(data_table_demo, "_sort");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  const _selectAll = dart.privateName(data_table_demo, "_selectAll");
  data_table_demo.DessertDataSource = class DessertDataSource extends data_table_source.DataTableSource {
    [_sort](T, getField, ascending) {
      this[_desserts][$sort](dart.fn((a, b) => {
        if (!dart.test(ascending)) {
          let c = a;
          a = b;
          b = c;
        }
        let aValue = getField(a);
        let bValue = getField(b);
        return core.Comparable.compare(aValue, bValue);
      }, DessertAndDessertToint()));
      this.notifyListeners();
    }
    getRow(index) {
      if (!(dart.notNull(index) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart", 98, 12, "index >= 0");
      if (dart.notNull(index) >= dart.notNull(this[_desserts][$length])) return null;
      let dessert = this[_desserts][$_get](index);
      return new data_table.DataRow.byIndex({index: index, selected: dessert.selected, onSelectChanged: dart.fn(value => {
          if (!dart.equals(dessert.selected, value)) {
            this[_selectedCount] = dart.notNull(this[_selectedCount]) + (dart.test(value) ? 1 : -1);
            if (!(dart.notNull(this[_selectedCount]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/material/data_table_demo.dart", 107, 20, "_selectedCount >= 0");
            dessert.selected = value;
            this.notifyListeners();
          }
        }, boolToNull()), cells: JSArrayOfDataCell().of([new data_table.DataCell.new(new text.Text.new(dart.str(dessert.name), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0})), new data_table.DataCell.new(new text.Text.new(dart.str(dessert.calories), {$creationLocationd_0dea112b090073317d4: C3 || CT.C3})), new data_table.DataCell.new(new text.Text.new(dessert.fat[$toStringAsFixed](1), {$creationLocationd_0dea112b090073317d4: C6 || CT.C6})), new data_table.DataCell.new(new text.Text.new(dart.str(dessert.carbs), {$creationLocationd_0dea112b090073317d4: C9 || CT.C9})), new data_table.DataCell.new(new text.Text.new(dessert.protein[$toStringAsFixed](1), {$creationLocationd_0dea112b090073317d4: C12 || CT.C12})), new data_table.DataCell.new(new text.Text.new(dart.str(dessert.sodium), {$creationLocationd_0dea112b090073317d4: C15 || CT.C15})), new data_table.DataCell.new(new text.Text.new(dart.str(dessert.calcium) + "%", {$creationLocationd_0dea112b090073317d4: C18 || CT.C18})), new data_table.DataCell.new(new text.Text.new(dart.str(dessert.iron) + "%", {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}))])});
    }
    get rowCount() {
      return this[_desserts][$length];
    }
    get isRowCountApproximate() {
      return false;
    }
    get selectedRowCount() {
      return this[_selectedCount];
    }
    [_selectAll](checked) {
      for (let dessert of this[_desserts])
        dessert.selected = checked;
      this[_selectedCount] = dart.test(checked) ? this[_desserts][$length] : 0;
      this.notifyListeners();
    }
  };
  (data_table_demo.DessertDataSource.new = function() {
    this[_desserts] = JSArrayOfDessert().of([new data_table_demo.Dessert.new("Frozen yogurt", 159, 6.0, 24, 4.0, 87, 14, 1), new data_table_demo.Dessert.new("Ice cream sandwich", 237, 9.0, 37, 4.3, 129, 8, 1), new data_table_demo.Dessert.new("Eclair", 262, 16.0, 24, 6.0, 337, 6, 7), new data_table_demo.Dessert.new("Cupcake", 305, 3.7, 67, 4.3, 413, 3, 8), new data_table_demo.Dessert.new("Gingerbread", 356, 16.0, 49, 3.9, 327, 7, 16), new data_table_demo.Dessert.new("Jelly bean", 375, 0.0, 94, 0.0, 50, 0, 0), new data_table_demo.Dessert.new("Lollipop", 392, 0.2, 98, 0.0, 38, 0, 2), new data_table_demo.Dessert.new("Honeycomb", 408, 3.2, 87, 6.5, 562, 0, 45), new data_table_demo.Dessert.new("Donut", 452, 25.0, 51, 4.9, 326, 2, 22), new data_table_demo.Dessert.new("KitKat", 518, 26.0, 65, 7.0, 54, 12, 6), new data_table_demo.Dessert.new("Frozen yogurt with sugar", 168, 6.0, 26, 4.0, 87, 14, 1), new data_table_demo.Dessert.new("Ice cream sandwich with sugar", 246, 9.0, 39, 4.3, 129, 8, 1), new data_table_demo.Dessert.new("Eclair with sugar", 271, 16.0, 26, 6.0, 337, 6, 7), new data_table_demo.Dessert.new("Cupcake with sugar", 314, 3.7, 69, 4.3, 413, 3, 8), new data_table_demo.Dessert.new("Gingerbread with sugar", 345, 16.0, 51, 3.9, 327, 7, 16), new data_table_demo.Dessert.new("Jelly bean with sugar", 364, 0.0, 96, 0.0, 50, 0, 0), new data_table_demo.Dessert.new("Lollipop with sugar", 401, 0.2, 100, 0.0, 38, 0, 2), new data_table_demo.Dessert.new("Honeycomb with sugar", 417, 3.2, 89, 6.5, 562, 0, 45), new data_table_demo.Dessert.new("Donut with sugar", 461, 25.0, 53, 4.9, 326, 2, 22), new data_table_demo.Dessert.new("KitKat with sugar", 527, 26.0, 67, 7.0, 54, 12, 6), new data_table_demo.Dessert.new("Frozen yogurt with honey", 223, 6.0, 36, 4.0, 87, 14, 1), new data_table_demo.Dessert.new("Ice cream sandwich with honey", 301, 9.0, 49, 4.3, 129, 8, 1), new data_table_demo.Dessert.new("Eclair with honey", 326, 16.0, 36, 6.0, 337, 6, 7), new data_table_demo.Dessert.new("Cupcake with honey", 369, 3.7, 79, 4.3, 413, 3, 8), new data_table_demo.Dessert.new("Gingerbread with honey", 420, 16.0, 61, 3.9, 327, 7, 16), new data_table_demo.Dessert.new("Jelly bean with honey", 439, 0.0, 106, 0.0, 50, 0, 0), new data_table_demo.Dessert.new("Lollipop with honey", 456, 0.2, 110, 0.0, 38, 0, 2), new data_table_demo.Dessert.new("Honeycomb with honey", 472, 3.2, 99, 6.5, 562, 0, 45), new data_table_demo.Dessert.new("Donut with honey", 516, 25.0, 63, 4.9, 326, 2, 22), new data_table_demo.Dessert.new("KitKat with honey", 582, 26.0, 77, 7.0, 54, 12, 6), new data_table_demo.Dessert.new("Frozen yogurt with milk", 262, 8.4, 36, 12.0, 194, 44, 1), new data_table_demo.Dessert.new("Ice cream sandwich with milk", 339, 11.4, 49, 12.3, 236, 38, 1), new data_table_demo.Dessert.new("Eclair with milk", 365, 18.4, 36, 14.0, 444, 36, 7), new data_table_demo.Dessert.new("Cupcake with milk", 408, 6.1, 79, 12.3, 520, 33, 8), new data_table_demo.Dessert.new("Gingerbread with milk", 459, 18.4, 61, 11.9, 434, 37, 16), new data_table_demo.Dessert.new("Jelly bean with milk", 478, 2.4, 106, 8.0, 157, 30, 0), new data_table_demo.Dessert.new("Lollipop with milk", 495, 2.6, 110, 8.0, 145, 30, 2), new data_table_demo.Dessert.new("Honeycomb with milk", 511, 5.6, 99, 14.5, 669, 30, 45), new data_table_demo.Dessert.new("Donut with milk", 555, 27.4, 63, 12.9, 433, 32, 22), new data_table_demo.Dessert.new("KitKat with milk", 621, 28.4, 77, 15.0, 161, 42, 6), new data_table_demo.Dessert.new("Coconut slice and frozen yogurt", 318, 21.0, 31, 5.5, 96, 14, 7), new data_table_demo.Dessert.new("Coconut slice and ice cream sandwich", 396, 24.0, 44, 5.8, 138, 8, 7), new data_table_demo.Dessert.new("Coconut slice and eclair", 421, 31.0, 31, 7.5, 346, 6, 13), new data_table_demo.Dessert.new("Coconut slice and cupcake", 464, 18.7, 74, 5.8, 422, 3, 14), new data_table_demo.Dessert.new("Coconut slice and gingerbread", 515, 31.0, 56, 5.4, 316, 7, 22), new data_table_demo.Dessert.new("Coconut slice and jelly bean", 534, 15.0, 101, 1.5, 59, 0, 6), new data_table_demo.Dessert.new("Coconut slice and lollipop", 551, 15.2, 105, 1.5, 47, 0, 8), new data_table_demo.Dessert.new("Coconut slice and honeycomb", 567, 18.2, 94, 8.0, 571, 0, 51), new data_table_demo.Dessert.new("Coconut slice and donut", 611, 40.0, 58, 6.4, 335, 2, 28), new data_table_demo.Dessert.new("Coconut slice and KitKat", 677, 41.0, 72, 8.5, 63, 12, 12)]);
    this[_selectedCount] = 0;
    data_table_demo.DessertDataSource.__proto__.new.call(this);
    ;
  }).prototype = data_table_demo.DessertDataSource.prototype;
  dart.addTypeTests(data_table_demo.DessertDataSource);
  dart.setMethodSignature(data_table_demo.DessertDataSource, () => ({
    __proto__: dart.getMethods(data_table_demo.DessertDataSource.__proto__),
    [_sort]: dart.gFnType(T => [dart.void, [dart.fnType(core.Comparable$(T), [data_table_demo.Dessert]), core.bool]]),
    getRow: dart.fnType(data_table.DataRow, [core.int]),
    [_selectAll]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(data_table_demo.DessertDataSource, () => ({
    __proto__: dart.getGetters(data_table_demo.DessertDataSource.__proto__),
    rowCount: core.int,
    isRowCountApproximate: core.bool,
    selectedRowCount: core.int
  }));
  dart.setLibraryUri(data_table_demo.DessertDataSource, "package:flutter_web.examples.gallery/demo/material/data_table_demo.dart");
  dart.setFieldSignature(data_table_demo.DessertDataSource, () => ({
    __proto__: dart.getFields(data_table_demo.DessertDataSource.__proto__),
    [_desserts]: dart.finalFieldType(core.List$(data_table_demo.Dessert)),
    [_selectedCount]: dart.fieldType(core.int)
  }));
  data_table_demo.DataTableDemo = class DataTableDemo extends framework.StatefulWidget {
    createState() {
      return new data_table_demo._DataTableDemoState.new();
    }
  };
  (data_table_demo.DataTableDemo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    data_table_demo.DataTableDemo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = data_table_demo.DataTableDemo.prototype;
  dart.addTypeTests(data_table_demo.DataTableDemo);
  dart.setMethodSignature(data_table_demo.DataTableDemo, () => ({
    __proto__: dart.getMethods(data_table_demo.DataTableDemo.__proto__),
    createState: dart.fnType(data_table_demo._DataTableDemoState, [])
  }));
  dart.setLibraryUri(data_table_demo.DataTableDemo, "package:flutter_web.examples.gallery/demo/material/data_table_demo.dart");
  dart.defineLazy(data_table_demo.DataTableDemo, {
    /*data_table_demo.DataTableDemo.routeName*/get routeName() {
      return "/material/data-table";
    }
  });
  const _rowsPerPage = dart.privateName(data_table_demo, "_rowsPerPage");
  const _sortColumnIndex = dart.privateName(data_table_demo, "_sortColumnIndex");
  const _sortAscending = dart.privateName(data_table_demo, "_sortAscending");
  const _dessertsDataSource = dart.privateName(data_table_demo, "_dessertsDataSource");
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
  let C24;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C43;
  let C42;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C59;
  let C57;
  let C56;
  data_table_demo._DataTableDemoState = class _DataTableDemoState extends framework.State$(data_table_demo.DataTableDemo) {
    [_sort](T, getField, columnIndex, ascending) {
      this[_dessertsDataSource][_sort](T, getField, ascending);
      this.setState(dart.fn(() => {
        this[_sortColumnIndex] = columnIndex;
        this[_sortAscending] = ascending;
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C24 || CT.C24, actions: JSArrayOfWidget().of([new demo.MaterialDemoDocumentationButton.new("/material/data-table", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), body: new scroll_view.ListView.new({padding: C32 || CT.C32, children: JSArrayOfWidget().of([new paginated_data_table.PaginatedDataTable.new({header: C33 || CT.C33, rowsPerPage: this[_rowsPerPage], onRowsPerPageChanged: dart.fn(value => {
                this.setState(dart.fn(() => {
                  this[_rowsPerPage] = value;
                }, VoidToNull()));
              }, intToNull()), sortColumnIndex: this[_sortColumnIndex], sortAscending: this[_sortAscending], onSelectAll: dart.bind(this[_dessertsDataSource], _selectAll), columns: JSArrayOfDataColumn().of([new data_table.DataColumn.new({label: C34 || CT.C34, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.String, dart.fn(d => d.name, DessertToString()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C35 || CT.C35, tooltip: "The total amount of food energy in the given serving size.", numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.calories, DessertToint()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C36 || CT.C36, numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.fat, DessertTodouble()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C37 || CT.C37, numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.carbs, DessertToint()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C38 || CT.C38, numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.protein, DessertTodouble()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C39 || CT.C39, numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.sodium, DessertToint()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C40 || CT.C40, tooltip: "The amount of calcium as a percentage of the recommended daily amount.", numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.calcium, DessertToint()), columnIndex, ascending), intAndboolTovoid())}), new data_table.DataColumn.new({label: C41 || CT.C41, numeric: true, onSort: dart.fn((columnIndex, ascending) => this[_sort](core.num, dart.fn(d => d.iron, DessertToint()), columnIndex, ascending), intAndboolTovoid())})]), source: this[_dessertsDataSource], $creationLocationd_0dea112b090073317d4: C42 || CT.C42})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
    }
  };
  (data_table_demo._DataTableDemoState.new = function() {
    this[_rowsPerPage] = 10;
    this[_sortColumnIndex] = null;
    this[_sortAscending] = true;
    this[_dessertsDataSource] = new data_table_demo.DessertDataSource.new();
    data_table_demo._DataTableDemoState.__proto__.new.call(this);
    ;
  }).prototype = data_table_demo._DataTableDemoState.prototype;
  dart.addTypeTests(data_table_demo._DataTableDemoState);
  dart.setMethodSignature(data_table_demo._DataTableDemoState, () => ({
    __proto__: dart.getMethods(data_table_demo._DataTableDemoState.__proto__),
    [_sort]: dart.gFnType(T => [dart.void, [dart.fnType(core.Comparable$(T), [data_table_demo.Dessert]), core.int, core.bool]]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(data_table_demo._DataTableDemoState, "package:flutter_web.examples.gallery/demo/material/data_table_demo.dart");
  dart.setFieldSignature(data_table_demo._DataTableDemoState, () => ({
    __proto__: dart.getFields(data_table_demo._DataTableDemoState.__proto__),
    [_rowsPerPage]: dart.fieldType(core.int),
    [_sortColumnIndex]: dart.fieldType(core.int),
    [_sortAscending]: dart.fieldType(core.bool),
    [_dessertsDataSource]: dart.finalFieldType(data_table_demo.DessertDataSource)
  }));
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/material/data_table_demo", {
    "package:flutter_web.examples.gallery/demo/material/data_table_demo.dart": data_table_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data_table_demo.dart"],"names":[],"mappings":"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","file":"data_table_demo.ddc.js"}');
  // Exports:
  return {
    demo__material__data_table_demo: data_table_demo
  };
});

//# sourceMappingURL=data_table_demo.ddc.js.map
