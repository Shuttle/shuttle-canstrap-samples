import DefineMap from "can-define/map/";
import DefineList from "can-define/list/";
import route from 'can-route/';
import stache from 'can-stache/';
import guard from 'shuttle-guard';
import canstrap from 'shuttle-canstrap';

var ApplicationViewModel = DefineMap.extend({
    resources: {
        Type: DefineList
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
                        value: ''
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
        value:
            true
    },
    validationChecked: {
        type: 'boolean',
        value: false
    },
    requiredChecked: {
        type: 'boolean',
        value: false
    },
    init: function () {
        this.route.on('resource', function (ev, newVal, oldVal) {
            if (!newVal) {
                return;
            }

            $('#application-content').html(stache('<' + newVal + '-sample />')());
        });
    },
    getResourceUrl: function (resource) {
        return route.url({resource: resource.name});
    },
    resources: [
        {name: 'can-validate'},
        {name: 'cs-button'},
        {name: 'cs-button-back'},
        {name: 'cs-button-refresh'},
        {name: 'cs-button-group'},
        {name: 'cs-button-remove'},
        {name: 'cs-button-submit'},
        {name: 'cs-checkbox'},
        {name: 'cs-fetching'},
        {name: 'cs-form'},
        {name: 'cs-form-group'},
        {name: 'cs-form-input'},
        {name: 'cs-form-select'},
        {name: 'cs-form-textarea'},
        {name: 'cs-input'},
        {name: 'cs-label'},
        {name: 'cs-modal'},
        {name: 'cs-page-title'},
        {name: 'cs-select'},
        {name: 'cs-table'},
        {name: 'cs-textarea'},
        {name: 'cs-validation'}
    ],
});

export default applicationViewModel;