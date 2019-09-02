# 1장 리액트 입문
## 1. 리액트가 만들어진 배경
- JS를 사용해서 HTML로 구성한 UI를 제어하려고 할 때, 기존에는 DOM을 변형시키기 위해서는 브라우저의 DOM Selector API를 사용해서 특정 DOM을 선택한뒤, 특정 이벤트가 발생하면 변화를 주도록 설정했다.  
하지만 인터랙션이 자주 발생하고, 이에 따라 동적으로 UI를 표현해야한다면, 규칙이 다양해지고 관리해가 힘들어질것입니다.  
그래서 Ember, Backbone, AngularJS 등의 프레임워크가 만들어졌는다, 이 작동방식이 JS의 특정값이 바뀌면 특정 DOM의 소성이 바뀌도록 연결을 해주어서, 업데이트 하는 작업을 간소화해주는 방식으로 웹개발의 어려움을 해결해 주었습니다.

- 하지만, 리액트는 조금 다릅니다. 리액트는 어떠한 상태가 바뀌었을 때, 아예 다 날려버리고 처음부터 모든걸 새로 만듭니다.  
모든걸 다 날리고 새로만들면 속도가 느릴것이지만, 리액트에서는 Virtual DOM(가상 DOM)이라는 것을 사용해서 이 문제를 해결했습니다.  
Virtual DOM은 브라우저에 실제로 보여지는 DOM이 아니라 그냥 메모리에 가상으로 존재하는 DOM으로서 그냥 JS객체이기 때문에 작동성능이 실제로 브라우저에서 DOM을 보여주는 것보다 속도가 훨씬 빠릅니다.  
상태가 업데이트 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해서 렌더링합니다. 그리고 효율적인 비교 알고리즘을 통해서 실제 브라우저에 보여지고 있는 DOM과 비교하여 차이가 있는 곳을 감지하여 이를 실제 DOM에 패치시킵니다.

## 3. 리액트 컴포넌트
- 리액트 컴포넌트를 할 땐,  
    ```js
    import React from 'react';
    ```  
    를 통해 리액트를 불러옵니다.
- 리액트 컴포넌트는 '함수형태' 또는 '클래스형태'로 작성할 수 있습니다.  
리액트 컴포넌트에서는 XML형식의 값을 반환해줄 수 있는데 이를 JSX라고 부릅니다.
```js
export default Hello;
```
- 이 코드는 Hello라는 커포넌트를 내보내겠다는 의미입니다. 이렇게 하면 다른 컴포넌트에서 불러와서 사용할 수 있습니다.  
컴포넌트는 일종의 UI조각이고 쉽게 재사용 할 수도 있습니다.
- index.js를 열어보면 이런 코드가 보입니다.
    ```js
    ReactDOM.render(<App />, document.getElementById('root'));
    ```   
    여기서 ReactDOM.render의 역할은 브라우저에 있는 실제 DOM 내부(id가 root인)에 리액트 컴포넌트를 렌더링하겠다는 것을 의미합니다. 
    ```html
    <!-- public/index.html -->
    <div id="root"></div>
    ```
    즉 렌더링된 결과물이 위 div내부에 렌더링 됩니다.

## 4. JSX
- JSX는 리액트에서 생김새를 정의할 때, 사용하는 문법입니다. 얼핏보면 HTML같지만 Javascript입니다.
    ```js
    return <div>안녕하세요</div>
    ```
    리액트 컴포넌트 파일에서 XML형태로 코드를 작성하면 babel이 JSX를 Javascript로 변환해 줍니다.
- JSX가 Javascript로 제대로 변환이 되려면 지켜주어야 하는 몇가지 규칙이 있습니다.
### JSX규칙
1.  태그는 꼭 닫혀있어야 합니다.
```js
import React from 'react';
import Hello from './Hello';

// div가 닫혀있지 않아 Faild to compile이 뜹니다.
function App() {
  return (
    <div>
      <Hello />
      <div>
    </div>
  );
}
export default App;
```
2. 닫지 않아도 되는 태그는 Self Closing태그를 사용해야합니다.
```js

function App() {
  return (
    <div>
      <Hello />
      <input />
      <br />
    </div>
  );
}

```
3. 2개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야 합니다.
```js
// 잘못된 예시
function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}
```
```js
// 올바른 예시
function App() {
  return (
    <div>
      <Hello />
      <div>안녕히계세요</div>
    </div>
  );
}
```
하지만 단순히 감싸기 위해서 불필요한 div를 쓰고싶지 않다면, Fragment를 사용하면 됩니다.
```js
function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}
// 태그를 작성할 때 이름없이 작성하면 Fragment인데 이것은 브라우저상에 따로 별도의 엘리먼트로 나타나지 않습니다.
```
4. 자바스크립트 변수를 보여줄 때에는 {}로 감싸서 보여줍니다.
```js
function App() {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}
```
5. style과 className
    - 인라인 슽타일은 객체형태로 작성하며, camelCase형태로 네이밍 해주어야 합니다.
    ```js
    function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    return (
        <>
        <Hello />
        <div style={style}>{name}</div>
        </>
    );
    }
    ```  
    - CSS class를 설정 할 때에는 class=가 아닌 className=으로 설정합니다.
    ```js
    function App() {
        return (
            <>
                <div className="gray-box"></div>
            </>
        );
    }
    ```
6. 주석은 JSX내부에서 {/* */}형태로 작성합니다.
```js
function App() {

  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello 
      // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}
```