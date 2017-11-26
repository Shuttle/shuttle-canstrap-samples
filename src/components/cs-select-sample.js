import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-select-sample.stache!';
import {OptionItem,OptionItemList} from 'shuttle-canstrap/select/';

var ViewModel = DefineMap.extend({
  value: { type: 'string', value: ''},
  options: { Type: OptionItemList }
});

export default Component.extend({
    tag: 'cs-select-sample',
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