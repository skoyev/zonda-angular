import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SubdivisionDataDisplayService } from "./subdivision-data-display.service";
import {
  SubDivision,
  SubdivisionDataDisplayComponent,
} from "src/app/subdivision-data-display/subdivision-data-display.component";
import { AppComponent } from "src/app/app.component";
import { HeaderComponent } from "src/app/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";

describe("SubdivisionDataDisplayComponent", () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;

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
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize and load data when ngOnInit is called", () => {
    let mockService = jasmine.createSpyObj("SubdivisionDataDisplayService", [
      "getAll",
    ]);
    mockService.getAll.and.returnValue(
      of<SubDivision[]>([
        { id: 1, code: "A", name: "Subdivision A" } as SubDivision,
      ])
    );

    //fixture.detectChanges();

    const component = new SubdivisionDataDisplayComponent(
      mockService as SubdivisionDataDisplayService
    );
    component.ngOnInit();
    expect(mockService.getAll).toHaveBeenCalled();
    expect(component.subDivisions.length).toBe(1);
    expect(component.isLoading).toBe(false);
  });
});
