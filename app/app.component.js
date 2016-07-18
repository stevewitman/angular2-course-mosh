System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.onClick1 = function () {
                    console.log("1st button clicked");
                };
                AppComponent.prototype.onClick2 = function ($event) {
                    console.log("2nd button clicked", $event);
                };
                AppComponent.prototype.onDivClick3 = function () {
                    console.log("handled by div onDivClick3");
                };
                AppComponent.prototype.onClick3 = function ($event) {
                    console.log("3nd button clicked", $event);
                };
                AppComponent.prototype.onDivClick4 = function () {
                    console.log("handled by div onDivClick4");
                };
                AppComponent.prototype.onClick4 = function ($event) {
                    $event.stopPropagation();
                    console.log("4th button clicked", $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <button (click)=\"onClick1()\">Button 1</button>\n        <button (click)=\"onClick2($event)\">Button 2</button>\n        <div (click)=\"onDivClick3()\">\n            <button (click)=\"onClick3($event)\">Button 3</button>\n        </div>\n        <div (click)=\"onDivClick4()\">\n            <button (click)=\"onClick4($event)\">Button 4</button>\n        </div>\n   "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map