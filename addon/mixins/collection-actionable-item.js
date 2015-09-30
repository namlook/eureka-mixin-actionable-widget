import Ember from 'ember';
import ActionableItemMixin from './actionable-item';

export default Ember.Mixin.create(ActionableItemMixin, {

    iconCssClass: Ember.computed.alias('actionConfig.icon'),

    /** the label of the action to display
     * If the action is a toggle action, then the label to display
     * is the label of the current state
     */
    label: Ember.computed('actionConfig.label', 'name', function() {
        return this.get('actionConfig.label') || this.get('name');
    }),


    /** return true if the route is equal to `currentRouteName`
     */
    isCurrentRoute: Ember.computed('currentRouteName', 'route', function() {
        return this.get('currentRouteName') === this.get('route');
    }),


    actions: {
        actionTriggered: function(actionName) {
            this.sendAction('toControllerAction', {
                name: actionName
            });
        }
    }

});
