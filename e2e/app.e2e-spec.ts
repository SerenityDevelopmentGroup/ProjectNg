import { ArtworkPage } from './app.po';

describe('artwork App', function() {
  let page: ArtworkPage;

  beforeEach(() => {
    page = new ArtworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
