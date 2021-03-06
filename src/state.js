import {route, DefineMap, DefineList, stache} from 'can';
import guard from 'shuttle-guard';
import {ItemList} from 'shuttle-canstrap/sidebar/';
import {Alerts} from 'shuttle-canstrap/alerts/';

var ApplicationViewModel = DefineMap.extend({
    validationChecked: {
        type: 'boolean',
        default: false
    },
    requiredChecked: {
        type: 'boolean',
        default: false
    },
    alerts: {
        Default: Alerts
    },
    resources: {
        Default: DefineList
    },
    sidebar: {
        Default: ItemList
    },
    modal: {
        Type: DefineMap.extend({
            confirmation: {
                Type: DefineMap.extend({
                    primaryClick: {
                        type: '*'
                    },
                    message: {
                        type: 'string',
                        default: ''
                    },
                    show(options) {
                        guard.againstUndefined(options, "options");

                        this.message = options.message || 'No \'message\' passed in the confirmation options.';
                        this.primaryClick = options.primaryClick;

                        $('#modal-confirmation').modal({show: true});
                    }
                })
            }
        })
    }
});

var RouteViewModel = DefineMap.extend({
    resource: 'string'
});

export const routeViewModel = new DefineMap({});

let applicationViewModel = new ApplicationViewModel({
    route: routeViewModel,
    modal: {
        confirmation: {
            primaryClick: function () {
                throw new Error('No \'primaryClick\' has been set on \'state.modal.confirmation.');
            }
        }
    },
    formOptionsAvailable: {
        type: 'boolean',
        default: true
    },
    init: function () {
        this.route.on('resource', function (ev, newVal, oldVal) {
            if (!newVal) {
                return;
            }

            $('#application-content').html(stache('<' + newVal + '-sample />')());
        });

        var form = new ItemList();

        this.addSidebarItem(form, 'cs-form');
        this.addSidebarItem(form, 'cs-form-autocomplete');
        this.addSidebarItem(form, 'cs-form-checkbox');
        this.addSidebarItem(form, 'cs-form-group');
        this.addSidebarItem(form, 'cs-form-input');
        this.addSidebarItem(form, 'cs-form-input-datetime');
        this.addSidebarItem(form, 'cs-form-select');
        this.addSidebarItem(form, 'cs-form-textarea');

        var buttons = new ItemList();

        this.addSidebarItem(buttons, 'cs-button');
        this.addSidebarItem(buttons, 'cs-button-back');
        this.addSidebarItem(buttons, 'cs-button-refresh');
        this.addSidebarItem(buttons, 'cs-button-group');
        this.addSidebarItem(buttons, 'cs-button-remove');
        this.addSidebarItem(buttons, 'cs-button-submit');

        var core = new ItemList();

        this.addSidebarItem(core, 'can-validate');
        this.addSidebarItem(core, 'cs-autocomplete');
        this.addSidebarItem(core, 'cs-checkbox');
        this.addSidebarItem(core, 'cs-collapse');
        this.addSidebarItem(core, 'cs-fetching');
        this.addSidebarItem(core, 'cs-input');
        this.addSidebarItem(core, 'cs-input-datetime');
        this.addSidebarItem(core, 'cs-label');
        this.addSidebarItem(core, 'cs-modal');
        this.addSidebarItem(core, 'cs-page-title');
        this.addSidebarItem(core, 'cs-select');
        this.addSidebarItem(core, 'cs-table');
        this.addSidebarItem(core, 'cs-textarea');
        this.addSidebarItem(core, 'cs-validation');

        this.sidebar.push({text: 'Form', list: form});
        this.sidebar.push({text: 'Buttons', list: buttons});
        this.sidebar.push({text: 'Core', list: core});
    },
    addSidebarItem: function (list, resource) {
        var item = {text: resource, href: route.url({resource: resource})}

        list.push(item);

        this.resources.push(item);
    }
});

export default applicationViewModel;