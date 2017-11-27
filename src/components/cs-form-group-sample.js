import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './cs-form-group-sample.stache!';
import applicationViewModel from '../state';

var ViewModel = DefineMap.extend({
    validationMessage: {
        type: 'string',
        value: 'This is a validation message.',
        get: function (value) {
            return applicationViewModel.validationChecked
                ? value
                : '';
        }
    }
});

export default Component.extend({
    tag: 'cs-form-group-sample',
    ViewModel,
    view
});