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
                columnTitle: 'Name',
                attributeName: 'Name'
            },
            {
                columnTitle: 'Surname',
                attributeName: 'Surname'
            }
        ]
    },
    rows: {
        Type: DefineList,
        value: [
            {
                Name: "Mister",
                Surname: "Resistor"
            }
        ]
    }
});

export default Component.extend({
    tag: 'cs-table-sample',
    view,
    ViewModel
});