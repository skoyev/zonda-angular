import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SubDivision } from "src/app/subdivision-data-display/subdivision-data-display.component";

@Injectable()
export class SubdivisionDataDisplayService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<SubDivision[]>(
      "http://localhost:3000/v1/subdivisions"
    );
  }
}
