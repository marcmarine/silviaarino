import React from 'react';

export default () => {
  let textos = [];
  for (var i = 0; i < 10; i++) {
    textos.push('🚧 En construcción 🚧')
  }
  return (
    <div className="marquee pt-4 fixed bottom-0 w-full pointer-events-none" to="/">
      <div>
        {textos.map((texto, index) => (
          <span className="w-1/4 md:w-1/6" key={index}>{texto}</span>
        ))}
      </div>
    </div>
  )
}