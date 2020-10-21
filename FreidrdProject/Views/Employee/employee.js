"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as $ from 'jQuery';
//# sourceMappingURL = employee.js.map;
require("bootstrap-notify");
var $ = jQuery;
var Employees = /** @class */ (function () {
    function Employees() {
        this.urlGetData = '/employee/table-data-view';
        this.urlAddEmployee = '/employee/add';
        this.urlSaveEmployee = '/employee/save';
        this.init();
    }
    Employees.prototype.init = function () {
        
        var _this = this;
        try {
            this.initTable();
            $('#add_employee').click(function () {
                _this.add();
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    Employees.prototype.initTable = function () {
        try {
            Util.request(this.urlGetData, 'GET', 'html', function (response) {
                $('#employees_list tbody').empty();
                $('#employees_list tbody').append(response);
            }, function () {
                console.error('Failed to get data. Please try again');
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    Employees.prototype.add = function () {
        var _this = this;
        try {
            Util.request(this.urlAddEmployee, 'get', 'html', function (response) {
                $('#employee_form').html(response);
                _this.initForm();
            }), function () {
                console.error('Failed to get data. Please try again.');
            };
        }
        catch (e) {
            console.error(e);
        }
    };
    Employees.prototype.initForm = function () {
        var _this = this;
        try {
            $('#save_form').click(function () {
                _this.save();
            });
            $('#close_form').click(function () {
                location.reload(); // reload page to show a table
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    Employees.prototype.save = function () {
        try {
            var employee = this.createEmployee();
            Util.request(this.urlSaveEmployee, 'post', 'json', function (response) {
                if (response != null) {
                    $.notify(response.message);
                    location.reload();
                }
                else {
                    $.notify(response.message);
                    console.error('Failed to ge data #T7G985. Please try again.');
                }
            }, function () {
            }, employee);
        }
        catch (e) {
            console.error(e);
        }
    };
    Employees.prototype.createEmployee = function () {
        try {
            var employee = {
                EmployeeId: $('#employee_id').val(),
                Firstname: $('#first_name').val(),
                Lastname: $('#last_name').val(),
                Position: $('#position').val(),
                Department: $('#department').val(),
                Salary: $('#salary').val(),
                DateJoined: $('#date_joined').val(),
                LastUpdated: $('#last_changed').val()
            };
            return employee;
        }
        catch (e) {
            console.error(e);
        }
    };
    return Employees;
}());
$(document).ready(function () {
    new Employees();
});
