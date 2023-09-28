exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 97034:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 54713:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6106));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56844))

/***/ }),

/***/ 6106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Providers": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/use-shopping-cart/dist/react.js
var react = __webpack_require__(69267);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toast/dist/index.js
var dist = __webpack_require__(37432);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.cjs.js
var index_cjs = __webpack_require__(47157);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(27448);
;// CONCATENATED MODULE: ./components/ui/toast.tsx






const ToastProvider = dist.Provider;
const ToastViewport = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Viewport, {
        ref: ref,
        className: (0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist.Viewport.displayName;
const toastVariants = (0,index_cjs/* cva */.j)("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
    variants: {
        variant: {
            default: "bg-background border",
            destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react_.forwardRef(({ className , variant , ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ref: ref,
        className: (0,utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist.Root.displayName;
const ToastAction = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Action, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = dist.Action.displayName;
const ToastClose = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Close, {
        ref: ref,
        className: (0,utils.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist.Close.displayName;
const ToastTitle = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Title, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = dist.Title.displayName;
const ToastDescription = /*#__PURE__*/ react_.forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist.Description, {
        ref: ref,
        className: (0,utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist.Description.displayName;


// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(80346);
;// CONCATENATED MODULE: ./components/ui/toaster.tsx
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts  } = (0,use_toast/* useToast */.pm)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id , title , description , action , ...props }) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ jsx_runtime_.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx_runtime_.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ToastViewport, {})
        ]
    });
}

;// CONCATENATED MODULE: ./components/tailwind-indicator.tsx

function TailwindIndicator() {
    if (true) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block sm:hidden",
                children: "xs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden",
                children: "sm"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block lg:hidden xl:hidden 2xl:hidden",
                children: "md"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block xl:hidden 2xl:hidden",
                children: "lg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden xl:block 2xl:hidden",
                children: "xl"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden 2xl:block",
                children: "2xl"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var next_themes_dist = __webpack_require__(95176);
;// CONCATENATED MODULE: ./components/theme-provider.tsx
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(next_themes_dist/* ThemeProvider */.f, {
        ...props,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/providers.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 




function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react/* CartProvider */.Zl, {
            currency: "USD",
            shouldPersist: true,
            cartMode: "checkout-session",
            stripe: "pk_test_51NbfJLD1nFTBLvpykKPTWBJKDK756yKjcE20n2F6og8eayfdAOiwpmu3uk6OLzIVxuwEzqbiVpaze3uxqAEiYAhl00IY0tBIA9",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeProvider, {
                attribute: "class",
                defaultTheme: "system",
                enableSystem: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Toaster, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(TailwindIndicator, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 56844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SiteHeader": () => (/* binding */ SiteHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./node_modules/use-shopping-cart/dist/react.js
var react = __webpack_require__(69267);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(38546);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(65876);
;// CONCATENATED MODULE: ./config/site.ts
const siteConfig = {
    name: "We Mart",
    description: "Your Top Notch E Commerce Store",
    footer: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "#"
        },
        {
            name: "Terms & Conditions",
            href: "#"
        },
        {
            name: "Shipping & Return Policy",
            href: "#"
        },
        {
            name: "Privacy Policy",
            href: "#"
        },
        {
            name: "FAQ",
            href: "#"
        }
    ]
};

;// CONCATENATED MODULE: ./components/icons.tsx


const Icons = {
    sun: lucide_react/* SunMedium */.j1h,
    moon: lucide_react/* Moon */.JFe,
    logo: (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            height: "800px",
            width: "800px",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 511.999 511.999",
            xmlSpace: "preserve",
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M436.645 124.383c-.1-6.979-5.893-12.691-12.875-12.691H88.226c-6.981 0-12.774 5.711-12.875 12.691l-4.564 317.298c-.1 6.979-1.276 18.297-2.611 25.148l-4.794 24.584c-1.334 6.852 3.283 12.458 10.264 12.458h364.709c6.981 0 11.598-5.606 10.263-12.458l-4.793-24.584c-1.335-6.852-2.511-18.168-2.612-25.148l-4.568-317.298z",
                    className: "fill-amber-500 dark:fill-indigo-500"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M286.109 111.692L72.461 325.341l-.729 50.645 264.294-264.294h-49.917zm-150.01 0l-61.45 61.449-.728 50.645 112.093-112.095h-49.915v.001zm302.487 147.544L193.952 503.87h49.917l195.427-195.426-.71-49.208zm2.624 182.446l-.498-34.563-96.751 96.751h49.917l48.311-48.31c-.546-4.965-.923-10.068-.979-13.878zm-4.565-317.299c-.051-3.589-1.616-6.836-4.066-9.15L65.073 482.738l-1.692 8.675c-1.334 6.852 3.283 12.458 10.264 12.458h20.212l343.309-343.309-.521-36.179z",
                    className: "fill-indigo-500 dark:fill-amber-500"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M448.617 491.413l-4.793-24.584c-1.335-6.852-2.511-18.168-2.612-25.148H70.787c-.1 6.979-1.276 18.297-2.611 25.148l-4.794 24.584c-1.334 6.852 3.283 12.458 10.264 12.458h364.709c6.98-.001 11.597-5.607 10.262-12.458z",
                    opacity: 0.1
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    fill: "#fff",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: 355.51,
                            cy: 168.054,
                            r: 28.03
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: 156.488,
                            cy: 168.054,
                            r: 28.03
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M456.596 489.856l-4.793-24.584c-1.242-6.369-2.37-17.227-2.463-23.709l-4.566-317.298c-.164-11.416-9.585-20.704-21.004-20.704h-60.213C361.403 46.092 313.986 0 255.999 0S150.594 46.092 148.44 103.563H88.226c-11.417 0-20.84 9.287-21.004 20.703l-4.564 317.298c-.093 6.481-1.221 17.339-2.462 23.709l-4.794 24.585c-1.102 5.658.254 11.316 3.72 15.522 3.466 4.207 8.76 6.619 14.524 6.619h364.709c5.764 0 11.058-2.413 14.524-6.62 3.464-4.206 4.82-9.864 3.717-15.523zM255.999 16.259c49.021 0 89.137 38.802 91.281 87.304H164.718c2.143-48.502 42.259-87.304 91.281-87.304zm184.33 478.783c-.372.451-1.073.699-1.975.699H73.644c-.902 0-1.603-.248-1.975-.699s-.481-1.188-.309-2.072l4.794-24.585c1.441-7.389 2.653-19.068 2.761-26.586L83.48 124.5c.037-2.535 2.21-4.678 4.747-4.678h60.128v48.237a8.13 8.13 0 0016.26 0v-48.237h182.769v48.237a8.13 8.13 0 0016.26 0v-48.237h60.128c2.536 0 4.71 2.142 4.747 4.678l4.566 317.298c.107 7.52 1.32 19.199 2.761 26.588l4.793 24.584c.17.885.062 1.621-.31 2.072z",
                    className: "fill-black dark:fill-indigo-500"
                })
            ]
        })
};

;// CONCATENATED MODULE: ./components/main-nav.tsx




function MainNav() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex gap-6 md:gap-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/",
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Icons.logo, {
                    className: "h-7 w-7"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "inline-block text-xl font-bold",
                    children: siteConfig.name
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(95176);
;// CONCATENATED MODULE: ./components/theme-toggle.tsx
/* __next_internal_client_entry_do_not_use__ ThemeToggle auto */ 



function ThemeToggle() {
    const { setTheme , theme  } = (0,dist/* useTheme */.F)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
        variant: "ghost",
        size: "sm",
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Icons.sun, {
                className: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icons.moon, {
                className: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/site-header.tsx
/* __next_internal_client_entry_do_not_use__ SiteHeader auto */ 









function SiteHeader() {
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const searchParams = (0,navigation.useSearchParams)();
    const defaultSearchQuery = searchParams.get("search") ?? "";
    const { cartCount  } = (0,react/* useShoppingCart */.g1)();
    if (pathname.startsWith("/studio")) return null;
    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchQuery = formData.get("search");
        router.replace(`/?search=${searchQuery}`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 z-40 w-full border-b bg-background",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: onSubmit,
                    className: "hidden items-center lg:inline-flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                        id: "search",
                        name: "search",
                        type: "search",
                        autoComplete: "off",
                        placeholder: "Search products...",
                        className: "h-9 lg:w-[300px]",
                        defaultValue: defaultSearchQuery
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center space-x-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cart",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                size: "sm",
                                variant: "ghost",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ShoppingBag */.CKR, {
                                        className: "h-5 w-5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-2 text-sm font-bold",
                                        children: cartCount
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Cart"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {}),
                         false && /*#__PURE__*/ 0
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 38546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47157);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27448);




const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , variant , size , ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 65876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27448);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , type , ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 80346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pm": () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony exports reducer, toast */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId  } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 27448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getSizeName),
/* harmony export */   "cn": () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4798);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function getSizeName(value) {
    switch(value){
        case "xs":
            return "X-Small";
        case "s":
            return "Small";
        case "m":
            return "Medium";
        case "l":
            return "Large";
        case "xl":
            return "X-Large";
        case "one-size":
            return "One Size";
    }
}


/***/ }),

/***/ 77258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(46495);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(50918);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"lib/fonts.ts","import":"Plus_Jakarta_Sans","arguments":[{"subsets":["latin"],"variable":"--font-sans"}],"variableName":"fontSans"}
var fonts_ts_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_sans_variableName_fontSans_ = __webpack_require__(76647);
var fonts_ts_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_sans_variableName_fontSans_);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./components/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/zainulabideen/Downloads/_Software Journey/PIAIC- 2023/Hackaton/ecom_Hackaton_2/ecommerce-app/components/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./components/site-blob.tsx

function SiteBlob() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-2xl",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative left-[80%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[30.1875rem]",
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-2xl",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative left-[10%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:w-[30.1875rem]",
                        style: {
                            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/site-footer.tsx



function SiteFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "border-t",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12",
                    "aria-label": "Footer",
                    children: site/* siteConfig.footer.map */.J.footer.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pb-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.href,
                                className: "text-sm leading-6",
                                children: item.name
                            })
                        }, item.name))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "https://www.fullstack.so",
                    className: "mt-10 block text-center text-xs leading-5",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " ",
                        site/* siteConfig.name */.J.name,
                        " LLC. All rights reserved_by @Zain Ul Abideen Baloch"
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/site-header.tsx

const site_header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/zainulabideen/Downloads/_Software Journey/PIAIC- 2023/Hackaton/ecom_Hackaton_2/ecommerce-app/components/site-header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: site_header_esModule, $$typeof: site_header_$$typeof } = site_header_proxy;
const site_header_default_ = site_header_proxy.default;

const site_header_e0 = site_header_proxy["SiteHeader"];

;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    title: site/* siteConfig.name */.J.name,
    description: site/* siteConfig.description */.J.description,
    icons: {
        icon: "/logo.png"
    }
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            lang: "en",
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("body", {
                    className: (0,utils.cn)("min-h-screen bg-background font-sans antialiased", (fonts_ts_import_Plus_Jakarta_Sans_arguments_subsets_latin_variable_font_sans_variableName_fontSans_default()).variable),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex min-h-screen flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(site_header_e0, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(SiteBlob, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1",
                                    children: children
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SiteFooter, {})
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 50918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: "We Mart",
    description: "Your Top Notch E Commerce Store",
    footer: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "#"
        },
        {
            name: "Terms & Conditions",
            href: "#"
        },
        {
            name: "Shipping & Return Policy",
            href: "#"
        },
        {
            name: "Privacy Policy",
            href: "#"
        },
        {
            name: "FAQ",
            href: "#"
        }
    ]
};


/***/ }),

/***/ 57725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony export getSizeName */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28922);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27866);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function getSizeName(value) {
    switch(value){
        case "xs":
            return "X-Small";
        case "s":
            return "Small";
        case "m":
            return "Medium";
        case "l":
            return "Large";
        case "xl":
            return "X-Large";
        case "one-size":
            return "One Size";
    }
}


/***/ }),

/***/ 46495:
/***/ (() => {



/***/ })

};
;