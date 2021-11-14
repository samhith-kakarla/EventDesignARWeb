import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { DesignEditor } from '../../components';

const CreateDesignPage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;

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

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <div className="px-32 pt-36 flex flex-row h-11/12">
      <div className="bg-orange-one w-1/4 p-8 rounded-md shadow-xl">
        <p className="font-bold text-2xl my-6">DESIGN SETTINGS</p>
        <input 
          type="text"
          className="text-gray-three bg-gray-one rounded-md p-4 mr-16 text-lg focus:outline-none w-full mt-2"
          placeholder="Design Name"
          value={designName}
          onChange={(e) => setDesignName(e.target.value)}
        />
        <div className="flex flex-row items-center mt-5">
          <p className="font-semibold text-2xl">Center Table? </p>
          <input
            type="checkbox"
            checked={centerTable}
            className="ml-4"
            onChange={() => setCenterTable(!centerTable)}
          />
        </div>
        <div className="flex flex-row items-center mt-3">
          <p className="font-semibold text-2xl">Speakers? </p>
          <input
            type="checkbox"
            checked={speakers}
            className="ml-4"
            onChange={() => setSpeakers(!speakers)}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-2xl"># of Speakers? </p>
          <select 
            name="numSpeakers" 
            disabled={!speakers} 
            value={numSpeakers}
            onChange={(e) => setNumSpeakers(e.target.value)}
            className="m-4"
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
          <p className="font-semibold text-2xl">Subwoofers? </p>
          <input
            type="checkbox"
            checked={subwoofers}
            className="ml-4"
            onChange={() => setSubwoofers(!subwoofers)}
          />
        </div>
        <div className="flex flex-row items-center">
          <p className="font-semibold text-2xl"># of Subwoofers? </p>
          <select 
            name="numSpeakers" 
            disabled={!subwoofers} 
            value={numSubwoofers}
            onChange={(e) => setNumSubwoofers(e.target.value)}
            className="m-4"
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
          <p className="font-semibold text-2xl">Lighting Stand? </p>
          <input
            type="checkbox"
            checked={lightingStand}
            className="ml-4"
            onChange={() => setLightingStand(!lightingStand)}
          />
        </div>
        <div className="flex flex-row items-center pb-16">
          <p className="font-semibold text-2xl"># of Lights? </p>
          <select 
            name="numSpeakers" 
            disabled={!lightingStand} 
            value={numLights}
            onChange={(e) => setNumLights(e.target.value)}
            className="m-4"
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
        <DesignEditor />
      </div>
    </div>
  );
};

CreateDesignPage.propTypes = {};

export default CreateDesignPage;