angular.module('app')
    .controller('menuController', [
        function() {
            var vm = this;
            vm.tab = 1;
            vm.filtText = '';
            vm.menus = [{
                    name: 'Ice Cream Cake',
                    image: 'assets/img/dessert1.jpg',
                    category: 'dessert',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'A Birthday cake',
                    image: 'assets/img/birthday-cake.jpg',
                    category: 'dessert',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Zippy Burger',
                    image: 'assets/img/zippy-burger.jpg',
                    category: 'burger',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Chief Burger',
                    image: 'assets/img/hamburger.jpg',
                    category: 'burger',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Fish Curry Couscous',
                    image: 'assets/img/fish-curry-couscous.jpg',
                    category: 'dinner',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Spaghetti Bolognese',
                    image: 'assets/img/spaghetti-bolognese.jpg',
                    category: 'dinner',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Molten chocolate cake',
                    image: 'assets/img/dessert.jpg',
                    category: 'dessert',
                    description: '',
                    dietaryRestriction: ''
                },
                {
                    name: 'Gingerbread',
                    image: 'assets/img/gingerbread.jpg',
                    category: 'Dessert',
                    description: '',
                    dietaryRestriction: ''
                },
            ];

            vm.selectMenu = function(tabIndex) {
                vm.tab = tabIndex;
                if (tabIndex === 2) {
                    vm.filtText = 'Dessert';
                } else if (tabIndex === 3) {
                    vm.filtText = 'Dinner';
                } else if (tabIndex === 4) {
                    vm.filtText = 'Burger';
                } else {
                    vm.filtText = '';
                }
            }
            vm.isSelected = function(selectedTab) {
                return (vm.tab === selectedTab);
            }
        }
    ]);