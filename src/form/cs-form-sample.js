import Component from 'can-component';
import view from './cs-form-sample.stache';
import {alerts} from 'shuttle-canstrap/alerts/';
import FormViewModel from '../form-view-model';

var ViewModel = FormViewModel.extend({
    submit: function() {
        return true;
    }
});

export default Component.extend({
    tag: 'cs-form-sample',
    ViewModel,
    view
});