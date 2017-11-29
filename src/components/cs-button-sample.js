import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache!';
import {ActionList} from 'shuttle-canstrap/button/';
import {alerts} from 'shuttle-canstrap/alerts/';

var handler = function(message, name){
    alerts.show({ message: message, name: name});
}

var ViewModel = DefineMap.extend({
    refreshing: {
        type: 'boolean',
        value: false
    },
    working: {
        type: 'boolean',
        value: false
    },
    actions: {Type: ActionList},
    click: function (ev) {
        handler('click');
    },
    refresh: function(){
        var self = this;

        this.refreshing = true;

        setTimeout(() => {
            self.refreshing = false;
        }, 1000);
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
    tag: 'cs-button-sample',
    view,
    viewModel: function () {
        let result = new ViewModel({
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
        });

        return result;
    }
});