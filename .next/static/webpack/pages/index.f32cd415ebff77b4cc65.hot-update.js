webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdownContainer__3pqLs {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n  flex: 1 1;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 15px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n  flex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n  width: 100%;\\n  height: 5rem;\\n\\n  margin-top: 2rem;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  border: 0;\\n  border-radius: 15px;\\n\\n  background: var(--blue);\\n  color: var(--white);\\n\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n\\n  transition: all 0.2s;\\n  \\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n  background: var(--blue-dark);\\n  transition: all 0.2s;\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\\n  background: var(--red);\\n  color: var(--white);\\n}\\n\\n.Countdown_countdownButton__2cSHU:disabled {\\n  background: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 5px solid var(--green);\\n  transition: all 0.2s;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAO;;EAEP,aAAa;EACb,mBAAmB;EACnB,6BAA6B;;EAE7B,wBAAwB;EACxB,wCAAwC;EACxC,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,gBAAgB;;EAEhB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,SAAS;EACT,mBAAmB;;EAEnB,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;EAClB,gBAAgB;;EAEhB,oBAAoB;;AAEtB;;AAEA;EACE,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;EACrC,oBAAoB;AACtB\",\"sourcesContent\":[\".countdownContainer {\\n  display: flex;\\n  align-items: center;\\n  font-family: Rajdhani;\\n  font-weight: 600;\\n  color: var(--title);\\n}\\n\\n.countdownContainer > div {\\n  flex: 1;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly;\\n\\n  background: var(--white);\\n  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n  border-radius: 15px;\\n  font-size: 8.5rem;\\n  text-align: center;\\n}\\n\\n.countdownContainer > div span {\\n  flex: 1;\\n}\\n\\n.countdownContainer > div span:first-child {\\n  border-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:last-child {\\n  border-left: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > span {\\n  font-size: 6.25rem;\\n  margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n  width: 100%;\\n  height: 5rem;\\n\\n  margin-top: 2rem;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  border: 0;\\n  border-radius: 15px;\\n\\n  background: var(--blue);\\n  color: var(--white);\\n\\n  font-size: 1.25rem;\\n  font-weight: 600;\\n\\n  transition: all 0.2s;\\n  \\n}\\n\\n.countdownButton:not(:disabled):hover {\\n  background: var(--blue-dark);\\n  transition: all 0.2s;\\n}\\n\\n.countdownButtonActive {\\n  background-color: var(--white);\\n  color: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover {\\n  background: var(--red);\\n  color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n  background: var(--white);\\n  color: var(--text);\\n  cursor: not-allowed;\\n  border-bottom: 5px solid var(--green);\\n  transition: all 0.2s;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsZ0RBQWdELGNBQWMsb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLHFEQUFxRCxjQUFjLEdBQUcsaUVBQWlFLG9DQUFvQyxHQUFHLGdFQUFnRSxtQ0FBbUMsR0FBRyxpREFBaUQsdUJBQXVCLHFCQUFxQixHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0Isd0JBQXdCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsT0FBTyw0REFBNEQsaUNBQWlDLHlCQUF5QixHQUFHLDZDQUE2QyxtQ0FBbUMsd0JBQXdCLEdBQUcsa0VBQWtFLDJCQUEyQix3QkFBd0IsR0FBRyxnREFBZ0QsNkJBQTZCLHVCQUF1Qix3QkFBd0IsMENBQTBDLHlCQUF5QixHQUFHLE9BQU8sMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLCtDQUErQyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLFlBQVksb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLG9DQUFvQyxZQUFZLEdBQUcsZ0RBQWdELG9DQUFvQyxHQUFHLCtDQUErQyxtQ0FBbUMsR0FBRyxnQ0FBZ0MsdUJBQXVCLHFCQUFxQixHQUFHLHNCQUFzQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0Isd0JBQXdCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQiwyQkFBMkIsT0FBTywyQ0FBMkMsaUNBQWlDLHlCQUF5QixHQUFHLDRCQUE0QixtQ0FBbUMsd0JBQXdCLEdBQUcsaURBQWlELDJCQUEyQix3QkFBd0IsR0FBRywrQkFBK0IsNkJBQTZCLHVCQUF1Qix3QkFBd0IsMENBQTBDLHlCQUF5QixHQUFHLG1CQUFtQjtBQUN6OUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYge1xcbiAgZmxleDogMSAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZm9udC1zaXplOiA4LjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFuIHtcXG4gIGZsZXg6IDEgMTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxzID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiA2LjI1cmVtO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgXFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2M6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQU87O0VBRVAsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7O0VBRTdCLHdCQUF3QjtFQUN4Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFPO0FBQ1Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsU0FBUztFQUNULG1CQUFtQjs7RUFFbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50ZG93bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHtcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXNpemU6IDguNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW46bGFzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5jb3VudGRvd25CdXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICBcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWRhcmspO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMc1wiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})