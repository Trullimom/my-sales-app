import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Supplier } from './supplier.dto';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(environment.api + 'suppliers');
  }

  //? Number oder number
  public getById(id: Number): Observable<Supplier> {
    return this.http.get<Supplier>(environment.api + 'suppliers/' + id);
  }

  public save(supplier: Supplier): Observable<Supplier> {
    if (supplier.id)
      return this.http.put<Supplier>(
        environment.api + 'suppliers/' + supplier.id,
        supplier
      );

    return this.http.post<Supplier>(environment.api + 'suppliers', supplier);
  }

  public delete(id?: number): Observable<Supplier> {
    return this.http.delete<Supplier>(environment.api + 'suppliers/' + id);
  }

  public create(): Supplier {
    return {
      id: 0,
      companyName: '',
      contactName: '',
      contactTitle: '',
      address: {
        city: '',
        phone: '',
        country: '',
        postalCode: 0,
        region: '',
        street: '',
      },
    };
  }
}
