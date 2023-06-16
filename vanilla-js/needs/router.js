const URL_CHANGE = 'urlChange';

// 상황에 따라 변경해서 사용(init)
class Router {
  constructor() {
    this.params = {};
    this.setup();
  }

  setup() {
    window.document.addEventListener('popstate', () => {
      this.change();
    });
    window.document.addEventListener(URL_CHANGE, () => {
      this.render();
    });
  }

  /**
   * 상황에 따라 변경해서 사용
   * @param {HTMLElement} $app
   * @param {{path:string; component:any}[]} routes
   */
  init($app, routes) {
    this.$app = $app;
    this.routes = routes;
    this.change();
  }

  push(url, data = {}) {
    window.history.pushState(data, '', url);
    this.change();
  }

  back() {
    window.history.back();
  }

  change() {
    const urlChange = new CustomEvent(URL_CHANGE, {
      detail: { url: window.location },
    });
    document.dispatchEvent(urlChange);
  }

  render() {
    const { pathname } = window.location;
    for (let i = 0; i < this.routes.length; i++) {
      const routePath = this.routes[i].path;
      const params = matchPath(pathname, routePath);
      if (!params) continue;

      this.params = params;
      const Page = this.routes[i].component;
      new Page(this.$app);
      return;
    }
  }
}

export const router = new Router();

/**
 *
 * @param {string} currentPath
 * @param {string} routePath
 * @returns {false | Record<string,string>}
 */
const matchPath = (currentPath, routePath) => {
  const currentPathArr = currentPath.split('/');
  const routePathArr = routePath.split('/');
  const params = {};
  if (routePathArr.length === 1 && (routePathArr[0] === '' || routePathArr[0] === '*')) return params;
  for (let index = 0; index < currentPathArr.length; index++) {
    if (/^:/.test(routePathArr[index])) {
      params[routePathArr[index].slice(1)] = currentPathArr[index];
      continue;
    }
    if (routePathArr[index] === '*') {
      return params;
    }
    if (currentPathArr[index] !== routePathArr[index]) {
      return false;
    }
  }
  return params;
};

/** examples
export class App {
  constructor($target) {
    router.init($target, [
      { path: DEFAULT_URL.web.toString(), component: HomePage },
      { path: DEFAULT_URL.web.signup.toString(), component: SignupPage },
    ]);
  }
}
*/
