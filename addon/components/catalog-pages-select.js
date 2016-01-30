import Ember from 'ember';
import layout from '../templates/components/catalog-pages-select';

export default Ember.Component.extend({
  layout: layout,

  /**
   * Add addon-specific class name
   * @property {Array} classNames
   */
  classNames: ['catalog-pages-select'],

  /**
   * Items to show for criteria
   * @property {Array} items
   */
  items: [10, 20, 50, 100],

  /**
   * Number of records to display per page
   * @property {Number} recordsPerPage
   */
  recordsPerPage: 10,

  actions: {
    /**
     * Set records per page
     * @event recordPerPageChanged
     */
    recordsPerPageChanged() {
      // Ember >= 1.13.x compat
      const selectedValue = this.$('select[name="catalog-pages-select"]').val();

      this.set('recordsPerPage', selectedValue);

      // Bubble action
      return true;
    },
  },
});
