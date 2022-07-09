import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../model/page';

export abstract class CrudService<T, ID> {

  constructor(protected _httpClient : HttpClient, protected _base: string){
  }

  create(model: T): Observable<T>{

    return this._httpClient.post<T>(this._base, model);
  }

  getPaginated(options: {params?: HttpParams}): Observable<Page<T>>{
    return this._httpClient.get<Page<T>>(this._base, options);
  }
}
