angular.module('app')
    .controller('reservationController', [
        function() {
            var vm = this;
            vm.items = ['First', 'Second', 'Third'];
        }
    ]);