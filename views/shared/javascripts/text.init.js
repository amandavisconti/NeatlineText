
/**
 * @package     neatline
 * @subpackage  text
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Text', function(Text) {


  Text.addInitializer(function() {
    Text.__controller = new Text.Controller();
  });


});
