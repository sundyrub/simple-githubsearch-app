import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id='eb7c8ff61e6364cbe173';
    private client_secret='7902cd2ddfafd3ee671dc81c88565181d65d13c7';
    constructor(private _http: Http){
        console.log('Github Service Ready');
        this.username='bradtraversy';
    }
     getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json())
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+"&client_secret="+this.client_secret)
        .map(res => res.json())
    }
    updateUser(username:string){
        this.username=username;
    }
}

