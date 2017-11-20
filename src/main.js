import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'can-stache/helpers/route';

import 'bootstrap/dist/css/bootstrap.css!';
import 'font-awesome/css/font-awesome.css!';
import './main.css!';

import DefineMap from "can-define/map/";
import DefineList from "can-define/list/";
import template from "./main.stache!";
import route from 'can-route/';
import stache from 'can-stache/';

import "shuttle-canstrap";
import "~/components/navigation";
import "~/components/cs-checkbox-sample";
import "~/components/cs-fetching-sample";
import "~/components/cs-label-sample";
import "~/components/cs-input-sample";
import "~/components/cs-page-title-sample";

var ApplicationViewModel = DefineMap.extend({
    resources: {Type: DefineList}
});

var RouteViewModel = DefineMap.extend({
    resource: 'string'
});

var routeViewModel = new DefineMap({});

var applicationViewModel = new ApplicationViewModel({
    route: routeViewModel,

    init: function () {
        this.route.on('resource', function (ev, newVal, oldVal) {
            if (!newVal) {
                return;
            }

            $('#application-content').html(stache('<' + newVal + '-sample />')());
        });
    },

    resources: [
        { name: 'cs-checkbox' },
        { name: 'cs-fetching' },
        { name: 'cs-input' },
        { name: 'cs-label' },
        { name: 'cs-page-title' }
    ]
});

$('#application-container').html(template(applicationViewModel));

route.data = routeViewModel;
route('{resource}');
route.ready();
