import q1 from './images2/q1.jpg'
import q2 from './images2/q2.jpg'
import q3 from './images2/q3.jpg'
import q4 from './images2/q4.jpg'
import q5 from './images2/q5.jpg'
import q6 from './images2/q6.jpg'
import q7 from './images2/q7.jpg'
import q8 from './images2/q8.jpg'
import q9 from './images2/q9.jpg'
import q10 from './images2/q10.jpg'
import q11 from './images2/q11.jpg'
import q12 from './images2/q12.jpg'
import q13 from './images2/q13.jpg'
import q14 from './images2/q14.jpg'
import q15 from './images2/q15.jpg'
import q16 from './images2/q16.jpg'
import q17 from './images2/q17.jpg'
import q18 from './images2/q18.jpg'
import q19 from './images2/q19.jpg'
import q20 from './images2/q20.jpg'
import q21 from './images2/q21.jpg'
import q22 from './images2/q22.jpg'
import q23 from './images2/q23.gif'
import q24 from './images2/q24.jpg'
import q25 from './images2/q25.jpg'
import q26 from './images2/q26.gif'
import q27 from './images2/q27.jpg'
import q28 from './images2/q28.jpg'
import q29 from './images2/q29.jpg'
import q30 from './images2/q30.jpg'



export default   [
    {   
        image: q1,
        questionText: 'A cette intersection, je laisse la priorité à droite :', 
        correctanswer:'Reponse B',
        explanation: ` Vous devez céder le passage aux véhicule venant d'une route à droite. Ici, il s'agit non pas d'une route mais d'un chemin de terre. Un véhicule venant de ce chemin ne serait pas considéré comme prioritaire et devrait vous céder le passage.`,
        answerOptions: [
            { answerText: 'A : Oui', isCorrect: false },
            { answerText: 'B : Non', isCorrect: true },
           
        ],
    },
    {
        image: q2,
        questionText: 'Le panneau de danger prend effet à X  et il indique une succession de virages dont le 1er est  :',
        correctanswer:'Reponse C',
        explanation:`En l'absence d'un panonceau indiquant la distance entre le panneau et le danger éventuel, ces panneaux sont placés à 50 mètres du danger en agglomération, et à 150 mètres hors agglomération. Le panonceau indique que la zone de virage dangereux s'étend sur 6 kilomètres. La première courbe de la flèche indique que le premier virage dangereux sera un virage à droite.`,
        answerOptions: [
            { answerText: 'A: 6km , à droite ', isCorrect: false},
            { answerText: 'B : 6km , à gauche', isCorrect: false },
            { answerText: 'C : 150m , à droite', isCorrect: true},
            { answerText: 'D : 150m , à gauche', isCorrect: false },
            
        ],
    },
    {  
        image: q3,
        questionText: 'Je peux dépasser le camion :',
        correctanswer:'Reponse B',
        explanation:`Les flèches de rabattement sont, en général, au nombre de 3 mais peuvent se trouver par 2 en agglomération à cause du manque de place. Il vous est interdit d'entamer un dépassement à la hauteur de ces flèches, dans cette situation vous ne pouvez donc pas dépasser.`,
        answerOptions: [
            { answerText: 'A : Oui', isCorrect: false },
            { answerText: 'B : Non', isCorrect: true },
            
        ],
    },
    {
        image: q4,
        questionText: `Avant de partir, je laisse tourner mon moteur pour qu'il monte en température :`,
        correctanswer:'Reponse B',
        explanation:`Il est inutile de faire chauffer votre moteur à l'arrêt. Conduire sans à-coups et à vitesse modérée durant cinq kilomètres lui permet d'atteindre sa température normale.`,
        answerOptions: [
            { answerText: 'A : Oui', isCorrect: false },
            { answerText: 'B : Non', isCorrect: true },
           
        ],
    },
    {
        image: q5,
        questionText: `Il neige, je peux rouler avec les feux de :`,
        correctanswer:'Reponse A',
        explanation:`Hors agglomération, vous avez l'obligation de rouler avec les feux de croisement lorsqu'il neige. Les feux de brouillard avant ou arrière sont facultatifs.`,
        answerOptions: [
            { answerText: 'A : Croisement ', isCorrect: true },
            { answerText: 'B : position et antibrouillard avant ou arrière', isCorrect: false },
            
        ],
    },
    {
        image: q6,
        questionText: `En tant qu'automobiliste, vous devez être plus vigilant lorsque :`,
        correctanswer:'Reponse A',
        explanation:`Lorsque vous circulez près d'un tramway à l'arrêt, vous devez redoubler de vigilance car il pourrait cacher des piétons à votre vue.`,
        answerOptions: [
            { answerText: 'A :Le tramway est arrêté', isCorrect: true },
            { answerText: 'B : Le tramway circule', isCorrect: false },
            
        ],
    },
    {
        image: q7,
        questionText: `Je viens de remplir un constat amiable avec un autre conducteur. Je peux modifier les déclarations inscrites au recto :`,
        correctanswer:'Reponse B',
        explanation:`Une fois complété et signé le constat ne doit pas être modifié. Par contre, il est possible d'apporter des précisions au verso du document.`,
        answerOptions: [
            { answerText: 'A : Oui', isCorrect: false },
            { answerText: 'B : Non', isCorrect: true },
            
        ],
    },
    {
        image: q8,
        questionText: `En conduisant, je peux utiliser mon portable pour écrire un texto ou composer un numéro :`,
        correctanswer:'Reponse B',
        explanation:`Au volant, il est interdit de tenir en main un téléphone portable que ce soit pour écrire un texto ou pour composer un numéro.`,
        answerOptions: [
            { answerText: 'A : Oui', isCorrect: false },
            { answerText: 'B : Non', isCorrect: true },
            
        ],
    },
    {
        image: q9,
        questionText: `Je viens de dépasser l'emplacement d'arrêt d'urgence lorsque mon véhicule tombe en panne :`,
        correctanswer:'Reponse C',
        explanation:`Faire une marche arrière serait dangereux et totalement interdit. Je mets donc mes feux de détresse pour avertir les autres conducteurs et serre mon véhicule le plus possible sur la droite.`,
        answerOptions: [
            { answerText: `A : j'allume mes feux de croisement `, isCorrect: false },
            { answerText: 'B :je tente de reculer ', isCorrect: false },
            { answerText: `C : je me serre le plus à droite possible et j'allume mes feux de détresse ` , isCorrect: true },
            
        ],
    },
    {
        image: q10,
        questionText: `Sur la voie d'accélération, pour entrer sur l'autoroute, je dois :        `,
        correctanswer:'Reponse A',
        explanation:`Lors de votre insertion sur l'autoroute, vous devez profiter de la voie d'accélération pour vous mettre à une allure qui vous permettra de vous insérer de manière fluide dans le flot des véhicules déjà engagés. Vous devez cependant céder le passage aux usagers déjà présents avant de changer de voie, pour ne pas gêner la circulation.`,
        answerOptions: [
            { answerText: `A:céder le passage aux usagers qui sont déja engagés`, isCorrect: true },
            { answerText: `B:accélérer jusqu'à 110km/h avnt de m'engager`, isCorrect: false },
            { answerText: `C:ralentir et m'arrêter si l'insertion m'est refusée par les autres usagers`, isCorrect: false },
            
        ],
    },
    {
        image: q11,
        questionText: `A l'intersection, je devrait la priorité à droite et à gauche`,
        correctanswer:'Reponse B',
        explanation:` Le feu est vert, je passe.`,
        answerOptions: [
            { answerText: `A: Oui`, isCorrect: false },
            { answerText: `B: Non`, isCorrect: true },
           
            
        ],
    },
    {   
        image: q12,
        questionText: `Je pourrais tourner à droite`,
        correctanswer:'Reponse B',
        explanation:`Le panneau d'interdiction de tourner à droite concerne les poids lourds.. `,
        answerOptions: [
            { answerText: `A: Oui`, isCorrect: false },
            { answerText: `B: Non`, isCorrect: true },
            
        ],
    },
    {
        image: q13,
        questionText: `Pour tourner à gauche, je me place`,
        correctanswer:'Reponse C',
        explanation: `La largeur de la voie m'indique que je suis sur une voie à sens unique. Je me place à gauche pour tourner à gauche.`,
        answerOptions: 
        [
            { answerText: `A: à droite`, isCorrect: false },
            { answerText: `B: au milieu `, isCorrect: false },
            { answerText: `C: a gauche `, isCorrect: true },
            
        ],
    },
    {
        image: q14,
        questionText: `Je roule plus vite que le véhicule à ma gauche, je peux le dépasser par la droite `,
        correctanswer:'Reponse C',
        explanation:`Le véhicule de gauche est en train de me dépasser, je reste sur voie. Je maintiens mon allure pour respecter la distance de sécurité avec le véhicule devant moi. `,
        answerOptions: [
            { answerText: `A: à droite`, isCorrect: false },
            { answerText: `B: au milieu `, isCorrect: false },
            { answerText: `C: a gauche `, isCorrect: true },
            
        ],
    },
    {
        image: q15,
        questionText: `Après le panneau je pourrais rouler à`,
        correctanswer:'Reponse C',
        explanation:` Hors agglomération, la limitation de vitesse est de 90km/h sur les routes.`,
        answerOptions: [
            { answerText: `A: 70km/h`, isCorrect: false },
            { answerText: `B: 80km/h `, isCorrect: false },
            { answerText: `C: 90km/h `, isCorrect: true },
            
        ],
    },
    {
        image: q16,
        questionText: `La signalisation m'indique`,
        correctanswer:'Reponse D',
        explanation:` Le panneau jaune m'indique d'une route à caractère prioritaire. Le panneau plus loin me rappelle la limitation de vitesse à 90 km/h.`,
        answerOptions: [
            { answerText: `A: une route à ses unique ,je pourrais rouler à 80km/h `, isCorrect: false},
            { answerText: `B: une route à ses unique ,je pourrais rouler à 90km/h `, isCorrect: false},
            { answerText: `C: une route à caractère prioritaire ,je pourrais rouler a 80km/h `, isCorrect: false},
            { answerText: `D: une route à caractère prioritaire ,je pourrais rouler a 90km/h `, isCorrect: true},
            
        ],
    },
    {
        image: q17,
        questionText: `Le passage à niveau se situe à`,
        correctanswer:'Reponse C',
        explanation:` La balise blanche aux traits rouges m'indique que le danger se trouve à 150m.`,
        answerOptions: [
            { answerText: `A: 50m`, isCorrect: false },
            { answerText: `B: 100m `, isCorrect: false},
            { answerText: `C: 150m `, isCorrect: true}, 
        ],
    },
    {
        image: q18,
        questionText: `Je suis en infraction si je conduis avec un taux d'alcoolémie de `,
        correctanswer:'Reponse A',
        explanation:``,
        answerOptions: [
            { answerText: `A: 0.6g par litre de sang `, isCorrect: true },
            { answerText: `B:0.25g par litre de sang `, isCorrect: false},
             
        ],
    },
    {
        image: q19,
        questionText: `La nuit en agglomération, je peux rouler en`,
        correctanswer:'Reponse B',
        explanation:``,
        answerOptions: [
            { answerText: `feu de route`, isCorrect: false },
            { answerText: `feu de croisement ou feux de position`, isCorrect: true},
            { answerText: `feux anti brouillard avant`, isCorrect:false}, 
        ],
    },
    {
        image: q20,
        questionText: `Cette voiture roule à une vitesse de 70km/h.je peux la dépasser`,
        correctanswer:'Reponse C',
        explanation:`Les panneaux indiquent un virage dangereux pour les deux sens de circulation.`,
        answerOptions: [
            { answerText: `A: un virage a un sens unique `, isCorrect: false },
            { answerText: `B: un sens unique`, isCorrect: false},
            { answerText: `C: un virage a double sens `, isCorrect: true },
            
        ],
    },
    {
        image: q21,
        questionText: `Le Garrot doit être utilisé`,
        correctanswer:'Reponse A',
        explanation:`Le garrot est le dernier recours pour un sauveteur seul avec plusieurs blessure, s'il y a une autre
        personne (en plus de la victime) il ne faut jamais faire de garrot.
        On peut le faire uniquement sur le bras (entre l'épaule et le coude) ou sur la cuisse cela permet de
        plaquer la circulation contre l'os.`,
        answerOptions: [
            { answerText: `Si le sauveteur est seul en face de plusieurs blessures`, isCorrect:true},
            { answerText: `En cas d'asphyxie`, isCorrect: false },
            { answerText: `En cas d'hémorragie abondante`, isCorrect: false},
        ],
    },
    {
        image: q22,
        questionText: `A cet endroit étroit de la chausée `,
        correctanswer:'Reponse A',
        explanation:`En agglomération et lorsque la partie libre de la chauussée ne permet pas d'effectuer le croisement,
        les véhicules légers doivent réduire leurs vitesses et le cas échéant serrer le plus possilble à droite
        pour laisser le passage aux autobus etautocars. Je dois donc céder le passage. `,
        answerOptions: [
            { answerText: `je dois céder le passage `, isCorrect: true },
            { answerText: `je passe sans céder le passage`, isCorrect: false },
            { answerText: `je klaxonne et je passe`, isCorrect: false },
            
        ],
    },
    {
        image: q23,
        questionText: `Dans cette situation qui passe le dernier?`,
        correctanswer:'Reponse B',
        explanation:`Tout conducteur débouchant d'un chemin nom bitumé ou d'un chemin de terre, comme c'est le
        ici pour la voiture blanche, doit céder le passage aux véhicules circulants sur la chaussée
        revanche, la voiture noir qui a annoncé son intention de tourner à gauche ne doit pas couper la v
        aux véhicules venant d'en face, par conséquent il doit vous céder le passage Vous passez donc
        premier, ensuite la voiture noire et enfin la voiture blanche la dernière`,
        answerOptions: [
            { answerText: `Ma voiture`, isCorrect: false },
            { answerText: `La voiture blanche `, isCorrect: true},
            { answerText: `La voiture noire `, isCorrect: false},
           
            
        ],
    },
    {
        image: q24,
        questionText: `Pour tourner à droite ,je passe`,
        correctanswer:'Reponse A',
        explanation:`Vous abordez une intersection sans signalisation, vous devez donc appliquer la règle de la pronté à
        droite. Ici dans cette situation, aucun véhicule n'est à votre droite, vous passez le premier, mas
        vous devez tout de même céder le passage à ce piéton déjà engagé .La voiture gnse passe en
        second lieu , La voiture rouge passe la dernière.`,
        answerOptions: [
            { answerText: `le premier`, isCorrect: true },
            { answerText: `le deuxième `, isCorrect: false},
            { answerText: `le troisième `, isCorrect: false}, 
        ],
    },
    {
        image: q25,
        questionText: `Pour dépasser le bus, son clignotant doit être à:`,
        correctanswer:'Reponse B',
        explanation:` Si le clignotant de gauche du bus est activé, il me signale son intention de quitter son emplacement, je ne pourrai donc plus le dépasser.`,
        answerOptions: [
            { answerText: `A: à droite`, isCorrect: false },
            { answerText: `B: à gauche`, isCorrect: true},
           
           
            
        ],
    },
    {
        image: q26,
        questionText: `Pour aller tout droit, je passe`,
        correctanswer:'Reponse A',
        explanation:`Le panneau implanté à droite vous annonce que vous êtes prioritaire sur cette intersection. La voiture bleu 
        venant de droite rencontre un stop ou un céder le passage. Elle doit vous céder le passage La voiture jaune venant de 
        sens inverse annonce son intention de changer de direction pour tourner à gauche, ne doit pas couper le voie de véhicules 
        qui viennent d'en face. Elle doit aussi vous céder le passage. Vous passez le premier.`,
        answerOptions: [
            { answerText: `A: le premier`, isCorrect: true },
            { answerText: `B: le deuxième `, isCorrect: false},
            { answerText: `C: le troisième `, isCorrect: false},
           
        ],
    },
    {
        image: q27,
        questionText: `Le chargement doit être signalé s'il dépasse l'arrière du véhicule de`,
        correctanswer:'Reponse A',
        explanation:`Si le chargement dépasse de plus d'un metre l'amère du véhicule, il doit être signalé par un signal
        rouge placé du coté gauche de l'anière du chargement et visible de jour et de nuit`,
        answerOptions: [
            { answerText: `A: 1 mètre`, isCorrect: true },
            { answerText: `B: 1.5 mètres `, isCorrect: false},
            { answerText: `C: 3 mètres `, isCorrect: false},
        ],
    },
    {
        image: q28,
        questionText: `Ce voyant indique une anomalie au niveau`,
        correctanswer:'Reponse C',
        explanation:`Ce voyant est le témoin de pression basse des pneumatiques. Il faut donc les regonfler et vérifier leur état.`,
        answerOptions: [
            { answerText: `A: des plaquettes de frein `, isCorrect: false },
            { answerText: `B: du liquide de refroidissement`, isCorrect: false},
            { answerText: `C: des pneumatiques`, isCorrect:true},
           
            
        ],
    },
    {
        image: q29,
        questionText: `Le permis B suffit pour tracter une remorque de `,
        correctanswer:'Reponse B',
        explanation:`Le permis B est suffisant pour tracter toutes les remorques dont le poids total autorisé en charge (PTAC) ne dépasse pas 750 kg. Cependant l’ensemble, véhicule tracteur et remorque, ne doit pas dépasser 3,5 tonnes.`,
        answerOptions: [
            { answerText: `A: 250kg maximum  `, isCorrect: false },
            { answerText: `B: 750kg  `, isCorrect: true},
            { answerText: `C: 900kg`, isCorrect: false},
        ],
    },
    {
        image: q30,
        questionText: `J’ai commis un excès de vitesse de 10 km/h sur cette route en agglomération. Pour récupérer le point perdu sur mon permis de conduire, je dois attendre`,
        correctanswer:'Reponse A',
        explanation:`Le délai pour récupérer un seul point est de 6 mois sans commettre une autre infraction. Ce système encourage les conducteurs à faire plus attention à leur conduite.`,
        answerOptions: [
            { answerText: `A: 6mois `, isCorrect: true},
            { answerText: `B: 12 mois`, isCorrect: false},
            { answerText: `C: 18 mois`, isCorrect: false},
            { answerText: `D: 24 mois`, isCorrect: false},
        ],
    }

];