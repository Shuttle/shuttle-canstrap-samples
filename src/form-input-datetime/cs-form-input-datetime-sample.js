import Component from 'can-component';
import FormViewModel from '../form-view-model';
import view from './cs-form-input-datetime-sample.stache!';

var ViewModel = FormViewModel.extend({
    datetime: {
        type: 'date'
    },
    date: {
        type: 'date'
    },
    time: {
        type: 'date'
    }
});

export default Component.extend({
    tag: 'cs-form-input-datetime-sample',
    ViewModel,
    view
});