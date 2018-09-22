import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.css']
})

export class InputsOutputsComponent implements OnInit {  
  
  isDisable : boolean;
  inputValue : string;

  constructor() {}

  buttomHandler($event: any): void {
    this.inputValue = "";
    this.isDisable = true;
  }

  inputHandler($event: any) : void {
    let inputValue = $event.target.value; 
    
    if($event.target.value != ""){
      this.isDisable = false; 
    }
                
    this.inputValue = inputValue;        
    console.log($event); 
  }

  ngOnInit() {
    this.isDisable = true;
    this.inputValue = ""; 
  }
}
