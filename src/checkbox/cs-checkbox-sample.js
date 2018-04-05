import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-checkbox-sample.stache!';

var ViewModel = DefineMap.extend({
  value: { type: 'string', default: ''},
  checked: { type: 'boolean', default: false }
});

export default Component.extend({
    tag: 'cs-checkbox-sample',
    view,
    ViewModel
});