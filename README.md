# Angular Boilerplate code
This is boilerplate code to start any angular project of yours.

![alt](https://david-dm.org/neelbommisetty/angular-webpack-boilerplate.svg)
![alt](https://david-dm.org/neelbommisetty/angular-webpack-boilerplate/dev-status.svg)
## Features
### Latest Javascript Standard Enabled
  Use template strings, object destructuring, arrow functions and more, today.
### Eslint enabled
  Best coding standards using airbnb eslint plugin providing instant feedback.
### Sass Enabled
 Sass is the most used css preprocessor. You can use sass by default with this boilerplate.
### Routing
  Routing is basic requirement for any webapp.So it is now included in the boilerplate.
### Icon support
 Added font-awesome icon support , You can use them by default in your templates.
## Installation
```sh
# clone the repo
git clone https://github.com/neelbommisetty/Angular-Webpack-Boilerplate myApp

cd myApp

# Install all dependencies
yarn

# To start dev server
yarn start

# To make production build
yarn build

# To start production server
yarn prod

```

## Tips
* For including css or sass files you can just import with es6 import syntax , webpack understands it.
```javascript
import '../styles/style.scss';
```
* For including html templates incase of directives or routes , you have use commonJS require syntax.
```javascript
function routes($stateProvider) {
  $stateProvider
    .state('layout', {
      url: '/',
      views: {
        'Root': {
          //like here
          template: require('./layout.html'),
          controller: 'LayoutController',
          controllerAs: 'layout'
        }
      }
    });
}
```
* Do not forget to inject modules. else the minification during build process fails to understand your angular services etc.

```javascript
// example
TestController.$inject = ['$scope'];
angular.module('app',[]).controller('TestController',TestController);

//in testcontroller.js
const TestController = ($scope) => {
  const name = 'Work';
  $scope.greeting = `Hi My Name is ${name}`;
}

//if you do not inject $scope in the minification process the $scope is replace by something else which breaks your code.
```
