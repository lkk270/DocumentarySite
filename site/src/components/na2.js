import React from 'react';
import { FullPage, Slide } from 'react-full-page';
 
export default class Nav2 extends React.Component {
  render() {
    return (
      <FullPage controls>
        <Slide>
          <h1>Inner slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    );
  }
};