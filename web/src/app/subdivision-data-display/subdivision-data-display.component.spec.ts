import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SubdivisionDataDisplayService } from "./subdivision-data-display.service";
import { SubdivisionDataDisplayComponent } from "src/app/subdivision-data-display/subdivision-data-display.component";

describe("SubdivisionDataDisplayComponent", () => {
  let component: SubdivisionDataDisplayService;
  let fixture: ComponentFixture<SubdivisionDataDisplayService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubdivisionDataDisplayService],
    }).compileComponents();

    fixture = TestBed.createComponent(SubdivisionDataDisplayService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize and load data when ngOnInit is called", () => {
    let mockService: jasmine.SpyObj<SubdivisionDataDisplayService>;
    mockService = jasmine.createSpyObj("SubdivisionDataDisplayService", [
      "getAll",
    ]);
    mockService.getAll.and.returnValue([
      { id: 1, code: "A", name: "Subdivision A" },
    ]);
    fixture.detectChanges();

    const component = new SubdivisionDataDisplayComponent(mockService as any);
    component.ngOnInit();
    expect(mockService.getAll).toHaveBeenCalled();
    expect(component.subDivisions.length).toBe(1);
    expect(component.isLoading).toBe(false);
  });

  // Handle empty subdivision data response gracefully
  it("should handle empty subdivision data response gracefully", () => {
    let mockService: jasmine.SpyObj<SubdivisionDataDisplayService>;
    mockService = jasmine.createSpyObj("SubdivisionDataDisplayService", [
      "getAll",
    ]);
    mockService.getAll.and.returnValue([]);
    fixture.detectChanges();

    const component = new SubdivisionDataDisplayComponent(mockService as any);
    component.ngOnInit();
    expect(mockService.getAll).toHaveBeenCalled();
    expect(component.subDivisions.length).toBe(0);
    expect(component.isLoading).toBe(false);
  });
});
