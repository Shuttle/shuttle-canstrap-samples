import Component from 'can-component';
import DefineMap from 'can-define/map/'
import view from './cs-modal-sample.stache!';
import {alerts} from 'shuttle-canstrap/alerts/';

export const ViewModel = DefineMap.extend({
    show: function() {
        $('#modal-sample').modal({ show: true });
    },
    primaryClick: function(){
        alerts.show({ message: 'Primary button clicked.', name: 'modal-click'});
    }
});

export default Component.extend({
    tag: 'cs-modal-sample',
    view,
    ViewModel
});