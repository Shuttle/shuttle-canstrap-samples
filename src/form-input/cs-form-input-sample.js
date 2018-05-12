import Component from 'can-component';
import FormViewModel from '../form-view-model';
import view from './cs-form-input-sample.stache!';

var ViewModel = FormViewModel.extend({
    name: {
        type: 'string',
        default: ''
    },
    datetime: {
        type: 'date'
    },
    checked: {
        type: 'boolean',
        default: false
    }
});

export default Component.extend({
    tag: 'cs-form-input-sample',
    ViewModel,
    view
});