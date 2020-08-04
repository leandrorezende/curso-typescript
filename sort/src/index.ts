import {NumbersCollections} from "./NumbersCollections";
import {CharactersCollections} from "./CharactersCollections";
import {LinkedListCollections} from "./LinkedListCollections";

const numbersCollections = new NumbersCollections([50, 3, -5, 0]);
numbersCollections.sort();
console.log(numbersCollections.data);

const charactersCollections = new CharactersCollections('eXaayb');
charactersCollections.sort();
console.log(charactersCollections.data);

const linkedList = new LinkedListCollections();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();