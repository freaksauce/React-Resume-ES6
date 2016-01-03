import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../../src/components/App';

describe('App', () => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<App />);
  const app = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(app.type).to.equal('div');
  });

});
