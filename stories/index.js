import Expanjo from '../src/';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('Expanjo', module)
  .add('with free-form text entry', () => (
    <Expanjo />
  ));