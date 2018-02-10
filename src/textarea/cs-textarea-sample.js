import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-textarea-sample.stache!';

var ViewModel = DefineMap.extend({
    value: {
        type: 'string',
        default: ''
    },
});

export default Component.extend({
    tag: 'cs-textarea-sample',
    view,
    ViewModel
});