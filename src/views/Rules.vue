<template>
  <div>
    <div>
      <h3>Rules of the game</h3>
    </div>
    <div class="fullPage">
      <div class="info">
        <p>This is what you need to know to play the game</p>
      </div>

      <v-expansion-panels inset focusable>
        <v-expansion-panel style="background-color:rgba(255, 255, 255, 0.61)">
          <v-expansion-panel-header style="color:white">
            <span>Materials</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="textInside">
              The only think you require to play is a deck of cards. The decks are divided in 5 colors:
              <img
                src="../assets/ManaLogos/GreenMana.png"
              />Green,
              <img src="../assets/ManaLogos/RedMana.png" />Red,
              <img src="../assets/ManaLogos/BlueMana.png" />Blue,
              <img src="../assets/ManaLogos/BlackMana.png" />Black
              and
              <img src="../assets/ManaLogos/WhiteMana.png" />
              White
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color:rgba(255, 255, 255, 0.61)">
          <v-expansion-panel-header style="color:white">
            <span>Type of Cards</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="scrollbox">
              The cards are differents divided in five kinds:
              <ul>
                <li>
                  <h5>Lands</h5>
                  <p>Land cards often have an activated ability that allows their controller to tap them for mana. They cost no mana to play; however, a player may typically play no more than one land on each of his or her turns. There are five types of basic lands, one for each colour. Each basic land has a basic land type. Any land which has a basic land type can be tapped to produce one mana of the color associated with that basic land type. You may have as many basic lands in your deck as you desire. A land which isn't basic is referred to as a "non-basic land" and may produce other combinations or amounts of mana, or may have other abilities.</p>
                </li>
                <li>
                  <h5>Creatures</h5>
                  <p>Creatures represent people or beasts that are summoned to attack opposing players and defend their controller from the attacks of enemy creatures. They are summoned by casting them as a spell that then becomes a permanent on the battlefield. Creatures have two numbers associated with them that represent their strength in combat: power and toughness. These values are printed on the lower right-hand corner of the card, with a slash separating them. The first number is the creature's power; it represents the amount of damage it deals in combat. The second number is its toughness; if it receives that much damage in a single turn, it is destroyed and placed in the graveyard. Creatures cannot attack or be used to pay costs represented by the tap symbol or the untap symbol unless their current controller has controlled them continuously since the beginning of that player's most recent turn. This rule is informally called "summoning sickness". Creatures often have one or more creature types, seperated from the word "creature" in their type line by a long dash. Each single word represents a seperate creature type and a creature is always considered to be all of its types.</p>
                </li>
                <li>
                  <h5>Enchandments</h5>
                  <p>
                    Enchantments represent persistent magical or mystical effects; they are spells that remain on the battlefield and alter some aspect of the game.
                    Some enchantments are attached to other cards on the battlefield (often creatures); these are known as Auras. If the card have an Aura is attached to leaves the battlefield, the Aura goes to the graveyard.
                    Enchantments auras can also effect multiple creatures at once such as Echoing Courage this card gives +2/+2 to a creature you choose and every other creature with the same name.
                  </p>
                </li>
                <li>
                  <h5>Artifacts</h5>
                  <p>
                    Artifacts represent magical items, animated constructs, pieces of equipment, or other objects and devices. Like other permanents, artifacts remain on the battlefield until something removes them. Artifacts are distinct from other cards in that they are colorless, and can be cast using any color or colors of mana.
                    Many artifacts are also creatures; they may attack and defend as other creatures, and are affected by anything that affects either artifacts or creatures. Some artifacts are Equipment. Equipment cards enter the battlefield just like any other artifact, but may be attached to creatures using their Equip ability. Unlike Auras, however, if an Equipment is attached to a creature and the creature leaves the battlefield, the Equipment stays on the battlefield.
                  </p>
                </li>
                <li>
                  <h5>Sorceries and Instants</h5>
                  <p>
                    Sorceries and instants both represent one-shot or short-term magical spells. They never enter the battlefield. Instead they are cast as a spell, have their effect when they resolve, and then are immediately put into the player's graveyard.
                    Sorceries and instants differ only in when they can be cast. Sorceries can be cast during the player's main phase, and only when nothing else is on the stack. Instants, on the other hand, can be cast any time a player has priority, including during other player's turns and while another spell or ability is waiting to resolve (see timing and the stack).
                  </p>
                </li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color:rgba(255, 255, 255, 0.61)">
          <v-expansion-panel-header class="text" style="color:white">
            <span>Zones:Areas of play</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="scrollbox">
              When you are in a game, the cards will be located in one of these zones:
              <ul>
                <li>
                  <h5>Library</h5>
                  <p>A player's deck. These cards are kept face down and should be randomly ordered (which means, shuffled at the beginning of the game). It must contain at least 60 cards in Constructed play, or at least 40 cards in Limited play. There is no maximum deck size, although there may only be 4 of any nonbasic land card. It is recommended to have 25 land, basic or nonbasic, and 35 spells (creatures, instants, sorceries, artifacts, enchantments and planeswalkers).</p>
                </li>
                <li>
                  <h5>graveyard</h5>
                  <p>A player's discard pile. When a card in play is destroyed, or an instant or sorcery is taken off the stack, it is put in its owner's graveyard. These cards are face up, and can be examined by any player at any time. Several cards, like Disentomb or Rise from the Grave, allow you to take cards from a graveyard and return them to your hand, on the battlefield, or somewhere in your library.</p>
                </li>
                <li>
                  <h5>Hand</h5>
                  <p>A player's hand of cards. They are normally kept hidden from other players; however, cards like Telepathy and a number of "discard" spells can allow players to look at some or all of the cards in other players' hands. The number of cards each player has is public. If you have more than 7 cards in your hand at the end of your turn, you must discard until you have only 7 cards in your hand; as always, cards like the Artifact Spellbook can override this.</p>
                </li>
                <li>
                  <h5>Stack</h5>
                  <p>This is the place for cards that have been cast but not yet resolved. Activated abilities and triggered abilities also go on the stack until they resolve. This zone is shared by all players. See the stack.</p>
                </li>
                <li>
                  <h5>battlefield</h5>
                  <p>Most cards need to enter the battlefield before they can affect the game. All players share a single battlefield. All permanents stay on the battlefield unless effects or the rules instruct players to remove them.</p>
                </li>
                <li>
                  <h5>Exile</h5>
                  <p>This is where cards that have been exiled are placed: to exile a card means to take it from its current zone and place it in this zone. The text of a card may specify that a card is exiled face-down; if it does not, the card is exiled face-up. Some examples of cards that exile other cards are Iona's Judgement and Celestial Purge. Some cards, Journey to Nowhere and Oblivion Ring being two examples, exile cards, but later return them to the battlefield.</p>
                </li>
                <li>
                  <h5>AWOL</h5>
                  <p>This is a special exile zone exclusively when the card "AWOL" targets an attacking creature.</p>
                </li>
                <li>
                  <h5>Command</h5>
                  <p>The command zone is a game area reserved for certain specialized objects that can affect the game, but are not permanents or cards in exile. This includes schemes, planes, emblems and Commanders.</p>
                </li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel style="background-color:rgba(255, 255, 255, 0.61)">
          <v-expansion-panel-header style="color:white">
            <span>Turns</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="scrollbox">
              The game is divided by turns for each participant. These are the parts of each turn:
              <ul>
                <li>
                  <h5>Beginning Phase</h5>
                  <p>
                    The command zone is a game area reserved for certain specialized objects that can affect the game, but are not permanents or cards in exile. This includes schemes, planes, emblems and Commanders. Note:
                    If there are two people playing, the player who takes the first turn does not draw a card on the first turn as a balancing factor. If there are more than two, this rule does not apply.
                  </p>
                </li>
                <li>
                  <h5>Main Phase</h5>
                  <p>Most of the game's actions happen during the main phase. With the exception of Instants, cards can only be played during a player's main phase. There are two main phases each turn: one before and one after the combat phase.</p>
                </li>
                <li>
                  <h5>Combat Phase</h5>
                  <p>The combat phase is split up into steps. Except for instants, players may not play cards during combat. However, instants may be cast and abilities may be activated before and after each step.</p>
                  <ul>
                    <li>
                      <h5>Attacking</h5>
                      <p>The player whose turn it is may attack another player with creatures he or she controls. Creatures that are tapped or that were played this turn may not attack. Attacking causes a creature to become tapped. A player can attack with as many creatures as he or she wants; they all tap and attack at the same time.</p>
                    </li>
                    <li>
                      <h5>Blocking</h5>
                      <p>The player being attacked may block the attacking creatures with his or her own creatures, but is not required to do so. Tapped creatures cannot block, but blocking doesn't tap a creature. Each creature may only block one attacking creature, but multiple creatures may all block the same attacker. As with attacking creatures, blocking creatures all block at the same time.</p>
                    </li>
                    <li>
                      <h5>Damage</h5>
                      <p>
                        Attacking creatures that weren't blocked deal damage equal to their power to the player they attacked; the amount of damage caused is deducted from the player's life total. (Or added to the players poison counter total, in the case of infect.) Attacking creatures that were blocked deal damage equal to their power to the creature or creatures that blocked them, and blocking creatures deal damage equal to their power to the attacking creature they blocked. If a creature could deal damage to several creatures that blocked it, the player that controls the attacking creature chooses how to distribute the damage. The attacking player must assign lethal damage (that is, damage equal to the blocker's toughness) to the one blocker before he/she can assign more damage to another blocker; this continues for each blocker (1 point of damage from a creature with deathtouch is considered lethal damage). An attacker that is blocked, but whose blocker is removed from combat before this time deals no damage at all. If a creature is dealt as much or more damage than its toughness, it is destroyed and must be put in its controller's graveyard.
                        Combat damage does not use the stack.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>End Phase</h5>
                  <p>The end phase has two steps: "Endstep" and "Cleanup". During the first, abilities that trigger "at end of turn" take place. Then, during the cleanup step, the player whose turn it is discards down to 7 cards(unless playing Mana Rush). Effects that last "until end of turn" or "this turn" wear off, and non-lethal damage is removed from creatures. Players may play instants or abilities during the end step, but not during the cleanup step.</p>
                </li>
                <li>
                  <h5>End Draw Phase</h5>
                  <p>Draw cards until you have 7 cards in your hand. If you have 7 or more cards already skip this step</p>
                </li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
@media (orientation: landscape) {
  h3 {
    text-align: center;
    color: white;
  }
  img {
    height: 20px;
    width: 20px;
  }
  .scrollbox {
    max-height: 200px;
    overflow: scroll;
    color: white;
  }
  .scrollbox h5 {
    color: white;
  }
  p {
    color: white;
  }
  .info {
    color: white;
    text-align: center;
  }
  .textInside {
    color: white;
  }
  span {
    text-align: center;
  }
  .fullPage {
    margin-left: 65px;
    margin-right: 65px;
  }
}
@media (orientation: portrait) {
  img {
    height: 20px;
    width: 20px;
  }
  .scrollbox {
    max-height: 200px;
    overflow: scroll;
    color: white;
  }
  .scrollbox h5 {
    color: white;
  }
  p {
    color: white;
  }
  .info {
    color: white;
    text-align: center;
  }
  .textInside {
    color: white;
  }
  span {
    text-align: center;
  }
  h3 {
    text-align: center;
    color: white;
    margin-top: 40px;
  }
  .fullPage {
    margin-top: 65px;
  }
}
</style>