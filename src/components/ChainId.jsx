import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styled from 'styled-components';
const { ethereum } = window;

const ChainIdStyles = styled.div`
  border: none;
  box-shadow: ${(props) =>
    props.chainId === '5'
      ? 'inset 3px 3px var(--gray)'
      : 'inset 3px 3px rgb(126 33 54)'};

  letter-spacing: 2px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.chainId === '5' ? 'var(--translucid-gray)' : 'rgb(69% 20% 31%)'};

  span {
    margin-left: 12px;
    font-size: 14px;
  }
`;

export default function ChainId() {
  const [chainId, setChainId] = useState('');

  if (!ethereum)
    console.error('No ethereum object found, please install MetaMask');

  useEffect(() => {
    async function getChainId() {
      if (ethereum?.request) {
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        setChainId(ethers.utils.formatUnits(chainId, 0));
      }
    }
    window.ethereum?.on('chainChanged', () => {
      window.location.reload();
    });
    getChainId();
  }, []);
  return (
    <ChainIdStyles chainId={chainId}>
      Chain id
      <span>{chainId ? chainId : '-'}</span>
    </ChainIdStyles>
  );
}
