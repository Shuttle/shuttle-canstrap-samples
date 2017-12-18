import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'can-stache/helpers/route';

import 'bootstrap/dist/css/bootstrap.css!';
import 'font-awesome/css/font-awesome.css';
import './main.css!';

import template from "./main.stache!";
import route from 'can-route/';
import applicationViewModel from './state';
import {routeViewModel} from './state';

import "shuttle-canstrap";
import "~/components/navigation";
import "~/can-validate/can-validate-sample";
import "~/components/cs-button-sample";
import "~/components/cs-button-back-sample";
import "~/components/cs-button-refresh-sample";
import "~/components/cs-button-group-sample";
import "~/components/cs-button-remove-sample";
import "~/components/cs-button-submit-sample";
import "~/components/cs-checkbox-sample";
import "~/components/cs-fetching-sample";
import "~/components/cs-form-sample";
import "~/components/cs-form-group-sample";
import "~/components/cs-form-input-sample";
import "~/components/cs-form-select-sample";
import "~/components/cs-form-textarea-sample";
import "~/components/cs-label-sample";
import "~/components/cs-modal-sample";
import "~/components/cs-input-sample";
import "~/components/cs-page-title-sample";
import "~/components/cs-select-sample";
import "~/components/cs-textarea-sample";
import "~/components/cs-table-sample";
import "~/components/cs-validation-sample";

$('#application-container').html(template(applicationViewModel));

route.data = routeViewModel;
route('{resource}');
route.ready();
