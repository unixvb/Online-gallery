import { OnlineGalleryPage } from './app.po';

describe('online-gallery App', () => {
  let page: OnlineGalleryPage;

  beforeEach(() => {
    page = new OnlineGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
