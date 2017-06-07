import { TestBunkerAppPage } from './app.po';

describe('test-bunker-app App', () => {
  let page: TestBunkerAppPage;

  beforeEach(() => {
    page = new TestBunkerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
