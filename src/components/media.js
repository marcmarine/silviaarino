import React from 'react'
import Player from 'react-player'

export default (props) => {
  if (/soundcloud|issuu/.test(props.src) ) {
    return (
      <a className="block mt-10 flex items-center space-x-2" href={props.src} target="_blank" rel="noreferrer">
        <span>{props.alt}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={12} viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>
    )
  }
  if (/youtu/.test(props.src) ) {
    return (
      <div className="relative mt-10 mb-2" style={{ paddingTop: '56.25%' }}>
        <Player 
          url={props.src}
          style={{ position: 'absolute', top: 0, left: 0 }}
          width='100%'
          height='100%'
          light
          controls
          config={{
            youtube: {
              playerVars: { showinfo: 0 }
            }
          }}
        />
      </div>
    )
  }
  return <img {...props} />
} 