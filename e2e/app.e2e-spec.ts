import { IspAppPage } from './app.po';

describe('isp-app App', function() {
  let page: IspAppPage;

  beforeEach(() => {
    page = new IspAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
