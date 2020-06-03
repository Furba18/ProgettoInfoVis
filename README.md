# ProgettoInfoVis
Mini-progetto per il corso di Visualizzazione delle Informazioni, Roma Tre 2019/2020

Traccia: 
Crea un file json con dei dati multivariati: ci sono 10 data-point e
ogni data-point ha quattro variabili quantitative i cui valori sono
tutti positivi. In base a questi dati disegna 10 aeroplanini nell'area
di disegno (ogni aeroplanino corrisponde ad un data-point). La prima
variabile è usata per la lunghezza degli aeroplanini, la seconda
variabile per la larghezza delle ali, la terza variabile dimensione
della coda. La quarta variabile non viene per il momento utilizzata.
Facendo click con il pulsante sinistro su una caratteristica di un areo
la variabile corrispondente non viene più utilizzata per quella
caratteristica (per tutti gli aeroplanini) e viene sostituita dalla
variabile al momento non utilizzata (all'inizio è sesta variabile).
Cliccando ancora la sostituizione avviene di nuovo. Fai in modo che le
transizioni avvengano in modo progressivo con un'animazione fluida.

///////////////
Sono state creati diversi file per portare a termine il lavoro. Un file index.html per avviare il progetto, un file js per
lo sviluppo del progetto vero e proprio e un file json per trascrivere le coordinate e i valori dei punti. 
Gli aeroplanini rappresentati sono stilizzati, e sono stati creati utilizzando un rettangolo come corpo centrale e due
triangoli differenti per creare la coda e le ali. Al click del mouse cambiano le dimensioni, come richiesto, variando
secondo un quarto paramentro settato nel file json ma questo processo avviene iterativamente, variando
costantemente il suo valore in base a cosa è stato precedentemente cliccato. 
In più è stata aggiunta una funzione di mouseover/mouseout per scurire/schiarire la zona su cui si sta per effettuare
l'animazione, per rendere più visibile la zona di applicabilità.
////////////
