import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile status component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="Hello everybody" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('Hello everybody');
  });

  test('after component mounted <span> with correct status should be displayed', async () => {
    const component = create(<ProfileStatus status="Hello everybody" />);
    // const instance = component.getInstance();
    const instance = component.root;
    const span = await instance.findByType('span');
    expect(span.children).toEqual(['Hello everybody']);
  });

  test("after component mounted <span> shouldn't be NULL", async () => {
    const component = create(<ProfileStatus status="Hello everybody" />);
    const instance = component.root;
    const span = await instance.findByType('span');
    expect(span).not.toBeNull();
  });

  test('<input> should be displayed in editMode instead of <span>', async () => {
    const component = create(<ProfileStatus status="Hello everybody" />);
    const instance = component.root;

    const span = await instance.findByType('span');

    span.props.onDoubleClick();

    const input = await instance.findByType('input');

    expect(input.props.value).toBe('Hello everybody');
  });

  test('callback should be called', async () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="Hello everybody" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();

    instance.deactivateEditMode();

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  /*
    Не разобрался как проверить что элемента не существует
  */

  // test("after component mounted <input> shouldn't be displayed", () => {
  //   const component = create(<ProfileStatus status="Hello everybody" />);
  //   // const instance = component.getInstance();
  //   const instance = component.root;

  //   expect(async () => {
  //     await instance.findByType('input');
  //   }).toThrow();
  // });

  // test("after component mounted <input> shouldn't be displayed", async () => {
  //   const component = create(<ProfileStatus status="Hello everybody" />);
  //   // const instance = component.getInstance();
  //   const instance = component.root;

  //   const input = await instance.findByType('input');

  //   expect(input).toBeUndefined();
  // });
});
