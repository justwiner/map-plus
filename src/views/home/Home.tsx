import { CSSProperties, defineComponent } from 'vue';
import styles from './index.module.scss';

type App = {
  name?: string;
  style?: CSSProperties;
};

const apps: App[] = [
  {
    name: '钥匙串',
    style: {
      backgroundColor: '#13c2c2',
    },
  },
  {
    name: '钥匙串',
    style: {
      backgroundColor: '#1890ff',
    },
  },
  {
    name: '钥匙串',
    style: {
      backgroundColor: '#9254de',
    },
  },
  {
    name: '钥匙串',
    style: {
      backgroundColor: '#eb2f96',
    },
  },
  {
    name: '钥匙串',
    style: {
      backgroundColor: '#597ef7',
    },
  },
];

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class={styles['app-container']}>
        {apps.map((item) => (
          <div class={styles['app-item']} key={item.name} style={item.style}>
            {item.name}
          </div>
        ))}
      </div>
    );
  },
});
