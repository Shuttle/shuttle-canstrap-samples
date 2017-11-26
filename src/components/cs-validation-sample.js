import Component from 'can-component';
import DefineMap from 'can-define/map/'
import view from './cs-validation-sample.stache!';

export default Component.extend({
    tag: 'cs-validation-sample',
    view,
    viewModel: new DefineMap({
        validationMessage: 'This is a validation message.'
    })
});