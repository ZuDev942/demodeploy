import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import { crossSiteEvent, CROSS_SITE_EVENT_TYPE } from '../utils/CrossSiteEvent';
import { RouteName } from '@/shared/constants';

export const useAuthEvent = () => {
  const router = useRouter();
  onMounted(() => {
    crossSiteEvent.subscribe(receiveAuth);
  });

  onUnmounted(() => {
    crossSiteEvent.unsubscribe(receiveAuth);
  });

  const receiveAuth = (e: MessageEvent) => {
    const eventData = e.data;
    const accepted = crossSiteEvent.filterStream(e, CROSS_SITE_EVENT_TYPE.auth);

    if (!accepted) {
      return;
    }

    console.log('eventData', eventData);

    localStorage.setItem(import.meta.env.VITE_ACCESS_TOKEN_NAME, eventData.payload.token);
    router.push({ name: RouteName.NEW_REGISTATION });
  };
};
