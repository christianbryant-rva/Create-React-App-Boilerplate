import { Ng4SandboxPage } from './app.po';

describe('ng4-sandbox App', () => {
  let page: Ng4SandboxPage;

  beforeEach(() => {
    page = new Ng4SandboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
