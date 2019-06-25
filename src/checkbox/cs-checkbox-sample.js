import { DefineMap, Component } from 'can';
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