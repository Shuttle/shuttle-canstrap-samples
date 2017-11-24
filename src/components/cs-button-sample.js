import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache!';
import {ActionItem, ActionItemList} from 'shuttle-canstrap/button/';
import {alerts} from 'shuttle-canstrap/alerts/';

var handler = function(message){
    alerts.show({ message: message});
}

var ViewModel = DefineMap.extend({
    refreshing: {
        type: 'boolean',
        value: false
    },
    actions: {Type: ActionItemList},
    click: function (ev) {
        handler('click');
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
    tag: 'cs-button-sample',
    view,
    ViewModel: function () {
        return new ViewModel({
            actions: [
                {
                    text: "action-1 (with click)",
                    click: function(){
                        handler('action-1 click');
                    }
                },
                {
                    text: "action-2"
                },
                {
                    text: "action-3"
                },
            ]
        })
    }
});