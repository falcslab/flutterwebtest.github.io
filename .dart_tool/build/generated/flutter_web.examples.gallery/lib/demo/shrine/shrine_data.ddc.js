define(['dart_sdk', 'packages/flutter_web.examples.gallery/demo/shrine/shrine_types'], function(dart_sdk, packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shrine_types = packages__flutter_web$46examples$46gallery__demo__shrine__shrine_types.demo__shrine__shrine_types;
  const shrine_data = Object.create(dart.library);
  const $every = dartx.every;
  let ProductTobool = () => (ProductTobool = dart.constFn(dart.fnType(core.bool, [shrine_types.Product])))();
  let ListOfProduct = () => (ListOfProduct = dart.constFn(core.List$(shrine_types.Product)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: shrine_types.Vendor.prototype,
        [Vendor_avatarAssetPackage]: null,
        [Vendor_avatarAsset]: "people/square/ali.png",
        [Vendor_description]: "Ali Connor’s makes custom goods for folks of all shapes and sizes made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.",
        [Vendor_name]: "Ali’s shop"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: shrine_types.Vendor.prototype,
        [Vendor_avatarAssetPackage]: null,
        [Vendor_avatarAsset]: "people/square/peter.png",
        [Vendor_description]: "Peter makes great stuff for awesome people like you. Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.",
        [Vendor_name]: "Peter’s shop"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: shrine_types.Vendor.prototype,
        [Vendor_avatarAssetPackage]: null,
        [Vendor_avatarAsset]: "people/square/sandra.png",
        [Vendor_description]: "Sandra specializes in furniture, beauty and travel products with a classic vibe. Custom orders are available if you’re looking for a certain color or material.",
        [Vendor_name]: "Sandra’s shop"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: shrine_types.Vendor.prototype,
        [Vendor_avatarAssetPackage]: null,
        [Vendor_avatarAsset]: "people/square/stella.png",
        [Vendor_description]: "Stella sells awesome stuff at lovely prices. made by hand and sometimes by machine, but always with love and care. Custom orders are available upon request if you need something extra special.",
        [Vendor_name]: "Stella’s shop"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: shrine_types.Vendor.prototype,
        [Vendor_avatarAssetPackage]: null,
        [Vendor_avatarAsset]: "people/square/trevor.png",
        [Vendor_description]: "Trevor makes great stuff for awesome people like you. Super cool and extra awesome all of his shop’s goods are handmade with love. Custom orders are available upon request if you need something extra special.",
        [Vendor_name]: "Trevor’s shop"
      });
    },
    get C7() {
      return C7 = dart.constList(["fashion", "latest"], core.String);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C2 || CT.C2,
        [Product_price]: 300,
        [Product_categories]: C7 || CT.C7,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/belt.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Isn’t it cool when things look old, but they're not. Looks Old But Not makes awesome vintage goods that are super smart. This ol’ belt just got an upgrade. ",
        [Product_name]: "Vintage Brown Belt"
      });
    },
    get C9() {
      return C9 = dart.constList(["travel", "fashion", "beauty"], core.String);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C4 || CT.C4,
        [Product_price]: 20,
        [Product_categories]: C9 || CT.C9,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/sunnies.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Be an optimist. Carry Sunglasses with you at all times. All Tints and Shades products come with polarized lenses and super duper UV protection so you can look at the sun for however long you want. Sunglasses make you look cool, wear them.",
        [Product_name]: "Sunglasses"
      });
    },
    get C11() {
      return C11 = dart.constList(["furniture"], core.String);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C4 || CT.C4,
        [Product_price]: 30,
        [Product_categories]: C11 || CT.C11,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/flatwear.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Flatwear"
      });
    },
    get C13() {
      return C13 = dart.constList(["fashion"], core.String);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C3 || CT.C3,
        [Product_price]: 300,
        [Product_categories]: C13 || CT.C13,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/sweater.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Looks can be deceiving. This sweater comes in a wide variety of flavors, including salmon, that pop as soon as they hit your eyes. Sweaters heat quickly, so savor the warmth.",
        [Product_name]: "Salmon Sweater"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C3 || CT.C3,
        [Product_price]: 63,
        [Product_categories]: C11 || CT.C11,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/table.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Pine Table"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C0 || CT.C0,
        [Product_price]: 36,
        [Product_categories]: C13 || CT.C13,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/jacket.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Green Comfort Jacket"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C1 || CT.C1,
        [Product_price]: 125,
        [Product_categories]: C13 || CT.C13,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/top.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Chambray Top"
      });
    },
    get C18() {
      return C18 = dart.constList(["travel", "furniture"], core.String);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C2 || CT.C2,
        [Product_price]: 75,
        [Product_categories]: C18 || CT.C18,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/cup.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Drinksy has been making extraordinary mugs for decades. With each cup purchased Drinksy donates a cup to those in need. Buy yourself a mug, buy someone else a mug.",
        [Product_name]: "Blue Cup"
      });
    },
    get C20() {
      return C20 = dart.constList(["furniture", "fashion"], core.String);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C4 || CT.C4,
        [Product_price]: 70,
        [Product_categories]: C20 || CT.C20,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/teaset.png",
        [Product_featureDescription]: "Teapot holds extremely hot liquids and pours them from the spout.",
        [Product_featureTitle]: "Beautiful glass teapot",
        [Product_description]: "Impress your guests with Tea Set by Kitchen Stuff. Teapot holds extremely hot liquids and pours them from the spout. Use the handle, shown on the right, so your fingers don’t get burnt while pouring.",
        [Product_name]: "Tea Set"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C4 || CT.C4,
        [Product_price]: 89,
        [Product_categories]: C20 || CT.C20,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/napkins.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Blue linen napkins were meant to go with friends, so you may want to pick up a bunch of these. These things are absorbant.",
        [Product_name]: "Blue linen napkins"
      });
    },
    get C23() {
      return C23 = dart.constList(["fashion", "beauty"], core.String);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C3 || CT.C3,
        [Product_price]: 25,
        [Product_categories]: C23 || CT.C23,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/earrings.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "WeDipIt does it again. These hand-dipped 4 inch earrings are perfect for the office or the beach. Just be sure you don’t drop it in a bucket of red paint, then they won’t look dipped anymore.",
        [Product_name]: "Dipped Earrings"
      });
    },
    get C25() {
      return C25 = dart.constList(["latest", "furniture"], core.String);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C0 || CT.C0,
        [Product_price]: 30,
        [Product_categories]: C25 || CT.C25,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/planters.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "The Perfect Planter Co makes the best vessels for just about anything you can pot. This set of Perfect Planters holds succulents and cuttings perfectly. Looks great in any room. Keep out of reach from cats.",
        [Product_name]: "Perfect Planters"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C2 || CT.C2,
        [Product_price]: 54,
        [Product_categories]: C13 || CT.C13,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/dress.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Trying to find the perfect outift to match your mood? Try no longer. This Cloud-White Dress has you covered for those nights when you need to get out, or even if you’re just headed to work.",
        [Product_name]: "Cloud-White Dress"
      });
    },
    get C28() {
      return C28 = dart.constList(["travel", "fashion"], core.String);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C1 || CT.C1,
        [Product_price]: 25,
        [Product_categories]: C28 || CT.C28,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/backpack.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "This backpack by Bags ‘n’ stuff can hold just about anything: a laptop, a pen, a protractor, notebooks, small animals, plugs for your devices, sunglasses, gym clothes, shoes, gloves, two kittens, and even lunch!",
        [Product_name]: "Backpack"
      });
    },
    get C30() {
      return C30 = dart.constList(["travel", "fashion", "latest"], core.String);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C0 || CT.C0,
        [Product_price]: 25,
        [Product_categories]: C30 || CT.C30,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/hat.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "This is the  helmet for those warm summer days on the road. Jetset approved, these hats have been rigorously tested. Keep that face protected from the sun.",
        [Product_name]: "Charcoal Straw Hat"
      });
    },
    get C32() {
      return C32 = dart.constList(["latest", "fashion"], core.String);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C1 || CT.C1,
        [Product_price]: 17,
        [Product_categories]: C32 || CT.C32,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/scarf.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Ginger Scarf"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C3 || CT.C3,
        [Product_price]: 25,
        [Product_categories]: C30 || CT.C30,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/sweats.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Blush Sweats"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C1 || CT.C1,
        [Product_price]: 25,
        [Product_categories]: C9 || CT.C9,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/jumper.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Mint Jumper"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: shrine_types.Product.prototype,
        [Product_vendor]: C3 || CT.C3,
        [Product_price]: 120,
        [Product_categories]: C7 || CT.C7,
        [Product_imageAssetPackage]: null,
        [Product_imageAsset]: "products/shirt.png",
        [Product_featureDescription]: null,
        [Product_featureTitle]: null,
        [Product_description]: "Leave the tunnel and the rain is fallin amazing things happen when you wait",
        [Product_name]: "Ochre Shirt"
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C8 || CT.C8, C10 || CT.C10, C12 || CT.C12, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C19 || CT.C19, C21 || CT.C21, C22 || CT.C22, C24 || CT.C24, C26 || CT.C26, C27 || CT.C27, C29 || CT.C29, C31 || CT.C31, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], shrine_types.Product);
    }
  });
  shrine_data.allProducts = function allProducts() {
    if (!dart.test(shrine_data._allProducts[$every](dart.fn(product => product.isValid(), ProductTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/shrine/shrine_data.dart", 252, 10, "_allProducts.every((Product product) => product.isValid())");
    return ListOfProduct().unmodifiable(shrine_data._allProducts);
  };
  const Vendor_avatarAssetPackage = dart.privateName(shrine_types, "Vendor.avatarAssetPackage");
  const Vendor_avatarAsset = dart.privateName(shrine_types, "Vendor.avatarAsset");
  const Vendor_description = dart.privateName(shrine_types, "Vendor.description");
  const Vendor_name = dart.privateName(shrine_types, "Vendor.name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  const Product_vendor = dart.privateName(shrine_types, "Product.vendor");
  const Product_price = dart.privateName(shrine_types, "Product.price");
  let C7;
  const Product_categories = dart.privateName(shrine_types, "Product.categories");
  const Product_imageAssetPackage = dart.privateName(shrine_types, "Product.imageAssetPackage");
  const Product_imageAsset = dart.privateName(shrine_types, "Product.imageAsset");
  const Product_featureDescription = dart.privateName(shrine_types, "Product.featureDescription");
  const Product_featureTitle = dart.privateName(shrine_types, "Product.featureTitle");
  const Product_description = dart.privateName(shrine_types, "Product.description");
  const Product_name = dart.privateName(shrine_types, "Product.name");
  let C6;
  let C9;
  let C8;
  let C11;
  let C10;
  let C13;
  let C12;
  let C14;
  let C15;
  let C16;
  let C18;
  let C17;
  let C20;
  let C19;
  let C21;
  let C23;
  let C22;
  let C25;
  let C24;
  let C26;
  let C28;
  let C27;
  let C30;
  let C29;
  let C32;
  let C31;
  let C33;
  let C34;
  let C35;
  let C5;
  dart.defineLazy(shrine_data, {
    /*shrine_data._kGalleryAssetsPackage*/get _kGalleryAssetsPackage() {
      return null;
    },
    /*shrine_data._ali*/get _ali() {
      return C0 || CT.C0;
    },
    /*shrine_data._peter*/get _peter() {
      return C1 || CT.C1;
    },
    /*shrine_data._sandra*/get _sandra() {
      return C2 || CT.C2;
    },
    /*shrine_data._stella*/get _stella() {
      return C3 || CT.C3;
    },
    /*shrine_data._trevor*/get _trevor() {
      return C4 || CT.C4;
    },
    /*shrine_data._allProducts*/get _allProducts() {
      return C5 || CT.C5;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/shrine/shrine_data", {
    "package:flutter_web.examples.gallery/demo/shrine/shrine_data.dart": shrine_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shrine_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2PE,mBAAO,AAAa,iCAAM,QAAS,WAAY,AAAQ,OAAD;AACtD,wCAAkC;EACpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAvPa,kCAAsB;;;MAEtB,gBAAI;;;MASJ,kBAAM;;;MASN,mBAAO;;;MAQP,mBAAO;;;MASP,mBAAO;;;MASA,wBAAY","file":"shrine_data.ddc.js"}');
  // Exports:
  return {
    demo__shrine__shrine_data: shrine_data
  };
});

//# sourceMappingURL=shrine_data.ddc.js.map
