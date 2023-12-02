// 상황에 따라 변경해서 사용
// diff 알고리즘같은 고급 기능 없음
export class Component {
  $target;
  props;
  state;

  /**
   * @param {HTMLElement} $target
   * @param {Record<string,any>} props
   */
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.componentDidMount();
    this.setEvents();
  }

  /**
   * @description this.state 정의
   * @examples this.state={ component:true }
   */
  setup() {}

  /**
   *
   * @returns html string
   */
  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  /**
   * @param {Record<string,any>} newState
   * @param {boolean} forceRender - input setState시에 focus 초기화 문제를 간편하게 해결하기 위한 타입
   * @param {Function} callback
   */
  setState(newState, forceRender = true, callback) {
    if (!this.checkNeedUpdate(newState)) return;
    this.componentDidUpdate({ ...this.state }, { ...this.state, ...newState });
    this.state = { ...this.state, ...newState };
    if (forceRender) {
      debounceFrame(() => {
        this.render();
      })();
    }
    callback?.();
  }

  componentDidMount() {}
  componentDidUpdate(state, nextState) {}

  /**
   * @description addEvent로 이벤트를 정의하는 메소드
   */
  setEvents() {}
  /**
   * @param {keyof DocumentEventMap} eventType
   * @param {string} selector
   * @param {Function} callback
   */
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  checkNeedUpdate(newState) {
    for (const key in newState) {
      if (!Object.is(newState[key], this.state[key])) return true;
    }
    return false;
  }
}

const debounceFrame = (callback) => {
  let currentCallback;
  return () => {
    if (currentCallback) cancelAnimationFrame(currentCallback);
    currentCallback = requestAnimationFrame(callback);
  };
};

// examples
/** 
export class HomePage extends Component {
  setup() {
    this.state = { personalInfoStorage: usePersonalInfoStorage(), cardStatusStorage: useCardStatusStorage() };
  }

  componentDidMount() {
    const $header = this.$target.querySelector('header');
    new Header($header);
    const $contentTitle = this.$target.querySelector('.content_title');
    new ContentTitle($contentTitle, { type: 'home' });
  }

  template() {
    const [personalInfo] = this.state.personalInfoStorage;
    const [cardStatus] = this.state.cardStatusStorage;
    return `
        <header></header>
        <main id="page_content">
            <div class="content_title"></div>
            <div id="cards_container">
                ${personalInfo
                  .map(({ idx, nickname, mbti }) => {
                    return `<div idx="${idx}" class="card"> ~~ </div>`;
                  })
                  .join('')}
            </div>
        </main>
        `;
  }

  setEvents() {
    this.addEvent('click', '.card', (e) => {
      
    });
  }
}
*/
