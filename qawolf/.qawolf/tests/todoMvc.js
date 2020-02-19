const { launch } = require("qawolf");
const selectors = require("../selectors/todoMvcNewAgain");

describe('todoMvcNewAgain', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://todomvc.com/examples/react/#/" });
  });

  afterAll(() => browser.close());
  
  it('can type into "What needs to be done?" input', async () => {
    await browser.type(selectors[0], "teste");
  });
  
  it("can Enter", async () => {
    await browser.type(selectors[1], "↓Enter↑Enter");
  });
  
  it('can type into "What needs to be done?" input', async () => {
    await browser.type(selectors[2], "teste 1");
  });
  
  it("can Enter", async () => {
    await browser.type(selectors[3], "↓Enter↑Enter");
  });
  
  it('can type into "What needs to be done?" input', async () => {
    await browser.type(selectors[4], "teste 2");
  });
  
  it("can Enter", async () => {
    await browser.type(selectors[5], "↓Enter↑Enter");
  });
  
  it('can type into "What needs to be done?" input', async () => {
    await browser.type(selectors[6], "teste 3");
  });
  
  it("can Enter", async () => {
    await browser.type(selectors[7], "↓Enter↑Enter");
  });
  
  it("can click input", async () => {
    await browser.click(selectors[8]);
  });
  
  it("can click input", async () => {
    await browser.click(selectors[9]);
  });
  
  it("can click input", async () => {
    await browser.click(selectors[10]);
  });
  
  it("can click input", async () => {
    await browser.click(selectors[11]);
  });
});