"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var not_found_component_1 = require("./not-found-404/not-found.component");
var game_component_1 = require("./game/game.component");
var gameOver_component_1 = require("./gameOver/gameOver.component");
var appRoutes = [
    { path: '', component: game_component_1.Game },
    { path: 'GameOver', component: gameOver_component_1.GameOver },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routin.js.map