import { DefineMap, Component } from 'can';
import view from './cs-button-refresh-sample.stache!';

var ViewModel = DefineMap.extend({
    refreshing: {
        type: 'boolean',
        default: false
    },
    refresh: function(){
        var self = this;

        this.refreshing = true;

        setTimeout(() => {
            self.refreshing = false;
        }, 1000);
    }
});

export default Component.extend({
    tag: 'cs-button-refresh-sample',
    view,
    ViewModel
});