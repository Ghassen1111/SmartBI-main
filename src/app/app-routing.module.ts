import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { EntrepriseTabComponent } from './components/admin/entreprise-tab/entreprise-tab.component';
import { UserTabComponent } from './components/admin/user-tab/user-tab.component';
import { CategoryVenteComponent } from './components/category-vente/category-vente.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddFournisseurComponent } from './components/employeur-commercial/add-fournisseur/add-fournisseur.component';
import { FournisseurTabEcComponent } from './components/employeur-commercial/fournisseur-tab-ec/fournisseur-tab-ec.component';
import { AddCategoryComponent } from './components/entreprise/add-category/add-category.component';
import { AddResponsableComponent } from './components/entreprise/add-responsable/add-responsable.component';
import { EmployeursTabComponent } from './components/entreprise/employeurs-tab/employeurs-tab.component';
import { FournisseursTabComponent } from './components/entreprise/fournisseurs-tab/fournisseurs-tab.component';
import { ResponsablesTabComponent } from './components/entreprise/responsables-tab/responsables-tab.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/messenger/chat/chat.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeursTabRcComponent } from './components/Responsable-Commercial/employeurs-tab-rc/employeurs-tab-rc.component';
import { FournisseursTabRcComponent } from './components/Responsable-Commercial/fournisseurs-tab-rc/fournisseurs-tab-rc.component';
import { EmployeursTabRfComponent } from './components/Responsable-Financier/employeurs-tab-rf/employeurs-tab-rf.component';
import { EmployeursTabRlComponent } from './components/Responsable-Logistique/employeurs-tab-rl/employeurs-tab-rl.component';
import { AddEmployeurComponent } from './components/Responsable-Ressources-Humaines/add-employeur/add-employeur.component';
import { EmployeurTabComponent } from './components/Responsable-Ressources-Humaines/employeur-tab/employeur-tab.component';
import { EmployeursTabRtComponent } from './components/Responsable-Technique/employeurs-tab-rt/employeurs-tab-rt.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/employeur-logistique/add-product/add-product.component';
import { ProductTabElComponent } from './components/employeur-logistique/product-tab-el/product-tab-el.component';
import { ProductTabRlComponent } from './components/Responsable-Logistique/product-tab-rl/product-tab-rl.component';
import { ProductsTabComponent } from './components/entreprise/products-tab/products-tab.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { StoreComponent } from './components/store/store.component';
import { StoreClientComponent } from './components/client/store-client/store-client.component';
import { AddCommandeComponent } from './components/client/add-commande/add-commande.component';
import { CommandeTabClinetComponent } from './components/client/commande-tab-clinet/commande-tab-clinet.component';
import { CommmandeTabEcComponent } from './components/employeur-commercial/commmande-tab-ec/commmande-tab-ec.component';
import { CommandesTabRcComponent } from './components/Responsable-Commercial/commandes-tab-rc/commandes-tab-rc.component';
import { PaymentCommandeComponent } from './components/client/payment-commande/payment-commande.component';
import { DisplayFactureComponent } from './components/display-facture/display-facture.component';
import { FactureTabClientComponent } from './components/client/facture-tab-client/facture-tab-client.component';
import { FacturesTabComponent } from './components/factures-tab/factures-tab.component';
import { AddTacheResponsableComponent } from './components/entreprise/add-tache-responsable/add-tache-responsable.component';
import { AddTacheEmployeurRcComponent } from './components/Responsable-Commercial/add-tache-employeur-rc/add-tache-employeur-rc.component';
import { AddTacheEmployeurRlComponent } from './components/Responsable-Logistique/add-tache-employeur-rl/add-tache-employeur-rl.component';
import { AddTacheEmployeurRfComponent } from './components/Responsable-Financier/add-tache-employeur-rf/add-tache-employeur-rf.component';
import { AddTacheEmployeurRtComponent } from './components/Responsable-Technique/add-tache-employeur-rt/add-tache-employeur-rt.component';
import { TachesTabComponent } from './components/taches-tab/taches-tab.component';
import { FacturesTabEfComponent } from './components/employeur-financier/factures-tab-ef/factures-tab-ef.component';
import { AddReclamationClinetComponent } from './components/client/add-reclamation-clinet/add-reclamation-clinet.component';
import { ReclamationTabClientComponent } from './components/client/reclamation-tab-client/reclamation-tab-client.component';
import { ReclamationTabRfComponent } from './components/Responsable-Financier/reclamation-tab-rf/reclamation-tab-rf.component';
import { ReclamationTabRtComponent } from './components/Responsable-Technique/reclamation-tab-rt/reclamation-tab-rt.component';
import { ReclamationTabEtComponent } from './components/employeur-technique/reclamation-tab-et/reclamation-tab-et.component';
import { ReclamationTabEfComponent } from './components/employeur-financier/reclamation-tab-ef/reclamation-tab-ef.component';
import { DashboardRtComponent } from './components/dashboard/dashboard-rt/dashboard-rt.component';
import { DashboardRfComponent } from './components/dashboard/dashboard-rf/dashboard-rf.component';
import { DashboardRcComponent } from './components/dashboard/dashboard-rc/dashboard-rc.component';
import { DashboardRlComponent } from './components/dashboard/dashboard-rl/dashboard-rl.component';
import { DashboardRhComponent } from './components/dashboard/dashboard-rh/dashboard-rh.component';
import { DashboardEntrepriseComponent } from './components/dashboard/dashboard-entreprise/dashboard-entreprise.component';
import { DashboardAdminComponent } from './components/dashboard/dashboard-admin/dashboard-admin.component';
import { EditResponsableComponent } from './components/edit-responsable/edit-responsable.component';
import { EditEmployeurComponent } from './components/edit-employeur/edit-employeur.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


const routes: Routes = [
  /////////////////////////////templite1/////////////////////////////
  //http://localhost;4200/home
  { path: '', component: HomeComponent },
  //http://localhost;4200/About
  { path: 'About', component: AboutComponent },
  //http://localhost;4200/Service
  { path: 'Service', component: ServiceComponent },
  //http://localhost;4200/Contact
  { path: 'Contact', component: ContactComponent },
  //http://localhost;4200/CategoryVente
  { path: 'CategoryVente', component: CategoryVenteComponent },
  //http://localhost;4200/Signup
  { path: 'Signup', component: SignupComponent },
  //http://localhost;4200/login
  { path: 'login', component: LoginComponent },
  //http://localhost;4200/component
  { path: 'component', component: AppComponent },
  /////////////////////////////templite2/////////////////////////////
  ////////////////////////////all///////////////////////////////////
  //http://localhost;4200/profile
  { path: 'profile/:id', component: ProfileComponent },
  //http://localhost;4200/messenger
  { path: 'messenger/:id', component: MessengerComponent },
  //http://localhost;4200/chat
  { path: 'chat/:userId/:id', component: ChatComponent },
  //http://localhost;4200/displayProduct
  { path: 'displayProduct/:id', component: DisplayProductComponent },
  //http://localhost;4200/store
  { path: 'store/:id', component: StoreComponent },
  //http://localhost;4200/facturesTab
  { path: 'facturesTab/:id', component: FacturesTabComponent },
  //http://localhost;4200/displayFacture
  { path: 'displayFacture/:id', component: DisplayFactureComponent },
  //http://localhost;4200/tachesTab
  { path: 'tachesTab/:id', component: TachesTabComponent },
  ////////////////////////////admin/////////////////////////////////
  //http://localhost;4200/SignupAdmin
  { path: 'SignupAdmin', component: SignupAdminComponent },
  //http://localhost;4200/entrepriseTab
  { path: 'entrepriseTab', component: EntrepriseTabComponent },
  //http://localhost;4200/usersTab
  { path: 'usersTab', component: UserTabComponent },
  /////dashboard
  //http://localhost;4200/dashboardAdmin
  { path: 'dashboardAdmin', component: DashboardAdminComponent },
  ///////////////////////////enterprise/////////////////////////////
  //http://localhost;4200/AddResponsable
  { path: 'addResponsable', component: AddResponsableComponent },
  //http://localhost;4200/AddCategory
  { path: 'addCategory', component: AddCategoryComponent },
  //http://localhost;4200/responsablesTab
  { path: 'responsablesTab/:id', component: ResponsablesTabComponent },
  //http://localhost;4200/employeursTab
  { path: 'employeursTab/:id', component: EmployeursTabComponent },
  //http://localhost;4200/fournisseurTab
  { path: 'fournisseursTab/:id', component: FournisseursTabComponent },
  //http://localhost;4200/ProductsTab
  { path: 'productsTab/:id', component: ProductsTabComponent },
  //http://localhost;4200/addTacheResponsable
  { path: 'addTacheResponsable/:id', component: AddTacheResponsableComponent },
  //http://localhost;4200/editResponsable
  { path: 'editResponsable/:id', component: EditResponsableComponent },
  /////dashboard
  //http://localhost;4200/dashboardEntreprise
  { path: 'dashboardEntreprise', component: DashboardEntrepriseComponent },
  ///////////////////responsable ressources humaines//////////////////
  //http://localhost;4200/addEmployeur
  { path: 'addEmployeur', component: AddEmployeurComponent },
  //http://localhost;4200/employeurTab
  { path: 'employeurTab/:id', component: EmployeurTabComponent },
  //http://localhost;4200/editEmployeur
  { path: 'editEmployeur/:id', component: EditEmployeurComponent },
  /////dashboard
  //http://localhost;4200/dashboardRh
  { path: 'dashboardRh', component: DashboardRhComponent },
  ////////////////////////responsable logistique/////////////////////
  //http://localhost;4200/employeurTabRl
  { path: 'employeursTabRl/:id', component: EmployeursTabRlComponent },
  //http://localhost;4200/ProductTabRl
  { path: 'productTabRl/:id', component: ProductTabRlComponent },
  //http://localhost;4200/addTacheEmployeurRl
  { path: 'addTacheEmployeurRl/:id', component: AddTacheEmployeurRlComponent },
  /////dashboard
  //http://localhost;4200/dashboardRl
  { path: 'dashboardRl', component: DashboardRlComponent },
  //////////////////////////responsable commercial///////////////////
  //http://localhost;4200/employeurTabRc
  { path: 'employeursTabRc/:id', component: EmployeursTabRcComponent },
  //http://localhost;4200/fournisseurTabRc
  { path: 'fournisseurTabRc/:id', component: FournisseursTabRcComponent },
  //http://localhost;4200/commandesTabRc
  { path: 'commandesTabRc/:id', component: CommandesTabRcComponent },
  //http://localhost;4200/addTacheEmployeurRc
  { path: 'addTacheEmployeurRc/:id', component: AddTacheEmployeurRcComponent },
  /////dashboard
  //http://localhost;4200/dashboardRc
  { path: 'dashboardRc', component: DashboardRcComponent },
  //////////////////////////responsable financier////////////////////
  //http://localhost;4200/employeurTabRf
  { path: 'employeursTabRf/:id', component: EmployeursTabRfComponent },
  //http://localhost;4200/addTacheEmployeurRf
  { path: 'addTacheEmployeurRf/:id', component: AddTacheEmployeurRfComponent },
  //http://localhost;4200/reclamationTabRf
  { path: 'reclamationTabRf/:id', component: ReclamationTabRfComponent },
  /////dashboard
  //http://localhost;4200/dashboardRf
  { path: 'dashboardRf', component: DashboardRfComponent },
  /////////////////////////responsable technique////////////////////
  //http://localhost;4200/employeurTabRt
  { path: 'employeursTabRt/:id', component: EmployeursTabRtComponent },
  //http://localhost;4200/addTacheEmployeurRt
  { path: 'addTacheEmployeurRt/:id', component: AddTacheEmployeurRtComponent },
  /////dashboard
  //http://localhost;4200/dashboardRt
  { path: 'dashboardRt', component: DashboardRtComponent },
  //////////////////////////employeur commercial///////////////////
  //http://localhost;4200/addFournisseur
  { path: 'addFournisseur', component: AddFournisseurComponent },
  //http://localhost;4200/fournisseurTabEc
  { path: 'fournisseurTabEc/:id', component: FournisseurTabEcComponent },
  //http://localhost;4200/commandeTabEc
  { path: 'commandeTabEc/:id', component: CommmandeTabEcComponent },
  //http://localhost;4200/reclamationTabRt
  { path: 'reclamationTabRt/:id', component: ReclamationTabRtComponent },
  //http://localhost;4200/editClient
  { path: 'editClient/:id', component: EditClientComponent },
  ////////////////////////employeur logistique/////////////////////
  //http://localhost;4200/addProduct
  { path: 'addProduct', component: AddProductComponent },
  //http://localhost;4200/ProductTabEl
  { path: 'productTabEl/:id', component: ProductTabElComponent },
  //http://localhost;4200/editProduct
  { path: 'editProduct/:id', component: EditProductComponent },
  //////////////////////////employeur financier////////////////////
  //http://localhost;4200/facturesTabEf
  { path: 'facturesTabEf/:id', component: FacturesTabEfComponent },
  //http://localhost;4200/reclamationTabEf
  { path: 'reclamationTabEf/:id', component: ReclamationTabEfComponent },
  /////////////////////////employeur technique////////////////////
  //http://localhost;4200/reclamationTabEt
  { path: 'reclamationTabEt/:id', component: ReclamationTabEtComponent },
  ////////////////////////////client/////////////////////////////
  //http://localhost;4200/storeClient
  { path: 'storeClient/:id', component: StoreClientComponent },
  //http://localhost;4200/addCommande
  { path: 'addCommande/:id', component: AddCommandeComponent },
  //http://localhost;4200/commandeTabClinet
  { path: 'commandeTabClinet/:id', component: CommandeTabClinetComponent },
  //http://localhost;4200/paymentCommande
  { path: 'paymentCommande/:id', component: PaymentCommandeComponent },
  //http://localhost;4200/factureTabClient
  { path: 'factureTabClient/:id', component: FactureTabClientComponent },
  //http://localhost;4200/addReclamationClient
  { path: 'addReclamationClient/:id', component: AddReclamationClinetComponent },
  //http://localhost;4200/reclamationTabClinet
  { path: 'reclamationTabClient/:id', component: ReclamationTabClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
