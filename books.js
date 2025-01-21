const booksData = [

{"Título": "História e Devoção", "Autor": "Mauricio de Aquino", "Ano": "2011", "posicao": "A1"},
{"Título": "Divina Comunhão - Festa de Todos os Sons", "Autor": "Marco Aurelio Gomes, Neusa Fleury Moraes", "Ano": "2010", "posicao": "A2"},
{"Título": "Um olhar sobre a presença japonesa em Ourinhos", "Autor": "Marco Aurelio Gomes, Neusa Fleury Moraes", "Ano": "2008", "posicao": "A3"},
{"Título": "Memórias do Secúlo XX", "Autor": "Mason Antony", "Ano": "2003", "posicao": "A4"},
{"Título": "Ourinhos - Cidade da Dança", "Autor": "Rafael Lefcadito Álvares, Terezinha de Paula, Vanderley Silva", "Ano": "2012", "posicao": "A5"},
{"Título": "Novas Hístorias de Ouro", "Autor": "Não informado", "Ano": "Não informado", "posicao": "A6"},
{"Título": "Um espaço para lembranças de Ourinhos", "Autor": "Fernanda Saraiva Romera, Rosemary Reginato de Moraes", "Ano": "2004", "posicao": "A7"},
{"Título": "Do Diamante Mineiro aos Canaviais Paulistas", "Autor": "Sandra Regina Gomes", "Ano": "2008", "posicao": "A8"},
{"Título": "Saudades do Século 20", "Autor": "Ruy Castro", "Ano": "1994", "posicao": "A9"},
{"Título": "O Jovem Noel Rosa", "Autor": "Guca Domenico", "Ano": "2003", "posicao": "A10"},
{"Título": "Crônicas Escolhidas", "Autor": "Lima Barreto", "Ano": "Não informado", "posicao": "A11"},
{"Título": "O curioso caso de Benjamin Button", "Autor": "F. Scott Fitzgerald", "Ano": "1922", "posicao": "A12"},
{"Título": "O Pensamento Vivo de Sartre", "Autor": "Não informado", "Ano": "1990", "posicao": "A13"},
{"Título": "O Pensamento vivo de Picasso", "Autor": "Não informado", "Ano": "1985", "posicao": "A14"},
{"Título": "O Pesamento vivo de Nietzsche", "Autor": "Não informado", "Ano": "1991", "posicao": "A15"},
{"Título": "Os grandes humanistas Charlie Chaplin", "Autor": "Pam Brown", "Ano": "1990", "posicao": "A16"},
{"Título": "O poder Psíquico das Pirâmides", "Autor": "Bill Schul & Ed Pettit", "Ano": "1976", "posicao": "A17"},
{"Título": "Crônicas Esocolhidas", "Autor": "Machado de Assis", "Ano": "Não informado", "posicao": "A18"},
{"Título": "Ourinhos - São Paulo", "Autor": "Não informado", "Ano": "1918", "posicao": "A18"},
{"Título": "Ourinhos Memôrias de uma Cidade Paulista", "Autor": "Jefferson Del Rios", "Ano": "1992", "posicao": "A19"},
{"Título": "Memórias Dos Trilhos", "Autor": "Fabiana Lopes da Cunha", "Ano": "2014", "posicao": "A20"},
{"Título": "Globalização, Logística e Transporte Aéreo", "Autor": "Josef Barat", "Ano": "Não informado", "posicao": "A21"},
{"Título": "Os 100 melhores filmes do século 20", "Autor": "Rubens Ewald Filho", "Ano": "2001", "posicao": "A22"},
{"Título": "O Amor me trouxe de Volta", "Autor": "Carol Bowman", "Ano": "2001", "posicao": "A23"},
{"Título": "Correio do Além", "Autor": "Francisco Candido Xavier Espiritos Diversos", "Ano": "1983", "posicao": "A24"},
{"Título": "Marilyn Monroe", "Autor": "Biografia", "Ano": "Não informado", "posicao": "A25"},
{"Título": "Uma história de Ontem", "Autor": "Mônica de Castro", "Ano": "2001", "posicao": "A26"},
{"Título": "Tudo a seu tempo", "Autor": "Elisa Masselli", "Ano": "Não informado", "posicao": "A27"},
{"Título": "Evita Perón", "Autor": "Biografia", "Ano": "Não informado", "posicao": "A28"},
{"Título": "O Grande Gênio Albert Einstein", "Autor": "Fernanda Cury", "Ano": "2003", "posicao": "A29"},
{"Título": "Internet como expressão da indústria cultural", "Autor": "Marcimedes Martins da Silva", "Ano": "2008", "posicao": "A30"},
{"Título": "Dalai Lama", "Autor": "Biografia", "Ano": "Não informado", "posicao": "A31"},
{"Título": "Mahatma Gandhi", "Autor": "Biografia", "Ano": "Não informado", "posicao": "A32"},
{"Título": "A vida e o pensamento de Che Guevara", "Autor": "Morgana Gomes", "Ano": "Não informado", "posicao": "A33"},
{"Título": "Elvis", "Autor": "Biografia", "Ano": "2008", "posicao": "B1"},
{"Título": "Esmeralda", "Autor": "Zibia Gasparetto", "Ano": "2016", "posicao": "B2"},
{"Título": "Comer, Rezar e Amar", "Autor": "Elizabeth Gilbert", "Ano": "2010", "posicao": "B3"},
{"Título": "Jacqueline Kennedy", "Autor": "Biografia", "Ano": "1999", "posicao": "B4"},
{"Título": "Raul Seixas", "Autor": "Biografia", "Ano": "1999", "posicao": "B5"},
{"Título": "Ayrton Senna", "Autor": "Biografia", "Ano": "2006", "posicao": "B6"},
{"Título": "A vida e o pensamento de Charles Chaplin", "Autor": "Morgana Gomes", "Ano": "", "posicao": "B7"},
{"Título": "Ouvindo Estrelas", "Autor": "Marco Mazzola", "Ano": "2007", "posicao": "B8"},
{"Título": "Recordando Ayrton Senna", "Autor": "Alan Henry", "Ano": "", "posicao": "B9"},
{"Título": "Beatles", "Autor": "Revista", "Ano": "2009", "posicao": "B10"},
{"Título": "Raul Seixas", "Autor": "Revista", "Ano": "2004", "posicao": "B11"},
{"Título": "Michael Jackson - Uma História Sem Fim", "Autor": "Antero Leivas", "Ano": "", "posicao": "B12"},
{"Título": "Beatles - A história ilustrada", "Autor": "Biografia", "Ano": "", "posicao": "B13"},
{"Título": "Steve Jobs", "Autor": "Revista", "Ano": "", "posicao": "B14"},
{"Título": "Bob Marley", "Autor": "Fernando Moretti", "Ano": "", "posicao": "B15"},
{"Título": "Caymmi", "Autor": "Biografia", "Ano": "2014", "posicao": "B16"},
{"Título": "The Beatles - A maior banda de todos os tempos", "Autor": "Antero Leivas", "Ano": "2018", "posicao": "B17"},
{"Título": "De frente com a verdade", "Autor": "Mônica de Castro", "Ano": "2010", "posicao": "B18"},
{"Título": "A verdade de cada um", "Autor": "Zibia Gasparetto", "Ano": "2014", "posicao": "B19"},
{"Título": "Fotografia com bom senso", "Autor": "Leonardo Gaunt", "Ano": "1997", "posicao": "B20"},
{"Título": "Quando O Amor Vence O Ódio", "Autor": "Marlene Saes", "Ano": "2013", "posicao": "B21"},
{"Título": "Vencendo o passado", "Autor": "Zibia Gasparetto", "Ano": "2008", "posicao": "B22"},
{"Título": "Ainda sou Eu", "Autor": "Jojo Moyes", "Ano": "2018", "posicao": "B23"},
{"Título": "O morro dos ventos", "Autor": "Vera Lúcia Marinzeck de Carvalho", "Ano": "2018", "posicao": "B24"},
{"Título": "Vida Após a Morte", "Autor": "D.Scott Rogo", "Ano": "1991", "posicao": "B25"},
{"Título": "Força Para Viver", "Autor": "Jamie Buckingham", "Ano": "1983", "posicao": "B26"},
{"Título": "Ah, se eu pudesse voltar no Tempo", "Autor": "Antônio Carlos e Vera Lúcia Marinzeck", "Ano": "2006", "posicao": "B27"},
{"Título": "A perde de Entes Queridos", "Autor": "Zilda Giunchetti Rosin", "Ano": "", "posicao": "B28"},
{"Título": "O Segredo da Libélula", "Autor": "Scott Blum", "Ano": "2009", "posicao": "B29"},
{"Título": "Pôr do Sol no Central Park", "Autor": "Sarah Morgan", "Ano": "2016", "posicao": "B30"},
{"Título": "Ponte das Lembranças", "Autor": "Eliana Machado Coelho", "Ano": "2010", "posicao": "B31"},
{"Título": "Entre Duas Vidas", "Autor": "Francisco Cândido Xavier e Elias Barbosa", "Ano": "", "posicao": "B32"},
{"Título": "O Advogado de Deus", "Autor": "Lucius Zibia Gasparetto", "Ano": "1999", "posicao": "B33"},
{"Título": "O Caso de Reencarnação", "Autor": "Yvonne A.Pereira", "Ano": "2009", "posicao": "B34"},
{"Título": "De Volta à Cabana", "Autor": "C.Baxter Kruger", "Ano": "2011", "posicao": "B35"},
{"Título": "Dois a Dois", "Autor": "Nicholas Sparks", "Ano": "2016", "posicao": "B36"},
{"Título": "Entra a Razão e o Coração", "Autor": "Maria Gertrudes Coelho Maluf", "Ano": "1994", "posicao": "B37"},
{"Título": "Voltas que a vida dá", "Autor": "Zibia M.Gasparetto", "Ano": "", "posicao": "B38"},
{"Título": "Reencontros", "Autor": "Francisco Cândido Xavier", "Ano": "", "posicao": "B39"},
{"Título": "Mundo Pararelo", "Autor": "Neide Maganba", "Ano": "2001", "posicao": "B40"},
{"Título": "Lindos casos de bezerra de Menezes", "Autor": "Ramiro Gama", "Ano": "1983", "posicao": "B41"},
{"Título": "Fenômenos Espíritas no Mundo Animal", "Autor": "Carlos Bernardo Loureiro", "Ano": "1997", "posicao": "B42"},
{"Título": "Almas Gêmeas", "Autor": "Nicholas Sparks", "Ano": "2018", "posicao": "B43"},
{"Título": "Escravo Bernardino", "Autor": "Vera Lúcia Marinzeck de Carvalho", "Ano": "1998", "posicao": "B44"},
{"Título": "A Escolha", "Autor": "Nicholas Sparks", "Ano": "2010", "posicao": "B45"},
{"Título": "A vida é feita de Escolhas", "Autor": "Elisa Masselli", "Ano": "2010", "posicao": "B46"},
{"Título": "Quando é Preciso Partir", "Autor": "Berenice Germano", "Ano": "2011", "posicao": "B47"},
{"Título": "Você Faz o Amanhã", "Autor": "Marcelo Cezar", "Ano": "2005", "posicao": "B48"},
{"Título": "Entre Quatro Paredes", "Autor": "B.A. Paris", "Ano": "2016", "posicao": "B49"},
{"Título": "Auto Escola - Sérgio", "Autor": "Revista", "Ano": "", "posicao": "B50"},
{"Título": "História de Humor", "Autor": "Revista", "Ano": "", "posicao": "B51"},
{"Título": "Cérebro Lado Esquerdo Lado Direito", "Autor": "Charles Phillips", "Ano": "2009", "posicao": "B52"},
{"Título": "52 Maneiras de Melhorar a Memória", "Autor": "", "Ano": "2008", "posicao": "B53"},
{"Título": "Guia de Orientação - Sobre uso de Experiências com réplicas de pirâmides", "Autor": "Revistinha", "Ano": "", "posicao": "B54"},
{"Título": "Guia de Ourinhos", "Autor": "Revista", "Ano": "2011", "posicao": "B55"},
{"Título": "Orientador de Exercícios Físicos e Respiratórios", "Autor": "Revistinha", "Ano": "", "posicao": "B56"},
{"Título": "Vida e Obra - Miguel de Cervantes", "Autor": "Miguel de Cervantes", "Ano": "2002", "posicao": "B57"},
{"Título": "Vida e Obra - Dante Aligbieri", "Autor": "Dante Aligbieri", "Ano": "2002", "posicao": "B58"}

]