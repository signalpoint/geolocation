/**
 * Implements hook_field_widget_form().
 */
function geolocation_googlemaps_field_widget_form(form, form_state, field, instance, langcode, items, delta, element) {
  try {
    geofield_field_widget_form(form, form_state, field, instance, langcode, items, delta, element);
  }
  catch (error) { console.log('geolocation_googlemaps_field_widget_form - ' + error); }
}
