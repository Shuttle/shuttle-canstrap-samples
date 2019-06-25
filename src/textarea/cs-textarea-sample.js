import { DefineMap, Component } from 'can';
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