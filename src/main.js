import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'can-stache-route-helpers';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './main.css!';

import template from "./main.stache";
import route from 'can-route/';
import applicationViewModel from './state';
import {routeViewModel} from './state';

import "shuttle-canstrap";

import "~/navigation/navigation";
import "~/can-validate/can-validate-sample";
import "~/form/cs-form-sample";
import "~/form-checkbox/cs-form-checkbox-sample";
import "~/table/cs-table-sample";
import "~/button/cs-button-sample";
import "~/button-back/cs-button-back-sample";
import "~/button-refresh/cs-button-refresh-sample";
import "~/button-group/cs-button-group-sample";
import "~/button-remove/cs-button-remove-sample";
import "~/button-submit/cs-button-submit-sample";
import "~/checkbox/cs-checkbox-sample";
import "~/fetching/cs-fetching-sample";
import "~/form-group/cs-form-group-sample";
import "~/form-input/cs-form-input-sample";
import "~/form-select/cs-form-select-sample";
import "~/form-textarea/cs-form-textarea-sample";
import "~/label/cs-label-sample";
import "~/modal/cs-modal-sample";
import "~/input/cs-input-sample";
import "~/page-title/cs-page-title-sample";
import "~/select/cs-select-sample";
import "~/textarea/cs-textarea-sample";
import "~/validation/cs-validation-sample";

$('#application-container').html(template(applicationViewModel));

route.data = routeViewModel;
route.register('{resource}');
route.start();

