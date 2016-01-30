import Ember from 'ember';

export default Ember.Controller.extend({
  pages: 5,
  selection: [10,20,50,100],
  items: Ember.computed(() => {
    let items = [];

    for (let i = 1; i <= 100; i++) {
      items.push({ item: 'Some ' + i, price: (Math.random() * 10) });
    }

    return items;
  }),
});
