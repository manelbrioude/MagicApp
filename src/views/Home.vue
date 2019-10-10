<template>
<body>
  <div>
    <h1>MAGIC: THE GATHERING</h1>
  </div>
  <div>
    <h2>Welcome to the world of the most famous card game in history</h2>
  </div>
  <div>
    <p>This web application is design for the fans of this boardgame. In here you can see information about the different cards, the rules of the game, chat with other fans around the world and create or assist to events.</p>
  </div>
  <div class="menu">
    <p>The navigation in this app works in this two easy steps:</p>
    <ul>
      <li>
        First: Click on the menu "
        <i id="hamMenu" class="fas fa-bars"></i>" to deploy the different sections of the menu.
      </li>
      <li>Second: Choose the section where you want to go. These are:</li>
      <div class="list">
        <div>
          <i class="fas fa-home"></i>: Home
        </div>
        <div>
          <i class="fas fa-address-card"></i>: Cards
        </div>
        <div>
          <i class="fas fa-clipboard-list"></i>: Rules
        </div>
        <div>
          <i class="fas fa-handshake"></i>: Events
        </div>
        <div>
          <i class="fas fa-comments"></i>: Chat
        </div>
      </div>
    </ul>
  </div>
</body>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
@media (orientation: portrait) {
  h1 {
    color: rgba(255, 255, 255, 0.747);
    margin-top: 70px;
    text-align: center;
  }
  h2 {
    color: rgba(255, 255, 255, 0.541);

    text-align: center;
  }
  p {
    color: white;
    text-align: center;
  }
  .menu {
    color: white;
    margin-left: 5px;
  }
  #hamMenu {
    width: 16px;
    height: 16px;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .list i {
    height: 16px;
    width: 21px;
  }
}
@media (orientation: landscape) {
  h1 {
    color: rgb(255, 255, 255);
    margin-left: 70px;
    margin-right: 70px;
    text-align: center;
  }
  h2 {
    color: rgba(255, 255, 255, 0.541);
    margin-left: 70px;
    margin-right: 70px;
    text-align: center;
  }
  p {
    margin-left: 70px;
    margin-right: 70px;
    color: white;
    text-align: center;
  }
  #hamMenu {
    width: 16px;
    height: 16px;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .list i {
    height: 16px;
    width: 21px;
  }
  .menu {
    color: white;
    margin-left: 70px;
    margin-right: 70px;
  }
}
</style>