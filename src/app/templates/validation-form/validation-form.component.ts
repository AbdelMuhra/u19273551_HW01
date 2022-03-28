import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  url=[];
onselect(event){
  if(event.target.files){
    for(let i=0; i<File.length; i++){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload=(events:any)=>{
        if(this.url.length < 2)
        {
          this.url.unshift(events.target.result);
        }
        else 
        {
          this.url.pop()
          this.url.unshift(events.target.result);
        }
      }
    }
  }
}
}
