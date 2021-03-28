
//contractAddress
const Address = "0x9b0e84246e90c0b9a713fcd962c7e1348c3529ea";
let replica_contract;

window.onload = async function() {
    ethereum.on('chainChanged', (_chainId) => window.location.reload());
}

function walletmodal(){
    $('#wallet-popup').modal('show');
}



async function loadmm_gasfree(){
    $('#wallet-popup').modal('hide');
    if (typeof web3 == 'undefined'){
        ans = window.confirm("metamaskをインストールしてください\nmetamaskのインストール方法を確認しますか？\n\n参考：https://note.com/ocurima/n/n29e1fd7ecbdd");
        if (ans){
            window.open("https://note.com/ocurima/n/n29e1fd7ecbdd");
        }
        return;
    }
    
    ans = window.confirm("OKを押すと『NFTアートのレプリカ』がMetaMaskに送信されます")
    if ( !ans ){
        return;
    }
    
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const add = await signer.getAddress();

    let result = await $.getJSON( "https://mint.nandemotoken.com/api/v1/testnet/0x9b0e84246e90c0b9a713fcd962c7e1348c3529ea/"+ add + "/" )
    console.log(result);
    $('#myinfo').modal('show')
    
    //    window.alert("開発中です。しばらくお待ちください");
}

function explorer(){
    //window.alert("matic")
    ans = window.confirm("ブロックチェーンエクスプローラーを開く\n\nhttps://explorer-mumbai.maticvigil.com/tokens/" +Address + "/inventory\n\nNFTの発行状況を確認しますか？(通常は1分以内に発行されます)");
        if(ans){ window.open("https://explorer-mumbai.maticvigil.com/tokens/" +Address + "/inventory"); }

}

function opensea(){
    //window.alert("opensea")
    ans = window.confirm("OpenSeaでNFTレプリカを確認する\n\nhttps://testnets.opensea.io/account\n\nOpenSeaを開き、MetaMaskを接続しますか？\n(反映には数分時間がかかります。NFTの画像は処理が終わると表示されます)");
        if(ans){ window.open("https://testnets.opensea.io/account"); }
}
