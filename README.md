# Project Description

An experimental Angular project to get familiar with Angular framework

# Angular installation

Install the Angular CLI

	npm install -g @angular/cli

# Usage

## Development server

Run `ng serve` or `ng server --open` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Angular Project Folder Structure

- https://scotch.io/tutorials/angularjs-best-practices-directory-structure


Example:

	app/
	----- shared/   // acts as reusable components or partials of our site
	---------- sidebar/
	--------------- sidebarDirective.js
	--------------- sidebarView.html
	---------- article/
	--------------- articleDirective.js
	--------------- articleView.html
	----- components/   // each component is treated as a mini Angular app
	---------- home/
	--------------- homeController.js
	--------------- homeService.js
	--------------- homeView.html
	---------- blog/
	--------------- blogController.js
	--------------- blogService.js
	--------------- blogView.html
	----- app.module.js
	----- app.routes.js
	assets/
	----- img/      // Images and icons for your app
	----- css/      // All styles and style related files (SCSS or LESS files)
	----- js/       // JavaScript files written for your app that are not for angular
	----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
	index.html


# Lessons learned

- Angular is a platform and framework for building client applications in HTML and TypeScript
- Angular is written in TypeScript
- The basic building blocks are NgModules
- NgModules provide a compilation context for components
- NgModule is defined by a class decorated with @NgModule()
- @NgModule() is a function that takes a single metadata object with properties
- Components define views
- Components use services
- Service providers can be injected
- Components and services are simply classes, with decorators
- Decorators are functions that modify JavaScript classes
- Each component defines a class that contains application data and logic
- A component and its template together define a view
- A component controls a patch of screen called a view
- A component can contain a view hierarchy
- A created component is associated directly with a single view (host view)
- An app always has at least a root module (AppModule), bootstrapping
- Any NgModule can include any number of additional components
- The metadata for a component class associates it with a template  (view)
- A template combines HTML with Angular markup
- In JavaScript each file is a module and all objects defined in the file belong to that module
- Each Angular library name begins with the @angular prefix
- You can install Angular libraries with npm
- Put cleanup logic in ngOnDestroy()
- Angular calls its ngOnChanges() method whenever it detects changes to input properties
- You generally don't declare components in a routing module
- The injector is the main mechanism
- An injector creates dependencies, and maintains a container of dependency instances that it reuses if possible
- A provider is an object that tells an injector how to obtain or create a dependency
- A dependency could be a service, function or a value
- Injectors are inherited
- You can configure injectors at different levels: @Injectable, @NgModule, @Component
- Services are singletons within the scope of an injector
- There is only one root injector for an app
- Angular Modules is all about application organization
- ES Modules is all about file organization
- A Decorator is a function that adds metadata to a class, its member or its method args
- A directive is a custom HTML element
- An asterisk in front of directive name marks it as structured directive

# Best practices 

- Modularize the Header and Footer
- Modularize the Routes
- Don't Forget to Minify
- Keep the Names Consistent
- Components should be cheap and safe to construct
- Don't fetch data in a component constructor
- An ngOnInit() is a good place for a component to fetch its initial data

# References

- https://angular.io/guide/quickstart (Starting with Angular)
- https://angular.io/guide/architecture (Architecture Guide)
- https://github.com/vega/vega/blob/master/docs/data/cars.json ( see https://github.com/vega/vega/blob/master/LICENSE for usage)