import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'copyright',
    template: `<p class="copyright pull-right">
                    &copy; 2016 <a href="#">bitsEverywhere</a>, passion for a better web
               </p>`
})
export class CopryrightComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}