import Route from '@ember/routing/route';
import ENV from 'dummy/config/environment';

export default Route.extend({
  model() {
    const { k } = ENV;
    return !!k;
  }
});
