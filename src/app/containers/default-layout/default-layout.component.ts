import { Component, DoCheck, OnInit } from "@angular/core";

import { navItems } from "./_nav";
import { Router } from "@angular/router";

@Component({
    selector: "app-dashboard",
    templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit, DoCheck {
    public navItems = navItems;

    public perfectScrollbarConfig = {
        suppressScrollX: true,
    };

    constructor(private router: Router) {}

    ngOnInit(): void {
        let logado = localStorage.getItem("logado");
        if (logado != "true") {
            this.router.navigate(["/login"]);
        }
    }
    
    ngDoCheck(): void {
        let logado = localStorage.getItem("logado");
        if (logado != "true") {
            this.router.navigate(["/login"]);
        }
    }
}
