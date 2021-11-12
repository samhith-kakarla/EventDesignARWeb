import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { DesignEditor } from '../../components';

const CreateDesignPage = () => {
  // General Settings
  const [designName, setDesignName] = useState('');

  // Equipment Settings
  const [speakers, setSpeakers] = useState(false);
  const [numSpeakers, setNumSpeakers] = useState(1);
  const [subwoofers, setSubwoofers] = useState(false);
  const [numSubwoofers, setNumSubwoofers] = useState(1);
  const [centerTable, setCenterTable] = useState(false);
  const [lightingStand, setLightingStand] = useState(false);
  const [numLights, setNumLights] = useState(0);

  return (
    <div className="px-56 pt-28 flex flex-row">
      <div className="bg-orange-one w-1/4 p-3 rounded-md shadow-xl">
        <p className="font-bold text-sm my-3">NEW DESIGN SETTINGS</p>
        <input 
          type="text"
          className="text-gray-three bg-gray-one rounded-sm p-2 text-sm focus:outline-none w-40 mt-2"
          placeholder="Design Name"
          value={designName}
          onChange={(e) => setDesignName(e.target.value)}
        />
        <div className="flex flex-row items-center mt-3">
          <p className="font-semibold text-sm">Center Table? </p>
          <input
            type="checkbox"
            checked={centerTable}
            className="ml-2"
            onChange={() => setCenterTable(!centerTable)}
          />
        </div>
        <div className="flex flex-row items-center mt-2">
          <p className="font-semibold text-sm">Speakers? </p>
          <input
            type="checkbox"
            checked={speakers}
            className="ml-2"
            onChange={() => setSpeakers(!speakers)}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-sm"># of Speakers? </p>
          <select 
            name="numSpeakers" 
            disabled={!speakers} 
            value={numSpeakers}
            onChange={(e) => setNumSpeakers(e.target.value)}
            className="m-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-sm">Subwoofers? </p>
          <input
            type="checkbox"
            checked={subwoofers}
            className="ml-2"
            onChange={() => setSubwoofers(!subwoofers)}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-sm"># of Subwoofers? </p>
          <select 
            name="numSpeakers" 
            disabled={!subwoofers} 
            value={numSubwoofers}
            onChange={(e) => setNumSubwoofers(e.target.value)}
            className="m-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-sm">Lighting Stand? </p>
          <input
            type="checkbox"
            checked={lightingStand}
            className="ml-2"
            onChange={() => setLightingStand(!lightingStand)}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-sm"># of Lights? </p>
          <select 
            name="numSpeakers" 
            disabled={!lightingStand} 
            value={numLights}
            onChange={(e) => setNumLights(e.target.value)}
            className="m-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </div>
      </div>
      <div className="w-3/4 border-2 rounded-md border-orange-three ml-4">
        <DesignEditor width={600} height={300} />
      </div>
    </div>
  );
};

CreateDesignPage.propTypes = {};

export default CreateDesignPage;