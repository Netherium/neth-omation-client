import {Component, OnInit} from '@angular/core';
import 'wired-elements';
import {GpioService} from '../services/gpio.service';
import {LedEvent} from '../models/ledEvent.model';
import {LaserEvent} from '../models/laserEvent.model';
import {TemperatureEvent} from '../models/temperatureEvent.model';
import {RgbEvent} from '../models/rgbEvent.model';


@Component({
  selector: 'app-rpi-control',
  templateUrl: './rpi-control.component.html',
  styleUrls: ['./rpi-control.component.css']
})
export class RpiControlComponent implements OnInit {
  ioConnection: any;
  public led: LedEvent;
  public laser: LaserEvent;
  public rgb: RgbEvent;
  public temperature: TemperatureEvent;

  constructor(private gpioService: GpioService) {
  }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.gpioService.initSocket();
    this.ioConnection = this.gpioService.onLed()
        .subscribe((data: LedEvent) => {
          console.log('On Led', data);
          this.led = data;
        });
    this.ioConnection = this.gpioService.onLaser()
        .subscribe((data: LedEvent) => {
          console.log(data);
          this.laser = data;
        });
    this.ioConnection = this.gpioService.onRGB()
        .subscribe((data: RgbEvent) => {
          console.log(data);
          this.rgb = data;
        });
    this.ioConnection = this.gpioService.onTemperature()
        .subscribe((data: TemperatureEvent) => {
          console.log(data);
          this.temperature = data;
        });
  }

  public changeLed() {
    console.log('changing led status from client');
    this.gpioService.changeLed({'status': !this.led.status});
  }

  public changeLaser() {
    console.log('changinga laser status from client');
    this.gpioService.changeLaser({'status': !this.laser.status});
  }

  public changeRGB(data) {
    this.rgb = {
      red : parseInt(data.red, 10),
      green: parseInt(data.green, 10),
      blue: parseInt(data.blue, 10)
    };
    console.log('Changing rgb status from client', data);
    this.gpioService.changeRGB(this.rgb);
  }
}
