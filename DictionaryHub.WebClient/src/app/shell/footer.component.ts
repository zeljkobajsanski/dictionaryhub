import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `       
        <footer class="footer">
            <div class="container-fluid">
                <copyright></copyright>
            </div>
        </footer>`
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}