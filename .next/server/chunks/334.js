"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 7112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ shimmer),
/* harmony export */   "s": () => (/* binding */ toBase64)
/* harmony export */ });
const shimmer = (w, h)=>`
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e5e7eb" offset="20%" />
      <stop stop-color="#d2d4d7" offset="50%" />
      <stop stop-color="#e5e7eb" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e5e7eb" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
const toBase64 = (str)=> true ? Buffer.from(str).toString("base64") : 0;


/***/ }),

/***/ 1852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sx": () => (/* binding */ projectId),
/* harmony export */   "gx": () => (/* binding */ dataset),
/* harmony export */   "tW": () => (/* binding */ apiVersion)
/* harmony export */ });
/* unused harmony export useCdn */
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


/***/ }),

/***/ 54896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ urlForImage)
/* harmony export */ });
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69361);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1852);


const imageBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()({
    projectId: _env__WEBPACK_IMPORTED_MODULE_0__/* .projectId */ .Sx || "",
    dataset: _env__WEBPACK_IMPORTED_MODULE_0__/* .dataset */ .gx || ""
});
const urlForImage = (source)=>{
    return imageBuilder?.image(source).auto("format").fit("max");
};


/***/ })

};
;