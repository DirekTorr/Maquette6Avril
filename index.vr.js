import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';

export default class Maquette6Avril extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json'/>
    );
  }
};

AppRegistry.registerComponent('Maquette6Avril', () => Maquette6Avril);