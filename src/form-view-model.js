import { DefineMap } from 'can';
import applicationViewModel from './state';

export default DefineMap.extend({
    validationMessage: {
        type: 'string',
        default: 'This is a validation message.',
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