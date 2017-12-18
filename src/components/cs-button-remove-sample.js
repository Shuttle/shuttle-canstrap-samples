import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-remove-sample.stache!';
import {alerts} from 'shuttle-canstrap/alerts/';
import options from 'shuttle-canstrap';
import state from '~/state';

var ViewModel = DefineMap.extend({
    customConfirmationChecked: {
        type: 'boolean',
        value: false,
        set: function (value) {
            if (!value) {
                options.button.remove.confirmation = undefined;
                return;
            } else {
                options.button.remove.confirmation = function (primaryClick) {
                    state.modal.confirmation.primaryClick = primaryClick;

                    $('#modal-confirmation').modal({show: true});
                }
            }

            return value;
        }
    },
    removing: {
        type: 'boolean',
        value: false
    },
    remove: function () {
        var self = this;

        this.removing = true;

        setTimeout(() => {
            self.removing = false;
        }, 1000);
    }
});

export default Component.extend({
    tag: 'cs-button-remove-sample',
    view,
    ViewModel
});