import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache!';
import {ActionList} from 'shuttle-canstrap/button/';
import {ButtonList} from 'shuttle-canstrap/button-group/';
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
    buttons: {Type: ButtonList},
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
        return new ViewModel({
            buttons: [
                {
                    iconNameClass: 'fa-fast-backward',
                    click: function(){
                        handler('fast-backward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-backward',
                    click: function(){
                        handler('backward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-step-backward',
                    click: function(){
                        handler('step-backward', 'player');
                    }
                },
                {
                    text: 'player',
                    disabled: true
                },
                {
                    iconNameClass: 'fa-step-forward',
                    click: function(){
                        handler('step-forward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-forward',
                    click: function(){
                        handler('forward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-fast-forward',
                    click: function(){
                        handler('fast-forward', 'player');
                    }
                }
            ],
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