angular.module('app').controller('ContactController', [
    function() {
        var vm = this;
        vm.message = function() {
            alert('Contact Sent');
        }
    }
]);