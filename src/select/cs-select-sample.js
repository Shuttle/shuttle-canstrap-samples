import { DefineMap, Component } from 'can';
import view from './cs-select-sample.stache!';
import {OptionList} from 'shuttle-canstrap/select/';

var ViewModel = DefineMap.extend({
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
    tag: 'cs-select-sample',
    view,
    ViewModel
});