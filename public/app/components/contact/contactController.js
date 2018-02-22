angular.module('app').controller('contactController', [
    function() {
        var vm = this;
        vm.message = function() {
            alert('Contact Sent');
        }
    }
]);