import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-directory',
  imports: [CommonModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
})
export class EmployeeDirectory {
  blondeblazer = '/Blonde_Blazer.webp';
  phenomaman = '/Phenomaman.webp';
  sweettalker = '/Sweettalker.webp';
  equilibrium = '/Equilibrium.webp';
  pompom = '/Pom_Pom.webp';
  brickhouse = '/Brickhouse.webp';
  brainbook = '/Brainbook.webp';

  coupe = '/Coupe.webp';
  flambae = '/Flambae.webp';
  golem = '/Golem.webp';
  invisigal = '/Invisigal.webp';
  malevola = '/Malevola.webp';
  prism = '/Prism.webp';
  punchup = '/Punch_Up.webp';
  sonar = '/Sonar.webp';

  manager = {
    name: 'Blonde Blazer',
    titles: ['Lionheart', 'Champion'],
    bio: 'Manager of the SDN Torrance branch. Has several brand deals and films commercials in Europe.',
    img: this.blondeblazer,
    powers: ['Superhuman Strength', 'Radiant Light'],
  };

  dtlaHeroes = [
    {
      name: 'Phenomaman',
      titles: ['Impenetrable', 'Alien'],
      bio: 'Has graciously chosen to live here on Earth and protect our feeble bodies. Occasional commercial actor.',
      img: this.phenomaman,
      powers: ['Super Strength', 'Flight'],
    },
    {
      name: 'Sweettalker',
      titles: ['Negotiator', 'Liaison'],
      bio: 'Suave hero who solves problems with his silver tongue.',
      img: this.sweettalker,
      powers: ['Charisma', 'T-Rex Physiology'],
    },
    {
      name: 'Equilibrium',
      titles: ['Controller', 'Stabilizer'],
      bio: 'Sophisticated intellect and a body that can transform, heal, reshape, resize, or alter its molecular properties on the fly, this is among the finest heroes whose services SDN can offer to subscribers.',
      img: this.equilibrium,
      powers: ['Gravity Balance', 'Force Barriers'],
    },
    {
      name: 'Pom Pom',
      titles: ['Support', 'Rapid Response'],
      bio: 'What Pom Pom lacks in physical prowess, she more than makes up for with a combination of agility, endurance, and speed that can outperform even the most hardened criminal.',
      img: this.pompom,
      powers: ['Adrenaline Boost', 'Rapid Triage'],
    },
    {
      name: 'Brickhouse',
      titles: ['Tank', 'Shield Specialist'],
      bio: 'Never much one for talking, Brickhouse prefers one tried and true method to fight crime: beat the absolute tar out of it until it stops moving.',
      img: this.brickhouse,
      powers: ['Immovable stance', 'Shock absorption'],
    },
    {
      name: 'Brainbook',
      titles: ['Analyst', 'Intel Lead'],
      bio: 'Brainbook\'s IQ has never been scientifically measured, but is known to exceed upwards of 200, making her potentially the most intelligent human to have ever existed in history.',
      img: this.brainbook,
      powers: ['Superhuman Intelligence', 'Genius Intellect'],
    },
  ];

  phoenixHeroes = [
    {
      name: 'Coupé',
      titles: ['Shadow', 'Assassin'],
      bio: 'Mysterious, deadly, and unapproachable. True kill count, like many things about her, is unknown.',
      img: this.coupe,
      powers: ['Umbrakinetic Weaponry', 'Superhuman Accuracy'],
    },
    {
      name: 'Flambae',
      titles: ['Fire', 'Fighter'],
      bio: 'Controls the fire-- AND the flame... and his skin... does not burn.',
      img: this.flambae,
      powers: ['Pyrokinesis', 'Pyro-Propulsion'],
    },
    {
      name: 'Golem',
      titles: ['Defender', 'Versatile'],
      bio: 'Large mass of clay and dirt. Enjoys poetry and basketball. Difficulty with squeezing through doors.',
      img: this.golem,
      powers: ['Earth Mimicry', 'Regenerative Healing'],
    },
    {
      name: 'Invisigal',
      titles: ['Thief', 'Loner'],
      bio: 'Can become invisible at will but only while holding her breath. Asthmatic, abrasive, aloof.',
      img: this.invisigal,
      powers: ['Invisibility', 'Hand-to-Hand Combat'],
    },
    {
      name: 'Malevola',
      titles: ['Duelist', 'Half-Demon'],
      bio: 'Possesses a prehensile tail. Sonar\'s NA Sponsor. Atheist. True crime aficionado.',
      img: this.malevola,
      powers: ['Demon Physiology', 'Portal Creation'],
    },
    {
      name: 'Prism',
      titles: ['Pop Star', 'Illusionist'],
      bio: '1.3M followers. Music snob. Highly dramatic. Consistently requests a return to “her trailer.”',
      img: this.prism,
      powers: ['Photokinesis', 'Photoionization'],
    },
    {
      name: 'Punch Up',
      titles: ['Flyweight', 'Brawler'],
      bio: 'Possesses the strength of ten men and half the height of one.',
      img: this.punchup,
      powers: ['Picnokinesis,', 'Pain Immunity'],
    },
    {
      name: 'Sonar',
      titles: ['Intellectual', 'Hybrid'],
      bio: 'Transforms into a giant bat. Highly intelligent. Addicted to a variety of controlled substances.',
      img: this.sonar,
      powers: ['Echolocation', 'Bat Physiology'],
    },
  ];

  hoveredHero: { name: string; titles: string[]; bio: string; img: string; powers: string[] } | null = null;

  setHover(hero: { name: string; titles: string[]; bio: string; img: string; powers: string[] }) {
    this.hoveredHero = hero;
  }

  clearHover() {
    this.hoveredHero = null;
  }
}
