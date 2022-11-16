import { Component, OnInit } from '@angular/core';

export interface Card {
  img: string,
  title: string,
  desc: string,
  button: string
}

export interface Card1 {
  img: string,
  title: string,
  desc: string,
  button: string
}

export interface Card2 {
  img: string,
  title: string,
  desc: string,
  button: string
}

export interface Card3 {
  img: string,
  title: string,
  desc: string,
  button: string
}

export interface Card4 {
  img: string,
  title: string,
  desc: string,
  button: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgUrl: string = "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210420T0745482110400.html/content/dam/Everymundo/web-exclusive-deals.jpg"
  studImg: string = "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20180704T1226563510400.html/content/dam/vaa/Site%20Imagery/campaigns/hk/student-fares-row.jpg"
  constructor() { }

  cards: Card[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210728T1218583200400.html/content/dam/Everymundo/london%20hero.jpg",
      title: "Flights from Delhi",
      desc: "Check out our fares direct from Delhi to the United Kingdom and beyond.",
      button: "Flights from Delhi"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20200203T1120062040500.html/content/dam/vaa/email/refresh/welcome/2-london.jpg",
      title: "Flights from Mumbai",
      desc: "Check out our fares direct from Mumbai to the United Kingdom and beyond.",
      button: "Flights from Mumbai"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210624T0959365370400.html/content/dam/vaablog/images/article/00323DGVirgin-Atlantic.jpg",
      title: "Flights from Goa",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Goa.",
      button: "Flights from Goa"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20211025T1029409220400.html/content/dam/vaa/Site%20Imagery/homepage/new%20york%20skyline.jpg",
      title: "Flights from Ahmedabad",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Ahmedabad.",
      button: "Flights from Ahmedabad"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20181114T0509267390500.html/content/dam/vaa/Site%20Imagery/flight-and-hotel/travelplus-los-angeles-pod.jpg",
      title: "Flights from Amritsar",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Amritsar.",
      button: "Flights from Amritsar"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20190916T1738415720400.html/content/dam/vaa/Personalization-Images/atlanta-2.jpg",
      title: "Flights from Kolkata",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Kolkata.",
      button: "Flights from Kolkata"
    }
  ]

  cards1: Card1[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.0.html/content/dam/vaa/Site%20Imagery/homepage/idp/featured/new-york-promo.jpg",
      title: "Flights to New York",
      desc: "Explore New York's iconic buildings, baseball, world class shopping and eating and a great nightlife.",
      button: "Show flight deals"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.0.html/content/dam/vaa/Site%20Imagery/destinations/usa/los-angeles/Hollywood%20sign.jpg",
      title: "Flights to Los Angeles",
      desc: "The City of Angels might be famous for its Hollywood stars, but there’s more going on here than celebrity.",
      button: "Show flight deals"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.0.html/content/dam/vaa/Site%20Imagery/homepage/idp/featured/boston-promo.jpg",
      title: "Flights to Boston",
      desc: "Plan a trip to the birthplace of American democracy, with plenty of history and dramatic seasonal changes.",
      button: "Show flight deals"
    }
  ]

  cards2: Card2[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210721T0606099400400.html/content/dam/vaa/email/refresh/abandonbrowse/carousel/premium.jpg",
      title: "Fly Premium Economy",
      desc: "Experience award-winning premium travel. It's the little touches here and there that help you truly enjoy your time in the air.",
      button: "Find out more"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210125T1406107380500.html/content/dam/vaa/email/Upper.jpg",
      title: "Discover Upper Class",
      desc: "Experience the next level of luxurious travel, whether you're with us for business or pleasure, travelling in Virgin Atlantic Upper Class makes your journey something to look forward to.",
      button: "Find out more"
    }
  ]

  cards3: Card3[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20181112T0815528070500.html/content/dam/vaa/Site%20Imagery/homepage/idp/featured/generic-promo-700x483.jpg",
      title: "Our best student offer",
      desc: "A great offer when you travel to study in the UK.",
      button: "Find out more"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20200807T1043203720400.html/content/dam/vaa/Site%20Imagery/homepage/idp/hero/desktop/Covid-19-homepage.jpg",
      title: "You're in safe hands",
      desc: "Take a look at everything we're doing to ensue you fly safe.",
      button: "Find out more"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20200807T1043203720400.html/content/dam/vaa/Site%20Imagery/homepage/idp/hero/desktop/Covid-19-homepage.jpg",
      title: "COVID-19 Travel Advice",
      desc: "Check the latest travel updates for your destination.",
      button: "Find out more"
    }
  ]

  cards4: Card4[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210215T1252489220500.html/content/dam/vaa/Site%20Imagery/homepage/idp/featured/Check%20in.png",
      title: "Inflight entertainment",
      desc: "The hours will fly by, with over 100 movies onboard - from the latest Hollywood Blockbusters to indie gems.",
      button: "Now Showing"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210215T1252489220500.html/content/dam/vaa/Site%20Imagery/homepage/idp/featured/Check%20in.png",
      title: "Baggage unpacked",
      desc: "All you need to know about baggage allowance, what you can/can't take onboard and everything else inbetween.",
      button: "Come this way"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20180816T0715070240400.html/content/dam/vaa/Site%20Imagery/flying-club/earning-and-spending-miles/clubhouse-spa-image.jpg",
      title: "Flying Club",
      desc: "Join Flying Club for free and earn Virgin Points on every Virgin Atlantic flight, and redeem them on fabulous rewards like upgrades, flights and much more.",
      button: "Find out more"
    }
  ]

  ngOnInit(): void {
  }
}