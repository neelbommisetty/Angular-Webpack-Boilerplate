# Angular Boilerplate code

This is boilerplate code to start any angular project of yours.

## Features
### Latest Javascript Standard Enabled
  Use template strings, object destructuring, arrow functions and more, today.

### Eslint enabled
  Best coding standards using airbnb eslint plugin providing instant feedback.

## Installation
```sh
# clone the repo
git clone https://github.com/neelbommisetty/Angular-Webpack-Boilerplate myApp

cd myApp

#install all dependencies
yarn

#to start dev server
yarn start

#to start build prod
yarn prod

```

# Tips
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
