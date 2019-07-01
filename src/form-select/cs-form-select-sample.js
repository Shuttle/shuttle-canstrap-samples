import Component from 'can-component';
import FormViewModel from '../form-view-model';
import view from './cs-form-select-sample.stache!';
import {OptionMap, OptionList} from 'shuttle-canstrap/select/';

var ViewModel = FormViewModel.extend({
    value: {
        type: 'string',
        default: ''
    },
    options: {
        Type: OptionList,
        get: function(){
            return [
                {
                    value: '',
                    label: '(select)'
                },
                {
                    value: '1',
                    label: 'One'
                },
                {
                    value: '2',
                    label: 'Two'
                },
                {
                    value: '3',
                    label: 'Three'
                }
            ];
        }
    }
});

export default Component.extend({
    tag: 'cs-form-select-sample',
    view,
    ViewModel
});