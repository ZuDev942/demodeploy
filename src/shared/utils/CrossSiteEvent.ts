type CallbackType = (this: Window, ev: MessageEvent<any>) => any;

export const CROSS_SITE_EVENT_TYPE = {
  auth: 'authentication',
  expiredToken: 'expired_token',
  sendAuthStatus: 'user',
  styleIframe: 'style_iframe',
  contentReady: 'content_ready',
  createTicket: 'create_ticket',
  createGroupChatByPackage: 'create_group_chat_by_package',
  createShopChatByPackage: 'create_shop_chat_by_package',
  createChatWithBuyer: 'create_direct_chat',
};

class CrossSiteEvent {
  subscribe(callback: CallbackType) {
    window.addEventListener('message', callback, false);
  }

  unsubscribe(callback: CallbackType) {
    window.removeEventListener('message', callback, false);
  }

  next(type: string, payload: any) {
    const targetOrigin = '*';
    parent.postMessage({ type, payload }, targetOrigin);
  }

  filterStream(e: MessageEvent, eventType: string) {
    const eventData = e.data;

    if (eventData.type !== eventType) {
      return false;
    }

    return true;
  }
}

export const crossSiteEvent = new CrossSiteEvent();
