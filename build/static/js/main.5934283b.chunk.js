(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(242)},109:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),s=n(95),l=n.n(s),i=n(10),u=n(2),m=n(3),h=n(5),d=n(4),f=n(6),p={API_ENDPOINT:"http://localhost:8000/api",TOKEN_KEY:"capstone-client-auth-token",API_KEY:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY,APP_ID:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ID},g=n(96),E=n.n(g),b={saveAuthToken:function(e){window.localStorage.setItem(p.TOKEN_KEY,e)},getAuthToken:function(){return window.localStorage.getItem(p.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(p.TOKEN_KEY)},hasAuthToken:function(){return!!b.getAuthToken()},parseJwt:function(e){return E()(e)},parseAuthToken:function(){var e=b.getAuthToken();return e?b.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=b._getMsUntilExpiry(b.parseAuthToken());a=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(a)}},v=b,k={postUser:function(e){return fetch("".concat(p.API_ENDPOINT,"/auth/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return console.log("from auth-service"),fetch("".concat(p.API_ENDPOINT,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(p.API_ENDPOINT,"/auth/refresh"),{method:"POST",headers:{authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},O=null,j=["mousedown","mousemove","keypress","scroll","touchstart"],y={setIdleCallback:function(e){O=e},resetIdleTimer:function(e){clearTimeout(r),r=setTimeout(O,18e5)},regiserIdleTimerResets:function(){j.forEach(function(e){return document.addEventListener(e,y.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(r),j.forEach(function(e){return document.removeEventListener(e,y.resetIdleTimer,!0)})}},N=y,_=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),T=_,S=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.processLogin=function(e){v.saveAuthToken(e);var t=v.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),N.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),N.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),N.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){k.refreshToken().then(function(e){v.saveAuthToken(e.authToken),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var a={user:{},error:null},r=v.parseAuthToken();return r&&(a.user={id:r.user_id,name:r.name,username:r.sub}),n.state=a,N.setIdleCallback(n.logoutBecauseIdle),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.hasAuthToken()&&(N.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){N.unRegisterIdleResets(),v.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(_.Provider,{value:e},this.props.children)}}]),t}(o.Component),w=(n(109),n(17)),C=n(14);function A(e){var t=e.component,n=Object(C.a)(e,["component"]),a=t;return c.a.createElement(w.b,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return t.user.id?c.a.createElement(a,e):c.a.createElement(w.a,{to:{pathname:t.user.idle?"/login":"/",state:{from:e.location}}})})}}))}function x(e){var t=e.component,n=Object(C.a)(e,["component"]),a=t;return c.a.createElement(w.b,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return t.user.id?c.a.createElement(w.a,{to:"/"}):c.a.createElement(a,e)})}}))}n(99);var I=n(100),P=n.n(I);function M(e){var t=e.className,n=Object(C.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:["Button",t].join(" ")},n))}function D(e){var t=e.className,n=Object(C.a)(e,["className"]);return c.a.createElement("textarea",Object.assign({className:["Textarea",t].join(" ")},n))}var L=c.a.forwardRef(function(e,t){var n=e.className,a=Object(C.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:P()("Input",n),type:"text",ref:t},a))});function B(e){var t=e.className,n=Object(C.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:t},n))}function R(e){var t=e.className,n=Object(C.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:["Required",t].join(" ")},n),"*")}function U(e){var t=e.className,n=e.list,a=Object(C.a)(e,["className","list"]),r=["Section",n&&"Section--list",t].filter(Boolean).join(" ");return c.a.createElement("section",Object.assign({className:r},a))}n(216);var q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){console.log("from loginform"),e.preventDefault(),n.setState({error:null});var t=e.target,a=t.username,r=t.password;k.postLogin({username:a.value,password:r.value}).then(function(e){console.log("got here"),a.value="",r.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("div",{className:"log-in-form"},c.a.createElement("div",{role:"alert",className:"log-error-container"},e&&c.a.createElement("p",{className:"login-error"},e)),c.a.createElement("h2",{className:"log-reg-header log-header"},"Login"),c.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"login-input"},c.a.createElement(B,{htmlFor:"login-username-input"},"Username"),c.a.createElement(L,{ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("div",{className:"login-input"},c.a.createElement("label",{htmlFor:"login-password-input"},"Password"),c.a.createElement(L,{id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement(U,null,c.a.createElement(M,{className:"log-in-button",type:"submit"},"LOGIN")," ",c.a.createElement("br",null),c.a.createElement(i.b,{to:"/register",className:"login-redirect"},"Need to Sign up?"))))}}]),t}(o.Component);q.defaultProps={onLoginSuccess:function(){}},q.contextType=T;var F=q,K=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLoginSuccess=function(){var e=n.props,t=e.location,a=e.history,r=(t.state||{}).from||"/planner";a.push(r)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(F,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);K.defaultProps={location:{},history:{push:function(){}}};var J=K,z=n(33),G=(n(217),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,name:"",username:"",password:""},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.username,o=t.password;a&&r&&o?o.length<7?n.setState({error:"Password must be at least 6 characters"}):o.length>72?n.setState({error:"Password cannot be longer than 72 characters"}):/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/.test(o)?o.startsWith(" ")||o.endsWith(" ")?n.setState({error:"Password must not begin or end with spaces"}):k.postUser({name:a,username:r,password:o}).then(function(e){n.setState({name:"",username:"",password:""}),n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})}):n.setState({error:"Password must contain an uppercase and lowercase letter, a number, and a special character"}):n.setState({error:"Please fill out all fields"})},n.handleChange=function(e){n.setState(Object(z.a)({},e.target.name,e.target.value))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this,t=this.state.error;return c.a.createElement("div",{className:"registration-form"},c.a.createElement("div",{className:"auth-error-container",role:"alert"},t&&t),c.a.createElement("h2",{className:"log-reg-header reg-header"},"Sign Up"),c.a.createElement("form",{onSubmit:this.handleSubmit,onChange:function(t){return e.handleChange(t)}},c.a.createElement("div",{className:"form-label"},c.a.createElement(B,{htmlFor:"registration-name-input"},"Enter your name",c.a.createElement(R,null)),c.a.createElement(L,{ref:this.firstInput,id:"registration-name-input",name:"name",required:!0})),c.a.createElement("div",{className:"form-label"},c.a.createElement(B,{htmlFor:"registration-username-input"},"Choose a username",c.a.createElement(R,null)),c.a.createElement(L,{id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",{className:"form-label"},c.a.createElement(B,{htmlFor:"registration-password-input"},"Choose a password",c.a.createElement(R,null)),c.a.createElement(L,{id:"registration-password-input",name:"password",type:"password",required:!0})),c.a.createElement("footer",null,c.a.createElement(M,{className:"registration-button",type:"submit"},"SIGN UP")," ",c.a.createElement("br",null),c.a.createElement(i.b,{to:"/login",className:"login-redirect"},"Already have an account?"))))}}]),t}(o.Component));G.defaultProps={onRegistrationSuccess:function(){}};var Y=G,V=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(Y,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);V.defaultProps={history:{push:function(){}}};var W=V,H=(n(218),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{className:"planner-btn"},c.a.createElement(i.b,{to:"/planner"},"Plan")),c.a.createElement("button",{className:"explorer-btn"},c.a.createElement(i.b,{to:"/explore"},"Explore")))}}]),t}(o.Component)),X=(n(219),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement(i.b,{onClick:this.handleLogoutClick,to:"/login"},"Logout")}},{key:"renderLoginLink",value:function(){return c.a.createElement("div",null,c.a.createElement(i.b,{to:"/login"},"Login"),c.a.createElement(i.b,{to:"/register"},"Sign up"))}},{key:"renderGreeting",value:function(){return v.hasAuthToken()&&window.innerWidth>760?c.a.createElement("p",null,"Hi ",this.context.user.name,"!"):""}},{key:"render",value:function(){return c.a.createElement("header",{className:"main-header"},c.a.createElement("nav",null,c.a.createElement("h1",null,c.a.createElement(i.b,{to:"/"},c.a.createElement("span",{className:"meal"},"Meal"),c.a.createElement("span",{className:"deal"},"Deal"))),c.a.createElement("div",{className:"nav-links"},c.a.createElement("nav",null,this.renderGreeting(),v.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink()))))}}]),t}(o.Component));X.contextType=T;var Z=X,$=(n(220),n(21)),Q=n.n($),ee=c.a.createContext({meals:[],mealOfDay:[],addMeal:function(){},handleSubmit:function(){}}),te=(n(221),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(z.a)({},e.target.name,e.target.value),function(){console.log(n.state)})},n.handlePostMeal=function(e){e.preventDefault();var t=e.target,a=t.meal_name,r=t.ingredients,o={meal_name:a.value,ingredients:r.value};n.context.postMeal(o)},n.state={meal_name:"",ingredients:"",on_day:[]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"add-meal-form"},c.a.createElement("form",{onSubmit:this.handlePostMeal.bind(this),className:"add-meal-form"},c.a.createElement("div",{className:"add_meal_form"},c.a.createElement("label",{htmlFor:"addMealForm_meal_name"},"Meal Name"),c.a.createElement(L,{type:"text",name:"meal_name",onChange:this.handleChange,required:!0})),c.a.createElement("div",{className:"ingredients"},c.a.createElement("label",{htmlFor:"ingredients"},"Ingredients"),c.a.createElement("br",null),c.a.createElement(D,{name:"ingredients",id:"addMealForm_ingredients"})),c.a.createElement(M,{type:"submit",className:"add-btn"},"Add Meal")))}}]),t}(o.Component));te.contextType=ee;n(86);var ne=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={seeMore:!1,ingredients:[]},n.seeMore=function(e){e.ingredients&&n.setState({seeMore:!n.state.seeMore,ingredients:e.ingredients,image:e.image})},n.renderMore=function(){if(n.state.ingredients){var e=n.state.image,t=n.state.ingredients.replace(/[{}]/g,"").split(",").map(function(e,t){return c.a.createElement("li",{key:t},e)});return c.a.createElement("div",null,c.a.createElement("img",{className:"bm-img",src:e,alt:"x"}),c.a.createElement("br",null),"Ingredients:",c.a.createElement("ul",{className:"ing-list"},t))}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t={meal_name:this.props.meal.meal_name,ingredients:this.props.meal.ingredients,image:this.props.meal.image},n=this.props.meal.meal_name,a=this.props.index;return c.a.createElement("div",null,n,c.a.createElement("button",{className:"del-btn",onClick:function(){return e.context.handleDeleteBookmark(e.props.meal,a)}},"x"),c.a.createElement("button",{className:"add-btn",onClick:function(){return e.context.postMeal(t)}},"+"),c.a.createElement("button",{className:"see-more-btn",onClick:function(){return e.seeMore(t)}},"..."),c.a.createElement("div",null,this.state.seeMore&&this.renderMore()))}}]),t}(o.Component);ne.contextType=ee;var ae=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bm-page"},c.a.createElement("ul",{className:"bm-list"},this.context.bookmarks&&this.context.bookmarks.map(function(e,t){return c.a.createElement("li",{className:"bm-item",key:t},c.a.createElement(ne,{meal:e,index:t}))})))}}]),t}(o.Component);ae.contextType=ee;var re={getExplorerMeals:function(e){return fetch("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat(p.APP_ID,"&app_key=").concat(p.API_KEY),{}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},getUserMeals:function(){return fetch("".concat(p.API_ENDPOINT,"/meals"),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).catch(function(e){console.error({error:e})})},findMealByDate:function(e){return console.log(e),fetch("".concat(p.API_ENDPOINT,"/meals/").concat(e),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).catch(function(e){console.error({error:e}),console.log("here")})},postMeal:function(e){return fetch("".concat(p.API_ENDPOINT,"/meals"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(v.getAuthToken())},body:JSON.stringify(e)}).then(function(e){e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).catch(function(e){console.log({error:e})})},deleteMeal:function(e){return fetch("".concat(p.API_ENDPOINT,"/meals"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getBookmarks:function(){return fetch("".concat(p.API_ENDPOINT,"/bookmarks"),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).catch(function(e){console.error({error:e})})},postBookmark:function(e){return fetch("".concat(p.API_ENDPOINT,"/bookmarks"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(v.getAuthToken())},body:JSON.stringify(e)}).then(function(e){e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})}).catch(function(e){console.log({error:e})})},deleteBookmark:function(e){return fetch("".concat(p.API_ENDPOINT,"/bookmarks"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}},oe=(n(87),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={viewIngredients:!1},n.handleViewIngredients=function(){n.setState({viewIngredients:!n.state.viewIngredients},function(){console.log(n.state)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t={meal_name:this.props.meal.recipe.label,ingredients:this.props.meal.recipe.ingredientLines,image:this.props.meal.recipe.image};return console.log(t),c.a.createElement("div",{className:"meal-item"},c.a.createElement("div",{className:"meal-item-header"},c.a.createElement("h2",null,t.meal_name),c.a.createElement("div",{className:"meal-options"},c.a.createElement("button",{className:"add-btn",type:"click",onClick:function(){return e.context.postMeal(t)}},"Add to ",this.context.formattedDate),c.a.createElement("button",{className:"bm-btn",type:"click",onClick:function(){return e.context.handleAddBookmark(t)}},"Add to Bookmarks"),c.a.createElement("button",{className:"ing-btn",type:"click",onClick:this.handleViewIngredients},"View Ingredients"),c.a.createElement("br",null))),c.a.createElement("img",{className:"meal-img",src:t.image,alt:"x"}),c.a.createElement("ul",{className:"ingredient-list"},this.state.viewIngredients&&t.ingredients.map(function(e,t){return c.a.createElement("li",{className:"ingredient-item",key:t},e)})))}}]),t}(o.Component));function ce(e){var t=e.results.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(oe,{meal:e}))});return c.a.createElement("div",{className:"results-container"},c.a.createElement("ul",{className:"search-results"},t))}oe.contextType=ee;n(222);var se=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:"",searchResults:[],date:""},n.handleChange=function(e){n.setState({searchTerm:e.target.value},function(){console.log(n.state)})},n.handleSubmit=function(e){e.preventDefault(),re.getExplorerMeals(n.state.searchTerm).then(function(e){n.setState({searchResults:e.hits},function(){console.log(e)})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"EXPLORER"),c.a.createElement("div",{className:"explorer_form"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"searchTerm",onChange:this.handleChange.bind(this)},c.a.createElement("label",{htmlFor:"explorer_search_term"},"Search for:"),c.a.createElement(L,{required:!0,type:"search",name:"searchTerm",id:"explorer_search_term"})),c.a.createElement(M,{type:"submit"},"Search")),this.state.searchResults&&c.a.createElement(ce,{results:this.state.searchResults})))}}]),t}(o.Component);se.contextType=ee;n(223);var le=n(101),ie=n.n(le),ue=(n(94),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={seeMore:!1},n.seeMore=function(e){n.setState({seeMore:!n.state.seeMore,ingredients:e.ingredients,image:e.image},function(){console.log(n.state)})},n.renderMore=function(){if(n.state.ingredients){var e=n.state.image,t=n.state.ingredients.replace(/[{}]/g,"").split(",").map(function(e,t){return c.a.createElement("li",{key:t},e)});return c.a.createElement("div",null,c.a.createElement("img",{className:"bm-img",src:e,alt:"x"}),c.a.createElement("br",null),"Ingredients:",c.a.createElement("ul",{className:"ing-list"},t))}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.meal.meal_name,n=this.props.index,a={meal_name:this.props.meal.meal_name,ingredients:this.props.meal.ingredients,image:this.props.meal.image};return c.a.createElement("div",null,t,c.a.createElement("button",{className:"del-btn",onClick:function(){return e.context.handleDeleteMeal(e.props.meal,n)}},"x"),c.a.createElement("button",{className:"bm-btn",onClick:function(){return e.context.handleAddBookmark(e.props.meal)}},"b"),c.a.createElement("button",{className:"see-more-btn",onClick:function(){return e.seeMore(a)}},"..."),c.a.createElement("div",null,this.state.seeMore&&this.renderMore()))}}]),t}(o.Component));ue.contextType=ee;var me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).list=function(e){var t=e;return console.log(t),void 0===t||t===[]?c.a.createElement("li",{className:"place-holder"},"Add a meal to this day!"):t.map(function(e,t){return c.a.createElement("li",{className:"mod-item",key:t},c.a.createElement(ue,{meal:e,index:t}))})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"mod-page"},c.a.createElement("ul",{className:"mod-list"},this.list(this.context.MOD)))}}]),t}(o.Component);me.contextType=ee;var he=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){n.setState({view:e.target.id,selected:e.target.className},function(){console.log(n.state)})},n.state={view:"add-meal-form",selected:"add-meal-form"},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Q()(this.props.value,"mm/dd/yy"),t=Q()(e,"ddd");return c.a.createElement("div",{className:"meal-deal-page"},c.a.createElement(U,{className:"cal-container"},c.a.createElement(ie.a,{className:"calendar",id:"cal",onChange:this.context.onChange,value:this.context.value})),c.a.createElement(U,{className:"mod-container"},c.a.createElement("p",{className:"meal-date"},e," - ",t),c.a.createElement(me,{className:"meals-of-day"})),c.a.createElement(U,{className:"form-container"},c.a.createElement("div",{className:"form-buttons"},c.a.createElement("button",{className:"add-meal-form-btn ".concat("add-meal-form"===this.state.view?"selected":""),id:"add-meal-form",onClick:this.handleClick},"Add Meal"),c.a.createElement("button",{className:"bookmarks-btn ".concat("bookmarks"===this.state.view?"selected":""),id:"bookmarks",onClick:this.handleClick},"BookMarks"),c.a.createElement("button",{className:"explorer-btn ".concat("explorer"===this.state.view?"selected":""),id:"explorer",onClick:this.handleClick},"Explore")),c.a.createElement("div",{className:"form-box"},"add-meal-form"===this.state.view&&c.a.createElement(te,{date:e}),"bookmarks"===this.state.view&&c.a.createElement(ae,null),"explorer"===this.state.view&&c.a.createElement(se,null))))}}]),t}(o.Component);he.contextType=ee;var de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={value:new Date,MOD:[],formattedDate:"",bookmarks:[]},n.onChange=function(e){var t=Q()(e,"yyyy-mm-dd");n.setState({value:e,formattedDate:t},function(){re.findMealByDate(t).then(function(e){n.setState({MOD:e})})}),console.log(n.state.value)},n.postMeal=function(e){var t=e.meal_name.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");if(e.meal_name=t,e.on_day=n.state.formattedDate,!(n.state.MOD.length<4))return alert("only four meals per day allowed");re.postMeal(e).then(function(e){re.findMealByDate(n.state.formattedDate).then(function(e){n.setState({MOD:e})})}).catch(function(e){console.log({error:e})})},n.handleDeleteMeal=function(e,t){var a=n.state.MOD;void 0===e.id?(console.log("_______________________"),delete a[t],n.setState({MOD:a})):re.deleteMeal(e).then(function(e){delete a[t],n.setState({MOD:a})})},n.handleAddBookmark=function(e){var t={meal_name:e.meal_name.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" "),ingredients:e.ingredients,image:e.image};n.state.bookmarks.map(function(e){return e.meal_name}).includes(t.meal_name)?alert("Meal already in bookmarks!"):re.postBookmark(t).then(function(e){console.log(e),re.getBookmarks().then(function(e){n.setState({bookmarks:e})})}).catch(function(e){console.log({error:e})})},n.handleDeleteBookmark=function(e,t){var a=n.state.bookmarks;console.log(e),re.deleteBookmark(e).then(function(e){delete a[t],n.setState({bookmarks:a})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Q()(this.state.value,"yyyy-mm-dd");this.setState({formattedDate:t},function(){re.findMealByDate(t).then(function(t){e.setState({MOD:t})})}),re.getBookmarks().then(function(t){e.setState({bookmarks:t},function(){console.log(e.state)})})}},{key:"render",value:function(){var e={day:this.state.value,formattedDate:this.state.formattedDate,MOD:this.state.MOD,bookmarks:this.state.bookmarks,handleDeleteMeal:this.handleDeleteMeal,handleAddBookmark:this.handleAddBookmark,handleDeleteBookmark:this.handleDeleteBookmark,postMeal:this.postMeal,onChange:this.onChange};return c.a.createElement("div",{className:"planner-page"},c.a.createElement(ee.Provider,{value:e},this.state.value&&c.a.createElement(he,{className:"meal-deal-container",value:this.state.value})))}}]),t}(o.Component);function fe(){return c.a.createElement("div",null,c.a.createElement(se,null))}var pe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Z,null),c.a.createElement("main",{className:"App__main"},this.state.hasError&&c.a.createElement("p",{className:"red"},"There was an error! Oh no!"),c.a.createElement(w.d,null,c.a.createElement(x,{exact:!0,path:"/",component:H}),c.a.createElement(x,{path:"/login",component:J}),c.a.createElement(x,{path:"/register",component:W}),c.a.createElement(A,{path:"/planner",component:de}),c.a.createElement(A,{path:"/explore",component:fe}))))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component);n(241);l.a.render(c.a.createElement(i.a,null,c.a.createElement(S,null,c.a.createElement(pe,null))),document.getElementById("root"))},86:function(e,t,n){},87:function(e,t,n){},94:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.5934283b.chunk.js.map