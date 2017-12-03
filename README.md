# react-router4

## router4

官网：https://reacttraining.com/react-router/web/guides/quick-start

他人博客：https://www.cnblogs.com/zhanghuiming/p/7592132.html

#### Facebook对react进行持续的改进，路由作为其中最重要的一部分，在4.0版本对其进行了大量的优化，总的来说，简单易用！ 

之前使用react路由的时候，我们引入的是react-router包。 
现在改版之后，我们引入的包是react-router-dom包。

改版之后的react-router-dom路由，我们要理解三个概念，Router、Route和Link。

### Router

Router我们可以把它看做是react路由的一个路由外层盒子，它里面的内容就是我们单页面应用的**路由**以及**路由组件**。

```javascript
import { BrowserRouter as Router } from "react-router-dom";
class Main extends Component{
    render(){
        return(
        <Router>
            <div>
                //otherCoding
            </div>
        </Router>
        )
    }
}
```

### Link

Link是react路由中的点击切换到哪一个组件的**链接**，（这里之所以不说是页面，而是说组件，因为切换到另一个界面只是展示效果，react的本质还是一个单页面应用-single page application）。

```
import { BrowserRouter as Router, Link} from "react-router-dom";
class Main extends Component{
    render(){
        return(
        <Router>
            <div>
                <ul>
                    <li><link to='/'>首页</Link></li>
                    <li><link to='/other'>其他页</Link></li>
                </ul>
            </div>
        </Router>
        )
    }
}
```

特别说明：第一、Router下面只能包含一个盒子标签，类似这里的div。 
第二、Link代表一个链接，在html界面中会解析成a标签。作为一个链接，必须有一个to属性，代表链接地址。这个链接地址是一个相对路径。 
第三、Route，是下面要说的组件，有一个path属性和一个组件属性（可以是component、render等等）。

### Route

Route代表了你的路由界面，path代表路径，component代表路径所对应的界面。

```javascript
import React,{ Component } from "react";

import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>this a Home page</div>
        )
    }
}
class Other extends Component{
    render(){
        return (
            <div>this a Other page</div>
        )
    }
}
class Main extends Component{

    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/other">其他页</Link></li>
                    </ul>
                    <Route path="/home" component={Home}/>
                    <Route path="/other" component={Other}/>
                </div>
            </Router>
        )
    }
}

render(<Main />,document.getElementById("root"));
```

### Prompt组件 

它有一个必须的属性message，用于给用户提示信息。

基本用法： 

```
<Prompt message="您确定您要离开当前页面吗？"/>
```

这样，每当用户进行切换时，都会提示一条消息。 
但是，有时候，我们希望提示消息，有时候我们不希望提示出现，这就用到它的另外一个属性-when。when有两种情况，当它的值是true时，会提示消息。当它的值为false时，不会提示消息。

```
<Prompt when={true} message="您确定要离开当前页面吗？"/>
```

### Redirect组件 

有些时候，我们匹配一个路径，但是可能这个路径，我们更希望它指向一个新的展示界面，而不是它原本的路径匹配界面。

Redirect组件的必须属性是to属性，表示重定向的新地址。

```
<Redirect to='/new-path' />
<Route path='/new-path' component={NewPage}/>
```

```
<Route path="/home" render={()=><Redirect to="/other"/>}/>
```

### match对象

match是一个匹配路径参数的对象，它有一个属性params，里面的内容就是路径参数，除常用的params属性外，它还有url、path、isExact属性。

```
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Prompt,Redirect } from "react-router-dom";

class Match extends Component{
    render(){
        return (
            <div>id:{this.props.match.params.id}</div>
        )
    }
}

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/other">其他页</Link></li>
                    </ul>

                    <Route path="/:id" component={Match}/>
                </div>
            </Router>
        )
    }
}
//id就是路径匹配参数。
render(<Main />,document.getElementById("root"));
```

在组件Match中，通过this.props.match.params.id获取了路径的匹配参数。首页参数home，其他页是other。

Match的获取方式： 
在Route component中，组件通过this.props.match获取。 
在Route render 和Route children中，通过传递一个参数的方式获取。

### Switch组件

它的特性是我们只渲染所匹配到的第一个路由组件，一般界面渲染的时候，会渲染所有匹配到的路由组件。它的孩子节点只能是Route组件或者Redirect组件。

```
import React,{ Component } from "react";

import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>Home</div>
        )
    }
}
class Other extends Component{
    render(){
        return (
            <div>Other</div>
        )
    }
}
class Switchs extends Component{
    render(){
        return (
            <div>Switchs test</div>
        )
    }
}

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/other">其他页</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/:id" component={Switchs}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/other" component={Other}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

render(<Main />,document.getElementById("root"));
```

### exact

exact是Route下的一条属性，一般而言，react路由会匹配所有匹配到的路由组价，exact能够使得路由的匹配更严格一些。

exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。

如在exact为true时，’/link’与’/’是不匹配的，但是在false的情况下它们又是匹配的。

```
<Route path='/' component={Home} />
<Route path='/page' component={Page}>
//这种情况下，如果匹配路由path='/page'，那么会把Home也会展示出来。
```

所以我们经常添加exact来解决上述问题。

```
<Route exact path='/' component={Home} />
<Route path='/page' component={Page} />
```

## 选择路由器(Router)

在你开始项目前，你需要决定你使用的路由器的类型。对于网页项目，存在`<BrowserRouter>`与`<HashRouter>`两种组件。当存在服务区来管理动态请求时，需要使用<BrowserRouter>组件，而<HashRouter>被用于静态网站。

通常，我们更倾向选择<BrowserRouter>，但如果你的网站仅用来呈现静态文件，那么<HashRouter>将会是一个好选择。

对于我们的项目，将设将会有服务器的动态支持，因此我们选择<BrowserRouter>作为路由器组件。

## 注释：

[1] locations 是一个含有描述URL不同部分属性的对象：

```
// 一个基本的location对象
{ pathname: '/', search: '', hash: '', key: 'abc123' state: {} }

```

[2] 你可以渲染无路径的<Route>，其将会匹配所有location。此法用于访问存在上下文中的变量与方法。

[3] 如果你使用children参数，即便在当前location不匹配时route也将进行渲染。

[4] 当需要支持相对路径的<Route>与<Link>时，你需要多做一些工作。相对<Link>将会比你之前看到的更为复杂。因其使用了父级的match对象而非当前URL来匹配相对路径。

[5] 这是一个本质上无状态的函数组件。内部实现，component参数与render参数的组件是用很大的区别的。使用component参数的组件会使用`React.createElement`来创建元素，使用render参数的组件则会调用render函数。如果我们定义一个内联函数并将其传给component参数，这将会比使用render参数慢很多。

```
<Route path='/one' component={One}/>
// React.createElement(props.component)
<Route path='/two' render={() => <Two />}/>
// props.render()

```

[6] <Route>与<Switch>组件都会带有location参数。这能让你使用与实际location不同的location去匹配地址。

[7] 可以传入staticContext参数，不过这仅在服务端渲染时有用。