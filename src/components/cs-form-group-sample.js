import Component from 'can-component';
import view from './cs-form-group-sample.stache!';
import FormViewModel from '../infrastructure/form-view-model';

export default Component.extend({
    tag: 'cs-form-group-sample',
    ViewModel: FormViewModel,
    view
});