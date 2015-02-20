import Ember from 'ember';
import ModelActionableItemMixin from 'eureka-mixin-actionable-widget/mixins/model-actionable-item';

module('ModelActionableItemMixin');

// Replace this with your real tests.
test('it works', function() {
  var ModelActionableItemObject = Ember.Object.extend(ModelActionableItemMixin);
  var subject = ModelActionableItemObject.create();
  ok(subject);
});
