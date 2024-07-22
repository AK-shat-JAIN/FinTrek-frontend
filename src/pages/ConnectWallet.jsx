import fox from "../assets/fox-icon.png"
import coin from "../assets/Coin-logo.png"
import wallet from "../assets/Wallet-logo.png"
const ConnectWallet = () => {
  return (
    <div>

      {/* Heading of the ConnectWallet page */}
      <div className="flex justify-center items-center py-20">
        <div>
            <h1 className="text-white text-5xl font-semibold pl-[15%] pb-2" >Connect Your Wallet</h1>
            <p className="text-white text-xl">If you don’t have a <span className="text-[#A259FF]"> wallet </span> yet, you can select a provider and connect one now</p>
        </div>  
      </div>

      {/* Wallet Providers */}
      <div className="flex flex-col justify-center items-center pt-5 pb-32"> 
          <div className="w-7/12 border-2 rounded-xl border-solid flex p-4 border-[#6C6C6C] cursor-pointer">
              <img src={fox} alt="" className="px-4"/>
              <p className="text-white">Metamask</p>
          </div>
          <div className="w-7/12 border-2 rounded-xl border-solid flex p-4 border-[#6C6C6C] cursor-pointer">
              <img src={coin} alt="" className="px-4"/>
              <p className="text-white">Coinbase Wallet</p>
          </div>
          <div className="w-7/12 border-2 rounded-xl border-solid flex p-4 border-[#6C6C6C] cursor-pointer">
              <img src={wallet} alt="" className="px-3"/>
              <p className="text-white">WalletConnect</p>
          </div>
      </div>
      

    </div>
  )
}

export default ConnectWallet
