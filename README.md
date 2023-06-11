# GovinizacaoFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Generate CLI
*Keep in alphabetic order pls

- Component | Run ng g c path/name.

- Model (interface) | Run ng g i path/name --type model | Go to the new interface generated and insert "I" at the beginning of the interface name.

- Module | Run ng g m path/name --routing.

- Service | Run ng g s path/name.

- Entity (class) | Run ng g class path/name --type entity

- Pipe | Run ng g pipe common/pipe/name

## Create environment
* Go to environment folder and create a new file 'environment.${name-environment}.ts'.
* Go to 'angular.json' file and add new configuration at 'projects.ultima-ng.architect.build.configuration'. Copy any other configuration and paste replacing the file path at 'configuration.${config}.fileReplacements.with' with the variable path.
* In the same file, go to 'projects.ultima-ng.architect.serve.configuration' and repeat last step.

## Build environment differents:
ng build --configuration=${environment};

Ng Serve environment
ng serve --configuration=${environment};

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

nvm install 18 lts npm install -g @angular/cli
