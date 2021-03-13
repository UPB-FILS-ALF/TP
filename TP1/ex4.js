"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.EmployeClass = void 0;
var EmployeClass = /** @class */ (function () {
    function EmployeClass(last_name, first_name, dept, exp) {
        this.nom = last_name;
        this.prenom = first_name;
        this.department = dept;
        this.experience = exp;
    }
    return EmployeClass;
}());
exports.EmployeClass = EmployeClass;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(last_name, first_name, dept, exp, ns) {
        var _this = _super.call(this, last_name, first_name, dept, exp) || this;
        _this.noSubordonnes = ns;
        return _this;
    }
    return Manager;
}(EmployeClass));
exports.Manager = Manager;
var manager = new Manager("Nom", "Prenom", "ALF", 3, 20);
function checkProperty(propName) {
    return manager[propName] !== undefined ? true : false;
}
console.log(checkProperty("nom"));
console.log(checkProperty("name"));
