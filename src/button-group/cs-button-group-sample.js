import { DefineMap, Component } from 'can';
import view from './cs-button-group-sample.stache!';
import {ButtonList} from 'shuttle-canstrap/button-group/';
import state from '~/state';

var handler = function(message, name){
    state.alerts.add({ message: message, name: name});
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
                    iconClass: 'fas',
                    iconNameClass: 'fa-fast-backward',
                    click: function () {
                        handler('fast-backward', 'player');
                    }
                },
                {
                    iconClass: 'fas',
                    iconNameClass: 'fa-backward',
                    click: function () {
                        handler('backward', 'player');
                    }
                },
                {
                    iconClass: 'fas',
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
                    iconClass: 'fas',
                    iconNameClass: 'fa-step-forward',
                    click: function () {
                        handler('step-forward', 'player');
                    }
                },
                {
                    iconClass: 'fas',
                    iconNameClass: 'fa-forward',
                    click: function () {
                        handler('forward', 'player');
                    }
                },
                {
                    iconClass: 'fas',
                    iconNameClass: 'fa-fast-forward',
                    click: function () {
                        handler('fast-forward', 'player');
                    }
                }
            ]
        });
    }
});