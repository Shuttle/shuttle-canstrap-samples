import DefineMap from 'can-define/map/';
import Component from 'can-component';
import view from './cs-button-remove-sample.stache!';
import {alerts} from 'shuttle-canstrap/alerts/';
import canstrap from 'shuttle-canstrap';
import state from '~/state';

var ViewModel = DefineMap.extend({
    customConfirmationChecked: {
        type: 'boolean',
        default: false,
        set: function (value) {
            if (!value) {
                canstrap.button.remove.confirmation = undefined;
                return;
            } else {
                canstrap.button.remove.confirmation = function (options) {
                    state.modal.confirmation.show(options);
                }
            }

            return value;
        }
    },
    removing: {
        type: 'boolean',
        default: false
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