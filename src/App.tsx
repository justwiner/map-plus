import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { Layout } from './components/layout';
import './style/index.scss';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <Layout>
        <RouterView />
      </Layout>
    );
  },
});
