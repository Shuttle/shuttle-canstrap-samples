import Component from 'can-component';
import FormViewModel from '../infrastructure/form-view-model';
import view from './cs-form-select-sample.stache!';
import {OptionItem,OptionItemList} from 'shuttle-canstrap/select/';

var ViewModel = FormViewModel.extend({
    value: { type: 'string', value: ''},
    options: { Type: OptionItemList }
});

export default Component.extend({
    tag: 'cs-form-select-sample',
    view,
    viewModel: new ViewModel({
        value: '',
        options: function() {
            return [
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
    })
});