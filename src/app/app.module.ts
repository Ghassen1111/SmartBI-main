import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from '@agm/core';
import { JwPaginationModule } from 'jw-angular-pagination';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryVenteComponent } from './components/category-vente/category-vente.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { SidebarDashboardComponent } from './components/sidebar-dashboard/sidebar-dashboard.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { EntrepriseTabComponent } from './components/admin/entreprise-tab/entreprise-tab.component';
import { UserTabComponent } from './components/admin/user-tab/user-tab.component';
import { AddResponsableComponent } from './components/entreprise/add-responsable/add-responsable.component';
import { FooterDashboardComponent } from './components/footer-dashboard/footer-dashboard.component';
import { ResponsablesTabComponent } from './components/entreprise/responsables-tab/responsables-tab.component';
import { AddEmployeurComponent } from './components/Responsable-Ressources-Humaines/add-employeur/add-employeur.component';
import { EmployeurTabComponent } from './components/Responsable-Ressources-Humaines/employeur-tab/employeur-tab.component';
import { EmployeursTabComponent } from './components/entreprise/employeurs-tab/employeurs-tab.component';
import { EmployeursTabRlComponent } from './components/Responsable-Logistique/employeurs-tab-rl/employeurs-tab-rl.component';
import { EmployeursTabRcComponent } from './components/Responsable-Commercial/employeurs-tab-rc/employeurs-tab-rc.component';
import { EmployeursTabRfComponent } from './components/Responsable-Financier/employeurs-tab-rf/employeurs-tab-rf.component';
import { EmployeursTabRtComponent } from './components/Responsable-Technique/employeurs-tab-rt/employeurs-tab-rt.component';
import { AddFournisseurComponent } from './components/employeur-commercial/add-fournisseur/add-fournisseur.component';
import { FournisseurTabEcComponent } from './components/employeur-commercial/fournisseur-tab-ec/fournisseur-tab-ec.component';
import { FournisseursTabComponent } from './components/entreprise/fournisseurs-tab/fournisseurs-tab.component';
import { FournisseursTabRcComponent } from './components/Responsable-Commercial/fournisseurs-tab-rc/fournisseurs-tab-rc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ChatComponent } from './components/messenger/chat/chat.component';
import { MapComponent } from './components/map/map.component';
import { AddCategoryComponent } from './components/entreprise/add-category/add-category.component';
import { AddProductComponent } from './components/employeur-logistique/add-product/add-product.component';
import { ProductTabElComponent } from './components/employeur-logistique/product-tab-el/product-tab-el.component';
import { ProductTabRlComponent } from './components/Responsable-Logistique/product-tab-rl/product-tab-rl.component';
import { ProductsTabComponent } from './components/entreprise/products-tab/products-tab.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { StoreComponent } from './components/store/store.component';
import { CardComponent } from './components/store/card/card.component';
import { StoreClientComponent } from './components/client/store-client/store-client.component';
import { CardClientComponent } from './components/client/card-client/card-client.component';
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
import { AddTacheEmployeurRfComponent } from './components/Responsable-Financier/add-tache-employeur-rf/add-tache-employeur-rf.component';
import { AddTacheEmployeurRlComponent } from './components/Responsable-Logistique/add-tache-employeur-rl/add-tache-employeur-rl.component';
import { AddTacheEmployeurRtComponent } from './components/Responsable-Technique/add-tache-employeur-rt/add-tache-employeur-rt.component';
import { TachesTabComponent } from './components/taches-tab/taches-tab.component';
import { FacturesTabEfComponent } from './components/employeur-financier/factures-tab-ef/factures-tab-ef.component';
import { AddReclamationClinetComponent } from './components/client/add-reclamation-clinet/add-reclamation-clinet.component';
import { ReclamationTabClientComponent } from './components/client/reclamation-tab-client/reclamation-tab-client.component';
import { ReclamationTabRfComponent } from './components/Responsable-Financier/reclamation-tab-rf/reclamation-tab-rf.component';
import { ReclamationTabRtComponent } from './components/Responsable-Technique/reclamation-tab-rt/reclamation-tab-rt.component';
import { ReclamationTabEtComponent } from './components/employeur-technique/reclamation-tab-et/reclamation-tab-et.component';
import { ReclamationTabEfComponent } from './components/employeur-financier/reclamation-tab-ef/reclamation-tab-ef.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterFirstNamePipe } from './pipes/filter-first-name.pipe';
import { FilterEmailPipe } from './pipes/filter-email.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterIdPipe } from './pipes/filter-id.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterNameEntreprisePipe } from './pipes/filter-name-entreprise.pipe';
import { DashboardEntrepriseComponent } from './components/dashboard/dashboard-entreprise/dashboard-entreprise.component';
import { DashboardRhComponent } from './components/dashboard/dashboard-rh/dashboard-rh.component';
import { DashboardRcComponent } from './components/dashboard/dashboard-rc/dashboard-rc.component';
import { DashboardRfComponent } from './components/dashboard/dashboard-rf/dashboard-rf.component';
import { DashboardRlComponent } from './components/dashboard/dashboard-rl/dashboard-rl.component';
import { DashboardRtComponent } from './components/dashboard/dashboard-rt/dashboard-rt.component';
import { DashboardAdminComponent } from './components/dashboard/dashboard-admin/dashboard-admin.component';
import { IconUserAdminComponent } from './components/dashboard/dashboard-admin/icon-admin/icon-user-admin/icon-user-admin.component';
import { IconEntrepriseAdminComponent } from './components/dashboard/dashboard-admin/icon-admin/icon-entreprise-admin/icon-entreprise-admin.component';
import { ChartPostUserAdminComponent } from './components/dashboard/dashboard-admin/chart-admin/chart-post-user-admin/chart-post-user-admin.component';
import { ChartSexeUserAdminComponent } from './components/dashboard/dashboard-admin/chart-admin/chart-sexe-user-admin/chart-sexe-user-admin.component';
import { ChartStatusUserAdminComponent } from './components/dashboard/dashboard-admin/chart-admin/chart-status-user-admin/chart-status-user-admin.component';
import { ChartCountryUserAdminComponent } from './components/dashboard/dashboard-admin/chart-admin/chart-country-user-admin/chart-country-user-admin.component';
import { IconUserRhComponent } from './components/dashboard/dashboard-rh/icon-rh/icon-user-rh/icon-user-rh.component';
import { ChartRoleEmployeurRhComponent } from './components/dashboard/dashboard-rh/chart-rh/chart-role-employeur-rh/chart-role-employeur-rh.component';
import { ChartSexeEmployeurRhComponent } from './components/dashboard/dashboard-rh/chart-rh/chart-sexe-employeur-rh/chart-sexe-employeur-rh.component';
import { ChartStatusEmployeurRhComponent } from './components/dashboard/dashboard-rh/chart-rh/chart-status-employeur-rh/chart-status-employeur-rh.component';
import { ChartCountryEmployeurRhComponent } from './components/dashboard/dashboard-rh/chart-rh/chart-country-employeur-rh/chart-country-employeur-rh.component';
import { IconClinetRcComponent } from './components/dashboard/dashboard-rc/icon-rc/icon-clinet-rc/icon-clinet-rc.component';
import { IconCommandeRcComponent } from './components/dashboard/dashboard-rc/icon-rc/icon-commande-rc/icon-commande-rc.component';
import { ChartStatusClinetRcComponent } from './components/dashboard/dashboard-rc/chart-rc/chart-status-clinet-rc/chart-status-clinet-rc.component';
import { ChartSexeClientRcComponent } from './components/dashboard/dashboard-rc/chart-rc/chart-sexe-client-rc/chart-sexe-client-rc.component';
import { ChartCountryClientRcComponent } from './components/dashboard/dashboard-rc/chart-rc/chart-country-client-rc/chart-country-client-rc.component';
import { ChartSommeCommandeForProductRcComponent } from './components/dashboard/dashboard-rc/chart-rc/chart-somme-commande-for-product-rc/chart-somme-commande-for-product-rc.component';
import { ChartStatusCommandeRcComponent } from './components/dashboard/dashboard-rc/chart-rc/chart-status-commande-rc/chart-status-commande-rc.component';
import { IconProductRlComponent } from './components/dashboard/dashboard-rl/icon-rl/icon-product-rl/icon-product-rl.component';
import { IconCategoryRlComponent } from './components/dashboard/dashboard-rl/icon-rl/icon-category-rl/icon-category-rl.component';
import { IconStockRlComponent } from './components/dashboard/dashboard-rl/icon-rl/icon-stock-rl/icon-stock-rl.component';
import { ChartStatusProductRlComponent } from './components/dashboard/dashboard-rl/chart-rl/chart-status-product-rl/chart-status-product-rl.component';
import { ChartSommeProductForCategoryRlComponent } from './components/dashboard/dashboard-rl/chart-rl/chart-somme-product-for-category-rl/chart-somme-product-for-category-rl.component';
import { ChartSommeStockForCategoryRlComponent } from './components/dashboard/dashboard-rl/chart-rl/chart-somme-stock-for-category-rl/chart-somme-stock-for-category-rl.component';
import { ChartQtyProductVenteEtNonVenteComponent } from './components/dashboard/dashboard-rl/chart-rl/chart-qty-product-vente-et-non-vente/chart-qty-product-vente-et-non-vente.component';
import { IconVentesRlComponent } from './components/dashboard/dashboard-rl/icon-rl/icon-ventes-rl/icon-ventes-rl.component';
import { ChartSommeStockVentesForCategoryRlComponent } from './components/dashboard/dashboard-rl/chart-rl/chart-somme-stock-ventes-for-category-rl/chart-somme-stock-ventes-for-category-rl.component';
import { EditResponsableComponent } from './components/edit-responsable/edit-responsable.component';
import { EditEmployeurComponent } from './components/edit-employeur/edit-employeur.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { IconReclamationRtComponent } from './components/dashboard/dashboard-rt/icon-rt/icon-reclamation-rt/icon-reclamation-rt.component';
import { IconQtyProductReclamationRtComponent } from './components/dashboard/dashboard-rt/icon-rt/icon-qty-product-reclamation-rt/icon-qty-product-reclamation-rt.component';
import { ChartQtyProductReclamationForCategoryRtComponent } from './components/dashboard/dashboard-rt/chart-rt/chart-qty-product-reclamation-for-category-rt/chart-qty-product-reclamation-for-category-rt.component';
import { ChartQtyProductReclamationForProductRtComponent } from './components/dashboard/dashboard-rt/chart-rt/chart-qty-product-reclamation-for-product-rt/chart-qty-product-reclamation-for-product-rt.component';
import { ChartQtyProductReclamationForCategoryServiceRtComponent } from './components/dashboard/dashboard-rt/chart-rt/chart-qty-product-reclamation-for-category-service-rt/chart-qty-product-reclamation-for-category-service-rt.component';
import { ChartStatusReclamationRtComponent } from './components/dashboard/dashboard-rt/chart-rt/chart-status-reclamation-rt/chart-status-reclamation-rt.component';
import { IconBeneficesRfComponent } from './components/dashboard/dashboard-rf/icon-rf/icon-benefices-rf/icon-benefices-rf.component';
import { IconTvaRfComponent } from './components/dashboard/dashboard-rf/icon-rf/icon-tva-rf/icon-tva-rf.component';
import { IconSalaireRfComponent } from './components/dashboard/dashboard-rf/icon-rf/icon-salaire-rf/icon-salaire-rf.component';
import { ChartPourcentageDesBeneficesDesProduitsVendusRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-pourcentage-des-benefices-des-produits-vendus-rf/chart-pourcentage-des-benefices-des-produits-vendus-rf.component';
import { ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-pourcentage-des-benefices-des-produits-non-vendus-rf/chart-pourcentage-des-benefices-des-produits-non-vendus-rf.component';
import { ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-pourcentage-des-benefices-des-categorie-non-vendus-rf/chart-pourcentage-des-benefices-des-categorie-non-vendus-rf.component';
import { ChartPourcentageDesBeneficesDesCategorieVendusRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-pourcentage-des-benefices-des-categorie-vendus-rf/chart-pourcentage-des-benefices-des-categorie-vendus-rf.component';
import { ChartLesProduitLesPlusRentablsTvaRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-les-produit-les-plus-rentabls-tva-rf/chart-les-produit-les-plus-rentabls-tva-rf.component';
import { ChartLeCartPlusRentablesRfComponent } from './components/dashboard/dashboard-rf/chart-rf/chart-le-cart-plus-rentables-rf/chart-le-cart-plus-rentables-rf.component';
import { IconResponsableComponent } from './components/dashboard/dashboard-entreprise/icon-entreprise/icon-responsable/icon-responsable.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    CategoryVenteComponent,
    SignupComponent,
    LoginComponent,
    ////////////////
    HeaderDashboardComponent,
    SidebarDashboardComponent,
    SignupAdminComponent,
    EntrepriseTabComponent,
    UserTabComponent,
    AddResponsableComponent,
    FooterDashboardComponent,
    ResponsablesTabComponent,
    AddEmployeurComponent,
    EmployeurTabComponent,
    EmployeursTabComponent,
    EmployeursTabRlComponent,
    EmployeursTabRcComponent,
    EmployeursTabRfComponent,
    EmployeursTabRtComponent,
    AddFournisseurComponent,
    FournisseurTabEcComponent,
    FournisseursTabComponent,
    FournisseursTabRcComponent,
    ProfileComponent,
    MessengerComponent,
    ChatComponent,
    MapComponent,
    AddCategoryComponent,
    AddProductComponent,
    ProductTabElComponent,
    ProductTabRlComponent,
    ProductsTabComponent,
    DisplayProductComponent,
    StoreComponent,
    CardComponent,
    StoreClientComponent,
    CardClientComponent,
    AddCommandeComponent,
    CommandeTabClinetComponent,
    CommmandeTabEcComponent,
    CommandesTabRcComponent,
    PaymentCommandeComponent,
    DisplayFactureComponent,
    FactureTabClientComponent,
    FacturesTabComponent,
    AddTacheResponsableComponent,
    AddTacheEmployeurRcComponent,
    AddTacheEmployeurRfComponent,
    AddTacheEmployeurRlComponent,
    AddTacheEmployeurRtComponent,
    TachesTabComponent,
    FacturesTabEfComponent,
    AddReclamationClinetComponent,
    ReclamationTabClientComponent,
    ReclamationTabRfComponent,
    ReclamationTabRtComponent,
    ReclamationTabEtComponent,
    ReclamationTabEfComponent,
    FilterNamePipe,
    FilterFirstNamePipe,
    FilterEmailPipe,
    FilterCategoryPipe,
    FilterIdPipe,
    FilterDatePipe,
    FilterNameEntreprisePipe,
    DashboardEntrepriseComponent,
    DashboardRhComponent,
    DashboardRcComponent,
    DashboardRfComponent,
    DashboardRlComponent,
    DashboardRtComponent,
    DashboardAdminComponent,
    IconUserAdminComponent,
    IconEntrepriseAdminComponent,
    ChartPostUserAdminComponent,
    ChartSexeUserAdminComponent,
    ChartStatusUserAdminComponent,
    ChartCountryUserAdminComponent,
    IconUserRhComponent,
    ChartRoleEmployeurRhComponent,
    ChartSexeEmployeurRhComponent,
    ChartStatusEmployeurRhComponent,
    ChartCountryEmployeurRhComponent,
    IconClinetRcComponent,
    IconCommandeRcComponent,
    ChartStatusClinetRcComponent,
    ChartSexeClientRcComponent,
    ChartCountryClientRcComponent,
    ChartSommeCommandeForProductRcComponent,
    ChartStatusCommandeRcComponent,
    IconProductRlComponent,
    IconCategoryRlComponent,
    IconStockRlComponent,
    ChartStatusProductRlComponent,
    ChartSommeProductForCategoryRlComponent,
    ChartSommeStockForCategoryRlComponent,
    ChartQtyProductVenteEtNonVenteComponent,
    IconVentesRlComponent,
    ChartSommeStockVentesForCategoryRlComponent,
    EditResponsableComponent,
    EditEmployeurComponent,
    EditClientComponent,
    EditProductComponent,
    IconReclamationRtComponent,
    IconQtyProductReclamationRtComponent,
    ChartQtyProductReclamationForCategoryRtComponent,
    ChartQtyProductReclamationForProductRtComponent,
    ChartQtyProductReclamationForCategoryServiceRtComponent,
    ChartStatusReclamationRtComponent,
    IconBeneficesRfComponent,
    IconTvaRfComponent,
    IconSalaireRfComponent,
    ChartPourcentageDesBeneficesDesProduitsVendusRfComponent,
    ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent,
    ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent,
    ChartPourcentageDesBeneficesDesCategorieVendusRfComponent,
    ChartLesProduitLesPlusRentablsTvaRfComponent,
    ChartLeCartPlusRentablesRfComponent,
    IconResponsableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
