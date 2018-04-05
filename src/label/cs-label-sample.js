import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-label-sample.stache!';
import {alerts} from 'shuttle-canstrap/alerts/';

var ViewModel = DefineMap.extend({
    click(e) {
        e.stopPropagation();
        alerts.show({ message: "Label has been clicked.", name: "label-click"});
    }
});

export default Component.extend({
    tag: 'cs-label-sample',
    view,
    ViewModel
});