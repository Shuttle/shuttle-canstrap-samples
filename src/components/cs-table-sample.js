import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './cs-table-sample.stache!';
import {ColumnList} from 'shuttle-canstrap/table/';

var ViewModel = DefineMap.extend({
    columns: {
        Type: ColumnList,
        value: [
            {
                columnTitle: 'Column-1'
            }
        ]
    },
    rows: {
        Type: DefineList
    }
});

export default Component.extend({
    tag: 'cs-table-sample',
    view,
    ViewModel
});