"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routin_1 = require("./app.routin");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var not_found_component_1 = require("./not-found-404/not-found.component");
var gameOver_component_1 = require("./gameOver/gameOver.component");
var mineFieldSector_component_1 = require("app/mineFieldSector/mineFieldSector.component");
var mineField_component_1 = require("app/mineField/mineField.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [app_routin_1.Routing, platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, mineField_component_1.MineField, gameOver_component_1.GameOver, not_found_component_1.NotFoundComponent, mineFieldSector_component_1.MineFieldSector],
            providers: [mineFieldSector_component_1.MineFieldSector],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map