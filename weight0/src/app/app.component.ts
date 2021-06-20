import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as Chart from 'chart.js';
import { switchMap } from 'rxjs/operators';
import { DatabaseService, WeightRecord } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weight0';
  hide = true;
  submitted = false;

  constructor(public fb: FormBuilder, public database: DatabaseService) {
    this.database.getAll().subscribe((all) => {
      this.setChart(all);
    });
  }

  calculateChartValues(all: WeightRecord[]) {
    const chartdata: any[] = [];
    all.forEach((rec) => {
      chartdata.push({ y: rec.weight.valueOf(), t: rec.date });
    });

    return { chartdata: chartdata };
  }

  setChart(all: WeightRecord[]) {
    const { chartdata } = this.calculateChartValues(all);
    const data = {
      datasets: [
        {
          data: chartdata,
          fill: false,
          borderColor: 'rgba(255, 255, 255,0.45)',
          tension: 0.4,
        },
      ],
    };
    const config = {
      type: 'line',
      data: data,
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                callback: function (value: any, index: any, values: any) {
                  return '';
                },
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              type: 'time',

              ticks: {
                callback: function (value: any, index: any, values: any) {
                  return '';
                },
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems: any, data: any) {
              return 'weight' + ': ' + tooltipItems.yLabel + ' kg';
            },
          },
        },
      },
    };
    const chartElement: HTMLCanvasElement = document.querySelector(
      '#myChart'
    ) as HTMLCanvasElement;

    const myChart = new Chart(chartElement, config);
  }

  registrationForm = this.fb.group({
    weight: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
    date: ['', [Validators.required]],
  });

  onSubmit() {
    const fromInput = this.registrationForm.value;

    if (this.isValid()) {
      const record: WeightRecord = {
        weight: fromInput.weight,
        date: fromInput.date,
      };
      this.database
        .setRecord(record)
        .pipe(
          switchMap(() => {
            return this.database.getAll();
          })
        )
        .subscribe((r) => {
          console.log(r);
          this.setChart(r);
        });
    }
    this.submitted = true;
  }

  isValid() {
    this.registrationForm;

    return true;
  }
}
