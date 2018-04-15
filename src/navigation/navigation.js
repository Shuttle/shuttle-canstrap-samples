import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './navigation.stache!';
import {DropdownList} from 'shuttle-canstrap/nav-dropdown/';

var ViewModel = DefineMap.extend({
    list: {
        Type: DropdownList
    }
});

export default Component.extend({
    tag: 'resource-navigation',
    view,
    ViewModel
});