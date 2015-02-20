import Ember from 'ember';
import CollectionActionableItemMixin from 'eureka-mixin-actionable-widget/mixins/collection-actionable-item';

module('CollectionActionableItemMixin');

// Replace this with your real tests.
test('it works', function() {
  var CollectionActionableItemObject = Ember.Object.extend(CollectionActionableItemMixin);
  var subject = CollectionActionableItemObject.create();
  ok(subject);
});
