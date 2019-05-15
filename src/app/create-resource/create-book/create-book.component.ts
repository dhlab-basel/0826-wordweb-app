import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AuthorRefComponent} from "../../dialog/author-ref/author-ref.component";
import {VenueRefComponent} from "../../dialog/venue-ref/venue-ref.component";
import {OrganisationRefComponent} from "../../dialog/organisation-ref/organisation-ref.component";

@Component({
    selector: "app-create-book",
    templateUrl: "./create-book.component.html",
    styleUrls: ["./create-book.component.scss"]
})
export class CreateBookComponent implements OnInit {
    form: FormGroup;
    authorList: any[];
    venueList: any[];
    organisationList: any[];

    states: string[] = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
        "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
        "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    constructor(private apiService: ApiService,
                private authorDialog: MatDialog,
                private venueDialog: MatDialog) {
        this.form = new FormGroup({
            title: new FormControl("", [Validators.required]),
            author: new FormControl("", []),
            subject: new FormControl("", []),
            genre: new FormControl("", []),
            venue: new FormControl("", []),
            organisation: new FormControl("", [])
        });
    }

    ngOnInit() {
        this.authorList = [];
        this.venueList = [];
        this.organisationList = [];
    }

    cancel() {
    }

    create() {
    }

    addAuthor() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            values: this.authorList,
            editMod: false,
        };
        const dialogRef = this.authorDialog.open(AuthorRefComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (!data.cancel) {
                this.authorList = data.data;
            }
        });
    }

    addVenue() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            values: this.venueList,
            editMod: false,
        };
        const dialogRef = this.venueDialog.open(VenueRefComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (!data.cancel) {
                this.venueList = data.data;
            }
        });
    }

    addOrganisation() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            values: this.organisationList,
            editMod: false,
        };
        const dialogRef = this.venueDialog.open(OrganisationRefComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (!data.cancel) {
                this.organisationList = data.data;
            }
        });
    }

    addOrEdit(list: any[]): string {
        return list.length === 0 ? "Hinzufügen" : "Bearbeiten";
    }
}