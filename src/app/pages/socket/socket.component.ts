import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as socketIo from 'socket.io-client'
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {
  
  formGroup = this._formBuilder.group({
    nom: [ 'test', Validators.required],
    file: [null, Validators.required]
  });

  constructor(
    private _http: HttpClient,
    private _formBuilder : FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
  }

  upload(){
    console.log('upload')

    this._http.post('http://localhost:3000/socket', { nom: 'olivier'}).subscribe( res=>{
      let socket = socketIo('http://localhost:3000')

      socket('hello', data=> console.log(data))
      console.log('res http :', res)
    })

  }

  onSubmit(){
    console.log('file', this.formGroup)
  }

  onFileChange(event) {
    const reader = new FileReader();
    console.log('event file', event)
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
