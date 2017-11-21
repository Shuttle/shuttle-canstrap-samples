import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-sample.stache!';
import {ActionItem,ActionItemList} from 'shuttle-canstrap/button/';

var ViewModel = DefineMap.extend({
  actions: { Type: ActionItemList }
});

export default Component.extend({
    tag: 'cs-button-sample',
    view,
    ViewModel
});