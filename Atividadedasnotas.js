//criar um alert para imprimir mensagem completa
//média >=5
//São cinco alunos com 3 notas cada 1

mensagem = "";
alert ( " Digite o nome da aluna");
aluna1= prompt ();
alert (" Digite as notas do seu semestre sepradas por vírgulas");
notas=prompt();
notas= notas.split(",");
notaAluna1=notas[0];
notaAluna2= notas[1];
notaAluna3=notas[2];
mediaDaAluna1 = (parseFloat(notaAluna1) + parseFloat (notaAluna2) + parseFloat (notaAluna3))/3;
mensagem = mensagem + "A aluna "+aluna1+" obteve média "+mediaDaAluna1+ " e foi ";
if (mediaDaAluna1 >=5){
mensagem = mensagem + " aprovada, PARABÉNS! \n";
}else mensagem = mensagem + " reprovada. ";
mensagem = "";

alert ( " Digite o nome do aluno");
aluna2= prompt ();
alert (" Digite as notas do seu semestre sepradas por vírgulas");
notas=prompt();
notas= notas.split(",");
notaAluna1=notas[0];
notaAluna2= notas[1];
notaAluna3=notas[2];
mediaDaAluna2 = (parseFloat(notaAluna1) + parseFloat (notaAluna2) + parseFloat (notaAluna3))/3;
mensagem = mensagem + "A aluna "+aluna2+" obteve média "+mediaDaAluna2+ " e foi ";
if (mediaDaAluno2 >=5){
mensagem = mensagem + " aprovada, PARABÉNS!" ;
}else mensagem = mensagem + " reprovada. ";

alert ( " Digite o nome do aluno");
aluna3= prompt ();
alert (" Digite as notas do seu semestre sepradas por vírgulas");
notas=prompt();
notas= notas.split(",");
notaAluna1=notas[0];
notaAluna2= notas[1];
notaAluna3=notas[2];
mediaDaAluna3 = (parseFloat(notaAluna1) + parseFloat (notaAluna2) + parseFloat (notaAluna3))/3;
mensagem = mensagem + "A aluna "+aluna3+" obteve média "+mediaDaAluna3+ " e foi ";
if (mediaDaAluna3 >=5){
mensagem = mensagem + " aprovada, PARABÉNS! ";
}else mensagem = mensagem + " reprovado. Que pena, vamos tentar mais uma vez? ";


alert ( " Digite o nome do aluno");
aluno4= prompt ();
alert (" Digite as notas do seu semestre sepradas por vírgulas");
notas=prompt();
notas= notas.split(",");
notaAluno1=notas[0];
notaAluno2= notas[1];
notaAluno3=notas[2];
mediaDoAluno4 = (parseFloat(notaAluno1) + parseFloat (notaAluno2) + parseFloat (notaAluno3))/3;
mensagem = mensagem + "A aluna "+aluno4+" obteve média "+mediaDoAluno4+ " e foi ";
if (mediaDoAluno4 >=5){
mensagem = mensagem + " aprovado, PARABÉNS! ";
}else mensagem = mensagem + " reprovado. Que pena, vamos tentar mais uma vez? ";

alert ( " Digite o nome do aluno");
aluno5= prompt ();
alert (" Digite as notas do seu semestre sepradas por vírgulas");
notas=prompt();
notas= notas.split(",");
notaAluno1=notas[0];
notaAluno2= notas[1];
notaAluno3=notas[2];
mediaDoAluno5 = (parseFloat(notaAluno1) + parseFloat (notaAluno2) + parseFloat (notaAluno3))/3;
mensagem = mensagem + "A aluna "+aluno5+" obteve média "+mediaDoAluno5+ " e foi ";
if (mediaDoAluno5 >=5){
mensagem = mensagem + " aprovado, PARABÉNS! ";
}else mensagem = mensagem + " reprovado. Que pena, vamos tentar mais uma vez? ";

alert (mensagem)