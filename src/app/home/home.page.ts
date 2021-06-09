import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  items: any[] = []; 
  cep: string;
  hideResult: boolean = true;
  hideConsult: boolean = false;


  constructor(
    private ngxXml2jsonService: NgxXml2jsonService,
    private http: HTTP
    ) {}
    
  ngOnInit(){ //ciclo de vida do ionic
  }

    //método obter consulta XML via CEP
  

    consult(cep: string){

      const url = 'https://viacep.com.br/ws/' + cep + '/xml/';

      this.http.get(url, {}, {})
      .then((result)=>{

        const parser = new DOMParser(); //DOM - document object model
        const xml = parser.parseFromString(result.data, 'text/xml'); //pega o conteudo das tags na string e converte em string formatada em xml
        const obj = this.ngxXml2jsonService.xmlToJson(xml); //converte para objeto tipo json
        this.items.push(obj);
        console.log(obj);
        this.hideResult = false;
        this.hideConsult = true;
      })
      .catch((error)=>{
        console.log(error);

      });

    }

    okay(){
      this.hideResult = true;
      this.hideConsult = false;
    }
    
}
