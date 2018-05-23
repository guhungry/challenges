import React from 'react';
import Card from '../Card';
import renderer from 'react-test-renderer';

describe('Card', function() {
  test('should render currectly', function() {
    const component = renderer.create(
      <Card item={{ image: 'bee' }} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
