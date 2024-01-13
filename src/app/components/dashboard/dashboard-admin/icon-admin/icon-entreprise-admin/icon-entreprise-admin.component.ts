import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-icon-entreprise-admin',
  templateUrl: './icon-entreprise-admin.component.html',
  styleUrls: ['./icon-entreprise-admin.component.css']
})
export class IconEntrepriseAdminComponent implements OnInit {
  entreprise:any=[];
  allEntreprise:any=0
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllEntreprise().subscribe(
      (Response) => {
        this.entreprise = Response.entreprise
        for (let i = 0; i < this.entreprise.length; i++) {
            this.allEntreprise=this.allEntreprise+1;
        }
      }
    )
  }

}
