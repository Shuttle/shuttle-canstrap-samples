import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-autocomplete-sample.stache';
import {alerts} from 'shuttle-canstrap/alerts/';

let ViewModel = DefineMap.extend({
    map: {
        Type: DefineMap
    },
    mapper(item){
        return { text: item.text + ' (mapped)' };
    }
});

export default Component.extend({
    tag: 'cs-autocomplete-sample',
    view,
    ViewModel
});