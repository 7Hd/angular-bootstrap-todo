# Anagular Bootstrap Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0. Reference [Bootstrap Todo](https://codepen.io/cglawson/pen/mEWYYe) and [todomvc-angular-4](https://github.com/addyosmani/todomvc-angular-4).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

```bash
ng new todo --skip-tests --prefix td
ng generate component todo-list --inline-style
ng generate component todo --inline-style --inline-template --flat
ng generate module shared --module app
ng generate service shared\todo-data --module shared
ng generate class models\todo
ng generate enum shared\todo-priority
ng generate pipe shared\enum-array --export shared
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
