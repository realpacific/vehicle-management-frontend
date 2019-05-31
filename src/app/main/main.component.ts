import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    //Sidenav responsive
    width;
    height;
    mode: string = 'side';
    open = 'true';
    title = 'Vehicle Management System';
    navList: NavList[];

    constructor(public ngZone: NgZone, public route: Router, ) {
        this.navList = [
            {
                categoryName: 'Vehicle', icon: 'add', clickAction: "/"
            },
            {
                categoryName: 'Add Vehicle', icon: 'directions_car', clickAction: "/"
            },
            {
                categoryName: 'Profile', icon: 'account_circle', clickAction: "/"

            },
            {
                categoryName: 'Logout', icon: 'exit_to_app', clickAction: ""
            },
        ];
        this.changeMode();
        window.onresize = (e) => {
            ngZone.run(() => {
                this.changeMode();
            });
        };
    }

    ngOnInit() {

    }

    changeMode() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.width <= 800) {
            this.mode = 'over';
            this.open = 'false';
        }
        if (this.width > 800) {
            this.mode = 'side';
            this.open = 'true';
        }
    }

}

export class NavList {
    categoryName: string;
    icon: string;
    clickAction: string;

    constructor(_categoryName: string, _icon: string, _clickAction: string) {
        this.categoryName = _categoryName;
        this.icon = _icon;
        this.clickAction = _clickAction;
    }
}

export class NavListItem {
    subCategoryName: string;
    subCategoryLink: string;
    subCategoryQuery?: any;
    visable: boolean;
}
