import React from 'react';
import Switch from '../../components/switch';

export default React.createClass({
  displayName: 'SwitchTest',

  onChange (event, instance) {
    console.log('[Switch] Changed', instance.getValue());
  },

  render () {
    return (
      <section>
        <h5>Switches</h5>
        <p style={{marginBottom: '10px'}}>This is more beautiful than the old fashion checkboxes...</p>
        <Switch label="Push notifications" />
        <Switch checked label="Mail notifications" onChange={this.onChange} />
        <Switch disabled label="Nothing, thanks"/>
      </section>
    );
  }
});