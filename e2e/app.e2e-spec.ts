import { TourOfRockbandsPage } from './app.po';

describe('tour-of-rockbands App', () => {
  let page: TourOfRockbandsPage;

  beforeEach(() => {
    page = new TourOfRockbandsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
