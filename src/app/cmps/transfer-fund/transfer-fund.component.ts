import { Component, OnInit, EventEmitter, Output,Input  } from '@angular/core';
import { Contact } from 'src/app/models/contacts.model';
import { User } from 'src/app/models/users.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Output() transfer = new EventEmitter();
  @Input() contact: Contact;
  @Input() currUser: User; 
  amount:number = 0;
  msg:string= '';
  constructor(private route: ActivatedRoute,
   private router: Router) { }

  

  ngOnInit(): void {
  }

  checkTrans(amount:number):void  {
    if (amount <= this.currUser.coins) {
    this.transfer.emit(amount)
    this.goBack()
    } else {
      this.msg = "Invalid transaction"
    }

  }

  goBack():void{
    this.router.navigateByUrl('/contact');
  }
}
