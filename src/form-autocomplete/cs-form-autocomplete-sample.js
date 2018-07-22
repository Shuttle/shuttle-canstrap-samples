import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-form-autocomplete-sample.stache';
import {alerts} from 'shuttle-canstrap/alerts/';

let ViewModel = DefineMap.extend({
    mapper(item){
        item.text = item.text + ' (mapped)';

        return item;
    }
});

export default Component.extend({
    tag: 'cs-form-autocomplete-sample',
    view,
    ViewModel
});