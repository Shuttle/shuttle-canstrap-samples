import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache';
import {ActionList} from 'shuttle-canstrap/button/';
import state from '~/state';

var handler = function(message){
    state.alerts.add({ message: message + ' (' + new Date() + ')', name: 'click'});
}

var ViewModel = DefineMap.extend({
    actions: {Type: ActionList},
    click: function (ev) {
        handler('click');
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