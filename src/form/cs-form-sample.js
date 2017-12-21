import Component from 'can-component';
import view from './cs-form-sample.stache';
import FormViewModel from '../form-view-model';

export default Component.extend({
    tag: 'cs-form-sample',
    ViewModel: FormViewModel,
    view
});