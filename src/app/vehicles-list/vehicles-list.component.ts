import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../entities/vehicle';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  email = ''
  displayedColumns: string[] = ['plateNo', 'model', 'createdOn', 'actions'];
  dataSource: MatTableDataSource<Vehicle[]>

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) {
    this.email = this.route.snapshot.url[0].path
  }

  ngOnInit() {
    this.retrieveVehicleForUser(this.email)
  }

  retrieveVehicleForUser(email: string) {
    this.vehicleService.getVehicleByEmail(email).subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
    }, error => {
      console.log(error);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
