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
                columnTitle: 'Disabled',
                view: '<cs-checkbox checked:bind="disabled" checkedClass:from="\'fa-toggle-on\'" uncheckedClass:from="\'fa-toggle-off\'"/>'
            },
            {
                columnTitle: 'Name',
                attributeName: 'Name'
            },
            {
                columnTitle: 'Surname',
                attributeName: 'Surname'
            },
            {
                columnTitle: 'Is Disabled?',
                attributeName: 'disabled'
            },
            {
                columnTitle: 'Remove',
                view: '<cs-button-remove disabled:from="disabled" click:from="remove" />'
            }
        ]
    },
    rows: {
        Type: DefineList,
        value: [
            {
                Name: "Mister",
                Surname: "Resistor",
                disabled: false
            },
            {
                Name: "Ohm",
                Surname: "Resistor",
                disabled: false
            },
            {
                Name: "Another",
                Surname: "Resistor",
                disabled: false
            }
        ]
    }
});

export default Component.extend({
    tag: 'cs-table-sample',
    view,
    ViewModel
});