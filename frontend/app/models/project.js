import Ember from 'ember'

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string')
})
