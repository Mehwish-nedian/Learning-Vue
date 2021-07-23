import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
import baseCard from './components/UI/BaseCard.vue';
import baseButton from './components/UI/BaseButton.vue';
import baseDialog from './components/UI/BaseDialog.vue';
app.component('base-card',baseCard);
app.component('base-button', baseButton);
app.component("base-dialog", baseDialog);
app.mount('#app');
