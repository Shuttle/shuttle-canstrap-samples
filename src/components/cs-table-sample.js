import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './cs-table-sample.stache!';
import {ColumnList} from 'shuttle-canstrap/table/';
import {alerts} from 'shuttle-canstrap/alerts/';

var SampleRowMap = DefineMap.extend({
    remove(){
        alerts.show({ message: 'Remove button clicked on \'' + this.name + ' ' + this.surname + '\'.', name: 'remove-button-clicked'});
    },
    items(){
        alerts.show({ message: 'Items navigation clicked on \'' + this.name + ' ' + this.surname + '\'.', name: 'items-navigation-clicked'});
    }
});

var SampleRowList = DefineList.extend({
    '#': SampleRowMap
});

var ViewModel = DefineMap.extend({
    columns: {
        Type: ColumnList,
        value: [
            {
                columnTitle: 'Navigate',
                stache: '<cs-button text:from="\'Items\'" click:from="@items" elementClass:from="\'btn-sm\'"/>'
            },
            {
                columnTitle: 'Disabled',
                stache: '<cs-checkbox checked:bind="disabled" checkedClass:from="\'fa-toggle-on\'" uncheckedClass:from="\'fa-toggle-off\'"/>'
            },
            {
                columnTitle: 'Name',
                attributeName: 'name'
            },
            {
                columnTitle: 'Surname',
                attributeName: 'surname'
            },
            {
                columnTitle: 'Is Disabled?',
                attributeName: 'disabled'
            },
            {
                columnTitle: 'Remove',
                stache: '<cs-button-remove disabled:from="disabled" click:from="@remove" elementClass:from="\'btn-sm\'"/>'
            }
        ]
    },
    rows: {
        Type: SampleRowList,
        value: [
            {
                name: "Mister",
                surname: "Resistor",
                disabled: false
            },
            {
                name: "Ohm",
                surname: "Resistor",
                disabled: false
            },
            {
                name: "Another",
                surname: "Resistor",
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