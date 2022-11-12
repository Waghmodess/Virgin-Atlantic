import { Component, OnInit } from '@angular/core';

export interface Card {
  img: string,
  title: string,
  desc: string,
  button:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards: Card[] = [
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210728T1218583200400.html/content/dam/Everymundo/london%20hero.jpg",
      title: "Flights from Delhi",
      desc: "Check out our faresdirect from Delhi to the UK and beyond.",
      button:"Flights from Delhi"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20200203T1120062040500.html/content/dam/vaa/email/refresh/welcome/2-london.jpg",
      title: "Flights from Mumbai",
      desc: "Check out our fares direct from Mumbai to the UK and beyond.",
      button:"Flights from Mumbai"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20210624T0959365370400.html/content/dam/vaablog/images/article/00323DGVirgin-Atlantic.jpg",
      title: "Flights from Goa",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Goa.",
      button:"Flights from Goa"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20211025T1029409220400.html/content/dam/vaa/Site%20Imagery/homepage/new%20york%20skyline.jpg",
      title: "Flights from Ahmedabad",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Ahmedabad.",
      button:"Flights from Ahmedabad"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20181114T0509267390500.html/content/dam/vaa/Site%20Imagery/flight-and-hotel/travelplus-los-angeles-pod.jpg",
      title: "Flights from Amritsar",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Amritsar.",
      button:"Flights from Amritsar"
    },
    {
      img: "https://content.virginatlantic.com/content/vaa/www/in/en/home.damAssetRender.20190916T1738415720400.html/content/dam/vaa/Personalization-Images/atlanta-2.jpg",
      title: "Flights from Kolkata",
      desc: "Connect to your Virgin Atlantic flight to London and beyond from Kolkata.",
      button:"Flights from Kolkata"
    }
  ]

  ngOnInit(): void {
  }
}