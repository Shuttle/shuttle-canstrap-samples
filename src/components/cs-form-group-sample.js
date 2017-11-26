import Component from 'can-component';
import DefineMap from 'can-define/map/';
import view from './cs-form-group-sample.stache!';

var ViewModel = DefineMap.extend({
    showValidationMessage: {
        type: 'boolean',
        value: true
    },
    validationMessage: {
        type: 'string',
        value: 'This is a validation message.',
        get: function (value) {
            return this.showValidationMessage
                ? value
                : '';
        }
    },
    toggleValidationMessage: function () {
        this.showValidationMessage = !this.showValidationMessage;
    },
    validationIcon: function () {
        return this.showValidationMessage
            ? 'fa-toggle-on'
            : 'fa-toggle-off';
    }
});

export default Component.extend({
    tag: 'cs-form-group-sample',
    ViewModel,
    view
});