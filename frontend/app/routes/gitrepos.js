import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    //let url = 'https://api.github.com/users'
    let url="https://icanhazdadjoke.com/search"
    return Ember.$.getJSON(url).then((data) => {
      return data.results
    })
    //return ["dsadsa", "dsadsa"]
  }
});
