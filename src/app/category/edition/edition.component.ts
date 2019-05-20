import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from "@angular/material";
import {ApiService} from "../../services/apiService/api.service";
import {Book, Edition} from "../../model/model";
import {BookRefComponent} from "../../dialog/book-ref/book-ref.component";
import {LanguageRefComponent} from "../../dialog/language-ref/language-ref.component";

@Component({
  selector: "app-edition",
  templateUrl: "./edition.component.html",
  styleUrls: ["../category.component.scss"]
})
export class EditionComponent implements OnInit {

  displayedColumns: string[] = ["publicationInfo", "book", "language", "references", "action"];
  dataSource: MatTableDataSource<Edition>;
  value: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService,
              private bookDialog: MatDialog,
              private languageDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.apiService.getEditions());
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clear() {
    this.dataSource.filter = this.value = "";
  }

  rowCount() {
    return this.dataSource.filteredData.length;
  }

  copyArray(book: Book[]) {
    return book;
  }

  editBook(book: any[]) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      values: this.copyArray(book),
      editMod: true
    };
    const dialogRef = this.bookDialog.open(BookRefComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

  editLanguage(language: any[]) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      values: this.copyArray(language),
      editMod: true
    };
    const dialogRef = this.languageDialog.open(LanguageRefComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }

}
