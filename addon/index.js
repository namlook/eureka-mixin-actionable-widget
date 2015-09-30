import Ember from 'ember';


var getActionLabel = function(action) {
    return Ember.get(action, 'label') || Ember.get(action, 'name');
};


export default Ember.Mixin.create({

    primaryActions: Ember.computed.alias('config.actions'),
    hasPrimaryActions: Ember.computed.bool('primaryActions'),

    secondaryActions: Ember.computed.alias('config.secondaryActions'),
    hasSecondaryActions: Ember.computed.bool('secondaryActions'),

    hasActions: Ember.computed.or('hasPrimaryActions', 'hasSecondaryActions'),

    activeSecondaryActionLabel: Ember.computed('currentRouteName', 'secondaryActions.[]', function() {
        var currentRouteName = this.get('currentRouteName');
        var secondaryActions = Ember.A(this.get('secondaryActions'));
        var activeAction;
        secondaryActions.forEach(function(action) {
            if (action.route === currentRouteName) {
                activeAction = action;
            }
        });
        if (activeAction) {
            return getActionLabel(activeAction);
        }
    }),

    actions: {
        // forwards the actions to the parent component (until the controller)
        toControllerAction: function(action) {
            this.sendAction('toControllerAction', action);
        }
    },
});