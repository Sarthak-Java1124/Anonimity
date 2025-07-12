import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks : {
    sepolia : {
      url :" https://sepolia.infura.io/v3/b0bb44815bc542eba8f227e7546eaa6d",
      accounts : ["1d784fa313e87865a2754212b8b44217f907c86804de03b5410507a9a0574680"]

    }
  }
};

export default config;
