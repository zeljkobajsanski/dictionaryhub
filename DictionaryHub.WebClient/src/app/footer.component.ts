import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `       
        <footer class="footer">
            <div class="container-fluid">
               
                <p class="copyright pull-right">
                    &copy; 2016 <a href="#">bitsEverywhere</a>, passion for a better web
                </p>
            </div>
        </footer>`
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}