import 'zone.js'; // for angular subapp
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from '../../es';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/ReactRender';
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [

    {
      name: 'react16',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react16',
    },
    {
      name: 'react15',
      entry: '//localhost:7102',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react15',
    },
    {
      name: 'vue',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue',
    },
    {
      name: 'angular9',
      entry: '//localhost:7103',
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular9',
    },
    {
      name: 'purehtml',
      entry: '//localhost:7104',
      container: '#subapp-viewport',
      loader,
      activeRule: '/purehtml',
    },
    {
      name: 'vue3',
      entry: '//localhost:7105',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue3',
    },
    {
      name: 'dataset',
      entry: 'http://0.0.0.0:7099/pandora',
      container: '#subapp-viewport',
      loader,
      activeRule: '/container/src',
      props: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdOYW1lIjoi5peg57uE57uHIiwidGVuYW50TmFtZSI6IuaXoOenn-aItyIsInBob25lIjoiMTgzMTEyNzA5NTEiLCJuYW1lIjoieGlhb3l4IiwiaXNBZG1pbiI6MSwidXNlcklkIjoiMiIsImVtYWlsIjoieXVodWl0aW5nQGhhcm1vbnljbG91ZC5jbiIsInVzZXJuYW1lIjoidGltZSJ9.8Bu5wiUtGHstDAYGRBp2V-AfR3KB-m5DtS6oFOlVzG0',
        isFullScreen: true,
        hideFeedback: true,
        basePath: '/container/src'
      }
    },
    {
      name: 'dashboard',
      entry: 'http://0.0.0.0:7099/pandora',
      container: '#subapp-viewport',
      loader,
      // activeRule: '/container/src/apps/application/saic-src/views/reportservice',
      activeRule: '/container/src/apps/application/saic-src/views/dataservice/datacollection',
      props: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdOYW1lIjoi5peg57uE57uHIiwidGVuYW50TmFtZSI6IuaXoOenn-aItyIsInBob25lIjoiMTgzMTEyNzA5NTEiLCJuYW1lIjoieGlhb3l4IiwiaXNBZG1pbiI6MSwidXNlcklkIjoiMiIsImVtYWlsIjoieXVodWl0aW5nQGhhcm1vbnljbG91ZC5jbiIsInVzZXJuYW1lIjoidGltZSJ9.8Bu5wiUtGHstDAYGRBp2V-AfR3KB-m5DtS6oFOlVzG0',
        isFullScreen: true,
        hideFeedback: true,
        basePath: '/container/src'
      }
    },
    {
      name: 'search',
      entry: 'http://0.0.0.0:7099/pandora',
      container: '#subapp-viewport',
      loader,
      activeRule: '/logdb/search',
      props: {
        // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdOYW1lIjoi5peg57uE57uHIiwidGVuYW50TmFtZSI6IuaXoOenn-aItyIsInBob25lIjoiMTgzMTEyNzA5NTEiLCJuYW1lIjoieGlhb3l4IiwiaXNBZG1pbiI6MSwidXNlcklkIjoiMiIsImVtYWlsIjoieXVodWl0aW5nQGhhcm1vbnljbG91ZC5jbiIsInVzZXJuYW1lIjoidGltZSJ9.8Bu5wiUtGHstDAYGRBp2V-AfR3KB-m5DtS6oFOlVzG0',
        isFullScreen: true,
        hideFeedback: true,
        basePath: '/container/src'
      }
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/react16');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
