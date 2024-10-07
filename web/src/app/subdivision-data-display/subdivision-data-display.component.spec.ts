import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SubdivisionDataDisplayService } from "./subdivision-data-display.service";
import { SubdivisionDataDisplayComponent } from "src/app/subdivision-data-display/subdivision-data-display.component";
import { AppComponent } from "src/app/app.component";
import { HeaderComponent } from "src/app/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SubdivisionDataDisplayComponent", () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SubdivisionDataDisplayComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        HttpClientModule,

        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatToolbarModule,
      ],
      providers: [SubdivisionDataDisplayService],
    }).compileComponents();

    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.inject(HttpClient);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
