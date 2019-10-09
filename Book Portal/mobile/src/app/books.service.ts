import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
  
/*     Implement the get method and its parameters
 */

  
   }
  
   addBook(form: any) {
/*     Impement the addBook method and the post http method, don’t forget to add the url of the api end point and its parameters
 */  }
  constructor( private http: HttpClient) { }
}
