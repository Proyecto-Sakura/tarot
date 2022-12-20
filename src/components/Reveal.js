import React from 'react'

function Reveal({ selectedCards }) {
    return (
      <div className="header">
        <Reveal onClick = {this.disappear}/> selectedCards={selectedCards} />
      </div>
    );
  }

export default Reveal