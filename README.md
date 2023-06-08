# OlympicGamesStarter
generated with [Angular CLI] V14.1.3.

before starting (`npm install --force --legacy-peer-deps`).
--legacy-peer-deps due to ngx-charts ask to update some packages that product conflict in required version.

## Development server
Run `ng serve`
## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
## Where to start

I have adapt the architecture, that includes (in addition to the default angular architecture) the following:

- `pages` folder: contains components used for routing
- `core` folder: contains the business logic (`services` and `models` folders)

The datas are fake (like mocked) on `olympic.json`.