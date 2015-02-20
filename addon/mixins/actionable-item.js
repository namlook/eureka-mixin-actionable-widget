import Ember from 'ember';

export default Ember.Mixin.create({
    actionConfig: null,
    currentRouteName: null,

    classNameBindings: ["isActive:active"],

    isActive: function() {
        return this.get('currentRouteName') === this.get('route');
    }.property('currentRouteName', 'route'),


    /** return the Ember route to tansit when the action is triggered
    */
    route: Ember.computed.alias('actionConfig.route'),

    viewType: function() {
        return this.get('route').split('.')[2];
    }.property('route'),

    /** true if the route needs a model as argument
     */
    isModelRoute: Ember.computed.equal('viewType', 'model'),

    /** the name of the action. If no name is passed to the action config
     * and the action is a route, then the name is the route.
     */
    name: function() {
        var route = this.get('route');
        var name = this.get('actionConfig.name');
        if (!name) {
            if (route) {
                name = route;
            } else {
                console.error('A non-route action should have a name', this.get('actionConfig'));
            }
        }
        return name;
    }.property('route', 'actionConfig.name'),


    /** return true if the route is equal to `currentRouteName`
     */
    isCurrentRoute: function() {
        return this.get('currentRouteName') === this.get('route');
    }.property('currentRouteName', 'route'),


});
