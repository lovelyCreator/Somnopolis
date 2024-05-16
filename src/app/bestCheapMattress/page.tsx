/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "../components/bottomBar";
import styles from '../components/CustomText.module.css';
import Link from 'next/link';

export default function Home() {
    interface LookBestItem {
        state: boolean;
        title: string;
        content: JSX.Element;
    }
    const [lookBestState, setLookBestState] = useState<LookBestItem[]>([
        {
            state: false,
            title: "Notre méthodologie",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Le "meilleur matelas" ultime n’aura pas le même aspect pour tout le monde, mais il y a quelques facteurs qui devraient rester absolument excellents quelle que soit la marque, les matériaux, la valeur et le soutien.
                <br></br><br></br>
                Un matelas fabriqué avec des matériaux de qualité garantit la durée de vie d'un matelas et crée un environnement de sommeil plus sûr, sans émissions toxiques.
                <br></br><br></br>
                Les matelas ayant une juste valeur ne sont pas nécessairement les moins chers, mais ils sont proposés à un prix raisonnable compte tenu de leur construction globale, de la qualité des matériaux et de leurs caractéristiques particulières.
                <br></br><br></br>
                Lorsqu’un matelas offre un soutien solide, cela ne signifie pas qu’il est ferme. Un lit de soutien est capable de soulever le corps dans un alignement neutre de la colonne vertébrale, évitant ainsi les douleurs.
            </p>
        },
        {
            state: false,
            title: "Fermeté et position de sommeil",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                <span className="font-bold">L'échelle de fermeté de l'industrie du matelas mesure les matelas sur une échelle de 1 à 10,</span> où 1 est le matelas le plus doux possible et 10 le plus ferme. Un 6,5 sur 10 est considéré comme un véritable matelas mi-ferme, offrant une sensation équilibrée de confort et de soutien. Lorsque vous décidez quelle fermeté vous convient le mieux, vous devrez tenir compte de votre position de sommeil préférée.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs latéraux stricts,</span> ou ceux qui dorment principalement uniquement sur le côté, voudront un matelas plus doux entre 5 et 6,5 sur l’échelle de fermeté. Ils ont besoin d’une surface plus moelleuse pour épouser les hanches et les épaules, les zones sur lesquelles ces personnes exercent le plus de pression lorsqu’elles dorment dans cette position.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs stricts sur le ventre</span> ne fonctionnent pas bien avec un matelas moelleux, car cela provoque un désalignement des hanches. Nous recommandons donc un matelas plus ferme, entre 7 et 10 sur l’échelle de fermeté. De cette façon, leurs hanches seront plus susceptibles de rester soulevées et alignées avec le reste de la colonne vertébrale tout au long de la nuit.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs stricts sur le dos nécessitent</span> un équilibre entre confort et soutien, de sorte que les mousses souples remplissent la région lombaire et que la couche de service maintient les hanches soulevées. Pour cette raison, nous recommandons à ces acheteurs d’acquérir un matelas d’une fermeté moyenne, soit 6,5 sur 10 sur l’échelle de fermeté.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs mixtes</span>, ou ceux qui changent de position de sommeil tout au long de la nuit, devront aborder les choses un peu différemment. Avant tout, ils voudront envisager un matelas réactif, ou un matelas qui les maintient soulevés et facilite le passage du sommeil sur le dos au sommeil sur le côté au sommeil sur le ventre. En ce qui concerne la fermeté, ils voudront trouver quelque chose qui s’adapte à leurs deux ou à la totalité de leurs positions de sommeil préférées.
            </p>
        },
        {
            state: false,
            title: "Types de matelas les plus courants",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Bien qu'il existe des centaines et des centaines de matelas différents sur le marché, notre équipe de Sleepopolis aime les regrouper en quatre types.
                <br></br><br></br>
                Les <span className="font-bold">matelas à ressorts</span> mettent l’accent sur le service et utilisent des ressorts pour obtenir une sensation de soutien et de rebond. Les couches de confort sont plus fines sur les modèles à ressorts, ce sont donc généralement des lits plus fermes, idéaux pour dormir sur le ventre ou pour dormir ensemble.
                <br></br><br></br>
                Les <span className="font-bold">matelas en mousse à mémoire de forme</span> n’utilisent pas de ressorts pour le soutien, ils utilisent des mousses haute densité. Vous pouvez trouver des lits en mousse à mémoire de forme de toutes sortes de fermetés, mais généralement, leurs propriétés de contour et de soulagement de la pression sont plus utiles pour les dormeurs latéraux et ceux souffrant de douleurs articulaires.
                <br></br><br></br>
                Les <span className="font-bold">matelas hybrides</span> sont le meilleur des deux mondes et adoptent les caractéristiques des lits à ressorts et en mousse à mémoire de forme. À la base, il y a des ressorts pour le soutien, mais le dessus du lit est recouvert d'une mousse de confort plus moelleuse. La fermeté de ces matelas varie également selon le modèle, et leurs sensations varient considérablement.
                <br></br><br></br>
                Les <span className="font-bold">matelas en latex</span> utilisent de la mousse de latex Dunlop ou Talalay pour créer une surface de couchage naturellement rafraîchissante et réactive. De nombreux dormeurs sexy et acheteurs soucieux de l’environnement ont tendance à se tourner vers ce type.
            </p>
        }
    ]);
    const [bestBudgetMattress, setBestBudgetMattress] = useState<object[]>([
        {
            company: 'Nectar',
            description: 'Meilleur matelas bon marché',
        },
        {
            company: 'DreamCloud Memory Foam',
            description: 'Meilleur matelas en mousse à mémoire de forme pour les petits budgets',
        },
        {
            company: 'Bear',
            description: 'Le meilleur matelas abordable pour les athlètes',
        },
        {
            company: 'Sensoreve Elekctra',
            description: 'Meilleur matelas hybride abordable',
        },
        {
            company: 'Siena',
            description: 'Meilleur matelas abordable de moins de 500',
        },
        {
            company: 'Titan Plus',
            description: 'Meilleur matelas économique pour les personnes corpulentes',
        },
        {
            company: 'Leesa Original',
            description: 'Best Affordable Mattress for Back Sleepers',
        },
        {
            company: 'Silk & Snow Hybrid',
            description: 'Meilleur matelas rafraîchissant à petit prix',
        },
    ]);
    const [mattressData, setMattressData] = useState<any[]>([
        {
        description: "Meilleur dans l'ensemble",
        size: "Twin, Twin XL, Full, Queen, King, Cal King",
        material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
        firmness: "Moyen-doux : 6/10",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie à vie",
        bestfor: "Side sleepers, hip pain, joint pain, & back sleepers",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Sensoreve.png",
        mark: "/img/product/Sensoreve_mark.png",
        rate: 4.4
        },
        {
        description: "Meilleur hybride",
        size: "Twin, Twin XL, Full, Queen, King, Cal King",
        material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
        firmness: "Mi-ferme : 7/10",
        shipping: "Livraison gratuite",
        trialperiod: "100 nuits",
        warranty: "Garantie 10 ans",
        bestfor: "Dormeurs sur le dos et sur le côté",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Helix.png",
        mark: "/img/product/Helix_mark.png",
        rate: 4.3
        },
        {
        description: "Meilleure valeur",
        size: "Twin, Twin XL, Full, Queen, King, Split king, Cal King",
        material: "Matelas entièrement en mousse doté d'une couche de mousse à mémoire de forme gel",
        firmness: "Moyennement doux : 6/10",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie à vie",
        bestfor: "Dormeurs latéraux, douleurs à la hanche, douleurs articulaires et dormeurs sur le dos",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Nectar.png",
        mark: "/img/product/Nectar_mark.png",
        rate: 4.4
        },
        {
        description: "Meilleur soutien",
        size: "Twin, Twin XL, Full, Queen, King, Cal King",
        material: "Matelas à ressorts avec support zoné et plateau-coussin",
        firmness: "Ferme : 7/10",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie à vie",
        bestfor: "Dormeurs qui surchauffent, dormeurs latéraux, personnes âgées et dormeurs sur le dos",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/DreamCloud.png",
        mark: "/img/product/DreamCloud_mark.png",
        rate: 4.3
        },
        {
        description: "Meilleure entreprise",
        size: "Twin, Twin XL, Full, Queen, King, Cal King, Split Cal King, RV",
        material: "Mousses haute densité et confort avec couches matelassées",
        firmness: "Plusieurs options de fermeté",
        shipping: "Livraison gratuite",
        trialperiod: "120 nuits",
        warranty: "Garantie 10 ans",
        bestfor: "Stomach sleepers, back sleepers, & combination sleepers",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Plank.png",
        mark: "/img/product/Plank_mark.png",
        rate: 4.4
        },
        {
        description: "Meilleurs dormeurs sur le dos",
        size: "Twin, Twin XL, Full, Queen, King, Cal King, Split King",
        material: "Combinaison de couches de mousse et de ressorts avec une housse en coton biologique",
        firmness: "Plusieurs options de fermeté",
        shipping: "Livraison gratuite",
        trialperiod: "120 nuits",
        warranty: "Garantie à vie",
        bestfor: "Dormeurs sur le côté, couples et dormeurs sur le dos",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Nolah.png",
        mark: "/img/product/Nolah_mark.png",
        rate: 4.4
        },
        {
        description: "Meilleurs dormeurs sur le côté",
        size: "Twin, Twin XL, Full, Queen, King, Split King, Cal King",
        material: "Matelas entièrement en mousse avec un équilibre entre refroidissement et confort",
        firmness: "Mi-doux : 6/10",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie à vie",
        bestfor: "Dormeurs sur le côté et sur le dos",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Premier.png",
        mark: "/img/product/Premier_mark.png",
        rate: 4.2
        },
        {
        description: "Meilleurs couples",
        size: "Twin, Twin XL, Full, Queen, King,Split King, Cal King",
        material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
        firmness: "Plusieurs options de fermeté",
        shipping: "Livraison gratuite",
        trialperiod: "120 nuits",
        warranty: "Garantie à vie",
        bestfor: "Dormeurs sur le côté, couples et dormeurs sur le dos",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/Bear.png",
        mark: "/img/product/Bear_mark.png",
        rate: 4.3
        },
        {
        description: "Meilleur soulagement de la pression",
        size: "Twin, Twin XL, Full, Queen, King, Split King, Cal King, Split Cal King",
        material: "Combinaison de mousse à mémoire de forme et de mousse de latex",
        firmness: "Plusieurs options de fermeté",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie 10 ans",
        bestfor: "Dormeurs sur le dos et couples",
        financing: "Un TAEG aussi bas que 0 % avec Affirm",
        img: "/img/product/BrooklynBedding.png",
        mark: "/img/product/BrooklynBedding_mark.png",
        rate: 4.4
        },
        {
        description: "Meilleur refroidissement",
        size: "Twin, Twin XL, Full, Queen, King, Cal King",
        material: "Matelas hybride ultra-respirant avec un soutien amélioré",
        firmness: "Ferme : 7,5/10",
        shipping: "Livraison gratuite",
        trialperiod: "365 nuits",
        warranty: "Garantie 10 ans",
        bestfor: "Dormeurs sur le ventre, dormeurs chauds et dormeurs sur le dos",
        financing: "Aussi bas que 0 % de TAEG",
        img: "/img/product/EmmaHybrid.png",
        mark: "/img/product/EmmaHybrid_mark.png",
        rate: 4.3
        }
    ]);
    const [compareData, setCompareData] = useState<any[]>([
        {
            model: "Nectar Matelas",
            material: "Mousse",
            firmness: "Doux : 6/10",
            mark: "/img/best/nectar_best.jpg",
            rate: 4.3,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Nectar",
            sort: "Meilleur matelas bon marché",
            content: "Le matelas Nectar original est un lit qui soulage la pression tout en offrant un bon soutien. Il est composé d’une épaisse couche de mousse à mémoire de forme gel, qui permet au dormeur de vraiment s’enfoncer dans sa surface.",
            review: "",
            site: "",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/joint.svg",
                    title: "Douleur articulaire",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs articulaires."
                },
                {
                    img:"/img/best/hip.svg",
                    title: "Douleur à la hanche",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs aux hanches."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Lorsqu'il s'agit de matelas qui ne coûtent pas les yeux de la tête, notre premier choix est le Nectar, un matelas tout en mousse. Lorsque nous l'avons testé, nous lui avons attribué une note de 6 sur 10 sur l'échelle de fermeté du matelas, soit une note légèrement inférieure à la fermeté moyenne. Il est doté d'une épaisse couche de mousse à mémoire de forme souple qui offre une grande capacité de contournement et de soulagement de la pression pour les dormeurs latéraux, et d'une couche de soutien en mousse plus ferme qui assure la stabilité du matelas. Lorsque l'on s'allonge sur le Nectar, on s'enfonce un peu, mais on n'a jamais l'impression que l'on va tomber trop bas dans ses couches. Un lit queen size coûte actuellement moins de 1 000 dollars après déduction des remises. Tous les modèles sont assortis d'une période d'essai de 365 nuits et d'une garantie à vie. \n\n Nous pensons également que le Nectar est un choix solide pour les couples en raison de sa capacité à isoler les mouvements. Lorsque nous avons testé le transfert de mouvement à l'aide de billes d'acier et d'un sismomètre, nous avons constaté qu'il n'y avait pas beaucoup de mouvement, ce qui nous indique que si vous dormez avec un partenaire, vous ne sentirez probablement pas l'autre se retourner pendant la nuit.",
            testersay: [
                "Ce que dit notre testeur :",
                "Je pense que le Nectar a une excellente sensation de mousse à mémoire de forme classique. Si vous aimez l'enfoncement profond et les contours, c'est le matelas qu'il vous faut.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Sur le site Internet de Nectar, vous trouverez un nombre impressionnant de 47 000 commentaires, dont beaucoup font l'éloge de la sensation d'amortissement de la mousse à mémoire de forme sur le dos du dormeur. Un thème commun semble être le soulagement de la pression profonde du lit.",
            pros: [
                "Les dormeurs sur le dos devraient également être à l'aise sur le Nectar. La mousse souple devrait remplir la région lombaire, et la mousse plus ferme au bas du matelas est suffisamment solide pour aider à maintenir la colonne vertébrale dans un alignement neutre.",
                "Si vous souffrez de douleurs aux hanches, le Nectar pourrait vous soulager. Lorsque nous avons testé le matelas avec notre carte de pression, nous avons constaté qu'il y avait peu ou pas de pression au niveau des hanches dans les trois positions de sommeil.",
                "Le Nectar pourrait convenir aux adolescents. Il est suffisamment doux pour les plus jeunes, mais il peut aussi les accompagner dans leur développement jusqu'à l'adolescence."
            ],
            cons: "Les dormeurs sur l'estomac et les gros dormeurs n'obtiendront probablement pas le soutien dont ils ont besoin sur le Nectar. Ils devraient rechercher un matelas plus ferme, peut-être avec une couche de ressorts.",
            reviewName: "Examen du matelas Nectar"
        },
        {
            model: "DreamCloud Memory Foam",
            material: "Mousse",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/dreamCloud_MemoryFoam.jpg",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Dos et estomac",
            title: "DreamCloud Memory Foam",
            sort: "Meilleur matelas en mousse à mémoire de forme pour les petits budgets",
            content: "Le matelas à mémoire de forme de DreamCloud est un lit en boîte de luxe qui offre un excellent soutien tout en étant entièrement en mousse.",
            review: "",
            site: "",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/couple.svg",
                    title: "Couples",
                    content: "Ce lit offre une grande isolation des mouvements, de sorte que vous ne sentirez pas votre partenaire se retourner pendant la nuit."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dormir à l'arrière",
                    content: "Idéal pour les dormeurs légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite moins HI et AK",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `La mousse à mémoire de forme traditionnelle a souvent mauvaise réputation, car elle a tendance à retenir la chaleur du corps et à favoriser la transpiration. De plus, certaines marques utilisent une mousse de mauvaise qualité, ce qui entraîne un affaissement prématuré. Avec la mousse à mémoire de forme DreamCloud, vous obtiendrez un lit en mousse à mémoire de forme rafraîchissante et de haute qualité, avec tous les avantages habituels. Le plus intéressant ? Il est proposé à un prix modique, compte tenu de ses matériaux et de sa construction. Si l'on tient compte des remises, vous pouvez souvent obtenir un lit queen pour moins de 1 000 dollars. \n\n Le premier lit de DreamCloud était un matelas hybride de luxe, et le DreamCloud Memory Foam est leur première option entièrement en mousse. Comme son homologue hybride, il est recouvert d'un mélange de cachemire et sa mousse contient une infusion de gel pour faciliter le refroidissement. Cependant, il diffère de beaucoup d'autres options de mousse à mémoire de forme en ce sens qu'il est assez ferme. Lorsque nous nous sommes allongés dessus, nous lui avons attribué une note de 7,5 sur 10 sur notre échelle de fermeté du matelas. Il convient donc parfaitement aux dormeurs sur le dos et sur le ventre, qui ont tendance à avoir besoin de plus de fermeté et de soutien pour maintenir leur colonne vertébrale dans un alignement neutre.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Le DreamCloud Memory Foam est un matelas en mousse à mémoire de forme avec une sensation de fermeté qui, à mon avis, convient bien aux personnes de poids léger à moyen qui dorment sur le ventre ou sur le dos.",
                "– Amelia Jerden, rédactrice en chef"
            ],
            customersay: `Étant l'un des modèles les plus récents de la marque, le DreamCloud Memory Foam ne fait pas l'objet d'autant d'avis que la version hybride originale. Mais ceux qui existent font l'éloge du confort du lit, ainsi que de son apparence élégante.`,
            pros: [
                "Pour être entièrement constitué de mousse, le DreamCloud est très réactif. Les dormeurs mixtes devraient pouvoir changer facilement de position de sommeil sur sa surface.",
                "Il est également doté d'un support de bord solide. Vous devez pouvoir vous étendre et utiliser toute la surface du lit sans avoir l'impression que vous allez tomber.",
                "Le matelas comporte plusieurs touches de luxe, dont la housse en cachemire mentionnée plus haut et un dessus matelassé."
            ],
            cons: "Les mousses ne sont pas assez souples pour les personnes qui dorment sur le côté. Ceux-ci préféreront probablement un matelas plus enveloppant et qui soulage la pression au niveau des épaules et des hanches, là où ils exercent le plus de pression.",
            reviewName: "Examen du matelas DreamCloud Memory Foam"
        },
        {
            model: "Bear Original Matelas",
            material: "Mousse",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/bear_original.jpg",
            rate: 4,
            cooling: '✓',
            sleep_position: "Dos et côtés",
            title: "Bear",
            sort: "Le meilleur matelas abordable pour les athlètes",
            content: "Nous apprécions la fermeté et la réactivité du matelas Bear. Sa combinaison de soutien et de soulagement de la pression en fait une excellente option pour toute personne souffrant de douleurs dorsales. La housse Celliant permet également de garder le matelas au frais.",
            review: "",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage latéral",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Bear est une marque unique parce qu'elle s'adresse aux athlètes. L'entreprise a équipé son matelas phare de mousses fermes qui soutiennent la musculature lourde, ainsi que d'une housse en Celliant. Il s'agit d'un matériau doux et respirant qui aide à combattre la chaleur après une longue séance d'entraînement. De plus, la couche de confort en mousse à mémoire de forme contribue au refroidissement grâce à une infusion de gel de graphite. Le Bear convient donc parfaitement aux dormeurs qui ont chaud. \n\nUn autre composant de Celliant : il est conçu pour absorber l'énergie de votre corps, puis la rediriger vers vous pour aider à la récupération et à la circulation sanguine. Bien que nous n'ayons pas vérifié cette affirmation de manière indépendante dans notre laboratoire de test, 10 études évaluées par des pairs l'ont confirmée. Même sans la housse Celliant, nous pensons que le Bear est un excellent choix pour tous ceux qui ont un mode de vie actif, grâce aux facteurs de soutien et de refroidissement susmentionnés. Il est souvent possible d'obtenir un lit Queen à 998 $ avant toute réduction. Ce prix inclut un essai de 120 nuits et une garantie à vie.`,
            testersay: [
                "Ce que dit notre testeur :",
                "J'ai trouvé le Bear particulièrement confortable lorsque je dormais sur le dos. Sa couche supérieure de mousse à mémoire de forme a fait un excellent travail en comblant l'espace au niveau de la région lombaire, apportant à la fois soutien et soulagement de la pression sur ma colonne vertébrale.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Les commentaires sur le site Internet de Bear soulignent la fermeté du matelas, et plusieurs personnes ont indiqué que les mousses de soutien en font un matelas idéal pour les adolescents dont le corps est encore en pleine croissance. De nombreuses personnes apprécient également le fait que le matelas ait été fabriqué sans fibre de verre.",
            pros: [
                "Lorsque nous avons testé le transfert de mouvement du Bear, nous avons constaté qu'il était très faible. Si vous dormez à deux, vous ne devriez donc pas être réveillés par les mouvements de l'autre. Si l'on ajoute à cela les capacités de refroidissement du lit, il s'agit de l'un des meilleurs matelas pour les couples.",
                "Bien que le Bear soit entièrement constitué de mousse, il comporte une couche de haute densité qui offre un soutien suffisant pour aider à maintenir la colonne vertébrale des dormeurs dorsaux dans un alignement neutre, ce qui est essentiel pour un sommeil sain et réparateur.",
                "Les mousses du matelas sont suffisamment réactives pour que les dormeurs combinés puissent facilement changer de position."
            ],
            cons: "Les personnes qui dorment sur le côté : Ils n'obtiendront probablement pas un soulagement suffisant de la pression de l'ours. Ils devraient rechercher un matelas plus souple..",
            reviewName: "Examen du matelas Bear"
        },
        {
            model: "Sensoreve Elekctra Matelas",
            material: "Hybride",
            firmness: "Moyen-doux : 6/10",
            mark: "/img/product/Sensoreve.png",
            rate: 4,
            cooling: '✓',
            sleep_position: "Dos et côté",
            title: "Sensoreve Elekctra",
            sort: "Meilleur matelas hybride abordable",
            content: "L’Sensoreve Elekctra a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.",
            review: "",
            site: "https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/couple.svg",
                    title: "Des couples",
                    content: "Ce lit offre une excellente isolation des mouvements, vous ne sentirez donc pas votre partenaire se retourner et se retourner la nuit."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "100 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement. \n\n Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit.",
            testersay: [
                "Ce que dit notre testeur :",
                "J’aime le fait que le Sensoreve Elekctra offre un support de bord solide – vous pouvez utiliser tout le lit ! Il offre également une excellente isolation des mouvements, ce qui en fait une option intéressante pour les couples. J’aime aussi beaucoup ce lit pour les dormeurs mixtes. Le matelas est gonflable, ce qui vous permet de vous retourner ou de changer de position facilement la nuit sans craindre de rester « coincé » dans le lit.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "De nombreuses critiques mentionnent le Helix Sleep Quiz, qui dure 30 secondes et aide les acheteurs à trouver le meilleur modèle Helix pour leurs besoins. De nombreux acheteurs ont acheté le Sensoreve Elekctra à cause du quiz sur le sommeil, et beaucoup d’entre eux ont des critiques positives.",
            pros: [
                "Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.",
                "Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.",
                "Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra."
            ],
            cons: "De toutes les positions de sommeil, les dormeurs sur le ventre ont besoin de plus de soutien, et ils ne l’obtiendront probablement pas sur le Sensoreve Elekctra.",
            reviewName: "Évaluation du matelas Sensoreve Elekctra"
        },
        {
            model: "Siena Matelas",
            material: "Mousse",
            firmness: "Ferme : 7/10",
            mark: "/img/cheap/siena.jpg",
            rate: 4.0,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Siena",
            sort: "Meilleur matelas abordable de moins de 500",
            content: "Ce matelas tout en mousse offre une sensation de fermeté et de soutien avec une couche de mousse à mémoire de forme pour soulager la pression.",
            review: "",
            site: "https://www.sienasleep.com/mattress?CIDIMP=WFNz5gSf7xyPRhqx-Yx332coUkHQKUwXWQt71Y0&irgwc=1&utm_campaign=IMPACT&utm_content=Online%20Tracking%20Link_ONLINE_TRACKING_LINK&utm_source=SO_Main&utm_medium=AFF&utm_sharedid=&utm_account=15153&rh_s=SO_Main&rh_m=AFF&rh_c=IMPACT&rh_n=Online%20Tracking%20Link_ONLINE_TRACKING_LINK&rh_sid=",
            productState: false,
            recommendationState: false,
            overviewState: false,
            expert_opinionState: false,
            recommendation: [
                {
                    img:"/img/cheap/kid.svg",
                    title: "Les enfants",
                    content: "Ce lit est parfait pour les jeunes dormeurs."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers sur le dos."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "180 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Bien qu'il soit entièrement composé de mousse, le Siena offre un soutien surprenant, ses couches commençant par être souples, puis devenant de plus en plus fermes au fur et à mesure que l'on se rapproche du bas du lit. Cela signifie qu'il s'agit d'un matelas en mousse à mémoire de forme exceptionnellement durable, et qu'à moins de 500 $ pour une taille queen après remises, il constitue un investissement solide (et abordable) à long terme. \n\n Lorsque nous nous sommes allongés sur le Siena, nous avons vraiment eu la sensation d'être sur le dessus du lit. Cependant, plus nous restions sur le matelas, plus nous nous y enfoncions. Cette poussée et cette traction se sont traduites par une sensation de fermeté avec un peu de rembourrage. Nous devons également parler de la capacité du Siena à isoler les mouvements. Nous testons cette capacité en laissant tomber plusieurs billes d'acier de poids différents sur la surface du lit. Nous mesurons ensuite les vibrations à l'aide d'un sismomètre. Si les vibrations sont faibles, les mouvements sont moins susceptibles de se répercuter sur le matelas. Le Siena a excellé dans ce test, de sorte qu'il est peu probable que vous sentiez votre partenaire bouger pendant la nuit.",
            testersay: [
                "Ce que dit notre testeur :",
                "Le Siena a un design simple et minimaliste qui convient aux dormeurs sur le ventre et à de nombreux dormeurs sur le dos. Je pense qu'il s'agit d'une excellente option pour ceux qui recherchent un matelas ferme. Il maintient les dormeurs en position haute et les amortit légèrement, ce qui est particulièrement avantageux pour les dormeurs sur le ventre. Je pense également qu'il est assez facile de se déplacer sur un lit tout en mousse et qu'il offre un soutien solide sur les bords.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Sur le site web de Siena, il y a près de 1 200 avis, et de nombreux clients soulignent le confort du matelas sur leur dos. Toutefois, quelques personnes ont fait remarquer qu'en raison de la fermeté du matelas, il faut parfois quelques nuits pour s'habituer au lit. Accordez-vous donc un peu de temps pour vous y habituer.",
            pros: [
                "La couche supérieure de mousse à mémoire de forme s'adaptant au corps du Siena devrait vous procurer un certain amortissement au niveau de la région lombaire, tout en assurant le soutien de la colonne vertébrale grâce à la couche inférieure de mousse de base. Ce matelas est donc un choix naturel pour les dormeurs sur le dos.",
                "Le Siena est le rare matelas en mousse capable d'accueillir les dormeurs sur le ventre, qui ont tendance à exercer plus de pression sur les couches du lit que les dormeurs sur le côté ou sur le dos. Mais ce matelas remplit sa mission en maintenant les dormeurs à plat ventre de manière à ce que leurs hanches soient alignées avec leurs épaules.",
                "Avec un soutien solide des bords, des mousses suffisamment réactives pour les rapports sexuels et la capacité d'isoler les mouvements, le Siena est un bon choix pour tous ceux qui partagent leur lit avec un partenaire."
            ],
            cons: "Ce n'est pas le meilleur matelas pour les personnes qui dorment sur le côté. Ils préféreront probablement un matelas plus doux avec un meilleur soulagement de la pression.",
            reviewName: "Évaluation du matelas Siena"
        },
        {
            model: "Titan Plus",
            material: "Hybride",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/titan.jpg",
            rate: 4,
            cooling: '- -',
            sleep_position: "Dos et ventre",
            title: "Titan Plus",
            sort: "Meilleur matelas économique pour les personnes corpulentes",
            content: "Le Titan Firm Hybrid de Brooklyn Bedding est un matelas durable doté de ressorts de soutien robustes de 6 pouces, ce qui en fait une excellente option pour les dormeurs plus lourds. Ce matelas est également doté d'une couche de confort en mousse Titanflex, qui offre une bonne portance et un bon rebond pour les personnes plus lourdes.",
            review: "",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/back.svg",
                    title: "Mal de dos",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs dorsales."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les personnes qui dorment sur le dos et qui ont un poids élevé."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les gros dormeurs sur le ventre."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Pour les gros dormeurs, nous recommandons toujours le matelas Titan Plus, une option abordable et confortable. Mais comme ces personnes exercent une plus grande pression sur les couches du lit que les autres dormeurs, nous avons demandé à Paulie - un haltérophile professionnel à la morphologie plus imposante - de le tester. Il a estimé que les trois pouces de mousse permettaient un soulagement adéquat de la pression, et que les ressorts robustes et la mousse de base haute densité offraient un soutien durable. Cela n'est pas surprenant, car le Titan Plus a été conçu spécifiquement pour les dormeurs de plus de 250 livres. Il est vendu au prix de 1 249 $ pour un lit queen, avant réductions, et comprend un essai de 120 nuits ainsi qu'une garantie de 10 ans. Après réduction, il est souvent possible de trouver un lit queen pour moins de 1 000 $. \n\n Nous devons souligner qu'en ce qui concerne la fermeté, le Titan Plus sera plus doux pour les dormeurs lourds et plus ferme pour les dormeurs de poids moyen et léger. Pour donner un ordre d'idée, notre évaluateur a évalué le lit à 7,5 sur 10 sur notre échelle de fermeté du matelas, tandis que Paulie a estimé qu'il était plus proche d'un 6,5 (la norme de l'industrie pour une fermeté moyenne).`,
            testersay: [
                "Ce que dit notre testeur :",
                "Je pense que les couples trouveront beaucoup à aimer dans le Titan Plus en raison de sa solide isolation des mouvements et de son soutien des bords. Dans l'ensemble, je me suis senti très bien soutenu sur ce lit. Je pense qu'il pourrait convenir à de nombreux dormeurs sur le dos ou sur le ventre.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Le Titan Plus a fait l'objet de nombreux témoignages de dormeurs corpulents, y compris d'une vidéo d'un couple. La plupart de ces témoignages soulignent le confort du matelas pour leur morphologie, certains le qualifiant même de matelas le plus confortable sur lequel ils aient jamais dormi.",
            pros: [
                "Même s'ils pèsent moins de 250 livres, les dormeurs sur le dos qui recherchent une sensation plus ferme ou plus de soutien devraient apprécier ce matelas.",
                "De même, les dormeurs sur le ventre qui pèsent moins de 250 livres devraient être à l'aise sur le Titan Plus, bien qu'il leur semblera un peu plus ferme qu'aux dormeurs sur le ventre qui pèsent lourd.",
                "Nous recommandons ce lit aux couples lourds en raison de son impressionnante isolation des mouvements et de son soutien des bords. Il est peu probable que vous sentiez votre partenaire se retourner, et vous devriez tous deux être en mesure de vous étendre sur toute la surface du matelas."
            ],
            cons: "En raison de l'épaisseur et de la durabilité des matériaux, nous avons trouvé que le Titan Plus dormait chaud. Il est possible d'acheter un panneau de refroidissement, mais cela coûte plus cher.",
            reviewName: "Examen du matelas Titan Plus"
        },
        {
            model: "Leesa Original Matelas",
            material: "Mousse",
            firmness: "Doux : 5.5/10",
            mark: "/img/cheap/lessa.jpg",
            rate: 4,
            cooling: '- -',
            sleep_position: "Combinaison",
            title: "Leesa Original",
            sort: "Meilleur matelas abordable pour les dormeurs sur le dos",
            content: `Vous aimez la sensation d'un matelas tout en mousse, mais vous n'arrivez pas à en trouver un qui soit suffisamment rebondissant ? Le matelas Leesa original est peut-être ce qu'il vous faut. Ce matelas de type "bed-in-a-box" offre un soulagement en douceur de la pression ainsi qu'un soutien réactif.`,
            review: "",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers, moyens et lourds."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Idéal pour les dormeurs latéraux de poids moyen."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les dormeurs sur le ventre légers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "100 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Douceur : 5,5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Nous pensons que tous les matelas de cette liste présentent un bon rapport qualité-prix, mais le Leesa Original est particulièrement fantastique pour les personnes qui dorment sur le dos. En fait, ce matelas est commercialisé pour offrir la sensation " Boucle d'or " la plus recommandée pour les dormeurs sur le dos, avec un équilibre entre le confort et le soutien provenant de sa couche de confort en mousse à mémoire de forme et de sa mousse de base extra-durable. Lors de nos tests, nous avons remarqué que ce matelas épousait parfaitement les contours de notre dos, et nous avons déterminé qu'il s'agissait de notre position de sommeil préférée sur ce matelas. \n\n Nous avons mis tout cela à l'épreuve avec notre carte de pression, qui présentait surtout du bleu et du vert pendant le sommeil sur le dos. Cela indique que la plupart des gens devraient éviter une accumulation excessive de pression ; en fait, ce matelas pourrait même aider à soulager les maux de dos dans la région lombaire. Sur la base de nos résultats, nous pensons que ce matelas offrira aux dormeurs de moins de 250 livres un bon contour du bas du dos et une bonne portance au niveau des hanches.`,
            testersay: [
                "Ce que dit notre testeur :",
                "J'ai ressenti un bon soulagement de la pression en me couchant sur le dos, ce qui aide à soulager la douleur dans la région lombaire. Je pense que c'est la position de sommeil la plus confortable sur le Leesa. Cependant, je ne pense pas que les personnes qui dorment sur le côté ou sur le ventre et qui souffrent de douleurs dorsales obtiendront le soulagement dont elles ont besoin sur ce matelas.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Il est étonnant de constater que le Leesa Original fait l'objet de plus de 20 000 avis sur le site de la société, avec un total de 4,5 étoiles sur 5. De nombreux clients satisfaits louent la capacité du Leesa à prévenir et à soulager les maux de dos, en particulier pour un prix aussi fantastique. Les quelques plaintes qui existent mentionnent que le Leesa n'est pas aussi résistant qu'ils l'espéraient. Toutefois, il est important de noter que les prix élevés et la durée de vie des matelas vont souvent de pair.",
            pros: [
                "Il s'agit d'un matelas réactif, et la facilité de mouvement qu'il permet devrait en faire une option intéressante pour les dormeurs mixtes.",
                `Même si ce matelas offre une sensation plus "sur le dessus", il isole bien les mouvements, de sorte que les couples ne devraient pas se réveiller à cause des mouvements de l'autre.`,
                "Certains dormeurs latéraux pesant entre 130 et 250 livres, en particulier ceux qui recherchent une sensation plus ferme, devraient apprécier la fermeté moyenne du Leesa."
            ],
            cons: "Ce lit n'offre pas un soutien adéquat pour les dormeurs lourds de plus de 250 livres. Cependant, nous avons vraiment adoré le Leesa Sapira Chill pour ces personnes.",
            reviewName: "Examen du matelas Leesa Original"
        },
        {
            model: "Silk & Snow Hybrid Matelas",
            material: "Hybride",
            firmness: "Moyennement ferme : 6.5/10",
            mark: "/img/cheap/silk.jpg",
            rate: 4,
            cooling: '✓',
            sleep_position: "- -",
            title: "Silk & Snow Hybrid",
            sort: "Meilleur matelas rafraîchissant à petit prix",
            content: `Le Silk & Snow Hybrid est un matelas moyennement ferme qui offre un soutien important. Il est idéal pour les dormeurs sur le dos, certains dormeurs sur le côté et ceux qui passent d'une position à l'autre.`,
            review: "",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "100 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 15 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Le Silk & Snow est un matelas hybride économique que l'on peut généralement trouver à moins de 900 $ pour une taille queen. Nous pensons que le principal attrait du Silk & Snow Hybrid est son impressionnante capacité de refroidissement. Pour un matelas d'un tel rapport qualité-prix, il peut être difficile d'obtenir de telles capacités de refroidissement. Mais le Silk & Snow Hybrid comprend une housse fraîche au toucher et des ressorts respirants pour empêcher les dormeurs chauds de surchauffer. Nous avons ressenti les effets de ce lit dans notre laboratoire de matelas, où le Silk & Snow Hybrid a reçu une note de refroidissement impressionnante de 4 sur 5. \n\n La combinaison de mousse à mémoire de forme et de ressorts du Silk & Snow Hybrid en fait un lit moyennement ferme et réactif. Cette dernière caractéristique est due aux ressorts, qui fournissent une bonne quantité de rebond et nous ont permis de changer facilement de position de sommeil. Cela signifie que le Silk & Snow convient parfaitement aux dormeurs mixtes qui passent d'une position sur le dos à une position sur le ventre ou sur le côté pendant la nuit.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Il s'agit d'une fermeté intermédiaire idéale pour ceux qui ne veulent pas d'un lit ultra-ferme, mais qui souhaitent se sentir bien soutenus. Cette sensation est obtenue grâce à une construction hybride, qui utilise des mousses conformantes dans les couches supérieures et des ressorts robustes dans les couches inférieures.",
                "– Amelia Jerden, rédactrice en chef"
            ],
            customersay: "Le site de la société Silk & Snow contient plus de 3 000 commentaires, dont la plupart sont positifs quant à l'équilibre délicat entre le confort et le soutien.",
            pros: [
                "Ce matelas a obtenu de bons résultats lors de notre test de pression (beaucoup de bleu dans la région lombaire). Nous pensons qu'il pourrait constituer un bon choix pour les personnes souffrant de maux de dos.",
                "Le soutien et l'allègement de la pression sont suffisants pour que les personnes qui dorment sur le dos soient à l'aise.",
                "Les personnes qui dorment sur le côté devraient également trouver le contour dont elles ont besoin grâce à la housse souple, aux mousses et à la fermeté moyenne du Silk & Snow."
            ],
            cons: "Le Silk & Snow Hybrid n'a pas obtenu les meilleurs résultats lors de notre test de soutien des bords, ce qui est plutôt rare pour un matelas hybride. Donc, si vous êtes le genre de dormeur qui aime s'étendre et prendre beaucoup de place sur votre lit, ce n'est peut-être pas le choix qu'il vous faut.",
            reviewName: "Examen du matelas Silk & Snow Hybrid"
        },
    ]);
    const [starState, setStarState] = useState<string>('flex');
    interface ComponentProps {
        index: number;
        setLookBestState: React.Dispatch<React.SetStateAction<LookBestItem[]>>;
    }
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-start w-full">
                <div className="w-full h-[700px] 2xl:h-[40vw] xl:h-[650px] lg:h-[600px] md:h-[500px] sm:h-[650px] bg-[#F1F1F1] flex justify-center items-start mb-20">
                    <div className="flex flex-col items-start justify-between font-marcellus pl-[5%] w-full">
                        <Link href='/' className={`${styles.manropeFont} text-[#87806A] sm:text-[16px] text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] font-bold text-left w-[100%] pt-[5%] text-wrap`}>
                            Accueil et meilleur matelas
                        </Link>
                        <div className="w-[90%] flex flex-col justify-start items-start pb-[5%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[48px] xl:text-[44px] md:text-[32px] sm:text-[32px] text-[24px] font-bold text-wrap w-[90%] py-[2%] pl-[5%] text-center`}>
                                Les 8 meilleurs matelas bon marché de 2024
                                <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] sm:text-[14px] text-[12px] md:text-[16px] font-bold 
                                text-left text-wrap w-[100%]`}>
                                    Par Bridget Chapman | Mise à jour : 14 mai 2024
                                </p>
                            </div>
                            <div className="w-full flex justify-start items-start pl-[5%]">
                                <span className="border-[2px] border-[#78c2ef] rounded-full">
                                    <img src="/img/cheap/Reviewer.png" alt="évaluateur"  className="lg:w-[4vw] lg:h-[4vw] md:w-[5vw] md:h-[5vw] w-[34px] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} 2xl:text-[20px] sm:text-[14px] md:text-[18px] text-[14px] ml-[3%] text-left flex items-center lg:h-[4vw] md:h-[5vw] h-[34px]`}>Rédigé par<br></br>
                                    Bridget Chapman, rédactrice en chef des produits
                                </p>
                            </div>
                            <div className="w-full flex flex-col justify-start items-start pt-[1%] pl-[5%] gap-[3%] md:flex-row">
                                <div className="flex justify-start items-start w-[100%] md:w-[50%] my-[20px] md:my-[0px]">
                                    <span >
                                        <img src="/img/method.png" alt="évaluateur"  className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Notre méthodologie
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] font-bold 
                                        text-left text-wrap w-[100%] sm:text-[16px] text-[12px]`}>
                                            Nos coachs certifiés en science du sommeil ont examiné plus de 300 matelas dans notre laboratoire, testant chacun d'entre eux sur ses matériaux, son confort, son refroidissement, son soutien et d'autres catégories.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-start items-start w-[90%] md:w-[50%]">
                                    <span >
                                        <img src="/img/check.png" alt="évaluateur"  className="lg:w-[40px] lg:h-[40px] md:w-[30px] w-[28px] md:h-[30px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Je viens de mettre à jour
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] sm:text-[16px] text-[12px] font-bold 
                                        text-left text-wrap w-[100%]`}>
                                            Nous avons récemment réexaminé tous nos meilleurs choix de matelas bon marché et ajouté des commentaires des testeurs de notre laboratoire. Vous pouvez donc être certain que s'il figure sur cette liste, c'est que nous l'avons personnellement testé, que nous avons dormi dessus et que nous nous en tenons à sa recommandation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px]
                text-left text-wrap w-[80%] mb-20`}>
                    Sinun pitäisi saada hyvät yöunet rikkomatta pankkia. Onneksi me autamme. Viimeisten 20 vuoden aikana markkinoille on tullut kymmeniä patjayrityksiä, mikä on tarjonnut budjettitietoisille ostajille enemmän vaihtoehtoja kuin koskaan aiemmin. Jos etsit parasta edullista patjaa, lue eteenpäin. Käymme läpi patjojen hinnoittelua, sitä, miten kalliimmat vaihtoehdot eroavat edullisemmista vaihtoehdoista, ja miten voit päättää, mikä malli sopii sinulle ja lompakollesi. Lopputuloksena on parhaiden edullisten patjojen yhteenvetomme.
                    <p>&nbsp;</p>
                    En ce qui concerne le prix, nous n'avons retenu que les matelas dont le prix était inférieur ou égal à 1 000 $ pour un grand lit après déduction des remises, mais qui ont tout de même obtenu de bons résultats dans la plupart de nos tests (pour en savoir plus, consultez le guide d'achat au bas de cette page). Certains de ces matelas sont à 1 000 $ ou moins pour un lit queen size avant toute réduction.
                </div>
                <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
                    <div className="w-full lg:w-[65%]">
                        <div className="flex flex-col w-[90%] items-start justify-center bg-[#cae2f5] rounded-[30px] py-[20px] px-[5%] mb-20">
                            <p className={`${styles.manropeFont} text-center md:text-left text-3xl font-bold w-full pb-[20px]`}>&nbsp; Les meilleurs matelas économiques de 2024: &nbsp;</p>
                            
                            <div className="flex flex-col justify-between items-start text-[18px] text-left w-full pl-[3%]">
                            {
                                bestBudgetMattress.map((item:any, index:any) =>
                                <div key={index} className="block lg:flex leading-10">
                                    <p className={`${styles.robotoFont} font-bold text-[#151160]`}>
                                    - {item.company} :
                                    </p>
                                    <p className={`${styles.rubikFont} `}>
                                    &nbsp; {item.description}
                                    </p>
                                </div>
                                )
                            }
                            </div>
                        </div>
                        {/* <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[20px] lg:text-[26px] md:text-[22px] text-wrap text-left pb-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les meilleurs matelas économiques de 2024
                                </p>
                                {
                                    lookBestState.map((item, index) => 
                                        <div className={`${styles.rubikFont} text-[#1A1D20] text-[2vw] lg:text-[22px] text-left text-wrap w-[100%] pt-5`}>
                                            <div className="font-bold hover:cursor-pointer text-[20px]" onClick={()=>{
                                                console.log(index, 'pressed!!!');
                                                setLookBestState((bestItem) => {
                                                    const updatedItems = bestItem.map((item, idx) => {
                                                      if (idx === index) {
                                                        return {
                                                          ...item,
                                                          state: !item.state
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                });
                                            }}>
                                                &nbsp;&nbsp;&nbsp;{item.state === false ? '+' : '-'}&nbsp;&nbsp;&nbsp; {item.title}
                                            </div>
                                            {item.state && item.content}
                                        </div>
                                    )
                                }
                            </div>
                        </div> */}

                        <p className={`${styles.manropeFont} text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
                            Comparez les meilleurs matelas en 2024 : &nbsp;
                        </p>
                        <div className="overflow-scroll overflow-y-scroll mt-2 w-[90%] mb-20">
                            <table className="min-w-[1500px] divide-y divide-gray-200 border border-grey-200  bg-grey-100 mb-[20px]">
                            <thead>
                                <tr className="overflow-x-scroll">
                                    <th className="px-2 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                    {
                                        compareData.map((item:any, index:any) =>
                                            <th className="px-3 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200 w-[500px]">
                                                <img
                                                    src={item.mark} // Replace with the path to your image file
                                                    alt="Sample"
                                                    className="w-full h-full"
                                                />
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody className={`${styles.rubikFont} divide-y divide-gray-200`}>
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200 w-[800pxs]">Modale</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.model}
                                        </td>
                                    )}
                                </tr>
                                <tr className="w-[500px]">
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200 w-[300px]">Rating</td>
                                    {
                                    compareData.map((item:any, index:any) => 

                                        <td className="px-2 py-2 border border-gray-200 text-center">
                                            <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap justify-center items-center my-[10px] text-[#FDCC80]">
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src={`${item.rate > 4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                {/* <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{item.rate}/5.0</span> */}
                                            </div>
                                        </td>
                                    )
                                }
                                </tr>
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Firmness</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.firmness}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Material</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.material}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Cooling</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.cooling}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Sleep Position</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.sleep_position}
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        
                        {
                            compareData.map((item:any, index:any) =>
                                <div className="w-[90%] mt-[50px]">
                                    <p className={`${styles.manropeFont} text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
                                        {item.title} - {item.sort}
                                    </p>
                                    <div className="border-2 border-[#E9E9EA] pt-[50px] border-b-1 px-[3%]">
                                        <p className={`${styles.manropeFont} text-2xl font-bold w-full pb-[20px] text-left`}>&nbsp; {item.model} &nbsp;
                                        </p>
                                        <div className="block md:flex justify-around items-start text-left w-full pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px]">
                                            <div className="w-2/9 flex flex-col justify-start items-center">
                                                <Image
                                                    src={item.mark} // Replace with the path to your image file
                                                    alt="Sample"
                                                    width={200} // Set the width of the image
                                                    height={50} // Set the height of the image
                                                    className="hidden md:block rounded-[10px] w-[80%] md:w-full mb-5"
                                                />
                                            </div>
                                            <div className="flex flex-col pl-[5%] pr-[5%] w-full md:w-[56%]">
                                                <p className={`${styles.manropeFont} font-medium text-[#151160] text-[12px] md:text-[16px] pl-[10px]`}>
                                                    {item.content}
                                                </p>
                                                <p className={`${styles.manropeFont} font-medium text-[#a19dfb] text-[12px] md:text-[16px] pl-[10px] underline pt-2`}>
                                                    Vérifier les avis
                                                </p>
                                            </div>
                                            <div className = "flex flex-col justify-center items-center w-2/9 mr-[10px]">
                                                <div className={starState}>
                                                    <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap items-center mb-[10px] text-[#FDCC80]">
                                                        <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{item.rate}/5.0</span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src={`${mattressData[0].rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
                                                    </div>
                                                </div>
                                                <button className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-5 border border-[#F7e4D6]`}>
                                                    Visit Site
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-2 border-[#E9E9EA] border-t-0"> 
                                        <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#82a5f9] hover:cursor-pointer`}
                                            onClick={() => {
                                                setCompareData((bestItem) => {
                                                    const updatedItems = bestItem.map((ite, idex) => {
                                                      if (idex === index) {
                                                        return {
                                                          ...ite,
                                                          overviewState: !ite.overviewState
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                })
                                            }}
                                        >
                                            Detalle del producto
                                        </div>
                                        {
                                            item.overviewState && <div className="block md:flex md:flex-wrap justify-center items-start text-center ml-[7%] gap-[5%] px-[10px] py-[5%] bg-white rounded-[10px] w-[90%]">
                                                {
                                                    item.overview.map((it:any, idx:any) =>
                                                        <div key={idx} className="flex flex-row justify-start items-center w-[100%] md:w-[30%] my-[5%]">
                                                            <Image
                                                                src={it.img} // Replace with the path to your image file
                                                                alt="Sample"
                                                                width={100} // Set the width of the image
                                                                height={100} // Set the height of the image
                                                                className="w-[65px]"
                                                            />
                                                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                                {it.title}
                                                                <p className={`${styles.rubikFont} text-[#69747F] text-[12px] lg:text-[14px] font-bold 
                                                                text-left text-wrap w-[100%]`}>
                                                                    {it.content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/material.png" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Matériel
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/firmness.svg" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Fermeté
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        }
                                    </div>
                                    <div className="border-2 border-[#E9E9EA] border-t-0">
                                        <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#82a5f9] hover:cursor-pointer`}
                                            onClick={() => {
                                                setCompareData((bestItem) => {
                                                    const updatedItems = bestItem.map((ite, idex) => {
                                                      if (idex === index) {
                                                        return {
                                                          ...ite,
                                                          recommendationState: !ite.recommendationState
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                })
                                            }}
                                        >
                                            Nuestra recomendación
                                        </div>
                                        {
                                            item.recommendationState && <div className="block justify-start items-start text-center ml-[7%] gap-[5%] px-[10px] py-[5%] bg-white rounded-[10px] w-[90%]">
                                                <p className={`${styles.manropeFont} text-[#1A1D20] text-[12px] lg:text-[14px] font-bold text-wrap text-left`}>Nous recommandons ce matelas pour les types de dormeurs suivants :</p>
                                                {
                                                    item.recommendation.map((it:any, idx:any) =>
                                                        <div key={idx} className="flex flex-row justify-start items-center w-[100%] my-[5%]">
                                                            <Image
                                                                src={it.img} // Replace with the path to your image file
                                                                alt="Sample"
                                                                width={100} // Set the width of the image
                                                                height={100} // Set the height of the image
                                                                className="w-[65px]"
                                                            />
                                                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                                {it.title}
                                                                <p className={`${styles.rubikFont} text-[#69747F] text-[12px] lg:text-[14px] font-bold 
                                                                text-left text-wrap w-[100%]`}>
                                                                    {it.content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/material.png" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Matériel
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/firmness.svg" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Fermeté
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        }
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Opinion d'expert</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[12px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            {/* Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement.
                                            <br></br><br></br>
                                            Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit. */}
                                            {/* {item.expert_opinion} */}
                                        </p>
                                        {item.expert_opinion.split('\n').map((line:any, idx:any) => (
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap w-[100%]`} key={idx}>
                                                {line}
                                                <br></br>
                                            </p>
                                        ))}
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                        <span className="font-bold">{item.testersay[0]}</span> 
                                        <span className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            &nbsp;{item.testersay[1]} –&nbsp;
                                        </span>
                                        <span className="font-bold">{item.testersay[2]}</span>
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Ce que disent les clients</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            {item.customersay}
                                        </p>
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Points forts du matelas Sensoreve Elekctra</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        {
                                            item.pros.map((ite:any, idex:any) =>
                                                <div key={idex} className="flex flex-row w-full items-start justify-left">
                                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                    text-left px-5`}>
                                                        • &nbsp;
                                                    </p>
                                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                    text-left text-wrap`}>
                                                        {ite}
                                                    </p>
                                                </div>
                                            )
                                        }
                                        {/* <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra.
                                            </p>
                                        </div> */}
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du matelas Sensoreve Elekctra</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                {item.cons}
                                            </p>
                                        </div>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap pt-5`}>
                                            Pour en savoir plus, consultez notre avis complet sur le <a className="text-blue-500 underline">{item.reviewName}</a> ou cliquez ici pour obtenir notre meilleure offre. Vous trouverez d'autres options dans notre tour d'horizon des meilleurs matelas pour les dormeurs mixtes.
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                        {/* <div className="w-[90%]">
                            <div className="border-2 border-[#E9E9EA] pt-[50px] border-b-1 px-[3%]">
                                <p className={`${styles.manropeFont} text-2xl font-bold w-full pb-[20px] text-left`}>&nbsp; Matelas Sensoreve Elekctra &nbsp;
                                </p>
                                <div className="block md:flex justify-around items-start text-left w-full pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px]">
                                    <div className="w-2/9 flex flex-col justify-start items-center">
                                        <Image
                                            src={mattressData[0].img} // Replace with the path to your image file
                                            alt="Sample"
                                            width={200} // Set the width of the image
                                            height={50} // Set the height of the image
                                            className="hidden md:block rounded-[10px] w-[80%] md:w-full mb-5"
                                        />
                                    </div>
                                    <div className="flex flex-col pl-[5%] pr-[5%] w-full md:w-[56%]">
                                        <p className={`${styles.manropeFont} font-medium text-[#151160] text-[12px] md:text-[18px] pl-[10px]`}>
                                            L’Helix Midnight a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.
                                        </p>
                                        <p className={`${styles.manropeFont} font-medium text-[#a19dfb] text-[12px] md:text-[18px] pl-[10px] underline pt-2`}>
                                            Vérifier les avis
                                        </p>
                                    </div>
                                    <div className = "flex flex-col justify-center items-center w-2/9 mr-[10px]">
                                        <div className={starState}>
                                            <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap items-center mb-[10px] text-[#FDCC80]">
                                                <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{mattressData[0].rate}/5.0</span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src={`${mattressData[0].rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
                                            </div>
                                        </div>
                                        <button className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-5 border border-[#F7e4D6]`}>
                                            Visit Site
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-[#E9E9EA] border-t-0">
                                <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#FDCC80]`}>Aperçu du matelas</div>
                                <div className="block md:flex justify-center items-start text-center ml-[12.5%] gap-[5%] pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px] w-[70%]">
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/material.png" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Matériel
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/firmness.svg" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Fermeté
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:flex justify-center items-start text-center ml-[12.5%] gap-[5%] pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px] w-[70%]">
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/price.svg" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Prix
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                539,99 € - 749,99 € (avant toute remise)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/size.png" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Taille
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Twin, twin XL, full, queen, king.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Opinion d'expert</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement.
                                    <br></br><br></br>
                                    Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <span className="font-bold">Ce que dit notre testeur :</span> 
                                <span className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    &nbsp;“I love that the Sensoreve Elekctra offers solid edge support — you can use the whole bed! It also has great motion isolation, which makes it a nice option for couples. I also really like this bed for combination sleepers. The mattress is bouncy, making it easy for you to roll over or switch positions at night without worrying that you’ll get ‘stuck’ in the bed.” –&nbsp;
                                </span>
                                <span className="font-bold">Bridget Chapman, former senior product editor</span>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce que disent les clients</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    De nombreuses critiques mentionnent le Helix Sleep Quiz, qui dure 30 secondes et aide les acheteurs à trouver le meilleur modèle Helix pour leurs besoins. De nombreux acheteurs ont acheté le Sensoreve Elekctra à cause du quiz sur le sommeil, et beaucoup d’entre eux ont des critiques positives.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Points forts du matelas Sensoreve Elekctra</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du matelas Sensoreve Elekctra</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        De toutes les positions de sommeil, les dormeurs sur le ventre ont besoin de plus de soutien, et ils ne l’obtiendront probablement pas sur le Sensoreve Elekctra.
                                    </p>
                                </div>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap pt-5`}>
                                    Learn more in our full <a className="text-blue-900 underline">Sensoreve Elekctra mattress review</a> or click here for our best deal.  Find additional options in our roundup of the <a className="text-blue-900 underline">best online mattresses</a>.
                                </p>
                            </div>
                        </div> */}

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment trouver le meilleur matelas pour vous
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Si vous n’avez pas trouvé le matelas que vous souhaitiez ci-dessus, vous pourriez bénéficier de l’un de nos guides de matelas plus spécifiques. Vous trouverez ci-dessous quelques-unes de nos recommandations basées sur le type de corps, l’âge, la position de sommeil, la gestion de la douleur, etc. Vous pouvez également consulter notre guide sur la façon de <a className="text-blue-900 underline">choisir un matelas</a> qui répond à vos besoins, et si vous vous sentez toujours dépassé, pensez à répondre à notre <a className="text-blue-900 underline">quiz sur le matelas</a> pour une recommandation personnalisée.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Position de sommeil</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs latéraux réussissent mieux sur des matelas souples à moyennement fermes qui amortissent les points de pression au niveau de leurs hanches et de leurs épaules.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le dos ont besoin d’un équilibre approprié entre soulagement de la pression et soutien pour maintenir leur colonne vertébrale en ligne droite, et ils le trouveront généralement dans un matelas moyennement ferme.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le ventre ont besoin d’un lit ferme qui maintient leurs hanches alignées avec leurs épaules.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs mixtes préfèrent généralement les matelas sur lesquels il est facile de se déplacer et de changer de position. Nous recommandons à ces dormeurs de s’en tenir à un matelas gonflable avec une sensation moyennement ferme.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Construction du matelas</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas à ressorts reposent sur des systèmes de support à ressorts. Ils ont souvent une sensation ferme et rebondissante et fonctionnent bien pour les dormeurs sur le ventre, sur le dos et mixtes.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas hybrides utilisent un mélange de mousse et de support à ressorts, et leurs sensations varient considérablement.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas en mousse ne comprennent aucun support de ressorts. Ils utilisent des couches de mousse pour amortir et soutenir le dormeur. Les matelas en mousse à mémoire de forme sont un type populaire de matelas entièrement en mousse qui offre beaucoup de contour du corps et un soulagement de la pression.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas en latex sont souvent fabriqués à partir de mousse de latex écologique Dunlop ou Talalay. Ces lits sont naturellement rafraîchissants et gonflables. Les dormeurs mixtes et les personnes lourdes aiment souvent ces lits.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas pneumatiques utilisent l’air pour soutenir le dormeur pendant la nuit.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Points forts du matelas bouleau naturel</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Choisir une surface de sommeil qui aide à atténuer la douleur est particulièrement important pour les dormeurs qui souffrent de douleur chronique. Nous avons sélectionné des options de matelas qui pourraient soulager plusieurs types de douleur différents.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <p className="font-bold">Comment votre matelas peut-il soulager la douleur ?</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%]`}>
                                    Un matelas offrant un soulagement et un soutien importants de la pression est essentiel pour soulager la douleur. Sans soulagement de la pression, vous pouvez vous réveiller raide et endolori – ce que nous savons que vous ne voulez pas. En plus du soulagement autour de vos points de pression, votre corps a besoin de soutien pour parvenir à l’alignement de la colonne vertébrale.
                                    <br></br><br></br>
                                    Voici les zones qui ont le plus besoin de soutien en fonction de votre position de sommeil préférée :
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs sur le dos :</span>&nbsp;bas du dos et épaules
                                    </div>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs latéraux :</span>&nbsp;épaules et hanches
                                    </div>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs sur le ventre : </span>&nbsp;Hanches
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du matelas naturel en bouleau</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Si vous souhaitez un matelas durable et de qualité, consultez les meilleurs matelas bon marché.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Dormeurs chauds / Technologie de refroidissement</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Si vous recherchez un matelas qui dort au frais, nous vous recommandons d’opter pour un matelas en latex, hybride ou à ressorts. Ces lits ont tendance à favoriser la circulation de l’air, ce qui est important pour maintenir une température basse la nuit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Type de corps et poids corporel</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] bg-[#eef5f9] py-8 rounded-lg px-4 mb-3`}>
                                    Nous reconnaissons que les gens sont de toutes formes et de toutes tailles, et que les personnes de toutes tailles méritent un matelas adapté à leur morphologie. Nous utilisons les catégories de poids léger, moyen et lourd pour catégoriser plus facilement les dormeurs en fonction des performances des matelas pour leur type de corps, car la plupart des matelas sont conçus pour le groupe que nous appelons "moyen" (130 à 250 livres).
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs de moins de 130 livres trouveront souvent des matelas plus fermes que les dormeurs de poids moyen. Nous recommandons à ces dormeurs de jeter un œil aux meilleurs matelas moelleux pour être sûrs qu’ils obtiennent le soulagement de la pression dont ils ont besoin.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs de plus de 250 livres ont besoin d’un lit offrant un soutien supplémentaire pour éviter l’affaissement prématuré du matelas. La durabilité globale et le support des bords sont généralement des préoccupations importantes.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les enfants ont un corps qui grandit et évolue rapidement et qui a des besoins spécifiques en matière de sommeil.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les seniors (plus de 65 ans) préfèrent généralement les matelas à sensation plus traditionnels qui offrent mobilité et soutien, mais qui restent doux pour les articulations sensibles.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les adolescents continuent de grandir et ont également des besoins spécifiques en matière de sommeil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment nous avons choisi le meilleur matelas de 2024
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Lorsque nous testons un nouveau matelas, nous nous allongeons (sans surprise) dessus pour vous donner notre avis personnel sur sa sensation, mais nous ne vous demandons pas de nous croire sur parole. Une fois que nous avons essayé le matelas nous-mêmes, nous le testons avec une carte de pression, un sismomètre et d’autres méthodes pour vous donner des mesures objectives du transfert de mouvement, du soulagement de la pression, du rebond et des capacités de soutien des bords d’un lit. Nous évaluons également nos matelas de test couche par couche pour examiner leurs matériaux et leur technologie de refroidissement. Cela nous aide à garantir que chaque marque tient ses promesses marketing.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">L'allègement de la pression</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    L'un de nos tests les plus importants concerne la décompression. Le soulagement de la pression est une mesure de la répartition uniforme de votre poids sur un matelas. Un matelas avec un excellent soulagement de la pression amortit les points de pression au niveau des épaules, des hanches et du bas du dos pour vous empêcher de vous réveiller raide et endolori le matin.
                                </p>
                                <img src="/img/lucid_mattress.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Pour tester la décompression, nous utilisons un test de carte de pression. Un évaluateur s'allonge sur un tapis à pression (comme celui que vous voyez ci-dessus) dans plusieurs positions de sommeil différentes. Le tapis enregistre la pression exercée et crée une « carte de pression » qui montre les zones de basse pression en bleu, de moyenne basse pression en vert, de moyenne pression en jaune, de moyenne haute pression en orange et de haute pression en rouge. Ces résultats nous permettent de savoir dans quelle mesure un matelas soulagera la pression dans chacune des principales positions de sommeil. Jetez un œil à un exemple de résultat de carte de pression ci-dessous.
                                </p>
                                <img src="/img/sleep_presure.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Un aperçu d'une carte de pression illustrant une bonne décompression.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Rebond</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Notre test de rebond nous permet de connaître la réactivité d'un matelas. Ceci est important pour les dormeurs mixtes qui ont besoin d’un lit réactif, facile à déplacer et à changer de position.
                                    <br></br><br></br>
                                    Notre test de rebond est assez simple, il suffit de déposer une bille d'acier de 10 livres sur le matelas et de mesurer la hauteur à laquelle elle rebondit. Plus la balle rebondit haut, plus le matelas est réactif. Les matelas en latex ont tendance à très bien réussir ce test. Jetez un œil à nous effectuant le test de rebond ci-dessous.
                                </p>
                                <img src="/img/bounce.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Test du rebond.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Transfert de mouvement</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Un autre test important est notre test de transfert de mouvement. Le transfert de mouvement est une mesure de la quantité de mouvement qui se déplace d’un côté à l’autre du matelas. Si vous dormez avec un partenaire ou un animal de compagnie, cela permet de déterminer si vous vous sentirez ou non dérangé par le fait qu'ils se retournent et se retournent la nuit. Nous utilisons un sismomètre et une bille d'acier (comme vous le voyez ci-dessous) pour mesurer le transfert de mouvement.
                                </p>
                                <img src="/img/transfer.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Exécution d'un test de transfert de mouvement.
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Au cours de ce test, nous laissons tomber la bille d'acier sur le matelas à des hauteurs de quatre pouces, huit pouces et 12 pouces pour imiter divers mouvements, allant du lancer et du retournement au saut sur le lit. Le sismomètre enregistre tout ce mouvement et crée un graphique comme celui ci-dessous. Un graphique avec de petites lignes nous indique qu’un matelas isole bien les mouvements. Les grandes lignes nous indiquent que vous vous sentirez probablement dérangé par un partenaire agité sur un certain matelas.
                                </p>
                                <img src="/img/transfer_compare.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Un exemple de résultats de tests de transfert de mouvement élevé.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                    <p className="font-bold">Pourquoi l'isolation des mouvements est importante</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%]`}>
                                        Si vous dormez seul, vous ne vous souciez peut-être pas des capacités d’isolation des mouvements de votre matelas. Cependant, les personnes qui dorment avec un partenaire, un enfant ou un animal de compagnie peuvent apprécier un matelas qui minimise le transfert de mouvement. Les matelas dotés d’une bonne isolation des mouvements peuvent vous aider à éviter d’être dérangé par leurs mouvements tout au long de la nuit.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Prise en charge périphérique</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Notre test de support de bord nous permet de savoir si vous pouvez dormir (ou vous asseoir) complètement sur le bord d'un matelas sans avoir l'impression qu'il pourrait s'effondrer. Les matelas à ressorts ont souvent des bords très solides. Le soutien des bords est important car des bords solides peuvent donner l’impression que votre matelas est un peu plus grand puisque vous pouvez vous étendre sur toute sa surface. Un soutien solide des bords empêche également l’affaissement prématuré au milieu de votre matelas, car vous êtes en mesure de répartir uniformément votre poids.
                                </p>
                                <img src="/img/edge_test.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Notre test de support de bord est très simple : nous nous asseyons et nous allongeons tout au long du bord du lit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Matériaux</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Après tous ces tests, nous ouvrons la housse de chaque matelas pour évaluer les matériaux à l’intérieur. Nous passons en revue chaque couche de mousse pour vous expliquer le fonctionnement du lit. Nous recherchons également des éléments tels que des housses hypoallergéniques, des matériaux respectueux de l'environnement, des mousses certifiées CertiPUR-US® et une technologie de refroidissement.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Valeur et politiques de l'entreprise</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Une fois que nous avons testé la sensation, les matériaux et les performances d’un matelas, notre équipe évalue le prix de chaque lit, la garantie du matelas, les politiques d’expédition, la période d’essai de sommeil et les équipes du service client dans le contexte de l’industrie du matelas en général. C’est ainsi que nous décidons si vous obtenez une bonne affaire sur votre nouveau lit. Tous nos évaluateurs ont une grande connaissance des matelas à partager et s’efforcent de proposer des critiques informatives et honnêtes de tous les lits qu’ils testent. À partir de là, nous établissons une note globale pour chaque matelas.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Acheter un matelas en ligne ou en magasin ?
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Vous avez peut-être remarqué que tous les matelas que nous avons recommandés ci-dessus sont disponibles en ligne. C’est parce que l’équipe Somnopolis préfère acheter des matelas dans l’espace numérique. Mais que vous deviez acheter un matelas en ligne ou en magasin dépend vraiment de vos préférences. Pour en savoir plus sur ce qui fonctionne pour vous, consultez notre <a className="text-blue-900 underline">guide d’achat de matelas en magasin ou en ligne</a>.
                                    <br></br><br></br>
                                    Nous préférons acheter en ligne car les détaillants de matelas en ligne réduisent les frais généraux tels que les vendeurs et les salles d'exposition, ce qui signifie que vous pouvez normalement économiser plus d'argent en choisissant un matelas en ligne. Nous trouvons également plus pratique d’acheter en ligne et de faire expédier un lit à ma porte. Quelle que soit votre décision, nous vous recommandons de consulter notre page de <a className="text-blue-900 underline">coupons de matelas et de codes promotionnels</a> avant l’achat pour vous assurer d’obtenir une bonne affaire.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <p className="font-bold">Achat de matelas en magasin ou en ligne</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Chez Sleepopolis, nous préférons acheter nos matelas en ligne. Voici quelques raisons pour lesquelles :
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Commodité :</span>&nbsp;les matelas en ligne sont expédiés directement à votre porte en un seul clic
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Économie d’argent :</span>&nbsp;les détaillants en ligne n’ont pas besoin de vendeurs ni de salles d’exposition, leurs matelas sont donc généralement moins chers. Ils ont également tendance à proposer davantage d’offres et de coupons.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Périodes d’essai :</span>&nbsp;comme vous ne pouvez pas essayer le matelas en magasin, les détaillants en ligne proposent généralement des périodes d’essai généreuses. Cela signifie que vous pouvez réellement dormir sur le matelas au lieu de simplement vous allonger dessus pendant quelques instants. Si vous décidez que vous ne l’aimez pas, vous pouvez généralement le retourner ou l’échanger.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    FAQ
                                </p>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-5`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Combien dois-je dépenser pour un matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        Bien que cela dépende de votre budget individuel, un matelas de valeur est généralement considéré comme un matelas inférieur à 1 000 $ pour un lit queen-size. Fixez-le donc comme limite de dépenses si vous cherchez à économiser de l’argent. Nous pensons que le Bear est un excellent matelas bon marché, et vous pouvez souvent obtenir le luxe DreamCloud pour moins de 1 000 $ après réductions.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur moment pour acheter un matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        De nombreuses marques de literie lancent d’énormes ventes pendant les jours fériés fédéraux, alors gardez un œil sur les offres autour du President’s Day, du Memorial Day et même de la fête du Travail. Vous trouverez aussi naturellement une tonne d’offres autour du Black Friday. Consultez notre page de coupons et de codes promotionnels pour matelas toute l’année pour rester au courant des dernières réductions.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   À quelle fréquence dois-je remplacer mon matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        En général, vous devez remplacer votre ancien matelas tous les 7 à 10 ans. Cependant, un matelas peut s’affaisser prématurément si vous ne le placez pas sur une base adéquate ou si vous ne le traitez pas brutalement. Vous pouvez également prolonger la durée de vie d’un vieux matelas de quelques mois en ajoutant un surmatelas.
                                        <br></br><br></br>
                                        Chaque fois que vous achetez un nouveau lit, il est important de jeter un œil à sa garantie, qui peut également vous donner une bonne idée de sa durée.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour les maux de dos ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        La plupart des personnes souffrant de maux de dos trouvent qu’un matelas ferme ou moyennement ferme leur convient le mieux. Ce type de lit vous aidera à garder votre colonne vertébrale droite pendant la nuit, ce qui peut contribuer à soulager beaucoup de douleurs.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour dormir sur le ventre ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        De toutes les positions de sommeil, celles qui dorment sur le ventre nécessitent le plus de soutien. Dans cet esprit, il est préférable pour eux d’opter pour un lit renforcé par des ressorts ensachés. S’ils examinent les matelas de cette liste, les WinkBeds Plus et le Saatva pourraient être de bonnes options.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour dormir sur le côté ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        Les dormeurs latéraux se situent à l’autre extrémité du spectre des dormeurs sur le ventre. Bien qu’ils aient encore besoin d’un certain soutien, ils ont tendance à préférer les lits plus moelleux (ou moyennement fermes) qui ont beaucoup de rembourrage pour leurs épaules et leurs hanches. La plupart des matelas de cette liste devraient convenir parfaitement aux dormeurs latéraux, notamment le Sensoreve Elekctra.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-4 rounded-lg`}>
                                <p className="font-bold text-center">Comment nous choisissons ces matelas</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Notre équipe de coachs certifiés en sciences du sommeil a examiné plus de 300 produits dans notre laboratoire de matelas, soumettant chacun d'eux à des tests tels que la cartographie de la pression et la mesure du transfert de mouvement avec un sismomètre. À partir de là, nous attribuons à chaque lit une note globale basée sur les matériaux, le confort, le soutien, le refroidissement et le support des bords. Nous prenons également en compte les performances de la marque avec des catégories telles que la valeur et la garantie.
                                    <br></br><br></br>
                                    Puisque nous voulions que notre liste des meilleurs matelas de 2024 représente véritablement le meilleur des meilleurs, nous avons pris en compte la note globale de chaque lit. Tous les matelas de cette liste ont une note globale de 4 sur 5 ou plus. <a className="text-blue-900 underline">Cliquez ici pour en savoir plus sur notre méthodologie.</a>
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les matelas les mieux notés de 2024
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Voilà pour notre répartition des meilleurs matelas de l’année. Si vous souhaitez une comparaison côte à côte de ces lits, jetez un œil au tableau ci-dessous.
                                </p>
                            </div>
                            
                            {/* <div className="mt-2">
                                <table className="w-full divide-y divide-gray-200 border border-grey-200  bg-grey-100 text-[12px] md:text-[14px]">
                                <tbody className="divide-y divide-gray-200" >
                                    <tr>
                                    <td className={`${styles.robotoFont} px-6 py-2 whitespace-no-wrap w-[27%] border border-gray-200`}>Taille</td>
                                    <td className={`${styles.rubikFont} px-6 py-2 whitespace-no-wrap w-[73%]`}>{item.size}</td>
                                    </tr>
                                    <tr className="bg-[#F1F1F1]">
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Matériel</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.material}</td>
                                    </tr>
                                    <tr>
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Fermeté</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.firmness}</td>
                                    </tr>
                                    <tr className="bg-[#F1F1F1]">
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Expédition</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.shipping}</td>
                                    </tr>
                                    <tr>
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Période d'essai</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.trialperiod}</td>
                                    </tr>
                                    <tr className="bg-[#F1F1F1]">
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Garantie</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.warranty}</td>
                                    </tr>
                                    <tr>
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Meilleur pour</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.bestfor}</td>
                                    </tr>
                                    <tr className="bg-[#F1F1F1]">
                                    <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Financement</td>
                                    <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.financing}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>
                    <div id="sidePos" className="md:-webkit-sticky md:sticky w-[80%] lg:w-[32%] right-[2vw] lg:h-[90vh] top-[10vh] flex items-start flex-col lg:border-l pl-[2%] border-none lg:border-[#1A1D20] pb-[20px]  overflow-y-auto mt-[50px]">
                        <a href="https://senoreve.com" className="w-full flex justify-center items-center">
                            <img
                            src="/img/mark.png" // Replace with the path to your image file
                            alt="Mark"
                            className="lg:w-[18vw] lg:h-[3vw] w-[60%]"
                            />
                        </a>
                        <video
                            className="w-[70%] rounded-lg border border-[#FFBF00] my-[10px] mx-[15%]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="w-full flex items-center justify-center">
                            
                            <span className={`${styles.robotoFont} text-[3vw] lg:text-[1vw] text-[#1A1D20]`}>4.4/5.0 </span>
                            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
                            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
                            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
                            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
                            <span ><img src="/img/star_empty.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>		
                        </div>
                        <div className="w-full flex flex-col justify-start align-start">
                            <div className="w-full flex justify-center items-center">
                                <span >
                                    <img src="/img/Reviewer.jpg" alt="évaluateur"  className="lg:w-[3.5vw] lg:h-[3.5vw] w-[10vw] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} text-[14px] md:text-[18px] ml-[5%] text-left`}>Écrit par<br></br>
                                    Logan Block, évaluateur de matelas
                                </p>
                            </div>
                            <div className="flex w-[90%] mx-[5%] justify-start align-start flex-col">
                                <p className={`${styles.manropeFont} w-full text-center text-[16pt] lg:text-[18pt] font-bold mt-[10px]`}>
                                    Notre meilleur choix de matelas
                                </p>
                                <p className={`${styles.rubikFont} w-full text-left text-[16px]`}>
                                    Le matelas&nbsp;
                                    <a href="https://sensoreve.com" className="text-blue-500">
                                        Sensoreve Elekctra
                                    </a> 
                                    &nbsp;occupe la première place en raison de sa sensation moyennement ferme qui peut plaire à une variété de dormeurs différents, quelle que soit la position de sommeil ou le type de corps. De plus, la couche de support composée de ressorts emballés individuellement fournit un soulèvement qui peut soulager la pression sur vos épaules et le bas du dos.
                                </p>
                            </div>
                            <a href="https://sensoreve.com">
                                <button className={`${styles.manropeFont} bg-[#FFBF00] hover:bg-[#F7E4D6] text-blue font-bold px-4 rounded-[10px] w-[80%] mx-[10%] py-4 mt-[20px] border border-[#F7e4D6]`}>Visit Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <BottomBar/>
            </div>

        </div>
    );
}

