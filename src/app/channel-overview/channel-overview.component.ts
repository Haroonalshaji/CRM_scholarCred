import { Component } from '@angular/core';

@Component({
  selector: 'app-channel-overview',
  templateUrl: './channel-overview.component.html',
  styleUrls: ['./channel-overview.component.css']
})
export class ChannelOverviewComponent {
  data: any;
  options: any;
  donutdata: {
    labels: string[]; datasets: {
      data: number[]; // Values for each segment
      backgroundColor: string[]; // Colors for each segment
      hoverBackgroundColor: string[];
    }[];
  };
  dnutoptions: { responsive: boolean; plugins: { legend: { display: boolean; position: string; }; tooltip: { callbacks: { label: (tooltipItem: any) => string; }; }; }; };
  constructor() {
    this.data = {
      labels: ['Google Ads', 'Social Media', 'Referrals',],
      datasets: [
        {
          label: 'Leads',
          backgroundColor: '#0C4B6F',
          data: [65, 59, 80, 81, 56, 55],
        },
        {
          label: 'Conversions',
          backgroundColor: '#00A6D9',
          data: [28, 48, 40, 19, 86, 27],
        },
      ],
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true, // Try without stepSize for testing
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
    };



    this.donutdata = {
      labels: ['Google Ads', 'Social Media', 'Referrals'],
      datasets: [
        {
          data: [100, 300, 200], // Values for each segment
          backgroundColor: ['#0C4B6F', '#00A6D9', '#FFC107'], // Colors for each segment
          hoverBackgroundColor: ['#0B3D55', '#008CBA', '#E0A800'], // Colors on hover
        },
      ],
    };

    this.dnutoptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`; // Display label and value
            },
          },
        },
      },
    };
  }
}
