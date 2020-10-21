//import * as $ from 'jQuery';
import 'bootstrap-notify';
let $: any = jQuery;

class Employees {

    private urlGetData = '/employee/table-data-view';
    private urlAddEmployee = '/employee/add';
    private urlSaveEmployee = '/employee/save';

    constructor() {
        this.init();
    }

    private init() {
        try {
            this.initTable();
            $('#add_employee').click(() => {
                this.add();
            });
        } catch (e) {
            console.error(e);
        }
    }

    private initTable() {
        try {
            Util.request(this.urlGetData, 'GET', 'html', (response) => {
                $('#employees_list tbody').empty();
                $('#employees_list tbody').append(response);
            }, function () {
                console.error('Failed to get data. Please try again');
            });
        } catch (e) {
            console.error(e);
        }
    }

    private add() {
        try {
            Util.request(this.urlAddEmployee, 'get', 'html', (response) => {
                $('#employee_form').html(response)
                this.initForm();
            }), () => {
                console.error('Failed to get data. Please try again.');
            }
        } catch (e) {
            console.error(e);
        }
    }

    private initForm() {
        try {
            $('#save_form').click(() => {
                this.save();
            });

            $('#close_form').click(() => {
                location.reload(); // reload page to show a table
            });
        } catch (e) {
            console.error(e);
        }
    }

    private save() {
        try {
            const employee = this.createEmployee();
            Util.request(this.urlSaveEmployee, 'post', 'json', (response) => {
                if (response != null) {
                    $.notify(response.message);
                    location.reload();
                } else {
                    $.notify(response.message);
                    console.error('Failed to ge data #T7G985. Please try again.');
                }
            }, () => {

            }, employee);
        } catch (e) {
            console.error(e);
        }
    }

    private createEmployee() {
        try {
            const employee = {
                EmployeeId: $('#employee_id').val(),
                Firstname: $('#first_name').val(),
                Lastname: $('#last_name').val(),
                Position: $('#position').val(),
                Department: $('#department').val(),
                Salary: $('#salary').val(),
                DateJoined: $('#date_joined').val(),
                LastUpdated: $('#last_changed').val()
            }; return employee;
        } catch (e) { console.error(e); }
    }
}

$(document).ready(function () {
    new Employees();
});