import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBooks():Observable<Book[]> {
    /* Impement the getBooks method and the get http method, don’t forget to add the url of the api end point and its parameters */
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.get<Book[]>('http://localhost:3000/books/getBooks', options);
  }
  addBook(form: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};

    /* Implement the post method and add its parameters */
    return this.http.post<Book[]>('http://localhost:3000/books/addBook', form, options);

  }

  changeBook(email: any, id: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    console.log(JSON.stringify(email));
    return this.http.patch(`http://localhost:3000/books/changeBook/${id}`, JSON.stringify({email}), options);
  }
}
