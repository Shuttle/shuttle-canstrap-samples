import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-fetching-sample.stache!';

export default Component.extend({
    tag: 'cs-fetching-sample',
    view,
    ViewModel: DefineMap
});