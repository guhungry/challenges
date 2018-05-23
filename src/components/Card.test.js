import React from 'react';
import Card from './Card';
import { BackgroundImage } from './Card.Components';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Card', function() {
  const data = { name: 'Random Donation Title',image: 'bee.png', currency: 'THB' }

  test('should render currectly', function() {
    const sut = renderer.create(
      <Card item={data} />,
    );

    const tree = sut.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should show name correctly', function() {
    const sut = renderer.create(
      <Card item={data} />,
    );

    const tree = JSON.stringify(sut.toJSON());
    expect(tree).toMatch(/Random Donation Title/);
  });

  test('should show image correctly', function() {
    const sut = renderer.create(
      <Card item={data} />,
    );

    const tree = sut.root.findByType(BackgroundImage);
    expect(tree.props.src).toMatch('/images/bee.png');
  });

  test('should show currency correctly', function() {
    const sut = renderer.create(
      <Card item={data} onPay={jest.fn()} />,
    );

    const button = sut.root.findByType(Button);
    button.props.onClick();

    const tree = JSON.stringify(sut.toJSON());
    expect(tree).toMatch(/THB/);
  });
});
