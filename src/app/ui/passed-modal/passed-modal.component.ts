import { Component, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'passed-modal',
  templateUrl: './passed-modal.component.html',
  styleUrls: ['./passed-modal.component.scss']
})
export class PassedModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PassedModalDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'passed-modal-dialog',
  templateUrl: './passed-modal-dialog.component.html',
})
export class PassedModalDialogComponent {
  constructor(public dialogRef: MatDialogRef<PassedModalDialogComponent>) {}
  
  close() {
    this.dialogRef.close();
  }
  
}