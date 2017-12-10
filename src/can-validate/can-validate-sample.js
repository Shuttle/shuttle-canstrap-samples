import Component from 'can-component';
import FormViewModel from '../infrastructure/form-view-model';
import view from './can-validate-sample.stache';
import validate from 'can-define-validate-validatejs';

var ViewModel = FormViewModel.extend({
    username: {
        type: 'string',
        value: '',
        validate: {
            presence: true
        }
    }
});

validate(ViewModel);

export default Component.extend({
    tag: 'can-validate-sample',
    ViewModel,
    view
});