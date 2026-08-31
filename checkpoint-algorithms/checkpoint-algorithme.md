    // ALGO LECTEUR DE TEXTE

    // DECLARATION DES  VARIABLES:
    car          : CHARACTER    // Variable pour stocker chaque caractère
    longueur     : INTEGER      // Compteur du nombre total de caractères
    nbMots       : INTEGER      // Compteur du nombre de mots 
    nbVoyelles   : INTEGER      // Compteur du nombre de voyelles

    // INITIALISATION DES TROIS COMPTEURS
    
    longueur    :=  0           // On commence à 0 car aucun caractère n'a encore été lu
    nbMots      := 1           // On commence à 1 car une phrase contient au moins un mot
    nbVoyelles  := 0           // On commence à 0 car aucune voyelle n'a encore été lu

    //LE CORPS DU PROGRAMME

BEGIN

    // DEMANDE À L'UTILISATEUR ET LECTURE DU PREMIER CARACTÈRE
    // La phrase DOIT se terminer par un point (.) pour signaler la fin.
    
    WRITE "Entrez une phrase terminer par un point : "
    READ car                 // Lire le premier caractère saisi par l'utilisateur

    // ÉTAPE 3 : BOUCLE CARACTÈRE PAR CARACTÈRE
    // Le point (.) signal de fin
    
    WHILE car ≠ '.' DO       // Continuer la boucle tant que car n'est PAS un point
        
        // COMPTER LE CARACTÈRE
        // Chaque caractère lu (sauf le point final) augmente la longueur totale de la phrase de 1.
        
        longueur := longueur + 1   // Incrémenter le compteur de caractères
        
        
        // COMPTER LES MOTS
        // Chaque fois que nous trouvons un espace ' ', cela signifie qu'un nouveau mot suit

        IF car = ' ' THEN
            nbMots := nbMots + 1   // Incrémenter le compteur de mots quand un espace est trouvé
        END IF
        
        
        
        // COMPTER LES VOYELLES
        
        IF car = 'a' OR car = 'e' OR car = 'i' OR car = 'o' OR car = 'u' 
        OR car = 'A' OR car = 'E' OR car = 'I' OR car = 'O' OR car = 'U' THEN
            
            nbVoyelles := nbVoyelles + 1   // Incrémenter le compteur de voyelles
            // Ce caractère est une voyelle, donc on le compte
            
        END IF
        
        // LIRE LE CARACTÈRE SUIVANT
        
        READ car       // Lire le caractère suivant depuis l'entrée
        // La boucle va retourner à  WHILE
    END WHILE


    // ÉTAPE 5 : AFFICHAGE DES RÉSULTATS
    
    WRITE "Longueur de la phrase (caractères) : ", longueur
    WRITE "Nombre de mots : ", nbMots
    WRITE "Nombre de voyelles : ", nbVoyelles

END