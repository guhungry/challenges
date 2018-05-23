import React from 'react';
import Button, { Container } from './Button';
import renderer from 'react-test-renderer';

describe('Button', function() {
  test('should render currectly', function() {
    const sut = renderer.create(
      <Button title='TITLE' onClick={jest.fn()} />,
    );

    const tree = sut.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render title currectly', function() {
    const sut = renderer.create(
      <Button title='TITLE' onClick={jest.fn()} />,
    );

    const tree = JSON.stringify(sut.toJSON());
    expect(tree).toMatch(/TITLE/);
  });

  test('should call onClick when clicked', function() {
    const onClick = jest.fn()
    const sut = renderer.create(
      <Button title='TITLE' onClick={onClick} />,
    );

    const tree = sut.root.findByType(Container);
    tree.props.onClick();

    expect(onClick.mock.calls.length).toBe(1);
  });

  test('should not call onClick when disabled', function() {
    const onClick = jest.fn()
    const sut = renderer.create(
      <Button title='TITLE' disabled onClick={onClick} />,
    );

    const tree = sut.root.findByType(Container);
    tree.props.onClick();

    expect(onClick.mock.calls.length).toBe(0);
  });
});
