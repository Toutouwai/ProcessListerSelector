$(document).ready(function() {

	// Set Lister filters value
	function setFilters() {
		var selector = $('#ls_selector').val().toLowerCase();
		// Add default limit of 25 if none supplied in selector
		if(selector.indexOf(' limit=') === -1 && selector.indexOf(',limit=') === -1 && selector.indexOf('limit=') !== 0) {
			selector += ', limit=25';
		}
		$('#ProcessListerFilters').val(selector).change();
	}

	// Move "Selector" tab and focus it
	var $selector_tab = $('#_ListerSelectorTab').parent('li');
	$selector_tab.parent().prepend($selector_tab);
	$selector_tab.find('a').click();

	// Remove change event handler from filter input so it's possible to manually set it
	$('#ProcessListerFilters').addClass('no-auto-change');
	$(document).off('change', '.InputfieldSelector :input:not(.select-field):not(.input-value-autocomplete)').on('change', '.InputfieldSelector :input:not(.select-field):not(.input-value-autocomplete):not(.no-auto-change)', function() {
		InputfieldSelector.changeAny($(this));
	});

	// Table header rows are not used for sorting
	ProcessLister.results.off('click', '.ProcessListerTable > thead th');

	// Sync selector to filters when it changes
	$('#ls_selector').change(setFilters);

	// Set filters on DOM ready
	setFilters();

});
