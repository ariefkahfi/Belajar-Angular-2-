import { Component } from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-root',
  styles : [
    '.special {background-color : crimson ; padding : 1%; margin-bottom : 10px;}',
    '#cat-title {padding : 1%; color : white; font-weight : bold; display : block;}'],
  template : `
    <h1>Angular Template Syntax</h1>

    <span>Contoh interpolation</span><br/>
    <code>
      {{title}}
    </code><br/><br/>

    <div class= "special" [class.special] = "validStyle">
      <p [innerHTML] = "valInnerHTML" [style.color] =  "validStyle ? 'white' : 'red' " ></p>
    </div>

    <div [style.backgroundColor] = "red" [style.marginBottom] = "marginBottomDiv">
      <span id = "cat-title">Contoh Property binding dengan image element</span>
      <img [src]= "gambarKucing"/>
    </div>

    <div>
      <button (click) = "sayHello()" >Say Hello</button><br/>
      <input [value]  = "textVal"
             id       = "input-text"
             (input)  = "resultVal = $event.target.value" 
      />
      <span>{{resultVal}}</span>
    </div>
    <p [style.fontSize.px] = "fontSize">Hello Paragraph</p>
    
    
    <emit-component [size] = "fontSize" (eventEmitter) = "fontSize=$event"></emit-component>

  `
})
export class AppComponent {
  title = 'Ini interpolation';
  red = "crimson";
  fontSize =30;
  resultVal = "";
  textVal = "input val";
  marginBottomDiv = "20px";
  validStyle = true;
  valInnerHTML = "Hello from innerHTML props";
  gambarKucing = '../assets/img/cat1.jpg';

  responseEvent(event){
    this.fontSize = event;
  }

  sayHello(){
    console.log('sayHello() from parent component');
  }
}
