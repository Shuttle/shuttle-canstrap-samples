import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';
import {DropdownMap, DropdownList} from 'shuttle-canstrap/nav-dropdown/';
import route from 'can-route/';

var ViewModel = DefineMap.extend({
    map: {
        value: {
            text: 'cs-nav-dropdown'
        }
    },
    list: {
        get: function (value) {
            var result = new DropdownList();

            each(value, function (resource) {
                result.push({
                    text: resource.name,
                    href: route.url({resource: resource.name})
                });
            });

            return result;
        }
    }
});

export default Component.extend({
    tag: 'resource-navigation',
    view,
    ViewModel
});