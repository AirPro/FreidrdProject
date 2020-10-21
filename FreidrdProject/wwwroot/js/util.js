var Util = (function (scope) {

    scope.request = function (url, type, dataType, successCallback, failureCallback, data) {
        try {
            if (data === undefined || data === null) {
                data = {};
            }
            $.ajax(
                {
                    type: type, //GET or POST
                    dataType: dataType, //html of json
                    processData: true,
                    data: data,
                    url: url,
                    statusCode: processResponse(successCallback, failureCallback),
                    complete: function () {

                    }
                });
        } catch (e) {
            console.error(e)

        }
    }

    function processResponse(successCalback, failureCallback) {
        return {
            200: successCalback,
            401: handleUnauthorizedError,
            403: handleForbiddenError,
            404: failureCallback,
            500: failureCallback
        };
    }

    function handleUnauthorizedError() {
        location.reload();
    }

    function handleForbiddenError() {
        $.notify('No permission to access.');
    }

    return scope;

})({});