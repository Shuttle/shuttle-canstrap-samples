import Component from 'can-component';
import ValidationViewModel from 'shuttle-canstrap/infrastructure/validation-view-model';
import view from './can-validate-sample.stache';
import validate from 'can-define-validate-validatejs';

var ViewModel = ValidationViewModel.extend({
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