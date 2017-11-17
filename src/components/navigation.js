import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';
import {DropdownItemList, DropdownItem} from 'shuttle-canstrap/nav-dropdown/';
import route from 'can-route/';

var ViewModel = DefineMap.extend({
  samples: { 
    get: function(value) {
      var result = new DropdownItemList();
      
      var dropdown = new DropdownItem({
        text: 'cs-nav-dropdown',
        items: new DropdownItemList()
      });
      
      each(value, function(sample) {
        dropdown.items.push({
          text: sample.name,
          href: route.url({sample: sample.name})
        });
      });
      
      result.push(dropdown);
      
      return result;
    }
  }
});

export default Component.extend({
    tag: 'sample-navigation',
    view,
    ViewModel
});