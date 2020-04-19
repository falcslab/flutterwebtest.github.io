define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const icon$ = packages__flutter_web__animation.src__widgets__icon;
  const text = packages__flutter_web__animation.src__widgets__text;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const box = packages__flutter_web__animation.src__rendering__box;
  const sliver = packages__flutter_web__animation.src__widgets__sliver;
  const sliver_grid = packages__flutter_web__animation.src__rendering__sliver_grid;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const stack = packages__flutter_web__animation.src__rendering__stack;
  const image = packages__flutter_web__animation.src__widgets__image;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const heroes = packages__flutter_web__animation.src__widgets__heroes;
  const paragraph = packages__flutter_web__animation.src__rendering__paragraph;
  const container = packages__flutter_web__animation.src__widgets__container;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const table = packages__flutter_web__animation.src__widgets__table;
  const table$ = packages__flutter_web__animation.src__rendering__table;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const gradient = packages__flutter_web__src__animation__animation.src__painting__gradient;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const theme = packages__flutter_web__material.src__material__theme;
  const floating_action_button = packages__flutter_web__material.src__material__floating_action_button;
  const snack_bar = packages__flutter_web__material.src__material__snack_bar;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const page = packages__flutter_web__material.src__material__page;
  const card = packages__flutter_web__material.src__material__card;
  const colors = packages__flutter_web__material.src__material__colors;
  const popup_menu = packages__flutter_web__material.src__material__popup_menu;
  const icons = packages__flutter_web__material.src__material__icons;
  const flexible_space_bar = packages__flutter_web__material.src__material__flexible_space_bar;
  const material = packages__flutter_web__material.src__material__material;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const pesto_demo = Object.create(dart.library);
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $clamp = dartx.clamp;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let BuildContextAndBoxConstraintsToPadding = () => (BuildContextAndBoxConstraintsToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext, box.BoxConstraints])))();
  let BuildContextAndintToRecipeCard = () => (BuildContextAndintToRecipeCard = dart.constFn(dart.fnType(pesto_demo.RecipeCard, [framework.BuildContext, core.int])))();
  let MaterialPageRouteOfvoid = () => (MaterialPageRouteOfvoid = dart.constFn(page.MaterialPageRoute$(dart.void)))();
  let BuildContextToPestoFavorites = () => (BuildContextToPestoFavorites = dart.constFn(dart.fnType(pesto_demo.PestoFavorites, [framework.BuildContext])))();
  let BuildContextToTheme = () => (BuildContextToTheme = dart.constFn(dart.fnType(theme.Theme, [framework.BuildContext])))();
  let PopupMenuButtonOfString = () => (PopupMenuButtonOfString = dart.constFn(popup_menu.PopupMenuButton$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let PopupMenuItemOfString = () => (PopupMenuItemOfString = dart.constFn(popup_menu.PopupMenuItem$(core.String)))();
  let JSArrayOfPopupMenuItemOfString = () => (JSArrayOfPopupMenuItemOfString = dart.constFn(_interceptors.JSArray$(PopupMenuItemOfString())))();
  let ListOfPopupMenuItemOfString = () => (ListOfPopupMenuItemOfString = dart.constFn(core.List$(PopupMenuItemOfString())))();
  let BuildContextToListOfPopupMenuItemOfString = () => (BuildContextToListOfPopupMenuItemOfString = dart.constFn(dart.fnType(ListOfPopupMenuItemOfString(), [framework.BuildContext])))();
  let JSArrayOfTableRow = () => (JSArrayOfTableRow = dart.constFn(_interceptors.JSArray$(table.TableRow)))();
  let RecipeIngredientToTableRow = () => (RecipeIngredientToTableRow = dart.constFn(dart.fnType(table.TableRow, [pesto_demo.RecipeIngredient])))();
  let RecipeStepToTableRow = () => (RecipeStepToTableRow = dart.constFn(dart.fnType(table.TableRow, [pesto_demo.RecipeStep])))();
  let _HashSetOfRecipe = () => (_HashSetOfRecipe = dart.constFn(collection._HashSet$(pesto_demo.Recipe)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Put in oven",
        [RecipeStep_duration]: "1 min"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Cook",
        [RecipeStep_duration]: "1hr 45 min"
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], pesto_demo.RecipeStep);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Chicken",
        [RecipeIngredient_amount]: "1 whole"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Butter",
        [RecipeIngredient_amount]: "1/2 cup"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Onion powder",
        [RecipeIngredient_amount]: "1 tbsp"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Freshly ground pepper",
        [RecipeIngredient_amount]: "1 tbsp"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Salt",
        [RecipeIngredient_amount]: "1 tsp"
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], pesto_demo.RecipeIngredient);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C5 || CT.C5,
        [Recipe_ingredients]: C8 || CT.C8,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/main.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/roasted_chicken.png",
        [Recipe_description]: "The perfect dish to welcome your family and friends with on a crisp autumn night. Pair with roasted veggies to truly impress them.",
        [Recipe_author]: "Peter Carlsson",
        [Recipe_name]: "Roasted Chicken"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Chop",
        [RecipeStep_duration]: "5 min"
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], pesto_demo.RecipeStep);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Beet greens",
        [RecipeIngredient_amount]: "3 cups"
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], pesto_demo.RecipeIngredient);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C15 || CT.C15,
        [Recipe_ingredients]: C17 || CT.C17,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/veggie.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/chopped_beet_leaves.png",
        [Recipe_description]: "This vegetable has more to offer than just its root. Beet greens can be tossed into a salad to add some variety or sauteed on its own with some oil and garlic.",
        [Recipe_author]: "Trevor Hansen",
        [Recipe_name]: "Chopped Beet Leaves"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Blend",
        [RecipeStep_duration]: "15 min"
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], pesto_demo.RecipeStep);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Pasta",
        [RecipeIngredient_amount]: "1/4 cup "
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Fresh basil leaves",
        [RecipeIngredient_amount]: "2 cups"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Parmesan cheese",
        [RecipeIngredient_amount]: "1/2 cup"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Extra virgin olive oil",
        [RecipeIngredient_amount]: "1/2 cup"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Pine nuts",
        [RecipeIngredient_amount]: "1/3 cup"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Lemon juice",
        [RecipeIngredient_amount]: "1/4 cup"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Garlic",
        [RecipeIngredient_amount]: "3 cloves"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Salt",
        [RecipeIngredient_amount]: "1/4 tsp"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Pepper",
        [RecipeIngredient_amount]: "1/8 tsp"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Bacon",
        [RecipeIngredient_amount]: "3 lbs"
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], pesto_demo.RecipeIngredient);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C20 || CT.C20,
        [Recipe_ingredients]: C22 || CT.C22,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/main.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/pesto_pasta.png",
        [Recipe_description]: "With this pesto recipe, you can quickly whip up a meal to satisfy your savory needs. And if you're feeling festive, you can add bacon to taste.",
        [Recipe_author]: "Ali Connors",
        [Recipe_name]: "Pesto Pasta"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Mix",
        [RecipeStep_duration]: "15 min"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Bake",
        [RecipeStep_duration]: "1hr 30 min"
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], pesto_demo.RecipeStep);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Pie crust",
        [RecipeIngredient_amount]: "1"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Fresh or frozen cherries",
        [RecipeIngredient_amount]: "4 cups"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Granulated sugar",
        [RecipeIngredient_amount]: "1 cup"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Cornstarch",
        [RecipeIngredient_amount]: "4 tbsp"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Butter",
        [RecipeIngredient_amount]: "1½ tbsp"
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], pesto_demo.RecipeIngredient);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C34 || CT.C34,
        [Recipe_ingredients]: C37 || CT.C37,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/main.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/cherry_pie.png",
        [Recipe_description]: "Sometimes when you're craving some cheer in your life you can jumpstart your day with some cherry pie. Dessert for breakfast is perfectly acceptable.",
        [Recipe_author]: "Sandra Adams",
        [Recipe_name]: "Cherry Pie"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Mix",
        [RecipeStep_duration]: "5 min"
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], pesto_demo.RecipeStep);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Spinach",
        [RecipeIngredient_amount]: "4 cups"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Sliced onion",
        [RecipeIngredient_amount]: "1 cup"
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], pesto_demo.RecipeIngredient);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C44 || CT.C44,
        [Recipe_ingredients]: C46 || CT.C46,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/spicy.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/spinach_onion_salad.png",
        [Recipe_description]: "Everyone's favorite leafy green is back. Paired with fresh sliced onion, it's ready to tackle any dish, whether it be a salad or an egg scramble.",
        [Recipe_author]: "Peter Carlsson",
        [Recipe_name]: "Spinach Salad"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Prep vegetables",
        [RecipeStep_duration]: "10 min"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Stir",
        [RecipeStep_duration]: "5 min"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Cook",
        [RecipeStep_duration]: "1 hr 10 min"
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], pesto_demo.RecipeStep);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Butternut squash",
        [RecipeIngredient_amount]: "1"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Chicken stock",
        [RecipeIngredient_amount]: "4 cups"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Potatoes",
        [RecipeIngredient_amount]: "2"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Onion",
        [RecipeIngredient_amount]: "1"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Carrot",
        [RecipeIngredient_amount]: "1"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Celery",
        [RecipeIngredient_amount]: "1"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Pepper",
        [RecipeIngredient_amount]: "1 tsp"
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C13 || CT.C13, C61 || CT.C61], pesto_demo.RecipeIngredient);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C50 || CT.C50,
        [Recipe_ingredients]: C54 || CT.C54,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/healthy.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/butternut_squash_soup.png",
        [Recipe_description]: "This creamy butternut squash soup will warm you on the chilliest of winter nights and bring a delightful pop of orange to the dinner table.",
        [Recipe_author]: "Ali Connors",
        [Recipe_name]: "Butternut Squash Soup"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Sauté vegetables",
        [RecipeStep_duration]: "5 min"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Stir vegetables and other filling ingredients",
        [RecipeStep_duration]: "3 min"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Fill phyllo squares half-full with filling and fold.",
        [RecipeStep_duration]: "10 min"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: pesto_demo.RecipeStep.prototype,
        [RecipeStep_description]: "Bake",
        [RecipeStep_duration]: "40 min"
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67], pesto_demo.RecipeStep);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Spinach",
        [RecipeIngredient_amount]: "1 lb"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Feta cheese",
        [RecipeIngredient_amount]: "½ cup"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Cottage cheese",
        [RecipeIngredient_amount]: "½ cup"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Eggs",
        [RecipeIngredient_amount]: "2"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: pesto_demo.RecipeIngredient.prototype,
        [RecipeIngredient_description]: "Phyllo dough",
        [RecipeIngredient_amount]: "½ lb"
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C58 || CT.C58, C73 || CT.C73], pesto_demo.RecipeIngredient);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: pesto_demo.Recipe.prototype,
        [Recipe_steps]: C63 || CT.C63,
        [Recipe_ingredients]: C68 || CT.C68,
        [Recipe_ingredientsImagePackage]: null,
        [Recipe_ingredientsImagePath]: "food/icons/quick.png",
        [Recipe_imagePackage]: null,
        [Recipe_imagePath]: "food/spanakopita.png",
        [Recipe_description]: "You 'feta' believe this is a crowd-pleaser! Flaky phyllo pastry surrounds a delicious mixture of spinach and cheeses to create the perfect appetizer.",
        [Recipe_author]: "Trevor Hansen",
        [Recipe_name]: "Spanakopita"
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C14 || CT.C14, C19 || CT.C19, C33 || CT.C33, C43 || CT.C43, C49 || CT.C49, C62 || CT.C62], pesto_demo.Recipe);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: pesto_demo.RecipeGridPage.prototype,
        [Widget_key]: null,
        [RecipeGridPage_recipes]: C3 || CT.C3
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "recipes",
        [_Location_column]: 27,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 3707764736.0
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58313
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: icon$.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C79 || CT.C79
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C82() {
      return C82 = dart.const({
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
        [Text_data]: "Not supported."
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C81 || CT.C81,
        [SnackBar_action]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C82 || CT.C82
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticChildCount",
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 82,
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
        [_Location_column]: 12,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59574
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: icon$.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C101 || CT.C101
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 34,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "t",
        [_Location_column]: 54,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.prototype,
        [SliverGridDelegateWithMaxCrossAxisExtent_childAspectRatio]: 1,
        [SliverGridDelegateWithMaxCrossAxisExtent_crossAxisSpacing]: 8,
        [SliverGridDelegateWithMaxCrossAxisExtent_mainAxisSpacing]: 8,
        [SliverGridDelegateWithMaxCrossAxisExtent_maxCrossAxisExtent]: 500
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "recipe",
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: navigator.RouteSettings.prototype,
        [RouteSettings_arguments]: null,
        [RouteSettings_isInitialRoute]: false,
        [RouteSettings_name]: "/pesto/favorites"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: navigator.RouteSettings.prototype,
        [RouteSettings_arguments]: null,
        [RouteSettings_isInitialRoute]: false,
        [RouteSettings_name]: "/pesto/recipe"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "recipe",
        [_Location_column]: 33,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.alphabetic",
        index: 0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 8
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 3,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C152 || CT.C152,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C153 || CT.C153,
        [TextStyle_inherit]: false
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C155 || CT.C155,
        [Interval_end]: 1,
        [Interval_begin]: 0.4
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 38,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 17,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 42,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 19,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rect",
        [_Location_column]: 17,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 13,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 234,
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
        [_Location_column]: 16,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "namesRoute",
        [_Location_column]: 7,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 5
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C195 || CT.C195,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C77 || CT.C77,
        [TextStyle_inherit]: false
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 2315255808.0
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C197 || CT.C197,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C198 || CT.C198,
        [TextStyle_inherit]: false
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 40,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 19,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 19,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 17,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 15,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 280,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 55,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 23,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217, C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 29,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 29,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226, C227 || CT.C227, C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 45,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 313,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236, C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 293,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247], widget_inspector._Location);
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.constList([C250 || CT.C250, C251 || CT.C251], widget_inspector._Location);
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C249 || CT.C249,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.constList([C254 || CT.C254], widget_inspector._Location);
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C253 || CT.C253,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: 1.6,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C198 || CT.C198,
        [TextStyle_inherit]: false
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 45,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 17,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 17,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263, C264 || CT.C264], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 365,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 15,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.constList([C267 || CT.C267, C268 || CT.C268], widget_inspector._Location);
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C266 || CT.C266,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 13,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 13,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 13,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.constList([C271 || CT.C271, C272 || CT.C272, C273 || CT.C273, C274 || CT.C274, C275 || CT.C275], widget_inspector._Location);
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C270 || CT.C270,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSelected",
        [_Location_column]: 21,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 380,
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
        [_Location_column]: 19,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: flexible_space_bar.CollapseMode.prototype,
        [_name$]: "CollapseMode.parallax",
        index: 0
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_name$0]: "DecorationPosition.background",
        index: 0
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$1]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1610612736
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 0
      });
    },
    get C287() {
      return C287 = dart.constList([C288 || CT.C288, C289 || CT.C289], ui.Color);
    },
    get C290() {
      return C290 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name]: "TileMode.clamp",
        index: 0
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -0.2,
        [Alignment_x]: 0
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_stops]: null,
        [Gradient_colors]: C287 || CT.C287,
        [LinearGradient_tileMode]: C290 || CT.C290,
        [LinearGradient_end]: C291 || CT.C291,
        [LinearGradient_begin]: C292 || CT.C292
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C285 || CT.C285,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: C286 || CT.C286,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: container.DecoratedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [DecoratedBox_position]: C283 || CT.C283,
        [DecoratedBox_decoration]: C284 || CT.C284
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: flexible_space_bar.FlexibleSpaceBar.prototype,
        [Widget_key]: null,
        [FlexibleSpaceBar_collapseMode]: C281 || CT.C281,
        [FlexibleSpaceBar_centerTitle]: null,
        [FlexibleSpaceBar_background]: C282 || CT.C282,
        [FlexibleSpaceBar_title]: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 17,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 17,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 17,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296, C297 || CT.C297, C298 || CT.C298], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 28,
        [EdgeInsets__left]: 0
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "recipe",
        [_Location_column]: 40,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302], widget_inspector._Location);
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 407,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.constList([C305 || CT.C305, C306 || CT.C306, C307 || CT.C307], widget_inspector._Location);
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C304 || CT.C304,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 404,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 38,
        [_Location_line]: 413,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 412,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 414,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313, C314 || CT.C314], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 411,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 21,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 411,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C318 || CT.C318], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.constList([C321 || CT.C321], widget_inspector._Location);
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C320 || CT.C320,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 402,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 402,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.constList([C324 || CT.C324], widget_inspector._Location);
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C323 || CT.C323,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 13,
        [_Location_line]: 373,
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
        [_Location_line]: 372,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333, C334 || CT.C334], widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C332 || CT.C332,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 354,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338, C339 || CT.C339], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C337 || CT.C337,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 431,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C341() {
      return C341 = dart.constList([C342 || CT.C342, C343 || CT.C343], widget_inspector._Location);
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C341 || CT.C341,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 430,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347], widget_inspector._Location);
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C345 || CT.C345,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 429,
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
        [_Location_column]: 14,
        [_Location_line]: 428,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 428,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.constList([C353 || CT.C353], widget_inspector._Location);
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C352 || CT.C352,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 427,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C77 || CT.C77,
        [TextStyle_inherit]: false
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: 1.6,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C77 || CT.C77,
        [TextStyle_inherit]: false
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: pesto_demo.PestoStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: 1.6,
        [TextStyle_textBaseline]: C151 || CT.C151,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C357 || CT.C357,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C77 || CT.C77,
        [TextStyle_inherit]: false
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 40,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 40,
        [EdgeInsets__left]: 16
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: table$.FixedColumnWidth.prototype,
        [FixedColumnWidth_value]: 64
      });
    },
    get C359() {
      return C359 = dart.constMap(core.int, table$.TableColumnWidth, [0, C360 || CT.C360]);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 57,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 25,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 484,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 486,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 25,
        [_Location_line]: 487,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.constList([C363 || CT.C363, C364 || CT.C364, C365 || CT.C365, C366 || CT.C366, C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C362 || CT.C362,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 481,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "verticalAlignment",
        [_Location_column]: 21,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371, C372 || CT.C372], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C370 || CT.C370,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 479,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 46,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.constList([C375 || CT.C375, C376 || CT.C376], widget_inspector._Location);
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C374 || CT.C374,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 490,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "verticalAlignment",
        [_Location_column]: 21,
        [_Location_line]: 489,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.constList([C379 || CT.C379, C380 || CT.C380], widget_inspector._Location);
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C378 || CT.C378,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 488,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: null
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 4,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 0
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 53,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.constList([C385 || CT.C385, C386 || CT.C386], widget_inspector._Location);
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C384 || CT.C384,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 496,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 495,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C388() {
      return C388 = dart.constList([C389 || CT.C389, C390 || CT.C390], widget_inspector._Location);
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C388 || CT.C388,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 494,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 4,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 24,
        [EdgeInsets__left]: 0
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 48,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.constList([C394 || CT.C394, C395 || CT.C395], widget_inspector._Location);
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C393 || CT.C393,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 502,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.constList([C398 || CT.C398, C399 || CT.C399], widget_inspector._Location);
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C397 || CT.C397,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 500,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 42,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.constList([C402 || CT.C402, C403 || CT.C403], widget_inspector._Location);
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C401 || CT.C401,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 513,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.constList([C406 || CT.C406, C407 || CT.C407], widget_inspector._Location);
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C405 || CT.C405,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 511,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "columnWidths",
        [_Location_column]: 13,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 477,
        [_Location_file]: null
      });
    },
    get C409() {
      return C409 = dart.constList([C410 || CT.C410, C411 || CT.C411], widget_inspector._Location);
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C409 || CT.C409,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 473,
        [_Location_file]: null
      });
    },
    get C413() {
      return C413 = dart.constList([C414 || CT.C414, C415 || CT.C415], widget_inspector._Location);
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C413 || CT.C413,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 9,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C417() {
      return C417 = dart.constList([C418 || CT.C418, C419 || CT.C419, C420 || CT.C420], widget_inspector._Location);
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C417 || CT.C417,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 468,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 467,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 4,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 4,
        [EdgeInsets__left]: 0
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 529,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 528,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.constList([C431 || CT.C431, C432 || CT.C432], widget_inspector._Location);
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C430 || CT.C430,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 527,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 30,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.constList([C435 || CT.C435, C436 || CT.C436], widget_inspector._Location);
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C434 || CT.C434,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 533,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 532,
        [_Location_file]: null
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C438() {
      return C438 = dart.constList([C439 || CT.C439, C440 || CT.C440], widget_inspector._Location);
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C438 || CT.C438,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 531,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/pesto_demo.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  pesto_demo.PestoDemo = class PestoDemo extends framework.StatelessWidget {
    build(context) {
      return new pesto_demo.PestoHome.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (pesto_demo.PestoDemo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pesto_demo.PestoDemo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.PestoDemo.prototype;
  dart.addTypeTests(pesto_demo.PestoDemo);
  dart.setMethodSignature(pesto_demo.PestoDemo, () => ({
    __proto__: dart.getMethods(pesto_demo.PestoDemo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pesto_demo.PestoDemo, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.defineLazy(pesto_demo.PestoDemo, {
    /*pesto_demo.PestoDemo.routeName*/get routeName() {
      return "/pesto";
    }
  });
  const Widget_key = dart.privateName(framework, "Widget.key");
  const RecipeStep_description = dart.privateName(pesto_demo, "RecipeStep.description");
  const RecipeStep_duration = dart.privateName(pesto_demo, "RecipeStep.duration");
  let C6;
  let C7;
  let C5;
  const Recipe_steps = dart.privateName(pesto_demo, "Recipe.steps");
  const RecipeIngredient_description = dart.privateName(pesto_demo, "RecipeIngredient.description");
  const RecipeIngredient_amount = dart.privateName(pesto_demo, "RecipeIngredient.amount");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C8;
  const Recipe_ingredients = dart.privateName(pesto_demo, "Recipe.ingredients");
  const Recipe_ingredientsImagePackage = dart.privateName(pesto_demo, "Recipe.ingredientsImagePackage");
  const Recipe_ingredientsImagePath = dart.privateName(pesto_demo, "Recipe.ingredientsImagePath");
  const Recipe_imagePackage = dart.privateName(pesto_demo, "Recipe.imagePackage");
  const Recipe_imagePath = dart.privateName(pesto_demo, "Recipe.imagePath");
  const Recipe_description = dart.privateName(pesto_demo, "Recipe.description");
  const Recipe_author = dart.privateName(pesto_demo, "Recipe.author");
  const Recipe_name = dart.privateName(pesto_demo, "Recipe.name");
  let C4;
  let C16;
  let C15;
  let C18;
  let C17;
  let C14;
  let C21;
  let C20;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C22;
  let C19;
  let C35;
  let C36;
  let C34;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C37;
  let C33;
  let C45;
  let C44;
  let C47;
  let C48;
  let C46;
  let C43;
  let C51;
  let C52;
  let C53;
  let C50;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C54;
  let C49;
  let C64;
  let C65;
  let C66;
  let C67;
  let C63;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C68;
  let C62;
  let C3;
  const RecipeGridPage_recipes = dart.privateName(pesto_demo, "RecipeGridPage.recipes");
  let C2;
  pesto_demo.PestoHome = class PestoHome extends framework.StatelessWidget {
    build(context) {
      return C2 || CT.C2;
    }
  };
  (pesto_demo.PestoHome.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pesto_demo.PestoHome.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.PestoHome.prototype;
  dart.addTypeTests(pesto_demo.PestoHome);
  dart.setMethodSignature(pesto_demo.PestoHome, () => ({
    __proto__: dart.getMethods(pesto_demo.PestoHome.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pesto_demo.PestoHome, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  let C76;
  let C75;
  let C74;
  pesto_demo.PestoFavorites = class PestoFavorites extends framework.StatelessWidget {
    build(context) {
      return new pesto_demo.RecipeGridPage.new({recipes: pesto_demo._favoriteRecipes[$toList](), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
  };
  (pesto_demo.PestoFavorites.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pesto_demo.PestoFavorites.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.PestoFavorites.prototype;
  dart.addTypeTests(pesto_demo.PestoFavorites);
  dart.setMethodSignature(pesto_demo.PestoFavorites, () => ({
    __proto__: dart.getMethods(pesto_demo.PestoFavorites.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pesto_demo.PestoFavorites, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  const Color__value = dart.privateName(ui, "Color._value");
  let C77;
  pesto_demo.PestoStyle = class PestoStyle extends text_style.TextStyle {};
  (pesto_demo.PestoStyle.new = function(opts) {
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 12;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let color = opts && 'color' in opts ? opts.color : C77 || CT.C77;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let height = opts && 'height' in opts ? opts.height : null;
    pesto_demo.PestoStyle.__proto__.new.call(this, {inherit: false, color: color, fontFamily: "Raleway", fontSize: fontSize, fontWeight: fontWeight, textBaseline: ui.TextBaseline.alphabetic, letterSpacing: letterSpacing, height: height});
    ;
  }).prototype = pesto_demo.PestoStyle.prototype;
  dart.addTypeTests(pesto_demo.PestoStyle);
  dart.setLibraryUri(pesto_demo.PestoStyle, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  pesto_demo.RecipeGridPage = class RecipeGridPage extends framework.StatefulWidget {
    get recipes() {
      return this[recipes$];
    }
    set recipes(value) {
      super.recipes = value;
    }
    createState() {
      return new pesto_demo._RecipeGridPageState.new();
    }
  };
  (pesto_demo.RecipeGridPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let recipes = opts && 'recipes' in opts ? opts.recipes : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[recipes$] = recipes;
    pesto_demo.RecipeGridPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.RecipeGridPage.prototype;
  dart.addTypeTests(pesto_demo.RecipeGridPage);
  const recipes$ = RecipeGridPage_recipes;
  dart.setMethodSignature(pesto_demo.RecipeGridPage, () => ({
    __proto__: dart.getMethods(pesto_demo.RecipeGridPage.__proto__),
    createState: dart.fnType(pesto_demo._RecipeGridPageState, [])
  }));
  dart.setLibraryUri(pesto_demo.RecipeGridPage, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipeGridPage, () => ({
    __proto__: dart.getFields(pesto_demo.RecipeGridPage.__proto__),
    recipes: dart.finalFieldType(core.List$(pesto_demo.Recipe))
  }));
  const Icon_textDirection = dart.privateName(icon$, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon$, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon$, "Icon.color");
  const Icon_size = dart.privateName(icon$, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C79;
  const Icon_icon = dart.privateName(icon$, "Icon.icon");
  let C78;
  const SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C81;
  const SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  const SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  const SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
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
  let C82;
  const SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  let C80;
  let C85;
  let C86;
  let C84;
  let C83;
  const _buildAppBar = dart.privateName(pesto_demo, "_buildAppBar");
  const _buildBody = dart.privateName(pesto_demo, "_buildBody");
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C94;
  let C95;
  let C92;
  let C91;
  let C98;
  let C99;
  let C97;
  let C96;
  let C101;
  let C100;
  let C104;
  let C105;
  let C106;
  let C103;
  let C102;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C112;
  let C111;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C119;
  let C118;
  let C123;
  let C124;
  let C125;
  let C126;
  let C122;
  let C121;
  const SliverGridDelegateWithMaxCrossAxisExtent_childAspectRatio = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.childAspectRatio");
  const SliverGridDelegateWithMaxCrossAxisExtent_crossAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.crossAxisSpacing");
  const SliverGridDelegateWithMaxCrossAxisExtent_mainAxisSpacing = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.mainAxisSpacing");
  const SliverGridDelegateWithMaxCrossAxisExtent_maxCrossAxisExtent = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.maxCrossAxisExtent");
  let C127;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C135;
  let C133;
  let C132;
  let C138;
  let C139;
  let C137;
  let C136;
  const RouteSettings_arguments = dart.privateName(navigator, "RouteSettings.arguments");
  const RouteSettings_isInitialRoute = dart.privateName(navigator, "RouteSettings.isInitialRoute");
  const RouteSettings_name = dart.privateName(navigator, "RouteSettings.name");
  let C140;
  let C141;
  let C142;
  let C145;
  let C144;
  let C143;
  let C148;
  let C149;
  let C147;
  let C146;
  pesto_demo._RecipeGridPageState = class _RecipeGridPageState extends framework.State$(pesto_demo.RecipeGridPage) {
    build(context) {
      let statusBarHeight = media_query.MediaQuery.of(context).padding.top;
      return new theme.Theme.new({data: pesto_demo._kTheme.copyWith({platform: theme.Theme.of(context).platform}), child: new scaffold.Scaffold.new({key: this.scaffoldKey, floatingActionButton: new floating_action_button.FloatingActionButton.new({child: C78 || CT.C78, onPressed: dart.fn(() => {
              this.scaffoldKey.currentState.showSnackBar(C80 || CT.C80);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), body: new scroll_view.CustomScrollView.new({semanticChildCount: this.widget.recipes[$length], slivers: JSArrayOfWidget().of([this[_buildAppBar](context, statusBarHeight), this[_buildBody](context, statusBarHeight)]), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
    [_buildAppBar](context, statusBarHeight) {
      return new app_bar.SliverAppBar.new({pinned: true, expandedHeight: 128, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C100 || CT.C100, tooltip: "Search", onPressed: dart.fn(() => {
              this.scaffoldKey.currentState.showSnackBar(C80 || CT.C80);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), flexibleSpace: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            let size = constraints.biggest;
            let appBarHeight = dart.notNull(size.height) - dart.notNull(statusBarHeight);
            let t = (appBarHeight - 56) / (128 - 56);
            let extraPadding = new (TweenOfdouble()).new({begin: 10.0, end: 24.0}).transform(t);
            let logoHeight = appBarHeight - 1.5 * dart.notNull(extraPadding);
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: dart.notNull(statusBarHeight) + 0.5 * dart.notNull(extraPadding), bottom: extraPadding}), child: new basic.Center.new({child: new pesto_demo.PestoLogo.new({height: logoHeight, t: t[$clamp](0.0, 1.0), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114});
          }, BuildContextAndBoxConstraintsToPadding()), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121});
    }
    [_buildBody](context, statusBarHeight) {
      let mediaPadding = media_query.MediaQuery.of(context).padding;
      let padding = new edge_insets.EdgeInsets.only({top: 8.0, left: 8.0 + dart.notNull(mediaPadding.left), right: 8.0 + dart.notNull(mediaPadding.right), bottom: 8.0});
      return new basic.SliverPadding.new({padding: padding, sliver: new sliver.SliverGrid.new({gridDelegate: C127 || CT.C127, delegate: new sliver.SliverChildBuilderDelegate.new(dart.fn((context, index) => {
            let recipe = this.widget.recipes[$_get](index);
            return new pesto_demo.RecipeCard.new({recipe: recipe, onTap: dart.fn(() => {
                this.showRecipePage(context, recipe);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C128 || CT.C128});
          }, BuildContextAndintToRecipeCard()), {childCount: this.widget.recipes[$length]}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136});
    }
    showFavoritesPage(context) {
      navigator.Navigator.push(dart.void, context, new (MaterialPageRouteOfvoid()).new({settings: C140 || CT.C140, builder: dart.fn(context => new pesto_demo.PestoFavorites.new({$creationLocationd_0dea112b090073317d4: C141 || CT.C141}), BuildContextToPestoFavorites())}));
    }
    showRecipePage(context, recipe) {
      navigator.Navigator.push(dart.void, context, new (MaterialPageRouteOfvoid()).new({settings: C142 || CT.C142, builder: dart.fn(context => new theme.Theme.new({data: pesto_demo._kTheme.copyWith({platform: theme.Theme.of(context).platform}), child: new pesto_demo.RecipePage.new({recipe: recipe, $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), BuildContextToTheme())}));
    }
  };
  (pesto_demo._RecipeGridPageState.new = function() {
    this.scaffoldKey = GlobalKeyOfScaffoldState().new();
    pesto_demo._RecipeGridPageState.__proto__.new.call(this);
    ;
  }).prototype = pesto_demo._RecipeGridPageState.prototype;
  dart.addTypeTests(pesto_demo._RecipeGridPageState);
  dart.setMethodSignature(pesto_demo._RecipeGridPageState, () => ({
    __proto__: dart.getMethods(pesto_demo._RecipeGridPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildAppBar]: dart.fnType(framework.Widget, [framework.BuildContext, core.double]),
    [_buildBody]: dart.fnType(framework.Widget, [framework.BuildContext, core.double]),
    showFavoritesPage: dart.fnType(dart.void, [framework.BuildContext]),
    showRecipePage: dart.fnType(dart.void, [framework.BuildContext, pesto_demo.Recipe])
  }));
  dart.setLibraryUri(pesto_demo._RecipeGridPageState, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo._RecipeGridPageState, () => ({
    __proto__: dart.getFields(pesto_demo._RecipeGridPageState.__proto__),
    scaffoldKey: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  const height$ = dart.privateName(pesto_demo, "PestoLogo.height");
  const t$ = dart.privateName(pesto_demo, "PestoLogo.t");
  pesto_demo.PestoLogo = class PestoLogo extends framework.StatefulWidget {
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get t() {
      return this[t$];
    }
    set t(value) {
      super.t = value;
    }
    createState() {
      return new pesto_demo._PestoLogoState.new();
    }
  };
  (pesto_demo.PestoLogo.new = function(opts) {
    let height = opts && 'height' in opts ? opts.height : null;
    let t = opts && 't' in opts ? opts.t : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[height$] = height;
    this[t$] = t;
    pesto_demo.PestoLogo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.PestoLogo.prototype;
  dart.addTypeTests(pesto_demo.PestoLogo);
  dart.setMethodSignature(pesto_demo.PestoLogo, () => ({
    __proto__: dart.getMethods(pesto_demo.PestoLogo.__proto__),
    createState: dart.fnType(pesto_demo._PestoLogoState, [])
  }));
  dart.setLibraryUri(pesto_demo.PestoLogo, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.PestoLogo, () => ({
    __proto__: dart.getFields(pesto_demo.PestoLogo.__proto__),
    height: dart.finalFieldType(core.double),
    t: dart.finalFieldType(core.double)
  }));
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const _name = dart.privateName(ui, "_name");
  let C151;
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C152;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C153;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C150;
  const _textRectTween = dart.privateName(pesto_demo, "_textRectTween");
  const _textOpacity = dart.privateName(pesto_demo, "_textOpacity");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C155;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C154;
  const _imageRectTween = dart.privateName(pesto_demo, "_imageRectTween");
  let C158;
  let C159;
  let C157;
  let C156;
  let C162;
  let C163;
  let C161;
  let C160;
  let C166;
  let C167;
  let C168;
  let C165;
  let C164;
  let C171;
  let C172;
  let C170;
  let C169;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C180;
  let C178;
  let C177;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C188;
  let C189;
  let C186;
  let C185;
  let C192;
  let C193;
  let C191;
  let C190;
  pesto_demo._PestoLogoState = class _PestoLogoState extends framework.State$(pesto_demo.PestoLogo) {
    build(context) {
      let t0;
      return new basic.Semantics.new({namesRoute: true, child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.scale(dart.notNull(this.widget.height) / 162), t0), alignment: alignment.Alignment.topCenter, child: new basic.SizedBox.new({width: 220, child: new basic.Stack.new({overflow: stack.Overflow.visible, children: JSArrayOfWidget().of([new basic.Positioned.fromRect({rect: this[_imageRectTween].lerp(this.widget.t), child: new image.Image.asset("logos/pesto/logo_small.png", {fit: box_fit.BoxFit.contain, $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), new basic.Positioned.fromRect({rect: this[_textRectTween].lerp(this.widget.t), child: new basic.Opacity.new({opacity: this[_textOpacity].transform(this.widget.t), child: new text.Text.new("PESTO", {style: this.titleStyle, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173})]), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181}), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), $creationLocationd_0dea112b090073317d4: C190 || CT.C190});
    }
  };
  (pesto_demo._PestoLogoState.new = function() {
    this.titleStyle = C150 || CT.C150;
    this[_textRectTween] = new tween.RectTween.new({begin: new ui.Rect.fromLTWH(0.0, 162, 220, 48), end: new ui.Rect.fromLTWH(0.0, 108, 220, 48)});
    this[_textOpacity] = C154 || CT.C154;
    this[_imageRectTween] = new tween.RectTween.new({begin: new ui.Rect.fromLTWH(0.0, 0.0, 220, 162), end: new ui.Rect.fromLTWH(0.0, 0.0, 220, 108)});
    pesto_demo._PestoLogoState.__proto__.new.call(this);
    ;
  }).prototype = pesto_demo._PestoLogoState.prototype;
  dart.addTypeTests(pesto_demo._PestoLogoState);
  dart.setMethodSignature(pesto_demo._PestoLogoState, () => ({
    __proto__: dart.getMethods(pesto_demo._PestoLogoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pesto_demo._PestoLogoState, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo._PestoLogoState, () => ({
    __proto__: dart.getFields(pesto_demo._PestoLogoState.__proto__),
    titleStyle: dart.finalFieldType(text_style.TextStyle),
    [_textRectTween]: dart.finalFieldType(tween.RectTween),
    [_textOpacity]: dart.finalFieldType(curves.Curve),
    [_imageRectTween]: dart.finalFieldType(tween.RectTween)
  }));
  dart.defineLazy(pesto_demo._PestoLogoState, {
    /*pesto_demo._PestoLogoState.kLogoHeight*/get kLogoHeight() {
      return 162;
    },
    /*pesto_demo._PestoLogoState.kLogoWidth*/get kLogoWidth() {
      return 220;
    },
    /*pesto_demo._PestoLogoState.kImageHeight*/get kImageHeight() {
      return 108;
    },
    /*pesto_demo._PestoLogoState.kTextHeight*/get kTextHeight() {
      return 48;
    }
  });
  let C195;
  let C194;
  let C197;
  let C198;
  let C196;
  let C201;
  let C202;
  let C203;
  let C204;
  let C200;
  let C199;
  let C207;
  let C208;
  let C206;
  let C205;
  let C211;
  let C212;
  let C210;
  let C209;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C213;
  let C216;
  let C217;
  let C218;
  let C219;
  let C215;
  let C214;
  let C222;
  let C223;
  let C221;
  let C220;
  let C226;
  let C227;
  let C228;
  let C229;
  let C225;
  let C224;
  let C232;
  let C233;
  let C231;
  let C230;
  let C236;
  let C237;
  let C238;
  let C235;
  let C234;
  let C241;
  let C240;
  let C239;
  let C244;
  let C243;
  let C242;
  let C247;
  let C246;
  let C245;
  let C250;
  let C251;
  let C249;
  let C248;
  let C254;
  let C253;
  let C252;
  let C257;
  let C258;
  let C256;
  let C255;
  const recipe$ = dart.privateName(pesto_demo, "RecipeCard.recipe");
  const onTap$ = dart.privateName(pesto_demo, "RecipeCard.onTap");
  pesto_demo.RecipeCard = class RecipeCard extends framework.StatelessWidget {
    get recipe() {
      return this[recipe$];
    }
    set recipe(value) {
      super.recipe = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get titleStyle() {
      return C194 || CT.C194;
    }
    get authorStyle() {
      return C196 || CT.C196;
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: this.onTap, child: new card.Card.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new heroes.Hero.new({tag: dart.str(this.recipe.imagePath), child: new basic.AspectRatio.new({aspectRatio: 4.0 / 3.0, child: new image.Image.asset(dart.str(this.recipe.imagePath), {package: this.recipe.imagePackage, fit: box_fit.BoxFit.cover, semanticLabel: this.recipe.name, $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C213 || CT.C213, child: new image.Image.asset(dart.str(this.recipe.ingredientsImagePath), {package: this.recipe.ingredientsImagePackage, width: 48.0, height: 48.0, $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(this.recipe.name, {style: this.titleStyle, softWrap: false, overflow: paragraph.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C224 || CT.C224}), new text.Text.new(this.recipe.author, {style: this.authorStyle, $creationLocationd_0dea112b090073317d4: C230 || CT.C230})]), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239})]), $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), $creationLocationd_0dea112b090073317d4: C245 || CT.C245})]), $creationLocationd_0dea112b090073317d4: C248 || CT.C248}), $creationLocationd_0dea112b090073317d4: C252 || CT.C252}), $creationLocationd_0dea112b090073317d4: C255 || CT.C255});
    }
  };
  (pesto_demo.RecipeCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let recipe = opts && 'recipe' in opts ? opts.recipe : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[recipe$] = recipe;
    this[onTap$] = onTap;
    pesto_demo.RecipeCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.RecipeCard.prototype;
  dart.addTypeTests(pesto_demo.RecipeCard);
  dart.setMethodSignature(pesto_demo.RecipeCard, () => ({
    __proto__: dart.getMethods(pesto_demo.RecipeCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(pesto_demo.RecipeCard, () => ({
    __proto__: dart.getGetters(pesto_demo.RecipeCard.__proto__),
    titleStyle: text_style.TextStyle,
    authorStyle: text_style.TextStyle
  }));
  dart.setLibraryUri(pesto_demo.RecipeCard, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipeCard, () => ({
    __proto__: dart.getFields(pesto_demo.RecipeCard.__proto__),
    recipe: dart.finalFieldType(pesto_demo.Recipe),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const recipe$0 = dart.privateName(pesto_demo, "RecipePage.recipe");
  pesto_demo.RecipePage = class RecipePage extends framework.StatefulWidget {
    get recipe() {
      return this[recipe$0];
    }
    set recipe(value) {
      super.recipe = value;
    }
    createState() {
      return new pesto_demo._RecipePageState.new();
    }
  };
  (pesto_demo.RecipePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let recipe = opts && 'recipe' in opts ? opts.recipe : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[recipe$0] = recipe;
    pesto_demo.RecipePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.RecipePage.prototype;
  dart.addTypeTests(pesto_demo.RecipePage);
  dart.setMethodSignature(pesto_demo.RecipePage, () => ({
    __proto__: dart.getMethods(pesto_demo.RecipePage.__proto__),
    createState: dart.fnType(pesto_demo._RecipePageState, [])
  }));
  dart.setLibraryUri(pesto_demo.RecipePage, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipePage, () => ({
    __proto__: dart.getFields(pesto_demo.RecipePage.__proto__),
    recipe: dart.finalFieldType(pesto_demo.Recipe)
  }));
  const _scaffoldKey = dart.privateName(pesto_demo, "_scaffoldKey");
  let C259;
  const _getAppBarHeight = dart.privateName(pesto_demo, "_getAppBarHeight");
  let C262;
  let C263;
  let C264;
  let C261;
  let C260;
  let C267;
  let C268;
  let C266;
  let C265;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C270;
  let C269;
  const _buildMenuItem = dart.privateName(pesto_demo, "_buildMenuItem");
  let C278;
  let C279;
  let C277;
  let C276;
  const _name$ = dart.privateName(flexible_space_bar, "_name");
  let C281;
  const FlexibleSpaceBar_collapseMode = dart.privateName(flexible_space_bar, "FlexibleSpaceBar.collapseMode");
  const FlexibleSpaceBar_centerTitle = dart.privateName(flexible_space_bar, "FlexibleSpaceBar.centerTitle");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const _name$0 = dart.privateName(proxy_box, "_name");
  let C283;
  const DecoratedBox_position = dart.privateName(container, "DecoratedBox.position");
  const _name$1 = dart.privateName(box_border, "_name");
  let C285;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  let C288;
  let C289;
  let C287;
  const Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  let C290;
  const LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C291;
  const LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  let C292;
  const LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  let C286;
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C284;
  const DecoratedBox_decoration = dart.privateName(container, "DecoratedBox.decoration");
  let C282;
  const FlexibleSpaceBar_background = dart.privateName(flexible_space_bar, "FlexibleSpaceBar.background");
  const FlexibleSpaceBar_title = dart.privateName(flexible_space_bar, "FlexibleSpaceBar.title");
  let C280;
  let C295;
  let C296;
  let C297;
  let C298;
  let C294;
  let C293;
  let C299;
  let C302;
  let C301;
  let C300;
  let C305;
  let C306;
  let C307;
  let C304;
  let C303;
  let C310;
  let C309;
  let C308;
  const _toggleFavorite = dart.privateName(pesto_demo, "_toggleFavorite");
  let C313;
  let C314;
  let C312;
  let C311;
  let C317;
  let C318;
  let C316;
  let C315;
  let C321;
  let C320;
  let C319;
  let C324;
  let C323;
  let C322;
  let C327;
  let C326;
  let C325;
  let C330;
  let C329;
  let C328;
  let C333;
  let C334;
  let C332;
  let C331;
  let C335;
  let C338;
  let C339;
  let C337;
  let C336;
  let C342;
  let C343;
  let C341;
  let C340;
  let C346;
  let C347;
  let C345;
  let C344;
  let C350;
  let C349;
  let C348;
  let C353;
  let C352;
  let C351;
  pesto_demo._RecipePageState = class _RecipePageState extends framework.State$(pesto_demo.RecipePage) {
    [_getAppBarHeight](context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.3;
    }
    build(context) {
      let appBarHeight = this[_getAppBarHeight](context);
      let screenSize = media_query.MediaQuery.of(context).size;
      let fullWidth = dart.notNull(screenSize.width) < 500;
      let isFavorite = pesto_demo._favoriteRecipes.contains(this.widget.recipe);
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], body: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: 0.0, left: 0.0, right: 0.0, height: dart.notNull(appBarHeight) + 28, child: new heroes.Hero.new({tag: dart.str(this.widget.recipe.imagePath), child: new image.Image.asset(dart.str(this.widget.recipe.imagePath), {package: this.widget.recipe.imagePackage, fit: fullWidth ? box_fit.BoxFit.fitWidth : box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C260 || CT.C260}), $creationLocationd_0dea112b090073317d4: C265 || CT.C265}), $creationLocationd_0dea112b090073317d4: C269 || CT.C269}), new scroll_view.CustomScrollView.new({slivers: JSArrayOfWidget().of([new app_bar.SliverAppBar.new({expandedHeight: dart.notNull(appBarHeight) - 28, backgroundColor: colors.Colors.transparent, actions: JSArrayOfWidget().of([new (PopupMenuButtonOfString()).new({onSelected: dart.fn(item => {
                      }, StringToNull()), itemBuilder: dart.fn(context => JSArrayOfPopupMenuItemOfString().of([this[_buildMenuItem](icons.Icons.share, "Tweet recipe"), this[_buildMenuItem](icons.Icons.email, "Email recipe"), this[_buildMenuItem](icons.Icons.message, "Message recipe"), this[_buildMenuItem](icons.Icons.people, "Share on Facebook")]), BuildContextToListOfPopupMenuItemOfString()), $creationLocationd_0dea112b090073317d4: C276 || CT.C276})]), flexibleSpace: C280 || CT.C280, $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), new basic.SliverToBoxAdapter.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({padding: C299 || CT.C299, width: fullWidth ? null : 500, child: new pesto_demo.RecipeSheet.new({recipe: this.widget.recipe, $creationLocationd_0dea112b090073317d4: C300 || CT.C300}), $creationLocationd_0dea112b090073317d4: C303 || CT.C303}), new basic.Positioned.new({right: 16.0, child: new floating_action_button.FloatingActionButton.new({child: new icon$.Icon.new(dart.test(isFavorite) ? icons.Icons.favorite : icons.Icons.favorite_border, {$creationLocationd_0dea112b090073317d4: C308 || CT.C308}), onPressed: dart.bind(this, _toggleFavorite), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315})]), $creationLocationd_0dea112b090073317d4: C319 || CT.C319}), $creationLocationd_0dea112b090073317d4: C322 || CT.C322})]), $creationLocationd_0dea112b090073317d4: C325 || CT.C325})]), $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), $creationLocationd_0dea112b090073317d4: C331 || CT.C331});
    }
    [_buildMenuItem](icon, label) {
      return new (PopupMenuItemOfString()).new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C335 || CT.C335, child: new icon$.Icon.new(icon, {color: colors.Colors.black54, $creationLocationd_0dea112b090073317d4: C336 || CT.C336}), $creationLocationd_0dea112b090073317d4: C340 || CT.C340}), new text.Text.new(label, {style: this.menuItemStyle, $creationLocationd_0dea112b090073317d4: C344 || CT.C344})]), $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), $creationLocationd_0dea112b090073317d4: C351 || CT.C351});
    }
    [_toggleFavorite]() {
      this.setState(dart.fn(() => {
        if (dart.test(pesto_demo._favoriteRecipes.contains(this.widget.recipe)))
          pesto_demo._favoriteRecipes.remove(this.widget.recipe);
        else
          pesto_demo._favoriteRecipes.add(this.widget.recipe);
      }, VoidToNull()));
    }
  };
  (pesto_demo._RecipePageState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this.menuItemStyle = C259 || CT.C259;
    pesto_demo._RecipePageState.__proto__.new.call(this);
    ;
  }).prototype = pesto_demo._RecipePageState.prototype;
  dart.addTypeTests(pesto_demo._RecipePageState);
  dart.setMethodSignature(pesto_demo._RecipePageState, () => ({
    __proto__: dart.getMethods(pesto_demo._RecipePageState.__proto__),
    [_getAppBarHeight]: dart.fnType(core.double, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildMenuItem]: dart.fnType(popup_menu.PopupMenuItem$(core.String), [icon_data.IconData, core.String]),
    [_toggleFavorite]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(pesto_demo._RecipePageState, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo._RecipePageState, () => ({
    __proto__: dart.getFields(pesto_demo._RecipePageState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    menuItemStyle: dart.finalFieldType(text_style.TextStyle)
  }));
  let C354;
  let C355;
  let C357;
  let C356;
  let C358;
  const FixedColumnWidth_value = dart.privateName(table$, "FixedColumnWidth.value");
  let C360;
  let C359;
  let C363;
  let C364;
  let C365;
  let C366;
  let C367;
  let C368;
  let C362;
  let C361;
  let C371;
  let C372;
  let C370;
  let C369;
  let C375;
  let C376;
  let C374;
  let C373;
  let C379;
  let C380;
  let C378;
  let C377;
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C381;
  let C382;
  let C385;
  let C386;
  let C384;
  let C383;
  let C389;
  let C390;
  let C388;
  let C387;
  let C391;
  let C394;
  let C395;
  let C393;
  let C392;
  let C398;
  let C399;
  let C397;
  let C396;
  const _buildItemRow = dart.privateName(pesto_demo, "_buildItemRow");
  let C402;
  let C403;
  let C401;
  let C400;
  let C406;
  let C407;
  let C405;
  let C404;
  let C410;
  let C411;
  let C409;
  let C408;
  let C414;
  let C415;
  let C413;
  let C412;
  let C418;
  let C419;
  let C420;
  let C417;
  let C416;
  let C423;
  let C422;
  let C421;
  let C424;
  let C427;
  let C428;
  let C426;
  let C425;
  let C431;
  let C432;
  let C430;
  let C429;
  let C435;
  let C436;
  let C434;
  let C433;
  let C439;
  let C440;
  let C438;
  let C437;
  const titleStyle = dart.privateName(pesto_demo, "RecipeSheet.titleStyle");
  const descriptionStyle = dart.privateName(pesto_demo, "RecipeSheet.descriptionStyle");
  const itemStyle = dart.privateName(pesto_demo, "RecipeSheet.itemStyle");
  const itemAmountStyle = dart.privateName(pesto_demo, "RecipeSheet.itemAmountStyle");
  const headingStyle = dart.privateName(pesto_demo, "RecipeSheet.headingStyle");
  const recipe$1 = dart.privateName(pesto_demo, "RecipeSheet.recipe");
  pesto_demo.RecipeSheet = class RecipeSheet extends framework.StatelessWidget {
    get titleStyle() {
      return this[titleStyle];
    }
    set titleStyle(value) {
      super.titleStyle = value;
    }
    get descriptionStyle() {
      return this[descriptionStyle];
    }
    set descriptionStyle(value) {
      super.descriptionStyle = value;
    }
    get itemStyle() {
      return this[itemStyle];
    }
    set itemStyle(value) {
      super.itemStyle = value;
    }
    get itemAmountStyle() {
      return this[itemAmountStyle];
    }
    set itemAmountStyle(value) {
      super.itemAmountStyle = value;
    }
    get headingStyle() {
      return this[headingStyle];
    }
    set headingStyle(value) {
      super.headingStyle = value;
    }
    get recipe() {
      return this[recipe$1];
    }
    set recipe(value) {
      super.recipe = value;
    }
    build(context) {
      let t0;
      return new material.Material.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new basic.Padding.new({padding: C358 || CT.C358, child: new table.Table.new({columnWidths: C359 || CT.C359, children: (t0 = JSArrayOfTableRow().of([new table.TableRow.new({children: JSArrayOfWidget().of([new table.TableCell.new({verticalAlignment: table$.TableCellVerticalAlignment.middle, child: new image.Image.asset(dart.str(this.recipe.ingredientsImagePath), {package: this.recipe.ingredientsImagePackage, width: 32.0, height: 32.0, alignment: alignment.Alignment.centerLeft, fit: box_fit.BoxFit.scaleDown, $creationLocationd_0dea112b090073317d4: C361 || CT.C361}), $creationLocationd_0dea112b090073317d4: C369 || CT.C369}), new table.TableCell.new({verticalAlignment: table$.TableCellVerticalAlignment.middle, child: new text.Text.new(this.recipe.name, {style: this.titleStyle, $creationLocationd_0dea112b090073317d4: C373 || CT.C373}), $creationLocationd_0dea112b090073317d4: C377 || CT.C377})])}), new table.TableRow.new({children: JSArrayOfWidget().of([C381 || CT.C381, new basic.Padding.new({padding: C382 || CT.C382, child: new text.Text.new(this.recipe.description, {style: this.descriptionStyle, $creationLocationd_0dea112b090073317d4: C383 || CT.C383}), $creationLocationd_0dea112b090073317d4: C387 || CT.C387})])}), new table.TableRow.new({children: JSArrayOfWidget().of([C381 || CT.C381, new basic.Padding.new({padding: C391 || CT.C391, child: new text.Text.new("Ingredients", {style: this.headingStyle, $creationLocationd_0dea112b090073317d4: C392 || CT.C392}), $creationLocationd_0dea112b090073317d4: C396 || CT.C396})])})]), t0[$addAll](this.recipe.ingredients[$map](table.TableRow, dart.fn(ingredient => this[_buildItemRow](ingredient.amount, ingredient.description), RecipeIngredientToTableRow()))), t0[$add](new table.TableRow.new({children: JSArrayOfWidget().of([C381 || CT.C381, new basic.Padding.new({padding: C391 || CT.C391, child: new text.Text.new("Steps", {style: this.headingStyle, $creationLocationd_0dea112b090073317d4: C400 || CT.C400}), $creationLocationd_0dea112b090073317d4: C404 || CT.C404})])})), t0[$addAll](this.recipe.steps[$map](table.TableRow, dart.fn(step => {
                let t1;
                return this[_buildItemRow]((t1 = step.duration, t1 == null ? "" : t1), step.description);
              }, RecipeStepToTableRow()))), t0), $creationLocationd_0dea112b090073317d4: C408 || CT.C408}), $creationLocationd_0dea112b090073317d4: C412 || CT.C412}), $creationLocationd_0dea112b090073317d4: C416 || CT.C416}), $creationLocationd_0dea112b090073317d4: C421 || CT.C421});
    }
    [_buildItemRow](left, right) {
      return new table.TableRow.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C424 || CT.C424, child: new text.Text.new(left, {style: this.itemAmountStyle, $creationLocationd_0dea112b090073317d4: C425 || CT.C425}), $creationLocationd_0dea112b090073317d4: C429 || CT.C429}), new basic.Padding.new({padding: C424 || CT.C424, child: new text.Text.new(right, {style: this.itemStyle, $creationLocationd_0dea112b090073317d4: C433 || CT.C433}), $creationLocationd_0dea112b090073317d4: C437 || CT.C437})])});
    }
  };
  (pesto_demo.RecipeSheet.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let recipe = opts && 'recipe' in opts ? opts.recipe : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[titleStyle] = C354 || CT.C354;
    this[descriptionStyle] = C259 || CT.C259;
    this[itemStyle] = C355 || CT.C355;
    this[itemAmountStyle] = new pesto_demo.PestoStyle.new({fontSize: 15.0, color: pesto_demo._kTheme.primaryColor, height: 24.0 / 15.0});
    this[headingStyle] = C356 || CT.C356;
    this[recipe$1] = recipe;
    pesto_demo.RecipeSheet.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pesto_demo.RecipeSheet.prototype;
  dart.addTypeTests(pesto_demo.RecipeSheet);
  dart.setMethodSignature(pesto_demo.RecipeSheet, () => ({
    __proto__: dart.getMethods(pesto_demo.RecipeSheet.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildItemRow]: dart.fnType(table.TableRow, [core.String, core.String])
  }));
  dart.setLibraryUri(pesto_demo.RecipeSheet, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipeSheet, () => ({
    __proto__: dart.getFields(pesto_demo.RecipeSheet.__proto__),
    titleStyle: dart.finalFieldType(text_style.TextStyle),
    descriptionStyle: dart.finalFieldType(text_style.TextStyle),
    itemStyle: dart.finalFieldType(text_style.TextStyle),
    itemAmountStyle: dart.finalFieldType(text_style.TextStyle),
    headingStyle: dart.finalFieldType(text_style.TextStyle),
    recipe: dart.finalFieldType(pesto_demo.Recipe)
  }));
  pesto_demo.Recipe = class Recipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get author() {
      return this[author$];
    }
    set author(value) {
      super.author = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get imagePath() {
      return this[imagePath$];
    }
    set imagePath(value) {
      super.imagePath = value;
    }
    get imagePackage() {
      return this[imagePackage$];
    }
    set imagePackage(value) {
      super.imagePackage = value;
    }
    get ingredientsImagePath() {
      return this[ingredientsImagePath$];
    }
    set ingredientsImagePath(value) {
      super.ingredientsImagePath = value;
    }
    get ingredientsImagePackage() {
      return this[ingredientsImagePackage$];
    }
    set ingredientsImagePackage(value) {
      super.ingredientsImagePackage = value;
    }
    get ingredients() {
      return this[ingredients$];
    }
    set ingredients(value) {
      super.ingredients = value;
    }
    get steps() {
      return this[steps$];
    }
    set steps(value) {
      super.steps = value;
    }
  };
  (pesto_demo.Recipe.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let author = opts && 'author' in opts ? opts.author : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let imagePath = opts && 'imagePath' in opts ? opts.imagePath : null;
    let imagePackage = opts && 'imagePackage' in opts ? opts.imagePackage : null;
    let ingredientsImagePath = opts && 'ingredientsImagePath' in opts ? opts.ingredientsImagePath : null;
    let ingredientsImagePackage = opts && 'ingredientsImagePackage' in opts ? opts.ingredientsImagePackage : null;
    let ingredients = opts && 'ingredients' in opts ? opts.ingredients : null;
    let steps = opts && 'steps' in opts ? opts.steps : null;
    this[name$] = name;
    this[author$] = author;
    this[description$] = description;
    this[imagePath$] = imagePath;
    this[imagePackage$] = imagePackage;
    this[ingredientsImagePath$] = ingredientsImagePath;
    this[ingredientsImagePackage$] = ingredientsImagePackage;
    this[ingredients$] = ingredients;
    this[steps$] = steps;
    ;
  }).prototype = pesto_demo.Recipe.prototype;
  dart.addTypeTests(pesto_demo.Recipe);
  const name$ = Recipe_name;
  const author$ = Recipe_author;
  const description$ = Recipe_description;
  const imagePath$ = Recipe_imagePath;
  const imagePackage$ = Recipe_imagePackage;
  const ingredientsImagePath$ = Recipe_ingredientsImagePath;
  const ingredientsImagePackage$ = Recipe_ingredientsImagePackage;
  const ingredients$ = Recipe_ingredients;
  const steps$ = Recipe_steps;
  dart.setLibraryUri(pesto_demo.Recipe, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.Recipe, () => ({
    __proto__: dart.getFields(pesto_demo.Recipe.__proto__),
    name: dart.finalFieldType(core.String),
    author: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    imagePath: dart.finalFieldType(core.String),
    imagePackage: dart.finalFieldType(core.String),
    ingredientsImagePath: dart.finalFieldType(core.String),
    ingredientsImagePackage: dart.finalFieldType(core.String),
    ingredients: dart.finalFieldType(core.List$(pesto_demo.RecipeIngredient)),
    steps: dart.finalFieldType(core.List$(pesto_demo.RecipeStep))
  }));
  pesto_demo.RecipeIngredient = class RecipeIngredient extends core.Object {
    get amount() {
      return this[amount$];
    }
    set amount(value) {
      super.amount = value;
    }
    get description() {
      return this[description$0];
    }
    set description(value) {
      super.description = value;
    }
  };
  (pesto_demo.RecipeIngredient.new = function(opts) {
    let amount = opts && 'amount' in opts ? opts.amount : null;
    let description = opts && 'description' in opts ? opts.description : null;
    this[amount$] = amount;
    this[description$0] = description;
    ;
  }).prototype = pesto_demo.RecipeIngredient.prototype;
  dart.addTypeTests(pesto_demo.RecipeIngredient);
  const amount$ = RecipeIngredient_amount;
  const description$0 = RecipeIngredient_description;
  dart.setLibraryUri(pesto_demo.RecipeIngredient, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipeIngredient, () => ({
    __proto__: dart.getFields(pesto_demo.RecipeIngredient.__proto__),
    amount: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String)
  }));
  pesto_demo.RecipeStep = class RecipeStep extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get description() {
      return this[description$1];
    }
    set description(value) {
      super.description = value;
    }
  };
  (pesto_demo.RecipeStep.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let description = opts && 'description' in opts ? opts.description : null;
    this[duration$] = duration;
    this[description$1] = description;
    ;
  }).prototype = pesto_demo.RecipeStep.prototype;
  dart.addTypeTests(pesto_demo.RecipeStep);
  const duration$ = RecipeStep_duration;
  const description$1 = RecipeStep_description;
  dart.setLibraryUri(pesto_demo.RecipeStep, "package:flutter_web.examples.gallery/demo/pesto_demo.dart");
  dart.setFieldSignature(pesto_demo.RecipeStep, () => ({
    __proto__: dart.getFields(pesto_demo.RecipeStep.__proto__),
    duration: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(pesto_demo, {
    /*pesto_demo._kSmallLogoImage*/get _kSmallLogoImage() {
      return "logos/pesto/logo_small.png";
    },
    /*pesto_demo._kAppBarHeight*/get _kAppBarHeight() {
      return 128;
    },
    /*pesto_demo._kFabHalfSize*/get _kFabHalfSize() {
      return 28;
    },
    /*pesto_demo._kRecipePageMaxWidth*/get _kRecipePageMaxWidth() {
      return 500;
    },
    /*pesto_demo._favoriteRecipes*/get _favoriteRecipes() {
      return new (_HashSetOfRecipe()).new();
    },
    /*pesto_demo._kTheme*/get _kTheme() {
      return theme_data.ThemeData.new({brightness: ui.Brightness.light, primarySwatch: colors.Colors.teal, accentColor: colors.Colors.redAccent});
    },
    /*pesto_demo.kPestoRecipes*/get kPestoRecipes() {
      return C3 || CT.C3;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/pesto_demo", {
    "package:flutter_web.examples.gallery/demo/pesto_demo.dart": pesto_demo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pesto_demo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AAAY;IAAW;;;QAL5B;;AAAQ,wDAAW,GAAG;;EAAC;;;;;;;;MAExB,8BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsBH;AACxB;IACF;;;;;;EACF;;;;;;;;;;;UAI4B;AACxB,YAAO,6CAAwB,AAAiB;IAClD;;;;;;EACF;;;;;;;;;;;QAIW;QACI;QACL;QACC;QACA;AACJ,6DACY,cACF,KAAK,cACA,qBACF,QAAQ,cACN,UAAU,gBACK,2CACZ,aAAa,UACpB,MAAM;;EACf;;;;IAOY;;;;;;;AAGmB;IAAsB;;;QALlC;QAAU;;;AAAY,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYrC;AACX,4BAA6B,AAAY,AAAQ,0BAAjB,OAAO;AACpD,YAAO,4BACC,AAAQ,uCAAyB,AAAY,eAAT,OAAO,qBAC1C,gCACA,wCACiB,sFAET;AAGP,cAFF,AAAY,AAAa;6FAKvB,0DACgB,AAAO,AAAQ,uCAClB,sBACf,mBAAa,OAAO,EAAE,eAAe,GACrC,iBAAW,OAAO,EAAE,eAAe;IAK7C;mBAEiC,SAAgB;AAC/C,YAAO,uCACG,oCAES,sBACf,gEAEW,qBACE;AAGP,cAFF,AAAY,AAAa;0GAMhB,+CACJ,SAAc,SAAwB;AAClC,uBAAO,AAAY,WAAD;AAChB,+BAA2B,aAAZ,AAAK,IAAD,wBAAU,eAAe;AAC5C,oBAAoC,CAA/B,AAAa,YAAD,UACV;AACP,+BACT,AAAsC,kCAAjB,WAAW,iBAAgB,CAAC;AACxC,6BAAa,AAAa,YAAD,GAAG,AAAI,mBAAE,YAAY;AAC3D,kBAAO,iCACe,sCACG,aAAhB,eAAe,IAAG,AAAI,mBAAE,YAAY,WACjC,YAAY,WAEf,6BACI,sCAAkB,UAAU,KAAK,AAAE,CAAD,SAAO,KAAK;;IAKnE;iBAE+B,SAAgB;AAC5B,yBAA0B,AAAY,0BAAT,OAAO;AACpC,oBAAqB,sCAC7B,WACC,AAAI,mBAAE,AAAa,YAAD,eACjB,AAAI,mBAAE,AAAa,YAAD,iBACjB;AACZ,YAAO,uCACI,OAAO,UACR,oEAMI,0CACR,SAAc,SAAa;AACZ,yBAAS,AAAO,AAAO,2BAAC,KAAK;AAC1C,kBAAO,wCACG,MAAM,SACP;AAC0B,gBAA/B,oBAAe,OAAO,EAAE,MAAM;;6DAIxB,AAAO,AAAQ;IAInC;sBAEoC;AAM5B,MALI,oCACN,OAAO,EACP,yEAEW,QAAc,WAAY;IAE3C;mBAEiC,SAAgB;AAWzC,MAVI,oCACN,OAAO,EACP,yEAEW,QAAc,WACd,2BACC,AAAQ,uCAAyB,AAAY,eAAT,OAAO,qBAC1C,uCAAmB,MAAM;IAI5C;;;IArH+B,mBAAc;;;EAsH/C;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACA;;;;;;;AAGoB;IAAiB;;;QAN5B;QAAa;;IAAb;IAAa;AAA7B;;EAAgC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA8BZ;;AACxB,YAAO,sCACO,aACL,0CACc,mCAAY,SAAoB,aAAd,AAAO,4CACvB,sCACd,2CAEE,+BACc,kCACD,sBACL,qCACH,AAAgB,2BAAK,AAAO,uBACrB,sBACQ,oCACP,8IAGL,qCACH,AAAe,0BAAK,AAAO,uBAC1B,gCACI,AAAa,6BAAU,AAAO,uBAChC,kBAAK,iBACD,4BAAiC;IAQ5D;;;IA9CgB;IAKA,uBAAiB,gCACjB,qBAAS,yBACX,qBAAS;IACX;IACI,wBAAkB,gCACpB,qBAAS,KAAK,qBAChB,qBAAS,KAAK;;;EAoC5B;;;;;;;;;;;;;;;MAnDsB,sCAAW;;;MACX,qCAAU;;;MACV,uCAAY;;;MACZ,sCAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsDlB;;;;;;IACM;;;;;;;AAGf;IAA6D;;AAE7D;IAAoE;UAG9C;AACxB,YAAO,kDACE,mBACA,0BACE,0CACkC,yCACrB,sBAChB,0BAC4B,SAAlB,AAAO,+BACR,wCACQ,AAAI,MAAE,YACN,sBACU,SAAlB,AAAO,kCACD,AAAO,+BACJ,qCACG,AAAO,mMAI5B,+BACS,6BACa,sBAChB,wDAEe,sBACqB,SAA7B,AAAO,6CACD,AAAO,4CACT,cACC,4HAGZ,+BACS,0CACkC,kDACF,yCACnB,sBAChB,kBAAK,AAAO,0BACD,2BACG,iBACa,4FAC3B,kBAAK,AAAO,4BAAe;IAWjD;;;QA9DsB;QAAU;QAAa;;IAAb;IAAa;AAAU,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;IAqEzD;;;;;;;AAGqB;IAAkB;;;QAL9B;QAAU;;;AAAW,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAarB;AACjC,YAAmC,cAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB;IAAG;UAGlB;AAIX,yBAAe,uBAAiB,OAAO;AACzC,uBAAwB,AAAY,0BAAT,OAAO;AAClC,sBAA6B,aAAjB,AAAW,UAAD;AACtB,uBAAa,AAAiB,qCAAS,AAAO;AACzD,YAAO,iCACA,0BACC,+BACc,sBAChB,+BACO,WACC,YACC,aACc,aAAb,YAAY,eACb,0BAC4B,SAAzB,AAAO,AAAO,sCACT,sBACiB,SAAzB,AAAO,AAAO,yCACR,AAAO,AAAO,sCAClB,SAAS,GAAU,0BAAkB,uMAIhD,+CACmB,sBACf,8CAC+B,aAAb,YAAY,yBACJ,oCACP,sBACf,iDACc,QAAQ;uDACP,QAAc,WACA,qCACrB,qBAAqB,mBAAO,iBAC5B,qBAAqB,mBAAO,iBAC5B,qBAAqB,qBAAS,mBAC9B,qBAAqB,oBAAQ,8NAgBzC,yCACW,+BACS,sBAChB,8DAES,SAAS,GAAG,mBACZ,wCAAoB,AAAO,0IAEpC,iCACS,aACA,4DACE,6BACH,UAAU,IAAS,uBAAiB,8GAC7B;IAU/B;qBAE8C,MAAa;AACzD,YAAO,2CACE,6BACa,sBAChB,wDAEW,mBAAK,IAAI,UAAgB,6IACpC,kBAAK,KAAK,UAAS;IAI3B;;AAQI,MALF,cAAS;AACP,sBAAI,AAAiB,qCAAS,AAAO;AACG,UAAtC,AAAiB,mCAAO,AAAO;;AAEI,UAAnC,AAAiB,gCAAI,AAAO;;IAElC;;;IA5G+B,qBAAe;IAC9B;;;EA4GlB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMkB;;;;;;IACA;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;IAGH;;;;;;UAGa;;AACxB,YAAO,mCACE,iCACA,eACG,cACD,wDAEE,oEAIe,wBAClB,kCAA2B,sBACzB,4CACkD,iDACjC,sBACuB,SAA7B,AAAO,6CACD,AAAO,4CACT,cACC,iBACa,qCACT,gJACpB,4CACkD,iDACvC,kBAAK,AAAO,0BAAa,2IAEtC,kCAA2B,uCAEzB,wDAEW,kBAAK,AAAO,iCAAoB,iJAE7C,kCAA2B,uCAEzB,wDAEW,kBAAK,uBAAsB,+IAGtC,YAAO,AAAO,AACX,8CAAc,QAAkB,cAC5B,oBAAc,AAAW,UAAD,SAAS,AAAW,UAAD,gDAElD,SAAI,kCAA2B,uCAE/B,wDAEW,kBAAK,iBAAgB,8IAEhC,YAAO,AAAO,AAAM,wCAAc,QAAY;;AAC9C,sBAAO,sBAA4B,KAAd,AAAK,IAAD,iBAAC,OAAY,UAAI,AAAK,IAAD;;IAM5D;oBAE8B,MAAa;AACzC,YAAO,mCACa,sBAChB,wDAES,kBAAK,IAAI,UAAS,4IAE3B,wDAES,kBAAK,KAAK,UAAS;IAIlC;;;QAtFiB;QAAU;;IAEX;IACA;IAEA;IAEA,wBAAkB,yCACpB,aAAa,AAAQ,yCAAsB,AAAK,OAAE;IAChD;IATW;AAAW,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;IAqGxC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACgB;;;;;;IACN;;;;;;;;QAlBb;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IARC;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAO;;;;;;;;;;;;;;;;;;;;;;;;;IAgBH;;;;;;IACA;;;;;;;;QAHgB;QAAa;IAAb;IAAa;;EAAa;;;;;;;;;;;IAS1C;;;;;;IACA;;;;;;;;QAHU;QAAe;IAAf;IAAe;;EAAa;;;;;;;;;;;MA1iBxC,2BAAgB;YA+NQ;;MA9NxB,yBAAc;;;MACd,wBAAa;;;MAEb,+BAAoB;;;MAEf,2BAAgB;YAAG;;MAErB,kBAAO;YAAG,uCACD,oCACD,iCACF;;MAqiBH,wBAAa","file":"pesto_demo.ddc.js"}');
  // Exports:
  return {
    demo__pesto_demo: pesto_demo
  };
});

//# sourceMappingURL=pesto_demo.ddc.js.map
