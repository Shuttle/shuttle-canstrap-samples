import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-input-datetime-sample.stache!';

var ViewModel = DefineMap.extend({
    datetime: {
        type: 'date'
    },
    date: {
        type: 'date'
    },
    time: {
        type: 'date'
    },
    minDate: {
        type: 'date'
    },
    maxDate: {
        type: 'date'
    }
});

export default Component.extend({
    tag: 'cs-input-datetime-sample',
    view,
    ViewModel
});