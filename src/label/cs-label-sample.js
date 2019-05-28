import {Component,DefineMap} from 'can';
import view from './cs-label-sample.stache!';
import state from '~/state';

var ViewModel = DefineMap.extend({
    click: function(e) {
        state.alerts.add({ message: "Label has been clicked.", name: "label-click"});
    }
});

export default Component.extend({
    tag: 'cs-label-sample',
    view,
    ViewModel
});