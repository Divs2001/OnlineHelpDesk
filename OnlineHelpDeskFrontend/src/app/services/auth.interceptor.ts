import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

//why we are using this -> this will provide the token for verification on each http request

@Injectable()
export default class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //add the jwt token (localStorage) request  
        let authReq = req;
        const token = this.loginService.getToken();
        if(token!=null){
            authReq = authReq.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
        }
        return next.handle(authReq);

    }

}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];