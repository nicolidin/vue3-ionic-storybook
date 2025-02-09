import { setup } from '@storybook/vue3';
import {IonApp, IonContent, IonicVue} from '@ionic/vue';
import { defineCustomElements } from '@ionic/core/loader';

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

import './storybook.scss';
import "@ionic/vue/css/display.css";
import "@ionic/core/css/ionic.bundle.css";

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';


setup((app) => {
  console.log('🚀 Setting up Storybook with Ionic Vue...');

  app.use(IonicVue, { animated: true, mode: 'md' });

  // ✅ Register all Ionic Web Components
  defineCustomElements(window);

  console.log('✅ Ionic Vue setup complete.');
});

export const decorators = [
  (story) => ({
    components: { story , IonApp, IonContent},
    template: `
      <ion-app>
        <ion-content>
          <story />
        </ion-content>
      </ion-app>
    `,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    story: {
      inline: false,
      iframeHeight: 400, // Set default iframe height
    }
  },
};
