import { DefineMap, Component } from 'can';
import view from './cs-button-submit-sample.stache!';
import {alerts} from 'shuttle-canstrap/alerts/';

var ViewModel = DefineMap.extend({
    working: {
        type: 'boolean',
        default: false
    },
    submit: function(){
        var self = this;

        this.working = true;

        setTimeout(() => {
            self.working = false;
        }, 1000);
    }
});

export default Component.extend({
    tag: 'cs-button-submit-sample',
    view,
    ViewModel
});