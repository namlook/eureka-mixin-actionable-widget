# Eureka-mixin-actionable-widget

Mixin that brings action awareness to Eureka's widgets. Usage:

    {
        widgets: [
            {
                type: <actionable-widget>,
                actions: [ // the main actions
                    { // regular action (you will have to implement the action into the controller)
                        name: 'simpleAction', // the name of the triggered action
                        label: 'simple action',
                        icon: 'glyphicon glyphicon-pencil' // icon css classes
                    },
                    { // route transition action
                        name: 'edit',
                        route: 'eureka.user.model.edit' // the full ember route
                    },
                    { // toggle action (only for `WidgetModel`s)
                        name: 'toggleFavorite',
                        field: 'isFavorite',
                        toggle: {
                            // if the field value is true, then go to this state
                            true: {
                                label: 'unfavorite',
                                icon: 'glyphicon glyphicon-star-empty'
                                // if the action is clicked, set the field value to
                                // the value of `next` (here `false`)
                                next: false,
                            },
                            false: {
                                label: 'favorite',
                                icon: 'glyphicon glyphicon-star'
                                next: true
                            }
                        }
                    }
                ],
                secondaryActions: [
                    ... // same as main actions
                    {divider: true} // add a divider to the dropdown menu
                    ... // same as main actions
                ]
            }
        ]
    }

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
