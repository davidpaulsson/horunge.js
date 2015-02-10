/* global $ */
/* global QUnit */

/**
 * horunge adds non breaking space
 */
QUnit.test( 'horunge adds non breaking space', function(assert) {
  'use strict';

  // add some text
  $('h1').text('This is a sample heading');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that innerHTML has a nbsp
  assert.ok( str == 'This is a sample&nbsp;heading' );
});

/**
 * horunge excepts options
 */
QUnit.test( 'horunge excepts options', function(assert) {
  'use strict';

  // add some text
  $('h1').text('This is a sample heading');

  // get innerHTML
  var str = $('h1').horunge({ words: 3 })[0].innerHTML;

  // see that innerHTML has a nbsp
  assert.ok( str == 'This is a&nbsp;sample&nbsp;heading' );
});


/**
 * horunge excepts options, large number
 */
 QUnit.test( 'horunge excepts options, large number', function(assert) {
   'use strict';

  // add some text
  $('h1').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas quod tenetur facere corrupti eum consequatur, voluptas dignissimos expedita itaque saepe id debitis atque porro repudiandae odio nihil suscipit reiciendis.');

  // get innerHTML
  var str = $('h1').horunge({ words: 10 })[0].innerHTML;

  assert.ok( str == 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas quod tenetur facere corrupti eum consequatur, voluptas dignissimos expedita itaque saepe&nbsp;id&nbsp;debitis&nbsp;atque&nbsp;porro&nbsp;repudiandae&nbsp;odio&nbsp;nihil&nbsp;suscipit&nbsp;reiciendis.');
 });


/**
 * horunge doesn't mess with 1 word sentences
 */
QUnit.test( 'horunge doesn\'t mess with 1 word sentences', function(assert) {
  'use strict';

  // add some text
  $('h1').text('Heading');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that str is intact
  assert.ok( str == 'Heading' );
});


/**
 * horunge doesn't mess with 2 word sentences
 */
QUnit.test( 'horunge doesn\'t mess with 2 word sentences', function(assert) {
  'use strict';

  // add some text
  $('h1').text('Sample heading');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that str is intact
  assert.ok( str == 'Sample heading' );
});


/**
 * horunge works with ? at the end
 */
QUnit.test( 'horunge works with ? at the end', function(assert) {
  'use strict';

  // add some text
  $('h1').text('This is a sample heading?');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that str is intact
  assert.ok( str == 'This is a sample&nbsp;heading?' );
});


/**
 * horunge works with ! at the end
 */
QUnit.test( 'horunge works with ! at the end', function(assert) {
  'use strict';

  // add some text
  $('h1').text('This is a sample heading!');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that str is intact
  assert.ok( str == 'This is a sample&nbsp;heading!' );
});

/**
 * horunge works with a long paragraph
 */
QUnit.test( 'horunge works with a long paragraph', function(assert) {
  'use strict';

  // add some text
  $('h1').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur unde blanditiis laudantium, inventore repudiandae dicta porro ullam? Consectetur, culpa nemo voluptatum sunt atque harum nam mollitia libero, optio vero, id.');

  // get innerHTML
  var str = $('h1').horunge()[0].innerHTML;

  // see that str is intact
  assert.ok( str == 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur unde blanditiis laudantium, inventore repudiandae dicta porro ullam? Consectetur, culpa nemo voluptatum sunt atque harum nam mollitia libero, optio vero,&nbsp;id.' );
});
