{
	var nome,
		idade,
		gasto_diario,
		tempo_estudo,
		tempo_livre,
		relac;
	
	nome = prompt ("Insira seu nome:","roberto");
	idade = parseInt (prompt ("Insira sua idade:"));
	gasto_diario = parseFloat (prompt ("Qual seu gasto diario com locomocao?"));
	tempo_estudo = parseFloat (prompt ("Quanto tempo estuda em casa semanalmente?"));
	tempo_livre = parseFloat (prompt ("Quanto tempo Livre tem semanalmente?"));

	relac = (tempo_livre * 100) / (tempo_livre + tempo_estudo);

	relac = relac.toFixed(2);
}




/*
Nome;
• Idade;
• Gasto diário com locomoção: (em R$);
• Tempo semanal de estudo extraclasse (em h);
• Tempo semanal livre (em h);
• Mostre seus dados; e
• Relação do tempo livre com o tempo total: tempo livre*100/(tempo livre +
tempo estudo)
*/