import { defineComponent } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import styles from './index.module.scss';

export const Layout = defineComponent({
  setup(_props, { slots }) {
    return () => (
      <div class={styles.wrapper}>
        <div class={styles['wrapper-content']}>{slots?.default?.()}</div>
        <Tabbar>
          <TabbarItem>首页</TabbarItem>
          <TabbarItem>设置</TabbarItem>
        </Tabbar>
      </div>
    );
  },
});
