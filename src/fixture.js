import fixture from 'can-fixture';
import $ from 'jquery';

var unique = {};
var words = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu volutpat elit. Fusce pulvinar aliquet nisi, quis finibus sapien dictum sagittis. Nullam rutrum viverra aliquam. Cras vel ornare sapien, vel congue mauris. Pellentesque tempus tincidunt est ac aliquet. Ut eu elit quis nibh egestas varius. Duis varius, erat nec pharetra tempor, dolor ipsum dictum eros, nec lobortis lorem enim eget justo. Sed ipsum mauris, vestibulum in felis hendrerit, pretium aliquet metus. Morbi cursus nec lacus id elementum. Nullam vitae tellus at urna maximus lacinia at id nisl. Sed felis orci, tristique eu scelerisque quis, consectetur eget erat.
Vestibulum at tincidunt libero. Aliquam placerat consectetur velit nec condimentum. Duis ac ipsum sit amet leo gravida tempus. Nulla iaculis, lectus at dapibus vulputate, eros massa posuere justo, non iaculis massa nunc vitae neque. Pellentesque eu est eu orci pulvinar pharetra. In hac habitasse platea dictumst. Quisque vel dui ut enim volutpat viverra vel vitae magna. Sed elementum, orci vel tincidunt venenatis, erat neque lobortis risus, vel maximus tortor arcu a odio. Pellentesque et bibendum ligula. Quisque sollicitudin nunc sed nisl tristique, ut ultrices augue cursus. Sed ornare lobortis pharetra.
Nam sit amet vestibulum justo. Quisque et est nulla. Curabitur tristique viverra augue, volutpat egestas urna feugiat at. Ut scelerisque eros sit amet venenatis auctor. Maecenas ullamcorper enim arcu, vitae ultrices eros pharetra ac. Quisque sodales hendrerit porttitor. Maecenas in nulla sed turpis elementum tincidunt. Nulla quis imperdiet sapien, vel pulvinar est.
Integer et efficitur purus. Duis pharetra ultricies risus vitae cursus. Sed vitae sapien nisl. Vestibulum dictum lacinia rutrum. Fusce venenatis arcu quis congue consectetur. Sed auctor sed lacus in condimentum. Suspendisse ultricies lectus quis dictum eleifend. Nam ultricies pellentesque congue. Proin quis tempus massa, et faucibus lorem. Nunc vehicula, leo ac ultricies ultrices, justo libero mattis mauris, dictum volutpat ipsum massa a dui. Ut magna sem, aliquam at tincidunt at, dapibus id urna. Nunc nec gravida justo. Proin quis mi fringilla, imperdiet enim ac, aliquet nisi.
Sed scelerisque varius mauris. Nulla eget mi eget metus sagittis egestas id nec nunc. Fusce dapibus lectus vel nisi malesuada, id finibus tortor tincidunt. Sed vulputate massa sed nibh porttitor ornare. Maecenas non sagittis felis. Suspendisse tincidunt interdum libero, et semper lorem malesuada sit amet. Donec nisl tortor, congue nec neque at, tincidunt elementum libero. Quisque ut placerat lorem, id pellentesque purus. Duis mattis quam eu aliquam posuere. Fusce a commodo nisl. Donec sodales pharetra dignissim.
`.match(/\w+/g).sort().filter(function (word) {
		if (!unique[word]) {
			unique[word] = 1;
			return word;
		}
	}
);

fixture({
	"GET /words/search/{search}": function (call) {
		var count = 0;
		return {
			data: $.map(words.filter(function (item) {
				if (count > 9){
					return undefined;
				}

				var result = (item.indexOf(call.data.search) > -1) ? item : undefined;

				if (!!result){
					count++;
				}

				return result;
			}), function (item) {
				return {
					text: item
				}
			})
		};
	}
})