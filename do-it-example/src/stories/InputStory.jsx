import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../03/Input';
import { action } from '@storybook/addon-actions';

storiesOf('Input', module)
  .add('기본설정',()=> <Input name="name"/>)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange 예제',() => <Input name="name" onChange={action('!!이벤트 발생!!')} />);

