import Component from 'can-component';
import FormViewModel from '../form-view-model';
import view from './cs-form-checkbox-sample.stache!';

var ViewModel = FormViewModel.extend({
    name: {
        type: 'string',
        value: ''
    },
    checked: {
        type: 'boolean',
        value: false
    }
});

export default Component.extend({
    tag: 'cs-form-checkbox-sample',
    ViewModel,
    view
});