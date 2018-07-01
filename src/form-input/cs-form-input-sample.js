import Component from 'can-component';
import FormViewModel from '../form-view-model';
import view from './cs-form-input-sample.stache!';

var ViewModel = FormViewModel.extend({
    name: {
        type: 'string',
        default: ''
    }
});

export default Component.extend({
    tag: 'cs-form-input-sample',
    ViewModel,
    view
});