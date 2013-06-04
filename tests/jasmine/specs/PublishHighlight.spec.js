
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Narrative
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Publish `highlight`', function() {


  var span, fx = {
    s1:   readFixtures('records.s1.json'),
    s12:  readFixtures('records.s12.json')
  };


  beforeEach(function() {
    NARRATIVE.loadNeatline();
    span = NARRATIVE.find('span[data-neatline-slug="slug-1"]');
  });


  it('should publish map model when one exists', function() {

    // --------------------------------------------------------------------
    // When the cursor hovers on a tagged element and a corresponding
    // model exists in the map collection, `highlight` should be published
    // with the model from the map.
    // --------------------------------------------------------------------

    NL.respondMap200(fx.s12);
    var vent = spyOn(Neatline.vent, 'trigger');

    // Hover on `slug-1`
    span.trigger('mouseenter');

    // Should publish `highlight`.
    expect(vent).toHaveBeenCalledWith('highlight', {
      model:  NARRATIVE.getMapRecordBySlug('slug-1'),
      source: Neatline.Narrative.ID
    });

  });


  it('should not publish when map does not have model', function() {

    // --------------------------------------------------------------------
    // When the map collection does not contain a corresponding model,
    // `highlight` should _not_ be published.
    // --------------------------------------------------------------------

    NL.respondMap200(fx.s2);
    var vent = spyOn(Neatline.vent, 'trigger');

    // Hover on `slug-1`.
    span.trigger('mouseenter');

    // Should not publish.
    expect(vent).not.toHaveBeenCalled();

  });


});