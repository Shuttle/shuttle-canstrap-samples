import DefineMap from 'can-define/map/';
import applicationViewModel from './state';

export default DefineMap.extend({
    validationMessage: {
        type: 'string',
        value: 'This is a validation message.',
        get: function (value) {
            return applicationViewModel.validationChecked
                ? value
                : '';
        }
    },
    requiredChecked: {
        type: 'boolean',
        get: function (value) {
            return applicationViewModel.requiredChecked;
        }
    }
});