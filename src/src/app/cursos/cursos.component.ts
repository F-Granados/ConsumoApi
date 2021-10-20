import { Component, OnInit,Input } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ICurso } from "../models/curso";
import { MatTableDataSource } from "@angular/material/table";



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  //*****************Variables***************
  public _cursos : ICurso[];
  //******************** ********************/
  @Input('ELEMENT_DATA') ELEMENT_DATA !:ICurso[];

  
  displayedColumns: string[] = ['id','cod_curso', 'nombre'];
  dataSource = new MatTableDataSource<ICurso>(this.ELEMENT_DATA);

  constructor(private _cursosservice:CursosService) { }

  ngOnInit(): void {
    // this.getTokenPass();
  }

  // getTokenPass(){
  //   this._cursosservice.getToken().subscribe(data=>{console.log(data)})
  // }

  getCursos(){
    this._cursosservice.getCursos().subscribe(
      (response:ICurso[])=>{
        if(!response){
          console.log('Error, no hay respuesta en cursos');
          this.dataSource.data = response;
        }
        else{
          
          console.log(response);
        }

      },error=>console.log(error))
  }

}
