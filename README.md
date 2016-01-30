# Ember-cli-catalog
[![Build Status](https://travis-ci.org/uitgewis/ember-cli-catalog.svg?branch=master)](https://travis-ci.org/uitgewis/ember-cli-catalog)

This README outlines the details of collaborating on this Ember addon.

## Example

### Simple example
```
{{#catalog-table content=model}}
  {{#catalog-head}}
  <tr>
    <th>Item</th>
  </tr>
  {{/catalog-head}}

  {{#catalog-body}}
  <tr>
    <td>{{item}}</td>
  </tr>
  {{/catalog-body}}
{{/catalog-table}}
```

### Advanced example
```
{{#catalog-table content=model tagName='div'}}
  {{catalog-filter filter=someFilter properties=['item']}}

  {{#catalog-head sort=true onChange=sortedItemDidChange(property, direction)}}
  <tr>
    <th {{action 'sort' 'item'}}>Item</th>
  </tr>
  {{/catalog-head}}

  {{#catalog-body}}
  <tr>
    <td {{action 'selectItem' item}}>{{item}}</td>
  </tr>
  {{/catalog-body}}
  
  {{catalog-pages-select onChange=numberOfRecordsChanged(number)}}
  {{catalog-page-numbers onChange=selectedPageHasChanged(page)}}
{{/catalog-table}}
```


## Installation

* `npm install ember-cli-catalog`
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
