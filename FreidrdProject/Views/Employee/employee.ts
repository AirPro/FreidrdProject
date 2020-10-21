class Employees {

    private urlGetData = "/employee/table-data-view";

    constructor() {
        this.init();
    }

    private init() {
        try {
            this.initTable();
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
}

$(document).ready(function () {
    new Employees();
});