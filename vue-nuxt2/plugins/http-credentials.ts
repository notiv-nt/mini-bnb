import { Context } from '@nuxt/types';

export default ({ $http }: Context) => {
  // @ts-ignore
  $http._defaults.credentials = 'include';
};
