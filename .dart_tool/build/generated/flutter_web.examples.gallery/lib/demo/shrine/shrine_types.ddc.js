define(['dart_sdk', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const shrine_types = Object.create(dart.library);
  const $floor = dartx.floor;
  const $isNotEmpty = dartx.isNotEmpty;
  const $runtimeType = dartx.runtimeType;
  const CT = Object.create(null);
  const name$ = dart.privateName(shrine_types, "Vendor.name");
  const description$ = dart.privateName(shrine_types, "Vendor.description");
  const avatarAsset$ = dart.privateName(shrine_types, "Vendor.avatarAsset");
  const avatarAssetPackage$ = dart.privateName(shrine_types, "Vendor.avatarAssetPackage");
  shrine_types.Vendor = class Vendor extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get avatarAsset() {
      return this[avatarAsset$];
    }
    set avatarAsset(value) {
      super.avatarAsset = value;
    }
    get avatarAssetPackage() {
      return this[avatarAssetPackage$];
    }
    set avatarAssetPackage(value) {
      super.avatarAssetPackage = value;
    }
    isValid() {
      return this.name != null && this.description != null && this.avatarAsset != null;
    }
    toString() {
      return "Vendor(" + dart.str(this.name) + ")";
    }
  };
  (shrine_types.Vendor.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let avatarAsset = opts && 'avatarAsset' in opts ? opts.avatarAsset : null;
    let avatarAssetPackage = opts && 'avatarAssetPackage' in opts ? opts.avatarAssetPackage : null;
    this[name$] = name;
    this[description$] = description;
    this[avatarAsset$] = avatarAsset;
    this[avatarAssetPackage$] = avatarAssetPackage;
    ;
  }).prototype = shrine_types.Vendor.prototype;
  dart.addTypeTests(shrine_types.Vendor);
  dart.setMethodSignature(shrine_types.Vendor, () => ({
    __proto__: dart.getMethods(shrine_types.Vendor.__proto__),
    isValid: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(shrine_types.Vendor, "package:flutter_web.examples.gallery/demo/shrine/shrine_types.dart");
  dart.setFieldSignature(shrine_types.Vendor, () => ({
    __proto__: dart.getFields(shrine_types.Vendor.__proto__),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    avatarAsset: dart.finalFieldType(core.String),
    avatarAssetPackage: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(shrine_types.Vendor, ['toString']);
  const name$0 = dart.privateName(shrine_types, "Product.name");
  const description$0 = dart.privateName(shrine_types, "Product.description");
  const featureTitle$ = dart.privateName(shrine_types, "Product.featureTitle");
  const featureDescription$ = dart.privateName(shrine_types, "Product.featureDescription");
  const imageAsset$ = dart.privateName(shrine_types, "Product.imageAsset");
  const imageAssetPackage$ = dart.privateName(shrine_types, "Product.imageAssetPackage");
  const categories$ = dart.privateName(shrine_types, "Product.categories");
  const price$ = dart.privateName(shrine_types, "Product.price");
  const vendor$ = dart.privateName(shrine_types, "Product.vendor");
  shrine_types.Product = class Product extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description$0];
    }
    set description(value) {
      super.description = value;
    }
    get featureTitle() {
      return this[featureTitle$];
    }
    set featureTitle(value) {
      super.featureTitle = value;
    }
    get featureDescription() {
      return this[featureDescription$];
    }
    set featureDescription(value) {
      super.featureDescription = value;
    }
    get imageAsset() {
      return this[imageAsset$];
    }
    set imageAsset(value) {
      super.imageAsset = value;
    }
    get imageAssetPackage() {
      return this[imageAssetPackage$];
    }
    set imageAssetPackage(value) {
      super.imageAssetPackage = value;
    }
    get categories() {
      return this[categories$];
    }
    set categories(value) {
      super.categories = value;
    }
    get price() {
      return this[price$];
    }
    set price(value) {
      super.price = value;
    }
    get vendor() {
      return this[vendor$];
    }
    set vendor(value) {
      super.vendor = value;
    }
    get tag() {
      return this.name;
    }
    get priceString() {
      return "$" + dart.str(this.price[$floor]());
    }
    isValid() {
      return this.name != null && this.description != null && this.imageAsset != null && this.categories != null && dart.test(this.categories[$isNotEmpty]) && this.price != null && dart.test(this.vendor.isValid());
    }
    toString() {
      return "Product(" + dart.str(this.name) + ")";
    }
  };
  (shrine_types.Product.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let featureTitle = opts && 'featureTitle' in opts ? opts.featureTitle : null;
    let featureDescription = opts && 'featureDescription' in opts ? opts.featureDescription : null;
    let imageAsset = opts && 'imageAsset' in opts ? opts.imageAsset : null;
    let imageAssetPackage = opts && 'imageAssetPackage' in opts ? opts.imageAssetPackage : null;
    let categories = opts && 'categories' in opts ? opts.categories : null;
    let price = opts && 'price' in opts ? opts.price : null;
    let vendor = opts && 'vendor' in opts ? opts.vendor : null;
    this[name$0] = name;
    this[description$0] = description;
    this[featureTitle$] = featureTitle;
    this[featureDescription$] = featureDescription;
    this[imageAsset$] = imageAsset;
    this[imageAssetPackage$] = imageAssetPackage;
    this[categories$] = categories;
    this[price$] = price;
    this[vendor$] = vendor;
    ;
  }).prototype = shrine_types.Product.prototype;
  dart.addTypeTests(shrine_types.Product);
  dart.setMethodSignature(shrine_types.Product, () => ({
    __proto__: dart.getMethods(shrine_types.Product.__proto__),
    isValid: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(shrine_types.Product, () => ({
    __proto__: dart.getGetters(shrine_types.Product.__proto__),
    tag: core.String,
    priceString: core.String
  }));
  dart.setLibraryUri(shrine_types.Product, "package:flutter_web.examples.gallery/demo/shrine/shrine_types.dart");
  dart.setFieldSignature(shrine_types.Product, () => ({
    __proto__: dart.getFields(shrine_types.Product.__proto__),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    featureTitle: dart.finalFieldType(core.String),
    featureDescription: dart.finalFieldType(core.String),
    imageAsset: dart.finalFieldType(core.String),
    imageAssetPackage: dart.finalFieldType(core.String),
    categories: dart.finalFieldType(core.List$(core.String)),
    price: dart.finalFieldType(core.double),
    vendor: dart.finalFieldType(shrine_types.Vendor)
  }));
  dart.defineExtensionMethods(shrine_types.Product, ['toString']);
  const product$ = dart.privateName(shrine_types, "Order.product");
  const quantity$ = dart.privateName(shrine_types, "Order.quantity");
  const inCart$ = dart.privateName(shrine_types, "Order.inCart");
  shrine_types.Order = class Order extends core.Object {
    get product() {
      return this[product$];
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
    get inCart() {
      return this[inCart$];
    }
    set inCart(value) {
      super.inCart = value;
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let product = opts && 'product' in opts ? opts.product : null;
      let quantity = opts && 'quantity' in opts ? opts.quantity : null;
      let inCart = opts && 'inCart' in opts ? opts.inCart : null;
      return new shrine_types.Order.new({product: (t0 = product, t0 == null ? this.product : t0), quantity: (t0$ = quantity, t0$ == null ? this.quantity : t0$), inCart: (t0$0 = inCart, t0$0 == null ? this.inCart : t0$0)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = shrine_types.Order._check(other);
      return dart.equals(this.product, typedOther.product) && this.quantity == typedOther.quantity && dart.equals(this.inCart, typedOther.inCart);
    }
    get hashCode() {
      return ui.hashValues(this.product, this.quantity, this.inCart);
    }
    toString() {
      return "Order(" + dart.str(this.product) + ", quantity=" + dart.str(this.quantity) + ", inCart=" + dart.str(this.inCart) + ")";
    }
  };
  (shrine_types.Order.new = function(opts) {
    let product = opts && 'product' in opts ? opts.product : null;
    let quantity = opts && 'quantity' in opts ? opts.quantity : 1;
    let inCart = opts && 'inCart' in opts ? opts.inCart : false;
    this[product$] = product;
    this[quantity$] = quantity;
    this[inCart$] = inCart;
    if (!(product != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_types.dart", 70, 16, "product != null");
    if (!(quantity != null && dart.notNull(quantity) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_types.dart", 71, 16, "quantity != null && quantity >= 0");
    if (!(inCart != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_types.dart", 72, 16, "inCart != null");
    ;
  }).prototype = shrine_types.Order.prototype;
  dart.addTypeTests(shrine_types.Order);
  dart.setMethodSignature(shrine_types.Order, () => ({
    __proto__: dart.getMethods(shrine_types.Order.__proto__),
    copyWith: dart.fnType(shrine_types.Order, [], {inCart: core.bool, product: shrine_types.Product, quantity: core.int}, {})
  }));
  dart.setLibraryUri(shrine_types.Order, "package:flutter_web.examples.gallery/demo/shrine/shrine_types.dart");
  dart.setFieldSignature(shrine_types.Order, () => ({
    __proto__: dart.getFields(shrine_types.Order.__proto__),
    product: dart.finalFieldType(shrine_types.Product),
    quantity: dart.finalFieldType(core.int),
    inCart: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(shrine_types.Order, ['_equals', 'toString']);
  dart.defineExtensionAccessors(shrine_types.Order, ['hashCode']);
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/shrine/shrine_types", {
    "package:flutter_web.examples.gallery/demo/shrine/shrine_types.dart": shrine_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAee;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAGX,YAAO,AAAoC,cAA5B,QAAQ,oBAAe,QAAQ,oBAAe;IAC/D;;AAGqB,YAAA,AAAe,sBAAN,aAAI;IAAE;;;QAhB7B;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;IA2BW;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACM;;;;;;IACN;;;;;;IACA;;;;;;;AAEK;IAAI;;AACI,YAAA,AAAoB,gBAAf,AAAM;IAAS;;AAG5C,YAAO,AAKW,cALH,QACX,oBAAe,QACf,mBAAc,QACd,mBAAc,kBACd,AAAW,iCACX,cAAS,kBACT,AAAO;IACb;;AAGqB,YAAA,AAAgB,uBAAN,aAAI;IAAE;;;QAlC3B;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IARC;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmCH;;;;;;IACJ;;;;;;IACC;;;;;;;;UAEa;UAAa;UAAe;AAClD,YAAO,uCACc,KAAR,OAAO,QAAP,OAAgB,+BACN,MAAT,QAAQ,SAAR,OAAiB,+BACZ,OAAP,MAAM,UAAN,OAAe;IAC7B;;UAGyB;AACvB,UAAI,AAAU,SAAM,KAAK,EAAG,MAAO;AACnC,uBAAU,iBAAN,KAAK,GAAgB,qBAAa,MAAO;AACjC,iDAAa,KAAK;AAC9B,YAAe,AACqB,aAD7B,cAAW,AAAW,UAAD,aACxB,AAAS,iBAAG,AAAW,UAAD,aACf,YAAP,aAAU,AAAW,UAAD;IAC1B;;AAGoB,2BAAW,cAAS,eAAU;IAAO;;AAGpC,YAAA,AAAqD,qBAA7C,gBAAO,yBAAY,iBAAQ,uBAAU,eAAM;IAAE;;;QA9BpD;QAAc;QAAmB;IAAjC;IAAc;IAAmB;UAC1C,AAAQ,OAAD,IAAI;UACX,AAAiB,QAAT,IAAI,QAAiB,aAAT,QAAQ,KAAI;UAChC,AAAO,MAAD,IAAI;;EAAK","file":"shrine_types.ddc.js"}');
  // Exports:
  return {
    demo__shrine__shrine_types: shrine_types
  };
});

//# sourceMappingURL=shrine_types.ddc.js.map
