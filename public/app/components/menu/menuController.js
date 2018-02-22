angular.module('app')
    .controller('menuController', [
        function() {
            var vm = this;
            vm.menu = ['menu1', 'menu2', 'menu3'];
        }
    ]);