import Component from 'can-component';
import DefineMap from 'can-define/map/'
import view from './cs-validation-sample.stache!';

export default Component.extend({
    tag: 'cs-validation-sample',
    view,
    viewModel: function(){
        return new DefineMap({
            validationMessage: 'This is a validation message.'
        });
    }
});