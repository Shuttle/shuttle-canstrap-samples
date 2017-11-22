import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache!';
import {ActionItem, ActionItemList} from 'shuttle-canstrap/button/';

var handler = function(message){
    alert(message);
}

var ViewModel = DefineMap.extend({
    actions: {Type: ActionItemList},
    click: function (ev) {
        handler('click');
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