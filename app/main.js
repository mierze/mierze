"use strict";
// The browser platform with a compiler
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
core_1.enableProdMode();
// The app module
var app_module_1 = require("./app.module");
// Compile and launch the module
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
