/* Helper for time formating 00:00 */
export const pad = val => val > 9 ? val : `0${val}`;

export const coinName = (coin) => {
    let name = '';

    switch (coin.toUpperCase()) {
    case 'KMD':
        name = 'Komodo';
        break;
    case 'BTC':
        name = 'Bitcoin';
        break;
    case '888':
        name = 'OctoCoin';
        break;
    case 'ARG':
        name = 'ArcticCoin';
        break;
    case 'REVS':
        name = 'REVS';
        break;
    case 'JUMBLR':
        name = 'JUMBLR';
        break;
    case 'DOGE':
        name = 'Dogecoin';
        break;
    case 'HUSH':
        name = 'Hushcoin';
        break;
    case 'DGB':
        name = 'Digibyte';
        break;
    case 'GLT':
        name = 'GlobalToken';
        break;
    case 'MZC':
        name = 'Mazacoin';
        break;
    case 'SYS':
        name = 'Syscoin';
        break;
    case 'UIS':
        name = 'Unitus';
        break;
    case 'UNO':
        name = 'Unobtanium';
        break;
    case 'ZER':
        name = 'Zero';
        break;
    case 'ZET':
        name = 'Zetacoin';
        break;
    case 'ZEC':
        name = 'Zcash';
        break;
    case 'BTM':
        name = 'Bitmark';
        break;
    case 'CARB':
        name = 'Carboncoin';
        break;
    case 'ANC':
        name = 'Anoncoin';
        break;
    case 'FRK':
        name = 'Franko';
        break;
    case 'GAME':
        name = 'Gamecredits';
        break;
    case 'LTC':
        name = 'Litecoin';
        break;
    case 'SUPERNET':
        name = 'SUPERNET';
        break;
    case 'WLC':
        name = 'Wireless';
        break;
    case 'PANGEA':
        name = 'Pangea';
        break;
    case 'DEX':
        name = 'InstantDEX';
        break;
    case 'BET':
        name = 'BET';
        break;
    case 'CRYPTO':
        name = 'Crypto777';
        break;
    case 'COQUI':
        name = 'COQUI';
        break;
    case 'HODLC':
        name = 'HODLC';
        break;
    case 'SHARK':
        name = 'SHARK';
        break;
    case 'BOTS':
        name = 'BOTS';
        break;
    case 'MGW':
        name = 'MultiGateway';
        break;
    case 'MVP':
        name = 'MVP';
        break;
    case 'KV':
        name = 'KeyValue';
        break;
    case 'CEAL':
        name = 'Ceal';
        break;
    case 'DASH':
        name = 'Dash';
        break;
    case 'MESH':
        name = 'SuperMesh';
        break;
    case 'CRW':
        name = 'Crown';
        break;
    case 'HUC':
        name = 'Huntercoin';
        break;
    case 'PIVX':
        name = 'PIVX';
        break;
    case 'BDL':
        name = 'Bitdeal';
        break;
    case 'ARC':
        name = 'Arcticcoin';
        break;
    case 'ZCL':
        name = 'ZClassic';
        break;
    case 'VIA':
        name = 'Viacoin';
        break;
    case 'ERC':
        name = 'Europecoin';
        break;
    case 'FAIR':
        name = 'Faircoin';
        break;
    case 'FLO':
        name = 'Florincoin';
        break;
    case 'SXC':
        name = 'Sexcoin';
        break;
    case 'CREA':
        name = 'Creativecoin';
        break;
    case 'TRC':
        name = 'Terracoin';
        break;
    case 'BTA':
        name = 'Bata';
        break;
    case 'SMC':
        name = 'Smartcoin';
        break;
    case 'NMC':
        name = 'Namecoin';
        break;
    case 'NAV':
        name = 'Navcoin';
        break;
    case 'MOON':
        name = 'Mooncoin';
        break;
    case 'EMC2':
        name = 'Einsteinium';
        break;
    case 'I0C':
        name = 'I0Coin';
        break;
    case 'STRAT':
        name = 'Stratis';
        break;
    case 'MUE':
        name = 'MonetaryUnit';
        break;
    case 'MONA':
        name = 'MonaCoin';
        break;
    case 'XMY':
        name = 'Myriad';
        break;
    case 'MAC':
        name = 'Machinecoin';
        break;
    case 'BTX':
        name = 'Bitcore';
        break;
    case 'XRE':
        name = 'RevolverCoin';
        break;
    case 'LBC':
        name = 'LBRY Credits';
        break;
    case 'SIB':
        name = 'SIBCoin';
        break;
    case 'VTC':
        name = 'Vertcoin';
        break;
    case 'HUSH':
        name = 'Hush';
        break;
    case 'AUD':
        name = 'Australian Dollar';
        break;
    case 'BGN':
        name = 'Bulgarian Lev';
        break;
    case 'CAD':
        name = 'Canadian Dollar';
        break;
    case 'CHF':
        name = 'Swiss Franc';
        break;
    case 'CNY':
        name = 'Chinese Yuan';
        break;
    case 'CZK':
        name = 'Czech Koruna';
        break;
    case 'DKK':
        name = 'Danish Krone';
        break;
    case 'EUR':
        name = 'Euro';
        break;
    case 'GBP':
        name = 'Pound Sterling';
        break;
    case 'HKD':
        name = 'Hong Kong Dollar';
        break;
    case 'HRK':
        name = 'Croatian Kuna';
        break;
    case 'HUF':
        name = 'Hungarian Forint';
        break;
    case 'IDR':
        name = 'Indonesian Rupiah';
        break;
    case 'ILS':
        name = 'Israeli Shekel';
        break;
    case 'INR':
        name = 'Indian Rupee';
        break;
    case 'JPY':
        name = 'Japanese Yen';
        break;
    case 'KRW':
        name = 'South Korean Won';
        break;
    case 'MXN':
        name = 'Mexican Peso';
        break;
    case 'MYR':
        name = 'Malaysian Ringgit';
        break;
    case 'NOK':
        name = 'Norwegian Krone';
        break;
    case 'NZD':
        name = 'New Zealand Dollar';
        break;
    case 'PHP':
        name = 'Philippine Peso';
        break;
    case 'PLN':
        name = 'Polish Zloty';
        break;
    case 'BRL':
        name = 'Brazilian Real';
        break;
    case 'RON':
        name = 'Romanian Leu';
        break;
    case 'RUB':
        name = 'Russian Ruble';
        break;
    case 'SEK':
        name = 'Swedish Krona';
        break;
    case 'SGD':
        name = 'Singapore Dollar';
        break;
    case 'THB':
        name = 'Thai Baht';
        break;
    case 'TRY':
        name = 'Turkish Lira';
        break;
    case 'USD':
        name = 'US Dollar';
        break;
    case 'ZAR':
        name = 'South African Rand';
        break;
    case 'MNZ':
        name = 'Monaize';
        break;
    default:
        name = coin;
        break;
    }
    return name;
}
