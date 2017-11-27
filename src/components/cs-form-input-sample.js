import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './cs-form-input-sample.stache!';

var ViewModel = DefineMap.extend({
    name: {
        type: 'string',
        value: ''
    },
    checked: {
        type: 'boolean',
        value: false
    },
    validationMessage: {
        type: 'string',
        value: 'This is a validation message.',
        get: function (value) {
            return this.validationChecked
                ? value
                : '';
        }
    }
});

export default Component.extend({
    tag: 'cs-form-input-sample',
    ViewModel,
    view
});