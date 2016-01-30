import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('catalog-pages-select', 'Integration | Component | catalog pages select', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{catalog-pages-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#catalog-pages-select}}
      template block text
    {{/catalog-pages-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
