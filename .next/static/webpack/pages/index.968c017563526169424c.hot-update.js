webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdownContainer__3pqLs {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n  flex: 1 1;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n  flex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n  width: 100%;\\n  height: 5rem;\\n\\n  margin-top: 2rem;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  border: 0;\\n  border-radius: 5px;\\n\\n  background: var(--blue);\\n  color: var(--white);\\n\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n\\n  transition: background 0.2s;\\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n  background: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\\n  background: var(--red);\\n  color: var(--white);\\n}\\n\\n.Countdown_countdownButton__2cSHU:disabled {\\n  background: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 5px solid var(--green);\\n  transition: 1s ease-in;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAO;;EAEP,aAAa;EACb,mBAAmB;EACnB,6BAA6B;;EAE7B,wBAAwB;EACxB,wCAAwC;EACxC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,gBAAgB;;EAEhB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,SAAS;EACT,kBAAkB;;EAElB,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;EAClB,gBAAgB;;EAEhB,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,sBAAsB;AACxB\",\"sourcesContent\":[\".countdownContainer {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.countdownContainer > div {\\n  flex: 1;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 5px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.countdownContainer > div span {\\n  flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:first-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n  width: 100%;\\n  height: 5rem;\\n\\n  margin-top: 2rem;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  border: 0;\\n  border-radius: 5px;\\n\\n  background: var(--blue);\\n  color: var(--white);\\n\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n\\n  transition: background 0.2s;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n  background: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover {\\n  background: var(--red);\\n  color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n  background: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 5px solid var(--green);\\n  transition: 1s ease-in;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsZ0RBQWdELGNBQWMsb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLHFEQUFxRCxjQUFjLEdBQUcsaUVBQWlFLG9DQUFvQyxHQUFHLGlFQUFpRSxtQ0FBbUMsR0FBRyxpREFBaUQsdUJBQXVCLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQixrQ0FBa0MsR0FBRyw0REFBNEQsaUNBQWlDLEdBQUcsNkNBQTZDLG1DQUFtQyx3QkFBd0IsR0FBRyxrRUFBa0UsMkJBQTJCLHdCQUF3QixHQUFHLGdEQUFnRCw2QkFBNkIsdUJBQXVCLHdCQUF3QiwwQ0FBMEMsMkJBQTJCLEdBQUcsT0FBTywyR0FBMkcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLCtDQUErQyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLFlBQVksb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLG9DQUFvQyxZQUFZLEdBQUcsZ0RBQWdELG9DQUFvQyxHQUFHLGdEQUFnRCxtQ0FBbUMsR0FBRyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixHQUFHLHNCQUFzQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQixrQ0FBa0MsR0FBRywyQ0FBMkMsaUNBQWlDLEdBQUcsNEJBQTRCLG1DQUFtQyx3QkFBd0IsR0FBRyxpREFBaUQsMkJBQTJCLHdCQUF3QixHQUFHLCtCQUErQiw2QkFBNkIsdUJBQXVCLHdCQUF3QiwwQ0FBMEMsMkJBQTJCLEdBQUcsbUJBQW1CO0FBQ2o2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiB7XFxuICBmbGV4OiAxIDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogOC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbiB7XFxuICBmbGV4OiAxIDE7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFU6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQU87O0VBRVAsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7O0VBRTdCLHdCQUF3QjtFQUN4Qix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFPO0FBQ1Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsU0FBUztFQUNULGtCQUFrQjs7RUFFbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudGRvd25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiB7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDguNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gc3BhbiB7XFxuICBmb250LXNpemU6IDYuMjVyZW07XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})