(function($) {

	function setFilters() {
		$('#ProcessListerFilters').val($('#ls_selector').val()).change();
	}

	$(document).ready(function() {

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

		// Sync selector to filters
		$('#ls_selector').change(setFilters);

		setFilters();

	});

}(jQuery));
