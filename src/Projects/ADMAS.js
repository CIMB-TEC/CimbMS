import React from 'react';
import Timeline from './components/Timeline';

let it = [
  {
    Date: 'Mar 24',
    title: 'AI',
    description: 'lorem iupsum dolor dit amet',
  },

  {
    Date: 'Mar 25',
    title: 'Carrito',
    description: 'lorem iupsum dolor dit amet',
  },
  {
    Date: 'Mar 26',
    title: 'Carrito',
    description: 'lorem iupsum dolor dit amet',
  },
];

let admastimeline = Timeline(it, 'ADMAS', 'pengas');
export default admastimeline;
