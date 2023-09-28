"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 24870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageUrlBuilder = void 0;
var urlForImage_1 = __importStar(__webpack_require__(31170));
var validFits = ['clip', 'crop', 'fill', 'fillmax', 'max', 'scale', 'min'];
var validCrops = ['top', 'bottom', 'left', 'right', 'center', 'focalpoint', 'entropy'];
var validAutoModes = ['format'];
function isSanityModernClientLike(client) {
    return client && 'config' in client ? typeof client.config === 'function' : false;
}
function isSanityClientLike(client) {
    return client && 'clientConfig' in client ? typeof client.clientConfig === 'object' : false;
}
function rewriteSpecName(key) {
    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
        var entry = specs_1[_i];
        var specName = entry[0], param = entry[1];
        if (key === specName || key === param) {
            return specName;
        }
    }
    return key;
}
function urlBuilder(options) {
    // Did we get a modernish client?
    if (isSanityModernClientLike(options)) {
        // Inherit config from client
        var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
        var apiHost = apiUrl || 'https://api.sanity.io';
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
            projectId: projectId,
            dataset: dataset,
        });
    }
    // Did we get a SanityClient?
    var client = options;
    if (isSanityClientLike(client)) {
        // Inherit config from client
        var _b = client.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
        var apiHost = apiUrl || 'https://api.sanity.io';
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
            projectId: projectId,
            dataset: dataset,
        });
    }
    // Or just accept the options as given
    return new ImageUrlBuilder(null, options);
}
exports["default"] = urlBuilder;
var ImageUrlBuilder = /** @class */ (function () {
    function ImageUrlBuilder(parent, options) {
        this.options = parent
            ? __assign(__assign({}, (parent.options || {})), (options || {})) : __assign({}, (options || {})); // Copy options
    }
    ImageUrlBuilder.prototype.withOptions = function (options) {
        var baseUrl = options.baseUrl || this.options.baseUrl;
        var newOptions = { baseUrl: baseUrl };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                var specKey = rewriteSpecName(key);
                newOptions[specKey] = options[key];
            }
        }
        return new ImageUrlBuilder(this, __assign({ baseUrl: baseUrl }, newOptions));
    };
    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
    // studio, the 'image'-document must be provided.
    ImageUrlBuilder.prototype.image = function (source) {
        return this.withOptions({ source: source });
    };
    // Specify the dataset
    ImageUrlBuilder.prototype.dataset = function (dataset) {
        return this.withOptions({ dataset: dataset });
    };
    // Specify the projectId
    ImageUrlBuilder.prototype.projectId = function (projectId) {
        return this.withOptions({ projectId: projectId });
    };
    // Specify background color
    ImageUrlBuilder.prototype.bg = function (bg) {
        return this.withOptions({ bg: bg });
    };
    // Set DPR scaling factor
    ImageUrlBuilder.prototype.dpr = function (dpr) {
        // A DPR of 1 is the default - so only include it if we have a different value
        return this.withOptions(dpr && dpr !== 1 ? { dpr: dpr } : {});
    };
    // Specify the width of the image in pixels
    ImageUrlBuilder.prototype.width = function (width) {
        return this.withOptions({ width: width });
    };
    // Specify the height of the image in pixels
    ImageUrlBuilder.prototype.height = function (height) {
        return this.withOptions({ height: height });
    };
    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
    ImageUrlBuilder.prototype.focalPoint = function (x, y) {
        return this.withOptions({ focalPoint: { x: x, y: y } });
    };
    ImageUrlBuilder.prototype.maxWidth = function (maxWidth) {
        return this.withOptions({ maxWidth: maxWidth });
    };
    ImageUrlBuilder.prototype.minWidth = function (minWidth) {
        return this.withOptions({ minWidth: minWidth });
    };
    ImageUrlBuilder.prototype.maxHeight = function (maxHeight) {
        return this.withOptions({ maxHeight: maxHeight });
    };
    ImageUrlBuilder.prototype.minHeight = function (minHeight) {
        return this.withOptions({ minHeight: minHeight });
    };
    // Specify width and height in pixels
    ImageUrlBuilder.prototype.size = function (width, height) {
        return this.withOptions({ width: width, height: height });
    };
    // Specify blur between 0 and 100
    ImageUrlBuilder.prototype.blur = function (blur) {
        return this.withOptions({ blur: blur });
    };
    ImageUrlBuilder.prototype.sharpen = function (sharpen) {
        return this.withOptions({ sharpen: sharpen });
    };
    // Specify the desired rectangle of the image
    ImageUrlBuilder.prototype.rect = function (left, top, width, height) {
        return this.withOptions({ rect: { left: left, top: top, width: width, height: height } });
    };
    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
    ImageUrlBuilder.prototype.format = function (format) {
        return this.withOptions({ format: format });
    };
    ImageUrlBuilder.prototype.invert = function (invert) {
        return this.withOptions({ invert: invert });
    };
    // Rotation in degrees 0, 90, 180, 270
    ImageUrlBuilder.prototype.orientation = function (orientation) {
        return this.withOptions({ orientation: orientation });
    };
    // Compression quality 0-100
    ImageUrlBuilder.prototype.quality = function (quality) {
        return this.withOptions({ quality: quality });
    };
    // Make it a download link. Parameter is default filename.
    ImageUrlBuilder.prototype.forceDownload = function (download) {
        return this.withOptions({ download: download });
    };
    // Flip image horizontally
    ImageUrlBuilder.prototype.flipHorizontal = function () {
        return this.withOptions({ flipHorizontal: true });
    };
    // Flip image vertically
    ImageUrlBuilder.prototype.flipVertical = function () {
        return this.withOptions({ flipVertical: true });
    };
    // Ignore crop/hotspot from image record, even when present
    ImageUrlBuilder.prototype.ignoreImageParams = function () {
        return this.withOptions({ ignoreImageParams: true });
    };
    ImageUrlBuilder.prototype.fit = function (value) {
        if (validFits.indexOf(value) === -1) {
            throw new Error("Invalid fit mode \"".concat(value, "\""));
        }
        return this.withOptions({ fit: value });
    };
    ImageUrlBuilder.prototype.crop = function (value) {
        if (validCrops.indexOf(value) === -1) {
            throw new Error("Invalid crop mode \"".concat(value, "\""));
        }
        return this.withOptions({ crop: value });
    };
    // Saturation
    ImageUrlBuilder.prototype.saturation = function (saturation) {
        return this.withOptions({ saturation: saturation });
    };
    ImageUrlBuilder.prototype.auto = function (value) {
        if (validAutoModes.indexOf(value) === -1) {
            throw new Error("Invalid auto mode \"".concat(value, "\""));
        }
        return this.withOptions({ auto: value });
    };
    // Specify the number of pixels to pad the image
    ImageUrlBuilder.prototype.pad = function (pad) {
        return this.withOptions({ pad: pad });
    };
    // Gets the url based on the submitted parameters
    ImageUrlBuilder.prototype.url = function () {
        return (0, urlForImage_1.default)(this.options);
    };
    // Alias for url()
    ImageUrlBuilder.prototype.toString = function () {
        return this.url();
    };
    return ImageUrlBuilder;
}());
exports.ImageUrlBuilder = ImageUrlBuilder;
//# sourceMappingURL=builder.js.map

/***/ }),

/***/ 69361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var builder_1 = __importDefault(__webpack_require__(24870));
module.exports = builder_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 40723:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
function parseAssetId(ref) {
    var _a = ref.split('-'), id = _a[1], dimensionString = _a[2], format = _a[3];
    if (!id || !dimensionString || !format) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    var _b = dimensionString.split('x'), imgWidthStr = _b[0], imgHeightStr = _b[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);
    if (!isValidAssetId) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    return { id: id, width: width, height: height, format: format };
}
exports["default"] = parseAssetId;
//# sourceMappingURL=parseAssetId.js.map

/***/ }),

/***/ 82923:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isRef = function (src) {
    var source = src;
    return source ? typeof source._ref === 'string' : false;
};
var isAsset = function (src) {
    var source = src;
    return source ? typeof source._id === 'string' : false;
};
var isAssetStub = function (src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === 'string' : false;
};
// Convert an asset-id, asset or image to an image record suitable for processing
// eslint-disable-next-line complexity
function parseSource(source) {
    if (!source) {
        return null;
    }
    var image;
    if (typeof source === 'string' && isUrl(source)) {
        // Someone passed an existing image url?
        image = {
            asset: { _ref: urlToId(source) },
        };
    }
    else if (typeof source === 'string') {
        // Just an asset id
        image = {
            asset: { _ref: source },
        };
    }
    else if (isRef(source)) {
        // We just got passed an asset directly
        image = {
            asset: source,
        };
    }
    else if (isAsset(source)) {
        // If we were passed an image asset document
        image = {
            asset: {
                _ref: source._id || '',
            },
        };
    }
    else if (isAssetStub(source)) {
        // If we were passed a partial asset (`url`, but no `_id`)
        image = {
            asset: {
                _ref: urlToId(source.asset.url),
            },
        };
    }
    else if (typeof source.asset === 'object') {
        // Probably an actual image with materialized asset
        image = __assign({}, source);
    }
    else {
        // We got something that does not look like an image, or it is an image
        // that currently isn't sporting an asset.
        return null;
    }
    var img = source;
    if (img.crop) {
        image.crop = img.crop;
    }
    if (img.hotspot) {
        image.hotspot = img.hotspot;
    }
    return applyDefaults(image);
}
exports["default"] = parseSource;
function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
}
function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, '-$1');
}
// Mock crop and hotspot if image lacks it
function applyDefaults(image) {
    if (image.crop && image.hotspot) {
        return image;
    }
    // We need to pad in default values for crop or hotspot
    var result = __assign({}, image);
    if (!result.crop) {
        result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
        };
    }
    if (!result.hotspot) {
        result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1.0,
            width: 1.0,
        };
    }
    return result;
}
//# sourceMappingURL=parseSource.js.map

/***/ }),

/***/ 31170:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
var parseAssetId_1 = __importDefault(__webpack_require__(40723));
var parseSource_1 = __importDefault(__webpack_require__(82923));
exports.parseSource = parseSource_1.default;
exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
    ['width', 'w'],
    ['height', 'h'],
    ['format', 'fm'],
    ['download', 'dl'],
    ['blur', 'blur'],
    ['sharpen', 'sharp'],
    ['invert', 'invert'],
    ['orientation', 'or'],
    ['minHeight', 'min-h'],
    ['maxHeight', 'max-h'],
    ['minWidth', 'min-w'],
    ['maxWidth', 'max-w'],
    ['quality', 'q'],
    ['fit', 'fit'],
    ['crop', 'crop'],
    ['saturation', 'sat'],
    ['auto', 'auto'],
    ['dpr', 'dpr'],
    ['pad', 'pad'],
];
function urlForImage(options) {
    var spec = __assign({}, (options || {}));
    var source = spec.source;
    delete spec.source;
    var image = (0, parseSource_1.default)(source);
    if (!image) {
        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
    }
    var id = image.asset._ref || image.asset._id || '';
    var asset = (0, parseAssetId_1.default)(id);
    // Compute crop rect in terms of pixel coordinates in the raw source image
    var cropLeft = Math.round(image.crop.left * asset.width);
    var cropTop = Math.round(image.crop.top * asset.height);
    var crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop),
    };
    // Compute hot spot rect in terms of pixel coordinates
    var hotSpotVerticalRadius = (image.hotspot.height * asset.height) / 2;
    var hotSpotHorizontalRadius = (image.hotspot.width * asset.width) / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius,
    };
    // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.
    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
        spec = __assign(__assign({}, spec), fit({ crop: crop, hotspot: hotspot }, spec));
    }
    return specToImageUrl(__assign(__assign({}, spec), { asset: asset }));
}
exports["default"] = urlForImage;
// eslint-disable-next-line complexity
function specToImageUrl(spec) {
    var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format);
    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
    var params = [];
    if (spec.rect) {
        // Only bother url with a crop if it actually crops anything
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
            params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
        }
    }
    if (spec.bg) {
        params.push("bg=".concat(spec.bg));
    }
    if (spec.focalPoint) {
        params.push("fp-x=".concat(spec.focalPoint.x));
        params.push("fp-y=".concat(spec.focalPoint.y));
    }
    var flip = [spec.flipHorizontal && 'h', spec.flipVertical && 'v'].filter(Boolean).join('');
    if (flip) {
        params.push("flip=".concat(flip));
    }
    // Map from spec name to url param name, and allow using the actual param name as an alternative
    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function (mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
        }
        else if (typeof spec[param] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
        }
    });
    if (params.length === 0) {
        return baseUrl;
    }
    return "".concat(baseUrl, "?").concat(params.join('&'));
}
function fit(source, spec) {
    var cropRect;
    var imgWidth = spec.width;
    var imgHeight = spec.height;
    // If we are not constraining the aspect ratio, we'll just use the whole crop
    if (!(imgWidth && imgHeight)) {
        return { width: imgWidth, height: imgHeight, rect: source.crop };
    }
    var crop = source.crop;
    var hotspot = source.hotspot;
    // If we are here, that means aspect ratio is locked and fitting will be a bit harder
    var desiredAspectRatio = imgWidth / imgHeight;
    var cropAspectRatio = crop.width / crop.height;
    if (cropAspectRatio > desiredAspectRatio) {
        // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
        var height = Math.round(crop.height);
        var width = Math.round(height * desiredAspectRatio);
        var top_2 = Math.max(0, Math.round(crop.top));
        // Center output horizontally over hotspot
        var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
        var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
        // Keep output within crop
        if (left < crop.left) {
            left = crop.left;
        }
        else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
        }
        cropRect = { left: left, top: top_2, width: width, height: height };
    }
    else {
        // The crop is taller than the desired ratio, we are cutting from top and bottom
        var width = crop.width;
        var height = Math.round(width / desiredAspectRatio);
        var left = Math.max(0, Math.round(crop.left));
        // Center output vertically over hotspot
        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
        // Keep output rect within crop
        if (top_3 < crop.top) {
            top_3 = crop.top;
        }
        else if (top_3 + height > crop.top + crop.height) {
            top_3 = crop.top + crop.height - height;
        }
        cropRect = { left: left, top: top_3, width: width, height: height };
    }
    return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect,
    };
}
//# sourceMappingURL=urlForImage.js.map

/***/ })

};
;