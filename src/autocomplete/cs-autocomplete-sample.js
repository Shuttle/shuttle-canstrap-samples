import { DefineMap, Component } from 'can';
import view from './cs-autocomplete-sample.stache';

let ViewModel = DefineMap.extend({
    map: {
        Type: DefineMap
    },
    mapper(item) {
        return { text: item.text + ' (mapped)' };
    }
});

export default Component.extend({
    tag: 'cs-autocomplete-sample',
    view,
    ViewModel
});