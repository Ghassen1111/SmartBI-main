import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent implements OnInit {
  role: string;
  adminIsAuthenticated:any;
  entrepriseIsAuthenticated: any;
  rrhIsAuthenticated: any;
  rlIsAuthenticated: any;
  rcIsAuthenticated: any;
  rfIsAuthenticated: any;
  rtIsAuthenticated: any;
  elIsAuthenticated: any;
  ecIsAuthenticated: any;
  efIsAuthenticated: any;
  etIsAuthenticated: any;
  fournisseurIsAuthenticated: any;
  private authListenerSubs: Subscription;
  private authAdmin: Subscription;
  private authEntreprise: Subscription;
  private authRrh: Subscription;
  private authRl: Subscription;
  private authRc: Subscription;
  private authRf: Subscription;
  private authRt: Subscription;
  private authEl: Subscription;
  private authEc: Subscription;
  private authEf: Subscription;
  private authEt: Subscription;
  private authFournisseur: Subscription;
  constructor(private userService: UserService,private activateRouted: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.adminIsAuthenticated = this.userService.getIsAuthAdmin();
    console.log('here auth', this.adminIsAuthenticated);
    this.authAdmin = this.userService.getAuthAdmin().subscribe(isAdmin => {
      this.adminIsAuthenticated = isAdmin;
    });
    this.entrepriseIsAuthenticated = this.userService.getIsAuthEntreprise();
    console.log('here auth', this.entrepriseIsAuthenticated);
    this.authEntreprise = this.userService.getAuthUser().subscribe(isEntreprise => {
      this.entrepriseIsAuthenticated = isEntreprise;
    });
    this.rrhIsAuthenticated = this.userService.getIsAuthRrh();
    console.log('here auth', this.rrhIsAuthenticated);
    this.authRrh = this.userService.getAuthRrh().subscribe(isRrh => {
      this.rrhIsAuthenticated = isRrh;
    });
    this.rlIsAuthenticated = this.userService.getIsAuthRl();
    console.log('here auth', this.rlIsAuthenticated);
    this.authRl = this.userService.getAuthRl().subscribe(isRl => {
      this.rlIsAuthenticated = isRl;
    });
    this.rcIsAuthenticated = this.userService.getIsAuthRc();
    console.log('here auth', this.rcIsAuthenticated);
    this.authRc = this.userService.getAuthRc().subscribe(isRc => {
      this.rcIsAuthenticated = isRc;
    });
    this.rfIsAuthenticated = this.userService.getIsAuthRf();
    console.log('here auth', this.rfIsAuthenticated);
    this.authRf = this.userService.getAuthRf().subscribe(isRf => {
      this.rfIsAuthenticated = isRf;
    });
    this.rtIsAuthenticated = this.userService.getIsAuthRt();
    console.log('here auth', this.rtIsAuthenticated);
    this.authRt = this.userService.getAuthRt().subscribe(isRt => {
      this.rtIsAuthenticated = isRt;
    });
    this.elIsAuthenticated = this.userService.getIsAuthEl();
    console.log('here auth', this.elIsAuthenticated);
    this.authEl = this.userService.getAuthEl().subscribe(isEl => {
      this.elIsAuthenticated = isEl;
    });
    this.ecIsAuthenticated = this.userService.getIsAuthEc();
    console.log('here auth', this.ecIsAuthenticated);
    this.authEc = this.userService.getAuthEc().subscribe(isEc => {
      this.ecIsAuthenticated = isEc;
    });
    this.efIsAuthenticated = this.userService.getIsAuthEf();
    console.log('here auth', this.efIsAuthenticated);
    this.authEf = this.userService.getAuthEf().subscribe(isEf => {
      this.efIsAuthenticated = isEf;
    });
    this.etIsAuthenticated = this.userService.getIsAuthEt();
    console.log('here auth', this.etIsAuthenticated);
    this.authEt = this.userService.getAuthEt().subscribe(isEt => {
      this.etIsAuthenticated = isEt;
    });
    this.fournisseurIsAuthenticated = this.userService.getIsAuthFournisseur();
    console.log('here auth', this.fournisseurIsAuthenticated);
    this.authFournisseur = this.userService.getAuthFournisseur().subscribe(isFournisseur => {
      this.fournisseurIsAuthenticated = isFournisseur;
    });
  }
  onLogout() {
    this.userService.logout();
    this.role = localStorage.getItem("role")
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.authAdmin.unsubscribe();
    this.authEntreprise.unsubscribe();
    this.authRrh.unsubscribe();
    this.authRl.unsubscribe();
    this.authRc.unsubscribe();
    this.authRf.unsubscribe();
    this.authRt.unsubscribe();
    this.authEl.unsubscribe();
    this.authEc.unsubscribe();
    this.authEf.unsubscribe();
    this.authEt.unsubscribe();
    this.authFournisseur.unsubscribe();
    this.role = localStorage.getItem("role")
  }

//////////////////////////////entreprise////////////////////////////////////////
responsablesTab() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`responsablesTab/${id}`]);
}
employeursTab() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`employeursTab/${id}`]);
}
fournisseursTab() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`fournisseursTab/${id}`]);
}
productsTab() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`productsTab/${id}`]);
}
facturesTab() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`facturesTab/${id}`]);
}
addTacheResponsable() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addTacheResponsable/${id}`]);
}
///////////////////////////responsable ressources humaines (rrh)///////////////////
employeurTab() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`employeurTab/${id}`]);
}
tachesTabRrh() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
///////////////////////////responsable logistique (rl)///////////////////
employeurTabRl() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`employeursTabRl/${id}`]);
}
productTabRl() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`productTabRl/${id}`]);
}
tachesTabRl() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
addTacheEmployeurRl() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addTacheEmployeurRl/${id}`]);
}
///////////////////////////responsable commercial (rc)///////////////////
employeurTabRc() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`employeursTabRc/${id}`]);
}
fournisseursTabRc() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`fournisseursTab/${id}`]);
}
commandesTabRc() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`commandesTabRc/${id}`]);
}
storeRc() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`store/${id}`]);
}
tachesTabRc() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
addTacheEmployeurRc() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addTacheEmployeurRc/${id}`]);
}
///////////////////////////responsable financier (rf)///////////////////
employeurTabRf() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`employeursTabRf/${id}`]);
}
facturesTabRf() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`facturesTab/${id}`]);
}
tachesTabRf() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
addTacheEmployeurRf() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addTacheEmployeurRf/${id}`]);
}
reclamationTabRf() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`reclamationTabRf/${id}`]);
}
//////////////////////////responsable technique (rt)///////////////////
employeurTabRt() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`employeursTabRt/${id}`]);
}
tachesTabRt() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
addTacheEmployeurRt() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addTacheEmployeurRt/${id}`]);
}
reclamationTabRt() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`reclamationTabRt/${id}`]);
}
///////////////////////////employeur logistique (el)///////////////////
productTabEl() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`productTabEl/${id}`]);
}
tachesTabEl() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
///////////////////////////employeur commercial (ec)///////////////////
fournisseurTabEc() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`fournisseurTabEc/${id}`]);
}
storeEc() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`store/${id}`]);
}
commandeTabEc() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`commandeTabEc/${id}`]);
}
tachesTabEc() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
///////////////////////////employeur financier (ef)///////////////////
facturesTabEf() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`facturesTabEf/${id}`]);
}
tachesTabEf() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
reclamationTabEf() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`reclamationTabEf/${id}`]);
}
//////////////////////////employeur technique (et)///////////////////
tachesTabEt() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`tachesTab/${id}`]);
}
reclamationTabEt() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`reclamationTabEt/${id}`]);
}
///////////////////////////////Clinet//////////////////////////////
storeClient() {
  let id = localStorage.getItem('entrepriseId')
  //alert(id);
  this.router.navigate([`storeClient/${id}`]);
}
commandeTabClient() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`commandeTabClinet/${id}`]);
}
factureTabClient() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`factureTabClient/${id}`]);
}
addReclamationClient() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`addReclamationClient/${id}`]);
}
reclamationTabClient() {
  let id = localStorage.getItem('userId')
  //alert(id);
  this.router.navigate([`reclamationTabClient/${id}`]);
}

}