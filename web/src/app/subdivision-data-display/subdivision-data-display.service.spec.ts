import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { SubDivision } from "src/app/subdivision-data-display/subdivision-data-display.component";
import { SubdivisionDataDisplayService } from "src/app/subdivision-data-display/subdivision-data-display.service";

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let service: SubdivisionDataDisplayService;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [SubdivisionDataDisplayService],
  });
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  service = new SubdivisionDataDisplayService(httpClientSpy);
});

it("should return expected get All SubDivision data (HttpClient called once)", (done: DoneFn) => {
  const expectedSubDivisions: SubDivision[] = [
    { id: 1, name: "A" } as SubDivision,
  ];

  httpClientSpy.get.and.returnValue(of(expectedSubDivisions));

  service.getAll().subscribe({
    next: (subDivisions) => {
      expect(subDivisions).toEqual(expectedSubDivisions);
      expect(subDivisions.length).toEqual(1);
      done();
    },
    error: done.fail,
  });
  expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
});
