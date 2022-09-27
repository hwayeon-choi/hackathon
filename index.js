// index.js 파일은 프로젝트의 엔트리 파일.
// 여기서 import 구문으로 코드를 불러와서 앱을 번들링한다.

import {AppRegistry} from 'react-native';
import App from './App'; // App 컴포넌트 호출
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); // 네이티브 시스템에 App 컴포넌트 등록
