jquery.filterOptions
====================

A jQuery plugin for filtering options inside a select element.

Version `0.1`

#Code:

		/**
		 * Only shows options that contain a given text.
		 * @author Larry Battle <bateru.com/news>
		 * @method showOnlyOptionsSimilarToText
		 * @param {String|jQuery Object} selectionEl - jQuery selector or jQuery object
		 * @param {String} str - String to compare
		 * @param {Boolean} isCaseSensitive - is case sensitive
		 */
		var showOnlyOptionsSimilarToText = function (selectionEl, str, isCaseSensitive) {
			if (isCaseSensitive)
				str = str.toLowerCase();
			// cache the jQuery object of the <select> element
			var $el = $(selectionEl);
			if (!$el.data("options")) {
				// cache all the options inside the <select> element for easy recover
				$el.data("options", $el.find("option").clone());
			}
			var newOptions = $el.data("options").filter(function () {
					var text = $(this).text();
					if (isCaseSensitive)
						text = text.toLowerCase();
					return text.match(str);
				});
			$el.empty().append(newOptions);
		};

# Demo:
http://jsfiddle.net/x6cfF/4/

#Todo:
- Review http://www.lessanvaezi.com/filter-select-list-options/
- Support optgroup 
- Include demo in repository.
- Promote
