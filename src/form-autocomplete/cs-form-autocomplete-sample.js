import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-form-autocomplete-sample.stache';
import {alerts} from 'shuttle-canstrap/alerts/';

export default Component.extend({
    tag: 'cs-form-autocomplete-sample',
    view,
    viewModel: DefineMap
});