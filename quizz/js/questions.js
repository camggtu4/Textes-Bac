const quiz = [
	{
		q:'Comment dit-on offrir ?',
		options:['anbieten', 'geben','gehen',"Angebot" ],
		answer:0
	},
	{
		q:'Comment dit-on à présent ?',
		options:['zeigen', 'nun','nah',"jede" ],
		answer:1
	},
		{
		q:'Comment dit-on le l\’offre',
		options:['zeigen', 'anbieten','das Angebot'," das Geschenk" ],
		answer:2
	},
	{
		q:'Que veut dire die Nachfrage ?',
		options:['la demande', 'offrir','l\'offre',"manger" ],
		answer:0
	},
	{
		q:'Comment dit-on concurrence ?',
		options:['der Wettbewerb', 'das Unternehmen','die Umwelt',"die Wirtschaft" ],
		answer:0
	},
	{
		q:'Que veut dire die Wirtschaft ?',
		options:["l\’économie ", 'l\’environnement','à présent',"le monde" ],
		answer:0
	},
	{
		q:'Que veut dire meist ?',
		options:["la plupart du temps ", 'refuser','le concept',"Prudent" ],
		answer:0
	},
	{
		q:'Que veut dire die Umwelt ?',
		options:["l\’environnement ", 'l\’économie','le concept',"le monde" ],
		answer:0
	},
	{
		q:'Comment dit-on l\’entreprise ?',
		options:["das Unternehmen ", 'die Wirtschaft','Nachfrage',"wirtschaftlisch" ],
		answer:0
	},
	{
		q:'Comment dit-on les effets',
		options:["die Auswirkungen ", 'das Unternehmen','völlig verstreut',"der Begriff" ],
		answer:0
	},
	{
		q:'Que veut dire die Zukunft ?',
		options:["le futur ", 'le concept','Le passé',"Prudent" ],
		answer:0
	},
	{
		q:'Que veut dire die die Möglichkeit ?',
		options:["La possibilité ", 'le concept','la communauté',"les effets" ],
		answer:0
	},
	{
		q:'Comment dit-on économiquement ?',
		options:["wirtschaftlisch ", 'Umwelt','der Wettbewerb',"die Wirtschaft" ],
		answer:0
	},
	{
		q:'Comment dit-on complêtement dispersés ?',
		options:["völlig verstreut ", 'wählen','Begriff',"wachsen" ],
		answer:0
	},
	{
		q:'Comment dit-on refuser ?',
		options:["ab-lehnen ", 'die Zukunft','meist',"Nachfrage" ],
		answer:0
	},
	{
		q:'Comment dit-on Le passé ?',
		options:["die Vergangenheit ", 'die Zukunft','meist',"nah" ],
		answer:0
	},
	{
		q:'Comment dit-on Prudent ?',
		options:["vorsichtig ", 'verschieden','besitzen',"vereinfachen" ],
		answer:0
	},
	{
		q:'Comment dit-on voter / choisir ?',
		options:["wählen ", 'verschieden','besitzen',"vereinfachen" ],
		answer:0
	},
	{
		q:'Que veut dire geschäftstüchtig ?',
		options:["doué en affaire ", 'complêtement dispersés','La possibilité',"l’entreprise" ],
		answer:0
	},
	{
		q:'Que veut dire die Gemeinschaft ?',
		options:[" la communauté", 'la société','La possibilité',"le réseau" ],
		answer:0
	},
	{
		q:'Que veut dire die die Gesellschaft ?',
		options:[" la société", 'la communauté','La possibilité',"le réseau" ],
		answer:0
	},
	{
		q:'Que veut dire die der Begriff ?',
		options:[" le concept", 'la langue','le futur',"le réseau" ],
		answer:0
	},
	{
		q:'Comment dit-on facile ?',
		options:[" leicht", 'austauschen','weder',"vorsichtig" ],
		answer:0
	},
	{
		q:'Comment dit-on les marchandises ?',
		options:[" die Waren", 'der Lohn','das Netz ',"der Begriff" ],
		answer:0
	},
	{
		q:'Comment dit-on le salaire ?',
		options:[" der Lohn", 'die Waren','das Netz ',"der Begriff" ],
		answer:0
	},
	{
		q:'Comment dit-on le échanger ?',
		options:[" austauschen", 'heiraten','weltweit ',"gut bezahlt" ],
		answer:0
	},
	{
		q:'Comment dit-on l\’arrière-plan ?',
		options:[" der Hintergrund", 'fremd ','vorsichtig ',"der Heimweh" ],
		answer:0
	},
	{
		q:'Comment dit-on c\’est pourquoi ?',
		options:[" deshalb", 'fremd ','vorsichtig ',"der Heimweh" ],
		answer:0
	},
	{
		q:'Que veut dire das Netz  ?',
		options:[" le réseau", 'la valeur','La racine',"le paysage" ],
		answer:0
	},
	{
		q:'Que veut dire weltweit  ?',
		options:[" à l\’échelle mondiale", 'étranger','l\’entreprise',"l\’environnement" ],
		answer:0
	},
	{
		q:'Que veut dire das Ausland  ?',
		options:["étranger", 'la langue','le mal du pays',"le pays" ],
		answer:0
	},
	{
		q:'Que veut dire die Heimat   ?',
		options:["patrie", 'étranger','le mal du pays',"le pays" ],
		answer:0
	},
	{
		q:'Que veut dire der Auftrag   ?',
		options:["La mission", 'La fondation','le souhait',"l\’origine" ],
		answer:0
	},
	{
		q:'Que veut dire die Stiftung   ?',
		options:["La fondation", 'La mission','le souhait',"l\’origine" ],
		answer:0
	},
	{
		q:'Que veut dire Einladen ?',
		options:["inviter", 'penser','la fuite',"l’ambiance" ],
		answer:0
	},
	{
		q:'Comment dit-on En même temps ?',
		options:["gleichzeitig", 'vergeblich','die Gedanken',"denken " ],
		answer:0
	},
	{
		q:'Comment dit-on le souhait ?',
		options:["der Wunsch ", 'die Bedingung','der Auftrag',"die Stiftung " ],
		answer:0
	},
	{
		q:'Comment dit-on personne ?',
		options:["niemand ", 'jemand','jdn unterstützen',"die Flucht " ],
		answer:0
	},
	{
		q:'Comment dit-on en vain ?',
		options:["vergeblich ", 'gleichzeitig','verlobt',"begraben " ],
		answer:0
	},
	{
		q:'Comment dit-on les l\’oeuvre ?',
		options:["das Werk  ", 'die Wurzeln','die Herkunft',"die Entscheidung " ],
		answer:0
	},
	{
		q:'Comment dit-on les pensées ?',
		options:["die Gedanken ", 'die Gedanken','die Herkunft',"die Entdeckung " ],
		answer:0
	},
	{
		q:'Que veut dire der Schatten   ?',
		options:["l\’ombre", 'le chasseur','l\’origine',"la condition" ],
		answer:0
	},
	{
		q:'Que veut dire der Jäger   ?',
		options:["le chasseur", 'l\'ombre','l\’origine',"la condition" ],
		answer:0
	},
	{
		q:'Que veut dire aus…stammen   ?',
		options:["être originaire de", 'être issu de l‘immigration','quelqu‘un',"arriver à qqch" ],
		answer:0
	},
	{
		q:'Que veut dire die Herkunft   ?',
		options:["l\’origine", 'l\'ombre','la condition',"la protection" ],
		answer:0
	},
	{
		q:'Que veut dire die Flucht   ?',
		options:["la fuite", 'les pensées','le souhait',"la protection" ],
		answer:0
	},
	{
		q:'Que veut dire fremd sein ?',
		options:["être étranger", 'la langue','le cours de langue',"se trouver entre deux cultures" ],
		answer:0
	},
	{
		q:'Que veut dire das Flüchtlingsheim ?',
		options:["le foyer des réfugiés", 'être étranger','le bonheur',"le procès" ],
		answer:0
	},
	{
		q:'Que veut dire jdn unterstützen ?',
		options:["soutenir qqn", 'être étranger','le bonheur',"être originaire de" ],
		answer:0
	},
	{
		q:'Que veut dire sich integrieren ?',
		options:["s\’intégrer", 'être étranger','bien payé',"doué en affaire" ],
		answer:0
	},
	{
		q:'Que veut dire auf jemanden zugehen ?',
		options:["aller au contact de qqn", 'soutenir qqn','être étranger',"s\’occuper de qqn" ],
		answer:0
	},
	{
		q:'Que veut dire die Stimmung ?',
		options:["l\’ambiance", 'la protection','la fuite',"l’oeuvre" ],
		answer:0
	},
	{
		q:'Que veut dire die Bedingung ?',
		options:["la condition", 'la protection','la décision',"le chasseur" ],
		answer:0
	},
	{
		q:'Que veut dire die Entscheidung ?',
		options:["la décision", 'la condition','la décision',"le chasseur" ],
		answer:0
	},
	{
		q:'Que veut dire einreisen ?',
		options:["voyager ", 's’occuper de qqn','penser',"inviter" ],
		answer:0
	},
	{
		q:'Que veut dire der Schutz ?',
		options:["la protection ", 'la condition','la décision',"la découverte" ],
		answer:0
	},
	{
		q:'Que veut dire etwas schaffen ?',
		options:["arriver à qqch ", 'se sentir bien','en vain',"En même temps" ],
		answer:0
	},
]	