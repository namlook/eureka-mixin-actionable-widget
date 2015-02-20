import Ember from 'ember';
import ActionableWidgetMixin from 'eureka-mixin-actionable-widget/mixins/actionable-widget';

module('ActionableWidgetMixin');

// Replace this with your real tests.
test('it works', function() {
  var ActionableWidgetObject = Ember.Object.extend(ActionableWidgetMixin);
  var subject = ActionableWidgetObject.create();
  ok(subject);
});
