# Introduction

- JS -> Can only be executed inside a browser(through Engine like v8)

- V8 engine + C++ = nodejs (run JS outside of browser)

- nodejs -> Runtime Env. for JS

- Nodejs cannot use DOM manipulation and UI stuff like alert,window,etc..

## npm

- template for nodejs: `npm init`

- creates _package.json_ which can be used to make scripts

## Nodejs Architecture

![alt text](https://cdn.buttercms.com/0Nh1yR6SSPwqnsKYSfHa)

- Blocking : Sync tasks

- Non-Blocking: Async Tasks

default thread size = 4
max thread size = no. of cpu cores
