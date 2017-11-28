import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-group-sample.stache!';
import {ButtonList} from 'shuttle-canstrap/button-group/';
import {alerts} from 'shuttle-canstrap/alerts/';

var handler = function(message, name){
    alerts.show({ message: message, name: name});
}

var ViewModel = DefineMap.extend({
    buttons: {Type: ButtonList}
});

export default Component.extend({
    tag: 'cs-button-group-sample',
    view,
    viewModel: function () {
        return new ViewModel({
            buttons: [
                {
                    iconNameClass: 'fa-fast-backward',
                    click: function () {
                        handler('fast-backward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-backward',
                    click: function () {
                        handler('backward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-step-backward',
                    click: function () {
                        handler('step-backward', 'player');
                    }
                },
                {
                    text: 'player',
                    disabled: true
                },
                {
                    iconNameClass: 'fa-step-forward',
                    click: function () {
                        handler('step-forward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-forward',
                    click: function () {
                        handler('forward', 'player');
                    }
                },
                {
                    iconNameClass: 'fa-fast-forward',
                    click: function () {
                        handler('fast-forward', 'player');
                    }
                }
            ]
        });
    }
});