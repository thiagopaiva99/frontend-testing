import { Component } from '@angular/core';

import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'simple-model-test';

  public book: Book = new Book(
    'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8522135&qld=90&l=430&a=-1',
    'Uma Breve História do Tempo',
    'Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores dúvidas da humanidade: Qual a origem do universo? Ele é infinito? E o tempo? Houve um começo e haverá um fim? Existem outras dimensões além das três espaciais? E o que vai acontecer quando tudo terminar?',
    35,
    0
  );

}
