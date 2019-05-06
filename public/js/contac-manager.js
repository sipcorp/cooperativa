$(document).ready(function () {
        // EQUALIZE PLUGIN
        // ------------------------------------------------------------------------------------------------ * -->        
        // pl-content/equalize/js/equalize.js
        // Set Equal Height for tabs
        $('#equalizeContent').equalize({ children: '.equalize' });

        // FILTERABLE LIST 
        // ------------------------------------------------------------------------------------------------ * -->
        // pl-content/list/js/list.min.js
        // pl-content/list/js/list.paging.min.js
        // pl-content/list/js/list.fuzzySearch.min.js
        // pl-content/list/js/list.filter.min.js

        $(function () {
            // Option for list
            var options = {
                valueNames: ['name', 'phone', 'gender', 'type', 'city'],
                plugins: [
                        ['fuzzySearch'],
                        ['filtering', {}]
                ]
            };

            var contactList = new List('main-content', options);

            $('#resetFilter').click(function () {
                contactList.filter();
                $("#actionForList a").parent().removeClass("active");
                return false;
            });

            $('#resetAll').click(function () {
                contactList.search();
                contactList.filter();
                $('#contactSearch').val('');
                return false;
            });

            $('#actionForList a').click(function () {
                $("#actionForList a").parent().removeClass("active");
                $(this).parent().addClass("active");
            });

            // search contact
            $('#contactSearch').keyup(function () {
                contactList.fuzzySearch($(this).val());
            });
        });

        $(document).ready(function () {

            $('#myContact a').click(function () {
                $("#myContact a").parent().removeClass("active");
                $(this).parent().addClass("active");
            });

            // LISTNAV
            // ------------------------------------------------------------------------------------------------ * -->
            // pl-content/jquery.listnav/js/jquery.listnav.js
            $('#myContact').listnav({
                initLetter: '',
                includeAll: true,
                incudeOther: false,
                includeNums: true,
                flagDisabled: true,
                noMatchText: 'No matching entries',
                showCounts: true,
                cookieName: "demo-nav-contact",
                onClick: function (letter) {
                    $("#myContactWrap.scrollBox4").getNiceScroll().resize();
                    $('#myContact li').addClass('animated fadeIn');
                },
                prefixes: []
            });

            $('.ln-letter-count').addClass('animated fadeIn');

        });
        $('#equalizeContent').equalize({ children: '.equalize' });
}); 