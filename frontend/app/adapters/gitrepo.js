import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://icanhazdadjoke.com',
  headers : {
       'Accept' : 'application/json'
   },
  pathForType: function(type) {
   return 'search';
 }
});
