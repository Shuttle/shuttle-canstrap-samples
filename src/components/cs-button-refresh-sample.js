import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-refresh-sample.stache!';

var ViewModel = DefineMap.extend({
    refreshing: {
        type: 'boolean',
        value: false
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