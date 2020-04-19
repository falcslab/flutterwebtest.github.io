define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web.examples.gallery/gallery/icons', 'packages/flutter_web.examples.gallery/demo/contacts_demo', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_home', 'packages/flutter_web.examples.gallery/demo/animation_demo', 'packages/flutter_web.examples.gallery/demo/colors_demo', 'packages/flutter_web.examples.gallery/demo/typography_demo', 'packages/flutter_web.examples.gallery/demo/material/backdrop_demo', 'packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo', 'packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo', 'packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo', 'packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo', 'packages/flutter_web.examples.gallery/demo/material/material_button_demo', 'packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo', 'packages/flutter_web.examples.gallery/demo/material/cards_demo', 'packages/flutter_web.examples.gallery/demo/material/chip_demo', 'packages/flutter_web.examples.gallery/demo/material/data_table_demo', 'packages/flutter_web.examples.gallery/demo/material/dialog_demo', 'packages/flutter_web.examples.gallery/demo/material/elevation_demo', 'packages/flutter_web.examples.gallery/demo/material/two_level_list_demo', 'packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo', 'packages/flutter_web.examples.gallery/demo/material/grid_list_demo', 'packages/flutter_web.examples.gallery/demo/material/icons_demo', 'packages/flutter_web.examples.gallery/demo/material/list_demo', 'packages/flutter_web.examples.gallery/demo/material/leave_behind_demo', 'packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo', 'packages/flutter_web.examples.gallery/demo/material/menu_demo', 'packages/flutter_web.examples.gallery/demo/material/drawer_demo', 'packages/flutter_web.examples.gallery/demo/material/page_selector_demo', 'packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo', 'packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo', 'packages/flutter_web.examples.gallery/demo/material/overscroll_demo', 'packages/flutter_web/material', 'packages/flutter_web.examples.gallery/demo/material/search_demo', 'packages/flutter_web.examples.gallery/demo/material/selection_controls_demo', 'packages/flutter_web.examples.gallery/demo/material/slider_demo', 'packages/flutter_web.examples.gallery/demo/material/snack_bar_demo', 'packages/flutter_web.examples.gallery/demo/material/tabs_demo', 'packages/flutter_web.examples.gallery/demo/material/text_demo', 'packages/flutter_web.examples.gallery/demo/material/editable_text_demo', 'packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo', 'packages/flutter_web.examples.gallery/demo/material/text_form_field_demo', 'packages/flutter_web.examples.gallery/demo/material/tooltip_demo', 'packages/flutter_web.examples.gallery/demo/pesto_demo'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web__animation, packages__flutter_web$46examples$46gallery__gallery__icons, packages__flutter_web$46examples$46gallery__demo__contacts_demo, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_home, packages__flutter_web$46examples$46gallery__demo__animation_demo, packages__flutter_web$46examples$46gallery__demo__colors_demo, packages__flutter_web$46examples$46gallery__demo__typography_demo, packages__flutter_web$46examples$46gallery__demo__material__backdrop_demo, packages__flutter_web$46examples$46gallery__demo__material__bottom_app_bar_demo, packages__flutter_web$46examples$46gallery__demo__material__bottom_navigation_demo, packages__flutter_web$46examples$46gallery__demo__material__modal_bottom_sheet_demo, packages__flutter_web$46examples$46gallery__demo__material__persistent_bottom_sheet_demo, packages__flutter_web$46examples$46gallery__demo__material__material_button_demo, packages__flutter_web$46examples$46gallery__demo__material__tabs_fab_demo, packages__flutter_web$46examples$46gallery__demo__material__cards_demo, packages__flutter_web$46examples$46gallery__demo__material__chip_demo, packages__flutter_web$46examples$46gallery__demo__material__data_table_demo, packages__flutter_web$46examples$46gallery__demo__material__dialog_demo, packages__flutter_web$46examples$46gallery__demo__material__elevation_demo, packages__flutter_web$46examples$46gallery__demo__material__two_level_list_demo, packages__flutter_web$46examples$46gallery__demo__material__expansion_panels_demo, packages__flutter_web$46examples$46gallery__demo__material__grid_list_demo, packages__flutter_web$46examples$46gallery__demo__material__icons_demo, packages__flutter_web$46examples$46gallery__demo__material__list_demo, packages__flutter_web$46examples$46gallery__demo__material__leave_behind_demo, packages__flutter_web$46examples$46gallery__demo__material__reorderable_list_demo, packages__flutter_web$46examples$46gallery__demo__material__menu_demo, packages__flutter_web$46examples$46gallery__demo__material__drawer_demo, packages__flutter_web$46examples$46gallery__demo__material__page_selector_demo, packages__flutter_web$46examples$46gallery__demo__material__date_and_time_picker_demo, packages__flutter_web$46examples$46gallery__demo__material__progress_indicator_demo, packages__flutter_web$46examples$46gallery__demo__material__overscroll_demo, packages__flutter_web__material, packages__flutter_web$46examples$46gallery__demo__material__search_demo, packages__flutter_web$46examples$46gallery__demo__material__selection_controls_demo, packages__flutter_web$46examples$46gallery__demo__material__slider_demo, packages__flutter_web$46examples$46gallery__demo__material__snack_bar_demo, packages__flutter_web$46examples$46gallery__demo__material__tabs_demo, packages__flutter_web$46examples$46gallery__demo__material__text_demo, packages__flutter_web$46examples$46gallery__demo__material__editable_text_demo, packages__flutter_web$46examples$46gallery__demo__material__scrollable_tabs_demo, packages__flutter_web$46examples$46gallery__demo__material__text_form_field_demo, packages__flutter_web$46examples$46gallery__demo__material__tooltip_demo, packages__flutter_web$46examples$46gallery__demo__pesto_demo) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icons = packages__flutter_web$46examples$46gallery__gallery__icons.gallery__icons;
  const contacts_demo = packages__flutter_web$46examples$46gallery__demo__contacts_demo.demo__contacts_demo;
  const shrine_demo = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_home.demo__shrine_demo;
  const animation_demo = packages__flutter_web$46examples$46gallery__demo__animation_demo.demo__animation_demo;
  const colors_demo = packages__flutter_web$46examples$46gallery__demo__colors_demo.demo__colors_demo;
  const typography_demo = packages__flutter_web$46examples$46gallery__demo__typography_demo.demo__typography_demo;
  const backdrop_demo = packages__flutter_web$46examples$46gallery__demo__material__backdrop_demo.demo__material__backdrop_demo;
  const bottom_app_bar_demo = packages__flutter_web$46examples$46gallery__demo__material__bottom_app_bar_demo.demo__material__bottom_app_bar_demo;
  const bottom_navigation_demo = packages__flutter_web$46examples$46gallery__demo__material__bottom_navigation_demo.demo__material__bottom_navigation_demo;
  const modal_bottom_sheet_demo = packages__flutter_web$46examples$46gallery__demo__material__modal_bottom_sheet_demo.demo__material__modal_bottom_sheet_demo;
  const persistent_bottom_sheet_demo = packages__flutter_web$46examples$46gallery__demo__material__persistent_bottom_sheet_demo.demo__material__persistent_bottom_sheet_demo;
  const material_button_demo = packages__flutter_web$46examples$46gallery__demo__material__material_button_demo.demo__material__material_button_demo;
  const tabs_fab_demo = packages__flutter_web$46examples$46gallery__demo__material__tabs_fab_demo.demo__material__tabs_fab_demo;
  const cards_demo = packages__flutter_web$46examples$46gallery__demo__material__cards_demo.demo__material__cards_demo;
  const chip_demo = packages__flutter_web$46examples$46gallery__demo__material__chip_demo.demo__material__chip_demo;
  const data_table_demo = packages__flutter_web$46examples$46gallery__demo__material__data_table_demo.demo__material__data_table_demo;
  const dialog_demo = packages__flutter_web$46examples$46gallery__demo__material__dialog_demo.demo__material__dialog_demo;
  const elevation_demo = packages__flutter_web$46examples$46gallery__demo__material__elevation_demo.demo__material__elevation_demo;
  const two_level_list_demo = packages__flutter_web$46examples$46gallery__demo__material__two_level_list_demo.demo__material__two_level_list_demo;
  const expansion_panels_demo = packages__flutter_web$46examples$46gallery__demo__material__expansion_panels_demo.demo__material__expansion_panels_demo;
  const grid_list_demo = packages__flutter_web$46examples$46gallery__demo__material__grid_list_demo.demo__material__grid_list_demo;
  const icons_demo = packages__flutter_web$46examples$46gallery__demo__material__icons_demo.demo__material__icons_demo;
  const list_demo = packages__flutter_web$46examples$46gallery__demo__material__list_demo.demo__material__list_demo;
  const leave_behind_demo = packages__flutter_web$46examples$46gallery__demo__material__leave_behind_demo.demo__material__leave_behind_demo;
  const reorderable_list_demo = packages__flutter_web$46examples$46gallery__demo__material__reorderable_list_demo.demo__material__reorderable_list_demo;
  const menu_demo = packages__flutter_web$46examples$46gallery__demo__material__menu_demo.demo__material__menu_demo;
  const drawer_demo = packages__flutter_web$46examples$46gallery__demo__material__drawer_demo.demo__material__drawer_demo;
  const page_selector_demo = packages__flutter_web$46examples$46gallery__demo__material__page_selector_demo.demo__material__page_selector_demo;
  const date_and_time_picker_demo = packages__flutter_web$46examples$46gallery__demo__material__date_and_time_picker_demo.demo__material__date_and_time_picker_demo;
  const progress_indicator_demo = packages__flutter_web$46examples$46gallery__demo__material__progress_indicator_demo.demo__material__progress_indicator_demo;
  const overscroll_demo = packages__flutter_web$46examples$46gallery__demo__material__overscroll_demo.demo__material__overscroll_demo;
  const icons$ = packages__flutter_web__material.src__material__icons;
  const search_demo = packages__flutter_web$46examples$46gallery__demo__material__search_demo.demo__material__search_demo;
  const selection_controls_demo = packages__flutter_web$46examples$46gallery__demo__material__selection_controls_demo.demo__material__selection_controls_demo;
  const slider_demo = packages__flutter_web$46examples$46gallery__demo__material__slider_demo.demo__material__slider_demo;
  const snack_bar_demo = packages__flutter_web$46examples$46gallery__demo__material__snack_bar_demo.demo__material__snack_bar_demo;
  const tabs_demo = packages__flutter_web$46examples$46gallery__demo__material__tabs_demo.demo__material__tabs_demo;
  const text_demo = packages__flutter_web$46examples$46gallery__demo__material__text_demo.demo__material__text_demo;
  const editable_text_demo = packages__flutter_web$46examples$46gallery__demo__material__editable_text_demo.demo__material__editable_text_demo;
  const scrollable_tabs_demo = packages__flutter_web$46examples$46gallery__demo__material__scrollable_tabs_demo.demo__material__scrollable_tabs_demo;
  const text_form_field_demo = packages__flutter_web$46examples$46gallery__demo__material__text_form_field_demo.demo__material__text_form_field_demo;
  const tooltip_demo = packages__flutter_web$46examples$46gallery__demo__material__tooltip_demo.demo__material__tooltip_demo;
  const pesto_demo = packages__flutter_web$46examples$46gallery__demo__pesto_demo.demo__pesto_demo;
  const demos = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $insert = dartx.insert;
  const $map = dartx.map;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $toList = dartx.toList;
  let BuildContextToContactsDemo = () => (BuildContextToContactsDemo = dart.constFn(dart.fnType(contacts_demo.ContactsDemo, [framework.BuildContext])))();
  let BuildContextToShrineDemo = () => (BuildContextToShrineDemo = dart.constFn(dart.fnType(shrine_demo.ShrineDemo, [framework.BuildContext])))();
  let BuildContextToAnimationDemo = () => (BuildContextToAnimationDemo = dart.constFn(dart.fnType(animation_demo.AnimationDemo, [framework.BuildContext])))();
  let BuildContextToColorsDemo = () => (BuildContextToColorsDemo = dart.constFn(dart.fnType(colors_demo.ColorsDemo, [framework.BuildContext])))();
  let BuildContextToTypographyDemo = () => (BuildContextToTypographyDemo = dart.constFn(dart.fnType(typography_demo.TypographyDemo, [framework.BuildContext])))();
  let BuildContextToBackdropDemo = () => (BuildContextToBackdropDemo = dart.constFn(dart.fnType(backdrop_demo.BackdropDemo, [framework.BuildContext])))();
  let BuildContextToBottomAppBarDemo = () => (BuildContextToBottomAppBarDemo = dart.constFn(dart.fnType(bottom_app_bar_demo.BottomAppBarDemo, [framework.BuildContext])))();
  let BuildContextToBottomNavigationDemo = () => (BuildContextToBottomNavigationDemo = dart.constFn(dart.fnType(bottom_navigation_demo.BottomNavigationDemo, [framework.BuildContext])))();
  let BuildContextToModalBottomSheetDemo = () => (BuildContextToModalBottomSheetDemo = dart.constFn(dart.fnType(modal_bottom_sheet_demo.ModalBottomSheetDemo, [framework.BuildContext])))();
  let BuildContextToPersistentBottomSheetDemo = () => (BuildContextToPersistentBottomSheetDemo = dart.constFn(dart.fnType(persistent_bottom_sheet_demo.PersistentBottomSheetDemo, [framework.BuildContext])))();
  let BuildContextToButtonsDemo = () => (BuildContextToButtonsDemo = dart.constFn(dart.fnType(material_button_demo.ButtonsDemo, [framework.BuildContext])))();
  let BuildContextToTabsFabDemo = () => (BuildContextToTabsFabDemo = dart.constFn(dart.fnType(tabs_fab_demo.TabsFabDemo, [framework.BuildContext])))();
  let BuildContextToCardsDemo = () => (BuildContextToCardsDemo = dart.constFn(dart.fnType(cards_demo.CardsDemo, [framework.BuildContext])))();
  let BuildContextToChipDemo = () => (BuildContextToChipDemo = dart.constFn(dart.fnType(chip_demo.ChipDemo, [framework.BuildContext])))();
  let BuildContextToDataTableDemo = () => (BuildContextToDataTableDemo = dart.constFn(dart.fnType(data_table_demo.DataTableDemo, [framework.BuildContext])))();
  let BuildContextToDialogDemo = () => (BuildContextToDialogDemo = dart.constFn(dart.fnType(dialog_demo.DialogDemo, [framework.BuildContext])))();
  let BuildContextToElevationDemo = () => (BuildContextToElevationDemo = dart.constFn(dart.fnType(elevation_demo.ElevationDemo, [framework.BuildContext])))();
  let BuildContextToTwoLevelListDemo = () => (BuildContextToTwoLevelListDemo = dart.constFn(dart.fnType(two_level_list_demo.TwoLevelListDemo, [framework.BuildContext])))();
  let BuildContextToExpansionPanelsDemo = () => (BuildContextToExpansionPanelsDemo = dart.constFn(dart.fnType(expansion_panels_demo.ExpansionPanelsDemo, [framework.BuildContext])))();
  let BuildContextToGridListDemo = () => (BuildContextToGridListDemo = dart.constFn(dart.fnType(grid_list_demo.GridListDemo, [framework.BuildContext])))();
  let BuildContextToIconsDemo = () => (BuildContextToIconsDemo = dart.constFn(dart.fnType(icons_demo.IconsDemo, [framework.BuildContext])))();
  let BuildContextToListDemo = () => (BuildContextToListDemo = dart.constFn(dart.fnType(list_demo.ListDemo, [framework.BuildContext])))();
  let BuildContextToLeaveBehindDemo = () => (BuildContextToLeaveBehindDemo = dart.constFn(dart.fnType(leave_behind_demo.LeaveBehindDemo, [framework.BuildContext])))();
  let BuildContextToReorderableListDemo = () => (BuildContextToReorderableListDemo = dart.constFn(dart.fnType(reorderable_list_demo.ReorderableListDemo, [framework.BuildContext])))();
  let BuildContextToMenuDemo = () => (BuildContextToMenuDemo = dart.constFn(dart.fnType(menu_demo.MenuDemo, [framework.BuildContext])))();
  let BuildContextToDrawerDemo = () => (BuildContextToDrawerDemo = dart.constFn(dart.fnType(drawer_demo.DrawerDemo, [framework.BuildContext])))();
  let BuildContextToPageSelectorDemo = () => (BuildContextToPageSelectorDemo = dart.constFn(dart.fnType(page_selector_demo.PageSelectorDemo, [framework.BuildContext])))();
  let BuildContextToDateAndTimePickerDemo = () => (BuildContextToDateAndTimePickerDemo = dart.constFn(dart.fnType(date_and_time_picker_demo.DateAndTimePickerDemo, [framework.BuildContext])))();
  let BuildContextToProgressIndicatorDemo = () => (BuildContextToProgressIndicatorDemo = dart.constFn(dart.fnType(progress_indicator_demo.ProgressIndicatorDemo, [framework.BuildContext])))();
  let BuildContextToOverscrollDemo = () => (BuildContextToOverscrollDemo = dart.constFn(dart.fnType(overscroll_demo.OverscrollDemo, [framework.BuildContext])))();
  let BuildContextToSearchDemo = () => (BuildContextToSearchDemo = dart.constFn(dart.fnType(search_demo.SearchDemo, [framework.BuildContext])))();
  let BuildContextToSelectionControlsDemo = () => (BuildContextToSelectionControlsDemo = dart.constFn(dart.fnType(selection_controls_demo.SelectionControlsDemo, [framework.BuildContext])))();
  let BuildContextToSliderDemo = () => (BuildContextToSliderDemo = dart.constFn(dart.fnType(slider_demo.SliderDemo, [framework.BuildContext])))();
  let BuildContextToSnackBarDemo = () => (BuildContextToSnackBarDemo = dart.constFn(dart.fnType(snack_bar_demo.SnackBarDemo, [framework.BuildContext])))();
  let BuildContextToTabsDemo = () => (BuildContextToTabsDemo = dart.constFn(dart.fnType(tabs_demo.TabsDemo, [framework.BuildContext])))();
  let BuildContextToTextDemo = () => (BuildContextToTextDemo = dart.constFn(dart.fnType(text_demo.TextDemo, [framework.BuildContext])))();
  let BuildContextToEditableTextDemo = () => (BuildContextToEditableTextDemo = dart.constFn(dart.fnType(editable_text_demo.EditableTextDemo, [framework.BuildContext])))();
  let BuildContextToScrollableTabsDemo = () => (BuildContextToScrollableTabsDemo = dart.constFn(dart.fnType(scrollable_tabs_demo.ScrollableTabsDemo, [framework.BuildContext])))();
  let BuildContextToTextFormFieldDemo = () => (BuildContextToTextFormFieldDemo = dart.constFn(dart.fnType(text_form_field_demo.TextFormFieldDemo, [framework.BuildContext])))();
  let BuildContextToTooltipDemo = () => (BuildContextToTooltipDemo = dart.constFn(dart.fnType(tooltip_demo.TooltipDemo, [framework.BuildContext])))();
  let JSArrayOfGalleryDemo = () => (JSArrayOfGalleryDemo = dart.constFn(_interceptors.JSArray$(demos.GalleryDemo)))();
  let BuildContextToPestoDemo = () => (BuildContextToPestoDemo = dart.constFn(dart.fnType(pesto_demo.PestoDemo, [framework.BuildContext])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let GalleryDemoToGalleryDemoCategory = () => (GalleryDemoToGalleryDemoCategory = dart.constFn(dart.fnType(demos.GalleryDemoCategory, [demos.GalleryDemo])))();
  let ListOfGalleryDemo = () => (ListOfGalleryDemo = dart.constFn(core.List$(demos.GalleryDemo)))();
  let LinkedHashMapOfGalleryDemoCategory$ListOfGalleryDemo = () => (LinkedHashMapOfGalleryDemoCategory$ListOfGalleryDemo = dart.constFn(collection.LinkedHashMap$(demos.GalleryDemoCategory, ListOfGalleryDemo())))();
  let GalleryDemoTobool = () => (GalleryDemoTobool = dart.constFn(dart.fnType(core.bool, [demos.GalleryDemo])))();
  let dynamicToListOfGalleryDemo = () => (dynamicToListOfGalleryDemo = dart.constFn(dart.fnType(ListOfGalleryDemo(), [dart.dynamic])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
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
        [_Location_column]: 45,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation_demo.AnimationDemo.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: grid_list_demo.GridListDemo.prototype,
        [Widget_key]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: list_demo.ListDemo.prototype,
        [Widget_key]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: leave_behind_demo.LeaveBehindDemo.prototype,
        [Widget_key]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: reorderable_list_demo.ReorderableListDemo.prototype,
        [Widget_key]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: menu_demo.MenuDemo.prototype,
        [Widget_key]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 340,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 350,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: overscroll_demo.OverscrollDemo.prototype,
        [Widget_key]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 408,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: snack_bar_demo.SnackBarDemo.prototype,
        [Widget_key]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 428,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 438,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 448,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 458,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: text_form_field_demo.TextFormFieldDemo.prototype,
        [Widget_key]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 478,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: pesto_demo.PestoDemo.prototype,
        [Widget_key]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "GalleryIcons",
        [IconData_codePoint]: 59676
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: demos.GalleryDemoCategory.prototype,
        [icon$]: C43 || CT.C43,
        [name$]: "Studies"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "GalleryIcons",
        [IconData_codePoint]: 59668
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: demos.GalleryDemoCategory.prototype,
        [icon$]: C45 || CT.C45,
        [name$]: "Style"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "GalleryIcons",
        [IconData_codePoint]: 59679
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: demos.GalleryDemoCategory.prototype,
        [icon$]: C47 || CT.C47,
        [name$]: "Material"
      });
    }
  });
  const name$ = dart.privateName(demos, "GalleryDemoCategory.name");
  const icon$ = dart.privateName(demos, "GalleryDemoCategory.icon");
  demos.GalleryDemoCategory = class GalleryDemoCategory extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = demos.GalleryDemoCategory._check(other);
      return typedOther.name == this.name && dart.equals(typedOther.icon, this.icon);
    }
    get hashCode() {
      return ui.hashValues(this.name, this.icon);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.name) + ")";
    }
  };
  (demos.GalleryDemoCategory.__ = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    this[name$] = name;
    this[icon$] = icon;
    ;
  }).prototype = demos.GalleryDemoCategory.prototype;
  dart.addTypeTests(demos.GalleryDemoCategory);
  dart.setLibraryUri(demos.GalleryDemoCategory, "package:flutter_web.examples.gallery/gallery/demos.dart");
  dart.setFieldSignature(demos.GalleryDemoCategory, () => ({
    __proto__: dart.getFields(demos.GalleryDemoCategory.__proto__),
    name: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(icon_data.IconData)
  }));
  dart.defineExtensionMethods(demos.GalleryDemoCategory, ['_equals', 'toString']);
  dart.defineExtensionAccessors(demos.GalleryDemoCategory, ['hashCode']);
  const title$ = dart.privateName(demos, "GalleryDemo.title");
  const icon$0 = dart.privateName(demos, "GalleryDemo.icon");
  const subtitle$ = dart.privateName(demos, "GalleryDemo.subtitle");
  const category$ = dart.privateName(demos, "GalleryDemo.category");
  const routeName$ = dart.privateName(demos, "GalleryDemo.routeName");
  const buildRoute$ = dart.privateName(demos, "GalleryDemo.buildRoute");
  const documentationUrl$ = dart.privateName(demos, "GalleryDemo.documentationUrl");
  demos.GalleryDemo = class GalleryDemo extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
    get routeName() {
      return this[routeName$];
    }
    set routeName(value) {
      super.routeName = value;
    }
    get buildRoute() {
      return this[buildRoute$];
    }
    set buildRoute(value) {
      super.buildRoute = value;
    }
    get documentationUrl() {
      return this[documentationUrl$];
    }
    set documentationUrl(value) {
      super.documentationUrl = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.title) + " " + dart.str(this.routeName) + ")";
    }
  };
  (demos.GalleryDemo.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let category = opts && 'category' in opts ? opts.category : null;
    let routeName = opts && 'routeName' in opts ? opts.routeName : null;
    let documentationUrl = opts && 'documentationUrl' in opts ? opts.documentationUrl : null;
    let buildRoute = opts && 'buildRoute' in opts ? opts.buildRoute : null;
    this[title$] = title;
    this[icon$0] = icon;
    this[subtitle$] = subtitle;
    this[category$] = category;
    this[routeName$] = routeName;
    this[documentationUrl$] = documentationUrl;
    this[buildRoute$] = buildRoute;
    if (!(title != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart", 70, 16, "title != null");
    if (!(category != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart", 71, 16, "category != null");
    if (!(routeName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart", 72, 16, "routeName != null");
    if (!(buildRoute != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart", 73, 16, "buildRoute != null");
    ;
  }).prototype = demos.GalleryDemo.prototype;
  dart.addTypeTests(demos.GalleryDemo);
  dart.setLibraryUri(demos.GalleryDemo, "package:flutter_web.examples.gallery/gallery/demos.dart");
  dart.setFieldSignature(demos.GalleryDemo, () => ({
    __proto__: dart.getFields(demos.GalleryDemo.__proto__),
    title: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(icon_data.IconData),
    subtitle: dart.finalFieldType(core.String),
    category: dart.finalFieldType(demos.GalleryDemoCategory),
    routeName: dart.finalFieldType(core.String),
    buildRoute: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    documentationUrl: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(demos.GalleryDemo, ['toString']);
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  const Widget_key = dart.privateName(framework, "Widget.key");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
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
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  demos._buildGalleryDemos = function _buildGalleryDemos() {
    let galleryDemos = JSArrayOfGalleryDemo().of([new demos.GalleryDemo.new({title: "Contact profile", subtitle: "Address book entry with a flexible appbar", icon: icons.GalleryIcons.account_box, category: demos._kDemos, routeName: "/contacts", buildRoute: dart.fn(context => new contacts_demo.ContactsDemo.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToContactsDemo())}), new demos.GalleryDemo.new({title: "Shrine", subtitle: "Basic shopping app", icon: icons.GalleryIcons.shrine, category: demos._kDemos, routeName: "/shrine", buildRoute: dart.fn(context => new shrine_demo.ShrineDemo.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToShrineDemo())}), new demos.GalleryDemo.new({title: "Animation", subtitle: "Section organizer", icon: icons.GalleryIcons.animation, category: demos._kDemos, routeName: "/animation", buildRoute: dart.fn(context => C3 || CT.C3, BuildContextToAnimationDemo())}), new demos.GalleryDemo.new({title: "Colors", subtitle: "All of the predefined colors", icon: icons.GalleryIcons.colors, category: demos._kStyle, routeName: "/colors", buildRoute: dart.fn(context => new colors_demo.ColorsDemo.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextToColorsDemo())}), new demos.GalleryDemo.new({title: "Typography", subtitle: "All of the predefined text styles", icon: icons.GalleryIcons.custom_typography, category: demos._kStyle, routeName: "/typography", buildRoute: dart.fn(context => new typography_demo.TypographyDemo.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextToTypographyDemo())}), new demos.GalleryDemo.new({title: "Backdrop", subtitle: "Select a front layer from back layer", icon: icons.GalleryIcons.backdrop, category: demos._kMaterialComponents, routeName: "/material/backdrop", buildRoute: dart.fn(context => new backdrop_demo.BackdropDemo.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextToBackdropDemo())}), new demos.GalleryDemo.new({title: "Bottom app bar", subtitle: "Optional floating action button notch", icon: icons.GalleryIcons.bottom_app_bar, category: demos._kMaterialComponents, routeName: "/material/bottom_app_bar", documentationUrl: "https://docs.flutter.io/flutter/material/BottomAppBar-class.html", buildRoute: dart.fn(context => new bottom_app_bar_demo.BottomAppBarDemo.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), BuildContextToBottomAppBarDemo())}), new demos.GalleryDemo.new({title: "Bottom navigation", subtitle: "Bottom navigation with cross-fading views", icon: icons.GalleryIcons.bottom_navigation, category: demos._kMaterialComponents, routeName: "/material/bottom_navigation", documentationUrl: "https://docs.flutter.io/flutter/material/BottomNavigationBar-class.html", buildRoute: dart.fn(context => new bottom_navigation_demo.BottomNavigationDemo.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), BuildContextToBottomNavigationDemo())}), new demos.GalleryDemo.new({title: "Bottom sheet: Modal", subtitle: "A dismissable bottom sheet", icon: icons.GalleryIcons.bottom_sheets, category: demos._kMaterialComponents, routeName: "/material/modal-bottom-sheet", documentationUrl: "https://docs.flutter.io/flutter/material/showModalBottomSheet.html", buildRoute: dart.fn(context => new modal_bottom_sheet_demo.ModalBottomSheetDemo.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), BuildContextToModalBottomSheetDemo())}), new demos.GalleryDemo.new({title: "Bottom sheet: Persistent", subtitle: "A bottom sheet that sticks around", icon: icons.GalleryIcons.bottom_sheet_persistent, category: demos._kMaterialComponents, routeName: persistent_bottom_sheet_demo.PersistentBottomSheetDemo.routeName, documentationUrl: "https://docs.flutter.io/flutter/material/ScaffoldState/showBottomSheet.html", buildRoute: dart.fn(context => new persistent_bottom_sheet_demo.PersistentBottomSheetDemo.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextToPersistentBottomSheetDemo())}), new demos.GalleryDemo.new({title: "Buttons", subtitle: "Flat, raised, dropdown, and more", icon: icons.GalleryIcons.generic_buttons, category: demos._kMaterialComponents, routeName: "/material/buttons", buildRoute: dart.fn(context => new material_button_demo.ButtonsDemo.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), BuildContextToButtonsDemo())}), new demos.GalleryDemo.new({title: "Buttons: Floating Action Button", subtitle: "FAB with transitions", icon: icons.GalleryIcons.buttons, category: demos._kMaterialComponents, routeName: "/material/tabs-fab", documentationUrl: "https://docs.flutter.io/flutter/material/FloatingActionButton-class.html", buildRoute: dart.fn(context => new tabs_fab_demo.TabsFabDemo.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), BuildContextToTabsFabDemo())}), new demos.GalleryDemo.new({title: "Cards", subtitle: "Baseline cards with rounded corners", icon: icons.GalleryIcons.cards, category: demos._kMaterialComponents, routeName: "/material/cards", documentationUrl: "https://docs.flutter.io/flutter/material/Card-class.html", buildRoute: dart.fn(context => new cards_demo.CardsDemo.new({$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), BuildContextToCardsDemo())}), new demos.GalleryDemo.new({title: "Chips", subtitle: "Labeled with delete buttons and avatars", icon: icons.GalleryIcons.chips, category: demos._kMaterialComponents, routeName: "/material/chip", documentationUrl: "https://docs.flutter.io/flutter/material/Chip-class.html", buildRoute: dart.fn(context => new chip_demo.ChipDemo.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), BuildContextToChipDemo())}), new demos.GalleryDemo.new({title: "Data tables", subtitle: "Rows and columns", icon: icons.GalleryIcons.data_table, category: demos._kMaterialComponents, routeName: "/material/data-table", documentationUrl: "https://docs.flutter.io/flutter/material/PaginatedDataTable-class.html", buildRoute: dart.fn(context => new data_table_demo.DataTableDemo.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), BuildContextToDataTableDemo())}), new demos.GalleryDemo.new({title: "Dialogs", subtitle: "Simple, alert, and fullscreen", icon: icons.GalleryIcons.dialogs, category: demos._kMaterialComponents, routeName: "/material/dialog", documentationUrl: "https://docs.flutter.io/flutter/material/showDialog.html", buildRoute: dart.fn(context => new dialog_demo.DialogDemo.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), BuildContextToDialogDemo())}), new demos.GalleryDemo.new({title: "Elevations", subtitle: "Shadow values on cards", icon: icons.GalleryIcons.cupertino_progress, category: demos._kMaterialComponents, routeName: "/material/elevation", documentationUrl: "https://docs.flutter.io/flutter/material/Material/elevation.html", buildRoute: dart.fn(context => new elevation_demo.ElevationDemo.new({$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextToElevationDemo())}), new demos.GalleryDemo.new({title: "Expand/collapse list control", subtitle: "A list with one sub-list level", icon: icons.GalleryIcons.expand_all, category: demos._kMaterialComponents, routeName: "/material/two-level-list", documentationUrl: "https://docs.flutter.io/flutter/material/ExpansionTile-class.html", buildRoute: dart.fn(context => new two_level_list_demo.TwoLevelListDemo.new({$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), BuildContextToTwoLevelListDemo())}), new demos.GalleryDemo.new({title: "Expansion panels", subtitle: "List of expanding panels", icon: icons.GalleryIcons.expand_all, category: demos._kMaterialComponents, routeName: "/material/expansion_panels", documentationUrl: "https://docs.flutter.io/flutter/material/ExpansionPanel-class.html", buildRoute: dart.fn(context => new expansion_panels_demo.ExpansionPanelsDemo.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), BuildContextToExpansionPanelsDemo())}), new demos.GalleryDemo.new({title: "Grid", subtitle: "Row and column layout", icon: icons.GalleryIcons.grid_on, category: demos._kMaterialComponents, routeName: "/material/grid-list", documentationUrl: "https://docs.flutter.io/flutter/widgets/GridView-class.html", buildRoute: dart.fn(context => C20 || CT.C20, BuildContextToGridListDemo())}), new demos.GalleryDemo.new({title: "Icons", subtitle: "Enabled and disabled icons with opacity", icon: icons.GalleryIcons.sentiment_very_satisfied, category: demos._kMaterialComponents, routeName: "/material/icons", documentationUrl: "https://docs.flutter.io/flutter/material/IconButton-class.html", buildRoute: dart.fn(context => new icons_demo.IconsDemo.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), BuildContextToIconsDemo())}), new demos.GalleryDemo.new({title: "Lists", subtitle: "Scrolling list layouts", icon: icons.GalleryIcons.list_alt, category: demos._kMaterialComponents, routeName: "/material/list", documentationUrl: "https://docs.flutter.io/flutter/material/ListTile-class.html", buildRoute: dart.fn(context => C22 || CT.C22, BuildContextToListDemo())}), new demos.GalleryDemo.new({title: "Lists: leave-behind list items", subtitle: "List items with hidden actions", icon: icons.GalleryIcons.lists_leave_behind, category: demos._kMaterialComponents, routeName: "/material/leave-behind", documentationUrl: "https://docs.flutter.io/flutter/widgets/Dismissible-class.html", buildRoute: dart.fn(context => C23 || CT.C23, BuildContextToLeaveBehindDemo())}), new demos.GalleryDemo.new({title: "Lists: reorderable", subtitle: "Reorderable lists", icon: icons.GalleryIcons.list_alt, category: demos._kMaterialComponents, routeName: "/material/reorderable-list", documentationUrl: "https://docs.flutter.io/flutter/material/ReorderableListView-class.html", buildRoute: dart.fn(context => C24 || CT.C24, BuildContextToReorderableListDemo())}), new demos.GalleryDemo.new({title: "Menus", subtitle: "Menu buttons and simple menus", icon: icons.GalleryIcons.more_vert, category: demos._kMaterialComponents, routeName: "/material/menu", documentationUrl: "https://docs.flutter.io/flutter/material/PopupMenuButton-class.html", buildRoute: dart.fn(context => C25 || CT.C25, BuildContextToMenuDemo())}), new demos.GalleryDemo.new({title: "Navigation drawer", subtitle: "Navigation drawer with standard header", icon: icons.GalleryIcons.menu, category: demos._kMaterialComponents, routeName: "/material/drawer", documentationUrl: "https://docs.flutter.io/flutter/material/Drawer-class.html", buildRoute: dart.fn(context => new drawer_demo.DrawerDemo.new({$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), BuildContextToDrawerDemo())}), new demos.GalleryDemo.new({title: "Pagination", subtitle: "PageView with indicator", icon: icons.GalleryIcons.page_control, category: demos._kMaterialComponents, routeName: "/material/page-selector", documentationUrl: "https://docs.flutter.io/flutter/material/TabBarView-class.html", buildRoute: dart.fn(context => new page_selector_demo.PageSelectorDemo.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), BuildContextToPageSelectorDemo())}), new demos.GalleryDemo.new({title: "Pickers", subtitle: "Date and time selection widgets", icon: icons.GalleryIcons.event, category: demos._kMaterialComponents, routeName: "/material/date-and-time-pickers", documentationUrl: "https://docs.flutter.io/flutter/material/showDatePicker.html", buildRoute: dart.fn(context => new date_and_time_picker_demo.DateAndTimePickerDemo.new({$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), BuildContextToDateAndTimePickerDemo())}), new demos.GalleryDemo.new({title: "Progress indicators", subtitle: "Linear, circular, indeterminate", icon: icons.GalleryIcons.progress_activity, category: demos._kMaterialComponents, routeName: "/material/progress-indicator", documentationUrl: "https://docs.flutter.io/flutter/material/LinearProgressIndicator-class.html", buildRoute: dart.fn(context => new progress_indicator_demo.ProgressIndicatorDemo.new({$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), BuildContextToProgressIndicatorDemo())}), new demos.GalleryDemo.new({title: "Pull to refresh", subtitle: "Refresh indicators", icon: icons.GalleryIcons.refresh, category: demos._kMaterialComponents, routeName: "/material/overscroll", documentationUrl: "https://docs.flutter.io/flutter/material/RefreshIndicator-class.html", buildRoute: dart.fn(context => C30 || CT.C30, BuildContextToOverscrollDemo())}), new demos.GalleryDemo.new({title: "Search", subtitle: "Expandable search", icon: icons$.Icons.search, category: demos._kMaterialComponents, routeName: "/material/search", documentationUrl: "https://docs.flutter.io/flutter/material/showSearch.html", buildRoute: dart.fn(context => new search_demo.SearchDemo.new({$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), BuildContextToSearchDemo())}), new demos.GalleryDemo.new({title: "Selection controls", subtitle: "Checkboxes, radio buttons, and switches", icon: icons.GalleryIcons.check_box, category: demos._kMaterialComponents, routeName: "/material/selection", buildRoute: dart.fn(context => new selection_controls_demo.SelectionControlsDemo.new({$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), BuildContextToSelectionControlsDemo())}), new demos.GalleryDemo.new({title: "Sliders", subtitle: "Widgets for selecting a value by swiping", icon: icons.GalleryIcons.sliders, category: demos._kMaterialComponents, routeName: "/material/slider", documentationUrl: "https://docs.flutter.io/flutter/material/Slider-class.html", buildRoute: dart.fn(context => new slider_demo.SliderDemo.new({$creationLocationd_0dea112b090073317d4: C33 || CT.C33}), BuildContextToSliderDemo())}), new demos.GalleryDemo.new({title: "Snackbar", subtitle: "Temporary messaging", icon: icons.GalleryIcons.snackbar, category: demos._kMaterialComponents, routeName: "/material/snack-bar", documentationUrl: "https://docs.flutter.io/flutter/material/ScaffoldState/showSnackBar.html", buildRoute: dart.fn(context => C34 || CT.C34, BuildContextToSnackBarDemo())}), new demos.GalleryDemo.new({title: "Tabs", subtitle: "Tabs with independently scrollable views", icon: icons.GalleryIcons.tabs, category: demos._kMaterialComponents, routeName: "/material/tabs", documentationUrl: "https://docs.flutter.io/flutter/material/TabBarView-class.html", buildRoute: dart.fn(context => new tabs_demo.TabsDemo.new({$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), BuildContextToTabsDemo())}), new demos.GalleryDemo.new({title: "Text", subtitle: "Single-line text and multiline paragraphs", icon: icons$.Icons.text_fields, category: demos._kMaterialComponents, routeName: "/material/text", documentationUrl: "https://docs.flutter.io/flutter/widgets/Text-class.html", buildRoute: dart.fn(context => new text_demo.TextDemo.new({$creationLocationd_0dea112b090073317d4: C36 || CT.C36}), BuildContextToTextDemo())}), new demos.GalleryDemo.new({title: "Text Editing", subtitle: "EditableText with a TextEditingController", icon: icons$.Icons.text_fields, category: demos._kMaterialComponents, routeName: editable_text_demo.EditableTextDemo.routeName, documentationUrl: "https://docs.flutter.io/flutter/widgets/EditableText-class.html", buildRoute: dart.fn(context => new editable_text_demo.EditableTextDemo.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), BuildContextToEditableTextDemo())}), new demos.GalleryDemo.new({title: "Tabs: Scrolling", subtitle: "Tab bar that scrolls", category: demos._kMaterialComponents, icon: icons.GalleryIcons.tabs, routeName: "/material/scrollable-tabs", documentationUrl: "https://docs.flutter.io/flutter/material/TabBar-class.html", buildRoute: dart.fn(context => new scrollable_tabs_demo.ScrollableTabsDemo.new({$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), BuildContextToScrollableTabsDemo())}), new demos.GalleryDemo.new({title: "Text fields", subtitle: "Single line of editable text and numbers", icon: icons.GalleryIcons.text_fields_alt, category: demos._kMaterialComponents, routeName: "/material/text-form-field", documentationUrl: "https://docs.flutter.io/flutter/material/TextFormField-class.html", buildRoute: dart.fn(context => C39 || CT.C39, BuildContextToTextFormFieldDemo())}), new demos.GalleryDemo.new({title: "Tooltips", subtitle: "Short message displayed on long-press", icon: icons.GalleryIcons.tooltip, category: demos._kMaterialComponents, routeName: "/material/tooltips", documentationUrl: "https://docs.flutter.io/flutter/material/Tooltip-class.html", buildRoute: dart.fn(context => new tooltip_demo.TooltipDemo.new({$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), BuildContextToTooltipDemo())})]);
    if (!dart.test(dart.fn(() => {
      galleryDemos[$insert](0, new demos.GalleryDemo.new({title: "Pesto", subtitle: "Simple recipe browser", icon: icons$.Icons.adjust, category: demos._kDemos, routeName: "/pesto", buildRoute: dart.fn(context => C41 || CT.C41, BuildContextToPestoDemo())}));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/gallery/demos.dart", 601, 10, "() {\r\n    galleryDemos.insert(\r\n      0,\r\n      GalleryDemo(\r\n        title: 'Pesto',\r\n        subtitle: 'Simple recipe browser',\r\n        icon: Icons.adjust,\r\n        category: _kDemos,\r\n        routeName: PestoDemo.routeName,\r\n        buildRoute: (BuildContext context) => const PestoDemo(),\r\n      ),\r\n    );\r\n    return true;\r\n  }()");
    return galleryDemos;
  };
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C43;
  let C42;
  let C45;
  let C44;
  let C47;
  let C46;
  dart.defineLazy(demos, {
    /*demos._kDemos*/get _kDemos() {
      return C42 || CT.C42;
    },
    /*demos._kStyle*/get _kStyle() {
      return C44 || CT.C44;
    },
    /*demos._kMaterialComponents*/get _kMaterialComponents() {
      return C46 || CT.C46;
    },
    /*demos.kAllGalleryDemos*/get kAllGalleryDemos() {
      return demos._buildGalleryDemos();
    },
    /*demos.kAllGalleryDemoCategories*/get kAllGalleryDemoCategories() {
      return demos.kAllGalleryDemos[$map](demos.GalleryDemoCategory, dart.fn(demo => demo.category, GalleryDemoToGalleryDemoCategory()))[$toSet]();
    },
    /*demos.kGalleryCategoryToDemos*/get kGalleryCategoryToDemos() {
      return LinkedHashMapOfGalleryDemoCategory$ListOfGalleryDemo().fromIterable(demos.kAllGalleryDemoCategories, {value: dart.fn(category => demos.kAllGalleryDemos[$where](dart.fn(demo => dart.equals(demo.category, category), GalleryDemoTobool()))[$toList](), dynamicToListOfGalleryDemo())});
    },
    /*demos.kDemoDocumentationUrl*/get kDemoDocumentationUrl() {
      return LinkedHashMapOfString$String().fromIterable(demos.kAllGalleryDemos[$where](dart.fn(demo => demo.documentationUrl != null, GalleryDemoTobool())), {key: dart.fn(demo => core.String._check(dart.dload(demo, 'routeName')), dynamicToString()), value: dart.fn(demo => core.String._check(dart.dload(demo, 'documentationUrl')), dynamicToString())});
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/gallery/demos", {
    "package:flutter_web.examples.gallery/gallery/demos.dart": demos
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["demos.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IAEE;;;;;;;UAGU;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,uBAAI,oBAAqB,iBAAN,KAAK,IAAc,MAAO;AACnB,wDAAa,KAAK;AAC5C,YAAO,AAAW,AAAK,AAAQ,WAAd,SAAS,aAAwB,YAAhB,AAAW,UAAD,OAAS;IACvD;;AAGoB,2BAAW,WAAM;IAAK;;AAIxC,YAA4B,UAAnB,sBAAW,eAAE,aAAI;IAC5B;;;QApBkC;QAAW;IAAX;IAAW;;EAAM;;;;;;;;;;;;;;;;;;IA8DtC;;;;;;IACE;;;;;;IACF;;;;;;IACa;;;;;;IACb;;;;;;IACO;;;;;;IACP;;;;;;;AAIX,YAAwC,UAA/B,sBAAW,eAAE,cAAK,eAAE,kBAAS;IACxC;;;QAvBiB;QACA;QACV;QACU;QACA;QACV;QACU;IANA;IACA;IACV;IACU;IACA;IACV;IACU;UACJ,AAAM,KAAD,IAAI;UACT,AAAS,QAAD,IAAI;UACZ,AAAU,SAAD,IAAI;UACb,AAAW,UAAD,IAAI;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBR,uBAA4B,2BAElD,kCACS,6BACG,mDACS,0CACT,mDAEE,QAAc,WAAY,4HAExC,kCACS,oBACG,4BACS,qCACT,iDAEE,QAAc,WAAY,sHAExC,kCACS,uBACG,2BACS,wCACT,oDAEE,QAAc,0DAI5B,kCACS,oBACG,sCACS,qCACT,iDAEE,QAAc,WAAY,sHAExC,kCACS,wBACG,2CACS,gDACT,qDAEE,QAAc,WAAY,kIAGxC,kCACS,sBACG,8CACS,uCACT,yEAEE,QAAc,WAAY,4HAExC,kCACS,4BACG,+CACS,6CACT,qFAGN,gFACQ,QAAc,WAAY,0IAExC,kCACS,+BACG,mDACS,gDACT,wFAGN,uFACQ,QAAc,WAAY,qJAExC,kCACS,iCACG,oCACS,4CACT,yFAGN,kFACQ,QAAc,WAAY,sJAExC,kCACS,sCACG,2CACS,sDACT,uCAC2B,oFAEjC,2FACQ,QAAc,WAAY,uKAExC,kCACS,qBACG,0CACS,8CACT,wEAEE,QAAc,WAAY,mIAExC,kCACS,6CACG,8BACS,sCACT,+EAGN,wFACQ,QAAc,WAAY,4HAExC,kCACS,mBACG,6CACS,oCACT,4EAGN,wEACQ,QAAc,WAAY,qHAExC,kCACS,mBACG,iDACS,oCACT,2EAGN,wEACQ,QAAc,WAAY,kHAExC,kCACS,yBACG,0BACS,yCACT,iFAGN,sFACQ,QAAc,WAAY,kIAExC,kCACS,qBACG,uCACS,sCACT,6EAGN,wEACQ,QAAc,WAAY,wHAExC,kCACS,wBACG,gCAES,iDACT,gFAGN,gFACQ,QAAc,WAAY,iIAExC,kCACS,0CACG,wCACS,yCACT,qFAGN,iFACQ,QAAc,WAAY,4IAExC,kCACS,8BACG,kCACS,yCACT,uFAGN,kFACQ,QAAc,WAAY,oJAExC,kCACS,kBACG,+BACS,sCACT,gFAGN,2EACQ,QAAc,2DAE5B,kCACS,mBACG,iDACS,uDACT,4EAGN,8EACQ,QAAc,WAAY,qHAExC,kCACS,mBACG,gCACS,uCACT,2EAGN,4EACQ,QAAc,uDAE5B,kCACS,4CACG,wCACS,iDACT,mFAGN,8EACQ,QAAc,8DAE5B,kCACS,gCACG,2BACS,uCACT,uFAGN,uFACQ,QAAc,kEAE5B,kCACS,mBACG,uCACS,wCACT,2EAGN,mFACQ,QAAc,uDAE5B,kCACS,+BACG,gDACS,mCACT,6EAGN,0EACQ,QAAc,WAAY,wHAExC,kCACS,wBACG,iCACS,2CACT,oFAGN,8EACQ,QAAc,WAAY,2IAExC,kCACS,qBACG,yCACS,oCACT,4FAGN,4EACQ,QAAc,WAAY,4JAExC,kCACS,iCACG,yCACS,gDACT,yFAGN,2FACQ,QAAc,WAAY,0JAExC,kCACS,6BACG,4BACS,sCACT,iFAGN,oFACQ,QAAc,6DAE5B,kCACS,oBACG,2BACE,+BACF,6EAGN,wEACQ,QAAc,WAAY,wHAExC,kCACS,gCACG,iDACS,wCACT,0EAEE,QAAc,WAAY,0JAExC,kCACS,qBACG,kDACS,sCACT,6EAGN,0EACQ,QAAc,WAAY,wHAExC,kCACS,sBACG,6BACS,uCACT,gFAGN,wFACQ,QAAc,2DAE5B,kCACS,kBACG,kDACS,mCACT,2EAGN,8EACQ,QAAc,WAAY,kHAExC,kCACS,kBACG,mDACE,oCACF,2EAGN,uEACQ,QAAc,WAAY,kHAExC,kCACS,0BACG,mDACE,oCACF,uCACkB,iEAExB,+EACQ,QAAc,WAAY,2IAExC,kCACS,6BACG,kCACA,kCACS,mFAGf,0EACQ,QAAc,WAAY,iJAExC,kCACS,yBACG,kDACS,8CACT,sFAGN,iFACQ,QAAc,gEAE5B,kCACS,sBACG,+CACS,sCACT,+EAGN,2EACQ,QAAc,WAAY;AA2H1C,mBAAO,AAaN;AAFE,MAVD,AAAa,YAAD,UACV,GACA,kCACS,mBACG,+BACE,+BACF,gDAEE,QAAc;AAG9B,YAAO;;AAGT,UAAO,aAAY;EACrB;;;;;;;;;;;;MArkB0B,aAAO;;;MAKP,aAAO;;;MAUP,0BAAoB;;;MAwjBtB,sBAAgB;YAAG;;MAEZ,+BAAyB;YAAG,AACtD,AACA,yDADyB,QAAa,QAAS,AAAK,IAAD;;MAGN,6BAAuB;YAAC,qEAExE,yCACO,QAAS,YACP,AACF,AACA,+BADM,QAAa,QAAuB,YAAd,AAAK,IAAD,WAAa,QAAQ;;MAKpC,2BAAqB;YAAC,6CAE9C,AAAiB,+BAAM,QAAa,QAAS,AAAK,AAAiB,IAAlB,qBAAqB,mCACjE,QAAS,QAAS,mBAAK,WAAL,IAAI,4CACpB,QAAS,QAAS,mBAAK,WAAL,IAAI","file":"demos.ddc.js"}');
  // Exports:
  return {
    gallery__demos: demos
  };
});

//# sourceMappingURL=demos.ddc.js.map
