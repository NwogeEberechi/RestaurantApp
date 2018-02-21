angular.module('app').controller('reservationController', [
    function() {
        var vm = this;
        vm.message = function() {
            alert('Contact Sent');
        }
    }
]);