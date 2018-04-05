import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-collapse-sample.stache!';

var ViewModel = DefineMap.extend({
    header: {
        type: 'string',
        default: 'The header'
    },
    collapsed: {
        type: 'boolean',
        default: false
    }
});

export default Component.extend({
    tag: 'cs-collapse-sample',
    view,
    ViewModel
});