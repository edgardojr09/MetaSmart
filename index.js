import React, { useState } from 'react';
import { ethers } from 'ethers';
import { redirect } from 'next/dist/server/api-utils';

const BeHealthy = () => {
  
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');
  const [eat, setEat] = useState('');
  const [message, setMessage] = useState('');
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");
  const [shows, setShow] = useState("Connect MetaMask");

  const handleWaterChange = (e) => setWater(e.target.value);
  const handleSleepChange = (e) => setSleep(e.target.value);
  const handleEatChange = (e) => setEat(e.target.value);

  const checkWaterIntake = () => {
      if(message == ""){
        setError("You can't show the value if you didnt connect to the metamask first!");
      }
      else {
        if (parseInt(water) !== 8) {
        setMessage('You need 8 glasses of water per day to be healthy');
        setError('');
      }else{
      setMessage('Correct water intake!');
      }
    }
  };

  const checkSleep = () => {
    if(message == ""){
      setError("You can't show the value if you didnt connect to the metamask first!");
    }
    else {
      if (parseInt(sleep) !== 8) {
      setMessage('You need 8 hours sleep to be healthy');
      setError('');
    }else{
    setMessage('Correct sleep duration!');
    }
  }
  };

  const checkEatTimes = () => {
    if(message == ""){
      setError("You can't show the value if you didnt connect to the metamask first!");
    }
    else {
      if (parseInt(eat) !== 3) {
      setMessage('You need eat 3 times a day to be healthy');
      setError('');
    }else{
    setMessage('Correct eating frequency!');
    }
  }
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setError('');
        setShow("Show Wallet Address");
        setMessage("Connected Successfully: " + userAddress);
      } else {
        setMessage('MetaMask is not installed');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#333',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      margin: '10px 0 5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      width: '80%',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      marginTop: '20px',
      fontSize: '1.2em',
    },
    error:{
      color: 'red',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Be Healthy</h1>

      <div>
        <label style={styles.label}>
          Glasses of Water:
          <input type="number" value={water} onChange={handleWaterChange} style={styles.input} />
        </label>
        <button onClick={checkWaterIntake} style={styles.button}>Check Water Intake</button>
      </div>

      <div>
        <label style={styles.label}>
          Hours of Sleep:
          <input type="number" value={sleep} onChange={handleSleepChange} style={styles.input} />
        </label>
        <button onClick={checkSleep} style={styles.button}>Check Sleep</button>
      </div>

      <div>
        <label style={styles.label}>
          Times Eating Per Day:
          <input type="number" value={eat} onChange={handleEatChange} style={styles.input} />
        </label>
        <button onClick={checkEatTimes} style={styles.button}>Check Eating Frequency</button>
      </div><br />

      <button onClick={connectWallet} style={styles.button}>{shows}</button>

      {message && <p style={styles.message}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

export default BeHealthy;
