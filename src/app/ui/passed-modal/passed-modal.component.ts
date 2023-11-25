import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { Table } from 'src/app/interface/iTable.interface';
import { RoadTableComponent } from 'src/app/pages/road-table/road-table.component';

@Component({
  selector: 'passed-modal',
  templateUrl: './passed-modal.component.html',
  styleUrls: ['./passed-modal.component.scss'],
})
export class PassedModalComponent {
  constructor(public dialog: MatDialog, public table:RoadTableComponent) {
    console.log(this.table.roadmapTable)
  }
  
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    table: Table[]
  ): void {
    this.dialog.open(PassedModalDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.table.roadmapTable
    });
  }
}

@Component({
  selector: 'passed-modal-dialog',
  templateUrl: './passed-modal-dialog.component.html',
})
export class PassedModalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PassedModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Table[]
  ) {}

  close() {
    const find = this.data.find(item => item.theme === 'Типы данных, преобразования типов');
    if (find && !find.bool) {
      find.bool = true;
      console.log('Значение bool обновлено:', find);
    }
    this.dialogRef.close();
  }
  
}

