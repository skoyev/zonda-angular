import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { SubdivisionDataDisplayService } from "src/app/subdivision-data-display/subdivision-data-display.service";

export interface SubDivision {
  id: number;
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  fieldSurveyTerritoryId: number;
  marketId: number;
  subdivisionStatusId: number;
  surveyMethodId: number;
  activeSections: number;
  futureSections: number;
  builtOutSections: number;
  totalLots: number;
  fieldSurveyTerritoryName: string;
  marketName: string;
  marketAbbreviation: string;
  subdivisionStatusCode: string;
  surveyMethodCode: string;
  county: string;
  community: string;
  zoom17Date: string;
  zoom18Date: string;
  subdivisionGeometryId: number;
  subdivisionGeometryBoundingBoxId: number;
  subdivisionGeometryBoundaryId: number;
  subdivisionGeometryIntelligenceBoundaryId: number;
  subdivisionGeometryIntelligenceBoundaryStatusId: number;
  subdivisionGeometryIntelligenceBoundaryStatusCode: string;
  subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
  nearMapImageDate: string;
  imageBoxId: number;
  mostRecentIPointBatchDate: string;
  iPoints: null;
  validatediPoints: null;
  subdivisionSpecificStatus: string;
}

interface SubdivisionDataCode {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "code",
    "name",
    "longitude",
    "latitude",
    "fieldSurveyTerritoryId",
    "subdivisionStatusCode",
    "surveyMethodCode"
  ];

  subdivisionDataCodes: SubdivisionDataCode[] = [
    { value: "ALL", viewValue: "ALL" },
    { value: "Builtout", viewValue: "Builtout" },
    { value: "Future", viewValue: "Future" },
    { value: "Active", viewValue: "Active" },
  ];

  isLoading: boolean = false;
  subDivisions: Array<SubDivision> = [];

  dataSource = new MatTableDataSource<SubDivision>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(private subDivisionService: SubdivisionDataDisplayService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {}

  loadData() {
    this.isLoading = true;
    this.subDivisionService.getAll().subscribe((result: any) => {
      // keep original array result for the FE filter logic
      this.subDivisions = result["subdivisions"];
      this.dataSource = new MatTableDataSource(result["subdivisions"]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }

  selectDataCode(val: string) {
    // make copy of the original array, and filter by selected code
    this.dataSource = new MatTableDataSource<SubDivision>(
      val != "ALL"
        ? [...this.subDivisions].filter((d) => d.subdivisionStatusCode === val)
        : [...this.subDivisions]
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
