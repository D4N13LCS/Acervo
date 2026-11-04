
export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  categoria: string;
  ano: number;
  descricao: string;
}

export const livros: Livro[] = [
  {
    id: '1',
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    categoria: 'Romance',
    ano: 1899,
    descricao:
      'Uma narrativa sobre memória, ciúme e as incertezas das relações humanas.',
  },
  {
    id: '2',
    titulo: 'O Alienista',
    autor: 'Machado de Assis',
    categoria: 'Conto',
    ano: 1882,
    descricao:
      'Uma reflexão sobre os limites entre razão, loucura e sociedade.',
  },
  {
    id: '3',
    titulo: 'A Hora da Estrela',
    autor: 'Clarice Lispector',
    categoria: 'Romance',
    ano: 1977,
    descricao:
      'A história de Macabéa, uma jovem nordestina que vive no Rio de Janeiro.',
  },
  {
    id: '4',
    titulo: 'Capitães da Areia',
    autor: 'Jorge Amado',
    categoria: 'Romance',
    ano: 1937,
    descricao:
      'A trajetória de um grupo de meninos que vive nas ruas de Salvador.',
  },
];
