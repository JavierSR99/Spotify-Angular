import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>,
  } = { defaultOptions:[], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'search']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'tracks'],
        query : { hola : 'mundo' }
      }
    ];

    this.mainMenu.accessLink = [
      { name: 'Crear lista', icon: 'uil-plus-square' },
      { 
        name: 'Canciones que te gustan', icon: 'uil-heart-medical',
        router: ['/', 'favorites']
      }
    ];

    this.customOptions = [
      { name: 'Mi lista º1', router: ['/'] },
      { name: 'Mi lista º2', router: ['/'] },
      { name: 'Mi lista º3', router: ['/'] },
      { name: 'Mi lista º4', router: ['/'] }
    ];
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value',
        key2: 'value2',
        key3: 'value3'
      }
    });
  }

}
