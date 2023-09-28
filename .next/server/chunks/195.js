"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 62195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client)
});

// EXTERNAL MODULE: ./node_modules/next-sanity/dist/index.cjs
var dist = __webpack_require__(62010);
;// CONCATENATED MODULE: ./sanity/env.ts
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-12";
const dataset = assertValue("production", "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
const projectId = assertValue("47i21aks", "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
const useCdn = false;
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}

;// CONCATENATED MODULE: ./sanity/lib/client.ts


const client = (0,dist/* createClient */.eI)({
    apiVersion: apiVersion,
    dataset: dataset,
    projectId: projectId,
    useCdn: useCdn
});


/***/ })

};
;