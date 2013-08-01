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
