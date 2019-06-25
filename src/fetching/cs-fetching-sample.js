import { DefineMap, Component } from 'can';
import view from './cs-fetching-sample.stache!';

export default Component.extend({
    tag: 'cs-fetching-sample',
    view,
    ViewModel: DefineMap
});