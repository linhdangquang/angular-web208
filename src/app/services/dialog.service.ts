import { ConfirmComponent } from './../components/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ConfirmDialogModel } from '../models/confirm-dialog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  confirmDialog(data: ConfirmDialogModel): Observable<boolean> {
    return this.dialog.open(ConfirmComponent, {
      width: '400px',
      data,
      disableClose: true
    }).afterClosed();
  }
}
