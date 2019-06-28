import { Component, DefineMap, DefineList, Reflect } from 'can';
import view from './cs-table-sample.stache';
import { ColumnList } from 'shuttle-canstrap/table/';
import state from '~/state';
import stache from 'can-stache/';

var SampleRowMap = DefineMap.extend({
    click: {
        type: '*'
    },
    remove () {
        state.alerts.add({
            message: 'Remove button clicked on \'' + this.name + ' ' + this.surname + '\'.',
            name: 'remove-button-clicked'
        });
    },
    items () {
        state.alerts.add({
            message: 'Items navigation clicked on \'' + this.name + ' ' + this.surname + '\'.',
            name: 'items-navigation-clicked'
        });
    },
    viewCall: {
        type: 'any'
    }
});

var SampleRowList = DefineList.extend({
    '#': SampleRowMap
});

var ViewModel = DefineMap.extend({
    disabled: {
        type: 'boolean',
        set (value) {
            Reflect.each(this.rows, function (item) {
                item.disabled = value;
            });
            return value;
        }
    },
    rowClick (row) {
        if (!this.hasTableRowClick) {
            return;
        }

        state.alerts.add({
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
        set (value) {
            var self = this;

            Reflect.each(this.rows, function (row) {
                row.click = value
                    ? function () {
                        state.alerts.add({
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
    viewCall (row) {
        state.alerts.add({
            message: 'Clicked "view-call" button on \'' + row.name + ' ' + row.surname + '\'.',
            name: 'view-call-clicked'
        });
    },
    columns: {
        Type: ColumnList,
        default () {
            return [
                {
                    columnTitle: 'Navigate',
                    columnClass: 'col-1',
                    stache: '<cs-button text:raw="Items" click:from="items" elementClass:from="\'btn-sm\'"/>'
                },
                {
                    data: this,
                    headerStache: '<cs-checkbox checked:bind="disabled" checkedClass:from="\'fa-toggle-on\'" uncheckedClass:from="\'fa-toggle-off\'"/> Disabled',
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
                    stache: '<cs-button-remove disabled:from="disabled" click:from="remove" elementClass:from="\'btn-sm\'"/>'
                },
                {
                    columnTitle: 'View-Call',
                    columnClass: 'col-1',
                    view: function (row) {
                        return stache('<cs-button text:raw="view-call" disabled:from="disabled" click:from="viewCall" elementClass:raw="btn-secondary btn-sm"/>')(row);
                    }
                }
            ];
        }
    },
    rows: {
        Type: SampleRowList,
        default () {
            return [
                {
                    name: 'Mister',
                    surname: 'Resistor',
                    disabled: false
                },
                {
                    name: 'Ohm',
                    surname: 'Resistor',
                    disabled: false
                },
                {
                    name: 'Another',
                    surname: 'Resistor',
                    disabled: false
                }
            ];
        },
        set(value){
            const self = this;

            Reflect.each(value, function(row){
                row.viewCall = function () {
                    self.viewCall(row);
                };
            });

            return value;
        }
    }
});

export default Component.extend({
    tag: 'cs-table-sample',
    view,
    ViewModel
});