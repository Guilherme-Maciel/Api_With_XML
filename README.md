<h1 align="center">
  <p>API XML</p>
  <img src="https://github.com/Guilherme-Maciel/readme_images/blob/master/apiXml/1.jpg" height="425">
  <img src="https://github.com/Guilherme-Maciel/readme_images/blob/master/apiXml/2.jpg" height="425">
</h1>

Projeto criado utilizando Ionic Cordova para a plataforma Android para realização de consulta a partir de um CEP

![Generic badge](https://img.shields.io/badge/Status-Finalizado-green.svg)<br>
![Generic badge](https://img.shields.io/badge/npm-v7.13.0-blue.svg)
![Generic badge](https://img.shields.io/badge/ionic-v6.16.1-blue.svg)
![Generic badge](https://img.shields.io/badge/cordova-v10.0.0-blue.svg)
![Generic badge](https://img.shields.io/badge/gradle-v6.8.3-blue.svg)

## Funcionalidades

- Design e layout utilizando framework Ionic, Angular e SASS
- Compativel com dispositivos mobile
- Busca CEP via Web Service: [Via CEP](https://viacep.com.br/)

## Pré-requisitos

- [x] [JDK-8](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [Ionic](https://ionicframework.com/docs/intro/cli)
- [x] [Cordova](https://cordova.apache.org/#getstarted)
- [x] Instalação do [SDK Android](https://developer.android.com/studio?hl=pt&gclsrc=aw.ds&gclid=Cj0KCQjw5uWGBhCTARIsAL70sLL4XGSCZh_d7Qusy9SMyaj2FBfyc9UYyZFuJBH_A1eytpUhrm-m3tsaArVFEALw_wcB)
- [x] Configuração das variáveis de sistema e de ambiente (ANDROID_SDK_ROOT)
- [x] Instalação do [Gradle](https://gradle.org/install/)

📓 Você pode encontrar todo o processo necessário para instalação dos pré requisitos clicando [aqui](https://proguyzo.blogspot.com/2021/06/instalacao-da-plataforma-ionic-cordova.html)

## Tecnologias e Ferramentas

<div align="center">
  
| [<div align="center"><img src="https://ionic-toolkit.netlify.app/images/ionic%20logo.png" alt="demo" height="50px"><p>Ionic</p></div></a>](https://ionicframework.com/) | [<div align="center"><img src="https://www.vectoritcgroup.com/wp-content/uploads/2018/07/angular-icon-1.svg" alt="Angular" height="50px"><p>Angular</p></div>](https://angular.io/) | [<div align="center"><img src="https://d2kl895r0zn1i5.cloudfront.net/images/476_logo-cordova.svg" alt="Cordova" height="50px"><p>Cordova</p></div>](https://cordova.apache.org/) | [<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="TypeScript" height="50px"><p>TypeScript</p></div>](https://www.typescriptlang.org/) | [<div align="center"><img src="https://cdn.iconscout.com/icon/free/png-256/sass-2752078-2284895.png" alt="SASS" height="50px"><p>SASS</p></div>](https://sass-lang.com/) | [<div align="center"><img src="https://www.feedstock.com.br/site/static/img/node.png" alt="Nodejs" height="50px"><p>Node.js</p></div>](https://nodejs.org/) |
|--------|--------|--------|--------|--------|--------|

</div>

## Clonando o projeto

- Clone o projeto utilizando git clone:
```bash
git clone https://github.com/Guilherme-Maciel/Api_With_XML.git
```
- Instale o @ionic/cli localmente no projeto:
```bash
npm install @ionic/cli
```
- Teste com ```ionic serve```<br>
OBS: é necessário compilar a aplicação em um dispositivo android ou em um emulador para que as funcionalidades sejam ativadas.

## Dependências

## Compilação

### Via USB

- Conecte seu dispositivo android via USB na máquina.
- Ao conectar o dispositivo, confira se ele está listado com o comando:
```bash
adb devices -l
```
- Com a listagem feita e a confirmação de que há dispositivos listados, digite:
```bash
ionic cordova run android -l
```
- Aguarde a compilação. Pode demorar bastante.







