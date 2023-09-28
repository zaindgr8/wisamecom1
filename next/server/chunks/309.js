exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 12077:
/***/ ((module) => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "clamp", () => $8e747672ba00eedb$export$7d15b64cf5a3a4c4);
function $8e747672ba00eedb$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 34975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $47SRi$babelruntimehelpersextends = __webpack_require__(59651);
var $47SRi$react = __webpack_require__(18038);
var $47SRi$radixuireactcontext = __webpack_require__(95392);
var $47SRi$radixuireactcollection = __webpack_require__(73184);
var $47SRi$radixuireactcomposerefs = __webpack_require__(24788);
var $47SRi$radixuiprimitive = __webpack_require__(23010);
var $47SRi$radixuireactusecontrollablestate = __webpack_require__(11391);
var $47SRi$radixuireactprimitive = __webpack_require__(93393);
var $47SRi$radixuireactcollapsible = __webpack_require__(59275);
var $47SRi$radixuireactid = __webpack_require__(35022);
var $47SRi$radixuireactdirection = __webpack_require__(56884);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAccordionScope", () => $0f4a20de0660bfd8$export$9748edc328a73be1);
$parcel$export(module.exports, "Accordion", () => $0f4a20de0660bfd8$export$a766cd26d0d69044);
$parcel$export(module.exports, "AccordionItem", () => $0f4a20de0660bfd8$export$d99097c13d4dac9f);
$parcel$export(module.exports, "AccordionHeader", () => $0f4a20de0660bfd8$export$5e3e5deaaf81ee41);
$parcel$export(module.exports, "AccordionTrigger", () => $0f4a20de0660bfd8$export$94e939b1f85bdd73);
$parcel$export(module.exports, "AccordionContent", () => $0f4a20de0660bfd8$export$985b9a77379b54a0);
$parcel$export(module.exports, "Root", () => $0f4a20de0660bfd8$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Item", () => $0f4a20de0660bfd8$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "Header", () => $0f4a20de0660bfd8$export$8b251419efc915eb);
$parcel$export(module.exports, "Trigger", () => $0f4a20de0660bfd8$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Content", () => $0f4a20de0660bfd8$export$7c6e2c02157bb7d2);












/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$ACCORDION_NAME = 'Accordion';
const $0f4a20de0660bfd8$var$ACCORDION_KEYS = [
    'Home',
    'End',
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight'
];
const [$0f4a20de0660bfd8$var$Collection, $0f4a20de0660bfd8$var$useCollection, $0f4a20de0660bfd8$var$createCollectionScope] = $47SRi$radixuireactcollection.createCollection($0f4a20de0660bfd8$var$ACCORDION_NAME);
const [$0f4a20de0660bfd8$var$createAccordionContext, $0f4a20de0660bfd8$export$9748edc328a73be1] = $47SRi$radixuireactcontext.createContextScope($0f4a20de0660bfd8$var$ACCORDION_NAME, [
    $0f4a20de0660bfd8$var$createCollectionScope,
    $47SRi$radixuireactcollapsible.createCollapsibleScope
]);
const $0f4a20de0660bfd8$var$useCollapsibleScope = $47SRi$radixuireactcollapsible.createCollapsibleScope();
const $0f4a20de0660bfd8$export$a766cd26d0d69044 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { type: type , ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.Provider, {
        scope: props.__scopeAccordion
    }, type === 'multiple' ? /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplMultiple, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, multipleProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplSingle, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, singleProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$a766cd26d0d69044, {
    displayName: $0f4a20de0660bfd8$var$ACCORDION_NAME
});
$0f4a20de0660bfd8$export$a766cd26d0d69044.propTypes = {
    type (props) {
        const value = props.value || props.defaultValue;
        if (props.type && ![
            'single',
            'multiple'
        ].includes(props.type)) return new Error('Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.');
        if (props.type === 'multiple' && typeof value === 'string') return new Error('Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.');
        if (props.type === 'single' && Array.isArray(value)) return new Error('Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.');
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ const [$0f4a20de0660bfd8$var$AccordionValueProvider, $0f4a20de0660bfd8$var$useAccordionValueContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME);
const [$0f4a20de0660bfd8$var$AccordionCollapsibleProvider, $0f4a20de0660bfd8$var$useAccordionCollapsibleContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, {
    collapsible: false
});
const $0f4a20de0660bfd8$var$AccordionImplSingle = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , collapsible: collapsible = false , ...accordionSingleProps } = props;
    const [value, setValue] = $47SRi$radixuireactusecontrollablestate.useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value ? [
            value
        ] : [],
        onItemOpen: setValue,
        onItemClose: ($parcel$interopDefault($47SRi$react)).useCallback(()=>collapsible && setValue('')
        , [
            collapsible,
            setValue
        ])
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionCollapsibleProvider, {
        scope: props.__scopeAccordion,
        collapsible: collapsible
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImpl, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionSingleProps, {
        ref: forwardedRef
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$AccordionImplMultiple = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , ...accordionMultipleProps } = props;
    const [value1 = [], setValue] = $47SRi$radixuireactusecontrollablestate.useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleItemOpen = ($parcel$interopDefault($47SRi$react)).useCallback((itemValue)=>setValue((prevValue = [])=>[
                ...prevValue,
                itemValue
            ]
        )
    , [
        setValue
    ]);
    const handleItemClose = ($parcel$interopDefault($47SRi$react)).useCallback((itemValue)=>setValue((prevValue = [])=>prevValue.filter((value)=>value !== itemValue
            )
        )
    , [
        setValue
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value1,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionCollapsibleProvider, {
        scope: props.__scopeAccordion,
        collapsible: true
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImpl, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionMultipleProps, {
        ref: forwardedRef
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ const [$0f4a20de0660bfd8$var$AccordionImplProvider, $0f4a20de0660bfd8$var$useAccordionContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME);
const $0f4a20de0660bfd8$var$AccordionImpl = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , disabled: disabled , dir: dir , orientation: orientation = 'vertical' , ...accordionProps } = props;
    const accordionRef = ($parcel$interopDefault($47SRi$react)).useRef(null);
    const composedRefs = $47SRi$radixuireactcomposerefs.useComposedRefs(accordionRef, forwardedRef);
    const getItems = $0f4a20de0660bfd8$var$useCollection(__scopeAccordion);
    const direction = $47SRi$radixuireactdirection.useDirection(dir);
    const isDirectionLTR = direction === 'ltr';
    const handleKeyDown = $47SRi$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
        var _triggerCollection$cl;
        if (!$0f4a20de0660bfd8$var$ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>{
            var _item$ref$current;
            return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
        });
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target
        );
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return; // Prevents page scroll while user is navigating
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) nextIndex = homeIndex;
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) nextIndex = endIndex;
        };
        switch(event.key){
            case 'Home':
                nextIndex = homeIndex;
                break;
            case 'End':
                nextIndex = endIndex;
                break;
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    if (isDirectionLTR) moveNext();
                    else movePrev();
                }
                break;
            case 'ArrowDown':
                if (orientation === 'vertical') moveNext();
                break;
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    if (isDirectionLTR) movePrev();
                    else moveNext();
                }
                break;
            case 'ArrowUp':
                if (orientation === 'vertical') movePrev();
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
    });
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled: disabled,
        direction: dir,
        orientation: orientation
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.Slot, {
        scope: __scopeAccordion
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionProps, {
        "data-orientation": orientation,
        ref: composedRefs,
        onKeyDown: disabled ? undefined : handleKeyDown
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$ITEM_NAME = 'AccordionItem';
const [$0f4a20de0660bfd8$var$AccordionItemProvider, $0f4a20de0660bfd8$var$useAccordionItemContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ITEM_NAME);
/**
 * `AccordionItem` contains all of the parts of a collapsible section inside of an `Accordion`.
 */ const $0f4a20de0660bfd8$export$d99097c13d4dac9f = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , value: value , ...accordionItemProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ITEM_NAME, __scopeAccordion);
    const valueContext = $0f4a20de0660bfd8$var$useAccordionValueContext($0f4a20de0660bfd8$var$ITEM_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    const triggerId = $47SRi$radixuireactid.useId();
    const open1 = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionItemProvider, {
        scope: __scopeAccordion,
        open: open1,
        disabled: disabled,
        triggerId: triggerId
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Root, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "data-orientation": accordionContext.orientation,
        "data-state": open1 ? 'open' : 'closed'
    }, collapsibleScope, accordionItemProps, {
        ref: forwardedRef,
        disabled: disabled,
        open: open1,
        onOpenChange: (open)=>{
            if (open) valueContext.onItemOpen(value);
            else valueContext.onItemClose(value);
        }
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$d99097c13d4dac9f, {
    displayName: $0f4a20de0660bfd8$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionHeader
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$HEADER_NAME = 'AccordionHeader';
/**
 * `AccordionHeader` contains the content for the parts of an `AccordionItem` that will be visible
 * whether or not its content is collapsed.
 */ const $0f4a20de0660bfd8$export$5e3e5deaaf81ee41 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...headerProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$HEADER_NAME, __scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactprimitive.Primitive.h3, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "data-orientation": accordionContext.orientation,
        "data-state": $0f4a20de0660bfd8$var$getState(itemContext.open),
        "data-disabled": itemContext.disabled ? '' : undefined
    }, headerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$5e3e5deaaf81ee41, {
    displayName: $0f4a20de0660bfd8$var$HEADER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$TRIGGER_NAME = 'AccordionTrigger';
/**
 * `AccordionTrigger` is the trigger that toggles the collapsed state of an `AccordionItem`. It
 * should always be nested inside of an `AccordionHeader`.
 */ const $0f4a20de0660bfd8$export$94e939b1f85bdd73 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...triggerProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = $0f4a20de0660bfd8$var$useAccordionCollapsibleContext($0f4a20de0660bfd8$var$TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.ItemSlot, {
        scope: __scopeAccordion
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Trigger, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || undefined,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId
    }, collapsibleScope, triggerProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$94e939b1f85bdd73, {
    displayName: $0f4a20de0660bfd8$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$CONTENT_NAME = 'AccordionContent';
/**
 * `AccordionContent` contains the collapsible content for an `AccordionItem`.
 */ const $0f4a20de0660bfd8$export$985b9a77379b54a0 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...contentProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Content, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation
    }, collapsibleScope, contentProps, {
        ref: forwardedRef,
        style: {
            ['--radix-accordion-content-height']: 'var(--radix-collapsible-content-height)',
            ['--radix-accordion-content-width']: 'var(--radix-collapsible-content-width)',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$985b9a77379b54a0, {
    displayName: $0f4a20de0660bfd8$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $0f4a20de0660bfd8$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $0f4a20de0660bfd8$export$be92b6f5f03c0fe9 = $0f4a20de0660bfd8$export$a766cd26d0d69044;
const $0f4a20de0660bfd8$export$6d08773d2e66f8f2 = $0f4a20de0660bfd8$export$d99097c13d4dac9f;
const $0f4a20de0660bfd8$export$8b251419efc915eb = $0f4a20de0660bfd8$export$5e3e5deaaf81ee41;
const $0f4a20de0660bfd8$export$41fb9f06171c75f4 = $0f4a20de0660bfd8$export$94e939b1f85bdd73;
const $0f4a20de0660bfd8$export$7c6e2c02157bb7d2 = $0f4a20de0660bfd8$export$985b9a77379b54a0;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 90862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $eQpDd$babelruntimehelpersextends = __webpack_require__(59651);
var $eQpDd$react = __webpack_require__(18038);
var $eQpDd$radixuireactprimitive = __webpack_require__(93393);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Arrow", () => $09f4ad68a9251bc3$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Root", () => $09f4ad68a9251bc3$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/ const $09f4ad68a9251bc3$var$NAME = 'Arrow';
const $09f4ad68a9251bc3$export$21b07c8f274aebd5 = /*#__PURE__*/ $eQpDd$react.forwardRef((props, forwardedRef)=>{
    const { children: children , width: width = 10 , height: height = 5 , ...arrowProps } = props;
    return /*#__PURE__*/ $eQpDd$react.createElement($eQpDd$radixuireactprimitive.Primitive.svg, ($parcel$interopDefault($eQpDd$babelruntimehelpersextends))({}, arrowProps, {
        ref: forwardedRef,
        width: width,
        height: height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
    }), props.asChild ? children : /*#__PURE__*/ $eQpDd$react.createElement("polygon", {
        points: "0,0 30,0 15,10"
    }));
});
/*#__PURE__*/ Object.assign($09f4ad68a9251bc3$export$21b07c8f274aebd5, {
    displayName: $09f4ad68a9251bc3$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $09f4ad68a9251bc3$export$be92b6f5f03c0fe9 = $09f4ad68a9251bc3$export$21b07c8f274aebd5;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 57856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $dKOox$babelruntimehelpersextends = __webpack_require__(59651);
var $dKOox$react = __webpack_require__(18038);
var $dKOox$radixuireactcomposerefs = __webpack_require__(24788);
var $dKOox$radixuireactcontext = __webpack_require__(95392);
var $dKOox$radixuiprimitive = __webpack_require__(23010);
var $dKOox$radixuireactusecontrollablestate = __webpack_require__(11391);
var $dKOox$radixuireactuseprevious = __webpack_require__(37454);
var $dKOox$radixuireactusesize = __webpack_require__(45123);
var $dKOox$radixuireactpresence = __webpack_require__(87343);
var $dKOox$radixuireactprimitive = __webpack_require__(93393);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createCheckboxScope", () => $a17f2c9fbf2ccf8c$export$b566c4ff5488ea01);
$parcel$export(module.exports, "Checkbox", () => $a17f2c9fbf2ccf8c$export$48513f6b9f8ce62d);
$parcel$export(module.exports, "CheckboxIndicator", () => $a17f2c9fbf2ccf8c$export$59aad738f51d1c05);
$parcel$export(module.exports, "Root", () => $a17f2c9fbf2ccf8c$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Indicator", () => $a17f2c9fbf2ccf8c$export$adb584737d712b70);










/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/ const $a17f2c9fbf2ccf8c$var$CHECKBOX_NAME = 'Checkbox';
const [$a17f2c9fbf2ccf8c$var$createCheckboxContext, $a17f2c9fbf2ccf8c$export$b566c4ff5488ea01] = $dKOox$radixuireactcontext.createContextScope($a17f2c9fbf2ccf8c$var$CHECKBOX_NAME);
const [$a17f2c9fbf2ccf8c$var$CheckboxProvider, $a17f2c9fbf2ccf8c$var$useCheckboxContext] = $a17f2c9fbf2ccf8c$var$createCheckboxContext($a17f2c9fbf2ccf8c$var$CHECKBOX_NAME);
const $a17f2c9fbf2ccf8c$export$48513f6b9f8ce62d = /*#__PURE__*/ $dKOox$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...checkboxProps } = props;
    const [button, setButton] = $dKOox$react.useState(null);
    const composedRefs = $dKOox$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = $dKOox$react.useRef(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    const [checked = false, setChecked] = $dKOox$radixuireactusecontrollablestate.useControllableState({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    const initialCheckedStateRef = $dKOox$react.useRef(checked);
    $dKOox$react.useEffect(()=>{
        const form = button === null || button === void 0 ? void 0 : button.form;
        if (form) {
            const reset = ()=>setChecked(initialCheckedStateRef.current)
            ;
            form.addEventListener('reset', reset);
            return ()=>form.removeEventListener('reset', reset)
            ;
        }
    }, [
        button,
        setChecked
    ]);
    return /*#__PURE__*/ $dKOox$react.createElement($a17f2c9fbf2ccf8c$var$CheckboxProvider, {
        scope: __scopeCheckbox,
        state: checked,
        disabled: disabled
    }, /*#__PURE__*/ $dKOox$react.createElement($dKOox$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($dKOox$babelruntimehelpersextends))({
        type: "button",
        role: "checkbox",
        "aria-checked": $a17f2c9fbf2ccf8c$var$isIndeterminate(checked) ? 'mixed' : checked,
        "aria-required": required,
        "data-state": $a17f2c9fbf2ccf8c$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, checkboxProps, {
        ref: composedRefs,
        onKeyDown: $dKOox$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            // According to WAI ARIA, Checkboxes don't activate on enter keypress
            if (event.key === 'Enter') event.preventDefault();
        }),
        onClick: $dKOox$radixuiprimitive.composeEventHandlers(props.onClick, (event)=>{
            setChecked((prevChecked)=>$a17f2c9fbf2ccf8c$var$isIndeterminate(prevChecked) ? true : !prevChecked
            );
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if checkbox is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect checkbox updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ $dKOox$react.createElement($a17f2c9fbf2ccf8c$var$BubbleInput, {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name: name,
        value: value,
        checked: checked,
        required: required,
        disabled: disabled // We transform because the input is absolutely positioned but we have
        ,
        style: {
            transform: 'translateX(-100%)'
        }
    }));
});
/*#__PURE__*/ Object.assign($a17f2c9fbf2ccf8c$export$48513f6b9f8ce62d, {
    displayName: $a17f2c9fbf2ccf8c$var$CHECKBOX_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/ const $a17f2c9fbf2ccf8c$var$INDICATOR_NAME = 'CheckboxIndicator';
const $a17f2c9fbf2ccf8c$export$59aad738f51d1c05 = /*#__PURE__*/ $dKOox$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , forceMount: forceMount , ...indicatorProps } = props;
    const context = $a17f2c9fbf2ccf8c$var$useCheckboxContext($a17f2c9fbf2ccf8c$var$INDICATOR_NAME, __scopeCheckbox);
    return /*#__PURE__*/ $dKOox$react.createElement($dKOox$radixuireactpresence.Presence, {
        present: forceMount || $a17f2c9fbf2ccf8c$var$isIndeterminate(context.state) || context.state === true
    }, /*#__PURE__*/ $dKOox$react.createElement($dKOox$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($dKOox$babelruntimehelpersextends))({
        "data-state": $a17f2c9fbf2ccf8c$var$getState(context.state),
        "data-disabled": context.disabled ? '' : undefined
    }, indicatorProps, {
        ref: forwardedRef,
        style: {
            pointerEvents: 'none',
            ...props.style
        }
    })));
});
/*#__PURE__*/ Object.assign($a17f2c9fbf2ccf8c$export$59aad738f51d1c05, {
    displayName: $a17f2c9fbf2ccf8c$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $a17f2c9fbf2ccf8c$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = $dKOox$react.useRef(null);
    const prevChecked = $dKOox$radixuireactuseprevious.usePrevious(checked);
    const controlSize = $dKOox$radixuireactusesize.useSize(control); // Bubble checked change to parents (e.g form change event)
    $dKOox$react.useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            input.indeterminate = $a17f2c9fbf2ccf8c$var$isIndeterminate(checked);
            setChecked.call(input, $a17f2c9fbf2ccf8c$var$isIndeterminate(checked) ? false : checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /*#__PURE__*/ $dKOox$react.createElement("input", ($parcel$interopDefault($dKOox$babelruntimehelpersextends))({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: $a17f2c9fbf2ccf8c$var$isIndeterminate(checked) ? false : checked
    }, inputProps, {
        tabIndex: -1,
        ref: ref,
        style: {
            ...props.style,
            ...controlSize,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0
        }
    }));
};
function $a17f2c9fbf2ccf8c$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $a17f2c9fbf2ccf8c$var$getState(checked) {
    return $a17f2c9fbf2ccf8c$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
const $a17f2c9fbf2ccf8c$export$be92b6f5f03c0fe9 = $a17f2c9fbf2ccf8c$export$48513f6b9f8ce62d;
const $a17f2c9fbf2ccf8c$export$adb584737d712b70 = $a17f2c9fbf2ccf8c$export$59aad738f51d1c05;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 59275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $f0mF1$babelruntimehelpersextends = __webpack_require__(59651);
var $f0mF1$react = __webpack_require__(18038);
var $f0mF1$radixuiprimitive = __webpack_require__(23010);
var $f0mF1$radixuireactcontext = __webpack_require__(95392);
var $f0mF1$radixuireactusecontrollablestate = __webpack_require__(11391);
var $f0mF1$radixuireactuselayouteffect = __webpack_require__(16983);
var $f0mF1$radixuireactcomposerefs = __webpack_require__(24788);
var $f0mF1$radixuireactprimitive = __webpack_require__(93393);
var $f0mF1$radixuireactpresence = __webpack_require__(87343);
var $f0mF1$radixuireactid = __webpack_require__(35022);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createCollapsibleScope", () => $e729681ae85df948$export$952b32dcbe73087a);
$parcel$export(module.exports, "Collapsible", () => $e729681ae85df948$export$6eb0f7ddcda6131f);
$parcel$export(module.exports, "CollapsibleTrigger", () => $e729681ae85df948$export$c135dce7b15bbbdc);
$parcel$export(module.exports, "CollapsibleContent", () => $e729681ae85df948$export$aadde00976f34151);
$parcel$export(module.exports, "Root", () => $e729681ae85df948$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $e729681ae85df948$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Content", () => $e729681ae85df948$export$7c6e2c02157bb7d2);










/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$COLLAPSIBLE_NAME = 'Collapsible';
const [$e729681ae85df948$var$createCollapsibleContext, $e729681ae85df948$export$952b32dcbe73087a] = $f0mF1$radixuireactcontext.createContextScope($e729681ae85df948$var$COLLAPSIBLE_NAME);
const [$e729681ae85df948$var$CollapsibleProvider, $e729681ae85df948$var$useCollapsibleContext] = $e729681ae85df948$var$createCollapsibleContext($e729681ae85df948$var$COLLAPSIBLE_NAME);
const $e729681ae85df948$export$6eb0f7ddcda6131f = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , open: openProp , defaultOpen: defaultOpen , disabled: disabled , onOpenChange: onOpenChange , ...collapsibleProps } = props;
    const [open = false, setOpen] = $f0mF1$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $f0mF1$react.createElement($e729681ae85df948$var$CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled: disabled,
        contentId: $f0mF1$radixuireactid.useId(),
        open: open,
        onOpenToggle: $f0mF1$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ])
    }, /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        "data-state": $e729681ae85df948$var$getState(open),
        "data-disabled": disabled ? '' : undefined
    }, collapsibleProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$6eb0f7ddcda6131f, {
    displayName: $e729681ae85df948$var$COLLAPSIBLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CollapsibleTrigger
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$TRIGGER_NAME = 'CollapsibleTrigger';
const $e729681ae85df948$export$c135dce7b15bbbdc = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , ...triggerProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$TRIGGER_NAME, __scopeCollapsible);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": $e729681ae85df948$var$getState(context.open),
        "data-disabled": context.disabled ? '' : undefined,
        disabled: context.disabled
    }, triggerProps, {
        ref: forwardedRef,
        onClick: $f0mF1$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$c135dce7b15bbbdc, {
    displayName: $e729681ae85df948$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CollapsibleContent
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$CONTENT_NAME = 'CollapsibleContent';
const $e729681ae85df948$export$aadde00976f34151 = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { forceMount: forceMount , ...contentProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$CONTENT_NAME, props.__scopeCollapsible);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, ({ present: present  })=>/*#__PURE__*/ $f0mF1$react.createElement($e729681ae85df948$var$CollapsibleContentImpl, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({}, contentProps, {
            ref: forwardedRef,
            present: present
        }))
    );
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$aadde00976f34151, {
    displayName: $e729681ae85df948$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$CollapsibleContentImpl = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , present: present , children: children , ...contentProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = $f0mF1$react.useState(present);
    const ref = $f0mF1$react.useRef(null);
    const composedRefs = $f0mF1$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const heightRef = $f0mF1$react.useRef(0);
    const height = heightRef.current;
    const widthRef = $f0mF1$react.useRef(0);
    const width = widthRef.current; // when opening we want it to immediately open to retrieve dimensions
    // when closing we delay `present` to retrieve dimensions before closing
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = $f0mF1$react.useRef(isOpen);
    const originalStylesRef = $f0mF1$react.useRef();
    $f0mF1$react.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false
        );
        return ()=>cancelAnimationFrame(rAF)
        ;
    }, []);
    $f0mF1$radixuireactuselayouteffect.useLayoutEffect(()=>{
        const node = ref.current;
        if (node) {
            originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName
            }; // block any animations/transitions so the element renders at its full dimensions
            node.style.transitionDuration = '0s';
            node.style.animationName = 'none'; // get width and height from full dimensions
            const rect = node.getBoundingClientRect();
            heightRef.current = rect.height;
            widthRef.current = rect.width; // kick off any animations/transitions that were originally set up if it isn't the initial mount
            if (!isMountAnimationPreventedRef.current) {
                node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                node.style.animationName = originalStylesRef.current.animationName;
            }
            setIsPresent(present);
        }
    /**
     * depends on `context.open` because it will change to `false`
     * when a close is triggered but `present` will be `false` on
     * animation end (so when close finishes). This allows us to
     * retrieve the dimensions *before* closing.
     */ }, [
        context.open,
        present
    ]);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        "data-state": $e729681ae85df948$var$getState(context.open),
        "data-disabled": context.disabled ? '' : undefined,
        id: context.contentId,
        hidden: !isOpen
    }, contentProps, {
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : undefined,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : undefined,
            ...props.style
        }
    }), isOpen && children);
});
/* -----------------------------------------------------------------------------------------------*/ function $e729681ae85df948$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $e729681ae85df948$export$be92b6f5f03c0fe9 = $e729681ae85df948$export$6eb0f7ddcda6131f;
const $e729681ae85df948$export$41fb9f06171c75f4 = $e729681ae85df948$export$c135dce7b15bbbdc;
const $e729681ae85df948$export$7c6e2c02157bb7d2 = $e729681ae85df948$export$aadde00976f34151;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $aJCrN$babelruntimehelpersextends = __webpack_require__(59651);
var $aJCrN$react = __webpack_require__(18038);
var $aJCrN$radixuiprimitive = __webpack_require__(23010);
var $aJCrN$radixuireactcomposerefs = __webpack_require__(24788);
var $aJCrN$radixuireactcontext = __webpack_require__(95392);
var $aJCrN$radixuireactid = __webpack_require__(35022);
var $aJCrN$radixuireactusecontrollablestate = __webpack_require__(11391);
var $aJCrN$radixuireactdismissablelayer = __webpack_require__(34053);
var $aJCrN$radixuireactfocusscope = __webpack_require__(31445);
var $aJCrN$radixuireactportal = __webpack_require__(42591);
var $aJCrN$radixuireactpresence = __webpack_require__(87343);
var $aJCrN$radixuireactprimitive = __webpack_require__(93393);
var $aJCrN$radixuireactfocusguards = __webpack_require__(45022);
var $aJCrN$reactremovescroll = __webpack_require__(88162);
var $aJCrN$ariahidden = __webpack_require__(36860);
var $aJCrN$radixuireactslot = __webpack_require__(73593);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDialogScope", () => $f4833395aa1bca1a$export$cc702773b8ea3e41);
$parcel$export(module.exports, "Dialog", () => $f4833395aa1bca1a$export$3ddf2d174ce01153);
$parcel$export(module.exports, "DialogTrigger", () => $f4833395aa1bca1a$export$2e1e1122cf0cba88);
$parcel$export(module.exports, "DialogPortal", () => $f4833395aa1bca1a$export$dad7c95542bacce0);
$parcel$export(module.exports, "DialogOverlay", () => $f4833395aa1bca1a$export$bd1d06c79be19e17);
$parcel$export(module.exports, "DialogContent", () => $f4833395aa1bca1a$export$b6d9565de1e068cf);
$parcel$export(module.exports, "DialogTitle", () => $f4833395aa1bca1a$export$16f7638e4a34b909);
$parcel$export(module.exports, "DialogDescription", () => $f4833395aa1bca1a$export$94e94c2ec2c954d5);
$parcel$export(module.exports, "DialogClose", () => $f4833395aa1bca1a$export$fba2fb7cd781b7ac);
$parcel$export(module.exports, "Root", () => $f4833395aa1bca1a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $f4833395aa1bca1a$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $f4833395aa1bca1a$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $f4833395aa1bca1a$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $f4833395aa1bca1a$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Title", () => $f4833395aa1bca1a$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $f4833395aa1bca1a$export$393edc798c47379d);
$parcel$export(module.exports, "Close", () => $f4833395aa1bca1a$export$f39c2d165cd861fe);
$parcel$export(module.exports, "WarningProvider", () => $f4833395aa1bca1a$export$69b62a49393917d6);
















/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DIALOG_NAME = 'Dialog';
const [$f4833395aa1bca1a$var$createDialogContext, $f4833395aa1bca1a$export$cc702773b8ea3e41] = $aJCrN$radixuireactcontext.createContextScope($f4833395aa1bca1a$var$DIALOG_NAME);
const [$f4833395aa1bca1a$var$DialogProvider, $f4833395aa1bca1a$var$useDialogContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$DIALOG_NAME);
const $f4833395aa1bca1a$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = $aJCrN$react.useRef(null);
    const contentRef = $aJCrN$react.useRef(null);
    const [open = false, setOpen] = $aJCrN$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $aJCrN$radixuireactid.useId(),
        titleId: $aJCrN$radixuireactid.useId(),
        descriptionId: $aJCrN$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $aJCrN$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$3ddf2d174ce01153, {
    displayName: $f4833395aa1bca1a$var$DIALOG_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TRIGGER_NAME = 'DialogTrigger';
const $f4833395aa1bca1a$export$2e1e1122cf0cba88 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$2e1e1122cf0cba88, {
    displayName: $f4833395aa1bca1a$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$PORTAL_NAME = 'DialogPortal';
const [$f4833395aa1bca1a$var$PortalProvider, $f4833395aa1bca1a$var$usePortalContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, {
    forceMount: undefined
});
const $f4833395aa1bca1a$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, $aJCrN$react.Children.map(children, (child)=>/*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
            present: forceMount || context.open
        }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactportal.Portal, {
            asChild: true,
            container: container
        }, child))
    ));
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$dad7c95542bacce0, {
    displayName: $f4833395aa1bca1a$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$OVERLAY_NAME = 'DialogOverlay';
const $f4833395aa1bca1a$export$bd1d06c79be19e17 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogOverlayImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$bd1d06c79be19e17, {
    displayName: $f4833395aa1bca1a$var$OVERLAY_NAME
});
const $f4833395aa1bca1a$var$DialogOverlayImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    $aJCrN$react.createElement($aJCrN$reactremovescroll.RemoveScroll, {
        as: $aJCrN$radixuireactslot.Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CONTENT_NAME = 'DialogContent';
const $f4833395aa1bca1a$export$b6d9565de1e068cf = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentNonModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$b6d9565de1e068cf, {
    displayName: $f4833395aa1bca1a$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    $aJCrN$react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return $aJCrN$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $aJCrN$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentNonModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = $aJCrN$react.useRef(false);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) hasInteractedOutsideRef.current = true; // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            //
            // We use `onInteractOutside` as some browsers also
            // focus on pointer down, creating the same issue.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, __scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $aJCrN$radixuireactfocusguards.useFocusGuards();
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$react.Fragment, null, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactfocusscope.FocusScope, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactdismissablelayer.DismissableLayer, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TITLE_NAME = 'DialogTitle';
const $f4833395aa1bca1a$export$16f7638e4a34b909 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.h2, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$16f7638e4a34b909, {
    displayName: $f4833395aa1bca1a$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DESCRIPTION_NAME = 'DialogDescription';
const $f4833395aa1bca1a$export$94e94c2ec2c954d5 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.p, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$94e94c2ec2c954d5, {
    displayName: $f4833395aa1bca1a$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CLOSE_NAME = 'DialogClose';
const $f4833395aa1bca1a$export$fba2fb7cd781b7ac = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$fba2fb7cd781b7ac, {
    displayName: $f4833395aa1bca1a$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $f4833395aa1bca1a$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $f4833395aa1bca1a$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$f4833395aa1bca1a$export$69b62a49393917d6, $f4833395aa1bca1a$var$useWarningContext] = $aJCrN$radixuireactcontext.createContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME, {
    contentName: $f4833395aa1bca1a$var$CONTENT_NAME,
    titleName: $f4833395aa1bca1a$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $f4833395aa1bca1a$var$TitleWarning = ({ titleId: titleId  })=>{
    const titleWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    $aJCrN$react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) throw new Error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
const $f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME = 'DialogDescriptionWarning';
const $f4833395aa1bca1a$var$DescriptionWarning = ({ contentRef: contentRef , descriptionId: descriptionId  })=>{
    const descriptionWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    $aJCrN$react.useEffect(()=>{
        var _contentRef$current;
        const describedById = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'); // if we have an id and the user hasn't set aria-describedby={undefined}
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
const $f4833395aa1bca1a$export$be92b6f5f03c0fe9 = $f4833395aa1bca1a$export$3ddf2d174ce01153;
const $f4833395aa1bca1a$export$41fb9f06171c75f4 = $f4833395aa1bca1a$export$2e1e1122cf0cba88;
const $f4833395aa1bca1a$export$602eac185826482c = $f4833395aa1bca1a$export$dad7c95542bacce0;
const $f4833395aa1bca1a$export$c6fdb837b070b4ff = $f4833395aa1bca1a$export$bd1d06c79be19e17;
const $f4833395aa1bca1a$export$7c6e2c02157bb7d2 = $f4833395aa1bca1a$export$b6d9565de1e068cf;
const $f4833395aa1bca1a$export$f99233281efd08a0 = $f4833395aa1bca1a$export$16f7638e4a34b909;
const $f4833395aa1bca1a$export$393edc798c47379d = $f4833395aa1bca1a$export$94e94c2ec2c954d5;
const $f4833395aa1bca1a$export$f39c2d165cd861fe = $f4833395aa1bca1a$export$fba2fb7cd781b7ac;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 56884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $9g4ps$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useDirection", () => $cc45c1b701a63adc$export$b39126d51d94e6f3);
$parcel$export(module.exports, "Provider", () => $cc45c1b701a63adc$export$2881499e37b75b9a);
$parcel$export(module.exports, "DirectionProvider", () => $cc45c1b701a63adc$export$c760c09fdd558351);

const $cc45c1b701a63adc$var$DirectionContext = /*#__PURE__*/ $9g4ps$react.createContext(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $cc45c1b701a63adc$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $9g4ps$react.createElement($cc45c1b701a63adc$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $cc45c1b701a63adc$export$b39126d51d94e6f3(localDir) {
    const globalDir = $9g4ps$react.useContext($cc45c1b701a63adc$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $cc45c1b701a63adc$export$2881499e37b75b9a = $cc45c1b701a63adc$export$c760c09fdd558351;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 45022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cnctE$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FocusGuards", () => $71476a6ed7dbbaf3$export$ac5b58043b79449b);
$parcel$export(module.exports, "Root", () => $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "useFocusGuards", () => $71476a6ed7dbbaf3$export$b7ece24a22aeda8c);

/** Number of components which have requested interest to have focus guards */ let $71476a6ed7dbbaf3$var$count = 0;
function $71476a6ed7dbbaf3$export$ac5b58043b79449b(props) {
    $71476a6ed7dbbaf3$export$b7ece24a22aeda8c();
    return props.children;
}
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $71476a6ed7dbbaf3$export$b7ece24a22aeda8c() {
    $cnctE$react.useEffect(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $71476a6ed7dbbaf3$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $71476a6ed7dbbaf3$var$createFocusGuard());
        $71476a6ed7dbbaf3$var$count++;
        return ()=>{
            if ($71476a6ed7dbbaf3$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $71476a6ed7dbbaf3$var$count--;
        };
    }, []);
}
function $71476a6ed7dbbaf3$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}
const $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9 = $71476a6ed7dbbaf3$export$ac5b58043b79449b;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 31445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $buum9$babelruntimehelpersextends = __webpack_require__(59651);
var $buum9$react = __webpack_require__(18038);
var $buum9$radixuireactcomposerefs = __webpack_require__(24788);
var $buum9$radixuireactprimitive = __webpack_require__(93393);
var $buum9$radixuireactusecallbackref = __webpack_require__(12803);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "FocusScope", () => $2bc01e66e04aa9ed$export$20e40289641fbbb6);
$parcel$export(module.exports, "Root", () => $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9);





const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $2bc01e66e04aa9ed$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * FocusScope
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME = 'FocusScope';
const $2bc01e66e04aa9ed$export$20e40289641fbbb6 = /*#__PURE__*/ $buum9$react.forwardRef((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = $buum9$react.useState(null);
    const onMountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = $buum9$react.useRef(null);
    const composedRefs = $buum9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = $buum9$react.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    $buum9$react.useEffect(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                if (!container1.contains(event.relatedTarget)) $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    $buum9$react.useEffect(()=>{
        if (container1) {
            $2bc01e66e04aa9ed$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $2bc01e66e04aa9ed$var$focusFirst($2bc01e66e04aa9ed$var$removeLinks($2bc01e66e04aa9ed$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $2bc01e66e04aa9ed$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                    container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $2bc01e66e04aa9ed$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $2bc01e66e04aa9ed$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = $buum9$react.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $2bc01e66e04aa9ed$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ $buum9$react.createElement($buum9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($buum9$babelruntimehelpersextends))({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/*#__PURE__*/ Object.assign($2bc01e66e04aa9ed$export$20e40289641fbbb6, {
    displayName: $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $2bc01e66e04aa9ed$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $2bc01e66e04aa9ed$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $2bc01e66e04aa9ed$var$getTabbableEdges(container) {
    const candidates = $2bc01e66e04aa9ed$var$getTabbableCandidates(container);
    const first = $2bc01e66e04aa9ed$var$findVisible(candidates, container);
    const last = $2bc01e66e04aa9ed$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $2bc01e66e04aa9ed$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $2bc01e66e04aa9ed$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$2bc01e66e04aa9ed$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $2bc01e66e04aa9ed$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $2bc01e66e04aa9ed$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $2bc01e66e04aa9ed$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $2bc01e66e04aa9ed$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$focusScopesStack = $2bc01e66e04aa9ed$var$createFocusScopesStack();
function $2bc01e66e04aa9ed$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $2bc01e66e04aa9ed$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $2bc01e66e04aa9ed$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}
const $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9 = $2bc01e66e04aa9ed$export$20e40289641fbbb6;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 35022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $47woD$react = __webpack_require__(18038);
var $47woD$radixuireactuselayouteffect = __webpack_require__(16983);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useId", () => $dc478e4659f630c5$export$f680877a34711e37);


const $dc478e4659f630c5$var$useReactId = $47woD$react['useId'.toString()] || (()=>undefined
);
let $dc478e4659f630c5$var$count = 0;
function $dc478e4659f630c5$export$f680877a34711e37(deterministicId) {
    const [id, setId] = $47woD$react.useState($dc478e4659f630c5$var$useReactId()); // React versions older than 18 will have client-side ids only.
    $47woD$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (!deterministicId) setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($dc478e4659f630c5$var$count++)
        );
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : '');
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 98624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $50Iv9$babelruntimehelpersextends = __webpack_require__(59651);
var $50Iv9$react = __webpack_require__(18038);
var $50Iv9$floatinguireactdom = __webpack_require__(32379);
var $50Iv9$radixuireactarrow = __webpack_require__(90862);
var $50Iv9$radixuireactcomposerefs = __webpack_require__(24788);
var $50Iv9$radixuireactcontext = __webpack_require__(95392);
var $50Iv9$radixuireactprimitive = __webpack_require__(93393);
var $50Iv9$radixuireactusecallbackref = __webpack_require__(12803);
var $50Iv9$radixuireactuselayouteffect = __webpack_require__(16983);
var $50Iv9$radixuireactusesize = __webpack_require__(45123);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createPopperScope", () => $34310caa050a8d63$export$722aac194ae923);
$parcel$export(module.exports, "Popper", () => $34310caa050a8d63$export$badac9ada3a0bdf9);
$parcel$export(module.exports, "PopperAnchor", () => $34310caa050a8d63$export$ecd4e1ccab6ed6d);
$parcel$export(module.exports, "PopperContent", () => $34310caa050a8d63$export$bc4ae5855d3c4fc);
$parcel$export(module.exports, "PopperArrow", () => $34310caa050a8d63$export$79d62cd4e10a3fd0);
$parcel$export(module.exports, "Root", () => $34310caa050a8d63$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Anchor", () => $34310caa050a8d63$export$b688253958b8dfe7);
$parcel$export(module.exports, "Content", () => $34310caa050a8d63$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Arrow", () => $34310caa050a8d63$export$21b07c8f274aebd5);
$parcel$export(module.exports, "SIDE_OPTIONS", () => $34310caa050a8d63$export$36f0086da09c4b9f);
$parcel$export(module.exports, "ALIGN_OPTIONS", () => $34310caa050a8d63$export$3671ffab7b302fc9);










const $34310caa050a8d63$export$36f0086da09c4b9f = [
    'top',
    'right',
    'bottom',
    'left'
];
const $34310caa050a8d63$export$3671ffab7b302fc9 = [
    'start',
    'center',
    'end'
];
/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$POPPER_NAME = 'Popper';
const [$34310caa050a8d63$var$createPopperContext, $34310caa050a8d63$export$722aac194ae923] = $50Iv9$radixuireactcontext.createContextScope($34310caa050a8d63$var$POPPER_NAME);
const [$34310caa050a8d63$var$PopperProvider, $34310caa050a8d63$var$usePopperContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$POPPER_NAME);
const $34310caa050a8d63$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = $50Iv9$react.useState(null);
    return /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$badac9ada3a0bdf9, {
    displayName: $34310caa050a8d63$var$POPPER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$ANCHOR_NAME = 'PopperAnchor';
const $34310caa050a8d63$export$ecd4e1ccab6ed6d = /*#__PURE__*/ $50Iv9$react.forwardRef((props, forwardedRef)=>{
    const { __scopePopper: __scopePopper , virtualRef: virtualRef , ...anchorProps } = props;
    const context = $34310caa050a8d63$var$usePopperContext($34310caa050a8d63$var$ANCHOR_NAME, __scopePopper);
    const ref = $50Iv9$react.useRef(null);
    const composedRefs = $50Iv9$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    $50Iv9$react.useEffect(()=>{
        // Consumer can anchor the popper to something that isn't
        // a DOM node e.g. pointer position, so we override the
        // `anchorRef` with their virtual ref in this case.
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($50Iv9$babelruntimehelpersextends))({}, anchorProps, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$ecd4e1ccab6ed6d, {
    displayName: $34310caa050a8d63$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$CONTENT_NAME = 'PopperContent';
const [$34310caa050a8d63$var$PopperContentProvider, $34310caa050a8d63$var$useContentContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$CONTENT_NAME);
const [$34310caa050a8d63$var$PositionContextProvider, $34310caa050a8d63$var$usePositionContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$CONTENT_NAME, {
    hasParent: false,
    positionUpdateFns: new Set()
});
const $34310caa050a8d63$export$bc4ae5855d3c4fc = /*#__PURE__*/ $50Iv9$react.forwardRef((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , avoidCollisions: avoidCollisions = true , onPlaced: onPlaced , ...contentProps } = props;
    const context = $34310caa050a8d63$var$usePopperContext($34310caa050a8d63$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = $50Iv9$react.useState(null);
    const composedRefs = $50Iv9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContent(node)
    );
    const [arrow, setArrow] = $50Iv9$react.useState(null);
    const arrowSize = $50Iv9$radixuireactusesize.useSize(arrow);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($34310caa050a8d63$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { reference: reference , floating: floating , strategy: strategy , x: x , y: y , placement: placement , middlewareData: middlewareData , update: update  } = $50Iv9$floatinguireactdom.useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: $50Iv9$floatinguireactdom.autoUpdate,
        middleware: [
            $34310caa050a8d63$var$anchorCssProperties(),
            $50Iv9$floatinguireactdom.offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions ? $50Iv9$floatinguireactdom.shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? $50Iv9$floatinguireactdom.limitShift() : undefined,
                ...detectOverflowOptions
            }) : undefined,
            arrow ? $50Iv9$floatinguireactdom.arrow({
                element: arrow,
                padding: arrowPadding
            }) : undefined,
            avoidCollisions ? $50Iv9$floatinguireactdom.flip({
                ...detectOverflowOptions
            }) : undefined,
            $50Iv9$floatinguireactdom.size({
                ...detectOverflowOptions,
                apply: ({ elements: elements , availableWidth: width , availableHeight: height  })=>{
                    elements.floating.style.setProperty('--radix-popper-available-width', `${width}px`);
                    elements.floating.style.setProperty('--radix-popper-available-height', `${height}px`);
                }
            }),
            $34310caa050a8d63$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached ? $50Iv9$floatinguireactdom.hide({
                strategy: 'referenceHidden'
            }) : undefined
        ].filter($34310caa050a8d63$var$isDefined)
    }); // assign the reference dynamically once `Content` has mounted so we can collocate the logic
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        reference(context.anchor);
    }, [
        reference,
        context.anchor
    ]);
    const isPlaced = x !== null && y !== null;
    const [placedSide, placedAlign] = $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = $50Iv9$radixuireactusecallbackref.useCallbackRef(onPlaced);
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (isPlaced) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
        isPlaced,
        handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = $50Iv9$react.useState();
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    const { hasParent: hasParent , positionUpdateFns: positionUpdateFns  } = $34310caa050a8d63$var$usePositionContext($34310caa050a8d63$var$CONTENT_NAME, __scopePopper);
    const isRoot = !hasParent;
    $50Iv9$react.useLayoutEffect(()=>{
        if (!isRoot) {
            positionUpdateFns.add(update);
            return ()=>{
                positionUpdateFns.delete(update);
            };
        }
    }, [
        isRoot,
        positionUpdateFns,
        update
    ]); // when nested contents are rendered in portals, they are appended out of order causing
    // children to be positioned incorrectly if initially open.
    // we need to re-compute the positioning once the parent has finally been placed.
    // https://github.com/floating-ui/floating-ui/issues/1531
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (isRoot && isPlaced) Array.from(positionUpdateFns).reverse().forEach((fn)=>requestAnimationFrame(fn)
        );
    }, [
        isRoot,
        isPlaced,
        positionUpdateFns
    ]);
    const commonProps = {
        'data-side': placedSide,
        'data-align': placedAlign,
        ...contentProps,
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPlaced ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    };
    return /*#__PURE__*/ $50Iv9$react.createElement("div", {
        ref: floating,
        "data-radix-popper-content-wrapper": "",
        style: {
            position: strategy,
            left: 0,
            top: 0,
            transform: isPlaced ? `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)` : 'translate3d(0, -200%, 0)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        } // Floating UI interally calculates logical alignment based the `dir` attribute on
        ,
        dir: props.dir
    }, /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, isRoot ? /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PositionContextProvider, {
        scope: __scopePopper,
        hasParent: true,
        positionUpdateFns: positionUpdateFns
    }, /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, commonProps)) : /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, commonProps)));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$bc4ae5855d3c4fc, {
    displayName: $34310caa050a8d63$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$ARROW_NAME = 'PopperArrow';
const $34310caa050a8d63$var$OPPOSITE_SIDE = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const $34310caa050a8d63$export$79d62cd4e10a3fd0 = /*#__PURE__*/ $50Iv9$react.forwardRef(function $34310caa050a8d63$export$79d62cd4e10a3fd0(props, forwardedRef) {
    const { __scopePopper: __scopePopper , ...arrowProps } = props;
    const contentContext = $34310caa050a8d63$var$useContentContext($34310caa050a8d63$var$ARROW_NAME, __scopePopper);
    const baseSide = $34310caa050a8d63$var$OPPOSITE_SIDE[contentContext.placedSide];
    return(/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    $50Iv9$react.createElement("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: 'absolute',
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
            }[contentContext.placedSide],
            transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: `rotate(180deg)`,
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
        }
    }, /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactarrow.Root, ($parcel$interopDefault($50Iv9$babelruntimehelpersextends))({}, arrowProps, {
        ref: forwardedRef,
        style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: 'block'
        }
    }))));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$79d62cd4e10a3fd0, {
    displayName: $34310caa050a8d63$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $34310caa050a8d63$var$isDefined(value) {
    return value !== undefined;
}
function $34310caa050a8d63$var$isNotNull(value) {
    return value !== null;
}
const $34310caa050a8d63$var$anchorCssProperties = ()=>({
        name: 'anchorCssProperties',
        fn (data) {
            const { rects: rects , elements: elements  } = data;
            const { width: width , height: height  } = rects.reference;
            elements.floating.style.setProperty('--radix-popper-anchor-width', `${width}px`);
            elements.floating.style.setProperty('--radix-popper-anchor-height', `${height}px`);
            return {};
        }
    })
;
const $34310caa050a8d63$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $34310caa050a8d63$export$be92b6f5f03c0fe9 = $34310caa050a8d63$export$badac9ada3a0bdf9;
const $34310caa050a8d63$export$b688253958b8dfe7 = $34310caa050a8d63$export$ecd4e1ccab6ed6d;
const $34310caa050a8d63$export$7c6e2c02157bb7d2 = $34310caa050a8d63$export$bc4ae5855d3c4fc;
const $34310caa050a8d63$export$21b07c8f274aebd5 = $34310caa050a8d63$export$79d62cd4e10a3fd0;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 32379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "arrow": () => (/* binding */ floating_ui_react_dom_esm_arrow),
  "autoPlacement": () => (/* reexport */ autoPlacement),
  "autoUpdate": () => (/* reexport */ autoUpdate),
  "computePosition": () => (/* reexport */ floating_ui_dom_computePosition),
  "detectOverflow": () => (/* reexport */ detectOverflow),
  "flip": () => (/* reexport */ flip),
  "getOverflowAncestors": () => (/* reexport */ getOverflowAncestors),
  "hide": () => (/* reexport */ hide),
  "inline": () => (/* reexport */ inline),
  "limitShift": () => (/* reexport */ limitShift),
  "offset": () => (/* reexport */ offset),
  "shift": () => (/* reexport */ shift),
  "size": () => (/* reexport */ size),
  "useFloating": () => (/* binding */ useFloating)
});

;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getSide(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;

  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;

    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }

  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */

const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));

  if (false) {}

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;

  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: { ...middlewareData[name],
        ...data
      }
    };

    if (false) {}

    if (reset && resetCount <= 50) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;

  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,

  async fn(middlewareArguments) {
    // Since `element` is required, we don't Partial<> the type
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform
    } = middlewareArguments;

    if (element == null) {
      if (false) {}

      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const minProp = axis === 'y' ? 'top' : 'left';
    const maxProp = axis === 'y' ? 'bottom' : 'right';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;

    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }

    const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds

    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max); // Make sure that arrow points at the reference

    const alignmentPadding = alignment === 'start' ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }

});

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }

    return true;
  });
}

/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'autoPlacement',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;

      const {
        x,
        y,
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
      const currentPlacement = placements[currentIndex];

      if (currentPlacement == null) {
        return {};
      }

      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))); // Make `computeCoords` start from the right place

      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements[0]
          }
        };
      }

      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...((_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1]; // There are more placements to check

      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find(_ref => {
        let {
          overflows
        } = _ref;
        return overflows.every(overflow => overflow <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;

      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }

      return {};
    }

  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$map$so;

              const placement = (_overflowsData$map$so = overflowsData.map(d => [d, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }

      return {};
    }

  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}

function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (_temp) {
  let {
    strategy = 'referenceHidden',
    ...detectOverflowOptions
  } = _temp === void 0 ? {} : _temp;
  return {
    name: 'hide',

    async fn(middlewareArguments) {
      const {
        rects
      } = middlewareArguments;

      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }

        case 'escaped':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }

        default:
          {
            return {};
          }
      }
    }

  };
};

async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform,
    elements
  } = middlewareArguments;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(middlewareArguments) : value; // eslint-disable-next-line prefer-const

  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */

const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Shifts the floating element in order to keep it in view when it will overflow
 * a clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }

      const limitedCoords = limiter.fn({ ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return { ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }

  };
};

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    options,

    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = options;
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = typeof offset === 'function' ? offset({ ...rects,
        placement
      }) : offset;
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };

      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;

        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }

      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;

        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);

        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }

      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }

  };
};

/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'size',
    options,

    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform,
        elements
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;

      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }

      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (['left', 'right'].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (['top', 'bottom'].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      const prevDimensions = await platform.getDimensions(elements.floating);
      apply == null ? void 0 : apply({ ...middlewareArguments,
        ...dimensions
      });
      const nextDimensions = await platform.getDimensions(elements.floating);

      if (prevDimensions.width !== nextDimensions.width || prevDimensions.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }

      return {};
    }

  };
};

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'inline',
    options,

    async fn(middlewareArguments) {
      var _await$platform$getCl;

      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = middlewareArguments; // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.

      const {
        padding = 2,
        x,
        y
      } = options;
      const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: rects.reference,
        offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
        strategy
      }) : rects.reference);
      const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
      const paddingObject = getSideObjectFromPadding(padding);

      function getBoundingClientRect() {
        // There are two rects and they are disjoined
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          var _clientRects$find;

          // Find the first rect in which the point is fully inside
          return (_clientRects$find = clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
        } // There are 2 or more connected rects


        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }

          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }

        return fallback;
      }

      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });

      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }

      return {};
    }

  };
};



;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs



function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function getUAString() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
  }

  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || // @ts-ignore (TS 4.1 compat)
  css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}
function isLayoutViewport() {
  // Not Safari
  return !/^((?!chrome|android).)*safari/i.test(getUAString()); // Feature detection for this fails in various ways
  // • Always-visible scrollbar or not
  // • Width of <html>, etc.
  // const vV = win.visualViewport;
  // return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}

const floating_ui_dom_min = Math.min;
const floating_ui_dom_max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;

  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, // @ts-ignore - checked above (TS 4.1 compat)
  isOffsetParentAnElement && isScaled(offsetParent), strategy === 'fixed');
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = floating_ui_dom_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = floating_ui_dom_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += floating_ui_dom_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);

  if (['html', 'body', '#document'].includes(getNodeName(parentNode))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getOverflowAncestors(target));
}

function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element, strategy));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingAncestors.filter(clippingAncestors => isElement(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors


function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === 'clippingAncestors' ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }

  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize: _ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestorResize = _ancestorResize && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;

  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    observer.observe(floating);
  }

  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;

  if (animationFrame) {
    frameLoop();
  }

  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);

    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }

    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }

  update();
  return () => {
    var _observer;

    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;

    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */

const floating_ui_dom_computePosition = (reference, floating, options) => computePosition(reference, floating, {
  platform,
  ...options
});



// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-popper/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






var index = typeof document !== 'undefined' ? react_.useLayoutEffect : react_.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }

  let length, i, keys;

  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        continue;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}

function useLatestRef(value) {
  const ref = react_.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

function useFloating(_temp) {
  let {
    middleware,
    placement = 'bottom',
    strategy = 'absolute',
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const reference = react_.useRef(null);
  const floating = react_.useRef(null);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const cleanupRef = react_.useRef(null);
  const [data, setData] = react_.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = react_.useState(middleware);

  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map(_ref => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map(_ref2 => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }

  const update = react_.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    floating_ui_dom_computePosition(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then(data => {
      if (isMountedRef.current) {
        server_rendering_stub_.flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    // Skip first update
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = react_.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = react_.useCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = react_.useCallback(node => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = react_.useCallback(node => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = react_.useMemo(() => ({
    reference,
    floating
  }), []);
  return react_.useMemo(() => ({ ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */

const floating_ui_react_dom_esm_arrow = options => {
  const {
    element,
    padding
  } = options;

  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }

  return {
    name: 'arrow',
    options,

    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }

        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }

      return {};
    }

  };
};




/***/ }),

/***/ 20085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cg2C9$babelruntimehelpersextends = __webpack_require__(59651);
var $cg2C9$react = __webpack_require__(18038);
var $cg2C9$reactdom = __webpack_require__(98704);
var $cg2C9$radixuinumber = __webpack_require__(12077);
var $cg2C9$radixuiprimitive = __webpack_require__(23010);
var $cg2C9$radixuireactcollection = __webpack_require__(73184);
var $cg2C9$radixuireactcomposerefs = __webpack_require__(24788);
var $cg2C9$radixuireactcontext = __webpack_require__(95392);
var $cg2C9$radixuireactdirection = __webpack_require__(56884);
var $cg2C9$radixuireactdismissablelayer = __webpack_require__(34053);
var $cg2C9$radixuireactfocusguards = __webpack_require__(45022);
var $cg2C9$radixuireactfocusscope = __webpack_require__(31445);
var $cg2C9$radixuireactid = __webpack_require__(35022);
var $cg2C9$radixuireactpopper = __webpack_require__(98624);
var $cg2C9$radixuireactportal = __webpack_require__(42591);
var $cg2C9$radixuireactprimitive = __webpack_require__(93393);
var $cg2C9$radixuireactslot = __webpack_require__(73593);
var $cg2C9$radixuireactusecallbackref = __webpack_require__(12803);
var $cg2C9$radixuireactusecontrollablestate = __webpack_require__(11391);
var $cg2C9$radixuireactuselayouteffect = __webpack_require__(16983);
var $cg2C9$radixuireactuseprevious = __webpack_require__(37454);
var $cg2C9$radixuireactvisuallyhidden = __webpack_require__(99091);
var $cg2C9$ariahidden = __webpack_require__(36860);
var $cg2C9$reactremovescroll = __webpack_require__(88162);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createSelectScope", () => $1345bda09ffc1bc6$export$286727a75dc039bd);
$parcel$export(module.exports, "Select", () => $1345bda09ffc1bc6$export$ef9b1a59e592288f);
$parcel$export(module.exports, "SelectTrigger", () => $1345bda09ffc1bc6$export$3ac1e88a1c0b9f1);
$parcel$export(module.exports, "SelectValue", () => $1345bda09ffc1bc6$export$e288731fd71264f0);
$parcel$export(module.exports, "SelectIcon", () => $1345bda09ffc1bc6$export$99b400cabb58c515);
$parcel$export(module.exports, "SelectPortal", () => $1345bda09ffc1bc6$export$b2af6c9944296213);
$parcel$export(module.exports, "SelectContent", () => $1345bda09ffc1bc6$export$c973a4b3cb86a03d);
$parcel$export(module.exports, "SelectViewport", () => $1345bda09ffc1bc6$export$9ed6e7b40248d36d);
$parcel$export(module.exports, "SelectGroup", () => $1345bda09ffc1bc6$export$ee25a334c55de1f4);
$parcel$export(module.exports, "SelectLabel", () => $1345bda09ffc1bc6$export$f67338d29bd972f8);
$parcel$export(module.exports, "SelectItem", () => $1345bda09ffc1bc6$export$13ef48a934230896);
$parcel$export(module.exports, "SelectItemText", () => $1345bda09ffc1bc6$export$3572fb0fb821ff49);
$parcel$export(module.exports, "SelectItemIndicator", () => $1345bda09ffc1bc6$export$6b9198de19accfe6);
$parcel$export(module.exports, "SelectScrollUpButton", () => $1345bda09ffc1bc6$export$d8117927658af6d7);
$parcel$export(module.exports, "SelectScrollDownButton", () => $1345bda09ffc1bc6$export$ff951e476c12189);
$parcel$export(module.exports, "SelectSeparator", () => $1345bda09ffc1bc6$export$eba4b1df07cb1d3);
$parcel$export(module.exports, "SelectArrow", () => $1345bda09ffc1bc6$export$314f4cb8f8099628);
$parcel$export(module.exports, "Root", () => $1345bda09ffc1bc6$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $1345bda09ffc1bc6$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Value", () => $1345bda09ffc1bc6$export$4c8d1a57a761ef94);
$parcel$export(module.exports, "Icon", () => $1345bda09ffc1bc6$export$f04a61298a47a40f);
$parcel$export(module.exports, "Portal", () => $1345bda09ffc1bc6$export$602eac185826482c);
$parcel$export(module.exports, "Content", () => $1345bda09ffc1bc6$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Viewport", () => $1345bda09ffc1bc6$export$d5c6c08dc2d3ca7);
$parcel$export(module.exports, "Group", () => $1345bda09ffc1bc6$export$eb2fcfdbd7ba97d4);
$parcel$export(module.exports, "Label", () => $1345bda09ffc1bc6$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Item", () => $1345bda09ffc1bc6$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "ItemText", () => $1345bda09ffc1bc6$export$d6e5bf9c43ea9319);
$parcel$export(module.exports, "ItemIndicator", () => $1345bda09ffc1bc6$export$c3468e2714d175fa);
$parcel$export(module.exports, "ScrollUpButton", () => $1345bda09ffc1bc6$export$2f60d3ec9ad468f2);
$parcel$export(module.exports, "ScrollDownButton", () => $1345bda09ffc1bc6$export$bf1aedc3039c8d63);
$parcel$export(module.exports, "Separator", () => $1345bda09ffc1bc6$export$1ff3c3f08ae963c0);
$parcel$export(module.exports, "Arrow", () => $1345bda09ffc1bc6$export$21b07c8f274aebd5);

























const $1345bda09ffc1bc6$var$OPEN_KEYS = [
    ' ',
    'Enter',
    'ArrowUp',
    'ArrowDown'
];
const $1345bda09ffc1bc6$var$SELECTION_KEYS = [
    ' ',
    'Enter'
];
/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$SELECT_NAME = 'Select';
const [$1345bda09ffc1bc6$var$Collection, $1345bda09ffc1bc6$var$useCollection, $1345bda09ffc1bc6$var$createCollectionScope] = $cg2C9$radixuireactcollection.createCollection($1345bda09ffc1bc6$var$SELECT_NAME);
const [$1345bda09ffc1bc6$var$createSelectContext, $1345bda09ffc1bc6$export$286727a75dc039bd] = $cg2C9$radixuireactcontext.createContextScope($1345bda09ffc1bc6$var$SELECT_NAME, [
    $1345bda09ffc1bc6$var$createCollectionScope,
    $cg2C9$radixuireactpopper.createPopperScope
]);
const $1345bda09ffc1bc6$var$usePopperScope = $cg2C9$radixuireactpopper.createPopperScope();
const [$1345bda09ffc1bc6$var$SelectProvider, $1345bda09ffc1bc6$var$useSelectContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$SELECT_NAME);
const [$1345bda09ffc1bc6$var$SelectNativeOptionsProvider, $1345bda09ffc1bc6$var$useSelectNativeOptionsContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$SELECT_NAME);
const $1345bda09ffc1bc6$export$ef9b1a59e592288f = (props)=>{
    const { __scopeSelect: __scopeSelect , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange , dir: dir , name: name , autoComplete: autoComplete , disabled: disabled , required: required  } = props;
    const popperScope = $1345bda09ffc1bc6$var$usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = $cg2C9$react.useState(null);
    const [valueNode, setValueNode] = $cg2C9$react.useState(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = $cg2C9$react.useState(false);
    const direction = $cg2C9$radixuireactdirection.useDirection(dir);
    const [open = false, setOpen] = $cg2C9$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = $cg2C9$radixuireactusecontrollablestate.useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = $cg2C9$react.useRef(null); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = trigger ? Boolean(trigger.closest('form')) : true;
    const [nativeOptionsSet, setNativeOptionsSet] = $cg2C9$react.useState(new Set()); // The native `select` only associates the correct default value if the corresponding
    // `option` is rendered as a child **at the same time** as itself.
    // Because it might take a few renders for our items to gather the information to build
    // the native `option`(s), we generate a key on the `select` to make sure React re-builds it
    // each time the options change.
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value
    ).join(';');
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactpopper.Root, popperScope, /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectProvider, {
        required: required,
        scope: __scopeSelect,
        trigger: trigger,
        onTriggerChange: setTrigger,
        valueNode: valueNode,
        onValueNodeChange: setValueNode,
        valueNodeHasChildren: valueNodeHasChildren,
        onValueNodeHasChildrenChange: setValueNodeHasChildren,
        contentId: $cg2C9$radixuireactid.useId(),
        value: value,
        onValueChange: setValue,
        open: open,
        onOpenChange: setOpen,
        dir: direction,
        triggerPointerDownPosRef: triggerPointerDownPosRef,
        disabled: disabled
    }, /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$Collection.Provider, {
        scope: __scopeSelect
    }, /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: $cg2C9$react.useCallback((option)=>{
            setNativeOptionsSet((prev)=>new Set(prev).add(option)
            );
        }, []),
        onNativeOptionRemove: $cg2C9$react.useCallback((option)=>{
            setNativeOptionsSet((prev)=>{
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
            });
        }, [])
    }, children)), isFormControl ? /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$BubbleSelect, {
        key: nativeSelectKey,
        "aria-hidden": true,
        required: required,
        tabIndex: -1,
        name: name,
        autoComplete: autoComplete,
        value: value // enable form autofill
        ,
        onChange: (event)=>setValue(event.target.value)
        ,
        disabled: disabled
    }, value === undefined ? /*#__PURE__*/ $cg2C9$react.createElement("option", {
        value: ""
    }) : null, Array.from(nativeOptionsSet)) : null));
};
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$ef9b1a59e592288f, {
    displayName: $1345bda09ffc1bc6$var$SELECT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectTrigger
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$TRIGGER_NAME = 'SelectTrigger';
const $1345bda09ffc1bc6$export$3ac1e88a1c0b9f1 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , disabled: disabled = false , ...triggerProps } = props;
    const popperScope = $1345bda09ffc1bc6$var$usePopperScope(__scopeSelect);
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = $1345bda09ffc1bc6$var$useCollection(__scopeSelect);
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = $1345bda09ffc1bc6$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.value === context.value
        );
        const nextItem = $1345bda09ffc1bc6$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem !== undefined) context.onValueChange(nextItem.value);
    });
    const handleOpen = ()=>{
        if (!isDisabled) {
            context.onOpenChange(true); // reset typeahead when we open
            resetTypeahead();
        }
    };
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactpopper.Anchor, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        asChild: true
    }, popperScope), /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? 'open' : 'closed',
        disabled: isDisabled,
        "data-disabled": isDisabled ? '' : undefined,
        "data-placeholder": context.value === undefined ? '' : undefined
    }, triggerProps, {
        ref: composedRefs // Enable compatibility with native label or custom `Label` "click" for Safari:
        ,
        onClick: $cg2C9$radixuiprimitive.composeEventHandlers(triggerProps.onClick, (event)=>{
            // Whilst browsers generally have no issue focusing the trigger when clicking
            // on a label, Safari seems to struggle with the fact that there's no `onClick`.
            // We force `focus` in this case. Note: this doesn't create any other side-effect
            // because we are preventing default in `onPointerDown` so effectively
            // this only runs for a label "click"
            event.currentTarget.focus();
        }),
        onPointerDown: $cg2C9$radixuiprimitive.composeEventHandlers(triggerProps.onPointerDown, (event)=>{
            // prevent implicit pointer capture
            // https://www.w3.org/TR/pointerevents3/#implicit-pointer-capture
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
             // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (event.button === 0 && event.ctrlKey === false) {
                handleOpen();
                context.triggerPointerDownPosRef.current = {
                    x: Math.round(event.pageX),
                    y: Math.round(event.pageY)
                }; // prevent trigger from stealing focus from the active item after opening.
                event.preventDefault();
            }
        }),
        onKeyDown: $cg2C9$radixuiprimitive.composeEventHandlers(triggerProps.onKeyDown, (event)=>{
            const isTypingAhead = searchRef.current !== '';
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if (isTypingAhead && event.key === ' ') return;
            if ($1345bda09ffc1bc6$var$OPEN_KEYS.includes(event.key)) {
                handleOpen();
                event.preventDefault();
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$3ac1e88a1c0b9f1, {
    displayName: $1345bda09ffc1bc6$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectValue
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$VALUE_NAME = 'SelectValue';
const $1345bda09ffc1bc6$export$e288731fd71264f0 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , children: children , placeholder: placeholder , ...valueProps } = props;
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange: onValueNodeHasChildrenChange  } = context;
    const hasChildren = children !== undefined;
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.onValueNodeChange);
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, valueProps, {
        ref: composedRefs // we don't want events from the portalled `SelectValue` children to bubble
        ,
        style: {
            pointerEvents: 'none'
        }
    }), context.value === undefined && placeholder !== undefined ? placeholder : children);
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$e288731fd71264f0, {
    displayName: $1345bda09ffc1bc6$var$VALUE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectIcon
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ICON_NAME = 'SelectIcon';
const $1345bda09ffc1bc6$export$99b400cabb58c515 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , children: children , ...iconProps } = props;
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        "aria-hidden": true
    }, iconProps, {
        ref: forwardedRef
    }), children || '▼');
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$99b400cabb58c515, {
    displayName: $1345bda09ffc1bc6$var$ICON_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectPortal
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$PORTAL_NAME = 'SelectPortal';
const $1345bda09ffc1bc6$export$b2af6c9944296213 = (props)=>{
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactportal.Portal, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        asChild: true
    }, props));
};
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$b2af6c9944296213, {
    displayName: $1345bda09ffc1bc6$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$CONTENT_NAME = 'SelectContent';
const $1345bda09ffc1bc6$export$c973a4b3cb86a03d = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = $cg2C9$react.useState(); // setting the fragment in `useLayoutEffect` as `DocumentFragment` doesn't exist on the server
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? /*#__PURE__*/ $cg2C9$reactdom.createPortal(/*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectContentProvider, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$Collection.Slot, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ $cg2C9$react.createElement("div", null, props.children))), frag) : null;
    }
    return /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectContentImpl, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$c973a4b3cb86a03d, {
    displayName: $1345bda09ffc1bc6$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectContentImpl
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$CONTENT_MARGIN = 10;
const [$1345bda09ffc1bc6$var$SelectContentProvider, $1345bda09ffc1bc6$var$useSelectContentContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$CONTENT_NAME);
const $1345bda09ffc1bc6$var$CONTENT_IMPL_NAME = 'SelectContentImpl';
const $1345bda09ffc1bc6$var$SelectContentImpl = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , position: position = 'item-aligned' , onCloseAutoFocus: onCloseAutoFocus , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , side: //
    // PopperContent props
    side , sideOffset: sideOffset , align: align , alignOffset: alignOffset , arrowPadding: arrowPadding , collisionBoundary: collisionBoundary , collisionPadding: collisionPadding , sticky: sticky , hideWhenDetached: hideWhenDetached , avoidCollisions: avoidCollisions , //
    ...contentProps } = props;
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$CONTENT_NAME, __scopeSelect);
    const [content, setContent] = $cg2C9$react.useState(null);
    const [viewport, setViewport] = $cg2C9$react.useState(null);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContent(node)
    );
    const [selectedItem, setSelectedItem] = $cg2C9$react.useState(null);
    const [selectedItemText, setSelectedItemText] = $cg2C9$react.useState(null);
    const getItems = $1345bda09ffc1bc6$var$useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = $cg2C9$react.useState(false);
    const firstValidItemFoundRef = $cg2C9$react.useRef(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    $cg2C9$react.useEffect(()=>{
        if (content) return $cg2C9$ariahidden.hideOthers(content);
    }, [
        content
    ]); // Make sure the whole tree has focus guards as our `Select` may be
    // the last element in the DOM (because of the `Portal`)
    $cg2C9$radixuireactfocusguards.useFocusGuards();
    const focusFirst = $cg2C9$react.useCallback((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current
        );
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            // if focus is already where we want to go, we don't want to keep going through the candidates
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate === null || candidate === void 0 || candidate.scrollIntoView({
                block: 'nearest'
            }); // viewport might have padding so scroll to its edges when focusing first/last items.
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate === null || candidate === void 0 || candidate.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = $cg2C9$react.useCallback(()=>focusFirst([
            selectedItem,
            content
        ])
    , [
        focusFirst,
        selectedItem,
        content
    ]); // Since this is not dependent on layout, we want to ensure this runs at the same time as
    // other effects across components. Hence why we don't call `focusSelectedItem` inside `position`.
    $cg2C9$react.useEffect(()=>{
        if (isPositioned) focusSelectedItem();
    }, [
        isPositioned,
        focusSelectedItem
    ]); // prevent selecting items on `pointerup` in some cases after opening from `pointerdown`
    // and close on `pointerup` outside.
    const { onOpenChange: onOpenChange , triggerPointerDownPosRef: triggerPointerDownPosRef  } = context;
    $cg2C9$react.useEffect(()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
                    y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
                };
            };
            const handlePointerUp = (event)=>{
                // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
                else // otherwise, if the event was outside the content, close.
                if (!content.contains(event.target)) onOpenChange(false);
                document.removeEventListener('pointermove', handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    $cg2C9$react.useEffect(()=>{
        const close = ()=>onOpenChange(false)
        ;
        window.addEventListener('blur', close);
        window.addEventListener('resize', close);
        return ()=>{
            window.removeEventListener('blur', close);
            window.removeEventListener('resize', close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = $1345bda09ffc1bc6$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement
        );
        const nextItem = $1345bda09ffc1bc6$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>nextItem.ref.current.focus()
        );
    });
    const itemRefCallback = $cg2C9$react.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = $cg2C9$react.useCallback(()=>content === null || content === void 0 ? void 0 : content.focus()
    , [
        content
    ]);
    const itemTextRefCallback = $cg2C9$react.useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) setSelectedItemText(node);
    }, [
        context.value
    ]);
    const SelectPosition = position === 'popper' ? $1345bda09ffc1bc6$var$SelectPopperPosition : $1345bda09ffc1bc6$var$SelectItemAlignedPosition; // Silently ignore props that are not supported by `SelectItemAlignedPosition`
    const popperContentProps = SelectPosition === $1345bda09ffc1bc6$var$SelectPopperPosition ? {
        side: side,
        sideOffset: sideOffset,
        align: align,
        alignOffset: alignOffset,
        arrowPadding: arrowPadding,
        collisionBoundary: collisionBoundary,
        collisionPadding: collisionPadding,
        sticky: sticky,
        hideWhenDetached: hideWhenDetached,
        avoidCollisions: avoidCollisions
    } : {};
    return /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectContentProvider, {
        scope: __scopeSelect,
        content: content,
        viewport: viewport,
        onViewportChange: setViewport,
        itemRefCallback: itemRefCallback,
        selectedItem: selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback: itemTextRefCallback,
        focusSelectedItem: focusSelectedItem,
        selectedItemText: selectedItemText,
        position: position,
        isPositioned: isPositioned,
        searchRef: searchRef
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$reactremovescroll.RemoveScroll, {
        as: $cg2C9$radixuireactslot.Slot,
        allowPinchZoom: true
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactfocusscope.FocusScope, {
        asChild: true // we make sure we're not trapping once it's been closed
        ,
        trapped: context.open,
        onMountAutoFocus: (event)=>{
            // we prevent open autofocus because we manually focus the selected item
            event.preventDefault();
        },
        onUnmountAutoFocus: $cg2C9$radixuiprimitive.composeEventHandlers(onCloseAutoFocus, (event)=>{
            var _context$trigger;
            (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
                preventScroll: true
            });
            event.preventDefault();
        })
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactdismissablelayer.DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside // When focus is trapped, a focusout event may still happen.
        ,
        onFocusOutside: (event)=>event.preventDefault()
        ,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ $cg2C9$react.createElement(SelectPosition, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        role: "listbox",
        id: context.contentId,
        "data-state": context.open ? 'open' : 'closed',
        dir: context.dir,
        onContextMenu: (event)=>event.preventDefault()
    }, contentProps, popperContentProps, {
        onPlaced: ()=>setIsPositioned(true)
        ,
        ref: composedRefs,
        style: {
            // flex layout so we can place the scroll buttons properly
            display: 'flex',
            flexDirection: 'column',
            // reset the outline by default as the content MAY get focused
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: $cg2C9$radixuiprimitive.composeEventHandlers(contentProps.onKeyDown, (event)=>{
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey; // select should not be navigated using tab key so we prevent it
            if (event.key === 'Tab') event.preventDefault();
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if ([
                'ArrowUp',
                'ArrowDown',
                'Home',
                'End'
            ].includes(event.key)) {
                const items = getItems().filter((item)=>!item.disabled
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if ([
                    'ArrowUp',
                    'End'
                ].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
                if ([
                    'ArrowUp',
                    'ArrowDown'
                ].includes(event.key)) {
                    const currentElement = event.target;
                    const currentIndex = candidateNodes.indexOf(currentElement);
                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>focusFirst(candidateNodes)
                );
                event.preventDefault();
            }
        })
    }))))));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$var$SelectContentImpl, {
    displayName: $1345bda09ffc1bc6$var$CONTENT_IMPL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemAlignedPosition
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ITEM_ALIGNED_POSITION_NAME = 'SelectItemAlignedPosition';
const $1345bda09ffc1bc6$var$SelectItemAlignedPosition = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onPlaced: onPlaced , ...popperProps } = props;
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$CONTENT_NAME, __scopeSelect);
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = $cg2C9$react.useState(null);
    const [content, setContent] = $cg2C9$react.useState(null);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContent(node)
    );
    const getItems = $1345bda09ffc1bc6$var$useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = $cg2C9$react.useRef(false);
    const shouldRepositionRef = $cg2C9$react.useRef(true);
    const { viewport: viewport , selectedItem: selectedItem , selectedItemText: selectedItemText , focusSelectedItem: focusSelectedItem  } = contentContext;
    const position = $cg2C9$react.useCallback(()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect(); // -----------------------------------------------------------------------------------------
            //  Horizontal positioning
            // -----------------------------------------------------------------------------------------
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== 'rtl') {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - $1345bda09ffc1bc6$var$CONTENT_MARGIN;
                const clampedLeft = $cg2C9$radixuinumber.clamp(left, [
                    $1345bda09ffc1bc6$var$CONTENT_MARGIN,
                    rightEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.left = clampedLeft + 'px';
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - $1345bda09ffc1bc6$var$CONTENT_MARGIN;
                const clampedRight = $cg2C9$radixuinumber.clamp(right, [
                    $1345bda09ffc1bc6$var$CONTENT_MARGIN,
                    leftEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.right = clampedRight + 'px';
            } // -----------------------------------------------------------------------------------------
            // Vertical positioning
            // -----------------------------------------------------------------------------------------
            const items = getItems();
            const availableHeight = window.innerHeight - $1345bda09ffc1bc6$var$CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth; // prettier-ignore
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $1345bda09ffc1bc6$var$CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + 'px';
            } else {
                const isFirstItem = selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + 'px';
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${$1345bda09ffc1bc6$var$CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + 'px';
            contentWrapper.style.maxHeight = availableHeight + 'px'; // -----------------------------------------------------------------------------------------
            onPlaced === null || onPlaced === void 0 || onPlaced(); // we don't want the initial scroll position adjustment to trigger "expand on scroll"
            // so we explicitly turn it on only after they've registered.
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true
            );
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>position()
    , [
        position
    ]); // copy z-index from content to wrapper
    const [contentZIndex, setContentZIndex] = $cg2C9$react.useState();
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]); // When the viewport becomes scrollable at the top, the scroll up button will mount.
    // Because it is part of the normal flow, it will push down the viewport, thus throwing our
    // trigger => selectedItem alignment off by the amount the viewport was pushed down.
    // We wait for this to happen and then re-run the positining logic one more time to account for it.
    const handleScrollButtonChange = $cg2C9$react.useCallback((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper: contentWrapper,
        shouldExpandOnScrollRef: shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange
    }, /*#__PURE__*/ $cg2C9$react.createElement("div", {
        ref: setContentWrapper,
        style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: contentZIndex
        }
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, popperProps, {
        ref: composedRefs,
        style: {
            // When we get the height of the content, it includes borders. If we were to set
            // the height without having `boxSizing: 'border-box'` it would be too big.
            boxSizing: 'border-box',
            // We need to ensure the content doesn't get taller than the wrapper
            maxHeight: '100%',
            ...popperProps.style
        }
    }))));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$var$SelectItemAlignedPosition, {
    displayName: $1345bda09ffc1bc6$var$ITEM_ALIGNED_POSITION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectPopperPosition
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$POPPER_POSITION_NAME = 'SelectPopperPosition';
const $1345bda09ffc1bc6$var$SelectPopperPosition = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , align: align = 'start' , collisionPadding: collisionPadding = $1345bda09ffc1bc6$var$CONTENT_MARGIN , ...popperProps } = props;
    const popperScope = $1345bda09ffc1bc6$var$usePopperScope(__scopeSelect);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactpopper.Content, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, popperScope, popperProps, {
        ref: forwardedRef,
        align: align,
        collisionPadding: collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: 'border-box',
            ...popperProps.style,
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$var$SelectPopperPosition, {
    displayName: $1345bda09ffc1bc6$var$POPPER_POSITION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectViewport
 * -----------------------------------------------------------------------------------------------*/ const [$1345bda09ffc1bc6$var$SelectViewportProvider, $1345bda09ffc1bc6$var$useSelectViewportContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$CONTENT_NAME, {});
const $1345bda09ffc1bc6$var$VIEWPORT_NAME = 'SelectViewport';
const $1345bda09ffc1bc6$export$9ed6e7b40248d36d = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...viewportProps } = props;
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$VIEWPORT_NAME, __scopeSelect);
    const viewportContext = $1345bda09ffc1bc6$var$useSelectViewportContext($1345bda09ffc1bc6$var$VIEWPORT_NAME, __scopeSelect);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = $cg2C9$react.useRef(0);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$react.Fragment, null, /*#__PURE__*/ $cg2C9$react.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$Collection.Slot, {
        scope: __scopeSelect
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        "data-radix-select-viewport": "",
        role: "presentation"
    }, viewportProps, {
        ref: composedRefs,
        style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: 'relative',
            flex: 1,
            overflow: 'auto',
            ...viewportProps.style
        },
        onScroll: $cg2C9$radixuiprimitive.composeEventHandlers(viewportProps.onScroll, (event)=>{
            const viewport = event.currentTarget;
            const { contentWrapper: contentWrapper , shouldExpandOnScrollRef: shouldExpandOnScrollRef  } = viewportContext;
            if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
                const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                if (scrolledBy > 0) {
                    const availableHeight = window.innerHeight - $1345bda09ffc1bc6$var$CONTENT_MARGIN * 2;
                    const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                    const cssHeight = parseFloat(contentWrapper.style.height);
                    const prevHeight = Math.max(cssMinHeight, cssHeight);
                    if (prevHeight < availableHeight) {
                        const nextHeight = prevHeight + scrolledBy;
                        const clampedNextHeight = Math.min(availableHeight, nextHeight);
                        const heightDiff = nextHeight - clampedNextHeight;
                        contentWrapper.style.height = clampedNextHeight + 'px';
                        if (contentWrapper.style.bottom === '0px') {
                            viewport.scrollTop = heightDiff > 0 ? heightDiff : 0; // ensure the content stays pinned to the bottom
                            contentWrapper.style.justifyContent = 'flex-end';
                        }
                    }
                }
            }
            prevScrollTopRef.current = viewport.scrollTop;
        })
    }))));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$9ed6e7b40248d36d, {
    displayName: $1345bda09ffc1bc6$var$VIEWPORT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$GROUP_NAME = 'SelectGroup';
const [$1345bda09ffc1bc6$var$SelectGroupContextProvider, $1345bda09ffc1bc6$var$useSelectGroupContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$GROUP_NAME);
const $1345bda09ffc1bc6$export$ee25a334c55de1f4 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...groupProps } = props;
    const groupId = $cg2C9$radixuireactid.useId();
    return /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        role: "group",
        "aria-labelledby": groupId
    }, groupProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$ee25a334c55de1f4, {
    displayName: $1345bda09ffc1bc6$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectLabel
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$LABEL_NAME = 'SelectLabel';
const $1345bda09ffc1bc6$export$f67338d29bd972f8 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...labelProps } = props;
    const groupContext = $1345bda09ffc1bc6$var$useSelectGroupContext($1345bda09ffc1bc6$var$LABEL_NAME, __scopeSelect);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        id: groupContext.id
    }, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$f67338d29bd972f8, {
    displayName: $1345bda09ffc1bc6$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ITEM_NAME = 'SelectItem';
const [$1345bda09ffc1bc6$var$SelectItemContextProvider, $1345bda09ffc1bc6$var$useSelectItemContext] = $1345bda09ffc1bc6$var$createSelectContext($1345bda09ffc1bc6$var$ITEM_NAME);
const $1345bda09ffc1bc6$export$13ef48a934230896 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , value: value , disabled: disabled = false , textValue: textValueProp , ...itemProps } = props;
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$ITEM_NAME, __scopeSelect);
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = $cg2C9$react.useState(textValueProp !== null && textValueProp !== void 0 ? textValueProp : '');
    const [isFocused, setIsFocused] = $cg2C9$react.useState(false);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>{
        var _contentContext$itemR;
        return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
    });
    const textId = $cg2C9$radixuireactid.useId();
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    return /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectItemContextProvider, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textId: textId,
        isSelected: isSelected,
        onItemTextChange: $cg2C9$react.useCallback((node)=>{
            setTextValue((prevTextValue)=>{
                var _node$textContent;
                return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '').trim();
            });
        }, [])
    }, /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$Collection.ItemSlot, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textValue: textValue
    }, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? '' : undefined // `isFocused` caveat fixes stuttering in VoiceOver
        ,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? 'checked' : 'unchecked',
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined,
        tabIndex: disabled ? undefined : -1
    }, itemProps, {
        ref: composedRefs,
        onFocus: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onBlur, ()=>setIsFocused(false)
        ),
        onPointerUp: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onPointerUp, handleSelect),
        onPointerMove: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onPointerMove, (event)=>{
            if (disabled) {
                var _contentContext$onIte;
                (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
            } else // even though safari doesn't support this option, it's acceptable
            // as it only means it might scroll a few pixels when using the pointer.
            event.currentTarget.focus({
                preventScroll: true
            });
        }),
        onPointerLeave: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onPointerLeave, (event)=>{
            if (event.currentTarget === document.activeElement) {
                var _contentContext$onIte2;
                (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
            }
        }),
        onKeyDown: $cg2C9$radixuiprimitive.composeEventHandlers(itemProps.onKeyDown, (event)=>{
            var _contentContext$searc;
            const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== '';
            if (isTypingAhead && event.key === ' ') return;
            if ($1345bda09ffc1bc6$var$SELECTION_KEYS.includes(event.key)) handleSelect(); // prevent page scroll if using the space key to select an item
            if (event.key === ' ') event.preventDefault();
        })
    }))));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$13ef48a934230896, {
    displayName: $1345bda09ffc1bc6$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemText
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ITEM_TEXT_NAME = 'SelectItemText';
const $1345bda09ffc1bc6$export$3572fb0fb821ff49 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , ...itemTextProps } = props;
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = $1345bda09ffc1bc6$var$useSelectItemContext($1345bda09ffc1bc6$var$ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = $1345bda09ffc1bc6$var$useSelectNativeOptionsContext($1345bda09ffc1bc6$var$ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = $cg2C9$react.useState(null);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setItemTextNode(node)
    , itemContext.onItemTextChange, (node)=>{
        var _contentContext$itemT;
        return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    });
    const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
    const nativeOption = $cg2C9$react.useMemo(()=>/*#__PURE__*/ $cg2C9$react.createElement("option", {
            key: itemContext.value,
            value: itemContext.value,
            disabled: itemContext.disabled
        }, textContent)
    , [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd: onNativeOptionAdd , onNativeOptionRemove: onNativeOptionRemove  } = nativeOptionsContext;
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption)
        ;
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$react.Fragment, null, /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        id: itemContext.textId
    }, itemTextProps, {
        ref: composedRefs
    })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /*#__PURE__*/ $cg2C9$reactdom.createPortal(itemTextProps.children, context.valueNode) : null);
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$3572fb0fb821ff49, {
    displayName: $1345bda09ffc1bc6$var$ITEM_TEXT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ITEM_INDICATOR_NAME = 'SelectItemIndicator';
const $1345bda09ffc1bc6$export$6b9198de19accfe6 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...itemIndicatorProps } = props;
    const itemContext = $1345bda09ffc1bc6$var$useSelectItemContext($1345bda09ffc1bc6$var$ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        "aria-hidden": true
    }, itemIndicatorProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$6b9198de19accfe6, {
    displayName: $1345bda09ffc1bc6$var$ITEM_INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollUpButton
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$SCROLL_UP_BUTTON_NAME = 'SelectScrollUpButton';
const $1345bda09ffc1bc6$export$d8117927658af6d7 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $1345bda09ffc1bc6$var$useSelectViewportContext($1345bda09ffc1bc6$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp1, setCanScrollUp] = $cg2C9$react.useState(false);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const canScrollUp = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp1 ? /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectScrollButtonImpl, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
    })) : null;
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$d8117927658af6d7, {
    displayName: $1345bda09ffc1bc6$var$SCROLL_UP_BUTTON_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollDownButton
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$SCROLL_DOWN_BUTTON_NAME = 'SelectScrollDownButton';
const $1345bda09ffc1bc6$export$ff951e476c12189 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $1345bda09ffc1bc6$var$useSelectViewportContext($1345bda09ffc1bc6$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown1, setCanScrollDown] = $cg2C9$react.useState(false);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight; // we use Math.ceil here because if the UI is zoomed-in
                // `scrollTop` is not always reported as an integer
                const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown1 ? /*#__PURE__*/ $cg2C9$react.createElement($1345bda09ffc1bc6$var$SelectScrollButtonImpl, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
    })) : null;
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$ff951e476c12189, {
    displayName: $1345bda09ffc1bc6$var$SCROLL_DOWN_BUTTON_NAME
});
const $1345bda09ffc1bc6$var$SelectScrollButtonImpl = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onAutoScroll: onAutoScroll , ...scrollIndicatorProps } = props;
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext('SelectScrollButton', __scopeSelect);
    const autoScrollTimerRef = $cg2C9$react.useRef(null);
    const getItems = $1345bda09ffc1bc6$var$useCollection(__scopeSelect);
    const clearAutoScrollTimer = $cg2C9$react.useCallback(()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    $cg2C9$react.useEffect(()=>{
        return ()=>clearAutoScrollTimer()
        ;
    }, [
        clearAutoScrollTimer
    ]); // When the viewport becomes scrollable on either side, the relevant scroll button will mount.
    // Because it is part of the normal flow, it will push down (top button) or shrink (bottom button)
    // the viewport, potentially causing the active item to now be partially out of view.
    // We re-run the `scrollIntoView` logic to make sure it stays within the viewport.
    $cg2C9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        var _activeItem$ref$curre;
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement
        );
        activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
            block: 'nearest'
        });
    }, [
        getItems
    ]);
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        "aria-hidden": true
    }, scrollIndicatorProps, {
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerMove: $cg2C9$radixuiprimitive.composeEventHandlers(scrollIndicatorProps.onPointerMove, ()=>{
            var _contentContext$onIte3;
            (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
            if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerLeave: $cg2C9$radixuiprimitive.composeEventHandlers(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectSeparator
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$SEPARATOR_NAME = 'SelectSeparator';
const $1345bda09ffc1bc6$export$eba4b1df07cb1d3 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...separatorProps } = props;
    return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({
        "aria-hidden": true
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$eba4b1df07cb1d3, {
    displayName: $1345bda09ffc1bc6$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SelectArrow
 * -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$ARROW_NAME = 'SelectArrow';
const $1345bda09ffc1bc6$export$314f4cb8f8099628 = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...arrowProps } = props;
    const popperScope = $1345bda09ffc1bc6$var$usePopperScope(__scopeSelect);
    const context = $1345bda09ffc1bc6$var$useSelectContext($1345bda09ffc1bc6$var$ARROW_NAME, __scopeSelect);
    const contentContext = $1345bda09ffc1bc6$var$useSelectContentContext($1345bda09ffc1bc6$var$ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === 'popper' ? /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactpopper.Arrow, ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, popperScope, arrowProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($1345bda09ffc1bc6$export$314f4cb8f8099628, {
    displayName: $1345bda09ffc1bc6$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $1345bda09ffc1bc6$var$BubbleSelect = /*#__PURE__*/ $cg2C9$react.forwardRef((props, forwardedRef)=>{
    const { value: value , ...selectProps } = props;
    const ref = $cg2C9$react.useRef(null);
    const composedRefs = $cg2C9$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const prevValue = $cg2C9$radixuireactuseprevious.usePrevious(value); // Bubble value change to parents (e.g form change event)
    $cg2C9$react.useEffect(()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('change', {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully use a `select` here to support form autofill as much
   * as possible.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   *
   * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
   * won't work otherwise.
   */ return /*#__PURE__*/ $cg2C9$react.createElement($cg2C9$radixuireactvisuallyhidden.VisuallyHidden, {
        asChild: true
    }, /*#__PURE__*/ $cg2C9$react.createElement("select", ($parcel$interopDefault($cg2C9$babelruntimehelpersextends))({}, selectProps, {
        ref: composedRefs,
        defaultValue: value
    })));
});
$1345bda09ffc1bc6$var$BubbleSelect.displayName = 'BubbleSelect';
function $1345bda09ffc1bc6$var$useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = $cg2C9$radixuireactusecallbackref.useCallbackRef(onSearchChange);
    const searchRef = $cg2C9$react.useRef('');
    const timerRef = $cg2C9$react.useRef(0);
    const handleTypeaheadSearch = $cg2C9$react.useCallback((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current); // Reset `searchRef` 1 second after it was last updated
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = $cg2C9$react.useCallback(()=>{
        searchRef.current = '';
        window.clearTimeout(timerRef.current);
    }, []);
    $cg2C9$react.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in a list of items,
 * the search and the current item, and returns the next item (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through items starting with that character)
 *
 * We also reorder the items by wrapping the array around the current item.
 * This is so we always look forward from the current item, and picking the first
 * item will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current item from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current item still matches.
 */ function $1345bda09ffc1bc6$var$findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = $1345bda09ffc1bc6$var$wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem
    );
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextItem !== currentItem ? nextItem : undefined;
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $1345bda09ffc1bc6$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $1345bda09ffc1bc6$export$be92b6f5f03c0fe9 = $1345bda09ffc1bc6$export$ef9b1a59e592288f;
const $1345bda09ffc1bc6$export$41fb9f06171c75f4 = $1345bda09ffc1bc6$export$3ac1e88a1c0b9f1;
const $1345bda09ffc1bc6$export$4c8d1a57a761ef94 = $1345bda09ffc1bc6$export$e288731fd71264f0;
const $1345bda09ffc1bc6$export$f04a61298a47a40f = $1345bda09ffc1bc6$export$99b400cabb58c515;
const $1345bda09ffc1bc6$export$602eac185826482c = $1345bda09ffc1bc6$export$b2af6c9944296213;
const $1345bda09ffc1bc6$export$7c6e2c02157bb7d2 = $1345bda09ffc1bc6$export$c973a4b3cb86a03d;
const $1345bda09ffc1bc6$export$d5c6c08dc2d3ca7 = $1345bda09ffc1bc6$export$9ed6e7b40248d36d;
const $1345bda09ffc1bc6$export$eb2fcfdbd7ba97d4 = $1345bda09ffc1bc6$export$ee25a334c55de1f4;
const $1345bda09ffc1bc6$export$b04be29aa201d4f5 = $1345bda09ffc1bc6$export$f67338d29bd972f8;
const $1345bda09ffc1bc6$export$6d08773d2e66f8f2 = $1345bda09ffc1bc6$export$13ef48a934230896;
const $1345bda09ffc1bc6$export$d6e5bf9c43ea9319 = $1345bda09ffc1bc6$export$3572fb0fb821ff49;
const $1345bda09ffc1bc6$export$c3468e2714d175fa = $1345bda09ffc1bc6$export$6b9198de19accfe6;
const $1345bda09ffc1bc6$export$2f60d3ec9ad468f2 = $1345bda09ffc1bc6$export$d8117927658af6d7;
const $1345bda09ffc1bc6$export$bf1aedc3039c8d63 = $1345bda09ffc1bc6$export$ff951e476c12189;
const $1345bda09ffc1bc6$export$1ff3c3f08ae963c0 = $1345bda09ffc1bc6$export$eba4b1df07cb1d3;
const $1345bda09ffc1bc6$export$21b07c8f274aebd5 = $1345bda09ffc1bc6$export$314f4cb8f8099628;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 37454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $kjM8v$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "usePrevious", () => $11bc82d0001dc9a8$export$5cae361ad82dce8b);

function $11bc82d0001dc9a8$export$5cae361ad82dce8b(value) {
    const ref = $kjM8v$react.useRef({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return $kjM8v$react.useMemo(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 45123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ksDzM$react = __webpack_require__(18038);
var $ksDzM$radixuireactuselayouteffect = __webpack_require__(16983);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useSize", () => $d2c1d285af17635b$export$1ab7ae714698c4b8);


function $d2c1d285af17635b$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = $ksDzM$react.useState(undefined);
    $ksDzM$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 36860:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                var attr = node.getAttribute(controlAttribute);
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute(controlAttribute, 'true');
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
exports.hideOthers = hideOthers;
/**
 * Marks everything except given node(or nodes) as inert
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var inertOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-inert-ed'; }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
exports.inertOthers = inertOthers;
/**
 * @returns if current browser supports inert
 */
var supportsInert = function () {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
exports.supportsInert = supportsInert;
/**
 * Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var suppressOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-suppressed'; }
    return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
};
exports.suppressOthers = suppressOthers;


/***/ }),

/***/ 69364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var currentNonce;
exports.setNonce = function (nonce) {
    currentNonce = nonce;
};
exports.getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ 85745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollBar = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_style_singleton_1 = __webpack_require__(66950);
var constants_1 = __webpack_require__(20641);
var utils_1 = __webpack_require__(64149);
var Style = (0, react_style_singleton_1.styleSingleton)();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React.useMemo(function () { return (0, utils_1.getGapWidth)(gapMode); }, [gapMode]);
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};
exports.RemoveScrollBar = RemoveScrollBar;


/***/ }),

/***/ 20641:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
exports.zeroRightClassName = 'right-scroll-bar-position';
exports.fullWidthClassName = 'width-before-scroll-bar';
exports.noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
exports.removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ 45247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
var component_1 = __webpack_require__(85745);
Object.defineProperty(exports, "RemoveScrollBar", ({ enumerable: true, get: function () { return component_1.RemoveScrollBar; } }));
var constants_1 = __webpack_require__(20641);
Object.defineProperty(exports, "zeroRightClassName", ({ enumerable: true, get: function () { return constants_1.zeroRightClassName; } }));
Object.defineProperty(exports, "fullWidthClassName", ({ enumerable: true, get: function () { return constants_1.fullWidthClassName; } }));
Object.defineProperty(exports, "noScrollbarsClassName", ({ enumerable: true, get: function () { return constants_1.noScrollbarsClassName; } }));
Object.defineProperty(exports, "removedBarSizeVariable", ({ enumerable: true, get: function () { return constants_1.removedBarSizeVariable; } }));
var utils_1 = __webpack_require__(64149);
Object.defineProperty(exports, "getGapWidth", ({ enumerable: true, get: function () { return utils_1.getGapWidth; } }));


/***/ }),

/***/ 64149:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.zeroGap = void 0;
exports.zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return exports.zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};
exports.getGapWidth = getGapWidth;


/***/ }),

/***/ 27606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var UI_1 = __webpack_require__(27694);
var sidecar_1 = tslib_1.__importDefault(__webpack_require__(14808));
var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref: ref, sideCar: sidecar_1.default }))); });
ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
exports["default"] = ReactRemoveScroll;


/***/ }),

/***/ 81941:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_remove_scroll_bar_1 = __webpack_require__(45247);
var react_style_singleton_1 = __webpack_require__(66950);
var aggresiveCapture_1 = __webpack_require__(32802);
var handleScroll_1 = __webpack_require__(34247);
var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
exports.getTouchXY = getTouchXY;
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
exports.getDeltaXY = getDeltaXY;
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(function () { return (0, react_style_singleton_1.styleSingleton)(); })[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null));
}
exports.RemoveScrollSideCar = RemoveScrollSideCar;


/***/ }),

/***/ 27694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var constants_1 = __webpack_require__(20641);
var use_callback_ref_1 = __webpack_require__(67974);
var medium_1 = __webpack_require__(89960);
var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
    var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React.cloneElement(React.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, tslib_1.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
exports.RemoveScroll = RemoveScroll;
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants_1.fullWidthClassName,
    zeroRight: constants_1.zeroRightClassName,
};


/***/ }),

/***/ 32802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonPassive = void 0;
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
exports.nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ 34247:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleScroll = exports.locationCouldBeScrolled = void 0;
var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
exports.locationCouldBeScrolled = locationCouldBeScrolled;
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
exports.handleScroll = handleScroll;


/***/ }),

/***/ 88162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(53265);
var Combination_1 = tslib_1.__importDefault(__webpack_require__(27606));
exports.RemoveScroll = Combination_1.default;


/***/ }),

/***/ 89960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectCar = void 0;
var use_sidecar_1 = __webpack_require__(32145);
exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();


/***/ }),

/***/ 14808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var use_sidecar_1 = __webpack_require__(32145);
var SideEffect_1 = __webpack_require__(81941);
var medium_1 = __webpack_require__(89960);
exports["default"] = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);


/***/ }),

/***/ 94189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleSingleton = void 0;
var hook_1 = __webpack_require__(2886);
/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = (0, hook_1.styleHookSingleton)();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
exports.styleSingleton = styleSingleton;


/***/ }),

/***/ 2886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = void 0;
var tslib_1 = __webpack_require__(53265);
var React = tslib_1.__importStar(__webpack_require__(18038));
var singleton_1 = __webpack_require__(42897);
/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = (0, singleton_1.stylesheetSingleton)();
    return function (styles, isDynamic) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};
exports.styleHookSingleton = styleHookSingleton;


/***/ }),

/***/ 66950:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
var component_1 = __webpack_require__(94189);
Object.defineProperty(exports, "styleSingleton", ({ enumerable: true, get: function () { return component_1.styleSingleton; } }));
var singleton_1 = __webpack_require__(42897);
Object.defineProperty(exports, "stylesheetSingleton", ({ enumerable: true, get: function () { return singleton_1.stylesheetSingleton; } }));
var hook_1 = __webpack_require__(2886);
Object.defineProperty(exports, "styleHookSingleton", ({ enumerable: true, get: function () { return hook_1.styleHookSingleton; } }));


/***/ }),

/***/ 42897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stylesheetSingleton = void 0;
var get_nonce_1 = __webpack_require__(69364);
function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, get_nonce_1.getNonce)();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};
exports.stylesheetSingleton = stylesheetSingleton;


/***/ })

};
;