import { FormsModule } from '@angular/forms'; // <-- Necessário adicionar essa importação
@NgModule({
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule // <-- Necessário para usar [(ngModel)]
],
})
export class AppModule { }