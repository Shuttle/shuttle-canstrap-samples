import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-autocomplete-sample.stache';
import {alerts} from 'shuttle-canstrap/alerts/';

export default Component.extend({
    tag: 'cs-autocomplete-sample',
    view,
    viewModel: DefineMap
});