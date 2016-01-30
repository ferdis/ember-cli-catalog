import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('catalog-pages-select', 'Integration | Component | catalog pages select', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{catalog-pages-select}}`);
  assert.ok(true);
});

test('has classname', function(assert) {
  this.render(hbs`{{catalog-pages-select}}`);

  assert.equal(this.$('.catalog-pages-select').length, 1);
});

test('has markup', function(assert) {
  this.set('items', [10,20,50,100]);

  this.render(hbs`{{catalog-pages-select}}`);

  assert.equal(this.$().text().trim(), `10
  20
  50
  100`);

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#catalog-pages-select}}
      test content
    {{/catalog-pages-select}}
  `);

  assert.equal(this.$().text().trim(), `test content


  10
  20
  50
  100`);
});
