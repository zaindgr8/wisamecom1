"use strict";
(() => {
var exports = {};
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 3329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/checkout/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./node_modules/use-shopping-cart/utilities/serverless.js
var serverless = __webpack_require__(56966);
;// CONCATENATED MODULE: ./config/inventory.ts
const inventory = [
    {
        id: "64da6006-a4bb-4555-af78-3467853eb75e",
        sku: "canvas_tote_bag_1",
        name: "Canvas Tote Bag",
        description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
        price: 16800,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-1.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-2.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/canvas-tote-bag-3.jpg"
        ],
        sizes: [
            "one-size"
        ],
        categories: [
            "bags"
        ],
        colors: [
            "brown"
        ],
        currency: "USD"
    },
    {
        id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
        sku: "khaki_tote_bag_1",
        name: "Khaki Tote Bag",
        description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
        price: 14500,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-1.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-2.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/khaki-tote-bag-3.jpg"
        ],
        sizes: [
            "one-size"
        ],
        categories: [
            "bags"
        ],
        colors: [
            "blue"
        ],
        currency: "USD"
    },
    {
        id: "e882fe48-253c-40fb-8155-51b47b063c1a",
        sku: "braided_leather_belt_1",
        name: "Braided Leather Belt",
        description: `These handsome leather belts are guaranteed to pull together any outfit. They're made of vegetable-tanned Italian leather, which means they have natural highs and lows of color and will look even better over time.`,
        price: 4999,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/braided-leather-belt.jpg"
        ],
        sizes: [
            "s",
            "m",
            "l",
            "xl"
        ],
        categories: [
            "belts"
        ],
        colors: [
            "brown"
        ],
        currency: "USD"
    },
    {
        id: "6853a582-fc95-44af-9dac-dffbc694b47d",
        sku: "woolblend_suit_belt_1",
        name: "Wool-Blend Suit Belt",
        description: `This handsome belt will pull together any outfit. The strong materials will take on your wear patterns and look even better over time.`,
        price: 5599,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/woolblend-suit-belt-1.jpg"
        ],
        sizes: [
            "s",
            "m",
            "l",
            "xl"
        ],
        categories: [
            "belts"
        ],
        colors: [
            "black"
        ],
        currency: "USD"
    },
    {
        id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
        sku: "wool_scarf_1",
        name: "Wool Scarf",
        description: `Crafted in the finest English wool from the Abraham Moon mill (established in 1837), this scarf is an elegant and cozy addition to your winter wardrobe.`,
        price: 6199,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg"
        ],
        sizes: [
            "one-size"
        ],
        categories: [
            "scarves"
        ],
        colors: [
            "green"
        ],
        currency: "USD"
    },
    {
        id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
        sku: "leather_gloves_1",
        name: "Leather Gloves",
        description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
        price: 9800,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg"
        ],
        sizes: [
            "s",
            "m",
            "l",
            "xl"
        ],
        categories: [
            "gloves"
        ],
        colors: [
            "brown"
        ],
        currency: "USD"
    },
    {
        id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
        sku: "down_mittens_1",
        name: "Down Mittens",
        description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
        price: 13999,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg"
        ],
        sizes: [
            "s",
            "m",
            "l",
            "xl"
        ],
        categories: [
            "gloves"
        ],
        colors: [
            "black"
        ],
        currency: "USD"
    },
    {
        id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
        sku: "brooks_sunglasses_1",
        name: "Brooks Sunglasses",
        description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
        price: 42000,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg"
        ],
        sizes: [
            "one-size"
        ],
        categories: [
            "sunglasses"
        ],
        colors: [
            "yellow"
        ],
        currency: "USD"
    },
    {
        id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
        sku: "dock_sunglasses_1",
        name: "Dock Sunglasses",
        description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won't break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
        price: 5599,
        image: "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
        images: [
            "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg"
        ],
        sizes: [
            "one-size"
        ],
        categories: [
            "sunglasses"
        ],
        colors: [
            "black"
        ],
        currency: "USD"
    }
];

// EXTERNAL MODULE: ./lib/stripe.ts
var stripe = __webpack_require__(14860);
;// CONCATENATED MODULE: ./app/api/checkout/route.ts

// @ts-ignore



async function POST(request) {
    const cartDetails = await request.json();
    const lineItems = (0,serverless.validateCartItems)(inventory, cartDetails);
    const origin = request.headers.get("origin");
    const session = await stripe/* stripe.checkout.sessions.create */.A.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: [
            "card"
        ],
        line_items: lineItems,
        shipping_address_collection: {
            allowed_countries: [
                "US"
            ]
        },
        shipping_options: [
            {
                shipping_rate: "shr_1NuYRwD1nFTBLvpyQIOe7bVs"
            }
        ],
        billing_address_collection: "auto",
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`
    });
    return next_response/* default.json */.Z.json(session);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcheckout%2Froute&name=app%2Fapi%2Fcheckout%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fzainulabideen%2FDownloads%2F_Software%20Journey%2FPIAIC-%202023%2FHackaton%2Fecom_Hackaton_2%2Fecommerce-app%2Fapp&appPaths=%2Fapi%2Fcheckout%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/checkout",
    resolvedPagePath: "/Users/zainulabideen/Downloads/_Software Journey/PIAIC- 2023/Hackaton/ecom_Hackaton_2/ecommerce-app/app/api/checkout/route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/checkout/route"

    

/***/ }),

/***/ 14860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ stripe)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88128);

const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15"
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [683,128,996], () => (__webpack_exec__(3329)));
module.exports = __webpack_exports__;

})();