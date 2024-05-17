import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from '../articles-list/Article';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent implements OnInit{

  constructor (){}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output() 
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() 
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void{
  }
  
  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("Se alcanzó el máximo.");
  }
  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event: any):void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
