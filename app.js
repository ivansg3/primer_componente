import angular from 'angular';

import { HeaderComponent } from './components/header/header.component'  

const app = angular
  .module("appIndex", [])
  .component('acHeader', HeaderComponent);