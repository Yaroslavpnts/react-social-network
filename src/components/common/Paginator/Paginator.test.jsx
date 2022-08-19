import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component tests', () => {
  test('pages count is 11 but should be showed only 10', async () => {
    const component = create(<Paginator totalItemsCount={11} pagesSize={1} portionSize={10} />);
    const root = component.root;
    let spans = await root.findAllByType('span');
    expect(spans.length).toBe(10);
  });

  test('if pages count is more than 10 button next should be present', async () => {
    const component = create(<Paginator totalItemsCount={11} pagesSize={1} portionSize={10} />);
    const root = component.root;
    let buttons = await root.findAllByType('button');
    expect(buttons.length).toBe(1);
  });
});
