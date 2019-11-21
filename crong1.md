# ES2015

destructuring



Object destructuring

```javascript
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }
```



object spread operator 

```javascript
const obj1 = { id:21, content:"lorem.." };
const newObj = { ...obj1, status:"doing", content:"foo" };
```



rest paramter

ES Classes

ES Modules

arrow function 



---

# Functional 기본

forEach,map,reduce를 통한 데이터 조작

```react
render() {
    const items = this.state.cart.map((item, key) =>
        <li key={item.id}>{item.name}</li>
    );
}

//파이프라인 예제.(function composition)
const 서버로가는자동차파이프 = go(
  dataMap,
  dataFilter,
  dataReduce, 
  sendServer
)('왕민');
```

currying



---



# SPAs(Single Page Application)

#### Single Page Applications 란 무엇인가?

Backend에서는 API만 주로 제공하고, 
클라이언트에서 Ajax와 template작업을 통해 동작하는 Rich한 웹애플리케이션.

그렇게 만들어진 웹사이트들.

- 구글닥스
- 페이스북, 트위터
- todolist, trello...





------

### SPAs가 등작하게 된 배경

- 웹이라는 접근성 장점은 계속 유지되는 중
- 네트워크 향상
- 개인 디바이스의 하드웨어 성능 향상
- 웹서비스는 보다 다양한 기능을 제공



- UX를 고려하면서 동작할 필요 등장

 **=> 대규모 기능을 UX를 해치지 않고 제공하는 방법은 무엇일까?**



------

### SPAs 에 필요한 기술들

- Routing

- 똑똑한 DOM 제어

- 향상된 성능을 보장하는 Rendering 방식

- State management

- view-model binding

- 재사용 UI Component
  
  - UI단위의 컴포넌트방식의 개발.(HTML+CSS+JavaScript 세트)
  
- Modular 프로그래밍

- Routing

- 깔끔한 비동기제어

  



------

### Framework for SPAs

각각의 철학을 가지고 있으면서 발전 중.

Angular, React, Vue.js..

- https://angularjs.org/
- https://vuejs.org/
- <https://reactjs.org/>



SPAs가 필요한 초기에는, MVC의 형태를 기초로 시작하다가(backbone.js등), 

UI 개발 상황에 맞춰진 형태로 발전 중.



------



### React Library

***'A JavaScript library for building user interfaces'***



- React는 full features frameworks가 아니다. **library**에 가까움.
- fetch, routing, 복잡한 state management를 기본으로 제공하진 않음.
- React 는 View를 처리하는 역할에 집중. 그외 필요한 모듈은 추가해서 사용.



------

### 학습

여기자료는 빠르게 React를 익히는데 참고할 수 있으며, 반드시 표준가이드를 통해서 학습하도록 한다.

- React **Main Concept** 추천
  - https://reactjs.org/docs/hello-world.html



------

### React는,

- 거대함을 벗어나 view 작업에 좀더 집중

- view rendering의 동작과 성능은 개발자가 신경쓰게하지 말기.

- DOM조작을 위해 template을 별도 분리하지 말고, UI컴포넌트 단위로 그 안에서 표현.

- HTML은 컴포넌트 별로 그때그때 만들자. 다만 HTML과 유사한 jsx문법을 사용.

- virtual DOM으로 DOM조작을 효율적으로 하자.

  - Tree구조의 Virtual DOM을 계속 만들면서 이를 계속 비교하면서 변경사항을 파악.

  - 변경이 일어난 부분만 수정하며 DOM변경 최소화를 통해 성능 보장.

    

  ![](https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?w=1173&ssl=1)

  <image : <https://programmingwithmosh.com/react/react-virtual-dom-explained/> >

  

------

### React와 ES2015+

- 당연히 잘 어울림. 예제들은 모두 최신문법을 사용.
- ES Modules 방식의 모듈관리 (import / export)
- ES Classes 를 사용한 컴포넌트 개발 (최근에는 functional 프로그래밍 방식으로 변경 중)
- 최신 기능을 브라우저 호환성 걱정 없이 사용하기 위해서 **babel**과 같은 **transpiling** 필요.



------

### React를 배우기 위한 ES2015 지식셋

- const,let
- arrow function
- spread operator로 새로운 배열/객체 생성(Object.assign,concat메서드활용)
- destructuring 
- default parameter
- template literal, tagged template literals
- funtional programming(foreach, map, filter, reduce, currying개념
- ES classes
- ES modules



------

### React Components

- React는 **컴포넌트 주도 개발방식**을 따른다. 
- View를 의미적으로 구분해서, 각각 독립적인 컴포넌트로 만든다.
- 계층을 이루며 UI요소별로 여러개 컴포넌트 단위로 구성.
- 컴포넌트 개발하는 단계에서 계속 리팩토링 과정을 거쳐야 함.

<img src="https://cdn.rawgit.com/westeezy/ReactJS-Bootcamp/master/walkthroughs/slides/day2/img/react_component_hierarchy.png" width=1400px>

------

### React Component 코드 살펴보기  (**실습해보기**)



- Classes 표현방법에서 **Function**방식으로 개발하도록 변화 중.(2019 Hooks API)
- Classes방식을 먼저 공부하고 개발단계에서는 Hooks API를 사용하는 것이 적절.
- HTML을 구현하듯 rendering처리방법을 제시
- 직관적인 Event 등록.
- 아래 코드를 **codepen** 에서 실습해보자.
  - Setting에서 JavaScript preprocessor를 **Babel로** 설정
  - external scripts로, **react와 react-dom**을 추가



```react
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  /*
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  */

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```





------

### JSX

React에서 사용하는 표준 html template 문법.

- render함수안에 작성.
- 실제 DOM생성을 위해서 필요.
- JSX문법은 HTML을 코딩한다고 생각하면 편함.
- React는 JSX로 표현만 해두면, DOM API를 직접 사용하지 않고 DOM에 변경을 할 수 있다. 

```javascript
  render() {
    return (
      <h2>My Blog posts</h2>
    )
  }
```



------

### JSX는 변환된다

JSX는 브라우저에서 해석되지 않는다.
<strong>createElement</strong>와 같은 React 메서드를 통해 실제 DOM조작에 대한 작업을 하게 된다. 

온라인 변환 테스트 : https://babeljs.io/repl/



[jsx 문법]

```react
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
```



**[react에서 실제처리]**

```react
    return _react.default.createElement("div", 
        null, 
        _react.default.createElement("p", null, "You clicked ", count, " times"), 
        _react.default.createElement("button", {
            onClick: function onClick() {
                return setCount(count + 1);
            }
        }, "Click me"))
```



------

### JSX 변환은 언제 누가 해주나? 

- Babel 과 Webpack 의 도움이 필요하다. 

- [**webpack** 에서 babel-loader를 모듈로 등록하는 예시]

  ```react
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
  ```

  

------

### JSX에서 계층적인 DOM구조를 표현하려면

React개발을 하다보면, HTML 구조와 같은 **계층적인 컴포넌트 개발**이 필요하다. 

잘게 나눠진  컴포넌트는 그 서비스 안에서 재사용될을 기대할 수 있다.

![](https://cdn-images-1.medium.com/max/1600/1*A8ds6m4es9z3ZRWwbb2NXQ.png)



실제로 컴포넌트 단위는 이렇게 작을 수 있음

```react
  render() {
    return (
      <div>
      <h2>My Blog posts</h2>
      <MyList  info="firstPost"></MyList>
      </div>
    )
  }
```

**MyList는** 실제 HTML tag가 아닌 **사용자가 만든 Component**이다.  

따라서 위 코드에서는 MyList를 하위컴포넌트로 만들어야 한다. 위 코드의 표현은 사실 MyList가 컴포넌트이고, 아래와 같이 호출한 것과 같다고 볼 수 있다.

```javascript
new MyList({info: "firstPost"});
```



컴포넌트가 계층적일때의 고민사항, 

**컴포넌트간의 데이터 교환과 컴포넌트간의 호출은 어떻게 해야하는가?** 

**state와 props**에 대한 이해가 필요하다. 



------

### React의 데이터의 흐름은 단방향적으로 흐른다 (uni-direction)

![](http://blog.embengineering.com/assets/images/react-data-flow.png)

<span style="font-size:12px;margin-top:20px;"></span>





------

### Component 데이터의 상태 : state  (**실습해보기**)

컴포넌트마다 자신에게만 필요한 **데이터(state)**를 가질 수 있다. 

컴포넌트자신이 가지고 있는 값이며, **변경이 되는** 대상을 **state라고** 표현한다. 

아래에서는 **count** 가 **state**이다. 



각 컴포넌트에서 필요한 데이터는 state라는 이름으로 표현하고 관리한다

```react
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render( <Example />, document.querySelector("#root"));

```



컴포넌트에서 관리해야 할 state가 여러개라면, useState를 사용해서 여러개의 state를 관리할 수 있다.



------

### props로 상위 컴포넌트의 값 받기

부모컴포넌트가 전달해 준 데이터는 **props객체**를 통해서 접근할 수 있다.

Clock 컴포넌트는 tick 부모컴포넌트가 전달해준 속성 중에 date속성을 props.date로 접근해서 사용하고 있다. 



```react
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />, document.getElementById('root')
  );
}

setInterval(tick, 1000);

```

props는 **read-only**로 수정하지 않아야 한다.



------

### JSX 반복코드 줄이기  (**실습해보기**)

**map**을 사용해서 반복적인 jsx코드를 줄일 수 있음.



```react
function MyList() {
  const data =  ["yagom", "crong", "jk", "honux!"];
  const lists = data.map((v,i) => <li key={i}>{v}</li>)
  return (
      <ul>{lists}</ul>
  )
}

function app() {
  ReactDOM.render( <MyList />, document.getElementById('root')
  );
}

app();
```

반복적인 엘리먼트는 key속성을 추가해야 효율적.



------

### 자식컴포넌트는 props값에 따라 렌더링 방식이 결정되는 경우가 많다

자식컴포넌트는 자신이 가지고 있는 state 값을 제외하고는 실제로는 대부분 props를 통해서 부모에 있는 값에 따라서 렌더링된다. 



```react
import React, {useContext} from 'react'
import Item from './Item.jsx'
import { TodoContext } from './TodoStore.js';

const List = () => {

  const {todos, loading} = useContext(TodoContext);

  let todoList = <div>loading...</div>;
  if(!loading) todoList = todos.map( (todo) => 
    <Item key={todo.id} todo={todo} />
  )

  return (
    <ul>
        {todoList}
    </ul>
  )
}
export default List
```





------

### 컴포넌트에 Event 등록

inline방식으로 추가하며, onClick과 같이 예약된 키워드를 활용한다. (카멜표기법)

event handler는 역시 this문제가 있어 바인딩 과정이 필요할 수 있다.



**부모컴포넌트**는 자식컴포넌트에게 이벤트 핸들러를 전달해줄 수 있고, 

```javascript
 return (<MyList clickHandler={this.onClick.bind(this)}></MyList>)
```



**자식컴포넌트**는 부모간 준 이벤트 핸들러(onClick)를 받아서 사용할 수가 있다. 

```html
 <li onClick={this.props.clickHandler}>...</li>
```





------

### click 이벤트 추가해보기   (**실습해보기**)

Child에는 button 태그가 만든다

button을 누르면  '클릭됐어요' 라는 메시지를 출력해보자 (alert 으로)

clickhandler는 Parent에서 구현하고 Child에 전달한다.

```react
import React , {useState} from "react";
import ReactDOM from "react-dom";

function Child(props) {
	//여기에 구현
}

function Parent() {
	//clickHandler 는 여기에 구현
  
  return (
    <div>
      <h1>안녕하세요</h1>
      <Child clickHandler={clickHandler} />
    </div>
  );
}

ReactDOM.render( <Parent />, document.querySelector("#root"));
```





------

### 데이터 변경처리  (**실습해보기**)

input 태그로 값을 받는 부분의 테스트를 해보자. 

onChange이벤트는 input 데이터가 변경이 될때마다 이벤트를 발생시키는 event이다.



input을 통해 입력된 데이터는 Show컴포넌트를 통해서 화면에 바로바로 출력해보자.

Show 컴포넌트는 Parent컴포넌트 안에 추가한다.

```react
import React , {useState} from "react";
import ReactDOM from "react-dom";

function Child(props) {
  return (
    <div>
      <input onChange={props.inputHandler} ></input>
    </div>
  );
}

function Show(props) {
  //화면에 받은 데이터를 그대로 출력하는 컴포넌트.
}

function Parent() {
  [content, setContent] = useState("");
  const inputHandler = (e) => {
    setContent(e.target.value);
  }
  //Show컴포넌트를 호출하지 않았음.
  return (
    <div>
      <h1>안녕하세요</h1>
      <Child inputHandler={inputHandler} />
    </div>
  );
}

ReactDOM.render( <Parent />, document.querySelector("#root"));

```





------

### React Component lifecycle

컴포넌트가 실행되는 동안 다양한 메서드를 제공. lifecycle hook 이라고  한다

Class방식의 컴포넌트를 개발할때 알아야할 지식으로,  앞으로는 점점 몰라도 되는 지식이다. 

하지만 참고로 알아둘 필요가 있다.



![](https://cdn-images-1.medium.com/max/800/1*_drMYY_IEgboMS4RhvC-lQ.png)



**constructor -> comonentWillMount -> render -> comonentDidMount**



아래 메서드는 이제 deprecated될 예정이다.

- componentWillMount
- componentWillRecieveProps
- componentWillUpdate





---

# 개발환경

### Babel & Transpiling



```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: 'src/app.html'
        }
    )]
}
```



###Webpack 

module bundler이다.

많은 javascript 라이브러리들을 각각 추가해줘야 하는 불편함을 없애주고, entry point부터 분석해서, 

의존되는 모듈을 쉽게 추가할 수 있음.

크게 module  loader와 plugin으로 구성됨.



```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/' //due to : historyfallback 하다가 bundle 파일 절대경로로 처리하기 위해서.
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/app.html' }
        )],
}
```



---

### CRA기반 프로젝트 시작

https://github.com/facebook/create-react-app






