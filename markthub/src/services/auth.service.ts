import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private isAuthenticated: boolean = true;

    constructor() { }

    public isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}