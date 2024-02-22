"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ChatPageProfilePictureImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChatPageProfilePictureImage = ()=>{
    const [showImage, setShowImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const clickProfilePicFunction = ()=>{
        setShowImage(!showImage);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
        onClick: clickProfilePicFunction,
        className: "head-profile-picture",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: `profile-picture-full-size${!showImage ? " head-profile-picture--hide" : ""}`,
            src: "/images/kyle-walker.webp"
        })
    });
};


/***/ }),

/***/ 6778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ InputContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _TextAreaInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);


const InputContainer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "message",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "message-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "message-attatch-button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/paper-clip-o.png"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextAreaInput__WEBPACK_IMPORTED_MODULE_1__/* .TextAreaInput */ .F, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "message-submit-button",
                    type: "submit",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/paper-plane-o.png"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TextAreaInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TextAreaInput = ()=>{
    const textAreaRef2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [val, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChange2 = (e)=>{
        setVal(e.target.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        textAreaRef2.current.style.height = "auto";
        textAreaRef2.current.style.height = textAreaRef2.current.scrollHeight + "px";
    }, [
        val
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cover1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cover2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "textarea1",
                placeholder: "Type here...",
                value: val,
                onChange: handleChange2,
                rows: "1",
                ref: textAreaRef2
            })
        })
    });
};


/***/ })

};
;