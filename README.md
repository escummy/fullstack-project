# Complete typescript setup using node, babel, eslint and prettier to avoid conflicts.

<!-- ## Travis CI badges and github actions
# Logo: Framework, tool, base of the project not all  -->

<!-- Markdown link & img dfn's -->

<!-- [npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/escummy/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/escummy/node-datadog-metrics
[wiki]: https://github.com/escummy/yourproject/wiki -->

 <!-- [![Build Status](https://travis-ci.org/escummy/dillinger.svg?branch=master)](https://travis-ci.org/escummy/dillinger) <img alt="Github workflows" src="https://github.com/thmsgbrt/thmsgbrt/workflows/README%20build/badge.svg"/> <img alt="Contributor Covenant v2.1" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg"/> <img alt="License" src="https://img.shields.io/github/license/escummy/webpack-complete?style=flat-square&labelColor=343b41"/> -->

> To use node, express and typescript, eslint and prettier are perfectly blended to use avoiding conflicts, babel is implemented after build in production, and absolute paths are setted to import/export between pages or folders.

<br>

<!-- ## Snapshots -->

<p align="center">
  <img src="https://user-images.githubusercontent.com/90976678/196551126-fd06fdd4-4fea-4123-953e-b1b0000b5e98.gif" width="95%" title="node-typescript-setup repository by escummy" alt="accessibility text">
</p>

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy on a live system and clone the repository.

<br>

- (Option 1): Clone the repository with link "https"

```bash
  git clone https://github.com/escummy/node-typescript-setup.git
```

- (Option 2): Clone the repository with link "SSH"

```bash
  git clone git@github.com:escummy/node-typescript-setup.git
```

- (Option 3): Download the file.zip to your desktop

<br>

### # Prerequisites

To continue, you need to have installed: [`Node`]

<br>

(Check in your terminal bash)

```
node --version
```

<br>

Else, Install nodejs from the official site 'version LTS' (Recommended)

[English] - https://nodejs.org/en/ (or) [Spanish] - https://nodejs.org/es/

<br>

## Installing dependencies

- Install the necessary dependencies and devDependencies from any package.json

```bash
  npm install
```

<br>

## Development setup

Depending on the mode we want to use, we can run the following commands:

<br>

### # Start server

- To start a server in mode development at localhost, and keep it watching for changes.

```bash
  npm run dev
```

- This command is the only one that can also be used typing just 'npm start'
- To Stop the local server while is running on terminal, you can type `control + c` to finish the watcher and shut down the server.

<br>

### # Build in Production mode

- Production - At the end of your development, build with this mode to transpile and compile, minify files, preparing the codebase to be ready in production, that include improvements and performance (filename #hashes), avoiding spaces, indented, comments, memory saving and browser compatibility among others.

* NOTE: If you run 'npm install' in production mode, you'll also install DevDependencies.

```bash
  npm run build
```

<br>

### # Start a server using production code

- After "npm run build" you can start a server to check how is going your code before any deployment.

```bash
  npm run start
```

<br>


### # Lint and formatting

 To complete linting onPaste or onSave, you should add some additional configuration to install in your favorite code editor to be able and to see formatting after save or after delay, depending of the case.

```bash
  npm run lint
```

Recomendations: 
- Check this visual studio code [settings.json](https://github.com/escummy/vscode-settings-json)
- To install the necessary extensions, add 'missing extensions' to your vscode

<br>

<!-- ### # Check status

- Run `Watch`: Which just watches for changes and still does development compiling, it shows any console.log declared for example

```bash
  npm run watch
```

This will launch a web browser that will auto-update every time you save a watched file as(#specify-files-to-watch), but before push to production, we recommend minify the outputs files and caching how this purpose package helper [Browsersync](https://www.browsersync.io/) -->

## Latest releases

<!-- Change link path for each repository (automate actions CI/gist)-->

Repositories use [SemVer](http://semver.org/) for versioning, three-digit numbering technique based patter of Major, Minor and Patch fixes, see the [release tags](https://github.com/escummy/node-typescript-setup/tags) for more details about version available.

<!-- ## Running the tests

The code is tested by 'Jest' including unit-test and global-test, applying documentation from continuous integration, github actions, npm datalog-metrics and Travis-CI

### Break down into end to end tests

Explain what these tests test and why

```
npm test
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->


<br>

## Contributing

Contributions are always welcome.

See [CONTRIBUTING](.github/CONTRIBUTING.md) for ways to get started, you can colaborate addings features to improve the repository, you can feel free to suggest anything or help solving issues via pull request.

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/escummy/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests. -->

Please adhere to this project [CODE_OF_CONDUCT](.github/CODE_OF_CONDUCT.md), examples of behavior that contributes to a positive environment for our community and adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html

> **[Author]**: Gonzalo Cugiani (Amsterdam, North Holland, Netherlands)
>
> - [www.github.com/github.com/escummy](https://github.com/escummy)
> - [www.stackoverflow.com/escummy](https://stackoverflow.com/users/20149906/escummy?tab=profile)
> - [www.linkedin.com/in/gonzalocugiani](https://linkedin.com/in/gonzalocugiani)

<br>

## About Licenses

A licensor may grant a license under intellectual property laws to authorize a use (such as copying software or using a patented invention) to a licensee, sparing the licensee from a claim of infringement brought by the licensor.

<!-- Change link path for each repository (automate actions CI/gist)-->
License used for this repository <a href="https://github.com/escummy/node-typescript-setup/blob/main/LICENSE">`[`MIT License`]`</a>

<!-- #### Hashtags

#webpack #starter #initialfiles #developmentmode #productionmode #packagejson #webpackconfig #babelconfig #dev #prod #npmstart #yarnstart #build #builddev #buildprod #github #badges -->

<br><br>

---

<p align="center">. . .</p>

<p align="center">This <i>README</i> file was updated</br>Last refresh: Tuesday, 19 Oct, 00:44 CET<br/></p>

<br><br><br>
