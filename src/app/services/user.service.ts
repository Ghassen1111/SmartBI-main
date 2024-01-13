import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthData } from 'backend/models/user.js';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private isAuthenticated = false;
 private isAdmin=true; 
 private isEntreprise=true;
 private isRrh=true;
 private isRl=true;
 private isRc=true;
 private isRf=true;
 private isRt=true;
 private isEl=true;
 private isEc=true;
 private isEf=true;
 private isEt=true;
 private isFournisseur=true;
 //////////////////////////////////
 private token: string;
 private tokenTimer: any;
 private userId: string;
 private authStatusListener = new Subject<boolean>();
 private authAdmin = new Subject<boolean>();
 private authEntreprise = new Subject<boolean>();
 private authRrh = new Subject<boolean>();
 private authRl = new Subject<boolean>();
 private authRc = new Subject<boolean>();
 private authRf = new Subject<boolean>();
 private authRt = new Subject<boolean>();
 private authEl = new Subject<boolean>();
 private authEc = new Subject<boolean>();
 private authEf = new Subject<boolean>();
 private authEt = new Subject<boolean>();
 private authFournisseur = new Subject<boolean>();
 public err = new BehaviorSubject<any>(null);
 role: any;
 avatar:any;
 name: any;
 nameEntreprise:any;
 entrepriseId:any;
 employeurId:any;
 category:any;
  userURL = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient,private router: Router) { }
  signup(obj: any,img:File) {
    let formData = new FormData();
    formData.append("img",img);
    formData.append("name",obj.name);
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("address",obj.address);
    formData.append("tel",obj.tel);
    formData.append("sexe",obj.sexe);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("contrats",obj.contrats);
    formData.append("salaire",obj.salaire);
    formData.append("category",obj.category);
    formData.append("post",obj.post);
    formData.append("country",obj.country);
    formData.append("nameEntreprise",obj.nameEntreprise);
    formData.append("entrepriseId",obj.entrepriseId);
    formData.append("employeurId",obj.employeurId);
    formData.append("status",obj.status);
    formData.append("role",obj.role);
    return this.httpClient.post<{ message: any; }>(this.userURL + "/signup", formData);
  }
   getToken() {
    return this.token;
    }
    getrole() {
    return this.role;
    }
    getName() {
      return this.name;
      }
    getAvatar() {
      return this.avatar;
      }
    getNameEntreprise() {
      return this.nameEntreprise;
      }
    getEntrepriseId() {
      return this.entrepriseId;
      }
    getEmployeurId() {
      return this.employeurId;
      }
    getCategoryId() {
      return this.category;
      }
    getIsAuth() {
    return this.isAuthenticated;
    }
    getIsAuthAdmin() {
    return this.isAdmin;
    }
    getIsAuthEntreprise() {
    return this.isEntreprise;
    }
    getIsAuthRrh() {
    return this.isRrh;
    }
    getIsAuthRl() {
    return this.isRl;
    }
    getIsAuthRc() {
    return this.isRc;
    }
    getIsAuthRf() {
    return this.isRf;
    }
    getIsAuthRt() {
    return this.isRt;
    }
    getIsAuthEl() {
    return this.isEl;
    }
    getIsAuthEc() {
    return this.isEc;
    }
    getIsAuthEf() {
    return this.isEf;
    }
    getIsAuthEt() {
    return this.isEt;
    }
    getIsAuthFournisseur() {
      return this.isFournisseur;
      }
    getUserId() {
    return this.userId;
    }
    getAuthStatusListener() {
    return this.authStatusListener.asObservable();
    }
    getAuthAdmin() {
    return this.authAdmin.asObservable();
    }
    getAuthUser() {
    return this.authEntreprise.asObservable();
    }
    getAuthRrh() {
    return this.authRrh.asObservable();
    }
    getAuthRl() {
    return this.authRl.asObservable();
    }
    getAuthRc() {
    return this.authRc.asObservable();
    }
    getAuthRf() {
    return this.authRf.asObservable();
    }
    getAuthRt() {
    return this.authRt.asObservable();
    }
    getAuthEl() {
    return this.authEl.asObservable();
    }
    getAuthEc() {
    return this.authEc.asObservable();
    }
    getAuthEf() {
    return this.authEf.asObservable();
    }
    getAuthEt() {
    return this.authEt.asObservable();
    }
    getAuthFournisseur() {
      return this.authFournisseur.asObservable();
      }
    login(email: string, pwd: string) {
    const authData: AuthData = { email: email, pwd: pwd };
    this.httpClient
    .post<{
     avatar:any; name: string; nameEntreprise:string; entrepriseId:string; employeurId:any; category:any;  token: string; expiresIn: number, userId: string,
   userRole: string }>(`${this.userURL}/login`, authData)
    .subscribe(response => {
    this.err.next(null)
    const token = response.token;
    const avatar= response.avatar;
    const name = response.name;
    const nameEntreprise = response.nameEntreprise;
    const entrepriseId = response.entrepriseId;
    const employeurId = response.employeurId;
    const category = response.category;
    const role = response.userRole;
    this.token = token;
    if (response.userRole === "Admin") {
       this.isAdmin=false;
       this.authAdmin.next(false);
      } else if(response.userRole === "entreprise") {
       this.isEntreprise=false;
       this.authEntreprise.next(false);
      }
      else if(response.userRole === "responsable ressources humaines") {
       this.isRrh=false;
       this.authRrh.next(false);
      }
      else if(response.userRole === "responsable logistique") {
       this.isRl=false;
       this.authRl.next(false);
      }
      else if(response.userRole === "responsable commercial") {
       this.isRc=false;
       this.authRc.next(false);
      }
      else if(response.userRole === "responsable financier") {
       this.isRf=false;
       this.authRf.next(false);
      }
      else if(response.userRole === "responsable technique") {
       this.isRt=false;
       this.authRt.next(false);
      }
      else if(response.userRole === "employeur logistique") {
       this.isEl=false;
       this.authEl.next(false);
      }
      else if(response.userRole === "employeur commercial") {
       this.isEc=false;
       this.authEc.next(false);
      }
      else if(response.userRole === "employeur financier") {
       this.isEf=false;
       this.authEf.next(false);
      }
      else if(response.userRole === "employeur technique") {
       this.isEt=false;
       this.authEt.next(false);
      }
     else{
     this.isFournisseur=false;
     this.authFournisseur.next(false);
     }
    if (token) {
    const expiresInDuration = response.expiresIn;
    this.setAuthTimer(expiresInDuration);
    this.isAuthenticated = true;
    this.userId = response.userId;
    this.avatar = response.avatar;
    this.name = response.name;
    this.nameEntreprise=response.nameEntreprise;
    this.entrepriseId=response.entrepriseId;
    this.employeurId=response.employeurId;
    this.category=response.category;
    this.role=response.userRole
    this.authStatusListener.next(true);
    const now = new Date();
    const expirationDate = new Date(now.getTime() +
   expiresInDuration * 1000);
    this.saveAuthData(token, expirationDate, this.userId,this.nameEntreprise,this.entrepriseId,this.employeurId,this.category,this.avatar,this.name, this.role);
    if (response.userRole === 'Admin') {
    this.router.navigate(["dashboardAdmin"]);
    } 
    else if(response.userRole === 'entreprise') {
    this.router.navigate(["dashboardEntreprise"]);
    }
    else if(response.userRole === 'responsable ressources humaines') {
    this.router.navigate(["dashboardRh"]);
    }
    else if(response.userRole === 'responsable logistique') {
    this.router.navigate(["dashboardRl"]);
    }
    else if(response.userRole === 'responsable commercial') {
    this.router.navigate(["dashboardRc"]);
    }
    else if(response.userRole === 'responsable financier') {
    this.router.navigate(["dashboardRf"]);
    }
    else if(response.userRole === 'responsable technique') {
    this.router.navigate(["dashboardRt"]);
    }
    else if(response.userRole === 'employeur logistique') {
    this.router.navigate(["addProduct"]);
    }
    else if(response.userRole === 'employeur commercial') {
    this.router.navigate(["addFournisseur"]);
    }
    else if(response.userRole === 'employeur financier') {
      this.router.navigate([`facturesTabEf/${this.entrepriseId}`]);
    }
    else if(response.userRole === 'employeur technique') {
      this.router.navigate([`reclamationTabEt/${this.entrepriseId}`]);
    }
    else{
     this.router.navigate([`storeClient/${this.entrepriseId}`]);
    }
    }
    },
    err => {
      this.err.next(err);
    });
    }
    logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.isAdmin = true;
    this.isEntreprise = true;
    this.isRrh=true;
    this.isRl=true;
    this.isRc=true;
    this.isRf=true;
    this.isRt=true;
    this.isEl=true;
    this.isEc=true;
    this.isEf=true;
    this.isEt=true;
    this.isFournisseur = true;
    this.authStatusListener.next(false);
    this.authAdmin.next(true);
    this.authEntreprise.next(true);
    this.authRrh.next(true);
    this.authRl.next(true);
    this.authRc.next(true);
    this.authRf.next(true);
    this.authRt.next(true);
    this.authEl.next(true);
    this.authEc.next(true);
    this.authEf.next(true);
    this.authEt.next(true);
    this.authFournisseur.next(true);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["login"]);
    }
    autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
    return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() -
   now.getTime();
    if (expiresIn > 0) {
    this.token = authInformation.token;
    this.isAuthenticated = true;
    this.userId = authInformation.userId;
    this.avatar = authInformation.avatar;
    this.name = authInformation.name;
    this.nameEntreprise = authInformation.nameEntreprise;
    this.entrepriseId = authInformation.entrepriseId;
    this.employeurId = authInformation.employeurId;
    this.category = authInformation.category;
    this.role = authInformation.Role;
    this.setAuthTimer(expiresIn / 1000);
    this.authStatusListener.next(true);
    }
    }
    private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    const avatar = localStorage.getItem("avatar");
    const name = localStorage.getItem("nameEntrepris");
    const nameEntreprise = localStorage.getItem("nEntrepris");
    const entrepriseId = localStorage.getItem("entrepriseId");
    const employeurId = localStorage.getItem("employeurId");
    const category = localStorage.getItem("category");
    const role = localStorage.getItem("role");
    if (!token || !expirationDate) {
    return;
    }
    return {
    token: token,
    expirationDate: new Date(expirationDate),
    userId: userId,
    avatar:avatar,
    name:name,
    nameEntreprise:nameEntreprise,
    entrepriseId:entrepriseId,
    employeurId:employeurId,
    category:category,
    Role:role
    }
    }
    private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
    this.logout();
    }, duration * 1000);
    }
    private saveAuthData(token: string, expirationDate: Date, userId:
   string,nameEntreprise:string,entrepriseId:string,employeurId:string,category:string,avatar:any,name:string,Role:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("nameEntrepris", name);
    localStorage.setItem("nEntrepris", nameEntreprise);
    localStorage.setItem("entrepriseId", entrepriseId);
    localStorage.setItem("employeurId", employeurId);
    localStorage.setItem("category", category);
    localStorage.setItem("role", Role);
    }
    private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("category");
    localStorage.removeItem("userId");
    localStorage.removeItem("avatar");
    localStorage.removeItem("nameEntrepris");
    localStorage.removeItem("nEntrepris");
    localStorage.removeItem("entrepriseId");
    localStorage.removeItem("employeurId");
    localStorage.removeItem("category");
    localStorage.removeItem("role");
    }

    /////////////////////////////////////action///////////////////////////////
    editStatusUser(obj: any){ 
      return this.httpClient.put<{message:any}>(`${this.userURL}/status/${obj.id}`,obj);
    
    }
    editCategoryUser(obj: any){ 
      return this.httpClient.put<{message:any}>(`${this.userURL}/category/${obj.id}`,obj);
    }
    editUser(obj: any){ 
      return this.httpClient.put<{message:any}>(`${this.userURL}/user/${obj.id}`,obj);
    }
    deleteUserByTd(id: any){
      return this.httpClient.delete<{message:any}>(`${this.userURL}/${id}`);
   }
   ///////////////////////////////////profile////////////////////////////////
   getProfile(id:any){
    return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
   }
   //////////////////////////////////////messenger///////////////////////////
   getUserMessanger(id:any,myId:any){
    return this.httpClient.get<{x:any}>(`${this.userURL}/userMassenger/${id}/${myId}`);
   }
   addMessage(obj: any) {
    return this.httpClient.post<{ message: any; }>(this.userURL + "/message", obj);
  }
  getMessage(obj:any){
    return this.httpClient.get<{x:any}>(`${this.userURL}/message/${obj.myId}/${obj.yourId}`);
   }
}
