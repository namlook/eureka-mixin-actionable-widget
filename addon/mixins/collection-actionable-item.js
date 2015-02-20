import Ember from 'ember';
import ActionableItemMixin from './actionable-item';

export default Ember.Mixin.create(ActionableItemMixin, {

    iconCssClass: Ember.computed.alias('actionConfig.icon'),

    /** the label of the action to display
     * If the action is a toggle action, then the label to display
     * is the label of the current state
     */
    label: function() {
        return this.get('actionConfig.label') || this.get('name');
    }.property('actionConfig.label', 'name'),


    /** return true if the route is equal to `currentRouteName`
     */
    isCurrentRoute: function() {
        return this.get('currentRouteName') === this.get('route');
    }.property('currentRouteName', 'route'),


    actions: {
        actionTriggered: function(actionName) {
            this.sendAction('toControllerAction', {
                name: actionName
            });
        }
    }

});
