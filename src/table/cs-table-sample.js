import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './cs-table-sample.stache';
import {ColumnList} from 'shuttle-canstrap/table/';
import {alerts} from 'shuttle-canstrap/alerts/';
import each from 'can-util/js/each/';

var SampleRowMap = DefineMap.extend({
    click: {
        type: '*'
    },
    remove() {
        alerts.show({
            message: 'Remove button clicked on \'' + this.name + ' ' + this.surname + '\'.',
            name: 'remove-button-clicked'
        });
    },
    items() {
        alerts.show({
            message: 'Items navigation clicked on \'' + this.name + ' ' + this.surname + '\'.',
            name: 'items-navigation-clicked'
        });
    }
});

var SampleRowList = DefineList.extend({
    '#': SampleRowMap
});

var ViewModel = DefineMap.extend({
    rowClick(row) {
        if (!this.hasTableRowClick) {
            return;
        }

        alerts.show({
            message: 'Table row clicked on \'' + row.name + ' ' + row.surname + '\'.',
            name: 'table-row-clicked'
        });
    },
    hasTableRowClick: {
        type: 'boolean',
        default: false
    },
    hasRowClick: {
        type: 'boolean',
        default: false,
        set(value) {
            var self= this;

            each(this.rows, function (row) {
                row.click = value
                    ? function () {
                        alerts.show({
                            message: 'Row clicked on \'' + row.name + ' ' + row.surname + '\'.',
                            name: 'row-clicked'
                        });
                        self.rowClick(row);
                    }
                    : undefined;
            });

            return value;
        }
    },
    columns: {
        Type: ColumnList,
        default: [
            {
                columnTitle: 'Navigate',
                columnClass: 'col-1',
                stache: '<cs-button text:from="\'Items\'" click:from="@items" elementClass:from="\'btn-sm\'"/>'
            },
            {
                columnTitle: 'Disabled',
                columnClass: 'col-1',
                stache: '<cs-checkbox checked:bind="disabled" checkedClass:from="\'fa-toggle-on\'" uncheckedClass:from="\'fa-toggle-off\'"/>'
            },
            {
                columnTitle: 'Name',
                columnClass: 'col',
                attributeName: 'name'
            },
            {
                columnTitle: 'Surname',
                columnClass: 'col',
                attributeName: 'surname'
            },
            {
                columnTitle: 'Disabled?',
                columnClass: 'col-1',
                attributeName: 'disabled'
            },
            {
                columnTitle: 'Remove',
                columnClass: 'col-1',
                stache: '<cs-button-remove disabled:from="disabled" click:from="@remove" elementClass:from="\'btn-sm\'"/>'
            }
        ]
    },
    rows: {
        Type: SampleRowList,
        default: [
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