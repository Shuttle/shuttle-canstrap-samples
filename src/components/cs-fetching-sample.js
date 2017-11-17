import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './cs-fetching-sample.stache!';
import each from 'can-util/js/each/';

var ViewModel = DefineMap.extend({
});

export default Component.extend({
    tag: 'cs-fetching-sample',
    view,
    ViewModel
});