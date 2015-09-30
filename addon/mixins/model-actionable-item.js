import Ember from 'ember';
import ActionableItemMixin from './actionable-item';

export default Ember.Mixin.create(ActionableItemMixin, {
    model: null,

    _checkConfig: function() {
        if (this.get('actionConfig.toggle') && !this.get('model')) {
            console.error('Toggled action need to be defined on a model');
        }
    }.on('init'),


    iconCssClass: Ember.computed('actionConfig.icon', 'isToggleAction', 'currentToggleState', function() {
        var icon;

        if (this.get('isToggleAction')) {
            var currentState = this.get('currentToggleState');
            icon = this.get('actionConfig.toggle.'+currentState+'.icon');
        } else {
            icon = this.get('actionConfig.icon');
        }

        return icon;
    }),


    /** the label of the action to display
     * If the action is a toggle action, then the label to display
     * is the label of the current state
     */
    label: Ember.computed('actionConfig.label', 'name', 'isToggleAction', 'currentToggleState', function() {
        var _label;

        // if the action is a toggle action, we use the label
        // from the current toggle state
        if (this.get('isToggleAction')) {
            var currentState = this.get('currentToggleState');
            _label = this.get('actionConfig.toggle.'+currentState+'.label');
        } else {
            var name = this.get('name');
            _label = this.get('actionConfig.label') || name;
        }

        return _label;
    }),


    /** true if the action is a toggle action
     */
    isToggleAction: Ember.computed.notEmpty('actionConfig.toggle'),


    /** return the current state of the action
     */
    currentToggleState: Ember.computed('action.field', 'model._hasChanged', function() {
        var fieldName = this.get('actionConfig.field');
        return this.get('model.'+fieldName);
    }),


    /** toggle beetween the differents states of the action
     * The next state is specified in the `next` params:
     *
     *   {
     *       name: "toogledAction",
     *       field: "fieldName",
     *       toggle: {
     *           "firstState": {
     *               label: "label of the first state",
     *               next: "secondState"
     *           },
     *           "secondState": {
     *               label: "label of the second state",
     *               next: "firstState"
     *           }
     *       }
     *   }
     *
     */
    toggleValue: function() {
        var fieldName = this.get('actionConfig.field');
        var currentState = this.get('currentToggleState');
        var nextValue  = this.get('actionConfig.toggle.'+currentState+'.next');
        this.set('model.'+fieldName, nextValue);
        var model = this.get('model');
        model._triggerReloadFields();
        model.save().then(function() {
            console.log('saved');
        });
    },

    actions: {
        actionTriggered: function(actionName) {
            this.sendAction('toControllerAction', {
                name: actionName,
                payload: this.get('model')
            });
        },
        toggle: function() {
            this.toggleValue();
        }
    }


});
