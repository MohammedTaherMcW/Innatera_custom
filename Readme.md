# Innatera Custom

 Innatera Custom is an Interactive UI screen that enables the users to execute the custom targets. The main functionality is implemented in the [Innatera Core ](https://github.com/MohammedTaherMcW/Innatera_core/blob/master/README.rst).

## Installation Guide

### 1) Clone the Repository
#### Run the below command to clone the Innatera Custom Repository 
```
git clone https://github.com/MohammedTaherMcW/Innatera_custom.git
```

### 2) Node.js Installation

#### Follow the Belows steps for Installation of Node.js
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

nvm install 20

```

### 3) Verify the Installation of Node.js
* Open a terminal or command prompt.
* Type `node -v` and press Enter.
* If Node.js is installed correctly, you should see the version number displayed.

Example:
```bash
$ npm -v
10.8.2
$ node -v
v20.17.0
```


### 4) Generate the Node Modules 
* Using npm package manager, Generate the Node Modules

```
npm i
```

### 5) Generate the Compiled files

* Using npm package manager, Generate the Compiled Files

```
npm run build
```

##  Usage 
Copy the Generated compiled files  and replace it in the `~/.platformio/packages/contrib-piocustom`


To run Innatera custom, you can either use the installed [Innatera Core](https://github.com/MohammedTaherMcW/Innatera_core/blob/master/README.rst) or run it manually using the following command:

```bash
~/.platformio/penv/bin/pio custom
```


## Updating
#### To update Innatera Custom, follow these steps:

* Compile the source code and generate the compiled files.
* Copy the generated compiled files and replace them in the `~/.platformio/packages/contrib-piocustom` directory.
* Relaunch Innatera Custom using either the installed [Innatera Core](https://github.com/MohammedTaherMcW/Innatera_core/blob/master/README.rst) or the manual command.

