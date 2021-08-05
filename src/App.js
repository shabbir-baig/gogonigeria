import React, { Component } from 'react';
import Traders from './components/Traders'
import TradeSelect from './components/TradeSelect'

import logo from './nigeria.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getLocation()
    this.state = {
      traders: [],
      filteredTraders: [],
      trades: [],
      selectedTrade: 0,
      isLoading: true,
      lon: 0,
      lat: 0,
      dist: 10000,
      //fred: this.getLocation()
    }

    //this.showPosition = this.showPosition.bind(this);
}
  
  getLocation = async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(await this.showPosition);
    } else { 
      console.log( "Geolocation is not supported by this browser.");
    }
  }

  showPosition = async (position) => {
    var x  = await "Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude;
    console.log("x is:", x)
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })
  //  this.setState({
  //    lon: position.coords.longitude,
  //    lat: position.coords.latitude
  //  }) 
    console.log(this.state)
  }

  fetchTraders = async () => {
    // Where are we fetching data from
    console.log("in fetchTraders")
    console.log(this.state)
    // var fetchUrl = `http://gogonigeria.byethost18.com/api.php?lon=${this.state.lon}&lat=${this.state.lat}&dist=${this.state.dist}` 
    // 
    var fetchUrl = `traders.json?lon=${this.state.lon}&lat=${this.state.lat}&dist=${this.state.dist}` 
    console.log("fetchURL ", fetchUrl)
    await fetch(fetchUrl)
      // We get the API response then receive data in JSON...
      .then(response => response.json())
      // Normally would use a store like redux
      // being this example demo - simpler to it do this way.. 
      //.then(sorted => console.log("Sorted by", sorted))
      // finally data should look good - so set the state.
      .then(data =>
        this.setState({
          traders: data,
          isLoading: false,
        })
      )
      // Catch any unknowns (errors) and update loading status
      .catch(error => this.setState({ error, isLoading: false }));
      //let data = '[{"id":"423","tradername":"Ches","address":"533 Kingsford Junction","companyname":"Deckow, Weissnat and Tromp","tradeid":"19","lon":"7.34122","lat":"9.00248","ratetotal":"98","totaljobs":"94","traveldist":"242","email":"cgrundybq@w3.org","distance":"6.7 mls"},{"id":"999","tradername":"Rea","address":"772 Westerfield Avenue","companyname":"Smith-Berge","tradeid":"8","lon":"7.21769","lat":"9.1447","ratetotal":"48","totaljobs":"195","traveldist":"458","email":"rfluterq@trellian.com","distance":"13.9 mls"},{"id":"426","tradername":"Cathyleen","address":"08366 Hazelcrest Circle","companyname":"Cronin Inc","tradeid":"2","lon":"7.1859","lat":"9.03645","ratetotal":"83","totaljobs":"200","traveldist":"82","email":"cgrzeskowskibt@kickstarter.com","distance":"15.4 mls"},{"id":"581","tradername":"Smitty","address":"92466 Meadow Valley Court","companyname":"Hermann and Sons","tradeid":"25","lon":"7.40109","lat":"9.32202","ratetotal":"55","totaljobs":"479","traveldist":"415","email":"smatteng4@taobao.com","distance":"17.1 mls"},{"id":"473","tradername":"Odie","address":"6 Thompson Plaza","companyname":"Okuneva Group","tradeid":"4","lon":"7.13413","lat":"9.08308","ratetotal":"76","totaljobs":"150","traveldist":"389","email":"oastied4@state.tx.us","distance":"18.7 mls"},{"id":"114","tradername":"Fons","address":"3889 Mayfield Way","companyname":"Zboncak Inc","tradeid":"9","lon":"7.52536","lat":"8.82844","ratetotal":"56","totaljobs":"286","traveldist":"142","email":"fmcdermottrow35@engadget.com","distance":"18.7 mls"},{"id":"774","tradername":"Dolorita","address":"60 Clarendon Trail","companyname":"Torp, Mraz and King","tradeid":"26","lon":"7.1418","lat":"8.95922","ratetotal":"56","totaljobs":"486","traveldist":"246","email":"dboramlh@google.ca","distance":"19.8 mls"},{"id":"17","tradername":"Orbadiah","address":"7770 Summerview Point","companyname":"Altenwerth LLC","tradeid":"5","lon":"7.2665","lat":"8.79729","ratetotal":"13","totaljobs":"314","traveldist":"75","email":"olandellg@dmoz.org","distance":"21.4 mls"},{"id":"239","tradername":"Natalee","address":"8897 Dennis Parkway","companyname":"Ernser LLC","tradeid":"32","lon":"7.7197","lat":"8.98858","ratetotal":"27","totaljobs":"371","traveldist":"451","email":"nbenner6m@cbslocal.com","distance":"22 mls"},{"id":"50","tradername":"George","address":"820 High Crossing Center","companyname":"Mohr, Lakin and Dibbert","tradeid":"32","lon":"7.59764","lat":"8.79276","ratetotal":"97","totaljobs":"325","traveldist":"470","email":"gjacobs1d@msu.edu","distance":"23.3 mls"},{"id":"219","tradername":"Nannie","address":"266 Lunder Avenue","companyname":"Veum, King and Feeney","tradeid":"31","lon":"7.06848","lat":"9.02005","ratetotal":"51","totaljobs":"227","traveldist":"221","email":"ntosdevin62@discovery.com","distance":"23.5 mls"},{"id":"523","tradername":"Stillmann","address":"6551 Welch Street","companyname":"Schneider, Collins and Prohaska","tradeid":"34","lon":"7.64233","lat":"8.77689","ratetotal":"20","totaljobs":"522","traveldist":"316","email":"sbennedsenei@elegantthemes.com","distance":"26 mls"},{"id":"477","tradername":"Zabrina","address":"73486 Park Meadow Court","companyname":"Veum-Stroman","tradeid":"27","lon":"7.52658","lat":"9.44307","ratetotal":"49","totaljobs":"296","traveldist":"536","email":"zfloriod8@scientificamerican.com","distance":"26.7 mls"},{"id":"300","tradername":"Eugenio","address":"7819 Summerview Plaza","companyname":"Ledner, Fisher and Robel","tradeid":"1","lon":"7.05952","lat":"9.25128","ratetotal":"49","totaljobs":"161","traveldist":"494","email":"eodonohoe8b@flavors.me","distance":"26.7 mls"},{"id":"294","tradername":"Carroll","address":"2 Farmco Parkway","companyname":"Hilpert and Sons","tradeid":"27","lon":"7.66552","lat":"9.39382","ratetotal":"55","totaljobs":"375","traveldist":"203","email":"covernell85@cisco.com","distance":"28.2 mls"},{"id":"917","tradername":"Halli","address":"55 Corben Parkway","companyname":"Harvey LLC","tradeid":"32","lon":"6.98974","lat":"9.0565","ratetotal":"14","totaljobs":"43","traveldist":"174","email":"hgedgepg@archive.org","distance":"28.6 mls"},{"id":"131","tradername":"Austin","address":"6 Mallard Drive","companyname":"Frami-Torphy","tradeid":"7","lon":"7.82422","lat":"9.13759","ratetotal":"19","totaljobs":"82","traveldist":"259","email":"aschenfisch3m@webeden.co.uk","distance":"28.7 mls"},{"id":"493","tradername":"Dana","address":"298 Continental Pass","companyname":"Goyette Group","tradeid":"7","lon":"7.39266","lat":"8.65244","ratetotal":"10","totaljobs":"431","traveldist":"82","email":"dweltondo@digg.com","distance":"29.1 mls"},{"id":"731","tradername":"Karena","address":"55 Spohn Lane","companyname":"O\'Kon-Senger","tradeid":"22","lon":"7.39297","lat":"8.63817","ratetotal":"52","totaljobs":"559","traveldist":"341","email":"kwiddallka@163.com","distance":"30.1 mls"},{"id":"18","tradername":"Angus","address":"01 Fisk Court","companyname":"Mertz-Bartoletti","tradeid":"34","lon":"7.41597","lat":"8.62138","ratetotal":"39","totaljobs":"503","traveldist":"585","email":"alongriggh@drupal.org","distance":"31.2 mls"},{"id":"556","tradername":"Lyndel","address":"7472 Cascade Point","companyname":"Tremblay, Hettinger and Padberg","tradeid":"8","lon":"6.99092","lat":"9.29195","ratetotal":"59","totaljobs":"203","traveldist":"250","email":"lweatherhillff@ibm.com","distance":"32.2 mls"},{"id":"267","tradername":"Lynnet","address":"947 Cambridge Court","companyname":"Hansen, Kunze and Price","tradeid":"21","lon":"7.87566","lat":"8.99804","ratetotal":"36","totaljobs":"294","traveldist":"147","email":"llaidlaw7e@wiley.com","distance":"32.3 mls"},{"id":"392","tradername":"Darla","address":"90 Debs Avenue","companyname":"Rempel and Sons","tradeid":"20","lon":"7.3645","lat":"9.54233","ratetotal":"4","totaljobs":"463","traveldist":"161","email":"dspringav@amazonaws.com","distance":"32.5 mls"},{"id":"756","tradername":"Crichton","address":"3428 Northfield Avenue","companyname":"Goodwin-Schneider","tradeid":"35","lon":"7.74168","lat":"8.72554","ratetotal":"88","totaljobs":"520","traveldist":"263","email":"csowersbykz@altervista.org","distance":"33.1 mls"},{"id":"310","tradername":"Filippo","address":"72045 7th Place","companyname":"Weimann Inc","tradeid":"32","lon":"7.41044","lat":"9.57037","ratetotal":"79","totaljobs":"389","traveldist":"133","email":"fmalyon8l@naver.com","distance":"34.3 mls"},{"id":"530","tradername":"Morey","address":"6 Springview Street","companyname":"Eichmann-Gleichner","tradeid":"10","lon":"7.71585","lat":"9.46915","ratetotal":"49","totaljobs":"323","traveldist":"366","email":"mpadghamep@cargocollective.com","distance":"34.4 mls"},{"id":"466","tradername":"Tracy","address":"48 Eggendart Park","companyname":"Rath-Jacobi","tradeid":"2","lon":"7.32563","lat":"9.57467","ratetotal":"90","totaljobs":"463","traveldist":"473","email":"tdowderswellcx@prweb.com","distance":"35 mls"},{"id":"58","tradername":"Toinette","address":"3433 Kenwood Drive","companyname":"Smitham, Cummerata and Streich","tradeid":"8","lon":"7.64491","lat":"9.52564","ratetotal":"36","totaljobs":"106","traveldist":"50","email":"tdefraine1l@mysql.com","distance":"35.1 mls"},{"id":"268","tradername":"Abby","address":"074 Dunning Way","companyname":"Rohan, Sipes and Mitchell","tradeid":"4","lon":"7.73134","lat":"9.47039","ratetotal":"44","totaljobs":"369","traveldist":"363","email":"anoden7f@redcross.org","distance":"35.1 mls"},{"id":"235","tradername":"Micheal","address":"7 Norway Maple Alley","companyname":"Blanda-Blanda","tradeid":"5","lon":"7.22111","lat":"9.55286","ratetotal":"88","totaljobs":"245","traveldist":"136","email":"mstainton6i@upenn.edu","distance":"35.4 mls"},{"id":"716","tradername":"Mercie","address":"8 Village Green Parkway","companyname":"Goyette-Turcotte","tradeid":"8","lon":"6.98681","lat":"9.38131","ratetotal":"68","totaljobs":"482","traveldist":"490","email":"mmosenjv@independent.co.uk","distance":"35.7 mls"},{"id":"255","tradername":"Celesta","address":"49 Riverside Road","companyname":"Lang, Schroeder and Hessel","tradeid":"8","lon":"7.93616","lat":"8.98565","ratetotal":"57","totaljobs":"451","traveldist":"138","email":"carger72@toplist.cz","distance":"36.5 mls"},{"id":"449","tradername":"Mano","address":"4 Kedzie Circle","companyname":"Satterfield-Graham","tradeid":"21","lon":"7.88701","lat":"9.32185","ratetotal":"53","totaljobs":"97","traveldist":"337","email":"mfarrentcg@booking.com","distance":"36.8 mls"},{"id":"931","tradername":"Waiter","address":"492 Dwight Park","companyname":"Herman and Sons","tradeid":"28","lon":"7.30664","lat":"9.60028","ratetotal":"60","totaljobs":"327","traveldist":"356","email":"wbidgodpu@gmpg.org","distance":"37 mls"},{"id":"736","tradername":"Antonio","address":"6 Bultman Place","companyname":"Hodkiewicz and Sons","tradeid":"9","lon":"7.15075","lat":"9.55601","ratetotal":"1","totaljobs":"229","traveldist":"505","email":"ajobbinskf@google.com","distance":"37.6 mls"},{"id":"902","tradername":"Eddie","address":"5 Stephen Avenue","companyname":"Predovic Inc","tradeid":"3","lon":"7.80435","lat":"9.45537","ratetotal":"70","totaljobs":"248","traveldist":"454","email":"ehanabyp1@scribd.com","distance":"37.7 mls"},{"id":"643","tradername":"Hyacinthe","address":"3 Melby Junction","companyname":"Runte-Spencer","tradeid":"29","lon":"7.46001","lat":"8.52427","ratetotal":"42","totaljobs":"293","traveldist":"499","email":"hadamehu@eventbrite.com","distance":"38.1 mls"},{"id":"23","tradername":"Patrick","address":"025 Monica Lane","companyname":"Hauck, Toy and Fisher","tradeid":"11","lon":"6.92744","lat":"9.37246","ratetotal":"13","totaljobs":"306","traveldist":"247","email":"pticicm@vk.com","distance":"38.7 mls"},{"id":"812","tradername":"Ada","address":"2463 David Parkway","companyname":"Kris Group","tradeid":"25","lon":"6.97116","lat":"8.67406","ratetotal":"31","totaljobs":"334","traveldist":"466","email":"alippittmj@nature.com","distance":"40.6 mls"}';
      //this.setState({
      //  traders: data,
      //  isLoading: false,
      //})
      console.log(this.state.traders)
  }

  handleCurrency = (e) => {
     const index = e.nativeEvent.target.selectedIndex;
     let currLabel = e.nativeEvent.target[index].text
    
    const filtTrader = this.state.traders.filter( (item) => {
        return item.tradeid === e.nativeEvent.target[index].value
    })

    console.log("E was : ",  e.nativeEvent.target[index].value)
    this.setState({
      selectedTrade: e.nativeEvent.target[index].value,
      filteredTraders: filtTrader

    })
    }

  fetchTrades = async () => {
    // Where are we fetching data from
    console.log("in fetchTrades")
    console.log(this.state)
    // var fetchUrl = `http://gogonigeria.byethost18.com/api.php?lon=${this.state.lon}&lat=${this.state.lat}&dist=${this.state.dist}` 
    // 
    var fetchUrl = `trades.json?lon=${this.state.lon}&lat=${this.state.lat}&dist=${this.state.dist}` 
    console.log("fetchURL ", fetchUrl)
    await fetch(fetchUrl)
      // We get the API response then receive data in JSON...
      .then(response => response.json())
      // Normally would use a store like redux
      // being this example demo - simpler to it do this way.. 
      //.then(sorted => console.log("Sorted by", sorted))
      // finally data should look good - so set the state.
      .then(data =>
        this.setState({
          trades: data,
          isLoading: false,
        })
      )
      // Catch any unknowns (errors) and update loading status
      .catch(error => this.setState({ error, isLoading: false }));
      //let data = '[{"id":"423","tradername":"Ches","address":"533 Kingsford Junction","companyname":"Deckow, Weissnat and Tromp","tradeid":"19","lon":"7.34122","lat":"9.00248","ratetotal":"98","totaljobs":"94","traveldist":"242","email":"cgrundybq@w3.org","distance":"6.7 mls"},{"id":"999","tradername":"Rea","address":"772 Westerfield Avenue","companyname":"Smith-Berge","tradeid":"8","lon":"7.21769","lat":"9.1447","ratetotal":"48","totaljobs":"195","traveldist":"458","email":"rfluterq@trellian.com","distance":"13.9 mls"},{"id":"426","tradername":"Cathyleen","address":"08366 Hazelcrest Circle","companyname":"Cronin Inc","tradeid":"2","lon":"7.1859","lat":"9.03645","ratetotal":"83","totaljobs":"200","traveldist":"82","email":"cgrzeskowskibt@kickstarter.com","distance":"15.4 mls"},{"id":"581","tradername":"Smitty","address":"92466 Meadow Valley Court","companyname":"Hermann and Sons","tradeid":"25","lon":"7.40109","lat":"9.32202","ratetotal":"55","totaljobs":"479","traveldist":"415","email":"smatteng4@taobao.com","distance":"17.1 mls"},{"id":"473","tradername":"Odie","address":"6 Thompson Plaza","companyname":"Okuneva Group","tradeid":"4","lon":"7.13413","lat":"9.08308","ratetotal":"76","totaljobs":"150","traveldist":"389","email":"oastied4@state.tx.us","distance":"18.7 mls"},{"id":"114","tradername":"Fons","address":"3889 Mayfield Way","companyname":"Zboncak Inc","tradeid":"9","lon":"7.52536","lat":"8.82844","ratetotal":"56","totaljobs":"286","traveldist":"142","email":"fmcdermottrow35@engadget.com","distance":"18.7 mls"},{"id":"774","tradername":"Dolorita","address":"60 Clarendon Trail","companyname":"Torp, Mraz and King","tradeid":"26","lon":"7.1418","lat":"8.95922","ratetotal":"56","totaljobs":"486","traveldist":"246","email":"dboramlh@google.ca","distance":"19.8 mls"},{"id":"17","tradername":"Orbadiah","address":"7770 Summerview Point","companyname":"Altenwerth LLC","tradeid":"5","lon":"7.2665","lat":"8.79729","ratetotal":"13","totaljobs":"314","traveldist":"75","email":"olandellg@dmoz.org","distance":"21.4 mls"},{"id":"239","tradername":"Natalee","address":"8897 Dennis Parkway","companyname":"Ernser LLC","tradeid":"32","lon":"7.7197","lat":"8.98858","ratetotal":"27","totaljobs":"371","traveldist":"451","email":"nbenner6m@cbslocal.com","distance":"22 mls"},{"id":"50","tradername":"George","address":"820 High Crossing Center","companyname":"Mohr, Lakin and Dibbert","tradeid":"32","lon":"7.59764","lat":"8.79276","ratetotal":"97","totaljobs":"325","traveldist":"470","email":"gjacobs1d@msu.edu","distance":"23.3 mls"},{"id":"219","tradername":"Nannie","address":"266 Lunder Avenue","companyname":"Veum, King and Feeney","tradeid":"31","lon":"7.06848","lat":"9.02005","ratetotal":"51","totaljobs":"227","traveldist":"221","email":"ntosdevin62@discovery.com","distance":"23.5 mls"},{"id":"523","tradername":"Stillmann","address":"6551 Welch Street","companyname":"Schneider, Collins and Prohaska","tradeid":"34","lon":"7.64233","lat":"8.77689","ratetotal":"20","totaljobs":"522","traveldist":"316","email":"sbennedsenei@elegantthemes.com","distance":"26 mls"},{"id":"477","tradername":"Zabrina","address":"73486 Park Meadow Court","companyname":"Veum-Stroman","tradeid":"27","lon":"7.52658","lat":"9.44307","ratetotal":"49","totaljobs":"296","traveldist":"536","email":"zfloriod8@scientificamerican.com","distance":"26.7 mls"},{"id":"300","tradername":"Eugenio","address":"7819 Summerview Plaza","companyname":"Ledner, Fisher and Robel","tradeid":"1","lon":"7.05952","lat":"9.25128","ratetotal":"49","totaljobs":"161","traveldist":"494","email":"eodonohoe8b@flavors.me","distance":"26.7 mls"},{"id":"294","tradername":"Carroll","address":"2 Farmco Parkway","companyname":"Hilpert and Sons","tradeid":"27","lon":"7.66552","lat":"9.39382","ratetotal":"55","totaljobs":"375","traveldist":"203","email":"covernell85@cisco.com","distance":"28.2 mls"},{"id":"917","tradername":"Halli","address":"55 Corben Parkway","companyname":"Harvey LLC","tradeid":"32","lon":"6.98974","lat":"9.0565","ratetotal":"14","totaljobs":"43","traveldist":"174","email":"hgedgepg@archive.org","distance":"28.6 mls"},{"id":"131","tradername":"Austin","address":"6 Mallard Drive","companyname":"Frami-Torphy","tradeid":"7","lon":"7.82422","lat":"9.13759","ratetotal":"19","totaljobs":"82","traveldist":"259","email":"aschenfisch3m@webeden.co.uk","distance":"28.7 mls"},{"id":"493","tradername":"Dana","address":"298 Continental Pass","companyname":"Goyette Group","tradeid":"7","lon":"7.39266","lat":"8.65244","ratetotal":"10","totaljobs":"431","traveldist":"82","email":"dweltondo@digg.com","distance":"29.1 mls"},{"id":"731","tradername":"Karena","address":"55 Spohn Lane","companyname":"O\'Kon-Senger","tradeid":"22","lon":"7.39297","lat":"8.63817","ratetotal":"52","totaljobs":"559","traveldist":"341","email":"kwiddallka@163.com","distance":"30.1 mls"},{"id":"18","tradername":"Angus","address":"01 Fisk Court","companyname":"Mertz-Bartoletti","tradeid":"34","lon":"7.41597","lat":"8.62138","ratetotal":"39","totaljobs":"503","traveldist":"585","email":"alongriggh@drupal.org","distance":"31.2 mls"},{"id":"556","tradername":"Lyndel","address":"7472 Cascade Point","companyname":"Tremblay, Hettinger and Padberg","tradeid":"8","lon":"6.99092","lat":"9.29195","ratetotal":"59","totaljobs":"203","traveldist":"250","email":"lweatherhillff@ibm.com","distance":"32.2 mls"},{"id":"267","tradername":"Lynnet","address":"947 Cambridge Court","companyname":"Hansen, Kunze and Price","tradeid":"21","lon":"7.87566","lat":"8.99804","ratetotal":"36","totaljobs":"294","traveldist":"147","email":"llaidlaw7e@wiley.com","distance":"32.3 mls"},{"id":"392","tradername":"Darla","address":"90 Debs Avenue","companyname":"Rempel and Sons","tradeid":"20","lon":"7.3645","lat":"9.54233","ratetotal":"4","totaljobs":"463","traveldist":"161","email":"dspringav@amazonaws.com","distance":"32.5 mls"},{"id":"756","tradername":"Crichton","address":"3428 Northfield Avenue","companyname":"Goodwin-Schneider","tradeid":"35","lon":"7.74168","lat":"8.72554","ratetotal":"88","totaljobs":"520","traveldist":"263","email":"csowersbykz@altervista.org","distance":"33.1 mls"},{"id":"310","tradername":"Filippo","address":"72045 7th Place","companyname":"Weimann Inc","tradeid":"32","lon":"7.41044","lat":"9.57037","ratetotal":"79","totaljobs":"389","traveldist":"133","email":"fmalyon8l@naver.com","distance":"34.3 mls"},{"id":"530","tradername":"Morey","address":"6 Springview Street","companyname":"Eichmann-Gleichner","tradeid":"10","lon":"7.71585","lat":"9.46915","ratetotal":"49","totaljobs":"323","traveldist":"366","email":"mpadghamep@cargocollective.com","distance":"34.4 mls"},{"id":"466","tradername":"Tracy","address":"48 Eggendart Park","companyname":"Rath-Jacobi","tradeid":"2","lon":"7.32563","lat":"9.57467","ratetotal":"90","totaljobs":"463","traveldist":"473","email":"tdowderswellcx@prweb.com","distance":"35 mls"},{"id":"58","tradername":"Toinette","address":"3433 Kenwood Drive","companyname":"Smitham, Cummerata and Streich","tradeid":"8","lon":"7.64491","lat":"9.52564","ratetotal":"36","totaljobs":"106","traveldist":"50","email":"tdefraine1l@mysql.com","distance":"35.1 mls"},{"id":"268","tradername":"Abby","address":"074 Dunning Way","companyname":"Rohan, Sipes and Mitchell","tradeid":"4","lon":"7.73134","lat":"9.47039","ratetotal":"44","totaljobs":"369","traveldist":"363","email":"anoden7f@redcross.org","distance":"35.1 mls"},{"id":"235","tradername":"Micheal","address":"7 Norway Maple Alley","companyname":"Blanda-Blanda","tradeid":"5","lon":"7.22111","lat":"9.55286","ratetotal":"88","totaljobs":"245","traveldist":"136","email":"mstainton6i@upenn.edu","distance":"35.4 mls"},{"id":"716","tradername":"Mercie","address":"8 Village Green Parkway","companyname":"Goyette-Turcotte","tradeid":"8","lon":"6.98681","lat":"9.38131","ratetotal":"68","totaljobs":"482","traveldist":"490","email":"mmosenjv@independent.co.uk","distance":"35.7 mls"},{"id":"255","tradername":"Celesta","address":"49 Riverside Road","companyname":"Lang, Schroeder and Hessel","tradeid":"8","lon":"7.93616","lat":"8.98565","ratetotal":"57","totaljobs":"451","traveldist":"138","email":"carger72@toplist.cz","distance":"36.5 mls"},{"id":"449","tradername":"Mano","address":"4 Kedzie Circle","companyname":"Satterfield-Graham","tradeid":"21","lon":"7.88701","lat":"9.32185","ratetotal":"53","totaljobs":"97","traveldist":"337","email":"mfarrentcg@booking.com","distance":"36.8 mls"},{"id":"931","tradername":"Waiter","address":"492 Dwight Park","companyname":"Herman and Sons","tradeid":"28","lon":"7.30664","lat":"9.60028","ratetotal":"60","totaljobs":"327","traveldist":"356","email":"wbidgodpu@gmpg.org","distance":"37 mls"},{"id":"736","tradername":"Antonio","address":"6 Bultman Place","companyname":"Hodkiewicz and Sons","tradeid":"9","lon":"7.15075","lat":"9.55601","ratetotal":"1","totaljobs":"229","traveldist":"505","email":"ajobbinskf@google.com","distance":"37.6 mls"},{"id":"902","tradername":"Eddie","address":"5 Stephen Avenue","companyname":"Predovic Inc","tradeid":"3","lon":"7.80435","lat":"9.45537","ratetotal":"70","totaljobs":"248","traveldist":"454","email":"ehanabyp1@scribd.com","distance":"37.7 mls"},{"id":"643","tradername":"Hyacinthe","address":"3 Melby Junction","companyname":"Runte-Spencer","tradeid":"29","lon":"7.46001","lat":"8.52427","ratetotal":"42","totaljobs":"293","traveldist":"499","email":"hadamehu@eventbrite.com","distance":"38.1 mls"},{"id":"23","tradername":"Patrick","address":"025 Monica Lane","companyname":"Hauck, Toy and Fisher","tradeid":"11","lon":"6.92744","lat":"9.37246","ratetotal":"13","totaljobs":"306","traveldist":"247","email":"pticicm@vk.com","distance":"38.7 mls"},{"id":"812","tradername":"Ada","address":"2463 David Parkway","companyname":"Kris Group","tradeid":"25","lon":"6.97116","lat":"8.67406","ratetotal":"31","totaljobs":"334","traveldist":"466","email":"alippittmj@nature.com","distance":"40.6 mls"}';
      //this.setState({
      //  traders: data,
      //  isLoading: false,
      //})
      console.log(this.state.trades)
  }



  async componentDidMount() {
    // await this.getLocation()

    console.log(this.state)
    await this.fetchTraders()
    await this.fetchTrades()
    await this.fixJson()
    //var x = document.getElementById("demo");

    
  }

  findTradeById(id) {
    return this.state.trades.filter( t => {
      if(t.tradeid === id) {
        return t.tradename
      } })
  }

  async fixJson() {
    var fixedJson = this.state.traders.map( t => {
      t.tradeName = this.findTradeById(t.id)
      return t.tradeName = this.findTradeById(t.id)[0]
    })
    console.log("fixed JSON", fixedJson)

    //this.setState({ traders: fixedJson })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://picsum.photos/200/300" className="App-logo float-left float-lg-left" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TradeSelect trades={this.state.trades} onTradeChange={this.handleCurrency}></TradeSelect>
          <Traders traders={this.state.filteredTraders} selectedTrade={this.state.selectedTrade}> </Traders>

          {/* <Traders traders={this.state.traders} selectedTrade={this.state.selectedTrade}> </Traders>
           */}
          <div id="debug_info"></div>
        </header>
      </div>
    );
  }
}

export default App;
