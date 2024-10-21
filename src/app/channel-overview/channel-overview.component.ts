import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexTheme,
  ApexResponsive,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;



};
export type ChartOptions1 = {
  series1: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};


@Component({
  selector: 'app-channel-overview',
  templateUrl: './channel-overview.component.html',
  styleUrls: ['./channel-overview.component.css']
})
export class ChannelOverviewComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
  data: any;
  options: any;

  // donutdata: {
  //   labels: string[]; datasets: {
  //     data: number[]; // Values for each segment
  //     backgroundColor: string[]; // Colors for each segment
  //     hoverBackgroundColor: string[];
  //   }[];
  // };
  // dnutoptions: { responsive: boolean; plugins: { legend: { display: boolean; position: string; }; tooltip: { callbacks: { label: (tooltipItem: any) => string; }; }; }; };
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Converted",
          data: [45, 52, 38]
        },
        // {
        //   name: "Page Views",
        //   data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        // },
        {
          name: "Total Leads",
          data: [87, 57, 74]
        }
      ],
      chart: {
        events: {
          mounted: function (chartContext, options) {
            // Custom logic if needed after chart is mounted
          },
          updated: function (chartContext, options) {
            // Custom logic if needed after chart is updated
          }
        },
        animations: {
          enabled: false // If animation is causing the issue, disabling it may help
        },
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Channel Overview",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "Google Ads",
          "Socials",
          "Referrals",
        ]
      },
      // tooltip: {
      //   y: [
      //     {
      //       title: {
      //         formatter: function (val) {
      //           return val + " (mins)";
      //         }
      //       }
      //     },
      //     {
      //       title: {
      //         formatter: function (val) {
      //           return val + " per session";
      //         }
      //       }
      //     },
      //     {
      //       title: {
      //         formatter: function (val) {
      //           return val;
      //         }
      //       }
      //     }
      //   ]
      // },
      grid: {
        borderColor: "#f1f1f1"
      }
    };


    this.chartOptions1 = {
      series1: [20, 30, 50],
      chart: {
        events: {
          mounted: function (chartContext, options) {
            // Custom logic if needed after chart is mounted
          },
          updated: function (chartContext, options) {
            // Custom logic if needed after chart is updated
          }
        },
        animations: {
          enabled: false // If animation is causing the issue, disabling it may help
        },

        width: 250,
        type: 'polarArea'
      },
      labels: ['Referrals', 'Google Ads', 'Socials'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          }
        }
      },
      theme: {
        monochrome: {
          //    enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    };


    // this.data = {
    //   labels: ['Google Ads', 'Social Media', 'Referrals',],
    //   datasets: [
    //     {
    //       label: 'Leads',
    //       backgroundColor: '#0C4B6F',
    //       data: [65, 59, 80, 81, 56, 55],
    //     },
    //     {
    //       label: 'Conversions',
    //       backgroundColor: '#00A6D9',
    //       data: [28, 48, 40, 19, 86, 27],
    //     },
    //   ],
    // };
    // this.options = {
    //   responsive: true,
    //   maintainAspectRatio: false,
    //   scales: {
    //     y: {
    //       beginAtZero: true, // Try without stepSize for testing
    //     },
    //   },
    //   plugins: {
    //     legend: {
    //       display: true,
    //       position: 'top',
    //     },
    //   },
    // };



    // this.donutdata = {
    //   labels: ['Google Ads', 'Social Media', 'Referrals'],
    //   datasets: [
    //     {
    //       data: [100, 300, 200], // Values for each segment
    //       backgroundColor: ['#0C4B6F', '#00A6D9', '#FFC107'], // Colors for each segment
    //       hoverBackgroundColor: ['#0B3D55', '#008CBA', '#E0A800'], // Colors on hover
    //     },
    //   ],
    // };

    // this.dnutoptions = {
    //   responsive: true,
    //   plugins: {
    //     legend: {
    //       display: true,
    //       position: 'top',
    //     },
    //     tooltip: {
    //       callbacks: {
    //         label: function (tooltipItem) {
    //           return `${tooltipItem.label}: ${tooltipItem.raw}`; // Display label and value
    //         },
    //       },
    //     },
    //   },
    // };
  }
}
