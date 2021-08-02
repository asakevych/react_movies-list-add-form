(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(8),l=a.n(r),m=(a(16),a(10)),o=a(6),c=a(2),s=a(3),d=a(5),p=a(4),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var g=a(1),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(g.a)({},i,n))},e.onSubmit=function(t){t.preventDefault();var a=e.state,i={title:a.title,description:a.description,imdbId:a.imdbId,imdbUrl:a.imdbUrl,imgUrl:a.imgUrl};(0,e.props.onAdd)(i),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imdbId,r=e.imdbUrl,l=e.imgUrl,m=this.handleChange,o=this.onSubmit;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"display-5 sidebar__title"},"Add a movie:"),n.a.createElement("form",{onSubmit:o},n.a.createElement("div",null,n.a.createElement("input",{name:"title",type:"text",placeholder:"Title",value:t,onChange:m,required:!0}),n.a.createElement("textarea",{type:"text",placeholder:" Description",name:"description",value:a,onChange:m,cols:"40",rows:"5",required:!0}),n.a.createElement("input",{type:"text",placeholder:"imgUrl",value:l,name:"imgUrl",onChange:m,required:!0}),n.a.createElement("input",{type:"text",placeholder:"imdbUrl",value:r,name:"imdbUrl",onChange:m,required:!0}),n.a.createElement("input",{type:"text",placeholder:"imdbId",value:i,name:"imdbId",onChange:m,required:!0}),n.a.createElement("div",{form__submit:!0},n.a.createElement("button",{type:"submit"},"Add")))))}}]),a}(n.a.PureComponent),v=a(9),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{movies:[].concat(Object(m.a)(e.movies),[t])})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies,t=this.addMovie;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{onAdd:t})))}}]),a}(i.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.d3cb6cd2.chunk.js.map