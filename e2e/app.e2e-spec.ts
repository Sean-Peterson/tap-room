import { KeggerPage } from './app.po';

describe('kegger App', function() {
  let page: KeggerPage;

  beforeEach(() => {
    page = new KeggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
