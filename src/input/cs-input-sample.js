import { DefineMap, Component } from 'can';
import view from './cs-input-sample.stache!';

var ViewModel = DefineMap.extend({
    value: {
        type: 'string',
        default: ''
    }
});

export default Component.extend({
    tag: 'cs-input-sample',
    view,
    ViewModel
});