const main = document.querySelector('main');
const introMessage = document.getElementById('introMessage');
const leftOption = document.getElementById('leftOption');
const rightOption = document.getElementById('rightOption');

const story = [
  {
    introduction: 'You find yourself at the edge of the Enchanted Forest, a place rumored to be filled with magic, mystery, and danger. As you step into the forest, you come to a fork in the path.'
  },
  {
    path1: 'You choose the left path, which is lined with glowing mushrooms.'
  },
  {
    choicea: 'You decide to follow the glowing mushrooms deeper into the forest.'
  },
  {
    outcomea1: 'You find a hidden grove where fairies are dancing. They offer you a wish in exchange for a small favor.',
    accept: 'You gain a magical item that helps you later in your journey.',
    decline: 'The fairies guide you safely out of the forest, ending your adventure.'
  },
  {
    outcomea2: 'The mushrooms lead you to a dark cave. Inside, you find a treasure chest.',
    fightdragon: 'You defeat the dragon and keep the treasure.',
    fleecave: 'You escape but leave the treasure behind.',
    leavechest: 'You exit the cave safely and continue your journey.'
  },
  {
    choiceb: 'You ignore the glowing mushrooms and continue straight ahead.'
  },
  {
    outcomeb1: 'You encounter a talking tree that offers you wisdom.',
    listen: 'You gain valuable knowledge that helps you navigate the forest.',
    ignore: 'You get lost and face various challenges before finding your way out.'
  },
  {
    path2: 'You choose the right path, which is covered in thick vines and has a mysterious fog.'
  },
  {
    choicea: 'You decide to cut through the vines with your knife.'
  },
  {
    outcomea1: 'You discover an ancient ruins site with inscriptions.',
    read: 'You unlock a secret passage leading to an underground chamber.',
    explore: 'You find an ancient artifact with magical powers.',
    leave: 'You avoid potential traps and continue your journey.',
    ignore: 'You miss out on the artifact but avoid any potential danger.'
  },
  {
    outcomea2: 'The vines lead you to a hidden waterfall with a secret behind it.',
    investigate: 'You find a hidden entrance to a mystical realm.',
    enterrealm: 'You embark on a new adventure in a magical world.',
    stayout: 'You enjoy the beauty of the waterfall and return home with a sense of wonder.',
    ignore: 'You continue on your path, eventually finding your way out of the forest.'
  },
  {
    choiceb: 'You decide to follow the mysterious fog.'
  },
  {
    outcomeb1: 'The fog leads you to a wise old hermit who offers to teach you ancient spells.',
    learn: 'You gain magical abilities that help you in future adventures.',
    decline: 'The hermit gives you a charm for protection and sends you on your way.'
  },
  {
    outcomeb2: 'The fog thickens, and you find yourself in a maze of thorny bushes.',
    navigate: 'You find your way through and discover a hidden glade with rare herbs.',
    collectherbs: 'You gain valuable resources for healing and potions.',
    leave: 'You avoid potential dangers and continue your journey.',
    turnback: 'You retrace your steps and find an alternate path out of the forest.'
  },
];
